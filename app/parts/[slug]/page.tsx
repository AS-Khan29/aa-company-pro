import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowRight,
  CheckCircle,
  Download,
  MessageCircle,
  Phone,
} from 'lucide-react';
import JsonLd from '@/components/JsonLd';
import { PARTS_PAGES, getPartsPage } from '@/lib/parts';
import { BUSINESS, SITE_NAME, SITE_URL, absoluteUrl } from '@/lib/site';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return PARTS_PAGES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getPartsPage(slug);
  if (!page) return {};
  const url = `/parts/${page.slug}`;
  return {
    title: page.title,
    description: page.metaDescription,
    keywords: page.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: `${page.title} | ${SITE_NAME}`,
      description: page.metaDescription,
      url,
      type: 'website',
    },
  };
}

export default async function PartsLandingPage({ params }: Props) {
  const { slug } = await params;
  const page = getPartsPage(slug);
  if (!page) notFound();

  const url = absoluteUrl(`/parts/${page.slug}`);
  const others = PARTS_PAGES.filter((p) => p.slug !== page.slug);

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Spare Parts',
          item: absoluteUrl('/parts'),
        },
        { '@type': 'ListItem', position: 3, name: page.label, item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: page.h1,
      serviceType: page.label,
      description: page.metaDescription,
      url,
      areaServed: { '@type': 'Country', name: 'Pakistan' },
      provider: { '@id': `${SITE_URL}/#business` },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: page.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ];

  return (
    <div className="pt-20">
      <JsonLd data={jsonLd} />

      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom max-w-4xl">
          <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-primary-600">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/parts" className="hover:text-primary-600">
              Spare Parts
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">{page.label}</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 text-balance">
            {page.h1}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            {page.intro}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${BUSINESS.phoneE164}`}
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              <Phone size={20} /> Call {BUSINESS.phone}
            </a>
            <a
              href={BUSINESS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} /> WhatsApp for price
            </a>
          </div>
        </div>
      </section>

      {/* Models + categories */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold font-display mb-6">
              Vehicles &amp; models covered
            </h2>
            <ul className="space-y-3">
              {page.models.map((m) => (
                <li key={m} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle
                    size={20}
                    className="text-primary-600 flex-shrink-0 mt-0.5"
                  />
                  {m}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold font-display mb-6">
              {page.label} we supply
            </h2>
            <ul className="space-y-3">
              {page.categories.map((c) => (
                <li key={c} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle
                    size={20}
                    className="text-primary-600 flex-shrink-0 mt-0.5"
                  />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Sample items from price list */}
      {page.sampleItems && page.sampleItems.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom max-w-5xl">
            <h2 className="text-3xl font-bold font-display mb-3">
              From our price list
            </h2>
            <p className="text-gray-600 mb-8">
              A few of the items we stock. For prices and the full list,
              download the PDF or contact us. Bulk pricing applies to 25 units
              or more.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {page.sampleItems.map((item) => (
                <li
                  key={item}
                  className="bg-white rounded-lg border border-gray-100 px-4 py-3 text-sm font-medium text-gray-800"
                >
                  {item}
                </li>
              ))}
            </ul>
            {page.catalogPdf && (
              <a
                href={page.catalogPdf.href}
                className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all"
              >
                <Download size={18} /> {page.catalogPdf.label}
              </a>
            )}
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold font-display mb-8">
            Frequently asked questions
          </h2>
          <div className="space-y-6">
            {page.faqs.map((f) => (
              <div key={f.q} className="border-b border-gray-100 pb-6">
                <h3 className="text-xl font-bold mb-2">{f.q}</h3>
                <p className="text-gray-600 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other categories (internal links) */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl font-bold font-display mb-8">
            More spare parts we supply
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/parts/${o.slug}`}
                className="bg-white rounded-lg border border-gray-100 hover:border-primary-200 px-4 py-3 font-semibold text-gray-800 hover:text-primary-600 flex items-center justify-between gap-2 transition-colors"
              >
                {o.label}
                <ArrowRight size={16} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold font-display mb-4">
            Need a price on {page.label}?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Send the part name, part number or vehicle model and we will reply
            with price and availability.
          </p>
          <Link
            href="/contact"
            className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center gap-2"
          >
            Request a Quote <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
