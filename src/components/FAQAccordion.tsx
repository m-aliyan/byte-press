'use client';

import React, { useState } from 'react';

// --- FAQ Item Type ---
export interface FAQItem {
  id: number;
  keyword: string;
  question: string;
  answer: string;
  imageUrl: string;
}

// --- FAQ Accordion Props ---
interface FAQAccordionProps {
  faqData: FAQItem[];
  title?: string;
  subtitle?: string;
}

// --- FAQ Accordion Item Component ---
const FAQAccordionItem = ({ item, isActive, onMouseEnter, onClick }: { item: FAQItem; isActive: boolean; onMouseEnter: () => void; onClick: () => void }) => {
  return (
    <div
      className={`
        relative h-[450px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out
        ${isActive ? 'w-[400px]' : 'w-[60px]'}
      `}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
    >
      {/* Background Image - Dynamic based on state */}
      <img
        src={isActive ? '/faq_images/faq_img2.png' : item.imageUrl}
        alt={item.question}
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => { 
          const target = e.target as HTMLImageElement;
          target.onerror = null; 
          target.src = '/faq_images/faq_img2.png'; // Using custom fallback image
        }}
      />
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

             {/* Keyword Text - Animated like original accordion */}
       <span
         className={`
           absolute text-white text-lg font-semibold whitespace-nowrap
           transition-all duration-300 ease-in-out
           ${
             isActive
               ? 'bottom-6 left-6 rotate-0' // Active state: horizontal, bottom-left
               : 'bottom-24 left-1/2 -translate-x-1/2 rotate-90' // Inactive state: vertical, centered
           }
         `}
       >
         {item.keyword}
       </span>

       {/* Full Content (always present, but hidden when not active) - Fixed size container */}
       <div className={`absolute inset-0 p-6 flex flex-col transition-opacity duration-400 ease-in-out ${
         isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
       }`}>
         {/* Fixed-size Question and Answer Container - Left aligned */}
         <div className="flex-1 flex flex-col justify-center min-h-[280px]">
           {/* Question - Fixed height container, left aligned */}
           <div className={`bg-black bg-opacity-80 p-4 rounded-lg mb-3 min-h-[80px] flex items-center justify-start transition-opacity duration-300 ease-in-out ${
             isActive ? 'opacity-100' : 'opacity-0'
           }`} style={{ transitionDelay: isActive ? '800ms' : '0ms' }}>
             <h3 className="text-white text-lg font-bold leading-tight text-left">
               {item.question}
             </h3>
           </div>
           
           {/* Answer - Fixed height container, left aligned */}
           <div className={`bg-black bg-opacity-80 p-4 rounded-lg min-h-[120px] flex items-center justify-start transition-opacity duration-300 ease-in-out ${
             isActive ? 'opacity-100' : 'opacity-0'
           }`} style={{ transitionDelay: isActive ? '800ms' : '0ms' }}>
             <p className="text-white text-sm leading-relaxed text-left">
               {item.answer}
             </p>
           </div>
         </div>
         
         {/* Fixed height space for keyword */}
         <div className="h-16 flex items-center justify-center">
           {/* Keyword will be positioned here by the absolute positioned span above */}
         </div>
       </div>
    </div>
  );
};

// --- Main FAQ Accordion Component ---
export function FAQAccordion({ faqData, title, subtitle }: FAQAccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // Default to no item selected (all closed)

  const handleItemHover = (index: number) => {
    setActiveIndex(index);
  };

  const handleItemClick = (index: number) => {
    // If clicking on the same card that's already active, close it
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      // Otherwise, open the clicked card
      setActiveIndex(index);
    }
  };

  return (
    <div className="bg-white font-sans">
      <section className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Left Side: Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tighter">
              {title || "Questions Writers Actually Ask Us"}
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
              {subtitle || "Before you dive into your next draft or publishing step, here are some answers that might save you time — and sharpen your final manuscript."}
            </p>
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-block bg-[#0B3C74] text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-[#0A2E5C] transition-colors duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Right Side: FAQ Accordion */}
          <div className="w-full md:w-1/2">
            <div className="flex flex-row items-center justify-center gap-4 overflow-x-auto p-4">
              {faqData.map((item, index) => (
                <FAQAccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onMouseEnter={() => handleItemHover(index)}
                  onClick={() => handleItemClick(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQAccordion;
