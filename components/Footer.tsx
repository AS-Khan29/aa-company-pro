'use client';

import Link from 'next/link';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
} from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Products', href: '/products' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold font-display mb-4 text-primary-400">
              A & A Company
            </h3>
            <p className="text-gray-400 mb-6">
              30+ years of excellence in defense and auto parts supply.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-accent-600 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors flex items-center gap-2 group"
                  >
                    {link.label}
                    <ArrowRight
                      size={16}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-primary-400 transition-colors cursor-pointer">
                HINO Parts Supply
              </li>
              <li className="hover:text-primary-400 transition-colors cursor-pointer">
                Defender Components
              </li>
              <li className="hover:text-primary-400 transition-colors cursor-pointer">
                Isuzu Logistics
              </li>
              <li className="hover:text-primary-400 transition-colors cursor-pointer">
                General Supplies
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-gray-400 hover:text-primary-400 transition-colors">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span>F-95, 2nd Floor, Ruby Plaza, Preedy Street, Saddar, Karachi</span>
              </div>
              <a
                href="tel:+923212472470"
                className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Phone size={20} />
                <span>+92-321-2472470</span>
              </a>
              <a
                href="mailto:info@aacompany.com"
                className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Mail size={20} />
                <span>info@aacompany.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 A & A Company. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="#" className="hover:text-primary-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-primary-400 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
