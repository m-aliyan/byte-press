'use client';

import { useState, useEffect, useRef } from 'react';
import Slider360 from '@/components/360Slider';
import Footer from '@/components/Footer';

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  
  const headerRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

     useEffect(() => {
     const observer = new IntersectionObserver(
       (entries) => {
         entries.forEach((entry) => {
           if (entry.isIntersecting) {
             setVisibleElements(prev => new Set(prev).add(entry.target.id));
           } else {
             // Reset animation when element leaves viewport
             setVisibleElements(prev => {
               const newSet = new Set(prev);
               newSet.delete(entry.target.id);
               return newSet;
             });
           }
         });
       },
       {
         threshold: 0.01,
         rootMargin: '0px 0px -100px 0px'
       }
     );

     // Observe all sections
     if (headerRef.current) observer.observe(headerRef.current);
     if (categoriesRef.current) observer.observe(categoriesRef.current);
     if (projectsRef.current) observer.observe(projectsRef.current);
     if (ctaRef.current) observer.observe(ctaRef.current);

     return () => observer.disconnect();
   }, []);

  const projects = [
    { id: 1, title: "The Dragon's Quest", category: "Fiction", image: "/books/1.png", rating: 4.8, stats: "2.5k reads" },
    { id: 2, title: "Mystery Manor", category: "Fiction", image: "/books/2.png", rating: 4.9, stats: "3.1k reads" },
    { id: 3, title: "Ocean Depths", category: "Non-Fiction", image: "/books/3.png", rating: 4.7, stats: "1.8k reads" },
    { id: 4, title: "Mountain Peak", category: "Non-Fiction", image: "/books/4.png", rating: 4.6, stats: "2.2k reads" },
    { id: 5, title: "Desert Sands", category: "Self-Help", image: "/books/5.png", rating: 4.8, stats: "3.5k reads" },
    { id: 6, title: "Forest Whispers", category: "Self-Help", image: "/books/6.png", rating: 4.9, stats: "2.8k reads" },
    { id: 7, title: "City Lights", category: "Cookbook", image: "/books/7.png", rating: 4.7, stats: "1.9k reads" },
    { id: 8, title: "Sunset Valley", category: "Cookbook", image: "/books/8.png", rating: 4.8, stats: "2.4k reads" },
    { id: 9, title: "Starry Night", category: "Technology", image: "/books/9.png", rating: 4.9, stats: "3.2k reads" },
    { id: 10, title: "Golden Fields", category: "Technology", image: "/books/10.png", rating: 4.6, stats: "2.1k reads" },
    { id: 11, title: "Crystal Cave", category: "Children's Books", image: "/books/11.png", rating: 4.8, stats: "2.7k reads" },
    { id: 12, title: "Rainbow Bridge", category: "Children's Books", image: "/books/11-11.png", rating: 4.9, stats: "3.0k reads" },
    { id: 13, title: "Digital Dreams", category: "Technology", image: "/books/Kristy-Dixon_ebook-768x1229.jpg", rating: 4.7, stats: "2.3k reads" },
    { id: 14, title: "Ancient Wisdom", category: "Non-Fiction", image: "/books/Samuel-Alexander_ebook_-768x1229.jpg", rating: 4.8, stats: "2.9k reads" },
    { id: 15, title: "Future Horizons", category: "Technology", image: "/books/Douglas-Thomas-book-4-v2_ebook-768x1152.jpg", rating: 4.9, stats: "3.4k reads" },
    { id: 16, title: "Creative Canvas", category: "Self-Help", image: "/books/Gwenna-McAllis_ebook-768x1187.jpg", rating: 4.6, stats: "2.0k reads" },
    { id: 17, title: "Mindful Moments", category: "Self-Help", image: "/books/Annie-H-Vanhoose-2_ebook_-768x1151.jpg", rating: 4.8, stats: "2.6k reads" },
    { id: 18, title: "Culinary Adventures", category: "Cookbook", image: "/books/CB-Samet_-768x1152.jpg", rating: 4.7, stats: "2.1k reads" },
    { id: 19, title: "Little Explorers", category: "Children's Books", image: "/books/Zev-Paiss-3-v4-ebook-768x1229.jpg", rating: 4.9, stats: "3.1k reads" },
    { id: 20, title: "Fantasy Tales", category: "Fiction", image: "/books/Michael-Boni-ebook-768x1153.jpg", rating: 4.8, stats: "2.8k reads" },
    { id: 21, title: "Business Insights", category: "Non-Fiction", image: "/books/Benjamin-Twigg-5_ebook_-768x1153.jpg", rating: 4.7, stats: "2.4k reads" },
    { id: 22, title: "Health & Wellness", category: "Self-Help", image: "/books/Rachel-Graves-book-2_v3_-768x1152.jpg", rating: 4.9, stats: "3.3k reads" },
    { id: 23, title: "Gourmet Delights", category: "Cookbook", image: "/books/Arrendle-ebook-1-768x1229.jpg", rating: 4.6, stats: "2.2k reads" },
    { id: 24, title: "Tech Revolution", category: "Technology", image: "/books/Juliet-Lockwood_ebook_-768x1186.jpg", rating: 4.8, stats: "2.9k reads" },
    { id: 25, title: "Adventure Stories", category: "Children's Books", image: "/books/A-S-Colworth_ebook-768x1152.jpg", rating: 4.7, stats: "2.5k reads" },
    { id: 26, title: "Mystery Novels", category: "Fiction", image: "/books/Danielle-Bourdon-ebook-768x1152.jpg", rating: 4.9, stats: "3.2k reads" },
    { id: 27, title: "Life Lessons", category: "Self-Help", image: "/books/Nathan-Fouyer_ebook_-768x1153.jpg", rating: 4.8, stats: "2.7k reads" },
    { id: 28, title: "Kitchen Secrets", category: "Cookbook", image: "/books/Antonella-Sinner-2-ebook-768x1229.jpg", rating: 4.6, stats: "2.3k reads" },
    { id: 29, title: "Digital Age", category: "Technology", image: "/books/Jonathan-McCarthy-front-768x1228.jpg", rating: 4.7, stats: "2.8k reads" },
    { id: 30, title: "Wonderful World", category: "Children's Books", image: "/books/Layla-Moran-2_ebook_-768x1152.jpg", rating: 4.9, stats: "3.0k reads" },
    { id: 31, title: "Epic Tales", category: "Fiction", image: "/books/Linda-Hughes-2_ebook_-768x1152.jpg", rating: 4.8, stats: "2.6k reads" },
    { id: 32, title: "Knowledge Base", category: "Non-Fiction", image: "/books/2-2.png", rating: 4.7, stats: "2.9k reads" },
    { id: 33, title: "Modern Fiction", category: "Fiction", image: "/books/3-3.png", rating: 4.8, stats: "2.8k reads" },
    { id: 34, title: "Science & Tech", category: "Technology", image: "/books/R.M.-Olson-5_ebook_-768x1186.jpg", rating: 4.9, stats: "3.1k reads" },
    { id: 35, title: "Life Coaching", category: "Self-Help", image: "/books/Hubert-L.-Mullins_ebook-768x1196.jpg", rating: 4.7, stats: "2.5k reads" },
    { id: 36, title: "Cooking Masterclass", category: "Cookbook", image: "/books/J.R.-Erickson-ebook-768x1187.jpg", rating: 4.8, stats: "2.9k reads" },
    { id: 37, title: "Kids Adventure", category: "Children's Books", image: "/books/Kristi-Rose_2v_ebook_-768x1152.jpg", rating: 4.9, stats: "3.0k reads" },
    { id: 38, title: "Business Strategy", category: "Non-Fiction", image: "/books/Whayne-Lee-768x1187.jpg", rating: 4.6, stats: "2.4k reads" },
    { id: 39, title: "Creative Writing", category: "Fiction", image: "/books/Jayna-Morrow_ebook_-1-768x1186.jpg", rating: 4.8, stats: "2.7k reads" },
    { id: 40, title: "Research Methods", category: "Non-Fiction", image: "/books/R.M.-Olson-ebook-768x1187.jpg", rating: 4.7, stats: "2.6k reads" },
    { id: 41, title: "Leadership Skills", category: "Self-Help", image: "/books/Michael-W-Hickman_ebook-768x1152.jpg", rating: 4.9, stats: "3.2k reads" },
    { id: 42, title: "Alternative Views", category: "Fiction", image: "/books/1-1.png", rating: 4.8, stats: "2.8k reads" },
    { id: 43, title: "Double Vision", category: "Non-Fiction", image: "/books/2-2.png", rating: 4.7, stats: "2.3k reads" },
    { id: 44, title: "Triple Impact", category: "Technology", image: "/books/3-3.png", rating: 4.9, stats: "3.1k reads" },
    { id: 45, title: "Fourth Dimension", category: "Self-Help", image: "/books/4-4.png", rating: 4.6, stats: "2.5k reads" },
    { id: 46, title: "Fifth Element", category: "Cookbook", image: "/books/5-5.png", rating: 4.8, stats: "2.9k reads" },
    { id: 47, title: "Sixth Sense", category: "Children's Books", image: "/books/6-6.png", rating: 4.7, stats: "2.6k reads" },
    { id: 48, title: "Seventh Heaven", category: "Fiction", image: "/books/1-1.png", rating: 4.9, stats: "3.0k reads" },
    { id: 49, title: "Eighth Wonder", category: "Technology", image: "/books/8-8.png", rating: 4.8, stats: "2.7k reads" },
    { id: 50, title: "Ninth Life", category: "Self-Help", image: "/books/9-9.png", rating: 4.6, stats: "2.4k reads" },
    { id: 51, title: "Tenth Commandment", category: "Non-Fiction", image: "/books/10-10.png", rating: 4.9, stats: "3.3k reads" }
  ];

  const categories = ["All", "Fiction", "Non-Fiction", "Self-Help", "Cookbook", "Technology", "Children's Books"];

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950">
      {/* 360 Slider Hero Section */}
      <Slider360 />
      
      <div className="container mx-auto px-4 py-16 relative">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

                 <div className="text-center mb-16 mt-20 relative z-10" ref={headerRef} id="header">
           <h1 className={`text-6xl font-bold text-white mb-6 transition-all duration-1000 ${
             visibleElements.has('header') 
               ? 'animate-fade-in-up opacity-100 translate-y-0 scale-100' 
               : 'opacity-0 translate-y-10 scale-95'
           }`}>
             Our Book Portfolio
           </h1>
           
                      {/* Animated Underline */}
            <div className={`relative inline-block mb-8 transition-all duration-1000 delay-100 ${
              visibleElements.has('header') 
                ? 'animate-fade-in-up opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-10 scale-95'
            }`}>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full mx-auto animate-pulse"></div>
              {/* Animated Glow */}
              <div className="absolute inset-0 w-32 h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full blur-lg opacity-50 animate-pulse"></div>
              {/* Expanding Line */}
              <div className="absolute inset-0 w-0 h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full mx-auto transition-all duration-1000 ease-out animate-expand-line"></div>
            </div>
           
           <p className={`text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
             visibleElements.has('header') 
               ? 'animate-fade-in-up opacity-100 translate-y-0 scale-100' 
               : 'opacity-0 translate-y-10 scale-95'
           }`}>
             Discover the diverse range of books we've helped bring to life. Each project represents our commitment to quality and excellence in the publishing world.
           </p>
         </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-6 mb-16 relative z-10" ref={categoriesRef} id="categories">
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
                             className={`px-8 py-4 rounded-2xl backdrop-blur-sm border-2 shadow-2xl hover:shadow-3xl transition-all duration-500 font-semibold text-lg transform hover:scale-110 relative overflow-hidden group ${
                 selectedCategory === category
                   ? 'bg-gradient-to-r from-blue-600 to-blue-800 text-white border-blue-400 shadow-blue-500/50 scale-105'
                   : 'bg-white/10 text-white border-white/30 hover:text-blue-300 hover:bg-white/20 hover:border-blue-400/50'
               } ${
                 visibleElements.has('categories') 
                   ? 'animate-fade-in-up opacity-100 translate-y-0' 
                   : 'opacity-0 translate-y-10'
               }`}
              style={{
                animationDelay: `${index * 75}ms`,
                transitionDelay: visibleElements.has('categories') ? `${index * 75}ms` : '0ms'
              }}
            >
                             {/* Button Background Glow */}
               <div className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
                 selectedCategory === category
                   ? 'bg-gradient-to-r from-blue-600/20 to-blue-800/20'
                   : 'bg-gradient-to-r from-blue-500/0 to-blue-700/0 group-hover:from-blue-500/10 group-hover:to-blue-700/10'
               }`}></div>
              
              {/* Button Content */}
              <span className="relative z-10">{category}</span>
              
              {/* Hover Shine Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-2xl"></div>
              
                             {/* Floating Particles */}
               <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
               <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-blue-300 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse delay-200"></div>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10" ref={projectsRef} id="projects">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`group bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-110 relative ${
                visibleElements.has('projects') 
                  ? 'animate-fade-in-up opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                animationDelay: `${index * 50}ms`,
                transitionDelay: visibleElements.has('projects') ? `${index * 50}ms` : '0ms'
              }}
            >
              <div className="h-96 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-fill transition-all duration-700 group-hover:scale-110"
                />
                
                {/* Crazy Hover Effects */}
                
                {/* Electric Border */}
                <div className="absolute inset-0 border-4 border-transparent group-hover:border-yellow-400 group-hover:border-opacity-80 transition-all duration-300 rounded-xl"></div>
                
                {/* Floating Particles */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100 animate-bounce"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 transform scale-0 group-hover:scale-100 animate-bounce"></div>
                <div className="absolute top-1/2 left-4 w-1.5 h-1.5 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 transform scale-0 group-hover:scale-100 animate-bounce"></div>
                
                {/* Glitch Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gradient-to-r from-red-500/20 via-green-500/20 to-blue-500/20 mix-blend-overlay"></div>
                
                {/* Scan Line Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-pulse"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse delay-1000"></div>
                </div>
                
                {/* Corner Glow */}
                <div className="absolute top-0 left-0 w-8 h-8 bg-gradient-to-br from-yellow-400 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100 rounded-br-xl"></div>
                <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-pink-400 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 transform scale-0 group-hover:scale-100 rounded-bl-xl"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 bg-gradient-to-tr from-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 delay-400 transform scale-0 group-hover:scale-100 rounded-tr-xl"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tl from-green-400 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 delay-600 transform scale-0 group-hover:scale-100 rounded-tl-xl"></div>
                
                {/* Digital Rain Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-0 left-4 text-green-400 text-xs font-mono animate-pulse">01</div>
                    <div className="absolute top-8 left-12 text-green-400 text-xs font-mono animate-pulse animation-delay-500">10</div>
                    <div className="absolute top-16 left-8 text-green-400 text-xs font-mono animate-pulse animation-delay-1000">11</div>
                    <div className="absolute top-24 left-16 text-green-400 text-xs font-mono animate-pulse animation-delay-1500">00</div>
                    <div className="absolute top-32 left-6 text-green-400 text-xs font-mono animate-pulse animation-delay-2000">01</div>
                    <div className="absolute top-40 left-14 text-green-400 text-xs font-mono animate-pulse animation-delay-2500">10</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Results Counter */}
        <div className="text-center mt-8 relative z-10">
          <p className="text-gray-300 text-lg">
            Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'book' : 'books'} 
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
          </p>
        </div>

                 {/* Book Marketing Section */}
         <div className="mt-20 mb-32 relative z-10" ref={ctaRef} id="cta">
          <div className="relative overflow-hidden rounded-3xl border border-white/20 shadow-2xl">
                         {/* Neon Background Image */}
             <div className="absolute inset-0">
               <img 
                 src="/neon.png" 
                 alt="Neon background" 
                 className="w-full h-full object-cover"
               />
                               {/* Light blue overlay for better text readability */}
                <div className="absolute inset-0 bg-blue-200/40"></div>
             </div>

                         {/* Animated Background Elements */}
             <div className="absolute inset-0">
               <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
               <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-400/30 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
             </div>

            <div className="relative p-16 text-center">
              {/* Main Content */}
              <div className="mb-12">
                                                  <h2 className={`text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-1000 ${
                    visibleElements.has('cta') 
                      ? 'animate-fade-in-up opacity-100 translate-y-0 scale-100' 
                      : 'opacity-0 translate-y-10 scale-95'
                  } drop-shadow-2xl relative group`}>
                    <span className="relative z-10">Striving To Sell More Of Your Books?</span>
                    {/* Shining White Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                    {/* Animated Shine Line */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/80 to-transparent"></div>
                    {/* Text Glow */}
                    <div className="absolute inset-0 text-white blur-sm opacity-70"></div>
                  </h2>
                <p className={`text-2xl md:text-3xl text-gray-200 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
                  visibleElements.has('cta') 
                    ? 'animate-fade-in-up opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-10 scale-95'
                }`}>
                  Why Not Hire Expert Book Marketing Professionals To Promote Your Book!
                </p>
              </div>

              {/* Action Buttons */}
              <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-500 ${
                visibleElements.has('cta') 
                  ? 'animate-fade-in-up opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-10 scale-95'
              }`}>
                
                                                  {/* Get Started Button */}
                  <a href="/contact" className="group relative px-10 py-4 bg-gradient-to-r from-blue-300 to-blue-500 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-blue-400/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 overflow-hidden animate-pulse inline-block">
                    <span className="relative z-10">Get Started</span>
                    {/* Button Shine Effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                    {/* Button Glow */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-300 to-blue-500 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {/* Floating Particles */}
                    <div className="absolute -top-2 -right-2 w-3 h-3 bg-blue-200 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce"></div>
                    <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-100 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 animate-bounce"></div>
                  </a>
                
                                 
                
                                                  {/* View Our Services Button */}
                  <a href="/services" className="group relative px-10 py-4 border-2 border-blue-200/60 text-white font-bold text-lg rounded-2xl backdrop-blur-sm hover:bg-blue-200/20 hover:border-blue-300/80 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 overflow-hidden animate-pulse animation-delay-400 inline-block">
                    <span className="relative z-10">View Our Services</span>
                    {/* Phone Icon Glow */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-200/0 to-blue-200/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {/* Floating Particles */}
                    <div className="absolute -top-2 -right-2 w-2 h-2 bg-blue-200 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce"></div>
                    <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-blue-100 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 animate-bounce"></div>
                  </a>
              </div>
              
                             {/* Decorative Elements */}
               <div className="absolute top-4 left-4 w-2 h-2 bg-blue-200 rounded-full animate-ping"></div>
               <div className="absolute top-4 right-4 w-2 h-2 bg-blue-300 rounded-full animate-ping animation-delay-1000"></div>
               <div className="absolute bottom-4 left-4 w-2 h-2 bg-blue-100 rounded-full animate-ping animation-delay-2000"></div>
               <div className="absolute bottom-4 right-4 w-2 h-2 bg-blue-200 rounded-full animate-ping animation-delay-3000"></div>
            </div>
          </div>
        </div>

        
      </div>
      
      {/* Footer */}
      <Footer />
    </main>
  )
}
