'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import TestimonialsChain from '@/components/TestimonialsChain';
import Footer from '@/components/Footer';
import './page.css';

// Extend Window interface for the observer
declare global {
  interface Window {
    heroObserver?: IntersectionObserver;
  }
}

export default function Home() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  // Intersection Observer for fade-in animations
  useEffect(() => {
    // Function to set up observer with a small delay to ensure DOM is ready
    const setupObserver = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Add animation classes when entering viewport
              if (entry.target.getAttribute('data-section') === 'hero') {
                // Animate all elements in the hero section using accordion classes
                const fadeUpElements = entry.target.querySelectorAll('.hero-fade-up');
                const fadeScaleElements = entry.target.querySelectorAll('.hero-fade-scale');
                const fadeLeftElements = entry.target.querySelectorAll('.accordion-fade-left');
                
                console.log('Hero section entering viewport:');
                console.log('fadeUpElements found:', fadeUpElements.length);
                console.log('fadeScaleElements found:', fadeScaleElements.length);
                console.log('fadeLeftElements found:', fadeLeftElements.length);
                
                // Ensure re-play by removing then re-adding with reflow
                fadeUpElements.forEach(el => {
                  el.classList.remove('animate');
                  // force reflow
                  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                  (el as HTMLElement).offsetHeight;
                  el.classList.add('animate');
                });
                fadeScaleElements.forEach(el => {
                  el.classList.remove('animate');
                  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                  (el as HTMLElement).offsetHeight;
                  el.classList.add('animate');
                });
                fadeLeftElements.forEach(el => {
                  console.log('Replaying hero form animation');
                  el.classList.remove('animate');
                  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                  (el as HTMLElement).offsetHeight;
                  el.classList.add('animate');
                });
              } else if (entry.target.classList.contains('accordion-section')) {
                // Animate all elements in the accordion section
                const fadeUpElements = entry.target.querySelectorAll('.accordion-fade-up');
                const fadeScaleElements = entry.target.querySelectorAll('.accordion-fade-scale');
                const fadeLeftElements = entry.target.querySelectorAll('.accordion-fade-left');
                
                fadeUpElements.forEach(el => el.classList.add('animate'));
                fadeScaleElements.forEach(el => el.classList.add('animate'));
                fadeLeftElements.forEach(el => el.classList.add('animate'));
              } else if (entry.target.id === 'global-publishing') {
                // Animate all elements in the global publishing section
                const fadeUpElements = entry.target.querySelectorAll('.fade-up');
                const fadeScaleElements = entry.target.querySelectorAll('.fade-scale');
                const fadeLeftElements = entry.target.querySelectorAll('.fade-left');
                
                fadeUpElements.forEach(el => el.classList.add('animate'));
                fadeScaleElements.forEach(el => el.classList.add('animate'));
                fadeLeftElements.forEach(el => el.classList.add('animate'));
              } else if (entry.target.id === 'book-marketing') {
                // Animate all elements in the book marketing section
                const fadeUpElements = entry.target.querySelectorAll('.fade-up');
                const fadeScaleElements = entry.target.querySelectorAll('.fade-scale');
                const fadeLeftElements = entry.target.querySelectorAll('.fade-left');
                const revealImgElements = entry.target.querySelectorAll('.reveal-img');
                
                fadeUpElements.forEach(el => el.classList.add('animate'));
                fadeScaleElements.forEach(el => el.classList.add('animate'));
                fadeLeftElements.forEach(el => el.classList.add('animate'));
                revealImgElements.forEach(el => el.classList.add('animate'));
              } else if (entry.target.id === 'children-stories') {
                // Animate all elements in the children's stories section
                const fadeUpElements = entry.target.querySelectorAll('.fade-up');
                const fadeScaleElements = entry.target.querySelectorAll('.fade-scale');
                const fadeLeftElements = entry.target.querySelectorAll('.fade-left');
                const revealImgElements = entry.target.querySelectorAll('.reveal-img');
                
                fadeUpElements.forEach(el => el.classList.add('animate'));
                fadeScaleElements.forEach(el => el.classList.add('animate'));
                fadeLeftElements.forEach(el => el.classList.add('animate'));
                revealImgElements.forEach(el => el.classList.add('animate'));
              } else if (entry.target.id === 'cta-section') {
                // Animate all elements in the CTA section
                const fadeUpElements = entry.target.querySelectorAll('.fade-up');
                const fadeScaleElements = entry.target.querySelectorAll('.fade-scale');
                const fadeLeftElements = entry.target.querySelectorAll('.fade-left');
                const revealImgElements = entry.target.querySelectorAll('.reveal-img');
                
                fadeUpElements.forEach(el => el.classList.add('animate'));
                fadeScaleElements.forEach(el => el.classList.add('animate'));
                fadeLeftElements.forEach(el => el.classList.add('animate'));
                revealImgElements.forEach(el => el.classList.add('animate'));
              }
            } else {
              // Remove animation classes when leaving viewport
              if (entry.target.getAttribute('data-section') === 'hero') {
                // Remove animation classes from all elements in the hero section
                const fadeUpElements = entry.target.querySelectorAll('.hero-fade-up');
                const fadeScaleElements = entry.target.querySelectorAll('.hero-fade-scale');
                const fadeLeftElements = entry.target.querySelectorAll('.accordion-fade-left');
                
                fadeUpElements.forEach(el => el.classList.remove('animate'));
                fadeScaleElements.forEach(el => el.classList.remove('animate'));
                fadeLeftElements.forEach(el => {
                  console.log('Removing animate class from hero fadeLeft element:', el);
                  el.classList.remove('animate');
                });
              } else if (entry.target.classList.contains('accordion-section')) {
                // Remove animation classes from all elements
                const fadeUpElements = entry.target.querySelectorAll('.accordion-fade-up');
                const fadeScaleElements = entry.target.querySelectorAll('.accordion-fade-scale');
                const fadeLeftElements = entry.target.querySelectorAll('.accordion-fade-left');
                
                fadeUpElements.forEach(el => el.classList.remove('animate'));
                fadeScaleElements.forEach(el => el.classList.remove('animate'));
                fadeLeftElements.forEach(el => el.classList.remove('animate'));
              } else if (entry.target.id === 'global-publishing') {
                // Remove animation classes from all elements
                const fadeUpElements = entry.target.querySelectorAll('.fade-up');
                const fadeScaleElements = entry.target.querySelectorAll('.fade-scale');
                const fadeLeftElements = entry.target.querySelectorAll('.fade-left');
                
                fadeUpElements.forEach(el => el.classList.remove('animate'));
                fadeScaleElements.forEach(el => el.classList.remove('animate'));
                fadeLeftElements.forEach(el => el.classList.remove('animate'));
              } else if (entry.target.id === 'book-marketing') {
                // Remove animation classes from all elements
                const fadeUpElements = entry.target.querySelectorAll('.fade-up');
                const fadeScaleElements = entry.target.querySelectorAll('.fade-scale');
                const fadeLeftElements = entry.target.querySelectorAll('.fade-left');
                const revealImgElements = entry.target.querySelectorAll('.reveal-img');
                
                fadeUpElements.forEach(el => el.classList.remove('animate'));
                fadeScaleElements.forEach(el => el.classList.remove('animate'));
                fadeLeftElements.forEach(el => el.classList.remove('animate'));
                revealImgElements.forEach(el => el.classList.remove('animate'));
              } else if (entry.target.id === 'children-stories') {
                // Remove animation classes from all elements
                const fadeUpElements = entry.target.querySelectorAll('.fade-up');
                const fadeScaleElements = entry.target.querySelectorAll('.fade-scale');
                const fadeLeftElements = entry.target.querySelectorAll('.fade-left');
                const revealImgElements = entry.target.querySelectorAll('.reveal-img');
                
                fadeUpElements.forEach(el => el.classList.remove('animate'));
                fadeScaleElements.forEach(el => el.classList.remove('animate'));
                fadeLeftElements.forEach(el => el.classList.remove('animate'));
                revealImgElements.forEach(el => el.classList.remove('animate'));
              } else if (entry.target.id === 'cta-section') {
                // Remove animation classes from all elements
                const fadeUpElements = entry.target.querySelectorAll('.fade-up');
                const fadeScaleElements = entry.target.querySelectorAll('.fade-scale');
                const fadeLeftElements = entry.target.querySelectorAll('.fade-left');
                const revealImgElements = entry.target.querySelectorAll('.reveal-img');
                
                fadeUpElements.forEach(el => el.classList.remove('animate'));
                fadeScaleElements.forEach(el => el.classList.remove('animate'));
                fadeLeftElements.forEach(el => el.classList.remove('animate'));
                revealImgElements.forEach(el => el.classList.remove('animate'));
              }
            }
          });
        },
        {
          threshold: 0.25, // Trigger when 25% of the element is visible
          rootMargin: '0px 0px -50px 0px' // Start animation slightly before element comes into view
        }
      );

      // Observe all sections
      const heroSection = document.querySelector('[data-section="hero"]');
      const accordionSection = document.querySelector('.accordion-section');
      const globalPublishingSection = document.getElementById('global-publishing');
      const bookMarketingSection = document.getElementById('book-marketing');
      const childrenStoriesSection = document.getElementById('children-stories');
      const ctaSection = document.getElementById('cta-section');
      
      if (heroSection) {
        observer.observe(heroSection);
        console.log('Hero section observer set up successfully');
      } else {
        console.log('Hero section not found, retrying...');
      }
      if (accordionSection) {
        observer.observe(accordionSection);
      }
      if (globalPublishingSection) {
        observer.observe(globalPublishingSection);
      }
      if (bookMarketingSection) {
        observer.observe(bookMarketingSection);
      }
      if (childrenStoriesSection) {
        observer.observe(childrenStoriesSection);
      }
      if (ctaSection) {
        observer.observe(ctaSection);
      }

      return observer;
    };

    // Set up observer with a small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      const observer = setupObserver();
      
      // Store observer reference for cleanup
      window.heroObserver = observer;
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (window.heroObserver) {
        window.heroObserver.disconnect();
      }
    };
  }, []);

  return (
    <main className="min-h-screen">
      <Header />

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
            
            {/* Right Column - Images with Chain Carousel Animation */}
            <div className="lg:col-span-2 hidden lg:block">
              <div className="flex justify-center items-center h-full relative overflow-hidden">
                <div className="flex items-center justify-center space-x-8 relative mt-20">
                  <img
                    src="/images/bookpublishingpoint_images/5.png"
                    alt="Self Publishing Service 1"
                    className="w-64 h-64 object-contain rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 chain-animate chain-delay-1"
                  />
                  <img
                    src="/images/bookpublishingpoint_images/6.png"
                    alt="Self Publishing Service 2"
                    className="w-64 h-64 object-contain rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 chain-animate chain-delay-2"
                  />
                  <img
                    src="/images/bookpublishingpoint_images/7.png"
                    alt="Self Publishing Service 3"
                    className="w-64 h-64 object-contain rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 chain-animate chain-delay-3"
                  />
                  <img
                    src="/images/bookpublishingpoint_images/2.png"
                    alt="Self Publishing Service 4"
                    className="w-64 h-64 object-contain rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 chain-animate chain-delay-4"
                  />
                  <img
                    src="/images/bookpublishingpoint_images/3.png"
                    alt="Self Publishing Service 5"
                    className="w-64 h-64 object-contain rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 chain-animate chain-delay-5"
                  />
                  <img
                    src="/images/bookpublishingpoint_images/4.png"
                    alt="Self Publishing Service 6"
                    className="w-64 h-64 object-contain rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 chain-animate chain-delay-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section className="accordion-section h-screen flex items-center">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Left Column - Empty (reserved for future images) */}
            <div className="lg:col-span-2 hidden lg:block">
              <div className="flex justify-center items-start h-full pt-24">
                <img 
                  src="/images/dots.png" 
                  alt="Decorative Dots" 
                  className="max-w-full h-auto object-contain accordion-fade-left"
                  style={{ maxHeight: '400px' }}
                  id="accordion-image"
                />
              </div>
            </div>
            
            {/* Right Column - Accordion Content */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3 accordion-fade-up">
                What Sets This{' '}
                <span className="text-[#0B3C74]">Book Publishing</span><br />
                <span className="text-[#0B3C74]">Company</span> Apart
              </h2>
              
              <div className="space-y-1 accordion-fade-up" style={{ transitionDelay: '120ms' }}>
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
              
              {/* CTA Button */}
              <div className="mt-8 accordion-fade-scale" style={{ transitionDelay: '200ms' }}>
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-2 bg-[#0B3C74] hover:bg-[#0A2E5C] text-white px-6 py-3 rounded-lg font-semibold text-sm uppercase tracking-wide transition-colors duration-300 no-underline scrolling-text-btn"
                >
                  <span className="text-white text" data-text="START PROJECT">START PROJECT</span>
                  <svg className="w-4 h-4 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
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
              Bytes Press is a results-driven book publishing company built for authors who want more than promises. We offer a complete, professional book publishing solution — writing, editing, design, publishing — all under one roof, all done right.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Book Publishing Service */}
            <div className="service-card-scrollable group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-[#0B3C74] transition-all duration-300 transform hover:-translate-y-2">
              <div className="service-card-header">
                <div className="w-16 h-16 bg-[#0B3C74] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0B3C74] transition-colors duration-300">
                  Book Publishing
                </h3>
              </div>
              <div className="service-card-content">
                <p className="text-gray-600 leading-relaxed mb-4">
                  Complete publishing solutions from manuscript review to final print, ensuring your book meets industry standards. Our comprehensive approach covers every aspect of the publishing process, from initial manuscript assessment to final distribution. We work with authors to create professional-quality books that stand out in today's competitive market.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our team of experienced professionals ensures your book meets all industry standards and requirements. We handle everything from ISBN registration to copyright protection, making sure your publishing journey is smooth and successful.
                </p>
              </div>
              <div className="service-card-footer">
                <a href="/services" className="inline-flex items-center text-[#0B3C74] font-medium hover:text-[#0A2E5C] transition-colors duration-300">
                  Learn More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Ghostwriting Service */}
            <div className="service-card-scrollable group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-[#0B3C74] transition-all duration-300 transform hover:-translate-y-2">
              <div className="service-card-header">
                <div className="w-16 h-16 bg-[#0B3C74] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0B3C74] transition-colors duration-300">
                  Ghostwriting
                </h3>
              </div>
              <div className="service-card-content">
                <p className="text-gray-600 leading-relaxed mb-4">
                  Professional writing services that capture your voice and vision, turning ideas into compelling narratives. Our expert ghostwriters work closely with you to understand your story, your message, and your unique perspective. We ensure that every word reflects your authentic voice while maintaining the highest standards of professional writing.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  From concept development to final manuscript, our ghostwriting process is collaborative and transparent. We provide regular updates and revisions, ensuring the final product exceeds your expectations and resonates with your target audience.
                </p>
              </div>
              <div className="service-card-footer">
                <a href="/services" className="inline-flex items-center text-[#0B3C74] font-medium hover:text-[#0A2E5C] transition-colors duration-300">
                  Learn More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Book Formatting Service */}
            <div className="service-card-scrollable group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-[#0B3C74] transition-all duration-300 transform hover:-translate-y-2">
              <div className="service-card-header">
                <div className="w-16 h-16 bg-[#0B3C74] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0B3C74] transition-colors duration-300">
                  Book Formatting
                </h3>
              </div>
              <div className="service-card-content">
                <p className="text-gray-600 leading-relaxed mb-4">
                  Professional layout and formatting services ensuring your book looks polished across all platforms and devices. Our expert designers understand the technical requirements for various publishing formats, from print books to e-books and audiobooks. We ensure your content is presented in the most professional and visually appealing way possible.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We handle everything from typography and spacing to image placement and chapter organization. Our formatting process ensures consistency throughout your book while maintaining readability and visual appeal across all devices and platforms.
                </p>
              </div>
              <div className="service-card-footer">
                <a href="/services" className="inline-flex items-center text-[#0B3C74] font-medium hover:text-[#0A2E5C] transition-colors duration-300">
                  Learn More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Editing & Proofreading Service */}
            <div className="service-card-scrollable group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-[#0B3C74] transition-all duration-300 transform hover:-translate-y-2">
              <div className="service-card-header">
                <div className="w-16 h-16 bg-[#0B3C74] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0B3C74] transition-colors duration-300">
                  Editing & Proofreading
                </h3>
              </div>
              <div className="service-card-content">
                <p className="text-gray-600 leading-relaxed mb-4">
                  Comprehensive editing services that refine your content for clarity, accuracy, and professional presentation. Our experienced editors work at multiple levels, from structural editing that improves overall flow and organization to line editing that enhances clarity and style. We also provide thorough proofreading to catch any remaining errors.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our editing process includes multiple rounds of review, ensuring your manuscript is polished to perfection. We provide detailed feedback and suggestions, helping you understand the changes and learn from the editing process for future writing projects.
                </p>
              </div>
              <div className="service-card-footer">
                <a href="/services" className="inline-flex items-center text-[#0B3C74] font-medium hover:text-[#0A2E5C] transition-colors duration-300">
                  Learn More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#f8fafc] to-[#e2e8f0]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Get your project off the ground today
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="get-started-btn">
              Get Started Now
            </a>
          </div>
        </div>
      </section>

      {/* Self Publishing Process Section */}
      <section className="pt-20 pb-2 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              A Self Publishing Process That Keeps You in Control
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At Bytes Press, we've mapped out a smooth, transparent process designed for authors who want more than just printing. As a trusted self publishing company, we provide a professional book publishing solution that keeps you in the loop from first draft to final launch, without the confusion.
            </p>
          </div>

          {/* Process Steps Around Image */}
          <div className="relative max-w-7xl mx-auto px-16">
            {/* Central Image */}
            <div className="text-center mb-48">
              <img 
                src="/images/img-1.png" 
                alt="Book Publishing Process" 
                className="mx-auto max-w-md h-auto relative z-10"
              />
            </div>

            {/* Step 1 - Top Left */}
            <div className="absolute top-4 left-16 w-80 h-48 bg-white p-6 rounded-xl shadow-lg border-2 border-gray-200 hover:shadow-xl transition-all duration-300 z-20">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#0B3C74] rounded-full flex items-center justify-center mr-4 shadow-md">
                  <span className="text-white font-bold text-lg">01</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 leading-tight">Submission</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-0">
                Send us your manuscript and publishing goals. Our team reviews the content and gets aligned with your vision before anything moves forward.
              </p>
            </div>

            {/* Step 2 - Bottom Left */}
            <div className="absolute top-64 left-16 w-80 h-48 bg-white p-6 rounded-xl shadow-lg border-2 border-gray-200 hover:shadow-xl transition-all duration-300 z-20">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#0B3C74] rounded-full flex items-center justify-center mr-4 shadow-md">
                  <span className="text-white font-bold text-lg">02</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 leading-tight">Proofreading & Editing</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-0">
                We fine-tune your draft for grammar, structure, and clarity. Our editors work line by line to meet top-tier publishing standards and polish your message.
              </p>
            </div>

            {/* Step 3 - Top Right */}
            <div className="absolute top-4 right-16 w-80 h-48 bg-white p-6 rounded-xl shadow-lg border-2 border-gray-200 hover:shadow-xl transition-all duration-300 z-20">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#0B3C74] rounded-full flex items-center justify-center mr-4 shadow-md">
                  <span className="text-white font-bold text-lg">03</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 leading-tight">Typesetting & Images</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-0">
                We fine-tune your draft for grammar, structure, and clarity. Our editors work line by line to meet top-tier publishing standards and polish your message.
              </p>
            </div>

            {/* Step 4 - Bottom Right */}
            <div className="absolute top-64 right-16 w-80 h-48 bg-white p-6 rounded-xl shadow-lg border-2 border-gray-200 hover:shadow-xl transition-all duration-300 z-20">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#0B3C74] rounded-full flex items-center justify-center mr-4 shadow-md">
                  <span className="text-white font-bold text-lg">04</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 leading-tight">Book Cover Design</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-0">
                We create striking, market-ready covers that capture your book's message with layout, typography, and concept drafts for approval.
              </p>
            </div>




          </div>
        </div>
      </section>

      {/* A Global Book Publishing Company Section */}
      <section id="global-publishing" className="pt-0 pb-0 -mt-24 h-[90vh] bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Reserved for Images (Blank Placeholder) */}
            <div className="hidden lg:block">
              <div className="flex justify-center items-center h-full">
                <img 
                  src="/images/global.png" 
                  alt="Global Book Publishing" 
                  className="max-w-full h-auto object-contain fade-left"
                  style={{ maxHeight: '400px' }}
                />
              </div>
            </div>
            
            {/* Right Column - Text Content */}
            <div className="pt-16 flex flex-col items-start justify-center">
              <h2 className="hero-title mb-6 mt-0 fade-up">
                <span className="text-[#0B3C74]">A Global Book Publishing</span>
                <span className="text-gray-900"> Company</span>
              </h2>
              
              <div className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 space-y-4 max-w-3xl fade-up" style={{ transitionDelay: '120ms' }}>
                <p>
                  We help you go beyond borders. As a leading global book publishing brand, we take your work from draft to distribution across Amazon, online retailers, and digital libraries worldwide.
                </p>
                <p>
                  Need a fast, reliable electronic book publishing solution? We've got it covered. From formatting to launch, we manage every step so your book shows up where your readers already are.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 fade-scale" style={{ transitionDelay: '200ms' }}>
                <a href="/contact" className="inline-flex items-center gap-3 bg-[#0B3C74] hover:bg-[#0A2E5C] text-white px-8 py-4 rounded-lg font-bold text-base uppercase tracking-wide transition-colors duration-300 no-underline">
                  <span className="text-white">START PROJECT</span>
                  <svg className="w-4 h-4 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Marketing Services Section */}
      <section id="book-marketing" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-left">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 fade-up">
                <span className="text-indigo-900">Book Marketing Services</span> That Put Your Title in Motion
              </h2>
              
              <div className="text-gray-600 text-lg leading-relaxed mb-8 space-y-4 max-w-2xl fade-up" style={{ transitionDelay: '120ms' }}>
                <p>
                  Marketing your book doesn't need to be guesswork. Whether you're launching a novel or a Marketing For Beginners Book, we build real visibility through targeted self published book marketing that drives results.
                </p>
                <p>
                  From Amazon optimization to social media and outreach, we get your book seen by the right readers — fast. No fluff, just strategy that moves copies and grows your author brand.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 fade-scale" style={{ transitionDelay: '200ms' }}>
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-3 bg-indigo-900 hover:bg-indigo-800 text-white px-8 py-4 rounded-lg font-bold text-base uppercase tracking-wide transition-colors duration-300 no-underline"
                  aria-label="Start book marketing project"
                >
                  <span className="text-white">START PROJECT</span>
                  <svg className="w-4 h-4 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Right Column - Image */}
            <div className="hidden lg:block">
              <div className="flex justify-center items-center h-full reveal-img">
                <img 
                  src="/images/bookpublishingpoint_images/1.png" 
                  alt="Book Marketing Services" 
                  className="max-w-full h-auto object-contain fade-left"
                  style={{ maxHeight: '600px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Children's Book Stories Section */}
      <section id="children-stories" className="py-20 bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            {/* Left Column - Empty (Reserved for future image) */}
            <div className="hidden md:block">
              <div className="flex justify-center items-center h-full reveal-img">
                <img 
                  src="/images/create.png" 
                  alt="Children's Book Stories" 
                  className="max-w-full h-auto object-contain fade-left"
                  style={{ maxHeight: '400px' }}
                />
              </div>
            </div>
            
            {/* Right Column - Content (Left-aligned) */}
            <div className="text-left md:text-left order-2 md:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 fade-up">
                Create timeless <span className="text-indigo-900">children's stories</span> with Bytes Press
              </h2>
              
              <div className="text-gray-600 text-lg leading-relaxed mb-8 space-y-4 max-w-2xl fade-up" style={{ transitionDelay: '120ms' }}>
                <p>
                  Are you an aspiring children's book author? At Bytes Press, we understand the importance of captivating young readers with memorable stories. Our Children's Book Service offers the guidance and support you need to bring your book to life. With our experienced team, we'll help you develop a unique and engaging plot, characters, and storyline across various age groups. Our comprehensive service covers editing, proofreading, formatting, illustrating, and designing to ensure a polished and professional book.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 fade-scale" style={{ transitionDelay: '200ms' }}>
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-3 bg-indigo-900 hover:bg-indigo-800 text-white px-8 py-4 rounded-lg font-bold text-base uppercase tracking-wide transition-colors duration-300 no-underline"
                  aria-label="Start children's book project"
                >
                  <span className="text-white">START PROJECT</span>
                  <svg className="w-4 h-4 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section id="cta-section" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="hidden lg:block">
              <div className="flex justify-start items-center h-full -ml-16 reveal-img">
                <img
                  src="/images/cta-left.webp"
                  alt="Self-publishing Success"
                  className="max-w-full h-auto object-contain fade-left"
                  style={{ maxHeight: '350px' }}
                />
              </div>
            </div>
            
            {/* Center Column - Content */}
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 fade-up">
                <span className="whitespace-nowrap">Unlock the secrets to</span> <span className="text-indigo-900 whitespace-nowrap">successful Self-publishing</span>
              </h2>
              
              <div className="text-gray-600 text-lg md:text-xl mb-8 space-y-2 fade-up" style={{ transitionDelay: '120ms' }}>
                <p>Call Us to begin your project today!</p>
                <p>Made 300+ Authors/Writers Dreams Come True.</p>
              </div>
              
              <div className="flex justify-center fade-scale" style={{ transitionDelay: '200ms' }}>
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-3 bg-indigo-900 hover:bg-indigo-800 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-300 no-underline"
                  aria-label="Get started now"
                >
                  <span>Get started now</span>
                  <svg className="w-4 h-4 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="hidden lg:block">
              <div className="flex justify-end items-center h-full -mr-8 reveal-img">
                <img 
                  src="/images/cta-right.webp" 
                  alt="Self-publishing Success" 
                  className="max-w-full h-auto object-contain fade-left"
                  style={{ maxHeight: '400px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Publishing Integration Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center flex flex-col items-center">
                          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
                Where <span className="text-indigo-900">Book Publishing</span>, <span className="text-indigo-900">Writing</span>, <span className="text-indigo-900">Editing</span>, and <span className="text-indigo-900">Design</span> Actually Work Together
              </h2>
            
            <div className="text-base sm:text-lg text-gray-700 max-w-prose mt-6 space-y-4">
              <p>
                From concept to bookshelf, we align strategy, storytelling, and production so your book looks great and sells better.
              </p>
              <p>
                Our integrated team handles writing, editing, layout, and distribution to deliver a polished, market-ready title.
              </p>
            </div>
            
            {/* Space for Books Picture */}
            <div className="mt-12 mb-12 h-48"></div>
            
            <div className="mt-6">
              <a 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-indigo-900 hover:bg-indigo-800 text-white px-6 py-3 rounded-xl font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300 no-underline"
                aria-label="Get started now"
              >
                <span>Get started now</span>
                <svg className="w-4 h-4 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Why Authors Trust CTA Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold leading-tight text-gray-900">
            Why Authors Trust <span className="text-indigo-900">Bytes Press</span> to Get It Done Right
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-4xl mx-auto">
            No fluff, no drag. At Bytes Press, we work with writers who are serious about getting published — whether it's their first shot or their fifth. Our team handles the production while you stay focused on the story. Fast communication, sharp execution, and real results. That's what we bring to the table.
          </p>
          <div className="mt-8">
            <a href="#contact" aria-label="Get started now"
               className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-indigo-900 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              GET STARTED NOW <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Chain Section */}
      <TestimonialsChain />



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

      <Footer />
    </main>
  )
}
