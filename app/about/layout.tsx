import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us: Karachi Spare Parts Supplier Since 1993',
  description:
    'A & A Company has supplied auto, truck and defence vehicle spare parts from Saddar, Karachi since 1993, serving Pakistan Army workshops, PIA, DHA Karachi and SICPA.',
  alternates: { canonical: '/about' },
  openGraph: { url: '/about' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
