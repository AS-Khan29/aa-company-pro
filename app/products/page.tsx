'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Package, ArrowRight, FileText, Download } from 'lucide-react';
import FadeInView from '@/components/animations/FadeInView';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'catalogs', name: 'Parts Catalogs (PDF)' },
    { id: 'hino', name: 'HINO Parts' },
    { id: 'defender', name: 'Defender Parts' },
    { id: 'isuzu', name: 'Isuzu Parts' },
    { id: 'general', name: 'General Supplies' },
  ];

  const products = [
    {
      id: 17,
      category: 'catalogs',
      name: 'Multi-Brand Parts Catalog',
      description:
        'Full product price list covering Toyota, Suzuki, Hyundai, Honda, Daihatsu, Mitsubishi, Nissan & Mazda parts',
      price: 'Click below to download items list',
      pdfUrl: '/multi-brand-parts-catalog.pdf',
    },
    {
      id: 18,
      category: 'catalogs',
      name: 'Shock Absorbers Price List',
      description:
        'Front & rear shock absorber compatibility list, steering dampers and cabin shocks',
      price: 'Click below to download items list',
      pdfUrl: '/shock-absorbers-price-list.pdf',
    },
    {
      id: 1,
      category: 'hino',
      name: 'Engine Block Assembly',
      description: 'Complete engine block for HINO vehicles',
      price: 'Contact for price',
    },
    {
      id: 2,
      category: 'hino',
      name: 'Transmission Unit',
      description: 'Automatic transmission for HINO trucks',
      price: 'Contact for price',
    },
    {
      id: 3,
      category: 'hino',
      name: 'Brake Pad Set',
      description: 'High-performance brake pads',
      price: 'Contact for price',
    },
    {
      id: 4,
      category: 'hino',
      name: 'Radiator Assembly',
      description: 'Cooling system radiator',
      price: 'Contact for price',
    },
    {
      id: 5,
      category: 'defender',
      name: 'Suspension Kit',
      description: 'Complete suspension components',
      price: 'Contact for price',
    },
    {
      id: 6,
      category: 'defender',
      name: 'Fuel Tank',
      description: 'Stainless steel fuel tank',
      price: 'Contact for price',
    },
    {
      id: 7,
      category: 'defender',
      name: 'Alternator',
      description: 'Heavy-duty alternator unit',
      price: 'Contact for price',
    },
    {
      id: 8,
      category: 'defender',
      name: 'Battery',
      description: 'Military-grade battery',
      price: 'Contact for price',
    },
    {
      id: 9,
      category: 'isuzu',
      name: 'Hydraulic Pump',
      description: 'High-pressure hydraulic pump',
      price: 'Contact for price',
    },
    {
      id: 10,
      category: 'isuzu',
      name: 'Cooling Fan',
      description: 'Electric cooling fan assembly',
      price: 'Contact for price',
    },
    {
      id: 11,
      category: 'isuzu',
      name: 'Fuel Injector',
      description: 'Precision fuel injector',
      price: 'Contact for price',
    },
    {
      id: 12,
      category: 'isuzu',
      name: 'Starter Motor',
      description: 'Heavy-duty starter motor',
      price: 'Contact for price',
    },
    {
      id: 13,
      category: 'general',
      name: 'Tool Kit',
      description: 'Professional maintenance tool kit',
      price: 'Contact for price',
    },
    {
      id: 14,
      category: 'general',
      name: 'Safety Gear',
      description: 'Complete safety equipment set',
      price: 'Contact for price',
    },
    {
      id: 15,
      category: 'general',
      name: 'Steel Bucket',
      description: 'Industrial storage steel bucket',
      price: 'Contact for price',
    },
    {
      id: 16,
      category: 'general',
      name: 'Lubricant Pack',
      description: 'Premium lubricant assortment',
      price: 'Contact for price',
    },
  ];

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <FadeInView className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold font-display mb-6">
              Our <span className="text-gradient">Products</span>
            </h1>
            <p className="text-xl text-gray-600">
              Browse our comprehensive catalog of vehicle parts and industrial
              supplies
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold font-display mb-6">
              Filter by Category
            </h2>
            <div className="flex flex-wrap gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div
            key={selectedCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {filteredProducts.map((product) => (
              <div key={product.id} className="group">
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100 hover:border-primary-200 overflow-hidden h-full flex flex-col">
                  {/* Image Placeholder */}
                  <div className="bg-gradient-to-br from-primary-100 to-accent-100 h-40 flex items-center justify-center overflow-hidden relative">
                    <div className="absolute opacity-10">
                      {product.pdfUrl ? (
                        <FileText size={80} />
                      ) : (
                        <Package size={80} />
                      )}
                    </div>
                    <div className="relative z-10">
                      {product.pdfUrl ? (
                        <FileText size={48} className="text-primary-600" />
                      ) : (
                        <Package size={48} className="text-primary-600" />
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold mb-2 font-display group-hover:text-primary-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 flex-1">
                      {product.description}
                    </p>
                    <div className="mb-4">
                      <p className="text-primary-600 font-semibold">
                        {product.price}
                      </p>
                    </div>
                    <div className="mt-auto">
                      {product.pdfUrl ? (
                        <a href={product.pdfUrl} download>
                          <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 group/btn">
                            Download PDF
                            <Download
                              size={16}
                              className="group-hover/btn:translate-y-0.5 transition-transform"
                            />
                          </button>
                        </a>
                      ) : (
                        <Link href="/contact">
                          <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 group/btn">
                            Request Quote
                            <ArrowRight
                              size={16}
                              className="group-hover/btn:translate-x-1 transition-transform"
                            />
                          </button>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">
                No products found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Contact us for custom orders and specialized products tailored to
              your needs.
            </p>
            <div>
              <Link href="/contact">
                <button className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 inline-flex items-center gap-2 group">
                  Contact Us
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
