import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Auto & Truck Spare Parts Price List: Toyota, Suzuki, Hino, Isuzu',
  description:
    'Download our auto spare parts price list for Toyota, Suzuki, Hyundai, Honda, Daihatsu, Mitsubishi, Nissan and Mazda, plus shock absorbers and HINO, Isuzu and Defender truck parts. Wholesale supplier in Karachi.',
  alternates: { canonical: '/products' },
  openGraph: { url: '/products' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
