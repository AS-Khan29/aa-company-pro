'use client';

import { motion } from 'framer-motion';
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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

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
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left Content */}
            <motion.div variants={itemVariants}>
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center gap-2 mb-6 bg-primary-50 px-4 py-2 rounded-full"
              >
                <span className="w-2 h-2 bg-primary-600 rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-primary-600">
                  Since 1993
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 leading-tight text-balance">
                <TextReveal
                  text="Ensuring Operational"
                  className="block text-gradient"
                  delay={0.2}
                />
                <TextReveal
                  text="Readiness"
                  className="block text-gray-900"
                  delay={0.5}
                />
              </h1>

              <motion.p
                variants={itemVariants}
                className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl"
              >
                30+ years of excellence in defense vehicle spare parts and
                general order supplies. Trusted by Pakistan Army, PIA, DHA
                Karachi, and SCIPA.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4"
              >
                <MagneticButton>
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(14, 165, 233, 0.3)' }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-primary flex items-center gap-2 group"
                    >
                      Get Started
                      <ArrowRight
                        size={20}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </motion.button>
                  </Link>
                </MagneticButton>
                <MagneticButton>
                  <Link href="/about">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-outline"
                    >
                      Learn More
                    </motion.button>
                  </Link>
                </MagneticButton>
              </motion.div>
            </motion.div>

            {/* Right Content - Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -5, rotateX: 5, rotateY: -5 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow perspective-1000 preserve-3d"
                >
                  <motion.div
                    className="text-4xl md:text-5xl font-bold text-gradient mb-2"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {stat.number}
                  </motion.div>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions for defense and automotive industries
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 h-full border border-gray-100 hover:border-primary-200 glow-border">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 text-white`}
                    >
                      <Icon size={32} />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-3 font-display">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-primary-600 font-semibold group-hover:gap-3 transition-all"
                    >
                      Learn More
                      <ArrowRight size={20} />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 text-white relative overflow-hidden animate-gradient-bg">
        {/* Background Animation */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join our growing list of satisfied clients across defense and
              automotive sectors.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/contact">
                <button className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 inline-flex items-center gap-2 group">
                  Request a Quote
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
