import React, { useState, useRef } from 'react';
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
  },
  { 
    title: 'Classic Oasis', 
    location: 'Jaipur', 
    category: 'Luxury Residences', 
    status: 'Completed',
    description: 'Rooted in classical proportions, this dwelling orchestrates a dialogue between monumental materiality and delicate softscapes. Water features and indigenous flora create a deeply restorative environment.',
    image: "/images/projects/Classic Oasis (21).webp",
  },
  { 
    title: 'Opulent Nest', 
    location: 'Jaipur', 
    category: 'Luxury Residences', 
    status: 'Completed',
    description: 'An exploration of refined tactility and light, where expansive glazing invites the surrounding ecology into the living experience. The design champions passive cooling and seamless indoor-outdoor integration.',
    image: "/images/projects/Opulent Nest (5).webp",
  },
  { 
    title: 'Cultural Elegance Residency', 
    location: 'Bikaner', 
    category: 'Luxury Residences', 
    status: 'Completed',
    description: 'Drawing from regional heritage, this residence employs local sandstone and intricate privacy veils to temper the harsh desert sun. The resulting microclimate is a sanctuary of cool, shaded tranquility.',
    image: "/images/projects/Cultural Elegance Residency (24).webp",
  },
  { 
    title: 'Classical Grandeur', 
    location: 'Jaipur', 
    category: 'Luxury Residences', 
    status: 'Completed',
    description: 'A stately composition of formal gardens and architectural symmetry, designed to age gracefully alongside its inhabitants. The landscape acts as a living canvas, shifting with the seasonal rhythms.',
    image: "/images/projects/Classical Grandeur (5).webp",
  },
  { 
    title: 'Grand Colonnade', 
    location: 'Jaipur', 
    category: 'Luxury Residences', 
    status: 'Completed',
    description: 'Defined by its rhythmic structural bays, this home frames curated vistas of the surrounding terrain. The integration of aquatic elements grounds the built form in a state of profound calm.',
    image: "/images/projects/Grand Colonnade (10).webp",
  },
  { 
    title: 'The Floating Foyer', 
    location: 'Jaipur', 
    category: 'Luxury Residences', 
    status: 'Completed',
    description: 'An architectural illusion where the entrance pavilion appears to hover above reflective pools. The design leverages cross-ventilation and biophilic principles to curate a restorative human experience.',
    image: "/images/projects/The Floating Foyer (1).webp",
  },
  { 
    title: 'Blossom Ridge', 
    location: 'Jaipur', 
    category: 'Private Estates', 
    status: 'Completed',
    description: 'A sprawling estate that embraces the natural topography, weaving built interventions seamlessly into the existing flora. The landscape strategy prioritizes biodiversity and ecological resilience.',
    image: "/images/projects/blossom-ridge (5).webp",
  },
  { 
    title: 'Regalia Oasis', 
    location: 'Jaipur', 
    category: 'Private Estates', 
    status: 'Completed',
    description: 'Conceived as a private retreat, this estate utilizes dense native planting to create a secluded, immersive environment. The material palette reflects the earthy tones of the regional landscape.',
    image: "/images/projects/regalia-oasis (27).webp",
  },
  { 
    title: 'Glass Haven', 
    location: 'Jaipur', 
    category: 'Private Estates', 
    status: 'Completed',
    description: 'A transparent pavilion set within a lush, curated wilderness, dissolving the visual barriers between shelter and nature. The design is a testament to climate-responsive luxury and spatial purity.',
    image: "/images/projects/glass-haven (9).webp",
  },
  { 
    title: 'Vrindavan Township', 
    location: 'Jaipur', 
    category: 'Housing & Townships', 
    status: 'Completed',
    description: 'A master-planned community that redefines urban density through extensive green corridors and communal gathering spaces. The infrastructure is engineered for sustainable water management and community well-being.',
    image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2670&auto=format&fit=crop',
  },
  { 
    title: 'Samurai Valley', 
    location: 'Jaipur', 
    category: 'Housing & Townships', 
    status: 'Completed',
    description: 'Integrating residential clusters with the natural contours of the valley, this development fosters a deep connection to the outdoors. The landscape design acts as the unifying thread for the entire township.',
    image: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=2670&auto=format&fit=crop',
  },
  { 
    title: 'Gunsagar Valley', 
    location: 'Jaipur', 
    category: 'Housing & Townships', 
    status: 'Ongoing',
    description: 'An ambitious ongoing project that prioritizes ecological restoration alongside residential development. The master plan envisions a self-sustaining habitat with expansive, climate-adaptive green spaces.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop',
  },
  { 
    title: 'Garden House Prime', 
    location: 'Reengus', 
    category: 'Housing & Townships', 
    status: 'Ongoing',
    description: 'A forward-thinking residential enclave where every dwelling is intimately connected to a central, thriving ecosystem. The design champions native softscapes and passive environmental strategies.',
    image: 'https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?q=80&w=2667&auto=format&fit=crop',
  },
  { 
    title: 'Vrindavan Greens', 
    location: 'Jaipur', 
    category: 'Housing & Townships', 
    status: 'Completed',
    description: 'A completed residential sector that successfully marries high-density living with lush, accessible landscapes. The project sets a new benchmark for biophilic integration in urban housing.',
    image: 'https://images.unsplash.com/photo-1430285561322-7808604715df?q=80&w=2670&auto=format&fit=crop',
  },
  { 
    title: 'Nowal Naturecure Resort', 
    location: 'Badhal', 
    category: 'Hospitality', 
    status: 'Completed',
    description: 'A wellness sanctuary designed to heal through nature, featuring therapeutic gardens and serene aquatic voids. The architecture defers to the landscape, creating a holistic environment for rejuvenation.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670&auto=format&fit=crop',
  },
  { 
    title: 'Sand Dunes Resort', 
    location: 'Pushkar', 
    category: 'Hospitality', 
    status: 'Ongoing',
    description: 'An immersive hospitality experience carved into the desert landscape, utilizing indigenous materials and climate-responsive shading. The design celebrates the raw beauty and tranquility of its arid context.',
    image: 'https://images.unsplash.com/photo-1544144433-d50aff500b91?q=80&w=2670&auto=format&fit=crop',
  },
  { 
    title: 'Laxmi Poddar Seva Sadan', 
    location: 'Salasar', 
    category: 'Institutional & Commercial', 
    status: 'Completed',
    description: 'A civic landmark that balances monumental scale with inviting, human-centric courtyards. The landscape serves as a vital public amenity, offering shaded respite and fostering community interaction.',
    image: 'https://images.unsplash.com/photo-1523634921620-2ba269a7af28?q=80&w=2665&auto=format&fit=crop',
  },
  { 
    title: 'The Zenith Terraces', 
    location: 'Jaipur', 
    category: 'Terrace & Rooftops', 
    status: 'Completed',
    description: 'Elevated urban oases that transform stark rooftops into vibrant, living ecosystems. These curated terraces offer panoramic vistas while providing crucial thermal insulation for the structures below.',
    image: 'https://images.unsplash.com/photo-1598337586548-26168537574b?q=80&w=800&auto=format&fit=crop',
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

const ProjectCard = ({ project, style, onClick }: { project: any, style: any, onClick?: () => void }) => {
  return (
    <div 
      className={`group cursor-pointer flex flex-col fade-in-up ${style.colSpan}`}
      onClick={onClick}
    >
      <div className={`relative overflow-hidden mb-4 bg-brand-grey/5 w-full ${style.aspectRatio}`}>
        {/* Static Image */}
        <img 
          src={project.image} 
          alt={project.title} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.03]"
          loading="lazy"
        />
        
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        
        {/* Overlay Badge for Category */}
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-sans uppercase tracking-wider text-brand-grey opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 pointer-events-none">
          {project.category}
        </div>
      </div>
      
      <div className="flex justify-between items-start mt-2 px-1">
        <div>
          <h4 className={`font-serif text-brand-grey group-hover:text-brand-red transition-colors duration-300 ${
            style.isLarge ? 'text-2xl' : 'text-xl'
          }`}>
            {project.title}
          </h4>
          <p className="text-sm font-sans text-brand-grey mt-1 font-light tracking-wide flex items-center gap-2">
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
  const [displayCount, setDisplayCount] = useState(5);
  
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
    setDisplayCount(5);
  };

  const handleShowMore = () => {
    setDisplayCount(prev => prev + 5);
  };

  const handleShowLess = () => {
    setDisplayCount(prev => {
      const newCount = Math.max(5, prev - 5);
      // Smooth scroll up slightly
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
      // Item 1: 66% width
      return {
        colSpan: 'col-span-12 md:col-span-8',
        aspectRatio: 'aspect-[4/3] md:aspect-[16/9]',
        isLarge: true
      };
    } else {
      // Items 2, 3, 4, 5: 33% width
      return {
        colSpan: 'col-span-12 md:col-span-4',
        aspectRatio: 'aspect-[4/3]',
        isLarge: false
      };
    }
  };

  return (
    <section id={id} className="py-16 md:py-32 px-6 md:px-12 bg-white w-full">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 space-y-4 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-12">
            <div className="flex items-center gap-4">
               <span className="h-[1px] w-12 bg-brand-red"></span>
               <span className="text-brand-red font-serif uppercase tracking-widest text-sm md:text-base font-medium">Portfolio</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-brand-grey leading-tight mt-4">
              Selected Works
            </h2>
            <p className="text-base font-sans text-brand-grey font-light max-w-2xl leading-relaxed mt-4">
              A curation of our specialized landscape interventions. Shaping the void between the built and the biotic.
            </p>
          </div>
        </div>

        {/* Filters - Multi-Line Centered Layout */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-16 w-full max-w-5xl mx-auto">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            const isAll = tab === 'All';
            
            return (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`
                  relative text-xs md:text-sm font-sans uppercase tracking-widest py-2 px-1 transition-all duration-300
                  ${isActive 
                    ? 'text-brand-red font-medium' 
                    : isAll 
                      ? 'text-brand-grey font-medium'
                      : 'text-brand-grey/50 hover:text-brand-grey font-light'
                  }
                `}
              >
                {tab}
                {/* Underline indicator */}
                <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[1px] bg-brand-red transition-all duration-300 ${
                  isActive ? 'w-full' : 'w-0'
                }`}></span>
              </button>
            );
          })}
        </div>

        {/* Mosaic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 auto-dense">
          {displayedProjects.length > 0 ? (
            displayedProjects.map((project, index) => {
              const style = getCardStyle(index);
              return <ProjectCard key={project.title} project={project} style={style} onClick={() => onProjectClick && onProjectClick(project)} />;
            })
          ) : (
            <div className="col-span-full py-12 text-center font-sans text-brand-grey font-light">
              No projects found in this category.
            </div>
          )}
        </div>
        
        {/* Pagination Controls */}
        <div className="flex justify-center items-center mt-20 gap-12 w-full">
          {displayCount > 5 && (
            <button 
                onClick={handleShowLess}
                className="font-sans text-xs uppercase tracking-widest text-brand-grey hover:text-brand-red transition-colors duration-300 border-b border-transparent hover:border-brand-red pb-1"
            >
                Show Less
            </button>
          )}
          
          {displayCount < filteredProjects.length && (
            <button 
                onClick={handleShowMore}
                className="font-sans text-xs uppercase tracking-widest text-brand-grey hover:text-brand-red transition-colors duration-300 border-b border-transparent hover:border-brand-red pb-1"
            >
                Show More
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;