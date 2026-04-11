import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface SectionProps {
  id: string;
}

// --- CONFIGURATION OBJECT ---
const signatureData = [
  { 
    title: "Vertical Ecosystems", 
    subtitle: "The Living Skin", 
    desc: "We integrate living green planes into our designs to soften hard surfaces and help clean the air. These elements are more than just decoration; they are a vital, breathing skin for your space.", 
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
    desc: "We create curated, specific forms that act as visual anchors. These are designed to punctuate a space and hold your gaze, offering moments of beautiful stillness.", 
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
    desc: "A still expanse of water can completely transform an environment. We design these elements to mirror the sky, merging natural luxury with deep, restorative tranquility.", 
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
    desc: "We work primarily with indigenous plant species. Our native softscapes are meticulously curated to ensure biodiversity and allow the space to connect with the seasonal rhythm.", 
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
    desc: "We design intricate screens to solve a simple problem: providing true seclusion without building solid walls. These veils actively sculpt sunlight into changing geometric patterns.", 
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
    desc: "We use structural lattices not just for support, but to frame the sky and cast dancing, complex shadows. These create a beautiful, dynamic interplay between geometry and light.", 
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
    desc: "We utilize fluid surfaces as a tool to ground built architecture. By mirroring the sky and structure, we create a lasting state of visual and emotional calm.", 
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
    desc: "We prioritize raw, tactile surfaces. We select materials that age gracefully, inviting you to touch and interact, ensuring a deeply grounded sensory experience.", 
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
    desc: "We create floating shelters as an ultimate escape. These 'sanctuaries' are meticulously crafted to dissolve the boundaries between human protection and the open horizon.", 
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
    desc: "We use overhead planes to consciously filter sunlight. Our specific canopy designs create ephemeral patterns on the ground below, transforming a simple shade structure into a complex dance of shadow.", 
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
  
  // FIX 1: Exact Mathematical Padding Calculation for Flawless Alignment
  const [padLeft, setPadLeft] = useState('1.5rem'); // Default mobile padding
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateAlignment = () => {
      if (window.innerWidth >= 1280) {
        // 80rem is 1280px (max-w-7xl). This finds the exact pixel gap from the screen edge.
        setPadLeft('calc((100vw - 80rem) / 2)');
      } else if (window.innerWidth >= 768) {
        setPadLeft('3rem'); // md:px-12
      } else {
        setPadLeft('1.5rem'); // px-6
      }
    };
    updateAlignment();
    window.addEventListener('resize', updateAlignment);
    return () => window.removeEventListener('resize', updateAlignment);
  }, []);

  // FIX 2: Smooth Scrolling Arrows
  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      // Scrolls by roughly one card width
      const scrollAmount = window.innerWidth < 768 ? window.innerWidth * 0.8 : 344;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Body scroll lock on modal open
  useEffect(() => {
    if (selectedElement) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedElement]);

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
    <section id={id} className="py-10 md:py-14 bg-[#111111] text-white w-full overflow-hidden relative">
      
      {/* Header Container - Flawlessly matching the previous section's layout */}
      <div className="px-6 md:px-12 w-full">
        <div className="max-w-7xl mx-auto mb-6 md:mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-2">
                <span className="h-[1px] w-8 bg-brand-red"></span>
                <span className="text-brand-red font-sans text-xs uppercase tracking-wide font-medium">Detailing</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif leading-tight">
                Design Articulation
                </h2>
                {/* Fully responsive single-line subtext */}
                <p className="text-sm md:text-base font-sans text-white/70 mt-3 font-light leading-relaxed">
                These represent our core areas of expertise. We believe that true design excellence lives in the details, and we care deeply about crafting every single element within the spaces we shape.
                </p>
            </div>
            
            {/* Elegant Navigation Arrows */}
            <div className="flex items-center gap-3 shrink-0">
                <button 
                    onClick={() => scrollCarousel('left')} 
                    className="p-3 rounded-full border border-white/20 text-white/50 hover:bg-white/10 hover:text-white hover:border-white/40 transition-all focus:outline-none"
                    aria-label="Scroll Left"
                >
                    <ChevronLeft size={24} strokeWidth={1.5} />
                </button>
                <button 
                    onClick={() => scrollCarousel('right')} 
                    className="p-3 rounded-full border border-white/20 text-white/50 hover:bg-white/10 hover:text-white hover:border-white/40 transition-all focus:outline-none"
                    aria-label="Scroll Right"
                >
                    <ChevronRight size={24} strokeWidth={1.5} />
                </button>
            </div>
        </div>
      </div>

      {/* Horizontal Carousel Container - Powered by the math calculation */}
      <div className="w-full" style={{ paddingLeft: padLeft }}>
        <div 
            ref={carouselRef}
            className="flex overflow-x-auto gap-4 md:gap-6 pb-8 snap-x snap-mandatory scrollbar-hide pr-12" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
            {signatureData.map((el, index) => (
                <div 
                    key={index} 
                    onClick={() => setSelectedElement(el)}
                    className="flex-none w-[80vw] md:w-[280px] lg:w-[320px] relative aspect-[3/4] overflow-hidden rounded-sm group transition-all duration-500 ease-in-out bg-white/5 cursor-pointer snap-start"
                >
                    <img 
                        src={el.image} 
                        alt={el.title} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105 pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col justify-end pointer-events-none z-10">
                        <div className="transform transition-all duration-[600ms] ease-out group-hover:-translate-y-3 opacity-90 group-hover:opacity-100">
                            <h4 className="text-xl md:text-2xl font-serif text-white mb-1.5">
                                {el.title}
                            </h4>
                            <p className="text-xs font-sans text-brand-red tracking-wide font-medium">
                                {el.subtitle}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
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
                    <p className="text-white/70 font-sans font-light max-w-3xl leading-relaxed text-sm md:text-base border-l-2 border-brand-red/50 pl-4">
                        {selectedElement.desc}
                    </p>
                </div>

                {/* The Masonry Grid - Ensures images never crop, stretch, or overlap */}
                <div className="flex-1 overflow-y-auto pb-8 scrollbar-hide">
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
                        
                        {/* Main Element Image */}
                        <div 
                            className="break-inside-avoid relative overflow-hidden rounded-sm group cursor-pointer bg-white/5"
                            onClick={() => setFullscreenImage(selectedElement.image)}
                        >
                            <img 
                                src={selectedElement.image} 
                                alt={selectedElement.title} 
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
                            />
                        </div>
                        
                        {/* Gallery Images */}
                        {selectedElement.gallery.map((img, i) => (
                            <div 
                                key={i} 
                                className="break-inside-avoid relative overflow-hidden rounded-sm group cursor-pointer bg-white/5"
                                onClick={() => setFullscreenImage(img)}
                            >
                                <img 
                                    src={img} 
                                    alt={`${selectedElement.title} detail ${i + 1}`} 
                                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
                                    loading="lazy" 
                                />
                            </div>
                        ))}
                    </div>
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