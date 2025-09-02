'use client';

import './page.css';
import { useState, useEffect } from 'react';
import GetStartedForm from '../../../components/ui/GetStartedForm';
import Footer from '../../../components/Footer';

export default function BookPublishingServices() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [section1Visible, setSection1Visible] = useState(false);
  const [section2Visible, setSection2Visible] = useState(false);
  const [section3Visible, setSection3Visible] = useState(false);
  const [section4Visible, setSection4Visible] = useState(false);
  const [section5Visible, setSection5Visible] = useState(false);
  const [section6Visible, setSection6Visible] = useState(false);
  const [section7Visible, setSection7Visible] = useState(false);
  const [section9Visible, setSection9Visible] = useState(false);
  const [section10Visible, setSection10Visible] = useState(false);

  const toggleFAQ = (index: number) => {
    if (openFAQ === index) {
      setOpenFAQ(null);
    } else {
      setOpenFAQ(index);
    }
  };

  // Intersection Observer for Section 1 animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSection1Visible(true);
          } else {
            setSection1Visible(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    const section1Element = document.getElementById('section-1');
    if (section1Element) {
      observer.observe(section1Element);
    }

    return () => {
      if (section1Element) {
        observer.unobserve(section1Element);
      }
    };
  }, []);

  // Intersection Observer for Section 2 animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSection2Visible(true);
          } else {
            setSection2Visible(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    const section2Element = document.getElementById('section-2');
    if (section2Element) {
      observer.observe(section2Element);
    }

    return () => {
      if (section2Element) {
        observer.unobserve(section2Element);
      }
    };
  }, []);

  // Intersection Observer for Section 3 animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSection3Visible(true);
          } else {
            setSection3Visible(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    const section3Element = document.getElementById('section-3');
    if (section3Element) {
      observer.observe(section3Element);
    }

    return () => {
      if (section3Element) {
        observer.unobserve(section3Element);
      }
    };
  }, []);

  // Intersection Observer for Section 4 animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSection4Visible(true);
          } else {
            setSection4Visible(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    const section4Element = document.getElementById('section-4');
    if (section4Element) {
      observer.observe(section4Element);
    }

    return () => {
      if (section4Element) {
        observer.unobserve(section4Element);
      }
    };
  }, []);

  // Intersection Observer for Section 5 animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSection5Visible(true);
          } else {
            setSection5Visible(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    const section5Element = document.getElementById('section-5');
    if (section5Element) {
      observer.observe(section5Element);
    }

    return () => {
      if (section5Element) {
        observer.unobserve(section5Element);
      }
    };
  }, []);

  // Intersection Observer for Section 6 animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSection6Visible(true);
          } else {
            setSection6Visible(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    const section6Element = document.getElementById('section-6');
    if (section6Element) {
      observer.observe(section6Element);
    }

    return () => {
      if (section6Element) {
        observer.unobserve(section6Element);
      }
    };
  }, []);

  // Intersection Observer for Section 7 animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSection7Visible(true);
          } else {
            setSection7Visible(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    const section7Element = document.getElementById('section-7');
    if (section7Element) {
      observer.observe(section7Element);
    }

    return () => {
      if (section7Element) {
        observer.unobserve(section7Element);
      }
    };
  }, []);

  // Intersection Observer for Section 9 animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSection9Visible(true);
          } else {
            setSection9Visible(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    const section9Element = document.getElementById('section-9');
    if (section9Element) {
      observer.observe(section9Element);
    }

    return () => {
      if (section9Element) {
        observer.unobserve(section9Element);
      }
    };
  }, []);

  // Intersection Observer for Section 10 animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSection10Visible(true);
          } else {
            setSection10Visible(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    const section10Element = document.getElementById('section-10');
    if (section10Element) {
      observer.observe(section10Element);
    }

    return () => {
      if (section10Element) {
        observer.unobserve(section10Element);
      }
    };
  }, []);

  // Testimonials data
  const TESTIMONIALS = [
    {
      name: "Prof. Robert Stewart",
      role: "Professional, responsive, and genuinely invested",
      quote: "I've worked with other publishing companies before, but none matched the level of communication and precision I experienced at Bytes Press. Every detail was handled with care, and the final product exceeded my expectations.",
      rating: 5,
      date: "June 21, 2024",
      reviewCount: 6
    },
    {
      name: "Paul Henderson",
      role: "Smooth from start to finish",
      quote: "What impressed me most was how quickly they understood what I wanted — and how fast they delivered. From formatting to feedback, every step felt organized and professional.",
      rating: 5,
      date: "May 7, 2024",
      reviewCount: 2
    },
    {
      name: "Cortez Ellis",
      role: "A company that actually follows through",
      quote: "Most promises in publishing fall flat. Not here. The team at Bytes Press didn't just talk a good game — they delivered my book to market on time and exactly how I envisioned it.",
      rating: 5,
      date: "May 13, 2024",
      reviewCount: 2
    },
    {
      name: "Melanie Rogers",
      role: "Outstanding attention to detail",
      quote: "From the first draft to the final print, every correction and suggestion made my manuscript stronger. I'm thrilled with the professional polish.",
      rating: 5,
      date: "April 18, 2024",
      reviewCount: 3
    },
    {
      name: "Dr. Lisa Chen",
      role: "Made publishing simple",
      quote: "The team walked me through each stage with clarity and patience. Publishing my first research book felt effortless.",
      rating: 5,
      date: "March 12, 2024",
      reviewCount: 1
    },
    {
      name: "Jamal Thompson",
      role: "Exceptional marketing support",
      quote: "BytePress didn't stop at publishing; their marketing strategies put my book in front of the right readers and sales followed.",
      rating: 5,
      date: "February 3, 2024",
      reviewCount: 5
    }
  ];

  // Star Rating Component
  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-[#0B3C74]' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  // Testimonial Card Component
  const TestimonialCard = ({ testimonial }: { testimonial: any }) => (
    <div className="train-card w-72 h-96 bg-white rounded-xl shadow-lg border border-gray-100 p-6 flex-none flex flex-col justify-between hover:scale-105 transition-all relative overflow-hidden group">
      {/* Blue fill effect on hover */}
      <div className="absolute inset-0 bg-[#0B3C74] transform scale-0 group-hover:scale-100 transition-transform duration-300 origin-top-left rounded-xl"></div>
      
      {/* Content with relative positioning to stay above the blue fill */}
      <div className="relative z-10 flex flex-col justify-between h-full">
        {/* Top section with stars and date */}
        <div className="flex items-center justify-between mb-3">
          <StarRating rating={testimonial.rating} />
          <div className="text-sm text-gray-500 group-hover:text-white transition-colors duration-300">{testimonial.date}</div>
        </div>

        {/* Author name and review count */}
        <div className="mb-3">
          <div className="font-semibold text-gray-900 text-lg group-hover:text-white transition-colors duration-300">{testimonial.name}</div>
          <div className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300">{testimonial.reviewCount} Review{testimonial.reviewCount !== 1 ? 's' : ''}</div>
        </div>

        {/* Role/headline */}
        <h4 className="font-bold text-gray-900 text-base mb-3 group-hover:text-white transition-colors duration-300">{testimonial.role}</h4>

        {/* Quote */}
        <div className="text-gray-700 leading-relaxed text-sm group-hover:text-white transition-colors duration-300">
          {testimonial.quote}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Section 1 - Hero - 90vh Height */}
      <section id="section-1" className="h-[88vh] bg-cover bg-center bg-no-repeat flex items-center justify-center relative overflow-hidden" style={{ backgroundImage: 'url(/shelf.png)' }}>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 to-gray-100/80"></div>
        
        <div className="container mx-auto px-4 relative z-10 flex items-center justify-between h-full">
          <div className="max-w-3xl text-left ml-8 md:ml-16 lg:ml-24">
            <h1 className={`text-2xl md:text-3xl lg:text-4xl font-black mb-4 leading-tight transition-all duration-1000 ${
              section1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <span className="text-[#0B3C74]">Book Publishing Services That Get</span><br />
              <span className="text-black">Your Story Out There Powered by</span><br />
              <span className="text-[#0B3C74]">Bytes Press</span>
            </h1>
            <p className={`text-base md:text-lg text-black mb-6 leading-relaxed transition-all duration-1000 delay-[100ms] ${
              section1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              Welcome to Bytes Press, where strategy meets storytelling. Our book publishing services are built to move your manuscript from draft to bookstore with clarity, speed, and support. Whether you're chasing reach or refinement, we offer a professional book publishing solution that stays sharp and affordable.
            </p>
            
            {/* Hero Buttons - Same as Home Page */}
            <div className={`flex flex-col sm:flex-row gap-3 transition-all duration-1000 delay-[180ms] ${
              section1Visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
            }`}>
              <a href="/contact" className="inline-flex items-center gap-3 bg-[#0B3C74] hover:bg-[#0A2E5C] text-white px-8 py-4 rounded-lg font-bold text-base uppercase tracking-wide transition-colors duration-300 no-underline">
                <span className="text-white">START PROJECT</span>
                <svg className="w-4 h-4 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Astronaut Image on Right Side */}
          <div className="flex-shrink-0 mr-8 md:mr-16 lg:mr-24">
            <img 
              src="/astronaut.png" 
              alt="Astronaut" 
              className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain animate-float"
            />
          </div>
        </div>
      </section>

      {/* Section 2 - Fits in Viewport with Form */}
      <section id="section-2" className="h-screen bg-white flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
            {/* Left Side - Book Publishing Solution Text */}
            <div className="flex items-center">
              <div className="max-w-2xl">
                <h2 className={`text-3xl md:text-4xl font-bold mb-4 leading-tight transition-all duration-1000 ${
                  section2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                  <span className="text-black">A Book Publishing Solution That </span>
                  <span className="text-[#0B3C74]">Works Without Breaking the Bank</span>
                </h2>
                
                <div className={`space-y-3 text-gray-700 text-base leading-relaxed transition-all duration-1000 delay-[120ms] ${
                  section2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                  <p>
                    At Bytes Press, we make it easy to publish with purpose. Our team delivers a complete book publishing solution that covers everything from editing and design to launch and distribution.
                  </p>
                  
                  <p>
                    Whether you're just starting or scaling your author brand, we offer affordable book publishing that never cuts corners.
                  </p>
                  
                  <p>
                    Need clarity on the publishing price? You'll get full transparency up front — no surprises, just real value packed into every step.
                  </p>
                </div>
                
                {/* Get Started Button - Same as Hero Section */}
                <div className={`mt-6 transition-all duration-1000 delay-[180ms] ${
                  section2Visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
                }`}>
                  <a href="/contact" className="inline-flex items-center gap-3 bg-[#0B3C74] hover:bg-[#0A2E5C] active:bg-[#0A2E5C] text-white px-8 py-4 rounded-lg font-bold text-lg uppercase tracking-wide transition-colors duration-300 no-underline select-none">
                    <span className="text-white">Get Started</span>
                    <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Right Side - Get in Touch Form */}
            <div className={`flex items-center justify-center transition-all duration-1000 ${
              section2Visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <div className="w-full max-w-xs bg-white rounded-lg p-6 shadow-xl border border-gray-300 shadow-[#0B3C74]/20 ring-2 ring-[#0B3C74]/10 reveal-img">
                <h3 className="text-lg font-bold text-[#0B3C74] mb-4 text-center">
                  Get in Touch
                </h3>
                
                <form className="space-y-3">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0B3C74]/20 focus:border-[#0B3C74] transition-all duration-300 text-sm bg-gray-50 hover:bg-white"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0B3C74]/20 focus:border-[#0B3C74] transition-all duration-300 text-sm bg-gray-50 hover:bg-white"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-800 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0B3C74]/20 focus:border-[#0B3C74] transition-all duration-300 text-sm bg-gray-50 hover:bg-white"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0B3C74]/20 focus:border-[#0B3C74] transition-all duration-300 resize-none text-sm bg-gray-50 hover:bg-white"
                      placeholder="Tell us about your project"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-[#0B3C74] hover:bg-[#0A2E5C] text-white font-semibold py-2 px-4 rounded-md transition-all duration-300 text-sm shadow-md hover:shadow-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Light Blue - Same Size as Section 2 */}
      <section id="section-3" className="h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
            {/* Left Side - Publishing Image */}
            <div className={`flex items-center justify-start transition-all duration-1000 ${
              section3Visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <img 
                src="/images/bookpublishingpoint_images/bk-sl1.webp" 
                alt="Book Publishing Process" 
                className="max-w-lg h-auto object-contain ml-8 reveal-img"
              />
            </div>
            
            {/* Right Side - Publishing Simplified Text */}
            <div className="flex items-center">
              <div className="max-w-2xl">
                <h2 className={`text-3xl md:text-4xl font-bold mb-6 leading-tight transition-all duration-1000 ${
                  section3Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                  <span className="text-[#0B3C74]">Publishing a Book Shouldn't Feel Complicated</span>
                  <span className="text-gray-900"> — We Make It Work</span>
                </h2>
                
                <div className={`space-y-4 text-gray-700 text-lg leading-relaxed transition-all duration-1000 delay-[100ms] ${
                  section3Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                  <p>
                    Bytes Press simplifies the entire process of publishing a book, from concept to final copy. Our team handles everything — editing, layout, marketing — while keeping your goals in focus. Whether you're looking for wide distribution or print on demand book publishing, we've built systems that work at your pace.
                  </p>
                  
                  <p>
                    We believe great stories shouldn't be held back by cost. That's why we offer affordable book publishing services that don't cut quality. You stay in control while we handle the heavy lifting.
                  </p>
                </div>
                
                {/* START PROJECT Button */}
                <div className={`mt-6 transition-all duration-1000 delay-[180ms] ${
                  section3Visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
                }`}>
                  <a href="/contact" className="inline-flex items-center gap-3 bg-[#0B3C74] hover:bg-[#0A2E5C] active:bg-[#0A2E5C] text-white px-8 py-4 rounded-lg font-bold text-lg uppercase tracking-wide transition-colors duration-300 no-underline select-none">
                    <span className="text-white">START PROJECT</span>
                    <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Call to Action Banner */}
      <section id="section-4" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-blue-200 rounded-2xl p-12 text-center">
              <h2 className={`text-4xl md:text-5xl font-bold text-black mb-6 transition-all duration-1000 ${
                section4Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                Let's turn your ideas into reality.
              </h2>
              
              <p className={`text-xl text-black mb-8 leading-relaxed transition-all duration-1000 delay-[100ms] ${
                section4Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                Contact us today to discuss your project and how we can assist you in bringing your vision to life.
              </p>
              
              {/* Call to Action Buttons */}
              <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-[180ms] ${
                section4Visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
              }`}>
                <a href="/contact" className="inline-flex items-center gap-3 bg-[#0B3C74] hover:bg-[#0A2E5C] active:bg-[#0A2E5C] text-white px-8 py-4 rounded-lg font-bold text-lg uppercase tracking-wide transition-colors duration-300 no-underline select-none">
                  <span className="text-white">TALK TO OUR EXPERT</span>
                  <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                
                <a href="/contact" className="inline-flex items-center gap-3 bg-transparent border-2 border-white text-white hover:bg-transparent px-8 py-4 rounded-lg font-bold text-lg uppercase tracking-wide transition-all duration-300 no-underline">
                  <span className="text-white">START PROJECT</span>
                  <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - Full Viewport Height with Right-Aligned Text */}
      <section id="section-5" className="h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
            {/* Left Side - Publishing Image */}
            <div className={`flex items-center justify-start transition-all duration-1000 ${
              section5Visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <img 
                src="/images/bookpublishingpoint_images/publishing-1.png" 
                alt="Book Publishing Services" 
                className="max-w-lg h-auto object-contain ml-8 reveal-img"
              />
            </div>
            
            {/* Right Side - Text Content */}
            <div className="flex items-center justify-end">
              <div className="max-w-2xl text-left">
                <h2 className={`text-2xl md:text-3xl font-black mb-6 leading-tight transition-all duration-1000 ${
                  section5Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                  <span className="text-black">A Book Publishing House That </span>
                  <span className="text-[#0B3C74]">Moves Your Story Across Every Platform</span>
            </h2>
                
                <div className={`space-y-4 text-gray-700 text-base leading-relaxed transition-all duration-1000 delay-[100ms] ${
                  section5Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                  <p>
                    At Bytes Press, we're more than just a book publishing house — we're a team built to help you scale your reach, not your workload. Whether you're writing fiction, nonfiction, or diving into photo book publishing, we shape each project with precision and purpose.
                  </p>
                  
                  <p>
                    We offer a full-service publishing solution that includes editing, design, distribution, and marketing — all aligned to your voice and goals. From formatting and metadata to launch campaigns, we take the guesswork out of publishing so you can focus on the writing.
                  </p>
                  
                  <p>
                    Our reach includes top channels like Amazon publishing, Lulu publishing, and Kobo publishing, giving your work access to global markets. And with our custom book services, you'll have a clear path from first draft to finished product — no tech headaches, no missed steps, just a book that's ready to go wherever your readers are.
                  </p>
                </div>
                
                {/* START PROJECT Button */}
                <div className={`mt-6 flex justify-start transition-all duration-1000 delay-[180ms] ${
                  section5Visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
                }`}>
                  <a href="/contact" className="inline-flex items-center gap-3 bg-[#0B3C74] hover:bg-[#0A2E5C] active:bg-[#0A2E5C] text-white px-8 py-4 rounded-lg font-bold text-lg uppercase tracking-wide transition-colors duration-300 no-underline select-none">
                    <span className="text-white">START PROJECT</span>
                    <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 - Full Viewport Height with Cards Below Text */}
      <section id="section-6" className="h-screen bg-white flex items-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center h-full">
            {/* Top Section - Text Content */}
            <div className="text-center mb-8 pt-8">
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 leading-tight transition-all duration-1000 ${
                section6Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <span className="text-black">A Book Publishing Process That </span>
                <span className="text-[#0B3C74]">Works From Print to Digital</span>
            </h2>
              
              <div className="max-w-3xl mx-auto">
                <p className={`text-gray-700 text-base leading-relaxed mb-6 transition-all duration-1000 delay-[100ms] ${
                  section6Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                  We don't drag you through guesswork. At Bytes Press, our book publishing process is focused, clear, and designed to move your story forward — whether you're going to print or choosing digital book publishing. Here's how it flows:
                </p>
                
                {/* START PROJECT Button */}
                <div className={`mb-2 transition-all duration-1000 delay-[180ms] ${
                  section6Visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
                }`}>
                  <a href="/contact" className="inline-flex items-center gap-3 bg-[#0B3C74] hover:bg-[#0A2E5C] active:bg-[#0A2E5C] text-white px-8 py-4 rounded-lg font-bold text-lg uppercase tracking-wide transition-colors duration-300 no-underline select-none">
                    <span className="text-white">START PROJECT</span>
                    <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Bottom Section - Process Cards with Flip Effect */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
              {/* Card 1 - Manuscript Evaluation */}
              <div className="flip-card group">
                <div className="flip-card-inner">
                  {/* Front Side */}
                  <div className="flip-card-front bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 shadow-lg flex flex-col items-center justify-center h-64">
                    <div className="text-[#0B3C74] text-6xl mb-6 flex justify-center">
                      <span className="text-4xl font-bold">01</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 text-center">Manuscript Evaluation</h3>
                  </div>
                  {/* Back Side */}
                  <div className="flip-card-back bg-[#0B3C74] rounded-xl p-6 shadow-lg flex flex-col items-center justify-center h-64">
                    <p className="text-white text-sm leading-relaxed text-center">
                      We kick things off by reviewing your manuscript for strengths, gaps, and publishing potential. Our editors give direct, actionable feedback — not fluff — so you know exactly where you stand and what comes next.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 - Tailored Editing and Formatting */}
              <div className="flip-card group">
                <div className="flip-card-inner">
                  {/* Front Side */}
                  <div className="flip-card-front bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 shadow-lg flex flex-col items-center justify-center h-64">
                    <div className="text-[#0B3C74] text-6xl mb-6 flex justify-center">
                      <span className="text-4xl font-bold">02</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 text-center">Tailored Editing and Formatting</h3>
                  </div>
                  {/* Back Side */}
                  <div className="flip-card-back bg-[#0B3C74] rounded-xl p-6 shadow-lg flex flex-col items-center justify-center h-64">
                    <p className="text-white text-sm leading-relaxed text-center">
                      Once we've aligned on direction, our editorial team steps in. Expect clean structure, smart formatting, and language that holds up across platforms. This stage sets the tone for both print and digital formats.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 - Custom Cover Design */}
              <div className="flip-card group">
                <div className="flip-card-inner">
                  {/* Front Side */}
                  <div className="flip-card-front bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 shadow-lg flex flex-col items-center justify-center h-64">
                    <div className="text-[#0B3C74] text-6xl mb-6 flex justify-center">
                      <span className="text-4xl font-bold">03</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 text-center">Custom Cover Design</h3>
                  </div>
                  {/* Back Side */}
                  <div className="flip-card-back bg-[#0B3C74] rounded-xl p-6 shadow-lg flex flex-col items-center justify-center h-64">
                    <p className="text-white text-sm leading-relaxed text-center">
                      Your cover is your first impression — we make it count. Our designers create visuals that match your genre, audience, and message. Bold or minimalist, every design is built to grab attention and move units.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 4 - Strategic Marketing and Distribution */}
              <div className="flip-card group">
                <div className="flip-card-inner">
                  <div className="flip-card-front bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 shadow-lg flex flex-col items-center justify-center h-64">
                    <div className="text-[#0B3C74] text-6xl mb-6 flex justify-center">
                      <span className="text-4xl font-bold">04</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 text-center">Strategic Marketing and Distribution</h3>
                  </div>
                  {/* Back Side */}
                  <div className="flip-card-back bg-[#0B3C74] rounded-xl p-6 shadow-lg flex flex-col items-center justify-center h-64">
                    <p className="text-white text-sm leading-relaxed text-center">
                      Before anything goes live or to print, we run a full quality check. Spacing, layout, and file integrity — nothing is left unchecked. Once approved, your book is prepped for release, whether you're targeting bookstores or digital shelves.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 - Full Viewport Height with Left-Aligned Text - Same as Section 2 */}
      <section id="section-7" className="h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center">
        <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
            {/* Left Side - Text Content */}
            <div className="flex items-center">
              <div className="max-w-2xl">
                <h2 className={`text-3xl md:text-4xl font-bold mb-4 leading-tight transition-all duration-1000 ${
                  section7Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                  <span className="text-black">Global Publishing Services That </span>
                  <span className="text-[#0B3C74]">Keep Your Book Ready for Any Market</span>
                </h2>
                
                <div className={`space-y-3 text-gray-700 text-base leading-relaxed transition-all duration-1000 delay-[100ms] ${
                  section7Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                  <p>
                    At Bytes Press, quality doesn't stop at the edit. Our global publishing services are built to prep your manuscript for real traction across countries, platforms, and audiences. From deep content reviews to technical polish, we run every draft through a tight, professional filter.
                  </p>
                  
                  <p>
                    Our team delivers the best global publishing solutions that check for clarity, consistency, and reader impact. And when it's go-time, we're ready with worldwide publishing support to launch your book with confidence — no matter where your audience lives.
                  </p>
                </div>
                
                {/* START PROJECT Button */}
                <div className={`mt-6 transition-all duration-1000 delay-[180ms] ${
                  section7Visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
                }`}>
                  <a href="/contact" className="inline-flex items-center gap-3 bg-[#0B3C74] hover:bg-[#0A2E5C] active:bg-[#0A2E5C] text-white px-8 py-4 rounded-lg font-bold text-lg uppercase tracking-wide transition-colors duration-300 no-underline select-none">
                    <span className="text-white">START PROJECT</span>
                    <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Right Side - Editing Image */}
            <div className={`flex items-end justify-end h-full pt-20 transition-all duration-1000 ${
              section7Visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <img 
                src="/images/bookpublishingpoint_images/editing-2.png" 
                alt="Editing Services" 
                className="max-w-xl h-auto object-contain mr-4 mb-8 reveal-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 8 - What our client's say - Same Size as Section 2 */}
      <section className="h-screen bg-white flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] mb-16">
            What our client's <span className="text-[#0B3C74]">say</span>
          </h2>

          {/* Train Effect Layout */}
          <div className="train-container mb-8">
            <div className="train-track">
              {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </div>
          </div>

          <style jsx>{`
            .train-container {
              width: 100%;
              overflow: hidden;
              position: relative;
            }

            .train-track {
              display: flex;
              gap: 1.5rem;
              animation: trainMove 45s linear infinite;
              width: fit-content;
              will-change: transform;
            }

            @keyframes trainMove {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }

            @media (max-width: 768px) {
              .train-track {
                gap: 1rem;
                animation-duration: 35s;
              }
            }

            .train-card:hover {
              transform: translateY(-4px);
              box-shadow: 0 8px 24px rgba(11, 60, 116, 0.15);
            }
          `}</style>
        </div>
      </section>

      {/* Section 9 - Reason to choose Bytes Press - Same Size as Section 2 */}
      <section id="section-9" className="h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-2 transition-all duration-1000 ${
              section9Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <span className="text-black">Reason to choose</span>{' '}
              <span className="text-[#0B3C74]">Bytes Press</span>
            </h2>
            <p className={`text-lg text-[#111827] max-w-3xl mx-auto mb-6 transition-all duration-1000 delay-[100ms] ${
              section9Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              Our team of experienced professionals is dedicated to transforming your book idea into a reality by providing the expertise and support you need every step of the way.
            </p>
            
            {/* CTA Button */}
            <div className={`text-center transition-all duration-1000 delay-[180ms] ${
              section9Visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
            }`}>
              <a href="/contact" className="inline-flex items-center gap-2 bg-[#0B3C74] hover:bg-[#0A2E5C] active:bg-[#0A2E5C] text-white px-6 py-3 rounded-lg font-bold text-base uppercase tracking-wide transition-colors duration-300 no-underline select-none">
                <span className="text-white">START PROJECT</span>
                <svg className="w-4 h-4 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
             <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group">
               {/* Blue fill effect on hover */}
               <div className="absolute inset-0 bg-[#0B3C74] transform scale-0 group-hover:scale-100 transition-transform duration-300 origin-top-left rounded-xl"></div>
               
               {/* Content with relative positioning to stay above the blue fill */}
               <div className="relative z-10">
                 <div className="w-16 h-16 bg-[#0B3C74] rounded-full flex items-center justify-center mx-auto mb-4">
                   <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                   </svg>
                 </div>
                 <h3 className="text-xl font-semibold text-[#111827] mb-2 group-hover:text-white transition-colors duration-300">0% Sales Royalty</h3>
                 <p className="text-[#0B3C74] text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                   At Bytes Press, we take 0% sales royalty, which means that our clients retain full control over their book's profits. Our clients can maximize their earnings and use their profits as they see fit.
                 </p>
               </div>
             </div>

                         <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group">
               {/* Blue fill effect on hover */}
               <div className="absolute inset-0 bg-[#0B3C74] transform scale-0 group-hover:scale-100 transition-transform duration-300 origin-top-left rounded-xl"></div>
               
               {/* Content with relative positioning to stay above the blue fill */}
               <div className="relative z-10">
                 <div className="w-16 h-16 bg-[#0B3C74] rounded-full flex items-center justify-center mx-auto mb-4">
                   <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                   </svg>
                 </div>
                 <h3 className="text-xl font-semibold text-[#111827] mb-2 group-hover:text-white transition-colors duration-300">100% Complete Ownership</h3>
                 <p className="text-[#0B3C74] text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                   We believe in complete transparency and ownership, which is why our clients retain 100% ownership of their books. This means that our clients can make all decisions regarding their book's content, distribution, and marketing.
                 </p>
               </div>
             </div>

                         <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group">
               {/* Blue fill effect on hover */}
               <div className="absolute inset-0 bg-[#0B3C74] transform scale-0 group-hover:scale-100 transition-transform duration-300 origin-top-left rounded-xl"></div>
               
               {/* Content with relative positioning to stay above the blue fill */}
               <div className="relative z-10">
                 <div className="w-16 h-16 bg-[#0B3C74] rounded-full flex items-center justify-center mx-auto mb-4">
                   <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                   </svg>
                 </div>
                 <h3 className="text-xl font-semibold text-[#111827] mb-2 group-hover:text-white transition-colors duration-300">On-Time Delivery</h3>
                 <p className="text-[#0B3C74] text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                   We understand the importance of on-time delivery and always work hard to ensure that our clients receive their projects on or before the deadline. We have a dedicated team that works efficiently and effectively to meet our clients' needs.
                 </p>
               </div>
             </div>

                         <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group">
               {/* Blue fill effect on hover */}
               <div className="absolute inset-0 bg-[#0B3C74] transform scale-0 group-hover:scale-100 transition-transform duration-300 origin-top-left rounded-xl"></div>
               
               {/* Content with relative positioning to stay above the blue fill */}
               <div className="relative z-10">
                 <div className="w-16 h-16 bg-[#0B3C74] rounded-full flex items-center justify-center mx-auto mb-4">
                   <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                   </svg>
                 </div>
                 <h3 className="text-xl font-semibold text-[#111827] mb-2 group-hover:text-white transition-colors duration-300">Personalized Services</h3>
                 <p className="text-[#0B3C74] text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                   At Bytes Press, we understand that each client has unique needs and goals. That's why we offer personalized services that are tailored to our clients' individual requirements.
                 </p>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Section 10 - Get your book written and published in Less than a month! */}
      <section id="section-10" className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#0B3C74]"></div>
                <span className="text-xs tracking-[0.3em] text-gray-600 uppercase font-light">Fast Publishing</span>
              </div>
              
              <h2 className={`text-3xl lg:text-4xl font-light leading-tight transition-all duration-1000 ${
                section10Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <span className="font-thin text-gray-600">Get your book written and published in</span>
                <br />
                <span className="font-bold bg-gradient-to-r from-[#0B3C74] to-blue-600 bg-clip-text text-transparent">
                  Less than a month!
                </span>
              </h2>
              
              <p className={`text-base text-gray-600 leading-relaxed max-w-lg font-light transition-all duration-1000 delay-[100ms] ${
                section10Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                Challenge us. We want to work with you to create the really cool stuff. Call Us at 833 323 0371
              </p>
              
              <div className={`flex gap-4 pt-4 transition-all duration-1000 delay-[180ms] ${
                section10Visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
              }`}>
                <a href="/contact" className="fancy">
                  <span className="top-key"></span>
                  <span className="text">Talk to our expert</span>
                  <span className="bottom-key-1"></span>
                  <span className="bottom-key-2"></span>
                </a>
                <a href="/contact" className="fancy">
                  <span className="top-key"></span>
                  <span className="text">CHAT NOW</span>
                  <span className="bottom-key-1"></span>
                  <span className="bottom-key-2"></span>
                </a>
              </div>
            </div>

            {/* Right Side - GetStartedForm */}
            <div className={`flex justify-center lg:justify-end transition-all duration-1000 ${
              section10Visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <GetStartedForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
