'use client';

import './page.css';
import { useState, useEffect } from 'react';
import GetStartedForm from '../../../components/ui/GetStartedForm';
import Footer from '../../../components/Footer';
import { FAQAccordion } from '../../../components/FAQAccordion';
import { editingFAQData } from '../../../data/faqData-editing';

export default function EditingAndProofreadingServices() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [section1Visible, setSection1Visible] = useState(false);
  const [section2Visible, setSection2Visible] = useState(false);
  const [section3Visible, setSection3Visible] = useState(false);
  const [section4Visible, setSection4Visible] = useState(false);
  const [section5Visible, setSection5Visible] = useState(false);
  const [section6Visible, setSection6Visible] = useState(false);
  const [section7Visible, setSection7Visible] = useState(false);
  const [section8Visible, setSection8Visible] = useState(false);
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

  // Intersection Observer for Section 8 animations (Testimonials Section)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSection8Visible(true);
          } else {
            setSection8Visible(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    const section8Element = document.getElementById('section-8');
    if (section8Element) {
      observer.observe(section8Element);
    }

    return () => {
      if (section8Element) {
        observer.unobserve(section8Element);
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
      quote: "I've worked with other publishing companies before, but none matched the level of communication and precision I experienced at BytePress. Every detail was handled with care, and the final product exceeded my expectations.",
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
      quote: "Most promises in publishing fall flat. Not here. The team at BytePress didn't just talk a good game — they delivered my book to market on time and exactly how I envisioned it.",
      rating: 5,
      date: "May 13, 2024",
      reviewCount: 2
    },
    {
      name: "Linda Ray",
      role: "Top-notch ghostwriting and editing support",
      quote: "I had an idea, but no time to write. Their ghostwriting team stepped in and created something that sounded just like me. Editing was tight, and communication was constant.",
      rating: 5,
      date: "May 12, 2024",
      reviewCount: 1
    },
    {
      name: "Nikhil Arora",
      role: "Global reach, local feel",
      quote: "Even though I'm based outside the U.S., the process felt close and collaborative. They helped publish my book globally without a single hiccup. Professional, helpful, and totally reliable.",
      rating: 5,
      date: "May 3, 2024",
      reviewCount: 2
    },
    {
      name: "Claire Morrison",
      role: "A standout partner for self-publishing",
      quote: "This team knows what they're doing. They walked me through the whole publishing journey, helped me market my book, and made sure every version was spot on. Couldn't have asked for a better experience.",
      rating: 5,
      date: "May 7, 2024",
      reviewCount: 1
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
              <span className="text-[#0B3C74]">Editing & Proofreading</span> <span className="text-black">That Polish Every Page</span>
            </h1>
            <p className={`text-base md:text-lg text-black mb-6 leading-relaxed transition-all duration-1000 delay-[100ms] ${
              section1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              At BytePress, we offer expert editing and proofreading designed to refine your manuscript at every level. Whether you're fixing typos or improving structure, our editing & proofreading company handles it all with clarity, precision, and care. Every word is reviewed with your reader in mind, ensuring the final version is clean, compelling, and ready for print or digital shelves.
            </p>
            
            {/* Hero Buttons */}
            <div className={`flex flex-col sm:flex-row gap-3 transition-all duration-1000 delay-[300ms] ${
              section1Visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
            }`}>
              <a href="/contact" className="inline-flex items-center gap-3 bg-[#0B3C74] hover:bg-[#0A2E5C] text-white px-8 py-4 rounded-lg font-bold text-base uppercase tracking-wide transition-colors duration-300 no-underline">
                <span className="text-white">TALK TO OUR EXPERT</span>
                <svg className="w-4 h-4 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a href="/contact" className="inline-flex items-center gap-3 bg-transparent border-2 border-[#0B3C74] text-[#0B3C74] hover:bg-[#0B3C74] hover:text-white px-8 py-4 rounded-lg font-bold text-base uppercase tracking-wide transition-colors duration-300 no-underline">
                <span>CALL NOW</span>
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Design Image on Right Side */}
          <div className="flex-shrink-0 mr-8 md:mr-16 lg:mr-24">
            <img 
              src="/red books.png" 
              alt="Editing & Proofreading Services" 
              className="w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] object-contain animate-float"
            />
          </div>
        </div>
      </section>

      {/* Section 2 - Fits in Viewport with Form */}
      <section id="section-2" className="min-h-screen py-20 bg-white flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
            {/* Left Side - Partner With the Best Text */}
            <div className="flex items-center">
              <div className="max-w-2xl">
                <h2 className={`text-3xl md:text-4xl font-bold mb-4 leading-tight transition-all duration-1000 ${
                  section2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                  <span className="text-black">Partner With the Best </span>
                  <span className="text-[#0B3C74]">Book Editing & Proofreading Company</span>
                </h2>
                
                <div className={`space-y-3 text-gray-700 text-sm leading-relaxed transition-all duration-1000 delay-[120ms] ${
                  section2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                  <p>
                    Whether you're refining a first draft or preparing for publication, your words deserve more than just a spell check. At our core, we provide professional editing services that focus on clarity, flow, structure, and voice—so your manuscript reads the way it was meant to be heard.
                  </p>
                  
                  <p>
                    We offer a full spectrum of book editing services, including developmental editing to shape your narrative, structural editing to refine pacing and tone, and line editing to polish every sentence. Once the editing is complete, our proofreader services go to work, checking grammar, punctuation, and consistency to make sure no detail is missed.
                  </p>
                  
                  <p>
                    Every project we take on is approached with care, precision, and the understanding that each author's voice is unique. Whether you're proofreading a book for digital release or print distribution, our team ensures it meets publishing standards without compromising your message.
                  </p>
                  
                  <p>
                    As the best book editing and proofreading company, we don't just clean up your manuscript. We help it shine. Because when your story is ready for the world, it should speak loud and clear—without distractions.
                  </p>

                </div>
                
                {/* Start Project Button */}
                <div className={`mt-6 transition-all duration-1000 delay-[180ms] ${
                  section2Visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
                }`}>
                  <a href="/contact" className="inline-flex items-center gap-2 bg-[#0B3C74] hover:bg-[#0A2E5C] active:bg-[#0A2E5C] text-white px-6 py-3 rounded-lg font-bold text-base uppercase tracking-wide transition-colors duration-300 no-underline select-none">
                    <span className="text-white">Start Project</span>
                    <svg className="w-4 h-4 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Right Side - Get a Free Quote Form */}
            <div className={`flex items-center justify-center transition-all duration-1000 ${
              section2Visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <div className="w-full max-w-xs bg-white rounded-lg p-6 shadow-xl border border-gray-300 shadow-[#0B3C74]/20 ring-2 ring-[#0B3C74]/10 reveal-img">
                <h3 className="text-lg font-bold text-[#0B3C74] mb-4 text-center">
                  Get a Free Quote
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
                      I am looking for
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
                  
                  <div className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      id="sms-consent"
                      name="sms-consent"
                      className="mt-1 w-4 h-4 text-[#0B3C74] border-gray-300 rounded focus:ring-[#0B3C74]"
                    />
                    <label htmlFor="sms-consent" className="text-xs text-gray-600 leading-relaxed">
                      Please CHECK THE BOX to COMMUNICATE VIA SMS OR EMAIL ( PRIVACY POLICY & TERM & CONDITIONS )
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-[#0B3C74] hover:bg-[#0A2E5C] text-white font-semibold py-2 px-4 rounded-md transition-all duration-300 text-sm shadow-md hover:shadow-lg"
                  >
                    Let's Get Started
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Developmental Editing with Image Left */}
      <section id="section-3" className="h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
            {/* Left Side - Editing Image */}
            <div className={`flex items-center justify-start transition-all duration-1000 ${
              section3Visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <img 
                src="/images/bookpublishingpoint_images/book-cover1.webp" 
                alt="Developmental Editing Services" 
                className="max-w-lg h-auto object-contain ml-8 reveal-img"
              />
            </div>
            
            {/* Right Side - Developmental Editing Text */}
            <div className="flex items-center">
              <div className="max-w-2xl">
                <h2 className={`text-3xl md:text-4xl font-bold mb-6 leading-tight transition-all duration-1000 ${
                  section3Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                  <span className="text-[#0B3C74]">Developmental Editing That Shapes</span>
                  <span className="text-gray-900"> the Heart of Your Story</span>
                </h2>
                <div className={`space-y-4 text-gray-700 text-sm leading-relaxed transition-all duration-1000 delay-[100ms] ${
                  section3Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                  <p>
                    Great books don't just happen; they're built, layer by layer. Our Professional Developmental Editing Services are designed to help authors shape stronger plots, deeper characters, and clearer structure from the inside out. If you've been searching for online editing that goes beyond surface-level cleanup, this is it.
                  </p>
                  
                  <p>
                    From pacing and flow to narrative consistency, our Manuscript Developmental Edits focus on strengthening the foundation of your book while preserving your unique voice. Whether it's fiction, nonfiction, or memoir, our editors offer professional book editing that's strategic, thoughtful, and purpose-driven.
                  </p>
                  
                  <p>
                    We provide online book editing with a personal touch, so even if you're submitting from afar, it feels like you're working right beside us. With expert notes, story-level insight, and detailed feedback, we help turn early drafts into print-worthy manuscripts.
                  </p>
                  
                  <p>
                    This isn't just editing, it's real collaboration for authors ready to refine what matters most.
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
                Get your project off the ground today. Get Started Now
              </h2>
              
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
                  <span className="text-white">CHAT NOW</span>
                  <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - Proofreading with Text Left and Image Right */}
      <section id="section-5" className="h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
            {/* Left Side - Text Content */}
            <div className="flex items-center">
              <div className="max-w-2xl">
                <h2 className={`text-3xl md:text-4xl font-bold mb-6 leading-tight transition-all duration-1000 ${
                  section5Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                  <span className="text-black">Book Proofreading That's Quick, Clear, </span>
                  <span className="text-[#0B3C74]">and Gets It Right</span>
                </h2>
                
                <div className={`space-y-4 text-gray-700 text-sm leading-relaxed transition-all duration-1000 delay-[100ms] ${
                  section5Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                  <p>
                    Deadlines don't wait. That's why our Professional Affordable Services are built for speed without sacrificing accuracy. Whether you're an indie author, a seasoned writer, or polishing up your first manuscript, our online proofreader team works fast to catch errors, polish flow, and improve readability.
                  </p>
                  
                  <p>
                    Each manuscript proofreader at Roosevelt Publishers is trained to spot what others miss, so your book lands in the hands of readers without distracting mistakes. Our book proofreading services combine speed, precision, and real publishing insight.
                  </p>
                  
                  <p>
                    Need your work edited before a tight deadline? Want last-minute feedback that still feels thorough? You can count on us to return clean, ready-to-publish pages on time and done right.
                  </p>
                  
                  <p>
                    Let us help you hit send with confidence.
                  </p>
                </div>
                
                {/* START PROJECT Button */}
                <div className={`mt-6 transition-all duration-1000 delay-[180ms] ${
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
            
            {/* Right Side - Proofreading Image */}
            <div className={`flex items-center justify-end transition-all duration-1000 ${
              section5Visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <img 
                src="/services/editing-1.png" 
                alt="Book Proofreading Services" 
                className="max-w-lg h-auto object-contain reveal-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 - Final Call to Action */}
      <section id="section-6" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-blue-200 rounded-2xl p-12 text-center">
              <h2 className={`text-4xl md:text-5xl font-bold text-black mb-6 transition-all duration-1000 ${
                section6Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                Let's turn your ideas into reality.
              </h2>
              
              <p className={`text-xl text-black mb-8 leading-relaxed transition-all duration-1000 delay-[100ms] ${
                section6Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                Contact us today to discuss your project and how we can assist you in bringing your vision to life.
              </p>
              
              {/* Call to Action Button */}
              <div className={`flex justify-center transition-all duration-1000 delay-[180ms] ${
                section6Visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
              }`}>
                <a href="/contact" className="inline-flex items-center gap-3 bg-[#0B3C74] hover:bg-[#0A2E5C] active:bg-[#0A2E5C] text-white px-8 py-4 rounded-lg font-bold text-lg uppercase tracking-wide transition-colors duration-300 no-underline select-none">
                  <span className="text-white">Let's Get Started</span>
                  <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 - 4 Cards with New Heading */}
      <section id="section-7" className="h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center h-full">
            {/* Top Section - Heading */}
            <div className="text-center mb-12 pt-8">
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 leading-tight transition-all duration-1000 ${
                section7Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <span className="text-black">Shaping Your Publishing Journey with </span>
                <span className="text-[#0B3C74]">Strategy That Connects</span>
              </h2>
              <p className={`text-gray-700 text-base leading-relaxed max-w-3xl mx-auto transition-all duration-1000 delay-[100ms] ${
                section7Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                Getting your book in front of the right readers starts with a smart plan. We don't rush the process — we refine it. From your manuscript's first review to the final polish, every step is handled with precision, so your story lands exactly where it should.
              </p>
            </div>
            
            {/* Bottom Section - 4 Flipable Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
              {/* Card 1 - Discovery & Diagnostic */}
              <div className="flip-card group">
                <div className="flip-card-inner">
                  {/* Front Side */}
                  <div className="flip-card-front bg-white rounded-xl p-6 shadow-lg flex flex-col items-start justify-start h-80">
                    <div className="text-[#0B3C74] text-4xl font-bold mb-4 border-2 border-[#0B3C74] rounded-full w-12 h-12 flex items-center justify-center">
                      01
                    </div>
                    <h3 className="text-xl font-bold text-[#0B3C74] text-left leading-tight">Discovery & Diagnostic</h3>
                  </div>
                  {/* Back Side */}
                  <div className="flip-card-back bg-[#0B3C74] rounded-xl p-6 shadow-lg flex flex-col items-start justify-start h-80">
                    <div className="text-white text-4xl font-bold mb-4 border-2 border-white rounded-full w-12 h-12 flex items-center justify-center">
                      01
                    </div>
                    <p className="text-white text-sm leading-relaxed text-left">
                      We begin by reviewing your manuscript to identify where it shines and where it needs support. Our editors assess grammar, flow, and structure to prepare a clear starting point.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 - Strategy Built for Your Book */}
              <div className="flip-card group">
                <div className="flip-card-inner">
                  {/* Front Side */}
                  <div className="flip-card-front bg-white rounded-xl p-6 shadow-lg flex flex-col items-start justify-start h-80">
                    <div className="text-[#0B3C74] text-4xl font-bold mb-4 border-2 border-[#0B3C74] rounded-full w-12 h-12 flex items-center justify-center">
                      02
                    </div>
                    <h3 className="text-xl font-bold text-[#0B3C74] text-left leading-tight">Strategy Built for Your Book</h3>
                  </div>
                  {/* Back Side */}
                  <div className="flip-card-back bg-[#0B3C74] rounded-xl p-6 shadow-lg flex flex-col items-start justify-start h-80">
                    <div className="text-white text-4xl font-bold mb-4 border-2 border-white rounded-full w-12 h-12 flex items-center justify-center">
                      02
                    </div>
                    <p className="text-white text-sm leading-relaxed text-left">
                      Next, we create a targeted plan based on your goals and audience. Whether your focus is Amazon, bookstores, or digital platforms, we build a path that fits your publishing vision.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 - Precision Editing in Motion */}
              <div className="flip-card group">
                <div className="flip-card-inner">
                  {/* Front Side */}
                  <div className="flip-card-front bg-white rounded-xl p-6 shadow-lg flex flex-col items-start justify-start h-80">
                    <div className="text-[#0B3C74] text-4xl font-bold mb-4 border-2 border-[#0B3C74] rounded-full w-12 h-12 flex items-center justify-center">
                      03
                    </div>
                    <h3 className="text-xl font-bold text-[#0B3C74] text-left leading-tight">Precision Editing in Motion</h3>
                  </div>
                  {/* Back Side */}
                  <div className="flip-card-back bg-[#0B3C74] rounded-xl p-6 shadow-lg flex flex-col items-start justify-start h-80">
                    <div className="text-white text-4xl font-bold mb-4 border-2 border-white rounded-full w-12 h-12 flex items-center justify-center">
                      03
                    </div>
                    <p className="text-white text-sm leading-relaxed text-left">
                      Our expert editors jump in with focused line edits and content clarity. Every word is sharpened, every sentence aligned with tone, grammar, and purpose to create a smooth reading experience.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 4 - Final Polish Before Launch */}
              <div className="flip-card group">
                <div className="flip-card-inner">
                  <div className="flip-card-front bg-white rounded-xl p-6 shadow-lg flex flex-col items-start justify-start h-80">
                    <div className="text-[#0B3C74] text-4xl font-bold mb-4 border-2 border-[#0B3C74] rounded-full w-12 h-12 flex items-center justify-center">
                      04
                    </div>
                    <h3 className="text-xl font-bold text-[#0B3C74] text-left leading-tight">Final Polish Before Launch</h3>
                  </div>
                  {/* Back Side */}
                  <div className="flip-card-back bg-[#0B3C74] rounded-xl p-6 shadow-lg flex flex-col items-start justify-start h-80">
                    <div className="text-white text-4xl font-bold mb-4 border-2 border-white rounded-full w-12 h-12 flex items-center justify-center">
                      04
                    </div>
                    <p className="text-white text-sm leading-relaxed text-left">
                      Before it goes live, we do a final sweep to eliminate lingering errors. Your manuscript leaves our hands clean, consistent, and ready to make an impression.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - OLD VERSION (COMMENTED OUT) */}
      {/* 
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] mb-16">
              Questions Writers Actually <span className="text-[#0B3C74]">Ask Us</span>
            </h2>
            <p className="text-center text-lg text-gray-600 mb-12">
              Before you dive into your next draft or publishing step, here are some answers that might save you time — and sharpen your final manuscript.
            </p>

            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleFAQ(0)}
                >
                  <span className="font-semibold text-gray-900">Q: What is developmental editing, and why does it matter?</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                      openFAQ === 0 ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFAQ === 0 && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700 leading-relaxed">
                      Developmental editing focuses on the big-picture elements of your book — structure, pacing, clarity, and content flow. It's perfect for writers who want to refine their ideas, tighten the story, and strengthen the manuscript before line edits begin.
                    </p>
                  </div>
                )}
              </div>
              <div className="border border-gray-200 rounded-lg">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleFAQ(1)}
                >
                  <span className="font-semibold text-gray-900">Q: What makes your developmental editing services different?</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                      openFAQ === 1 ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFAQ === 1 && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700 leading-relaxed">
                      Our team doesn't just read — we analyze, question, and refine. Our developmental editing services are guided by experience in both fiction and nonfiction, helping you sharpen your message and strengthen the spine of your book.
                    </p>
                  </div>
                )}
              </div>
              <div className="border border-gray-200 rounded-lg">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleFAQ(2)}
                >
                  <span className="font-semibold text-gray-900">Q: Are your editing services for writers at any stage?</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                      openFAQ === 2 ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFAQ === 2 && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700 leading-relaxed">
                      Yes. Whether you're on your first draft or final polish, we offer editing services for writers at every stage. From developmental feedback to final proofreading, we adjust based on what your manuscript needs most.
                    </p>
                  </div>
                )}
              </div>
              <div className="border border-gray-200 rounded-lg">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleFAQ(3)}
                >
                  <span className="font-semibold text-gray-900">Q: Do you offer affordable book editing without compromising quality?</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                      openFAQ === 3 ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFAQ === 3 && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700 leading-relaxed">
                      Absolutely. We've built our reputation on offering affordable book editing that doesn't cut corners. You'll work with professional editors who focus on quality, not shortcuts.
                    </p>
                  </div>
                )}
              </div>
              <div className="border border-gray-200 rounded-lg">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleFAQ(4)}
                >
                  <span className="font-semibold text-gray-900">Q: Can I combine developmental editing with other services?</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                      openFAQ === 4 ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFAQ === 4 && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700 leading-relaxed">
                      Yes. Many authors start with developmental editing and then move into line editing or proofreading. We can build a full editing plan that follows your book from rough concept to press-ready.
                    </p>
                  </div>
                )}
              </div>
              <div className="border border-gray-200 rounded-lg">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleFAQ(5)}
                >
                  <span className="font-semibold text-gray-900">Q: How long does the editing process usually take?</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                      openFAQ === 5 ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFAQ === 5 && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700 leading-relaxed">
                      Timelines depend on your manuscript's word count and service level. Developmental editing often takes 1 to 3 weeks, while lighter editing or proofreading may be faster. We always set clear timelines upfront.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* NEW FAQ ACCORDION COMPONENT */}
      <FAQAccordion 
        faqData={editingFAQData}
        title="Questions Writers Actually Ask Us"
        subtitle="Before you dive into your next draft or publishing step, here are some answers that might save you time — and sharpen your final manuscript."
      />

      {/* Section 8 - What our client's say - Same Size as Section 2 */}
      <section id="section-8" className="h-screen bg-white flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] mb-4">
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
                Challenge us. We want to work with you to create the really cool stuff. Call Us at +1 323 982 3156
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