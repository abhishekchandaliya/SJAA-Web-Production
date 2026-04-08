import React, { useState, useEffect, useRef } from 'react';
import { Shield, Settings, Infinity } from 'lucide-react';

interface SectionProps {
  id: string;
}

// --- Scroll Reveal Hook ---
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

const FirmSection: React.FC<SectionProps> = ({ id }) => {
  const { isVisible: isHeaderVisible, domRef: headerRef } = useScrollReveal();
  const { isVisible: isContentVisible, domRef: contentRef } = useScrollReveal();
  const { isVisible: isCardsVisible, domRef: cardsRef } = useScrollReveal();

  return (
    <section id={id} className="py-20 md:py-24 px-6 md:px-12 bg-white w-full">
      <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">

        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`grid grid-cols-1 md:grid-cols-12 gap-8 transition-all duration-1000 ease-out ${
            isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
            <div className="md:col-span-12 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                    <span className="h-[1px] w-8 bg-brand-red"></span>
                    <span className="text-brand-red font-sans text-sm tracking-wide">Firm Profile</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A] leading-tight">
                    Vision & Leadership
                </h2>
            </div>
        </div>

        {/* Part 1: The Master Architect Layout */}
        <div 
          ref={contentRef}
          className={`grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start transition-all duration-1000 delay-200 ease-out ${
            isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
            
            {/* Left Column: Visual */}
            <div className="md:col-span-5 relative aspect-[3/4] md:aspect-[4/5] lg:aspect-square bg-brand-grey/5 overflow-hidden rounded-sm group">
                 <img 
                    src="/images/firm/abhishek-profile.jpeg" 
                    alt="Ar. Abhishek Chandaliya" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-out" 
                 />
                 <div className="absolute inset-0 border border-black/5 pointer-events-none rounded-sm"></div>
            </div>

            {/* Right Column: Narrative */}
            <div className="md:col-span-6 md:col-start-7 flex flex-col justify-center h-full space-y-8 pt-4">
                <div className="space-y-2">
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-[#1A1A1A] tracking-tight">
                        Ar. Abhishek Chandaliya
                    </h3>
                    <p className="text-sm font-sans tracking-wide text-brand-red font-medium">
                        Founder & Design Principal
                    </p>
                </div>

                <div className="space-y-6">
                    <p className="text-base md:text-lg font-sans font-light text-brand-grey leading-relaxed text-justify md:text-left">
                        Established in 2008 to dissolve the boundaries between the built and the biotic, SJAA approaches every commission with a singular conviction. Under the leadership of Ar. Abhishek Chandaliya, the practice orchestrates environments where rigorous spatial planning meets the fluidity of the natural world, creating habitats that are not merely constructed, but cultivated.
                    </p>

                    <div className="border-l-2 border-brand-red/50 pl-6 py-1">
                        <p className="text-xl md:text-2xl font-serif italic text-[#1A1A1A] leading-relaxed">
                            "Landscape and Architecture are one continuous discipline."
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* Part 2: The Philosophy Pillars */}
        <div 
          ref={cardsRef}
          className={`grid grid-cols-1 md:grid-cols-12 gap-8 pt-4 transition-all duration-1000 delay-300 ease-out ${
            isCardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
            {/* Card 1 */}
            <div className="md:col-span-4 p-8 border border-brand-grey/10 rounded-sm bg-white hover:border-brand-red/30 hover:shadow-md transition-all duration-500 group flex flex-col h-full">
                <div className="mb-6 text-brand-red group-hover:scale-110 transition-transform duration-500 origin-left">
                    <Shield size={32} strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-serif text-[#1A1A1A] mb-3">Curated Living</h4>
                <p className="text-base font-sans text-brand-grey font-light leading-relaxed">
                    We sculpt spaces that elevate daily rituals. Prioritizing proportion and scale, we curate environments that foster mental well-being and timeless elegance.
                </p>
            </div>

            {/* Card 2 */}
            <div className="md:col-span-4 p-8 border border-brand-grey/10 rounded-sm bg-white hover:border-brand-red/30 hover:shadow-md transition-all duration-500 group flex flex-col h-full">
                <div className="mb-6 text-brand-red group-hover:scale-110 transition-transform duration-500 origin-left">
                    <Settings size={32} strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-serif text-[#1A1A1A] mb-3">Technical Precision</h4>
                <p className="text-base font-sans text-brand-grey font-light leading-relaxed">
                    Bridging the void between vision and reality. We orchestrate complex construction systems with absolute rigor, ensuring that design intent translates flawlessly.
                </p>
            </div>

            {/* Card 3 */}
            <div className="md:col-span-4 p-8 border border-brand-grey/10 rounded-sm bg-white hover:border-brand-red/30 hover:shadow-md transition-all duration-500 group flex flex-col h-full">
                <div className="mb-6 text-brand-red group-hover:scale-110 transition-transform duration-500 origin-left">
                    <Infinity size={32} strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-serif text-[#1A1A1A] mb-3">Biophilic Fusion</h4>
                <p className="text-base font-sans text-brand-grey font-light leading-relaxed">
                    A seamless synthesis of soil, climate, and architecture. We engineer ecosystems that function as living, breathing extensions of the human experience.
                </p>
            </div>
        </div>

      </div>
    </section>
  );
};

export default FirmSection;