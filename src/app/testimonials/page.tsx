'use client';

import { useEffect, useState } from 'react';
import TestimonialsSlider from '@/components/TestimonialsSlider';
import Footer from '@/components/Footer';

export default function TestimonialsPage() {
  const [counts, setCounts] = useState({
    authors: 0,
    books: 0,
    bestsellers: 0,
    reviews: 0
  });

  const [isVisible, setIsVisible] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [reasonsVisible, setReasonsVisible] = useState(false);
  const [successStoryVisible, setSuccessStoryVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);

  useEffect(() => {
    // Header animation trigger
    const timer = setTimeout(() => {
      setHeaderVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const statsSection = document.getElementById('stats-section');
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSuccessStoryVisible(true);
        } else {
          setSuccessStoryVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    const successStorySection = document.getElementById('success-story-section');
    if (successStorySection) {
      observer.observe(successStorySection);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCtaVisible(true);
        } else {
          setCtaVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    const ctaSection = document.getElementById('cta-section');
    if (ctaSection) {
      observer.observe(ctaSection);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const targetCounts = {
      authors: 500,
      books: 750,
      bestsellers: 50,
      reviews: 98
    };

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        authors: Math.floor(targetCounts.authors * progress),
        books: Math.floor(targetCounts.books * progress),
        bestsellers: Math.floor(targetCounts.bestsellers * progress),
        reviews: Math.floor(targetCounts.reviews * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts(targetCounts);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible]);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Bestselling Author",
      company: "Independent Publisher",
      content: "BytePress transformed my rough manuscript into a polished bestseller. Their editing team's attention to detail and marketing support helped me reach #1 on Amazon. I couldn't have done it without them!",
      rating: 5,
      book: "The Midnight Garden",
      sales: "50K+ copies sold"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Business Consultant",
      company: "Growth Strategies Inc.",
      content: "Working with BytePress was a game-changer for my business book. Their professional writing team captured my expertise perfectly, and the cover design is absolutely stunning. Highly recommended!",
      rating: 5,
      book: "Business Growth Strategies",
      sales: "25K+ copies sold"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      role: "Psychologist & Author",
      company: "Mindful Living Institute",
      content: "The team at BytePress understood my vision for a self-help book that could truly help people. Their editing expertise and marketing strategies exceeded my expectations. My book is now helping thousands!",
      rating: 5,
      book: "The Art of Mindfulness",
      sales: "35K+ copies sold"
    },
    {
      id: 4,
      name: "James Thompson",
      role: "Chef & Food Blogger",
      company: "Culinary Adventures",
      content: "BytePress helped me create a cookbook that's more than just recipes - it's a cultural journey. Their design team created a beautiful book that perfectly captures the essence of my cooking philosophy.",
      rating: 5,
      book: "Culinary Adventures",
      sales: "20K+ copies sold"
    },
    {
      id: 5,
      name: "Lisa Park",
      role: "Tech Entrepreneur",
      company: "Innovation Labs",
      content: "As a first-time author, I was nervous about the publishing process. BytePress guided me through every step with patience and expertise. My book is now a go-to resource in the tech industry.",
      rating: 5,
      book: "Tech Revolution 2024",
      sales: "30K+ copies sold"
    },
    {
      id: 6,
      name: "David & Maria Williams",
      role: "Children's Book Authors",
      company: "Adventure Stories Co.",
      content: "Creating a children's book series was our dream, and BytePress made it a reality. Their understanding of children's literature and beautiful illustrations helped us create books that kids and parents love.",
      rating: 5,
      book: "Children's Adventure Series",
      sales: "100K+ copies sold"
    }
  ];

  const stats = [
    { 
      label: "Happy Authors", 
      value: counts.authors, 
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
        </svg>
      ), 
      suffix: "+" 
    },
    { 
      label: "Books Published", 
      value: counts.books, 
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ), 
      suffix: "+" 
    },
    { 
      label: "Bestsellers", 
      value: counts.bestsellers, 
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ), 
      suffix: "+" 
    },
    { 
      label: "5-Star Reviews", 
      value: counts.reviews, 
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ), 
      suffix: "%" 
    }
  ];

  return (
    <main className="min-h-screen">
             <div className="w-full bg-gradient-to-br from-indigo-50 to-purple-100 min-h-screen">
                 <div className="container mx-auto px-4">
                                                                               <div className="text-center mb-16 pt-20">
          <h1 className={`text-5xl font-bold text-gray-900 mb-2 transition-all duration-1000 ease-out ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Why Clients Love Working with Us
          </h1>
                                                                                       {/* Animated Underline */}
             <div className={`h-2 bg-gradient-to-r from-blue-100 via-blue-400 to-blue-700 mx-auto max-w-4xl transition-all duration-1000 ease-out ${
               headerVisible ? 'w-full opacity-100' : 'w-0 opacity-0'
             }`}></div>
          
          <h2 className={`text-3xl font-semibold text-gray-700 mb-4 mt-8 transition-all duration-1000 ease-out delay-300 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Client Testimonials
          </h2>
          
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 ease-out delay-500 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Our clients trust us with their dreams and we turn them into a solid reality. Hear it from our clients:
          </p>
        </div>

                 {/* Stats Section */}
         <div id="stats-section" className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
           {stats.map((stat, index) => (
             <div 
               key={index} 
               className={`testimonial-card bg-white rounded-xl p-6 text-center shadow-lg transition-all duration-500 ease-out transform ${
                 isVisible 
                   ? 'opacity-100 translate-y-0 scale-100' 
                   : 'opacity-0 translate-y-8 scale-95'
               }`}
               style={{ 
                 transitionDelay: `${index * 200}ms`,
                 animation: isVisible ? 'fadeInUp 0.8s ease-out forwards' : 'none'
               }}
             >
               <div className="flex justify-center mb-2">{stat.icon}</div>
               <div className="text-3xl font-bold text-gray-900 mb-1 transition-all duration-500">
                 {stat.value}{stat.suffix}
               </div>
               <div className="text-sm text-gray-600">{stat.label}</div>
             </div>
           ))}
         </div>

        {/* Testimonials Slider */}
        <div className="mb-16">
          <TestimonialsSlider testimonials={testimonials} />
        </div>

        {/* Reasons to Choose Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
                         <h2 className="text-4xl font-bold mb-4">
               <span className="text-blue-600">Reason to choose</span>{' '}
               <span className="text-gray-800">BytePress</span>
             </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our team of experienced professionals is dedicated to transforming your book idea into a reality by providing the expertise and support you need every step of the way.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 0% Sales Royalty */}
            <div className="flip-card group">
              <div className="flip-card-inner">
                {/* Front Side */}
                <div className="flip-card-front bg-white rounded-xl p-6 shadow-lg flex flex-col items-center justify-center h-64">
                  <div className="text-blue-600 text-6xl mb-6 flex justify-center">
                    <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 text-center">0% Sales Royalty</h3>
                </div>
                {/* Back Side */}
                <div className="flip-card-back bg-blue-600 rounded-xl p-6 shadow-lg flex flex-col items-center justify-center h-64">
                  <p className="text-white text-sm leading-relaxed text-center">
                    At BytePress, we take 0% sales royalty, which means that our clients retain full control over their book's profits. Our clients can maximize their earnings and use their profits as they see fit.
                  </p>
                </div>
              </div>
            </div>

            {/* 100% Complete Ownership */}
            <div className="flip-card group">
              <div className="flip-card-inner">
                {/* Front Side */}
                <div className="flip-card-front bg-white rounded-xl p-6 shadow-lg flex flex-col items-center justify-center h-64">
                  <div className="text-blue-600 text-6xl mb-6 flex justify-center">
                    <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 text-center">100% Complete Ownership</h3>
                </div>
                {/* Back Side */}
                <div className="flip-card-back bg-blue-600 rounded-xl p-6 shadow-lg flex flex-col items-center justify-center h-64">
                  <p className="text-white text-sm leading-relaxed text-center">
                    We believe in complete transparency and ownership, which is why our clients retain 100% ownership of their books. This means that our clients can make all decisions regarding their book's content, distribution, and marketing.
                  </p>
                </div>
              </div>
            </div>

            {/* On-Time Delivery */}
            <div className="flip-card group">
              <div className="flip-card-inner">
                {/* Front Side */}
                <div className="flip-card-front bg-white rounded-xl p-6 shadow-lg flex flex-col items-center justify-center h-64">
                  <div className="text-blue-600 text-6xl mb-6 flex justify-center">
                    <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 text-center">On-Time Delivery</h3>
                </div>
                {/* Back Side */}
                <div className="flip-card-back bg-blue-600 rounded-xl p-6 shadow-lg flex flex-col items-center justify-center h-64">
                  <p className="text-white text-sm leading-relaxed text-center">
                    We understand the importance of on-time delivery and always work hard to ensure that our clients receive their projects on or before the deadline. We have a dedicated team that works efficiently and effectively to meet our clients' needs.
                  </p>
                </div>
              </div>
            </div>

            {/* Personalized Services */}
            <div className="flip-card group">
              <div className="flip-card-inner">
                {/* Front Side */}
                <div className="flip-card-front bg-white rounded-xl p-6 shadow-lg flex flex-col items-center justify-center h-64">
                  <div className="text-blue-600 text-6xl mb-6 flex justify-center">
                    <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 text-center">Personalized Services</h3>
                </div>
                {/* Back Side */}
                <div className="flip-card-back bg-blue-600 rounded-xl p-6 shadow-lg flex flex-col items-center justify-center h-64">
                  <p className="text-white text-sm leading-relaxed text-center">
                    At BytePress, we understand that each client has unique needs and goals. That's why we offer personalized services that are tailored to our clients' individual requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

                                   {/* Featured Success Story */}
         <div id="success-story-section" className="bg-blue-100 rounded-2xl shadow-xl p-6 mb-16">
           <div className="text-center mb-6">
             <h2 className={`text-3xl font-bold text-gray-900 mb-4 transition-all duration-1000 ease-out ${
               successStoryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
             }`}>
               Featured <span className="text-blue-600">Success Story</span>
             </h2>
             <p className={`text-lg text-gray-600 transition-all duration-1000 ease-out ${
               successStoryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
             }`} style={{ animationDelay: '100ms' }}>
               From Manuscript to Bestseller in 6 Months
             </p>
           </div>
           
           <div className="flex flex-col md:flex-row gap-6 items-center">
             <div className="flex-1">
               <h3 className={`text-2xl font-bold text-gray-900 mb-2 transition-all duration-1000 ease-out ${
                 successStoryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
               }`} style={{ animationDelay: '200ms' }}>
                 "The Midnight Garden" by Sarah Johnson
               </h3>
               <p className={`text-gray-700 mb-3 transition-all duration-1000 ease-out ${
                 successStoryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
               }`} style={{ animationDelay: '300ms' }}>
                 Sarah came to us with a rough fantasy manuscript and a dream of becoming a published author. Our team worked closely with her to develop the story, polish the writing, and create a stunning cover design.
               </p>
                              <div className="grid grid-cols-2 gap-4 mb-3">
                  <div className={`text-center transition-all duration-1000 ease-out ${
                    successStoryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`} style={{ animationDelay: '400ms' }}>
                    <div className="text-2xl font-bold text-blue-600">#1</div>
                    <div className="text-sm text-gray-600">Amazon Bestseller</div>
                  </div>
                  <div className={`text-center transition-all duration-1000 ease-out ${
                    successStoryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`} style={{ animationDelay: '500ms' }}>
                    <div className="text-2xl font-bold text-blue-600">50K+</div>
                    <div className="text-sm text-gray-600">Copies Sold</div>
                  </div>
                </div>
               <div className="flex justify-center">
                 <a href="/portfolio" className={`inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg transition-all duration-1000 ease-out ${
                   successStoryVisible ? 'opacity-100' : 'opacity-0'
                 }`} style={{ animationDelay: '180ms' }}>
                   View Full Portfolio
                 </a>
               </div>
             </div>
             
             <div className={`flex justify-center transition-all duration-1000 ease-out ${
               successStoryVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
             }`} style={{ animationDelay: '600ms' }}>
               <img 
                 src="/books_stack.png" 
                 alt="Books Stack" 
                 className="w-150 h-80 object-contain rounded-2xl shadow-lg"
               />
             </div>
           </div>
         </div>

                 {/* Call to Action */}
         <div id="cta-section" className="text-center mb-16 bg-gradient-to-br from-indigo-50 to-purple-100 py-16">
                      <div className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-300 rounded-2xl text-blue-50 p-8 max-w-4xl mx-auto">
             <h3 className={`text-2xl font-bold mb-4 text-white transition-all duration-1000 ease-out ${
               ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
             }`}>
               Ready to Write Your Success Story?
             </h3>
             <p className={`text-blue-50 mb-6 transition-all duration-1000 ease-out ${
               ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
             }`} style={{ animationDelay: '100ms' }}>
               Join hundreds of successful authors who've transformed their ideas into bestselling books with BytePress.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <a href="/contact" className={`bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors transition-all duration-1000 ease-out ${
                 ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
               }`} style={{ animationDelay: '200ms' }}>
                 Start Your Journey
               </a>
               <a href="/services" className={`border border-blue-50 text-blue-50 px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors transition-all duration-1000 ease-out ${
                 ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
               }`} style={{ animationDelay: '300ms' }}>
                 Explore Services
               </a>
             </div>
          </div>
        </div>
                   </div>
                 </div>
      
      {/* Footer */}
      <Footer />
    </main>
  )
}
