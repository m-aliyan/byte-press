'use client';

import { useState } from 'react';
import FreeQuoteForm from '@/components/ui/FreeQuoteForm';
import TestimonialsChain from '@/components/TestimonialsChain';
import './page.css';

export default function Home() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="hero-content text-center lg:text-left">
              {/* Eyebrow */}
              <p className="hero-eyebrow">
                Book Publishing Point
              </p>
              
              {/* Main H1 */}
              <h1 className="hero-title">
                The Book Publishing Company<br />
                That Moves Your Story<br />
                Forward
              </h1>
              
              {/* Paragraph body */}
              <p className="hero-description">
                At Book Publishing Point, we don't just print pages. We help launch careers. From self publishing services to sharp book marketing, we're the publishing company that puts your goals at the center. Fiction, nonfiction, memoirs, or academic work — if it matters to you, it matters here.
              </p>
              
              {/* Buttons with better spacing */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
                <a href="/contact" className="btn btn-primary">
                  Start Your Book Project
                </a>
                <a href="/services" className="btn btn-secondary">
                  View Our Services
                </a>
              </div>
            </div>
            
            {/* Free Quote Form */}
            <div className="flex justify-center lg:justify-end">
              <FreeQuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Self Publishing Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left Column - Content */}
            <div className="lg:col-span-3">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Self Publishing Services That Start Strong and Finish Loud
              </h2>
              
              <div className="text-gray-600 text-base leading-relaxed mb-8 space-y-4">
                <p>
                  We don't hand you a template and wish you luck. We build with you from the ground up, turning your ideas into a finished book that looks sharp, reads well, and holds its own in a crowded market. Our self publishing services cover every stage, from writing and editing to layout, design, and publishing logistics.
                </p>
                <p>
                  Need sharp book marketing to match? We're already on it. Whether it's digital buzz, bookstore presence, or targeting the right readers, we position your book for the traction it deserves.
                </p>
                <p>
                  This isn't a one-size-fits-all process. You get options, guidance, and support that fit your pace — whether you're a first-time writer or coming back with your fifth title. We work with entrepreneurs, creative thinkers, educators, storytellers, and industry pros. What matters is that you've got something to say.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="/contact" className="btn btn-primary">
                  START MY PROJECT
                </a>
                <a href="/contact" className="btn btn-secondary">
                  BOOK FREE CONSULTATION →
                </a>
              </div>
            </div>
            
            {/* Right Column - Empty (reserved for future images) */}
            <div className="lg:col-span-2 hidden lg:block">
              {/* Intentionally left empty - reserved for future content */}
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section className="accordion-section">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Left Column - Empty (reserved for future images) */}
            <div className="lg:col-span-2 hidden lg:block">
              {/* Intentionally left empty - reserved for future content */}
            </div>
            
            {/* Right Column - Accordion Content */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                What Sets This{' '}
                <span className="text-[#0B3C74]">Book Publishing</span><br />
                <span className="text-[#0B3C74]">Company</span> Apart
              </h2>
              
              <div className="space-y-2">
                {/* Accordion Item 1 */}
                <div className="accordion-item">
                  <button 
                    onClick={() => toggleAccordion(0)}
                    className="accordion-button"
                  >
                    <span className="accordion-title">Owning Your Work, While Keeping It Professional</span>
                    <span className="accordion-toggle">
                      {openAccordion === 0 ? '−' : '+'}
                    </span>
                  </button>
                  <div className={`accordion-content ${
                    openAccordion === 0 ? 'block' : 'hidden'
                  }`}>
                    <p className="accordion-text">We allow authors to maintain full ownership of their work, giving them creative control while ensuring professional quality.</p>
                  </div>
                </div>

                {/* Accordion Item 2 */}
                <div className="accordion-item">
                  <button 
                    onClick={() => toggleAccordion(1)}
                    className="accordion-button"
                  >
                    <span className="accordion-title">Strategy Meets Story</span>
                    <span className="accordion-toggle">
                      {openAccordion === 1 ? '−' : '+'}
                    </span>
                  </button>
                  <div className={`accordion-content ${
                    openAccordion === 1 ? 'block' : 'hidden'
                  }`}>
                    <p className="accordion-text">We work with authors to develop a customized publishing strategy that aligns with their personal story and market goals.</p>
                  </div>
                </div>

                {/* Accordion Item 3 */}
                <div className="accordion-item">
                  <button 
                    onClick={() => toggleAccordion(2)}
                    className="accordion-button"
                  >
                    <span className="accordion-title">Rights Stay Yours, Always</span>
                    <span className="accordion-toggle">
                      {openAccordion === 2 ? '−' : '+'}
                    </span>
                  </button>
                  <div className={`accordion-content ${
                    openAccordion === 2 ? 'block' : 'hidden'
                  }`}>
                    <p className="accordion-text">We believe that authors should retain the rights to their work for as long as they choose, allowing flexibility for future projects.</p>
                  </div>
                </div>

                {/* Accordion Item 4 */}
                <div className="accordion-item">
                  <button 
                    onClick={() => toggleAccordion(3)}
                    className="accordion-button"
                  >
                    <span className="accordion-title">Clarity You Can Count On</span>
                    <span className="accordion-toggle">
                      {openAccordion === 3 ? '−' : '+'}
                    </span>
                  </button>
                  <div className={`accordion-content ${
                    openAccordion === 3 ? 'block' : 'hidden'
                  }`}>
                    <p className="accordion-text">We provide clear guidance throughout the publishing process, helping authors make informed decisions at every step.</p>
                  </div>
                </div>

                {/* Accordion Item 5 */}
                <div className="accordion-item">
                  <button 
                    onClick={() => toggleAccordion(4)}
                    className="accordion-button"
                  >
                    <span className="accordion-title">Accountability Built In</span>
                    <span className="accordion-toggle">
                      {openAccordion === 4 ? '−' : '+'}
                    </span>
                  </button>
                  <div className={`accordion-content ${
                    openAccordion === 4 ? 'block' : 'hidden'
                  }`}>
                    <p className="accordion-text">Our team is dedicated to supporting authors with regular updates and accountability, ensuring projects stay on track.</p>
                  </div>
                </div>

                {/* Accordion Item 6 */}
                <div className="accordion-item">
                  <button 
                    onClick={() => toggleAccordion(5)}
                    className="accordion-button"
                  >
                    <span className="accordion-title">A Global Book Publishing Company That Actually Delivers</span>
                    <span className="accordion-toggle">
                      {openAccordion === 5 ? '−' : '+'}
                    </span>
                  </button>
                  <div className={`accordion-content ${
                    openAccordion === 5 ? 'block' : 'hidden'
                  }`}>
                    <p className="accordion-text">We've helped authors around the world reach international readers, delivering results through innovative strategies.</p>
                  </div>
                </div>

                {/* Accordion Item 7 */}
                <div className="accordion-item">
                  <button 
                    onClick={() => toggleAccordion(6)}
                    className="accordion-button"
                  >
                    <span className="accordion-title">We're a Book Marketing Company That Moves the Needle</span>
                    <span className="accordion-toggle">
                      {openAccordion === 6 ? '−' : '+'}
                    </span>
                  </button>
                  <div className={`accordion-content ${
                    openAccordion === 6 ? 'block' : 'hidden'
                  }`}>
                    <p className="accordion-text">Beyond publishing, we specialize in marketing that helps authors stand out in the crowded book market.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Self Publishing Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Self Publishing Services That Actually Get the Job Done
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From manuscript to marketplace, we handle every detail of your publishing journey with precision and care.
            </p>
          </div>
          
          <div className="services-grid-container">
            {/* Service cards have been removed */}
            <p className="text-center text-gray-500 py-8">
              Service cards section - content removed
            </p>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Publishing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We handle every aspect of book publishing, from initial concept to final publication and marketing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Writing & Editing</h3>
              <p className="text-gray-600">Professional ghostwriting, editing, and manuscript development</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Design & Layout</h3>
              <p className="text-gray-600">Eye-catching covers and professional interior design</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Publishing Support</h3>
              <p className="text-gray-600">Guidance through the entire publishing process</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Marketing & Sales</h3>
              <p className="text-gray-600">Strategic marketing to boost visibility and sales</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="/services" className="text-blue-600 font-medium hover:text-blue-700">
              View All Services →
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Happy Authors</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">750+</div>
              <div className="text-gray-600">Books Published</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Bestsellers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsChain />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Publish Your Book?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful authors who've transformed their ideas into bestselling books with BytePress.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-medium text-lg hover:bg-gray-100 transition-colors">
              Get Started Today
            </a>
            <a href="/portfolio" className="border border-white text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-white hover:text-blue-600 transition-colors">
              View Our Work
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
