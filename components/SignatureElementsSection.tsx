import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface SectionProps {
  id: string;
}

// --- CONFIGURATION OBJECT ---
const signatureData = [
  { 
    title: "Vertical Ecosystems", 
    subtitle: "The Living Skin", 
    desc: "Breathing green planes that soften the built form and purify the air.", 
    image: "/images/detailing/vertical (1).webp",
    gallery: [
        "/images/detailing/vertical (2).webp",
        "/images/detailing/vertical (3).webp",
        "/images/detailing/vertical (4).webp",
        "/images/detailing/vertical (5).webp",
    ]
  },
  { 
    title: "Spatial Artifacts", 
    subtitle: "The Visual Anchor", 
    desc: "Curated forms that punctuate space, holding the gaze in moments of stillness.", 
    image: "/images/detailing/artifacts (1).webp",
    gallery: [
        "/images/detailing/artifacts (2).webp",
        "/images/detailing/artifacts (3).webp",
        "/images/detailing/artifacts (4).webp",
    ]
  },
  { 
    title: "Aquatic Voids", 
    subtitle: "The Still Reflection", 
    desc: "Expanses of water mirroring the sky, merging luxury with deep tranquility.", 
    image: "/images/detailing/voids (1).webp",
    gallery: [
        "/images/detailing/voids (2).webp",
        "/images/detailing/voids (3).webp",
        "/images/detailing/voids (4).webp",
    ]
  },
  { 
    title: "Native Softscape", 
    subtitle: "The Breath", 
    desc: "A curated palette of indigenous flora ensuring seasonal rhythm and biodiversity.", 
    image: "/images/detailing/softscape (1).webp",
    gallery: [
        "/images/detailing/softscape (2).webp",
        "/images/detailing/softscape (3).webp",
        "/images/detailing/softscape (4).webp",
    ]
  },
  { 
    title: "Privacy Veils", 
    subtitle: "The Light Filter", 
    desc: "Intricate screens offering seclusion while sculpting light into geometric poetry.", 
    image: "/images/detailing/privacy (1).webp",
    gallery: [
        "/images/detailing/privacy (2).webp",
        "/images/detailing/privacy (3).webp",
        "/images/detailing/privacy (4).webp",
    ]
  },
  { 
    title: "Shadow Frames", 
    subtitle: "The Geometric Interplay", 
    desc: "Structural lattices that invite nature to climb, casting dancing shadows below.", 
    image: "/images/detailing/shadow (1).webp",
    gallery: [
        "/images/detailing/shadow (2).webp",
        "/images/detailing/shadow (3).webp",
        "/images/detailing/shadow (4).webp",
    ]
  },
  { 
    title: "Aquatic Elements", 
    subtitle: "The Reflection", 
    desc: "Fluid surfaces mirroring the sky, grounding the built form in a state of calm.", 
    image: "/images/detailing/aquatic (1).webp",
    gallery: [
        "/images/detailing/aquatic (2).webp",
        "/images/detailing/aquatic (3).webp",
        "/images/detailing/aquatic (4).webp",
    ]
  },
  { 
    title: "Material Textures", 
    subtitle: "The Tactility", 
    desc: "Raw, tactile surfaces that age gracefully, inviting touch and grounding the sensory experience.", 
    image: "/images/detailing/textures (1).webp",
    gallery: [
        "/images/detailing/textures (2).webp",
        "/images/detailing/textures (3).webp",
        "/images/detailing/textures (4).webp",
    ]
  },
  { 
    title: "Pavilions", 
    subtitle: "The Sanctuary", 
    desc: "Floating shelters that frame the horizon, dissolving boundaries between protection and the open landscape.", 
    image: "/images/detailing/pavilions (1).webp",
    gallery: [
        "/images/detailing/pavilions (2).webp",
        "/images/detailing/pavilions (3).webp",
        "/images/detailing/pavilions (4)).webp",
    ]
  },
  { 
    title: "Canopies", 
    subtitle: "The Light Play", 
    desc: "Overhead planes filtering sunlight into ephemeral patterns, creating a dynamic dance of shadow.", 
    image: "/images/detailing/canopies (1).webp",
    gallery: [
        "/images/detailing/canopies (1).webp",
        "/images/detailing/canopies (1).webp",
        "/images/detailing/canopies (1).webp",
    ]
  }
];

const SignatureElementsSection: React.FC<SectionProps> = ({ id }) => {
  const [selectedElement, setSelectedElement] = useState<typeof signatureData[0] | null>(null);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  // Handle Escape Key & Mobile Back Button
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (fullscreenImage) setFullscreenImage(null);
        else if (selectedElement) setSelectedElement(null);
      }
    };

    const handlePopState = (e: PopStateEvent) => {
      if (fullscreenImage) {
        setFullscreenImage(null);
        window.history.pushState({ modal: true }, ''); // Re-trap for the modal
      } else if (selectedElement) {
        setSelectedElement(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('popstate', handlePopState);
    };
  }, [fullscreenImage, selectedElement]);

  // Trap back button when modal opens
  useEffect(() => {
    if (selectedElement && !fullscreenImage) {
      window.history.pushState({ modal: true }, '');
    } else if (fullscreenImage) {
      window.history.pushState({ lightbox: true }, '');
    }
  }, [selectedElement, fullscreenImage]);


  return (
    <section id={id} className="py-20 md:py-24 bg-[#111111] text-white w-full overflow-hidden relative">
      <div className="w-full px-6 md:px-12 mb-12 md:mb-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-12">
            <div className="flex items-center gap-3 mb-4">
               <span className="h-[1px] w-8 bg-brand-red"></span>
               <span className="text-brand-red font-sans text-sm tracking-wide">Detailing</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
              Design Articulation
            </h2>
            <p className="text-base md:text-lg font-sans text-white/60 mt-4 font-light max-w-xl leading-relaxed">
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
                    className="flex-none w-[85vw] md:w-[350px] lg:w-[400px] relative aspect-[3/4] overflow-hidden rounded-sm group transition-all duration-500 ease-in-out bg-white/5 cursor-pointer snap-start"
                >
                    {/* Background Image */}
                    <img 
                        src={el.image} 
                        alt={el.title} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105 pointer-events-none"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none"></div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end pointer-events-none z-10">
                        <div className="transform transition-all duration-[600ms] ease-out group-hover:-translate-y-4 opacity-90 group-hover:opacity-100">
                            <h4 className="text-2xl md:text-3xl font-serif text-white mb-2">
                                {el.title}
                            </h4>
                            <p className="text-sm font-sans text-brand-red tracking-wide font-medium">
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-12 animate-fade-in">
            <button 
                onClick={() => setSelectedElement(null)} 
                className="absolute top-6 right-6 z-50 p-2 text-white/50 hover:text-white bg-white/5 hover:bg-white/15 rounded-full transition-all"
                aria-label="Close Gallery"
            >
                <X size={32} strokeWidth={1.5} />
            </button>
            
            <div className="max-w-7xl w-full h-full flex flex-col overflow-hidden pt-8 md:pt-0">
                {/* Modal Header */}
                <div className="mb-10 shrink-0">
                    <span className="text-brand-red font-sans tracking-wide text-sm font-medium block mb-3">
                        {selectedElement.subtitle}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
                        {selectedElement.title}
                    </h2>
                    <p className="text-white/70 font-sans font-light max-w-2xl leading-relaxed text-base md:text-lg border-l-2 border-brand-red/50 pl-5">
                        {selectedElement.desc}
                    </p>
                </div>

                {/* Modal Gallery Grid */}
                <div className="flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-12 gap-6 pb-8 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    {/* Main Image */}
                    <div 
                        className="col-span-12 md:col-span-8 lg:col-span-6 aspect-[4/3] bg-white/5 overflow-hidden rounded-sm group cursor-pointer"
                        onClick={() => setFullscreenImage(selectedElement.image)}
                    >
                        <img 
                            src={selectedElement.image} 
                            alt={selectedElement.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                        />
                    </div>
                    {/* Additional Gallery Images */}
                    {selectedElement.gallery.map((img, i) => (
                        <div 
                            key={i} 
                            className="col-span-12 md:col-span-4 lg:col-span-3 aspect-[4/3] bg-white/5 overflow-hidden rounded-sm group cursor-pointer"
                            onClick={() => setFullscreenImage(img)}
                        >
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

            {/* NEW: Fullscreen Lightbox Overlay */}
            {fullscreenImage && (
              <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/98 backdrop-blur-xl p-4 animate-fade-in">
                <button 
                  onClick={() => setFullscreenImage(null)}
                  className="absolute top-6 right-6 z-[110] p-2 text-white/50 hover:text-white bg-white/5 hover:bg-white/15 rounded-full transition-all"
                >
                  <X size={32} strokeWidth={1.5} />
                </button>
                <img 
                  src={fullscreenImage} 
                  alt="Fullscreen view" 
                  className="max-w-full max-h-[90vh] object-contain select-none"
                />
              </div>
            )}
        </div>
      )}
    </section>
  );
};

export default SignatureElementsSection;