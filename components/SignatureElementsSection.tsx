import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface SectionProps {
  id: string;
}

// --- CONFIGURATION OBJECT WITH REWRITTEN DESCRIPTIONS ---
const signatureData = [
  { 
    title: "Vertical Ecosystems", 
    subtitle: "The Living Skin", 
    desc: "We treat every vertical surface as a chance for nature. Our breathing green walls soften structure and clean the air, part of our expertise in crafting healthy, natural environments.", 
    image: "/images/detailing/vertical (1).webp", // This can be portrait, landscape, etc.
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
    desc: "We believe a space is complete only when the details are personal. We curate and place unique artifacts that define stillness and bring character, reflecting our focus on thoughtful, personal spaces.", 
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
    desc: "Water is our tool for peace. We design quiet pools and reflective surfaces that merge calm with luxury, creating peaceful centers that ground the entire design.", 
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
    desc: "The right planting makes a design feel alive. We use native plants to create sustainable, biodiverse ecosystems that grow with the space, part of our careful attention to sustainable design.", 
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
    desc: "Privacy shouldn't be a solid wall. We design intricate screens that create calm seclusion while shaping light into beautiful, moving patterns, reflecting our core ability to blend form and function.", 
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
    desc: "We use structure to play with light. Our frames are built to let nature climb and cast beautiful, dancing shadows below, demonstrating our care for the visual experience of a space.", 
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
    desc: "Water is our tool for peace. We design quiet pools and reflective surfaces that merge calm with luxury, creating peaceful centers that ground the entire design.", 
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
    desc: "The feel of a surface matters. We choose raw, tactile materials that age with grace and bring a space to life, a result of our dedicated care for material selection.", 
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
    desc: "We create private escapes. Our pavilions are designed as peaceful shelters that connect you with the open view, reflecting our skill in blending inside and outside spaces.", 
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
    desc: "We use structure to play with light. Our frames are built to let nature climb and cast beautiful, dancing shadows below, demonstrating our care for the visual experience of a space.", 
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
        window.history.pushState({ modal: true }, ''); 
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

  useEffect(() => {
    if (selectedElement && !fullscreenImage) {
      window.history.pushState({ modal: true }, '');
    } else if (fullscreenImage) {
      window.history.pushState({ lightbox: true }, '');
    }
  }, [selectedElement, fullscreenImage]);


  return (
    // Compacted vertical padding to match the portfolio section (py-10 md:py-14)
    <section id={id} className="py-10 md:py-14 bg-[#111111] text-white w-full overflow-hidden relative">
      
      {/* Strict alignment: The content container has the same structure and padding as the global Portfolio container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8 md:mb-10">
        <div className="flex items-center gap-3 mb-2">
           <span className="h-[1px] w-8 bg-brand-red"></span>
           <span className="text-brand-red font-sans text-xs uppercase tracking-wide font-medium">Detailing</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-serif leading-tight">
          Design Articulation
        </h2>
        {/* Rewritten subheading that is simple, professional, and linear */}
        <p className="text-sm md:text-base font-sans text-white/70 mt-3 font-light max-w-3xl leading-relaxed">
           These represent our core areas of expertise. We believe that true design excellence lives in the details, and we care deeply about crafting every single element within the spaces we shape.
        </p>
      </div>

      {/* NEW: Flexibility Container - Bleeds on the right while staying perfectly aligned on the left */}
      <div className="w-full pl-6 md:pl-12 xl:pl-[calc((100vw-80rem)/2+3rem)]">
        <div className="flex overflow-x-auto gap-4 md:gap-6 pb-8 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {signatureData.map((el, index) => (
                <div 
                    key={index} 
                    onClick={() => setSelectedElement(el)}
                    // Reduced card size slightly to make the section feel more compact
                    className="flex-none w-[80vw] md:w-[280px] lg:w-[320px] relative aspect-[3/4] overflow-hidden rounded-sm group transition-all duration-500 ease-in-out bg-white/5 cursor-pointer snap-start"
                >
                    {/* NEW: Aspect-ratio driven flexible grid. The inner flex-col ensures straight edges while width adapts. */}
                    <div className="absolute inset-0 w-full h-full flex flex-col group">
                        
                        {/* Background Image - The aspect-[3/4] on the parent handles orientation flexibility */}
                        <img 
                            src={el.image} 
                            alt={el.title} 
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105 pointer-events-none"
                        />
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none"></div>

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col justify-end pointer-events-none z-10">
                            <div className="transform transition-all duration-[600ms] ease-out group-hover:-translate-y-3 opacity-90 group-hover:opacity-100">
                                <h4 className="text-xl md:text-2xl font-serif text-white mb-1.5 truncate">
                                    {el.title}
                                </h4>
                                <p className="text-xs font-sans text-brand-red tracking-wide font-medium">
                                    {el.subtitle}
                                </p>
                            </div>
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-8 animate-fade-in">
            <button 
                onClick={() => setSelectedElement(null)} 
                className="absolute top-6 right-6 z-50 p-2 text-white/50 hover:text-white bg-white/5 hover:bg-white/15 rounded-full transition-all"
                aria-label="Close Gallery"
            >
                <X size={32} strokeWidth={1.5} />
            </button>
            
            <div className="max-w-7xl w-full h-full flex flex-col overflow-hidden pt-12 md:pt-0">
                {/* Modal Header */}
                <div className="mb-6 shrink-0">
                    <span className="text-brand-red font-sans tracking-wide text-xs font-medium uppercase block mb-2">
                        {selectedElement.subtitle}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
                        {selectedElement.title}
                    </h2>
                    <p className="text-white/70 font-sans font-light max-w-2xl leading-relaxed text-sm md:text-base border-l-2 border-brand-red/50 pl-4">
                        {selectedElement.desc}
                    </p>
                </div>

                {/* Modal Gallery Grid */}
                <div className="flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 pb-8 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
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

            {/* Fullscreen Lightbox Overlay */}
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