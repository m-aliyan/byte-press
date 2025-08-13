'use client';

import { useEffect, useRef, useState } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  book: string;
  sales: string;
}

interface TestimonialsSliderProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSlider({ testimonials }: TestimonialsSliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollPositionRef = useRef(0);
  const [clickedId, setClickedId] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let intervalId: NodeJS.Timeout;
    const scrollSpeed = 0.8; // Adjust speed here (lower = faster)

    if (!isPaused) {
      intervalId = setInterval(() => {
        scrollPositionRef.current += scrollSpeed;
        
        // Calculate the width of one complete set of testimonials
        const singleSetWidth = testimonials.length * 320; // 320px per testimonial (w-80)
        
        // Reset position when we've scrolled the width of one complete set
        if (scrollPositionRef.current >= singleSetWidth) {
          scrollPositionRef.current = 0;
        }
        
        scrollContainer.style.transform = `translateX(-${scrollPositionRef.current}px)`;
      }, 16); // 60fps
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [testimonials.length, isPaused]);

  const handleTestimonialClick = (id: string) => {
    if (clickedId === id) {
      // If already clicked, unclick it
      setClickedId(null);
    } else {
      // Set new clicked state
      setClickedId(id);
      // Auto-reset after 2 seconds for mobile experience
      setTimeout(() => setClickedId(null), 2000);
    }
  };

  const renderTestimonial = (testimonial: Testimonial, prefix: string) => {
    const testimonialId = `${prefix}-${testimonial.id}`;
    const isClicked = clickedId === testimonialId;
    
    return (
      <div 
        key={testimonialId} 
        className="w-80 flex-shrink-0 px-4 transition-all duration-500 ease-in-out hover:scale-110 active:scale-105"
        onClick={() => handleTestimonialClick(testimonialId)}
      >
                                   <div className={`testimonial-card rounded-xl shadow-lg p-6 transition-all duration-500 ease-in-out cursor-pointer h-96 flex flex-col relative overflow-hidden ${
            isClicked ? 'scale-110 shadow-2xl' : 'bg-white hover:shadow-2xl'
          } group`}>
                                         {/* Radial fill background */}
                     <div className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                       isClicked 
                         ? 'bg-blue-600' 
                         : 'bg-blue-600'
                     }`} 
                     style={{
                       background: isClicked 
                         ? 'radial-gradient(circle at 0% 0%, #2563eb 0%, #1d4ed8 100%)'
                         : 'radial-gradient(circle at 0% 0%, #2563eb 0%, #1d4ed8 100%)',
                       transform: isClicked 
                         ? 'scale(1)' 
                         : 'scale(0)',
                       transformOrigin: '0% 0%'
                     }}></div>
                    
                    {/* Content wrapper with relative positioning */}
                    <div className="relative z-10 flex flex-col h-full">
          {/* Rating */}
          <div className={`flex mb-4 justify-center transition-colors duration-500 ${
            isClicked ? 'text-yellow-200' : 'text-yellow-400 group-hover:text-yellow-200'
          }`}>
            {[...Array(testimonial.rating)].map((_, i) => (
              <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          {/* Content */}
          <blockquote className={`mb-6 italic text-sm leading-relaxed flex-grow transition-colors duration-500 ${
            isClicked ? 'text-white' : 'text-gray-700 group-hover:text-white'
          }`}>
            "{testimonial.content}"
          </blockquote>

          {/* Book Info */}
          <div className={`rounded-lg p-3 mb-4 transition-all duration-500 ${
            isClicked ? 'bg-blue-500' : 'bg-blue-50 group-hover:bg-blue-500'
          }`}>
            <div className={`text-sm font-medium transition-colors duration-500 ${
              isClicked ? 'text-white' : 'text-blue-900 group-hover:text-white'
            }`}>{testimonial.book}</div>
            <div className={`text-xs transition-colors duration-500 ${
              isClicked ? 'text-blue-100' : 'text-blue-700 group-hover:text-blue-100'
            }`}>{testimonial.sales}</div>
          </div>

          {/* Author Info */}
          <div className="flex items-center mt-auto">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm mr-3 transition-all duration-500 ${
              isClicked 
                ? 'bg-gradient-to-br from-white to-blue-200 text-blue-600' 
                : 'bg-gradient-to-br from-blue-400 to-purple-500 text-white group-hover:from-white group-hover:to-blue-200 group-hover:text-blue-600'
            }`}>
              {testimonial.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <div className={`font-semibold text-sm transition-colors duration-500 ${
                isClicked ? 'text-white' : 'text-gray-900 group-hover:text-white'
              }`}>{testimonial.name}</div>
              <div className={`text-xs transition-colors duration-500 ${
                isClicked ? 'text-blue-100' : 'text-gray-600 group-hover:text-blue-100'
              }`}>{testimonial.role}</div>
              <div className={`text-xs transition-colors duration-500 ${
                isClicked ? 'text-blue-200' : 'text-gray-500 group-hover:text-blue-200'
              }`}>{testimonial.company}</div>
                         </div>
           </div>
         </div>
       </div>
     </div>
   );
 };

  return (
    <div 
      className="relative w-full overflow-hidden pt-8 pb-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Scrolling Container */}
      <div 
        ref={scrollRef}
        className="flex"
        style={{ width: 'max-content' }}
      >
        {/* First set of testimonials */}
        {testimonials.map((testimonial) => renderTestimonial(testimonial, 'first'))}
        
        {/* Duplicate set for seamless loop */}
        {testimonials.map((testimonial) => renderTestimonial(testimonial, 'second'))}
      </div>
    </div>
  );
}
