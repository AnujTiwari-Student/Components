'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

interface CarLogoCarouselProps {
  logos: string[];
}

const CarLogoCarousel = ({ logos }: CarLogoCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(1); 
  const [isTransitioning, setIsTransitioning] = useState(false);
  const totalSlides = logos.length;
  const clonedLogos = [...logos, ...logos , ...logos]; 
  // const maxDotsVisible = 8;
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);



  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      if (newIndex === totalSlides + 1) {
        return 1;
      }
      return newIndex;
    });
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      if (newIndex === 0) {
        return totalSlides; 
      }
      return newIndex;
    });
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };

  // const getVisibleDots = () => {
  //   const start = Math.max(0, currentIndex - 1);
  //   const end = Math.min(totalSlides, start + maxDotsVisible);
  //   return logos.slice(start, end);
  // };

  return (
    <div className="relative h-[150px] flex items-center justify-start">
      <div
        ref={carouselRef}
        className={`carousel-inner flex transition-transform duration-500 ease-in-out  md:space-x-4 -mt-16`}
        style={{
          transform: `translateX(-${currentIndex * 150}px)`, 
          transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {clonedLogos.map((logo, index) => (
          <div key={index} className="flex-shrink-0" style={{ width: '110px' }}>
            <Image
              src={logo}
              alt={`Car Logo ${index + 1}`}
              className="w-full h-auto object-contain"
              style={{ width: '60px' }}
              width={60}
              height={70}
            />
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 w-full flex justify-center overflow-hidden">
        <div className="flex space-x-2 scrollbar-hide">
          {logos.map((_, index) => (
            <button
              key={index}
              className={`dot ${currentIndex === index + 1 ? 'dot-active' : 'bg-white'}`}
              onClick={() => setCurrentIndex(index + 1)} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarLogoCarousel;
