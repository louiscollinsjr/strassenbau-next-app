'use client';

import { useEffect, useState } from 'react';

interface HeroProps {
  overline: string;
  title: string | React.ReactNode;
  images: string[];
  accentColor?: 'red' | 'blue' | 'orange' | 'emerald';
}

export default function CustomHero({ 
  overline, 
  title, 
  images, 
  accentColor = 'red' 
}: HeroProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  const getColorClasses = () => {
    switch (accentColor) {
      case 'blue':
        return {
          desktop: 'bg-blue-500/70',
          mobile: 'border-blue-500'
        };
      case 'orange':
        return {
          desktop: 'bg-orange-500/70',
          mobile: 'border-orange-500'
        };
        case 'emerald':
        return {
          desktop: 'bg-emerald-900/70',
          mobile: 'border-emerald-500'
        };
      default:
        return {
          desktop: 'bg-red-500/70',
          mobile: 'border-red-500'
        };
    }
  };

  const colorClasses = getColorClasses();

  return (
    <section className="relative">
      <div className="mx-auto flex flex-col max-w-5xl relative rounded-sm h-[60vh] md:mb-16 overflow-hidden group">
        {images.length === 1 ? (
          <div 
            className="absolute inset-0 transition-transform duration-[2000ms] ease-in-out group-hover:scale-110"
            style={{
              backgroundImage: `url("${images[0]}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        ) : (
          images.map((image, index) => (
            <div
              key={image}
              className={`absolute inset-0 transition-opacity duration-[3000ms] transform group-hover:scale-110 ${
                currentImageIndex === index ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url("${image}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            />
          ))
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        
        {/* Desktop Content */}
        <div className={`hidden md:block absolute bottom-0 left-0 z-10 p-8 md:p-12 ${colorClasses.desktop} w-fit`}>
          <h1 className="text-base md:text-xl lg:text-4xl font-light mb-2 leading-relaxed text-white">
            {overline}
          </h1>
          <p className="text-3xl md:text-xl lg:text-5xl font-bold leading-tight md:leading-relaxed text-white max-w-2xl">
            {title}
          </p>
        </div>
      </div>

      {/* Mobile Content */}
      <div className={`md:hidden p-4 py-8 w-full border-t-8 ${colorClasses.mobile} mb-8`}>
        <h1 className="text-xl font-light leading-relaxed text-black">
          {overline}
        </h1>
        <p className="text-4xl font-bold leading-9 text-black">
          {title}
        </p>
      </div>
    </section>
  );
}
