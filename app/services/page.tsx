'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Shield,
  Truck,
  Wrench,
  Zap,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import FadeInView from '@/components/animations/FadeInView';

export default function Services() {
  const services = [
    {
      icon: Shield,
      title: 'Defense Supply',
      description:
        'Comprehensive defense sector supplies with proven track record',
      features: [
        'Pakistan Army workshops supply',
        'PIA logistics support',
        'DHA Karachi partnership',
        'SCIPA printing press supplies',
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Truck,
      title: 'HINO Parts Supply',
      description: 'Complete HINO vehicle components and accessories',
      features: [
        'Engine components',
        'Transmission systems',
        'Brake assemblies',
        'Cooling systems',
      ],
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Wrench,
      title: 'Defender Parts',
      description: 'Specialized Defender vehicle parts and supplies',
      features: [
        'Suspension kits',
        'Fuel systems',
        'Electrical components',
        'Battery systems',
      ],
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Zap,
      title: 'Isuzu Logistics',
      description: 'Premium Isuzu vehicle parts and logistics solutions',
      features: [
        'Hydraulic systems',
        'Cooling solutions',
        'Fuel injection',
        'Motor assemblies',
      ],
      color: 'from-orange-500 to-orange-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <FadeInView className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold font-display mb-6">
              What We <span className="text-gradient">Offer</span>
            </h1>
            <p className="text-xl text-gray-600">
              Comprehensive solutions tailored to your defense and automotive
              needs
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-primary-200 h-full">
                    {/* Header */}
                    <div
                      className={`bg-gradient-to-br ${service.color} p-8 text-white relative overflow-hidden`}
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                        className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full"
                      />
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center mb-4 relative z-10"
                      >
                        <Icon size={32} />
                      </motion.div>
                      <h3 className="text-3xl font-bold font-display relative z-10">
                        {service.title}
                      </h3>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-3 mb-8">
                        {service.features.map((feature) => (
                          <motion.div
                            key={feature}
                            whileHover={{ x: 5 }}
                            className="flex items-center gap-3"
                          >
                            <CheckCircle
                              size={20}
                              className="text-primary-600 flex-shrink-0"
                            />
                            <span className="text-gray-700">{feature}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* CTA */}
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-2 text-primary-600 font-semibold group-hover:gap-3 transition-all"
                      >
                        Learn More
                        <ArrowRight size={20} />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Why Choose <span className="text-gradient">Us</span>
            </h2>
            <p className="text-xl text-gray-600">
              Proven excellence and reliability
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: '30+ Years Experience',
                description:
                  'Decades of proven expertise in defense and automotive sectors',
              },
              {
                title: 'Trusted Partners',
                description:
                  'Official supplier to Pakistan Army, PIA, DHA, and SCIPA',
              },
              {
                title: '24/7 Support',
                description:
                  'Round-the-clock customer support and on-time delivery',
              },
              {
                title: 'Quality Assured',
                description:
                  'Rigorous quality control and compliance standards',
              },
              {
                title: 'Competitive Pricing',
                description:
                  'Best value for money without compromising quality',
              },
              {
                title: 'Fast Delivery',
                description:
                  'Efficient logistics and quick turnaround times',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-100"
              >
                <motion.div
                  className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold mb-4"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
                >
                  {index + 1}
                </motion.div>
                <h3 className="text-xl font-bold mb-2 font-display">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Contact us today to discuss how we can serve your needs
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
