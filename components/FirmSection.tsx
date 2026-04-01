import React from 'react';
import { Shield, Settings, Infinity } from 'lucide-react';

interface SectionProps {
  id: string;
}

const FirmSection: React.FC<SectionProps> = ({ id }) => {
  return (
    <section id={id} className="py-16 md:py-32 px-6 md:px-12 bg-white w-full">
      <div className="max-w-7xl mx-auto flex flex-col gap-24 md:gap-32">

        {/* Section Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-12 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                    <span className="h-[1px] w-12 bg-brand-red"></span>
                    <span className="text-brand-red font-serif uppercase tracking-widest text-sm md:text-base font-medium">Firm Profile</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-serif text-brand-grey leading-tight">
                    Vision & Leadership
                </h2>
            </div>
        </div>

        {/* Part 1: The Master Architect Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
            
            {/* Left Column: Visual */}
            <div className="md:col-span-5 relative aspect-[3/4] md:aspect-[4/5] lg:aspect-square bg-brand-grey/5 overflow-hidden shadow-sm group">
                 <img 
                    src="/images/firm/abhishek-profile.jpeg" 
                    alt="Ar. Abhishek Chandaliya" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-out" 
                 />
                 <div className="absolute inset-0 border border-black/5 pointer-events-none"></div>
            </div>

            {/* Right Column: Narrative */}
            <div className="md:col-span-6 md:col-start-7 flex flex-col justify-center h-full space-y-10 pt-4">
                <div className="space-y-3">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-brand-grey tracking-tight whitespace-nowrap">
                        Ar. Abhishek Chandaliya
                    </h3>
                    <p className="text-xs md:text-sm font-sans uppercase tracking-[0.2em] text-brand-red font-semibold">
                        Founder & Design Principal
                    </p>
                </div>

                <div className="space-y-8">
                    <p className="text-base md:text-lg font-sans font-light text-brand-grey leading-relaxed text-justify md:text-left">
                        Established in 2008 to dissolve the boundaries between the built and the biotic, SJAA approaches every commission with a singular conviction. Under the leadership of Ar. Abhishek Chandaliya, the practice orchestrates environments where rigorous spatial planning meets the fluidity of the natural world, creating habitats that are not merely constructed, but cultivated.
                    </p>

                    <div className="border-l-4 border-brand-red/30 pl-8 py-2">
                        <p className="text-xl md:text-2xl font-serif italic text-brand-grey/70 leading-relaxed">
                            "Landscape and Architecture are one continuous discipline."
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* Part 2: The Philosophy Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4">
            {/* Card 1 */}
            <div className="md:col-span-4 p-8 border border-brand-grey/10 bg-white hover:border-brand-red/30 hover:shadow-sm transition-all duration-500 group flex flex-col h-full">
                <div className="mb-8 text-brand-red group-hover:scale-110 transition-transform duration-500 origin-left">
                    <Shield size={40} strokeWidth={1.2} />
                </div>
                <h4 className="text-lg font-serif text-brand-red mb-4 uppercase tracking-wide">Curated Living</h4>
                <p className="text-base font-sans text-brand-grey font-light leading-relaxed">
                    We sculpt spaces that elevate daily rituals. Prioritizing proportion and scale, we curate environments that foster mental well-being and timeless elegance.
                </p>
            </div>

            {/* Card 2 */}
            <div className="md:col-span-4 p-8 border border-brand-grey/10 bg-white hover:border-brand-red/30 hover:shadow-sm transition-all duration-500 group flex flex-col h-full">
                <div className="mb-8 text-brand-red group-hover:scale-110 transition-transform duration-500 origin-left">
                    <Settings size={40} strokeWidth={1.2} />
                </div>
                <h4 className="text-lg font-serif text-brand-red mb-4 uppercase tracking-wide">Technical Precision</h4>
                <p className="text-base font-sans text-brand-grey font-light leading-relaxed">
                    Bridging the void between vision and reality. We orchestrate complex construction systems with absolute rigor, ensuring that design intent translates flawlessly.
                </p>
            </div>

            {/* Card 3 */}
            <div className="md:col-span-4 p-8 border border-brand-grey/10 bg-white hover:border-brand-red/30 hover:shadow-sm transition-all duration-500 group flex flex-col h-full">
                <div className="mb-8 text-brand-red group-hover:scale-110 transition-transform duration-500 origin-left">
                    <Infinity size={40} strokeWidth={1.2} />
                </div>
                <h4 className="text-lg font-serif text-brand-red mb-4 uppercase tracking-wide">Biophilic Fusion</h4>
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