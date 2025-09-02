'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">BP</span>
              </div>
              <span className="text-xl font-bold text-blue-400">BytePress</span>
            </div>
            <p className="text-gray-200 text-sm leading-relaxed">
              Your trusted partner for exceptional ghostwriting, editing, design, publishing, and marketing solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-200 hover:text-blue-400 transition-colors text-sm">Home</a></li>
              <li><a href="/portfolio" className="text-gray-200 hover:text-blue-400 transition-colors text-sm">Portfolio</a></li>
              <li><a href="/testimonials" className="text-gray-200 hover:text-blue-400 transition-colors text-sm">Testimonials</a></li>
              <li><a href="/faqs" className="text-gray-200 hover:text-blue-400 transition-colors text-sm">FAQs</a></li>
              <li><a href="/pricing" className="text-gray-200 hover:text-blue-400 transition-colors text-sm">Pricing</a></li>
              <li><a href="/contact" className="text-gray-200 hover:text-blue-400 transition-colors text-sm">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="/services/book-publishing-services" className="text-gray-200 hover:text-blue-400 transition-colors text-sm">Book Publishing</a></li>
              <li><a href="/services/ghostwriting-services" className="text-gray-200 hover:text-blue-400 transition-colors text-sm">Ghostwriting</a></li>
              <li><a href="/services/book-formatting-services" className="text-gray-200 hover:text-blue-400 transition-colors text-sm">Book Formatting</a></li>
              <li><a href="/services/editing-and-proofreading-services" className="text-gray-200 hover:text-blue-400 transition-colors text-sm">Editing & Proofreading</a></li>
              <li><a href="/services/book-illustration-services" className="text-gray-200 hover:text-blue-400 transition-colors text-sm">Book Illustration</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-200 text-sm">833 323 0371</li>
              <li className="text-gray-200 text-sm">info@bytepress.com</li>
              <li className="text-gray-200 text-sm">2809 Joshua Street, Denton Texas, United States, 76209</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-blue-900 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-200 text-sm">
                Copyright © 2025 | BytePress | All rights reserved.
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              <a href="/refund-policy" className="text-gray-200 hover:text-blue-400 transition-colors text-sm">Refund Policy</a>
              <a href="/terms" className="text-gray-200 hover:text-blue-400 transition-colors text-sm">Terms & Conditions</a>
              <a href="/privacy" className="text-gray-200 hover:text-blue-400 transition-colors text-sm">Privacy Policy</a>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 text-center">
            <p className="text-gray-300 text-xs">
              Disclaimer: The logo, name and graphics of BytePress and its products & services are the trademarks of BytePress. 
              All other company names, brand names, trademarks and logos mentioned on this website are the property of their respective owners.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
