'use client';

import { useState, useEffect } from 'react';

const images = [
  '/images/AdobeStock_126264465.jpeg',
  '/images/AdobeStock_275218656.jpeg',
];

export default function PortfolioHeroPlus() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 9000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mx-auto flex flex-col max-w-5xl relative rounded-sm h-[60vh] mb-16 overflow-hidden">
      {images.map((image, index) => (
        <div
          key={image}
          className="absolute inset-0 transition-opacity duration-[3000ms]"
          style={{
            backgroundImage: `url("${image}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: currentImageIndex === index ? 1 : 0
          }}
        />
      ))}
      
      {/* Gradient overlay from transparent to dark */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 z-10 p-8 md:p-12 bg-blue-500/40">
        <h1 className="text-sm md:text-xl lg:text-4xl font-light mb-2 leading-relaxed text-white">
          Our Portfolio
        </h1>
        <p className="text-3xl md:text-xl lg:text-5xl font-bold leading-normal md:leading-relaxed text-white max-w-2xl">
         Your vision from, <br/><span className="text-white">concept to completion..</span>
        </p>
      </div>
    </div>
  )
}
