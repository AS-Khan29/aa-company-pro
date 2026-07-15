'use client';



import { CheckCircle, Award, Users, Globe } from 'lucide-react';

import FadeInView from '@/components/animations/FadeInView';

import FloatingOrbs from '@/components/animations/FloatingOrbs';



export default function About() {

  const timelineEvents = [

    {

      year: '1993',

      title: 'Founded',

      description: 'A & A Company established with vision to serve defense sector',

    },

    {

      year: '1998',

      title: 'Pakistan Army Partnership',

      description: 'Became official supplier to Pakistan Army workshops',

    },

    {

      year: '2005',

      title: 'PIA Contract',

      description: 'Expanded to serve Pakistan International Airlines',

    },

    {

      year: '2010',

      title: 'HINO Specialization',

      description: 'Became authorized HINO parts distributor',

    },

    {

      year: '2015',

      title: 'DHA Karachi Partnership',

      description: 'Started supplying auto parts to DHA Karachi',

    },

    {

      year: '2020',

      title: 'SCIPA Contract',

      description: 'Began supplying steel buckets to SCIPA Printing Press',

    },

    {

      year: '2023',

      title: 'Defender & Isuzu',

      description: 'Expanded specialization to Defender and Isuzu vehicles',

    },

    {

      year: '2024',

      title: 'Digital Transformation',

      description: 'Launched online platform for enhanced customer experience',

    },

  ];



  const values = [

    {

      icon: Award,

      title: 'Excellence',

      description: 'Committed to highest quality standards in every product',

    },

    {

      icon: Users,

      title: 'Partnership',

      description: 'Building long-term relationships with our clients',

    },

    {

      icon: Globe,

      title: 'Reliability',

      description: '24/7 support and on-time delivery guaranteed',

    },

    {

      icon: CheckCircle,

      title: 'Integrity',

      description: 'Transparent dealings and honest communication always',

    },

  ];



  return (

    <div className="pt-20">

      {/* Hero Section */}

      <section className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">

        <FloatingOrbs />

        <div className="container-custom relative z-10">

          <FadeInView className="text-center max-w-3xl mx-auto">

            <h1 className="text-5xl md:text-7xl font-bold font-display mb-6">

              Our <span className="text-gradient">Story</span>

            </h1>

            <p className="text-xl text-gray-600">

              30+ years of excellence, innovation, and unwavering commitment to

              our clients

            </p>

          </FadeInView>

        </div>

      </section>



      {/* Leadership Photographs */}

      <section className="section-padding bg-white">

        <div className="container-custom">

          <h2 className="text-4xl md:text-5xl font-bold font-display text-center mb-4">

            Leadership & <span className="text-gradient">Heritage</span>

          </h2>

          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">

            Archival photographs of our leadership with senior military officials.

          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-md">

              <p className="px-4 py-3 bg-gray-50 font-semibold text-gray-800">

                CLS Visit - 2018

              </p>

              <iframe

                src="/documents/owner-with-general-1.pdf"

                title="Owner with General — Portrait I"

                className="w-full h-[480px] border-0"

              />

              <a

                href="/documents/owner-with-general-1.pdf"

                target="_blank"

                rel="noopener noreferrer"

                className="block px-4 py-3 text-center text-primary-600 font-semibold hover:bg-primary-50"

              >

                View Full Image

              </a>

            </div>

            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-md">

              <p className="px-4 py-3 bg-gray-50 font-semibold text-gray-800">

                CLS Visit - 2018

              </p>

              <iframe

                src="/documents/owner-with-general-2.pdf"

                title="Owner with General — Portrait II"

                className="w-full h-[480px] border-0"

              />

              <a

                href="/documents/owner-with-general-2.pdf"

                target="_blank"

                rel="noopener noreferrer"

                className="block px-4 py-3 text-center text-primary-600 font-semibold hover:bg-primary-50"

              >

                View Full Image

              </a>

            </div>

          </div>

        </div>

      </section>



      {/* Timeline Section */}

      <section className="section-padding bg-white">

        <div className="container-custom">

          <div className="text-center mb-16">

            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">

              Company <span className="text-gradient">Timeline</span>

            </h2>

            <p className="text-xl text-gray-600">

              Milestones that shaped our journey

            </p>

          </div>



          <div className="relative">

            {/* Timeline Line */}

            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-600 to-accent-600 origin-top" />



            {/* Timeline Items */}

            <div className="space-y-12">

              {timelineEvents.map((event, index) => (

                <div

                  key={event.year}

                  className={`flex items-center gap-8 ${

                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'

                  }`}

                >

                  {/* Content */}

                  <div

                    className={`w-full md:w-5/12 ${

                      index % 2 === 0 ? 'md:text-right' : 'md:text-left'

                    }`}

                  >

                    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">

                      <div className="text-3xl font-bold text-primary-600 mb-2">

                        {event.year}

                      </div>

                      <h3 className="text-2xl font-bold mb-2 font-display">

                        {event.title}

                      </h3>

                      <p className="text-gray-600">{event.description}</p>

                    </div>

                  </div>



                  {/* Center Dot */}

                  <div className="w-full md:w-2/12 flex justify-center">

                    <div className="w-6 h-6 bg-primary-600 rounded-full border-4 border-white shadow-lg" />

                  </div>



                  {/* Spacer */}

                  <div className="hidden md:block w-5/12" />

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>



      {/* Values Section */}

      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">

        <div className="container-custom">

          <div className="text-center mb-16">

            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">

              Our <span className="text-gradient">Values</span>

            </h2>

            <p className="text-xl text-gray-600">

              Principles that guide everything we do

            </p>

          </div>



          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {values.map((value) => {

              const Icon = value.icon;

              return (

                <div

                  key={value.title}

                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-primary-200"

                >

                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white mb-6">

                    <Icon size={32} />

                  </div>

                  <h3 className="text-2xl font-bold mb-3 font-display">

                    {value.title}

                  </h3>

                  <p className="text-gray-600">{value.description}</p>

                </div>

              );

            })}

          </div>

        </div>

      </section>



      {/* Merit Certificate */}

      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">

        <div className="container-custom max-w-3xl">

          <h2 className="text-4xl md:text-5xl font-bold font-display text-center mb-4">

            Awards & <span className="text-gradient">Credentials</span>

          </h2>

          <p className="text-xl text-gray-600 text-center mb-12">

            Official merit certificate recognizing our service excellence.

          </p>

          <div className="rounded-xl overflow-hidden border border-gray-200 shadow-md">

            <p className="px-4 py-3 bg-gray-50 font-semibold text-gray-800">

              Merit Certificate

            </p>

            <iframe

              src="/documents/merit-certificate.pdf"

              title="Merit Certificate"

              className="w-full h-[560px] border-0"

            />

            <a

              href="/documents/merit-certificate.pdf"

              target="_blank"

              rel="noopener noreferrer"

              className="block px-4 py-3 text-center text-primary-600 font-semibold hover:bg-primary-50"

            >

              Open full document

            </a>

          </div>

        </div>

      </section>



      {/* Stats Section */}

      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-800 text-white">

        <div className="container-custom">

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">

            {[

              { number: '30+', label: 'Years in Business' },

              { number: '4+', label: 'Major Clients' },

              { number: '1000+', label: 'Products' },

              { number: '24/7', label: 'Support' },

            ].map((stat) => (

              <div key={stat.label}>

                <div className="text-5xl font-bold mb-2">{stat.number}</div>

                <p className="text-lg opacity-90">{stat.label}</p>

              </div>

            ))}

          </div>

        </div>

      </section>

    </div>

  );

}

