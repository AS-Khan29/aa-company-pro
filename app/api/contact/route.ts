import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

// Nodemailer needs the Node.js runtime (not Edge).
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const text = (max: number) => z.string().trim().max(max);
const required = (max: number) => text(max).min(1);

const baseFields = {
  name: required(100),
  email: z.string().trim().email().max(200),
  company: text(150).optional().default(''),
  // Honeypot: real users never see or fill this field.
  website: text(200).optional().default(''),
};

const contactSchema = z.object({
  type: z.literal('contact'),
  ...baseFields,
  phone: text(40).optional().default(''),
  subject: required(200),
  message: required(5000),
});

const quoteSchema = z.object({
  type: z.literal('quote'),
  ...baseFields,
  phone: required(40),
  productCategory: required(100),
  productName: required(200),
  quantity: required(20),
  description: text(5000).optional().default(''),
});

const payloadSchema = z.discriminatedUnion('type', [contactSchema, quoteSchema]);

// --- Helpers ---------------------------------------------------------------

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

// Header values must never contain line breaks (header injection).
const oneLine = (value: string) => value.replace(/[\r\n]+/g, ' ').trim();

// Best-effort rate limit: 5 submissions / 10 minutes per IP per server instance.
// (Serverless instances don't share memory, so this only blunts casual abuse.)
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 500) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(key);
    }
  }
  return recent.length > MAX_PER_WINDOW;
}

function row(label: string, value: string) {
  if (!value) return '';
  return `<tr>
    <td style="padding:8px 12px;font-weight:600;color:#374151;white-space:nowrap;vertical-align:top;border-bottom:1px solid #e5e7eb;">${escapeHtml(label)}</td>
    <td style="padding:8px 12px;color:#111827;border-bottom:1px solid #e5e7eb;white-space:pre-wrap;">${escapeHtml(value)}</td>
  </tr>`;
}

function buildEmail(data: z.infer<typeof payloadSchema>) {
  const isQuote = data.type === 'quote';

  const fields: Array<[string, string]> = isQuote
    ? [
        ['Name', data.name],
        ['Email', data.email],
        ['Phone', data.phone],
        ['Company', data.company],
        ['Product category', data.productCategory],
        ['Product name', data.productName],
        ['Quantity', data.quantity],
        ['Additional details', data.description],
      ]
    : [
        ['Name', data.name],
        ['Email', data.email],
        ['Phone', data.phone],
        ['Company', data.company],
        ['Subject', data.subject],
        ['Message', data.message],
      ];

  const subject = isQuote
    ? `Quote Request: ${oneLine(data.productName)} (x${oneLine(data.quantity)}) - ${oneLine(data.name)}`
    : `Website Contact: ${oneLine(data.subject)} - ${oneLine(data.name)}`;

  const heading = isQuote ? 'New Quote Request' : 'New Contact Message';

  const html = `<div style="font-family:Arial,Helvetica,sans-serif;max-width:640px;margin:0 auto;">
    <h2 style="color:#0369a1;margin:0 0 4px;">${heading}</h2>
    <p style="color:#6b7280;margin:0 0 16px;font-size:13px;">Submitted via the A &amp; A Company website. Reply to this email to respond directly to the sender.</p>
    <table style="border-collapse:collapse;width:100%;font-size:14px;">
      ${fields.map(([label, value]) => row(label, value)).join('')}
    </table>
  </div>`;

  const plain =
    `${heading}\n\n` +
    fields
      .filter(([, value]) => value)
      .map(([label, value]) => `${label}: ${value}`)
      .join('\n');

  return { subject, html, plain };
}

// --- Handler ---------------------------------------------------------------

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Invalid request.' },
      { status: 400 }
    );
  }

  const parsed = payloadSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: 'Please check the form fields and try again.' },
      { status: 400 }
    );
  }
  const data = parsed.data;

  // Honeypot filled in => bot. Pretend success so it doesn't retry.
  if (data.website) {
    return NextResponse.json({ ok: true });
  }

  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: 'Too many requests. Please try again in a few minutes.' },
      { status: 429 }
    );
  }

  const user = process.env.ZOHO_SMTP_USER;
  const pass = process.env.ZOHO_SMTP_PASS;
  if (!user || !pass) {
    console.error('[contact] ZOHO_SMTP_USER / ZOHO_SMTP_PASS are not set.');
    return NextResponse.json(
      { ok: false, error: 'Email service is not configured.' },
      { status: 500 }
    );
  }

  const host = process.env.ZOHO_SMTP_HOST || 'smtp.zoho.com';
  const port = Number(process.env.ZOHO_SMTP_PORT || 465);
  const to = process.env.CONTACT_TO_EMAIL || user;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // 465 = SSL, 587 = STARTTLS
    auth: { user, pass },
  });

  const { subject, html, plain } = buildEmail(data);

  try {
    await transporter.sendMail({
      // Zoho only accepts the authenticated account (or its aliases) as sender.
      from: `"A & A Company Website" <${user}>`,
      to,
      replyTo: `"${oneLine(data.name).replace(/"/g, '')}" <${data.email}>`,
      subject,
      text: plain,
      html,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('[contact] Failed to send email via Zoho SMTP:', error);
    return NextResponse.json(
      { ok: false, error: 'Could not send your message. Please try again later.' },
      { status: 502 }
    );
  }
}
