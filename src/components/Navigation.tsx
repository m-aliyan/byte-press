'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import './Navigation.css';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
  ];

  const serviceItems = [
    { name: 'Book Publishing Services', href: '/services/book-publishing-services' },
    { name: 'Ghostwriting Services', href: '/services/ghostwriting-services' },
    { name: 'Book Formatting Services', href: '/services/book-formatting-services' },
    { name: 'Editing & Proofreading', href: '/services/editing-and-proofreading-services' },
    { name: 'Book Illustration Services', href: '/services/book-illustration-services' },
    { name: 'Audiobook Services', href: '/services/audiobook-services' },
    { name: "Children's Book Services", href: '/services/childrens-book-services' },
    { name: 'Book Cover Design', href: '/services/book-cover-design' },
    { name: 'Book Marketing Services', href: '/services/book-marketing-services' },
  ];

  const handleServicesMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150); // Small delay to prevent flickering
  };

  const handleServiceItemClick = () => {
    setIsServicesOpen(false);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="nav-logo">
            <div className="logo-icon">
              <span>BP</span>
            </div>
            <span className="logo-text">Byte Press</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="nav-menu">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="nav-link"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          
          {/* Services Dropdown */}
          <div 
            ref={servicesRef}
            className="relative"
            onMouseEnter={handleServicesMouseEnter}
            onMouseLeave={handleServicesMouseLeave}
          >
            <button className="nav-link flex items-center space-x-1">
              <span>Services</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Dropdown Menu */}
            {isServicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                <div className="grid grid-cols-1 gap-1">
                  {serviceItems.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="px-4 py-3 text-gray-700 text-sm services-dropdown-item focus:outline-none focus:ring-0 focus:border-0 hover:bg-gray-50 active:bg-blue-50 active:text-blue-600 transition-all duration-200"
                      onClick={handleServiceItemClick}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="nav-cta"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mobile-menu-button"
          >
            <svg
              className="mobile-menu-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

                {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mobile-menu open">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="mobile-nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Services Section */}
              <div className="px-4">
                <div className="text-gray-700 font-medium mb-2">Services</div>
                <div className="ml-4 space-y-2">
                  {serviceItems.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="mobile-nav-link"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.name}
                  </Link>
                  ))}
                </div>
              </div>
              
              <div className="px-4 pt-4">
                <Link
                  href="/contact"
                  className="mobile-nav-cta"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
