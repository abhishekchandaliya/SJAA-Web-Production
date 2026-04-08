import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

interface SectionProps {
  id: string;
  onProjectClick?: (project: any) => void;
}

// --- CONFIGURATION OBJECT ---

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
    title: 'Classic Oasis', 
    location: 'Jaipur', 
    category: 'Luxury Residences', 
    status: 'Completed',
    description: 'Rooted in classical proportions, this dwelling orchestrates a dialogue between monumental materiality and delicate softscapes. Water features and indigenous flora create a deeply restorative environment.',
    image: "/images/projects/Classic Oasis (21).webp",
    gallery: [
    "/images/projects/Classic Oasis (1).webp",
    "/images/projects/Classic Oasis (3).webp",
    "/images/projects/Classic Oasis (5).webp",
    "/images/projects/Classic Oasis (7).webp",
    "/images/projects/Classic Oasis (9).webp",
    "/images/projects/Classic Oasis (12).webp",
    "/images/projects/Classic Oasis (14).webp",
    "/images/projects/Classic Oasis (16).webp",
    "/images/projects/Classic Oasis (18).webp",
    "/images/projects/Classic Oasis (20).webp",
    "/images/projects/Classic Oasis (23).webp",
    "/images/projects/Classic Oasis (25).webp",
    "/images/projects/Classic Oasis (27).webp",
    "/images/projects/Classic Oasis (29).webp",
    ]
  },
  { 
    title: 'Opulent Nest', 
    location: 'Jaipur', 
    category: 'Luxury Residences', 
    status: 'Completed',
    description: 'An exploration of refined tactility and light, where expansive glazing invites the surrounding ecology into the living experience. The design champions passive cooling and seamless indoor-outdoor integration.',
    image: "/images/projects/Opulent Nest (5).webp",
    gallery: [
    "/images/projects/Opulent Nest (1).webp",
    "/images/projects/Opulent Nest (10).webp",
    "/images/projects/Opulent Nest (6).webp",
    "/images/projects/Opulent Nest (2).webp",
    "/images/projects/Opulent Nest (9).webp",
    "/images/projects/Opulent Nest (4).webp",
    "/images/projects/Opulent Nest (8).webp",
    "/images/projects/Opulent Nest (3).webp",
    "/images/projects/Opulent Nest (7).webp",
    ]
  },
  { 
    title: 'Cultural Elegance Residency', 
    location: 'Bikaner', 
    category: 'Luxury Residences', 
    status: 'Completed',
    description: 'Drawing from regional heritage, this residence employs local sandstone and intricate privacy veils to temper the harsh desert sun. The resulting microclimate is a sanctuary of cool, shaded tranquility.',
    image: "/images/projects/Cultural Elegance Residency (24).webp",
    gallery: [
    "/images/projects/Cultural Elegance Residency (1).webp",
    "/images/projects/Cultural Elegance Residency (2).webp",
    "/images/projects/Cultural Elegance Residency (3).webp",
    "/images/projects/Cultural Elegance Residency (4).webp",
    "/images/projects/Cultural Elegance Residency (5).webp",
    ]
  },
  { 
    title: 'Classical Grandeur', 
    location: 'Jaipur', 
    category: 'Luxury Residences', 
    status: 'Completed',
    description: 'A stately composition of formal gardens and architectural symmetry, designed to age gracefully alongside its inhabitants. The landscape acts as a living canvas, shifting with the seasonal rhythms.',
    image: "/images/projects/Classical Grandeur (5).webp",
    gallery: [
    "/images/projects/Classical Grandeur (7).webp",
    "/images/projects/Classical Grandeur (8).webp",
    "/images/projects/Classical Grandeur (10).webp",
    "/images/projects/Classical Grandeur (12).webp",
    "/images/projects/Classical Grandeur (14).webp",
    "/images/projects/Classical Grandeur (16).webp",
    "/images/projects/Classical Grandeur (18).webp",
    "/images/projects/Classical Grandeur (20).webp",
    "/images/projects/Classical Grandeur (21).webp",
    "/images/projects/Classical Grandeur (2).webp",
    "/images/projects/Classical Grandeur (1).webp",
    "/images/projects/Classical Grandeur (6).webp",
    "/images/projects/Classical Grandeur (13).webp",
    "/images/projects/Classical Grandeur (17).webp",
    ]
  },
  { 
    title: 'Grand Colonnade', 
    location: 'Jaipur', 
    category: 'Luxury Residences', 
    status: 'Completed',
    description: 'Defined by its rhythmic structural bays, this home frames curated vistas of the surrounding terrain. The integration of aquatic elements grounds the built form in a state of profound calm.',
    image: "/images/projects/Grand Colonnade (10).webp",
    gallery: [
    "/images/projects/Grand Colonnade (1).webp",
    "/images/projects/Grand Colonnade (2).webp",
    "/images/projects/Grand Colonnade (3).webp",
    "/images/projects/Grand Colonnade (4).webp",
    "/images/projects/Grand Colonnade (5).webp",
    "/images/projects/Grand Colonnade (6).webp",
    ]
  },
  { 
    title: 'The Floating Foyer', 
    location: 'Jaipur', 
    category: 'Luxury Residences', 
    status: 'Completed',
    description: 'An architectural illusion where the entrance pavilion appears to hover above reflective pools. The design leverages cross-ventilation and biophilic principles to curate a restorative human experience.',
    image: "/images/projects/The Floating Foyer (1).webp",
    gallery: [
    "/images/projects/The Floating Foyer (2).webp",
    "/images/projects/The Floating Foyer (3).webp",
    "/images/projects/The Floating Foyer (4).webp",
    "/images/projects/The Floating Foyer (5).webp",
    "/images/projects/The Floating Foyer (6).webp",
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
    "/images/projects/blossom-ridge (7).webp",
    "/images/projects/blossom-ridge (9).webp",
    "/images/projects/blossom-ridge (12).webp",
    "/images/projects/blossom-ridge (14).webp",
    "/images/projects/blossom-ridge (16).webp",
    "/images/projects/blossom-ridge (18).webp",
    "/images/projects/blossom-ridge (26).webp",
    "/images/projects/blossom-ridge (31).webp",
    "/images/projects/blossom-ridge (35).webp",
    "/images/projects/blossom-ridge (40).webp",
    "/images/projects/blossom-ridge (43).webp",
    "/images/projects/blossom-ridge (48).webp",
    ]
  },
  { 
    title: 'Regalia Oasis', 
    location: 'Jaipur', 
    category: 'Private Estates', 
    status: 'Completed',
    description: 'Conceived as a private retreat, this estate utilizes dense native planting to create a secluded, immersive environment. The material palette reflects the earthy tones of the regional landscape.',
    image: "/images/projects/regalia-oasis (27).webp",
    gallery: [
    "/images/projects/regalia-oasis (1).webp",
    "/images/projects/regalia-oasis (4).webp",
    "/images/projects/regalia-oasis (7).webp",
    "/images/projects/regalia-oasis (10).webp",
    "/images/projects/regalia-oasis (13).webp",
    "/images/projects/regalia-oasis (16).webp",
    "/images/projects/regalia-oasis (19).webp",
    "/images/projects/regalia-oasis (22).webp",
    "/images/projects/regalia-oasis (25).webp",
    "/images/projects/regalia-oasis (28).webp",
    "/images/projects/regalia-oasis (3).webp",
    "/images/projects/regalia-oasis (8).webp",
    "/images/projects/regalia-oasis (12).webp",
    "/images/projects/regalia-oasis (15).webp",
    "/images/projects/regalia-oasis (20).webp",
    ]
  },
  { 
    title: 'Glass Haven', 
    location: 'Jaipur', 
    category: 'Private Estates', 
    status: 'Completed',
    description: 'A transparent pavilion set within a lush, curated wilderness, dissolving the visual barriers between shelter and nature. The design is a testament to climate-responsive luxury and spatial purity.',
    image: "/images/projects/glass-haven (9).webp",
    gallery: [
    "/images/projects/glass-haven (2).webp",
    "/images/projects/glass-haven (5).webp",
    "/images/projects/glass-haven (7).webp",
    "/images/projects/glass-haven (11).webp",
    "/images/projects/glass-haven (13).webp",
    "/images/projects/glass-haven (15).webp",
    "/images/projects/glass-haven (17).webp",
    "/images/projects/glass-haven (20).webp",
    "/images/projects/glass-haven (22).webp",
    "/images/projects/glass-haven (24).webp",
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
    title: 'Samurai Valley', 
    location: 'Jaipur', 
    category: 'Housing & Townships', 
    status: 'Completed',
    description: 'Integrating residential clusters with the natural contours of the valley, this development fosters a deep connection to the outdoors. The landscape design acts as the unifying thread for the entire township.',
    image: "/images/projects/samurai valley (2).webp",
    gallery: [
    "/images/projects/samurai valley (3).webp",
    "/images/projects/samurai valley (4).webp",
    "/images/projects/samurai valley (5).webp",
    "/images/projects/samurai valley (1).webp",
    ]
  },
  { 
    title: 'Gunsagar Valley', 
    location: 'Jaipur', 
    category: 'Housing & Townships', 
    status: 'Ongoing',
    description: 'An ambitious ongoing project that prioritizes ecological restoration alongside residential development. The master plan envisions a self-sustaining habitat with expansive, climate-adaptive green spaces.',
    image: "/images/projects/gunsagar (2).webp",
    gallery: [
    "/images/projects/gunsagar (1).webp",
    "/images/projects/gunsagar (3).webp",
    ]
  },
  { 
    title: 'Garden House Prime', 
    location: 'Reengus', 
    category: 'Housing & Townships', 
    status: 'Ongoing',
    description: 'A forward-thinking residential enclave where every dwelling is intimately connected to a central, thriving ecosystem. The design champions native softscapes and passive environmental strategies.',
    image: "/images/projects/garden house.webp",
    gallery: [
    "/images/projects/garden house (1).webp",
    "/images/projects/garden house (2).webp",
    "/images/projects/garden house (3).webp",
    "/images/projects/garden house (4).webp",
    ]
  },
  { 
    title: 'Vrindavan Greens', 
    location: 'Jaipur', 
    category: 'Housing & Townships', 
    status: 'Completed',
    description: 'A completed residential sector that successfully marries high-density living with lush, accessible landscapes. The project sets a new benchmark for biophilic integration in urban housing.',
    image: "/images/projects/Vrindavan Greens (5).webp",
    gallery: [
    "/images/projects/Vrindavan Greens (1).webp",
    "/images/projects/Vrindavan Greens (3).webp",
    "/images/projects/Vrindavan Greens (2).webp",
    "/images/projects/Vrindavan Greens (4).webp",
    ]
  },
  { 
    title: 'Nowal Naturecure Resort', 
    location: 'Badhal', 
    category: 'Hospitality', 
    status: 'Completed',
    description: 'A wellness sanctuary designed to heal through nature, featuring therapeutic gardens and serene aquatic voids. The architecture defers to the landscape, creating a holistic environment for rejuvenation.',
    image: "/images/projects/nowal (10).webp",
    gallery: [
    "/images/projects/nowal (3).webp",
    "/images/projects/nowal (13).webp",
    "/images/projects/nowal (16).webp",
    "/images/projects/nowal (18).webp",
    "/images/projects/nowal (12).webp",
    ]
  },
  { 
    title: 'Sand Dunes Resort', 
    location: 'Pushkar', 
    category: 'Hospitality', 
    status: 'Ongoing',
    description: 'An immersive hospitality experience carved into the desert landscape, utilizing indigenous materials and climate-responsive shading. The design celebrates the raw beauty and tranquility of its arid context.',
    image: "/images/projects/pushkar.webp",
    gallery: [
    "/images/projects/pushkar (1).webp",
    "/images/projects/pushkar (2).webp",
    "/images/projects/pushkar (3).webp",
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
    "/images/projects/laxmi poddar (3).webp",
    "/images/projects/laxmi poddar (6).webp",
    "/images/projects/laxmi poddar (1).webp",
    "/images/projects/laxmi poddar (2).webp",
    "/images/projects/laxmi poddar (8).webp",
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
    "/images/projects/Zenith terraces (4).webp",
    "/images/projects/Zenith terraces (7).webp",
    "/images/projects/Zenith terraces (1).webp",
    "/images/projects/Zenith terraces (6).webp",
    ]
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

// --- NEW: Scroll Reveal Hook ---
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

const ProjectCard = ({ project, style, onClick, index }: { project: any, style: any, onClick?: () => void, index: number }) => {
  const { isVisible, domRef } = useScrollReveal();
  
  // Staggered delay based on position in the grid row
  const delay = (index % 3) * 150;

  return (
    <div 
      ref={domRef}
      className={`group cursor-pointer flex flex-col ${style.colSpan} transition-all duration-[800ms] ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
      onClick={onClick}
    >
      <div className={`relative overflow-hidden mb-4 bg-brand-grey/5 w-full rounded-sm ${style.aspectRatio}`}>
        <img 
          src={project.image} 
          alt={project.title} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
          loading="lazy"
        />
        
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        
        <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 text-[10px] font-sans tracking-wide text-brand-grey opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 pointer-events-none rounded-sm shadow-sm">
          {project.category}
        </div>
      </div>
      
      <div className="flex justify-between items-start mt-2 px-1">
        <div>
          <h4 className={`font-serif text-[#1A1A1A] group-hover:text-brand-red transition-colors duration-300 ${
            style.isLarge ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'
          }`}>
            {project.title}
          </h4>
          <p className="text-sm font-sans text-brand-grey/80 mt-1.5 font-light flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-brand-red/50"></span>
            {project.location}
          </p>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection: React.FC<SectionProps> = ({ id, onProjectClick }) => {
  const [activeTab, setActiveTab] = useState<FilterCategory>('All');
  const [displayCount, setDisplayCount] = useState(6); // Changed to 6 for a cleaner grid
  
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
      window.scrollBy({ top: -800, behavior: 'smooth' });
      return newCount;
    });
  };

  const filteredProjects = projectData.filter(project => {
    if (activeTab === 'All') return true;
    return project.category === activeTab;
  });

  const displayedProjects = filteredProjects.slice(0, displayCount);

  const getCardStyle = (index: number) => {
    const positionInBlock = index % 5;
    
    if (positionInBlock === 0) {
      return {
        colSpan: 'col-span-12 md:col-span-8',
        aspectRatio: 'aspect-[4/3] md:aspect-[16/9]',
        isLarge: true
      };
    } else {
      return {
        colSpan: 'col-span-12 md:col-span-4',
        aspectRatio: 'aspect-[4/3]',
        isLarge: false
      };
    }
  };

  return (
    <section id={id} className="py-20 md:py-24 px-6 md:px-12 bg-white w-full">
      <div className="max-w-7xl mx-auto">
        {/* Header - Softened typography and spacing */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-4">
             <span className="h-[1px] w-8 bg-brand-red"></span>
             <span className="text-brand-red font-sans text-sm tracking-wide">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1A1A1A] leading-tight max-w-3xl">
            Selected Works
          </h2>
          <p className="text-base md:text-lg font-sans text-brand-grey font-light max-w-2xl leading-relaxed mt-6">
            Curated environments where built architecture meets the natural world.
          </p>
        </div>

        {/* Filters - Simplified Typography */}
        <div className="flex flex-wrap gap-x-6 gap-y-3 mb-16 w-full border-b border-brand-grey/10 pb-4">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            const isAll = tab === 'All';
            
            return (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`
                  relative text-sm font-sans py-2 px-1 transition-all duration-300
                  ${isActive 
                    ? 'text-[#1A1A1A] font-medium' 
                    : 'text-brand-grey/60 hover:text-[#1A1A1A] font-light'
                  }
                `}
              >
                {tab}
                <span className={`absolute bottom-[-17px] left-0 h-[2px] bg-brand-red transition-all duration-300 ${
                  isActive ? 'w-full' : 'w-0'
                }`}></span>
              </button>
            );
          })}
        </div>

        {/* Mosaic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 auto-dense">
          {displayedProjects.length > 0 ? (
            displayedProjects.map((project, index) => {
              const style = getCardStyle(index);
              return <ProjectCard key={project.title} project={project} style={style} index={index} onClick={() => onProjectClick && onProjectClick(project)} />;
            })
          ) : (
            <div className="col-span-full py-20 text-center font-sans text-brand-grey font-light">
              No projects found in this category.
            </div>
          )}
        </div>
        
        {/* Pagination Controls - Simplified */}
        <div className="flex justify-center items-center mt-20 gap-8 w-full">
          {displayCount > 6 && (
            <button 
                onClick={handleShowLess}
                className="font-sans text-sm text-brand-grey hover:text-brand-red transition-colors duration-300"
            >
                Show Less
            </button>
          )}
          
          {displayCount < filteredProjects.length && (
            <button 
                onClick={handleShowMore}
                className="font-sans text-sm text-brand-grey hover:text-brand-red transition-colors duration-300"
            >
                Show More Projects
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;