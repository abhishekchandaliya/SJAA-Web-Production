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

const partners = [
  {
    logo: "/images/partners/rajkumar architects.png",
    quote: "Abhishek's understanding of landscape is incredible. Working with SJAA is always seamless because they care as much about the final on-site execution as they do about the initial design. They are a fantastic partner for our projects.",
    name: "Ar. Rajkumar Kumawat",
    role: "Principal Architect",
    firm: "Rajkumar Architects"
  },
  {
    logo: "/images/partners/ruby amit.png",
    quote: "SJAA bridges the gap between complex architecture and the natural environment perfectly. They are easily one of the most technically grounded, reliable, and collaborative landscape practices we've ever worked with.",
    name: "Ar. Amit Goswami",
    role: "Principal Architect",
    firm: "Ruby & Amit Architects"
  },
  {
    logo: "/images/partners/genesis.png",
    quote: "Abhishek and his team bring a level of technical detail that always elevates our buildings. Their dedication doesn't stop at the drawing board; they are right there on-site ensuring everything is built perfectly.",
    name: "Ar. Raghuveer Singh",
    role: "Principal Architect",
    firm: "Genesis Design Studio"
  },
  {
    logo: "/images/partners/insight.png",
    quote: "SJAA's eye for detail brings a living, breathing dimension to our architectural work. They truly understand how to make a space feel grounded, natural, and effortlessly integrated.",
    name: "Ar. Hridyesh Singh",
    role: "Principal Architect",
    firm: "Insight ~ An Architecture Studio"
  },
  {
    logo: "/images/partners/sheetal.png",
    quote: "Collaborating with SJAA is always a great experience. They are highly responsive, deeply knowledgeable, and always ensure the landscape execution matches the design intent flawlessly.",
    name: "Ar. Sheetal Agarwal",
    role: "Principal Architect",
    firm: "Sheetal Agarwal & Associates"
  }
];

const CollaborationsSection: React.FC<SectionProps> = ({ id }) => {
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
    // Severely reduced padding to pull the sections tightly together
    <section id={id} className="py-10 md:py-12 px-6 md:px-12 bg-white w-full border-t border-brand-grey/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header with Arrows */}
        <div 
          ref={headerRef}
          className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 transition-all duration-1000 ease-out ${
            isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-serif text-[#1A1A1A] leading-tight mb-2">
              Integrated Design Alliances
            </h2>
            <p className="font-sans text-brand-grey font-light leading-relaxed text-sm md:text-base">
              Collaborating with top-tier architects and developers to deliver complex master plans, bringing ecological expertise to the table.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
              <button 
                  onClick={() => scrollCarousel('left')} 
                  className="p-2.5 rounded-full border border-brand-grey/20 text-brand-grey/60 hover:bg-brand-grey/5 hover:text-brand-grey transition-all focus:outline-none"
              >
                  <ChevronLeft size={20} strokeWidth={1.5} />
              </button>
              <button 
                  onClick={() => scrollCarousel('right')} 
                  className="p-2.5 rounded-full border border-brand-grey/20 text-brand-grey/60 hover:bg-brand-grey/5 hover:text-brand-grey transition-all focus:outline-none"
              >
                  <ChevronRight size={20} strokeWidth={1.5} />
              </button>
          </div>
        </div>
        
        {/* Partner Cards Horizontal Track */}
        <div 
          ref={trackRef}
          className={`flex flex-nowrap overflow-x-auto gap-6 lg:gap-8 pb-4 pt-2 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] -mx-6 px-6 md:-mx-12 md:px-12 cursor-ew-resize transition-all duration-1000 delay-100 ease-out ${
            isTrackVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
            {/* The invisible scrolling container */}
            <div ref={carouselRef} className="flex flex-nowrap gap-6 lg:gap-8 w-full overflow-x-auto scrollbar-hide scroll-smooth">
              {partners.map((partner, index) => (
                  <div key={index} className="shrink-0 snap-center flex flex-col items-center text-center w-[85vw] md:w-[320px] lg:w-[360px] group border border-brand-grey/5 rounded-sm p-6 bg-[#FAFAFA] hover:shadow-sm transition-all duration-300">
                      
                      {/* Logo Area */}
                      <div className="h-10 mb-5 flex items-center justify-center">
                          <img 
                            src={partner.logo} 
                            alt={`${partner.firm} Logo`} 
                            className="max-h-[30px] object-contain grayscale opacity-60 transition-opacity duration-500 group-hover:opacity-100"
                            referrerPolicy="no-referrer"
                          />
                      </div>

                      {/* Quote - Shrunk to body text size */}
                      <p className="font-sans font-light text-brand-grey mb-6 mt-auto leading-relaxed text-sm">
                          "{partner.quote}"
                      </p>

                      {/* Divider */}
                      <div className="w-8 h-[1px] bg-brand-red/30 group-hover:bg-brand-red group-hover:w-12 transition-all duration-500 mb-5"></div>

                      {/* Sign-off - Increased prominence and serif font */}
                      <div className="space-y-1">
                          <h5 className="text-lg font-serif text-[#1A1A1A] tracking-wide">
                              {partner.name}
                          </h5>
                          <p className="text-[10px] md:text-xs font-sans text-brand-red font-medium tracking-widest uppercase">
                              {partner.role}, {partner.firm}
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

export default CollaborationsSection;