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

export default function Home() {
  const services = [
    {
      icon: Shield,
      title: 'Defense Supply',
      description: 'Trusted supplier to Pakistan Army, PIA, and DHA Karachi',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Truck,
      title: 'HINO Parts',
      description: 'Complete HINO vehicle components and accessories',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Wrench,
      title: 'Defender Parts',
      description: 'Specialized Defender vehicle parts and supplies',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Zap,
      title: 'Isuzu Logistics',
      description: 'Premium Isuzu vehicle parts and logistics solutions',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: '30+ years of proven reliability and excellence',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: TrendingUp,
      title: 'Growth Partner',
      description: 'Strategic partnership for your business expansion',
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
    'SCIPA',
    'HINO Authorized',
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
                  Since 1993
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
                30+ years of excellence in defense vehicle spare parts and
                general order supplies. Trusted by Pakistan Army, PIA, DHA
                Karachi, and SCIPA.
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
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions for defense and automotive industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="group hover:-translate-y-2 transition-transform">
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
                </div>
              );
            })}
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
