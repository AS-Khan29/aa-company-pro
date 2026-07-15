'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

export default function Contact() {
  const [activeTab, setActiveTab] = useState('contact');
  const [contactLoading, setContactLoading] = useState(false);
  const [quoteLoading, setQuoteLoading] = useState(false);

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });

  const [quoteForm, setQuoteForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    productCategory: '',
    productName: '',
    quantity: '',
    description: '',
  });

  const handleContactChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleQuoteChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setQuoteForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success('Message sent successfully! We will contact you soon.');
      setContactForm({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setContactLoading(false);
    }
  };

  const handleQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setQuoteLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success('Quote request submitted! We will get back to you soon.');
      setQuoteForm({
        name: '',
        email: '',
        phone: '',
        company: '',
        productCategory: '',
        productName: '',
        quantity: '',
        description: '',
      });
    } catch (error) {
      toast.error('Failed to submit quote request. Please try again.');
    } finally {
      setQuoteLoading(false);
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold font-display mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-gray-600">
              Have questions? We're here to help and answer any questions you
              might have.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: MapPin,
                title: 'Location',
                content: 'F-95, 2nd Floor, Ruby Plaza, Preedy Street, Saddar, Karachi ',
                color: 'from-blue-500 to-blue-600',
              },
              {
                icon: Phone,
                title: 'Phone',
                content: '+92-321-2472470',
                color: 'from-purple-500 to-purple-600',
              },
              {
                icon: Mail,
                title: 'Email',
                content: 'info@aacompany.com',
                color: 'from-accent-500 to-accent-600',
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100"
                >
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-6`}
                  >
                    <Icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 font-display">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-lg">{item.content}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Forms Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {/* Tabs */}
            <div className="flex gap-4 mb-8 border-b border-gray-200">
              {[
                { id: 'contact', label: 'Contact Form' },
                { id: 'quote', label: 'Request Quote' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-3 px-6 font-semibold transition-all relative ${
                    activeTab === tab.id
                      ? 'text-primary-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 to-accent-600" />
                  )}
                </button>
              ))}
            </div>

            {/* Contact Form */}
            {activeTab === 'contact' && (
              <form
                onSubmit={handleContactSubmit}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={contactForm.name}
                      onChange={handleContactChange}
                      required
                      className="input-field"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={contactForm.email}
                      onChange={handleContactChange}
                      required
                      className="input-field"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={contactForm.phone}
                      onChange={handleContactChange}
                      className="input-field"
                      placeholder="+92-300-XXXXXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={contactForm.company}
                      onChange={handleContactChange}
                      className="input-field"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={contactForm.subject}
                    onChange={handleContactChange}
                    required
                    className="input-field"
                    placeholder="How can we help?"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={contactForm.message}
                    onChange={handleContactChange}
                    required
                    rows={5}
                    className="input-field resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={contactLoading}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {contactLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            )}

            {/* Quote Form */}
            {activeTab === 'quote' && (
              <form
                onSubmit={handleQuoteSubmit}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={quoteForm.name}
                      onChange={handleQuoteChange}
                      required
                      className="input-field"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={quoteForm.email}
                      onChange={handleQuoteChange}
                      required
                      className="input-field"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={quoteForm.phone}
                      onChange={handleQuoteChange}
                      required
                      className="input-field"
                      placeholder="+92-300-XXXXXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={quoteForm.company}
                      onChange={handleQuoteChange}
                      className="input-field"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Product Category *
                    </label>
                    <select
                      name="productCategory"
                      value={quoteForm.productCategory}
                      onChange={handleQuoteChange}
                      required
                      className="input-field"
                    >
                      <option value="">Select category</option>
                      <option value="HINO Parts">HINO Parts</option>
                      <option value="Defender Parts">Defender Parts</option>
                      <option value="Isuzu Parts">Isuzu Parts</option>
                      <option value="General Supplies">General Supplies</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Product Name *
                    </label>
                    <input
                      type="text"
                      name="productName"
                      value={quoteForm.productName}
                      onChange={handleQuoteChange}
                      required
                      className="input-field"
                      placeholder="Product name"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Quantity *
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    value={quoteForm.quantity}
                    onChange={handleQuoteChange}
                    required
                    min="1"
                    className="input-field"
                    placeholder="Enter quantity"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Additional Details
                  </label>
                  <textarea
                    name="description"
                    value={quoteForm.description}
                    onChange={handleQuoteChange}
                    rows={4}
                    className="input-field resize-none"
                    placeholder="Any additional information..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={quoteLoading}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {quoteLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Request Quote
                      <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
