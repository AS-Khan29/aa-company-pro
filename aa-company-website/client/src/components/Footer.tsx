import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "wouter";

/**
 * Footer Component - Industrial Heritage Modernism
 * Minimal footer with contact info and navigation links
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground mt-20 border-t-4 border-accent">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-display text-lg font-bold mb-4">A & A Company</h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Excellence in Supply Chain & Logistics Since 1993
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/">
                  <a className="hover:text-accent transition-colors">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="hover:text-accent transition-colors">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="hover:text-accent transition-colors">Services</a>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <a className="hover:text-accent transition-colors">Products</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <a href="tel:+923212472470" className="hover:text-accent transition-colors">
                  0321-2472470
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <a href="mailto:tbz37@hotmail.com" className="hover:text-accent transition-colors">
                  tbz37@hotmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>Karachi, Pakistan</span>
              </li>
            </ul>
          </div>

          {/* Specializations */}
          <div>
            <h4 className="font-semibold mb-4">Specializations</h4>
            <ul className="space-y-2 text-sm">
              <li>HINO Parts</li>
              <li>Defender Parts</li>
              <li>Isuzu Parts</li>
              <li>General Orders</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-accent/30 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-primary-foreground/70">
            <p>&copy; {currentYear} A & A Company. All rights reserved.</p>
            <p className="mt-4 md:mt-0">Ensuring Operational Readiness, Component by Component</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
