import React, { useState, useEffect, useRef } from 'react';
import { Shield, Settings, Infinity } from 'lucide-react';

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

const FirmSection: React.FC<SectionProps> = ({ id }) => {
  const { isVisible: isHeaderVisible, domRef: headerRef } = useScrollReveal();
  const { isVisible: isContentVisible, domRef: contentRef } = useScrollReveal();
  const { isVisible: isCardsVisible, domRef: cardsRef } = useScrollReveal();

  return (
    // Reduced overall padding from py-20 to py-12 for a more compact view
    <section id={id} className="py-12 md:py-16 px-6 md:px-12 bg-white w-full">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 md:gap-10">

        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`grid grid-cols-1 gap-2 transition-all duration-1000 ease-out ${
            isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
            <div className="flex items-center gap-3">
                <span className="h-[1px] w-8 bg-brand-red"></span>
                <span className="text-brand-red font-sans text-xs tracking-wide uppercase font-medium">Firm Profile</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-[#1A1A1A] leading-tight">
                Vision & Leadership
            </h2>
        </div>

        {/* Part 1: The Master Architect Layout */}
        <div 
          ref={contentRef}
          className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center transition-all duration-1000 delay-100 ease-out ${
            isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
            {/* Left Column: Visual (Made narrower to give text more horizontal room) */}
            <div className="md:col-span-4 lg:col-span-3 relative aspect-[4/5] bg-brand-grey/5 overflow-hidden rounded-sm group">
                 <img 
                    src="/images/firm/abhishek-profile.jpeg" 
                    alt="Ar. Abhishek Chandaliya" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-out" 
                 />
            </div>

            {/* Right Column: Narrative */}
            <div className="md:col-span-8 lg:col-span-9 flex flex-col justify-center space-y-4">
                <div>
                    <h3 className="text-2xl md:text-3xl font-serif font-medium text-[#1A1A1A] tracking-tight mb-1">
                        Ar. Abhishek Chandaliya
                    </h3>
                    <p className="text-xs md:text-sm font-sans tracking-wide text-brand-red font-medium">
                        Founder & Design Principal
                    </p>
                </div>

                <div className="space-y-4">
                    {/* Rewritten Bio to include the grounded, problem-solving reality */}
                    <p className="text-sm md:text-base font-sans font-light text-brand-grey leading-relaxed text-justify md:text-left">
                        Established in 2008, SJAA approaches every project with a simple conviction: landscape and architecture must flow together seamlessly. Under the leadership of Ar. Abhishek Chandaliya, the firm thrives on exploring the unexplored in design detailing. He naturally gravitates towards practical and site-specific challenges that others might avoid—solving them through hands-on experience, deep technical skill, and rigorous execution.
                    </p>

                    <div className="border-l-2 border-brand-red/50 pl-4 py-1">
                        <p className="text-lg font-serif italic text-[#1A1A1A] leading-relaxed">
                            "Landscape and Architecture are one continuous discipline."
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* Part 2: The Philosophy Pillars (Rewritten to be simple & grounded) */}
        <div 
          ref={cardsRef}
          className={`grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 transition-all duration-1000 delay-200 ease-out ${
            isCardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
            <div className="p-5 border border-brand-grey/10 rounded-sm bg-white hover:border-brand-red/30 hover:shadow-sm transition-all duration-500 group flex flex-col">
                <div className="mb-3 text-brand-red group-hover:scale-110 transition-transform duration-500 origin-left">
                    <Shield size={22} strokeWidth={1.5} />
                </div>
                <h4 className="text-lg font-serif text-[#1A1A1A] mb-2">Purposeful Design</h4>
                <p className="text-sm font-sans text-brand-grey font-light leading-relaxed">
                    We design spaces that genuinely improve daily life. By focusing on the right proportions and careful detailing, we create comfortable, elegant environments that feel like home.
                </p>
            </div>

            <div className="p-5 border border-brand-grey/10 rounded-sm bg-white hover:border-brand-red/30 hover:shadow-sm transition-all duration-500 group flex flex-col">
                <div className="mb-3 text-brand-red group-hover:scale-110 transition-transform duration-500 origin-left">
                    <Settings size={22} strokeWidth={1.5} />
                </div>
                <h4 className="text-lg font-serif text-[#1A1A1A] mb-2">Flawless Execution</h4>
                <p className="text-sm font-sans text-brand-grey font-light leading-relaxed">
                    We bridge the gap between a great idea and reality. We take on complex on-site challenges with hands-on dedication, ensuring the final result matches the vision perfectly.
                </p>
            </div>

            <div className="p-5 border border-brand-grey/10 rounded-sm bg-white hover:border-brand-red/30 hover:shadow-sm transition-all duration-500 group flex flex-col">
                <div className="mb-3 text-brand-red group-hover:scale-110 transition-transform duration-500 origin-left">
                    <Infinity size={22} strokeWidth={1.5} />
                </div>
                <h4 className="text-lg font-serif text-[#1A1A1A] mb-2">Rooted in Nature</h4>
                <p className="text-sm font-sans text-brand-grey font-light leading-relaxed">
                    We deeply respect the local climate and surroundings. Our designs bring nature into the built environment, creating living spaces that breathe and grow over time.
                </p>
            </div>
        </div>

      </div>
    </section>
  );
};

export default FirmSection;