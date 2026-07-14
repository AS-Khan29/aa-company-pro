import { Link } from "wouter";
import { useState } from "react";
import { Menu, X } from "lucide-react";

/**
 * Navigation Component - Industrial Heritage Modernism
 * Sticky header with asymmetric layout
 * Features: Mobile-responsive hamburger menu, steel blue accent, minimal design
 */
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "What We Offer", href: "/services" },
    { label: "Products", href: "/products" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background border-b-2 border-steel shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo/Brand */}
        <Link href="/">
          <a className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">A&A</span>
            </div>
            <div className="hidden md:block">
              <h1 className="text-display text-lg font-bold text-foreground">A & A Company</h1>
              <p className="text-xs text-muted-foreground">Defense Contractor</p>
            </div>
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.slice(1).map((item) => (
            <Link key={item.href} href={item.href}>
              <a className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-300 relative group">
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-secondary rounded transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t-2 border-steel bg-secondary animate-fade-in-up">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                >
                  {item.label}
                </a>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
