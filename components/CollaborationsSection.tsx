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
    quote: "Abhishek understands landscapes in a way very few do. His attention to detail and hands-on execution make him a perfect partner for our projects.",
    name: "Ar. Rajkumar Kumawat",
    role: "Principal Architect",
    firm: "Rajkumar Architects"
  },
  {
    logo: "/images/partners/ruby amit.png",
    quote: "SJAA seamlessly connects architecture with nature. They are practically the most reliable and technically sound landscape team we work with.",
    name: "Ar. Amit Goswami",
    role: "Principal Architect",
    firm: "Ruby & Amit Architects"
  },
  {
    logo: "/images/partners/genesis.png",
    quote: "SJAA's practical approach to landscape design always elevates our projects. They stay committed from the first sketch to the final planting.",
    name: "Ar. Raghuveer Singh",
    role: "Principal Architect",
    firm: "Genesis Design Studio"
  },
  {
    logo: "/images/partners/insight.png",
    quote: "Abhishek's deep focus on detailing gives our architectural projects a living, breathing quality that our clients absolutely love.",
    name: "Ar. Hridyesh",
    role: "Principal Architect",
    firm: "Insight ~ An Architecture Studio"
  },
  {
    logo: "/images/partners/sheetal.png",
    quote: "Working with SJAA means getting a beautiful, modern landscape. Their teamwork and flawless execution make them our go-to practice.",
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
      const scrollAmount = window.innerWidth < 768 ? window.innerWidth * 0.8 : 350;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id={id} className="pt-10 md:pt-14 pb-2 md:pb-4 px-6 md:px-12 bg-white w-full border-t border-brand-grey/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div 
          ref={headerRef}
          className={`mb-5 md:mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4 transition-all duration-1000 ease-out ${
            isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
               <span className="h-[1px] w-8 bg-brand-red"></span>
               <span className="text-brand-red font-sans text-xs uppercase tracking-wide font-medium">Partnerships</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-[#1A1A1A] leading-tight">
              Integrated Design Alliances
            </h2>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex items-center gap-3 shrink-0 hidden md:flex">
              <button 
                  onClick={() => scrollCarousel('left')} 
                  className="p-2.5 rounded-full border border-brand-grey/20 text-brand-grey/50 hover:bg-brand-grey/5 hover:text-brand-grey hover:border-brand-grey/40 transition-all focus:outline-none"
                  aria-label="Scroll Left"
              >
                  <ChevronLeft size={20} strokeWidth={1.5} />
              </button>
              <button 
                  onClick={() => scrollCarousel('right')} 
                  className="p-2.5 rounded-full border border-brand-grey/20 text-brand-grey/50 hover:bg-brand-grey/5 hover:text-brand-grey hover:border-brand-grey/40 transition-all focus:outline-none"
                  aria-label="Scroll Right"
              >
                  <ChevronRight size={20} strokeWidth={1.5} />
              </button>
          </div>
        </div>
        
        {/* Partner Cards Horizontal Track */}
        <div 
          ref={trackRef}
          className={`transition-all duration-1000 delay-100 ease-out ${isTrackVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div 
            ref={carouselRef}
            className="flex flex-nowrap overflow-x-auto gap-4 md:gap-6 pb-4 pt-2 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
              {partners.map((partner, index) => (
                  // Fully synced card styling: White bg, light borders, clean drop shadows
                  <div key={index} className="shrink-0 snap-center flex flex-col justify-between p-5 md:p-6 bg-white border border-brand-grey/10 rounded-sm w-[85vw] md:w-[320px] lg:w-[380px] group shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_20px_-6px_rgba(0,0,0,0.1)] transition-all duration-300">
                      
                      {/* Logo Area */}
                      <div className="h-8 mb-4 flex items-center justify-start">
                          <img 
                            src={partner.logo} 
                            alt={`${partner.firm} Logo`} 
                            className="max-h-[28px] object-contain grayscale opacity-60 transition-opacity duration-500 group-hover:opacity-100"
                            referrerPolicy="no-referrer"
                          />
                      </div>

                      {/* Body Text */}
                      <p className="font-sans font-light italic text-brand-grey/80 mb-6 text-sm leading-relaxed">
                          "{partner.quote}"
                      </p>

                      {/* Bottom aligned block */}
                      <div className="mt-auto">
                          {/* Divider matched to testimonials */}
                          <div className="h-[1px] bg-brand-red/30 w-6 group-hover:w-12 group-hover:bg-brand-red transition-all duration-500 mb-4"></div>

                          {/* Sign-off */}
                          <p className="text-base md:text-lg font-serif font-medium text-[#1A1A1A] mb-0.5">
                              {partner.name}
                          </p>
                          {/* Sync: Replaced bold red text with subtle grey text */}
                          <p className="text-[11px] md:text-xs font-sans text-brand-grey/60 font-light tracking-wide">
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