import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroProps {
  id: string;
}

const heroSlides = [
  { image: "/images/hero/heroslide (1).webp" },
  { image: "/images/hero/heroslide (2).webp" },
  { image: "/images/hero/heroslide (3).webp" },
  { image: "/images/hero/heroslide (4).webp" },
  { image: "/images/hero/heroslide (5).webp" },
  { image: "/images/hero/heroslide (6).webp" }
];

const Hero: React.FC<HeroProps> = ({ id }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-change slide every 6 seconds (slightly slower for a more relaxed luxury feel)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  return (
    <section id={id} className="relative w-screen h-[100dvh] md:h-screen overflow-hidden bg-[#1A1A1A]">
      {/* Slider Images */}
      {heroSlides.map((slide, index) => (
        <div 
          key={index} 
          className={`absolute inset-0 z-0 transition-opacity duration-[2000ms] ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={slide.image} 
            alt={`SJAA Architecture Showcase ${index + 1}`} 
            // PERFORMANCE: Force the first image to load instantly, lazy load the rest
            fetchPriority={index === 0 ? "high" : "auto"}
            loading={index === 0 ? "eager" : "lazy"}
            // LUXURY UX: The continuous 10-second slow zoom (Ken Burns effect)
            className={`w-full h-full object-cover transition-transform duration-[10000ms] ease-out ${
              index === currentSlide ? 'scale-105' : 'scale-100'
            }`}
          />
          {/* Subtle dark gradient overlay for aesthetic depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50" />
        </div>
      ))}

      {/* Navigation Arrows (Desktop Only) */}
      <button 
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 text-white/50 hover:text-white transition-colors duration-300 hidden md:block p-4 bg-black/10 hover:bg-black/30 rounded-full backdrop-blur-md"
          aria-label="Previous slide"
      >
          <ChevronLeft size={28} strokeWidth={1} />
      </button>

      <button 
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 text-white/50 hover:text-white transition-colors duration-300 hidden md:block p-4 bg-black/10 hover:bg-black/30 rounded-full backdrop-blur-md"
          aria-label="Next slide"
      >
          <ChevronRight size={28} strokeWidth={1} />
      </button>

      {/* Slide Indicators (Refined spacing) */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex gap-4">
          {heroSlides.map((_, index) => (
          <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-[2px] transition-all duration-700 ${
                index === currentSlide ? 'w-12 bg-white' : 'w-6 bg-white/30 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
          />
          ))}
      </div>
    </section>
  );
};

export default Hero;