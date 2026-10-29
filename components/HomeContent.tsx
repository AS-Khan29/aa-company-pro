'use client';

import Link from 'next/link';
import {
  Zap,
  Shield,
  Truck,
  Wrench,
  Award,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';
import FloatingOrbs from '@/components/animations/FloatingOrbs';
import TextReveal from '@/components/animations/TextReveal';
import MagneticButton from '@/components/animations/MagneticButton';
import Marquee from '@/components/animations/Marquee';
import FadeInView from '@/components/animations/FadeInView';
import { PARTS_PAGES } from '@/lib/parts';

export default function HomeContent() {
  const services = [
    {
      icon: Shield,
      title: 'Defence Supply',
      description: 'Trusted spare parts supplier to Pakistan Army, PIA, and DHA Karachi',
      href: '/services',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Truck,
      title: 'HINO Truck Parts',
      description: 'Engine, transmission, brake, cooling and suspension parts for HINO trucks',
      href: '/parts/hino-truck-parts',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Wrench,
      title: 'Land Rover Defender Parts',
      description: 'Suspension kits, shock absorbers, fuel and electrical parts for Defender',
      href: '/parts/land-rover-defender-parts',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Zap,
      title: 'Isuzu Truck Parts',
      description: 'Fuel injectors, starter motors, hydraulic pumps and cooling parts for Isuzu trucks',
      href: '/parts/isuzu-truck-parts',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Award,
      title: 'Shock Absorbers',
      description: 'Front & rear shocks, steering dampers and cabin shocks for cars, pickups and trucks',
      href: '/parts/shock-absorbers',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: TrendingUp,
      title: 'Car Spare Parts',
      description: 'Toyota, Suzuki, Honda, Hyundai, Daihatsu, Mitsubishi and Nissan parts, 580+ items listed',
      href: '/parts',
      color: 'from-indigo-500 to-indigo-600',
    },
  ];

  const stats = [
    { number: '30+', label: 'Years Experience' },
    { number: '4+', label: 'Major Clients' },
    { number: '100%', label: 'Reliability' },
    { number: '24/7', label: 'Support' },
  ];

  const clients = [
    'Pakistan Army',
    'PIA',
    'DHA Karachi',
    'SICPA',
    'Defender Parts',
    'Isuzu Logistics',
    'Defense Supply',
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-50/30">
        <FloatingOrbs />

        <div className="container-custom relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-6 bg-primary-50 px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-primary-600 rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-primary-600">
                  Auto &amp; Truck Spare Parts · Karachi · Since 1993
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 leading-tight text-balance">
                <TextReveal
                  text="Ensuring Operational"
                  className="block text-gradient"
                />
                <TextReveal
                  text="Readiness"
                  className="block text-gray-900"
                />
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
                Genuine auto and truck spare parts supplier in Karachi since
                1993. HINO, Isuzu and Land Rover Defender parts, shock
                absorbers, and Toyota, Suzuki and Honda spare parts, wholesale
                across Pakistan. Trusted by Pakistan Army, PIA, DHA Karachi,
                and SICPA.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <MagneticButton>
                  <Link href="/contact">
                    <button
                      className="btn-primary flex items-center gap-2 group hover:scale-105 transition-transform"
                    >
                      Get Started
                      <ArrowRight
                        size={20}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </button>
                  </Link>
                </MagneticButton>
                <MagneticButton>
                  <Link href="/about">
                    <button className="btn-outline hover:scale-105 transition-transform">
                      Learn More
                    </button>
                  </Link>
                </MagneticButton>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all"
                >
                  <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                    {stat.number}
                  </div>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Marquee */}
      <section className="py-8 bg-white border-y border-gray-100">
        <div className="container-custom">
          <FadeInView>
            <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">
              Trusted by leading organizations
            </p>
          </FadeInView>
          <Marquee items={clients} />
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Spare Parts &amp; <span className="text-gradient">Supply</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Truck, car and defence vehicle spare parts for workshops, fleets
              and dealers across Pakistan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group block hover:-translate-y-2 transition-transform"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 h-full border border-gray-100 hover:border-primary-200 glow-border">
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 text-white`}
                    >
                      <Icon size={32} />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 font-display">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-2 text-primary-600 font-semibold group-hover:gap-3 transition-all">
                      Learn More
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Shop by vehicle brand */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Spare Parts <span className="text-gradient">by Brand</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find parts for your vehicle, then call or WhatsApp us for the
              latest price
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {PARTS_PAGES.map((p) => (
              <Link
                key={p.slug}
                href={`/parts/${p.slug}`}
                className="bg-white rounded-lg border border-gray-100 hover:border-primary-200 hover:shadow-md px-4 py-4 font-semibold text-gray-800 hover:text-primary-600 flex items-center justify-between gap-2 transition-all"
              >
                {p.label}
                <ArrowRight size={16} className="flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 text-white relative overflow-hidden animate-gradient-bg">
        {/* Background Animation */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />

        <div className="container-custom relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join our growing list of satisfied clients across defense and
              automotive sectors.
            </p>
            <div>
              <Link href="/contact">
                <button className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 inline-flex items-center gap-2 group hover:scale-105">
                  Request a Quote
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
