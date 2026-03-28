import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroProps {
  id: string;
}

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?q=80&w=2574&auto=format&fit=crop",
    alt: "Modern Landscape Architecture"
  },
  {
    image: "https://images.unsplash.com/photo-1600596542815-e328701102b9?q=80&w=2669&auto=format&fit=crop",
    alt: "Luxury Villa Garden"
  },
  {
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop",
    alt: "Minimalist Courtyard"
  },
  {
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop",
    alt: "Resort Landscape"
  },
  {
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2500&auto=format&fit=crop",
    alt: "Seamless Integration"
  },
  {
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2670&auto=format&fit=crop",
    alt: "Estate Grounds"
  }
];

const Hero: React.FC<HeroProps> = ({ id }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-change slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  return (
    <section id={id} className="relative w-screen h-[100dvh] md:h-screen overflow-hidden bg-black">
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
            alt={slide.alt} 
            className="w-full h-full object-cover"
          />
          {/* Subtle dark gradient overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
        </div>
      ))}

      {/* Navigation Arrows (Desktop Only) */}
      <button 
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 text-white/70 hover:text-white transition-colors duration-300 hidden md:block p-3 bg-black/20 hover:bg-black/40 rounded-full backdrop-blur-sm"
          aria-label="Previous slide"
      >
          <ChevronLeft size={32} strokeWidth={1} />
      </button>

      <button 
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 text-white/70 hover:text-white transition-colors duration-300 hidden md:block p-3 bg-black/20 hover:bg-black/40 rounded-full backdrop-blur-sm"
          aria-label="Next slide"
      >
          <ChevronRight size={32} strokeWidth={1} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
          {heroSlides.map((_, index) => (
          <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1 rounded-full transition-all duration-700 ${
              index === currentSlide ? 'w-10 bg-white' : 'w-4 bg-white/40 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
          />
          ))}
      </div>
    </section>
  );
};

export default Hero;