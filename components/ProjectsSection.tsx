import React, { useState, useEffect, useRef } from 'react';

interface SectionProps {
  id: string;
  onProjectClick?: (project: any) => void;
}

// --- CONFIGURATION OBJECT ---
// Reordered so the "All" tab shows a curated mix of categories!
const projectData = [
  { 
    title: 'Elysian Heaven', 
    location: 'Jaipur', 
    category: 'Luxury Residences', 
    status: 'Completed',
    description: 'A masterclass in spatial fluidity, this residence blurs the boundaries between interior sanctuaries and curated exterior landscapes. Native planting and climate-responsive shading ensure a serene, timeless habitat.',
    image: "/images/projects/Elysian Heaven (2).webp",
    gallery: [
    "/images/projects/Elysian Heaven (1).webp",
    "/images/projects/Elysian Heaven (3).webp",
    "/images/projects/Elysian Heaven (4).webp",
    "/images/projects/Elysian Heaven (5).webp",
    "/images/projects/Elysian Heaven (6).webp",
    ]
  },
  { 
    title: 'Blossom Ridge', 
    location: 'Jaipur', 
    category: 'Private Estates', 
    status: 'Completed',
    description: 'A sprawling estate that embraces the natural topography, weaving built interventions seamlessly into the existing flora. The landscape strategy prioritizes biodiversity and ecological resilience.',
    image: "/images/projects/blossom-ridge (5).webp",
    gallery: [
    "/images/projects/blossom-ridge (1).webp",
    "/images/projects/blossom-ridge (3).webp",
    "/images/projects/blossom-ridge (12).webp",
    "/images/projects/blossom-ridge (14).webp",
    ]
  },
  { 
    title: 'Nowal Naturecare Resort', 
    location: 'Badhal', 
    category: 'Hospitality', 
    status: 'Completed',
    description: 'A wellness sanctuary designed to heal through nature, featuring therapeutic gardens and serene aquatic voids. The architecture defers to the landscape, creating a holistic environment for rejuvenation.',
    image: "/images/projects/nowal (10).webp",
    gallery: [
    "/images/projects/nowal (3).webp",
    "/images/projects/nowal (13).webp",
    "/images/projects/nowal (16).webp",
    ]
  },
  { 
    title: 'Vrindavan Township', 
    location: 'Jaipur', 
    category: 'Housing & Townships', 
    status: 'Completed',
    description: 'A master-planned community that redefines urban density through extensive green corridors and communal gathering spaces. The infrastructure is engineered for sustainable water management and community well-being.',
    image: "/images/projects/vrindavan township (4).webp",
    gallery: [
    "/images/projects/vrindavan township (2).webp",
    "/images/projects/vrindavan township (3).webp",
    "/images/projects/vrindavan township (1).webp",
    ]
  },
  { 
    title: 'Laxmi Poddar Seva Sadan', 
    location: 'Salasar', 
    category: 'Institutional & Commercial', 
    status: 'Completed',
    description: 'A civic landmark that balances monumental scale with inviting, human-centric courtyards. The landscape serves as a vital public amenity, offering shaded respite and fostering community interaction.',
    image: "/images/projects/laxmi poddar (10).webp",
    gallery: [
    "/images/projects/laxmi poddar (5).webp",
    "/images/projects/laxmi poddar (4).webp",
    "/images/projects/laxmi poddar (6).webp",
    ]
  },
  { 
    title: 'The Zenith Terraces', 
    location: 'Jaipur', 
    category: 'Terrace & Rooftops', 
    status: 'Completed',
    description: 'Elevated urban oases that transform stark rooftops into vibrant, living ecosystems. These curated terraces offer panoramic vistas while providing crucial thermal insulation for the structures below.',
    image: "/images/projects/Zenith terraces (2).webp",
    gallery: [
    "/images/projects/Zenith terraces (8).webp",
    "/images/projects/Zenith terraces (3).webp",
    "/images/projects/Zenith terraces (5).webp",
    ]
  },
  // --- The rest of the projects follow below ---
  { 
    title: 'Classic Oasis', 
    location: 'Jaipur', 
    category: 'Luxury Residences', 
    status: 'Completed',
    description: 'Rooted in classical proportions, this dwelling orchestrates a dialogue between monumental materiality and delicate softscapes.',
    image: "/images/projects/Classic Oasis (21).webp",
    gallery: ["/images/projects/Classic Oasis (1).webp", "/images/projects/Classic Oasis (3).webp"]
  },
  { 
    title: 'Opulent Nest', 
    location: 'Jaipur', 
    category: 'Luxury Residences', 
    status: 'Completed',
    description: 'An exploration of refined tactility and light, where expansive glazing invites the surrounding ecology into the living experience.',
    image: "/images/projects/Opulent Nest (5).webp",
    gallery: ["/images/projects/Opulent Nest (1).webp", "/images/projects/Opulent Nest (10).webp"]
  },
  { 
    title: 'Cultural Elegance Residency', 
    location: 'Bikaner', 
    category: 'Luxury Residences', 
    status: 'Completed',
    description: 'Drawing from regional heritage, this residence employs local sandstone and intricate privacy veils to temper the harsh desert sun.',
    image: "/images/projects/Cultural Elegance Residency (24).webp",
    gallery: ["/images/projects/Cultural Elegance Residency (1).webp"]
  },
  { 
    title: 'Classical Grandeur', 
    location: 'Jaipur', 
    category: 'Luxury Residences', 
    status: 'Completed',
    description: 'A stately composition of formal gardens and architectural symmetry, designed to age gracefully alongside its inhabitants.',
    image: "/images/projects/Classical Grandeur (5).webp",
    gallery: ["/images/projects/Classical Grandeur (7).webp"]
  },
  { 
    title: 'Grand Colonnade', 
    location: 'Jaipur', 
    category: 'Luxury Residences', 
    status: 'Completed',
    description: 'Defined by its rhythmic structural bays, this home frames curated vistas of the surrounding terrain.',
    image: "/images/projects/Grand Colonnade (10).webp",
    gallery: ["/images/projects/Grand Colonnade (1).webp"]
  },
  { 
    title: 'The Floating Foyer', 
    location: 'Jaipur', 
    category: 'Luxury Residences', 
    status: 'Completed',
    description: 'An architectural illusion where the entrance pavilion appears to hover above reflective pools.',
    image: "/images/projects/The Floating Foyer (1).webp",
    gallery: ["/images/projects/The Floating Foyer (2).webp"]
  },
  { 
    title: 'Regalia Oasis', 
    location: 'Jaipur', 
    category: 'Private Estates', 
    status: 'Completed',
    description: 'Conceived as a private retreat, this estate utilizes dense native planting to create a secluded, immersive environment.',
    image: "/images/projects/regalia-oasis (27).webp",
    gallery: ["/images/projects/regalia-oasis (1).webp"]
  },
  { 
    title: 'Glass Haven', 
    location: 'Jaipur', 
    category: 'Private Estates', 
    status: 'Completed',
    description: 'A transparent pavilion set within a lush, curated wilderness, dissolving the visual barriers between shelter and nature.',
    image: "/images/projects/glass-haven (9).webp",
    gallery: ["/images/projects/glass-haven (2).webp"]
  },
  { 
    title: 'Samurai Valley', 
    location: 'Jaipur', 
    category: 'Housing & Townships', 
    status: 'Completed',
    description: 'Integrating residential clusters with the natural contours of the valley, this development fosters a deep connection to the outdoors.',
    image: "/images/projects/samurai valley (2).webp",
    gallery: ["/images/projects/samurai valley (3).webp"]
  },
  { 
    title: 'Gunsagar Valley', 
    location: 'Jaipur', 
    category: 'Housing & Townships', 
    status: 'Ongoing',
    description: 'An ambitious ongoing project that prioritizes ecological restoration alongside residential development.',
    image: "/images/projects/gunsagar (2).webp",
    gallery: ["/images/projects/gunsagar (1).webp"]
  },
  { 
    title: 'Garden House Prime', 
    location: 'Reengus', 
    category: 'Housing & Townships', 
    status: 'Ongoing',
    description: 'A forward-thinking residential enclave where every dwelling is intimately connected to a central, thriving ecosystem.',
    image: "/images/projects/garden house.webp",
    gallery: ["/images/projects/garden house (1).webp"]
  },
  { 
    title: 'Vrindavan Greens', 
    location: 'Jaipur', 
    category: 'Housing & Townships', 
    status: 'Completed',
    description: 'A completed residential sector that successfully marries high-density living with lush, accessible landscapes.',
    image: "/images/projects/Vrindavan Greens (5).webp",
    gallery: ["/images/projects/Vrindavan Greens (1).webp"]
  },
  { 
    title: 'Sand Dunes Resort', 
    location: 'Pushkar', 
    category: 'Hospitality', 
    status: 'Ongoing',
    description: 'An immersive hospitality experience carved into the desert landscape, utilizing indigenous materials and climate-responsive shading.',
    image: "/images/projects/pushkar.webp",
    gallery: ["/images/projects/pushkar (1).webp"]
  }
];

type FilterCategory = 
  | 'All'
  | 'Luxury Residences'
  | 'Hospitality'
  | 'Private Estates'
  | 'Housing & Townships'
  | 'Institutional & Commercial'
  | 'Terrace & Rooftops';

const useScrollReveal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return { isVisible, domRef };
};

const ProjectCard = ({ project, onClick, index }: { project: any, onClick?: () => void, index: number }) => {
  const { isVisible, domRef } = useScrollReveal();
  const delay = (index % 3) * 100; // Tighter staggered animation

  return (
    <div 
      ref={domRef}
      className={`group cursor-pointer flex flex-col col-span-12 md:col-span-6 lg:col-span-4 transition-all duration-[800ms] ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
      onClick={onClick}
    >
      <div className="relative overflow-hidden mb-3 bg-brand-grey/5 w-full aspect-[4/3] rounded-sm">
        <img 
          src={project.image} 
          alt={project.title} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 text-[9px] font-sans tracking-wide text-brand-grey opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-1 group-hover:translate-y-0 pointer-events-none rounded-sm shadow-sm">
          {project.category}
        </div>
      </div>
      
      <div className="flex flex-col mt-1 px-1">
        <h4 className="font-serif text-[#1A1A1A] text-lg md:text-xl group-hover:text-brand-red transition-colors duration-300">
          {project.title}
        </h4>
        <p className="text-xs font-sans text-brand-grey/70 mt-1 font-light flex items-center gap-1.5">
          <span className="w-1 h-1 rounded-full bg-brand-red/50"></span>
          {project.location}
        </p>
      </div>
    </div>
  );
};

const ProjectsSection: React.FC<SectionProps> = ({ id, onProjectClick }) => {
  const [activeTab, setActiveTab] = useState<FilterCategory>('All');
  const [displayCount, setDisplayCount] = useState(6);
  
  const tabs: FilterCategory[] = [
    'All',
    'Luxury Residences',
    'Hospitality',
    'Private Estates',
    'Housing & Townships',
    'Institutional & Commercial',
    'Terrace & Rooftops'
  ];

  const handleTabChange = (tab: FilterCategory) => {
    setActiveTab(tab);
    setDisplayCount(6);
  };

  const handleShowMore = () => {
    setDisplayCount(prev => prev + 6);
  };

  const handleShowLess = () => {
    setDisplayCount(prev => {
      const newCount = Math.max(6, prev - 6);
      window.scrollBy({ top: -600, behavior: 'smooth' });
      return newCount;
    });
  };

  const filteredProjects = projectData.filter(project => {
    if (activeTab === 'All') return true;
    return project.category === activeTab;
  });

  const displayedProjects = filteredProjects.slice(0, displayCount);

  return (
    <section id={id} className="py-16 md:py-20 px-6 md:px-12 bg-white w-full">
      <div className="max-w-7xl mx-auto">
        
        {/* Header - Compact Spacing */}
        <div className="mb-10 md:mb-12">
          <div className="flex items-center gap-3 mb-3">
             <span className="h-[1px] w-8 bg-brand-red"></span>
             <span className="text-brand-red font-sans text-sm tracking-wide">Portfolio</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#1A1A1A] leading-tight max-w-3xl">
            Selected Works
          </h2>
        </div>

        {/* Filters - Tightened layout */}
        <div className="flex flex-wrap gap-x-5 gap-y-2 mb-10 w-full border-b border-brand-grey/10 pb-3">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`
                  relative text-xs md:text-sm font-sans py-1.5 px-1 transition-all duration-300
                  ${isActive ? 'text-[#1A1A1A] font-medium' : 'text-brand-grey/60 hover:text-[#1A1A1A] font-light'}
                `}
              >
                {tab}
                <span className={`absolute bottom-[-13px] left-0 h-[2px] bg-brand-red transition-all duration-300 ${
                  isActive ? 'w-full' : 'w-0'
                }`}></span>
              </button>
            );
          })}
        </div>

        {/* Uniform 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {displayedProjects.length > 0 ? (
            displayedProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} onClick={() => onProjectClick && onProjectClick(project)} />
            ))
          ) : (
            <div className="col-span-full py-16 text-center font-sans text-brand-grey font-light">
              No projects found in this category.
            </div>
          )}
        </div>
        
        {/* Pagination Controls */}
        <div className="flex justify-center items-center mt-12 gap-8 w-full">
          {displayCount > 6 && (
            <button 
                onClick={handleShowLess}
                className="font-sans text-xs uppercase tracking-widest text-brand-grey hover:text-brand-red transition-colors duration-300"
            >
                Show Less
            </button>
          )}
          
          {displayCount < filteredProjects.length && (
            <button 
                onClick={handleShowMore}
                className="font-sans text-xs uppercase tracking-widest text-brand-grey hover:text-brand-red transition-colors duration-300"
            >
                Load More Projects
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;