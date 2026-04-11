import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SectionProps {
  id: string;
}

const useScrollReveal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return { isVisible, domRef };
};

const testimonials = [
  {
    quote: "Abhishek's proactive approach saved us both time and money. He is incredibly down-to-earth and always willing to go the extra mile to make sure our vision comes to life exactly as we imagined it.",
    author: "Director",
    project: "Ramsetu Global Infra Projects Pvt. Ltd."
  },
  {
    quote: "I've known Abhishek for over a decade. He treats every project like his own home. He works relentlessly, yet always remains kind and approachable. Truly one of the best out there.",
    author: "Co-Founder",
    project: "Fateh Buildtech Pvt. Ltd."
  },
  {
    quote: "Working with Abhishek was an absolute joy. Beyond being a great landscape architect, he is just a genuinely good, grounded human being who deeply cared about our project.",
    author: "Owner",
    project: "Glass Haven"
  },
  {
    quote: "Abhishek completely transformed our resort into a sanctuary. His dedication and kind nature made the whole process smooth. He really cares about how people will feel in the space.",
    author: "Owner",
    project: "Nowal Naturecure Wellness Resort"
  },
  {
    quote: "Despite his success, Abhishek remains so humble and easy to talk to. He worked incredibly hard to optimize our project costs without ever compromising on the beauty of our home.",
    author: "Owner",
    project: "Cultural Elegance Residency"
  }
];

const TestimonialsSection: React.FC<SectionProps> = ({ id }) => {
  const { isVisible: isHeaderVisible, domRef: headerRef } = useScrollReveal();
  const { isVisible: isTrackVisible, domRef: trackRef } = useScrollReveal();
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = window.innerWidth < 768 ? window.innerWidth * 0.8 : 340;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    // Slightly lighter background color and matching tight padding
    <section id={id} className="py-10 md:py-12 px-6 md:px-12 bg-[#F9F9F9] w-full overflow-hidden border-t border-brand-grey/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Header with Arrows */}
        <div 
            ref={headerRef}
            className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 transition-all duration-1000 ease-out ${
                isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
        >
           <div className="max-w-2xl">
             <h2 className="text-3xl md:text-4xl font-serif text-[#1A1A1A] leading-tight">
              Client Experiences
            </h2>
           </div>

           <div className="flex items-center gap-3 shrink-0">
              <button 
                  onClick={() => scrollCarousel('left')} 
                  className="p-2.5 rounded-full border border-brand-grey/20 text-brand-grey/60 hover:bg-white hover:shadow-sm hover:text-brand-grey transition-all focus:outline-none"
              >
                  <ChevronLeft size={20} strokeWidth={1.5} />
              </button>
              <button 
                  onClick={() => scrollCarousel('right')} 
                  className="p-2.5 rounded-full border border-brand-grey/20 text-brand-grey/60 hover:bg-white hover:shadow-sm hover:text-brand-grey transition-all focus:outline-none"
              >
                  <ChevronRight size={20} strokeWidth={1.5} />
              </button>
          </div>
        </div>

        {/* Carousel Track */}
        <div 
            ref={trackRef}
            className={`flex flex-nowrap overflow-x-auto gap-6 lg:gap-8 pb-6 pt-2 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] -mx-6 px-6 md:-mx-12 md:px-12 cursor-ew-resize transition-all duration-1000 delay-100 ease-out ${
                isTrackVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <div ref={carouselRef} className="flex flex-nowrap gap-6 lg:gap-8 w-full overflow-x-auto scrollbar-hide scroll-smooth">
            {testimonials.map((t, index) => (
              <div 
                key={index} 
                className="shrink-0 snap-center w-[85vw] md:w-[320px] lg:w-[360px] flex flex-col text-left group bg-white border border-brand-grey/5 p-8 rounded-sm hover:shadow-sm transition-all duration-300"
              >
                <div className="mb-4 opacity-30 group-hover:opacity-60 transition-opacity duration-500">
                  <i className="fa-solid fa-quote-left text-brand-red text-xl"></i>
                </div>
                
                {/* Quote - Shrunk to body text size */}
                <p className="font-sans font-light text-brand-grey mb-8 leading-relaxed text-sm">
                  "{t.quote}"
                </p>
                
                <div className="flex flex-col mt-auto pt-2 w-full">
                  {/* The Animated Line */}
                  <div className="h-[1px] bg-brand-red/30 w-8 group-hover:w-16 group-hover:bg-brand-red transition-all duration-500 mb-4"></div>
                  
                  {/* Name - Increased prominence and serif font */}
                  <p className="text-lg font-serif text-[#1A1A1A] mb-1 tracking-wide">
                    {t.author}
                  </p>
                  <p className="text-[10px] md:text-xs font-sans text-brand-grey/70 uppercase tracking-widest font-medium">
                    {t.project}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;