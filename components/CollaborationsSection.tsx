import React, { useState, useEffect, useRef } from 'react';

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
    quote: "Ar. Abhishek brings a visionary depth to landscape architecture that is simply unmatched in our region. SJAA’s dedication to flawless detailing and execution makes them an invaluable partner on our high-end projects.",
    name: "Ar. Rajkumar Kumawat",
    role: "Principal Architect",
    firm: "Rajkumar Architects"
  },
  {
    logo: "/images/partners/ruby amit.png",
    quote: "SJAA’s working style perfectly bridges the gap between complex architecture and seamless landscape integration. They are undoubtedly one of the finest, most technically sound landscape practices in the region.",
    name: "Ar. Amit Goswami",
    role: "Principal Architect",
    firm: "Ruby & Amit Architects"
  },
  {
    logo: "/images/partners/genesis.png",
    quote: "The technical rigor and visionary approach SJAA brings to landscape design consistently elevates our built environments. Their dedication from initial concept to final on-site execution is truly exceptional.",
    name: "Ar. Raghuveer Singh",
    role: "Principal Architect",
    firm: "Genesis Design Studio"
  },
  {
    logo: "/images/partners/insight.png",
    quote: "SJAA’s profound dedication to landscape detailing brings a unique, breathing dimension to our architectural projects.",
    name: "Ar. Hridyesh",
    role: "Principal Architect",
    firm: "Insight ~ An Architecture Studio"
  },
  {
    logo: "/images/partners/sheetal.png",
    quote: "Partnering with SJAA guarantees a masterclass in modern landscape architecture. Their highly collaborative working style and execution capabilities make them the leading practice in the region.",
    name: "Ar. Sheetal Agarwal",
    role: "Principal Architect",
    firm: "Sheetal Agarwal & Associates"
  }
];

const CollaborationsSection: React.FC<SectionProps> = ({ id }) => {
  const { isVisible: isHeaderVisible, domRef: headerRef } = useScrollReveal();
  const { isVisible: isTrackVisible, domRef: trackRef } = useScrollReveal();

  return (
    <section id={id} className="py-16 md:py-20 px-6 md:px-12 bg-white w-full border-t border-brand-grey/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header - Compact Spacing */}
        <div 
          ref={headerRef}
          className={`grid grid-cols-1 md:grid-cols-12 gap-4 mb-10 text-center transition-all duration-1000 ease-out ${
            isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="md:col-span-12 space-y-3">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#1A1A1A] leading-tight">
              Integrated Design Alliances
            </h2>
            <p className="max-w-xl mx-auto font-sans text-brand-grey font-light leading-relaxed text-sm md:text-base">
              Collaborating with top-tier architects and developers to deliver complex master plans, bringing ecological expertise to the table.
            </p>
          </div>
        </div>
        
        {/* Partner Cards Horizontal Track */}
        <div 
          ref={trackRef}
          className={`flex flex-nowrap overflow-x-auto gap-6 lg:gap-8 pb-8 pt-2 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] -mx-6 px-6 md:-mx-12 md:px-12 cursor-ew-resize transition-all duration-1000 delay-100 ease-out ${
            isTrackVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
            {partners.map((partner, index) => (
                <div key={index} className="shrink-0 snap-center flex flex-col items-center text-center w-[85vw] md:flex-[0_0_calc(50%-0.75rem)] lg:flex-[0_0_calc(33.333%-1rem)] group">
                    
                    {/* Logo/Icon Area */}
                    <div className="h-12 mb-5 flex items-center justify-center">
                        <img 
                          src={partner.logo} 
                          alt={`${partner.firm} Logo`} 
                          className="max-h-[35px] object-contain grayscale opacity-60 transition-opacity duration-500 group-hover:opacity-100"
                          referrerPolicy="no-referrer"
                        />
                    </div>

                    {/* Quote */}
                    <p className="font-serif font-light text-[#1A1A1A] mb-6 mt-auto leading-relaxed text-base md:text-lg">
                        "{partner.quote}"
                    </p>

                    {/* Divider */}
                    <div className="w-6 h-[1px] bg-brand-red/30 group-hover:bg-brand-red group-hover:w-12 transition-all duration-500 mb-4"></div>

                    {/* Sign-off */}
                    <div className="space-y-0.5">
                        <h5 className="text-sm font-sans font-medium text-[#1A1A1A] tracking-wide">
                            {partner.name}
                        </h5>
                        <p className="text-[11px] md:text-xs font-sans text-brand-grey/70 font-light tracking-wide">
                            {partner.role}, {partner.firm}
                        </p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default CollaborationsSection;