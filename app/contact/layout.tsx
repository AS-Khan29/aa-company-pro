import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us & Request a Spare Parts Quote',
  description:
    'Get a price on auto and truck spare parts. Call or WhatsApp +92-321-2472470, email info@aandacompany.com or visit Ruby Plaza, Preedy Street, Saddar, Karachi.',
  alternates: { canonical: '/contact' },
  openGraph: { url: '/contact' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
