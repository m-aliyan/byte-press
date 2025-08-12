'use client';

import React from 'react';

const Slider360: React.FC = () => {
  const sliderImages = [
    '/books/1.png',
    '/books/2.png',
    '/books/3.png',
    '/books/4.png',
    '/books/5.png',
    '/books/6.png',
    '/books/7.png',
    '/books/8.png',
    '/books/9.png',
    '/books/10.png',
  ];

  return (
    <div className="hero-banner-360">
      <div className="hero-slider-360" style={{ '--quantity': 10 } as React.CSSProperties}>
        {sliderImages.map((src, index) => (
          <div 
            key={index} 
            className="hero-slider-item-360" 
            style={{ '--position': index + 1 } as React.CSSProperties}
          >
            <img src={src} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="hero-content-360">
        <h1 className="hero-title-360" data-content="BYTE PRESS">
          BYTE PRESS
        </h1>
      </div>
      
      <style jsx>{`
        .hero-banner-360 {
          width: 100%;
          height: 100vh;
          text-align: center;
          overflow: hidden;
          position: relative;
          background-color: #D2D2D2;
          background-image:
            repeating-linear-gradient(
              to right, transparent 0 100px,
              #25283b22 100px 101px
            ),
            repeating-linear-gradient(
              to bottom, transparent 0 100px,
              #25283b22 100px 101px
            );
        }
        
        .hero-banner-360::before {
          position: absolute;
          width: min(1400px, 90vw);
          top: 10%;
          left: 50%;
          height: 90%;
          transform: translateX(-50%);
          content: '';
          /* background-image: url('/books/bg.png'); - Removed since file doesn't exist */
          background-size: 100%;
          background-repeat: no-repeat;
          background-position: top center;
          pointer-events: none;
        }
        
        .hero-slider-360 {
          position: absolute;
          width: 200px;
          height: 250px;
          top: 10%;
          left: calc(50% - 100px);
          transform-style: preserve-3d;
          transform: perspective(1000px);
          animation: heroAutoRun 20s linear infinite;
          z-index: 2;
        }
        
        @keyframes heroAutoRun {
          from {
            transform: perspective(1000px) rotateX(-16deg) rotateY(0deg);
          }
          to {
            transform: perspective(1000px) rotateX(-16deg) rotateY(360deg);
          }
        }
        
        .hero-slider-item-360 {
          position: absolute;
          inset: 0 0 0 0;
          transform: 
            rotateY(calc( (var(--position) - 1) * (360 / var(--quantity)) * 1deg))
            translateZ(550px);
        }
        
        .hero-slider-item-360 img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .hero-content-360 {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: max-content;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1;
        }
        
        .hero-title-360 {
          font-family: 'ICA Rubrik', serif;
          font-size: 8em;
          line-height: 1em;
          color: #25283B;
          position: relative;
          text-align: center;
          width: 100%;
          animation: heroZoomInOut 2s ease-in-out infinite;
        }
        
        @keyframes heroZoomInOut {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.3);
          }
        }
        
        .hero-title-360::after {
          position: absolute;
          inset: 0 0 0 0;
          content: attr(data-content);
          z-index: 2;
          -webkit-text-stroke: 2px #d2d2d2;
          color: transparent;
        }
        
        @media screen and (max-width: 1023px) {
          .hero-slider-360 {
            width: 160px;
            height: 200px;
            left: calc(50% - 80px);
          }
          .hero-slider-item-360 {
            transform: 
              rotateY(calc( (var(--position) - 1) * (360 / var(--quantity)) * 1deg))
              translateZ(300px);
          }
          .hero-title-360 {
            font-size: 5em;
          }
        }
        
        @media screen and (max-width: 767px) {
          .hero-slider-360 {
            width: 100px;
            height: 150px;
            left: calc(50% - 50px);
          }
          .hero-slider-item-360 {
            transform: 
              rotateY(calc( (var(--position) - 1) * (360 / var(--quantity)) * 1deg))
              translateZ(180px);
          }
          .hero-title-360 {
            font-size: 3.5em;
          }
        }
      `}</style>
    </div>
  );
};

export default Slider360;
