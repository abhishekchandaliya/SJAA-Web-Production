import React, { useState } from 'react';
import { X } from 'lucide-react';

interface SectionProps {
  id: string;
}

// --- CONFIGURATION OBJECT ---
// Add new design elements here. Ensure images are placed in the 'assets' folder.
const signatureData = [
  { 
    title: "Vertical Ecosystems", 
    subtitle: "The Living Skin", 
    desc: "Breathing green planes that soften the built form and purify the air.", 
    image: "./assets/vertical-ecosystems.jpg",
    gallery: [
        "./assets/vertical-ecosystems-1.jpg",
        "./assets/vertical-ecosystems-2.jpg",
        "./assets/vertical-ecosystems-3.jpg"
    ]
  },
  { 
    title: "Spatial Artifacts", 
    subtitle: "The Visual Anchor", 
    desc: "Curated forms that punctuate space, holding the gaze in moments of stillness.", 
    image: "./assets/spatial-artifacts.jpg",
    gallery: [
        "./assets/spatial-artifacts-1.jpg",
        "./assets/spatial-artifacts-2.jpg",
        "./assets/spatial-artifacts-3.jpg"
    ]
  },
  { 
    title: "Aquatic Voids", 
    subtitle: "The Still Reflection", 
    desc: "Expanses of water mirroring the sky, merging luxury with deep tranquility.", 
    image: "./assets/aquatic-voids.jpg",
    gallery: [
        "./assets/aquatic-voids-1.jpg",
        "./assets/aquatic-voids-2.jpg",
        "./assets/aquatic-voids-3.jpg"
    ]
  },
  { 
    title: "Native Softscape", 
    subtitle: "The Breath", 
    desc: "A curated palette of indigenous flora ensuring seasonal rhythm and biodiversity.", 
    image: "./assets/native-softscape.jpg",
    gallery: [
        "./assets/native-softscape-1.jpg",
        "./assets/native-softscape-2.jpg",
        "./assets/native-softscape-3.jpg"
    ]
  },
  { 
    title: "Privacy Veils", 
    subtitle: "The Light Filter", 
    desc: "Intricate screens offering seclusion while sculpting light into geometric poetry.", 
    image: "./assets/privacy-veils.jpg",
    gallery: [
        "./assets/privacy-veils-1.jpg",
        "./assets/privacy-veils-2.jpg",
        "./assets/privacy-veils-3.jpg"
    ]
  },
  { 
    title: "Shadow Frames", 
    subtitle: "The Geometric Interplay", 
    desc: "Structural lattices that invite nature to climb, casting dancing shadows below.", 
    image: "./assets/shadow-frames.jpg",
    gallery: [
        "./assets/shadow-frames-1.jpg",
        "./assets/shadow-frames-2.jpg",
        "./assets/shadow-frames-3.jpg"
    ]
  },
  { 
    title: "Aquatic Elements", 
    subtitle: "The Reflection", 
    desc: "Fluid surfaces mirroring the sky, grounding the built form in a state of calm.", 
    image: "./assets/aquatic-elements.jpg",
    gallery: [
        "./assets/aquatic-elements-1.jpg",
        "./assets/aquatic-elements-2.jpg",
        "./assets/aquatic-elements-3.jpg"
    ]
  },
  { 
    title: "Material Textures", 
    subtitle: "The Tactility", 
    desc: "Raw, tactile surfaces that age gracefully, inviting touch and grounding the sensory experience.", 
    image: "./assets/material-textures.jpg",
    gallery: [
        "./assets/material-textures-1.jpg",
        "./assets/material-textures-2.jpg",
        "./assets/material-textures-3.jpg"
    ]
  },
  { 
    title: "Pavilions", 
    subtitle: "The Sanctuary", 
    desc: "Floating shelters that frame the horizon, dissolving boundaries between protection and the open landscape.", 
    image: "./assets/pavilions.jpg",
    gallery: [
        "./assets/pavilions-1.jpg",
        "./assets/pavilions-2.jpg",
        "./assets/pavilions-3.jpg"
    ]
  },
  { 
    title: "Canopies", 
    subtitle: "The Light Play", 
    desc: "Overhead planes filtering sunlight into ephemeral patterns, creating a dynamic dance of shadow.", 
    image: "./assets/canopies.jpg",
    gallery: [
        "./assets/canopies-1.jpg",
        "./assets/canopies-2.jpg",
        "./assets/canopies-3.jpg"
    ]
  }
];

const SignatureElementsSection: React.FC<SectionProps> = ({ id }) => {
  const [selectedElement, setSelectedElement] = useState<typeof signatureData[0] | null>(null);

  return (
    <section id={id} className="py-16 md:py-32 bg-neutral-900 text-white w-full overflow-hidden relative">
      <div className="w-full px-6 md:px-12 mb-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-12">
            <div className="flex items-center gap-4 mb-4">
               <span className="h-[1px] w-12 bg-brand-red"></span>
               <span className="text-brand-red font-serif uppercase tracking-widest text-sm md:text-base font-medium">Detailing</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif leading-tight">
              Design Articulation
            </h2>
            <p className="text-base font-sans text-white/70 mt-4 font-light max-w-xl leading-relaxed">
               The nuanced details and sensory layers that compose our spatial narrative.
            </p>
          </div>
        </div>
      </div>

      {/* Horizontal Carousel Container */}
      <div className="w-full pl-6 md:pl-12">
        <div className="flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {signatureData.map((el, index) => (
                <div 
                    key={index} 
                    onClick={() => setSelectedElement(el)}
                    className="flex-none w-[85vw] md:w-[400px] lg:w-[450px] relative aspect-[3/4] overflow-hidden group transition-all duration-500 ease-in-out bg-brand-grey/20 cursor-pointer snap-start"
                >
                    {/* Background Image */}
                    <img 
                        src={el.image} 
                        alt={el.title} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-[1.03] pointer-events-none"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end pointer-events-none z-10">
                        <div className="transform transition-all duration-500 group-hover:-translate-y-2 opacity-90 group-hover:opacity-100">
                            <h4 className="text-2xl md:text-3xl font-serif text-[#F5F5F5] mb-2">
                                {el.title}
                            </h4>
                            <p className="text-sm font-sans text-brand-red uppercase tracking-widest font-medium">
                                {el.subtitle}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
            {/* Spacer for right padding */}
            <div className="flex-none w-6 md:w-12"></div>
        </div>
      </div>

      {/* Gallery Modal */}
      {selectedElement && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-12 animate-fade-in">
            <button 
                onClick={() => setSelectedElement(null)} 
                className="absolute top-6 right-6 z-50 p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all"
                aria-label="Close Gallery"
            >
                <X size={32} strokeWidth={1.5} />
            </button>
            
            <div className="max-w-7xl w-full h-full flex flex-col overflow-hidden">
                {/* Modal Header */}
                <div className="mb-8 shrink-0">
                    <span className="text-brand-red font-sans uppercase tracking-widest text-sm font-bold block mb-2">{selectedElement.subtitle}</span>
                    <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">{selectedElement.title}</h2>
                    <p className="text-white/70 font-sans font-light max-w-2xl leading-relaxed text-base md:text-lg border-l-2 border-brand-red/50 pl-4">
                        {selectedElement.desc}
                    </p>
                </div>

                {/* Modal Gallery Grid */}
                <div className="flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-12 gap-6 pb-8 scrollbar-hide">
                    {/* Main Image */}
                    <div className="col-span-12 md:col-span-4 aspect-[4/3] bg-brand-grey/20 overflow-hidden rounded-sm group">
                        <img 
                            src={selectedElement.image} 
                            alt={selectedElement.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                        />
                    </div>
                    {/* Additional Gallery Images */}
                    {selectedElement.gallery.map((img, i) => (
                        <div key={i} className="col-span-12 md:col-span-4 aspect-[4/3] bg-brand-grey/20 overflow-hidden rounded-sm group">
                            <img 
                                src={img} 
                                alt={`${selectedElement.title} detail ${i + 1}`} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                                loading="lazy" 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
      )}
    </section>
  );
};

export default SignatureElementsSection;