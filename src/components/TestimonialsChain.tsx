'use client';

import { useEffect, useState } from 'react';
import GetStartedForm from './ui/GetStartedForm';

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
  date: string;
  reviewCount: number;
};

const TESTIMONIALS: Testimonial[] = [
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

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="train-card w-72 h-96 bg-white rounded-xl shadow-lg border border-gray-100 p-6 flex-none flex flex-col justify-between hover:scale-105 hover:bg-blue-50 transition-all">
    {/* Top section with stars and date */}
    <div className="flex items-center justify-between mb-3">
      <StarRating rating={testimonial.rating} />
      <div className="text-sm text-gray-500">{testimonial.date}</div>
    </div>

    {/* Author name and review count */}
    <div className="mb-3">
      <div className="font-semibold text-gray-900 text-lg">{testimonial.name}</div>
      <div className="text-sm text-gray-400">{testimonial.reviewCount} Review{testimonial.reviewCount !== 1 ? 's' : ''}</div>
    </div>

    {/* Role/headline */}
    <h4 className="font-bold text-gray-900 text-base mb-3">{testimonial.role}</h4>

    {/* Quote */}
    <div className="text-gray-700 leading-relaxed text-sm">
      {testimonial.quote}
    </div>
  </div>
);

export default function TestimonialsChain() {
  console.log('TestimonialsChain component rendering');
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] py-16" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="testimonials-heading" className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] mb-16">
          What our client's <span className="text-[#0B3C74]">say</span>
        </h2>

        {/* Train Effect Layout */}
        <div className="train-container mb-8">
          <div
            className={`train-track ${isPaused ? 'paused' : ''}`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
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

          .train-track.paused {
            animation-play-state: paused;
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

          /* The hover styles remain */
          .train-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 24px rgba(11, 60, 116, 0.15);
          }

        `}</style>
      </div>
      
      {/* Reason to choose Bytes Press Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
              <span className="text-[#111827]">Reason to choose</span>{' '}
              <span className="text-[#0B3C74]">Bytes Press</span>
            </h2>
            <p className="text-lg text-[#111827] max-w-3xl mx-auto">
              Our team of experienced professionals is dedicated to transforming your book idea into a reality by providing the expertise and support you need every step of the way.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:bg-blue-50 hover:scale-105 hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-[#0B3C74] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#111827] mb-2">0% Sales Royalty</h3>
              <p className="text-[#0B3C74] text-sm leading-relaxed">
                At Bytes Press, we take 0% sales royalty, which means that our clients retain full control over their book's profits. Our clients can maximize their earnings and use their profits as they see fit.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:bg-blue-50 hover:scale-105 hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-[#0B3C74] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#111827] mb-2">100% Complete Ownership</h3>
              <p className="text-[#0B3C74] text-sm leading-relaxed">
                We believe in complete transparency and ownership, which is why our clients retain 100% ownership of their books. This means that our clients can make all decisions regarding their book's content, distribution, and marketing.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:bg-blue-50 hover:scale-105 hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-[#0B3C74] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#111827] mb-2">On-Time Delivery</h3>
              <p className="text-[#0B3C74] text-sm leading-relaxed">
                We understand the importance of on-time delivery and always work hard to ensure that our clients receive their projects on or before the deadline. We have a dedicated team that works efficiently and effectively to meet our clients' needs.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:bg-blue-50 hover:scale-105 hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-[#0B3C74] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#111827] mb-2">Personalized Services</h3>
              <p className="text-[#0B3C74] text-sm leading-relaxed">
                At Bytes Press, we understand that each client has unique needs and goals. That's why we offer personalized services that are tailored to our clients' individual requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Get your book written and published in Less than a month! Section */}
      <section className="py-20 relative overflow-hidden hero-section">

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#0B3C74]"></div>
                <span className="text-xs tracking-[0.3em] text-gray-600 uppercase font-light">Fast Publishing</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-light leading-tight">
                <span className="font-thin text-gray-600">Get your book written and published in</span>
                <br />
                <span className="font-bold bg-gradient-to-r from-[#0B3C74] to-blue-600 bg-clip-text text-transparent">
                  Less than a month!
                </span>
              </h2>
              
              <p className="text-base text-gray-600 leading-relaxed max-w-lg font-light">
                Challenge us. We want to work with you to create the really cool stuff. Call Us at +1 323 982 3156
              </p>
              
              <div className="flex gap-4 pt-4">
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
            <div className="flex justify-center lg:justify-end">
              <GetStartedForm />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
