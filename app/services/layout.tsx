import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Defence & Fleet Spare Parts Supply Services in Pakistan',
  description:
    'Spare parts supply for defence workshops, fleet operators and garages in Pakistan: HINO, Isuzu and Land Rover Defender parts, plus general order supplies. Serving Pakistan Army, PIA, DHA Karachi and SICPA.',
  alternates: { canonical: '/services' },
  openGraph: { url: '/services' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
