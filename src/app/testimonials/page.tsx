'use client';

import { useEffect, useState } from 'react';
import TestimonialsSlider from '@/components/TestimonialsSlider';

export default function TestimonialsPage() {
  const [counts, setCounts] = useState({
    authors: 0,
    books: 0,
    bestsellers: 0,
    reviews: 0
  });

  const [isVisible, setIsVisible] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);

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
    { label: "Happy Authors", value: counts.authors, icon: "👨‍💻", suffix: "+" },
    { label: "Books Published", value: counts.books, icon: "📚", suffix: "+" },
    { label: "Bestsellers", value: counts.bestsellers, icon: "🏆", suffix: "+" },
    { label: "5-Star Reviews", value: counts.reviews, icon: "⭐", suffix: "%" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className={`text-5xl font-bold text-gray-900 mb-2 transition-all duration-1000 ease-out ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Why Clients Love Working with Us
          </h1>
          {/* Animated Underline */}
          <div className={`h-2 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto max-w-4xl transition-all duration-1000 ease-out ${
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
               <div className="text-4xl mb-2">{stat.icon}</div>
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
              <span className="text-gray-800">Book Publishing Point</span>
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
                    💰
                  </div>
                  <h3 className="text-xl font-bold text-blue-600 text-center">0% Sales Royalty</h3>
                </div>
                {/* Back Side */}
                <div className="flip-card-back bg-blue-600 rounded-xl p-6 shadow-lg flex flex-col items-center justify-center h-64">
                  <p className="text-white text-sm leading-relaxed text-center">
                    At Book Publishing Point, we take 0% sales royalty, which means that our clients retain full control over their book's profits. Our clients can maximize their earnings and use their profits as they see fit.
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
                    🏆
                  </div>
                  <h3 className="text-xl font-bold text-blue-600 text-center">100% Complete Ownership</h3>
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
                    ⏰
                  </div>
                  <h3 className="text-xl font-bold text-blue-600 text-center">On-Time Delivery</h3>
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
                    🎯
                  </div>
                  <h3 className="text-xl font-bold text-blue-600 text-center">Personalized Services</h3>
                </div>
                {/* Back Side */}
                <div className="flip-card-back bg-blue-600 rounded-xl p-6 shadow-lg flex flex-col items-center justify-center h-64">
                  <p className="text-white text-sm leading-relaxed text-center">
                    At Book Publishing Point, we understand that each client has unique needs and goals. That's why we offer personalized services that are tailored to our clients' individual requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

                                   {/* Featured Success Story */}
         <div className="bg-blue-100 rounded-2xl shadow-xl p-6 mb-16">
           <div className="text-center mb-6">
             <h2 className="text-3xl font-bold text-gray-900 mb-4">
               Featured <span className="text-blue-600">Success Story</span>
             </h2>
             <p className="text-lg text-gray-600">
               From Manuscript to Bestseller in 6 Months
             </p>
           </div>
           
           <div className="flex flex-col md:flex-row gap-6 items-center">
             <div className="flex-1">
               <h3 className="text-2xl font-bold text-gray-900 mb-2 animate-fadeInUp">
                 "The Midnight Garden" by Sarah Johnson
               </h3>
               <p className="text-gray-700 mb-3 animate-fadeInUp animation-delay-200">
                 Sarah came to us with a rough fantasy manuscript and a dream of becoming a published author. Our team worked closely with her to develop the story, polish the writing, and create a stunning cover design.
               </p>
                              <div className="grid grid-cols-2 gap-4 mb-3">
                  <div className="text-center animate-fadeInUp animation-delay-400">
                    <div className="text-2xl font-bold text-blue-600">#1</div>
                    <div className="text-sm text-gray-600">Amazon Bestseller</div>
                  </div>
                  <div className="text-center animate-fadeInUp animation-delay-500">
                    <div className="text-2xl font-bold text-blue-600">50K+</div>
                    <div className="text-sm text-gray-600">Copies Sold</div>
                  </div>
                </div>
               <div className="flex justify-center">
                 <a href="/portfolio" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-fadeInUp animation-delay-600">
                   View Full Portfolio
                 </a>
               </div>
             </div>
             
             <div className="flex justify-center">
               <img 
                 src="/books_stack.png" 
                 alt="Books Stack" 
                 className="w-150 h-80 object-contain rounded-2xl shadow-lg"
               />
             </div>
           </div>
         </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-blue-100 mb-6">
              Join hundreds of successful authors who've transformed their ideas into bestselling books with BytePress.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Start Your Journey
              </a>
              <a href="/services" className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
