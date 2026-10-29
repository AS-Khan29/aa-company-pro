import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PARTS_PAGES } from '@/lib/parts';

export const metadata: Metadata = {
  title: 'Auto & Truck Spare Parts by Brand',
  description:
    'Browse auto and truck spare parts by brand: HINO, Isuzu, Land Rover Defender, Toyota, Suzuki, Honda, Hyundai, Daihatsu, Mitsubishi, Nissan and Mazda, plus shock absorbers. Karachi supplier since 1993.',
  alternates: { canonical: '/parts' },
};

export default function PartsIndex() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
            Auto &amp; Truck <span className="text-gradient">Spare Parts</span>{' '}
            by Brand
          </h1>
          <p className="text-xl text-gray-600">
            Genuine and quality replacement parts for cars, pickups, vans and
            heavy trucks, supplied from Preedy Street, Saddar, Karachi to
            buyers across Pakistan.
          </p>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PARTS_PAGES.map((p) => (
            <Link
              key={p.slug}
              href={`/parts/${p.slug}`}
              className="group bg-white rounded-xl border border-gray-100 hover:border-primary-200 shadow-md hover:shadow-xl p-6 transition-all"
            >
              <h2 className="text-2xl font-bold font-display mb-2 group-hover:text-primary-600">
                {p.label}
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                {p.models.slice(0, 3).join(' · ')}
              </p>
              <span className="text-primary-600 font-semibold inline-flex items-center gap-2">
                View parts <ArrowRight size={16} />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
