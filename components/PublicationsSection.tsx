import React, { useState } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';

export interface Publication {
  id: string;
  title: string;
  category: string;
  date: string;
  description: string;
  image: string;
  content?: string;
}

export const publicationsData: Publication[] = [
  {
    id: '1',
    title: 'The Modern Courtyard: A Paradigm Shift',
    category: 'ARTICLES',
    date: 'October 2025',
    description: 'An in-depth exploration of how traditional courtyard spaces are being reimagined for contemporary urban living.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop',
    content: 'The courtyard has long been a staple of traditional architecture, providing a private oasis within the home. In recent years, we have seen a resurgence of this concept in modern urban design. This article explores how architects are adapting the courtyard to fit into dense cityscapes, offering residents a vital connection to nature and open air without sacrificing privacy. We examine several case studies where innovative use of space and materials has transformed small, enclosed areas into vibrant, light-filled sanctuaries.'
  },
  {
    id: '2',
    title: 'Excellence in Sustainable Design',
    category: 'AWARDS',
    date: 'August 2025',
    description: 'Recognized by the Global Architecture Council for our innovative approach to passive cooling systems.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2500&auto=format&fit=crop',
    content: 'We are honored to receive the Excellence in Sustainable Design award from the Global Architecture Council. This recognition highlights our ongoing commitment to environmentally responsible architecture. The award specifically commended our recent work on the Eco-Tower project, where we successfully implemented advanced passive cooling systems that significantly reduced the building\'s energy consumption. This achievement is a testament to our team\'s dedication to pushing the boundaries of sustainable design.'
  },
  {
    id: '3',
    title: 'National Museum Extension',
    category: 'COMPETITIONS',
    date: 'May 2025',
    description: 'First prize winning entry for the proposed extension of the National Arts Museum, focusing on seamless integration.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop',
    content: 'Our firm has been awarded first prize in the international competition to design the extension for the National Arts Museum. Our proposal focused on creating a seamless integration between the historic original structure and the new contemporary wing. By utilizing a transparent glass atrium as a connecting element, we aimed to respect the existing architecture while providing a modern, light-filled space for new exhibitions. Construction is scheduled to begin next year.'
  },
  {
    id: '4',
    title: 'SJAA Featured in Architectural Digest',
    category: 'PRESS',
    date: 'March 2025',
    description: 'Our recent coastal villa project was featured as the cover story in the spring edition of Architectural Digest.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop',
    content: 'We are thrilled to announce that our Coastal Villa project has been featured as the cover story in the latest edition of Architectural Digest. The extensive article delves into the design process, highlighting how we integrated the villa with its stunning natural surroundings. The piece also features an interview with our principal architect, discussing the firm\'s philosophy on blending luxury with environmental sensitivity. We invite you to read the full article in the magazine.'
  },
  {
    id: '5',
    title: 'Rethinking Urban Density',
    category: 'ARTICLES',
    date: 'January 2025',
    description: 'A comprehensive study on vertical living and the integration of green spaces in high-density environments.',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?q=80&w=2574&auto=format&fit=crop',
    content: 'As cities continue to grow, the challenge of urban density becomes increasingly pressing. This study explores innovative approaches to vertical living, emphasizing the crucial role of integrating green spaces into high-rise developments. We analyze various strategies, from sky gardens to vertical forests, demonstrating how these elements can improve air quality, enhance resident well-being, and create more sustainable urban environments. The findings suggest that density does not have to come at the expense of livability.'
  },
  {
    id: '6',
    title: 'Best Residential Project 2024',
    category: 'AWARDS',
    date: 'November 2024',
    description: 'Awarded the prestigious Golden Arch for the design of the Serenity Estate, blending luxury with nature.',
    image: 'https://images.unsplash.com/photo-1600596542815-e328701102b9?q=80&w=2669&auto=format&fit=crop',
    content: 'We are proud to announce that the Serenity Estate has been awarded the Best Residential Project of 2024 by the Golden Arch Awards. This project exemplifies our approach to luxury residential design, seamlessly blending elegant architecture with the surrounding natural landscape. The jury praised the estate\'s innovative use of sustainable materials and its harmonious integration with the site\'s topography. This award is a significant milestone for our firm.'
  },
  {
    id: '7',
    title: 'The Future of Workspaces',
    category: 'ARTICLES',
    date: 'September 2024',
    description: 'How post-pandemic office designs are prioritizing employee well-being and collaborative environments.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2569&auto=format&fit=crop',
    content: 'The pandemic has fundamentally changed how we view the workspace. This article examines the shift towards office designs that prioritize employee well-being, flexibility, and collaboration. We explore the rise of hybrid work models and how physical spaces are adapting to support both focused individual work and dynamic team interactions. Key trends include the integration of biophilic design, the creation of versatile breakout areas, and the emphasis on natural light and ventilation.'
  },
  {
    id: '8',
    title: 'Urban Integration Award',
    category: 'AWARDS',
    date: 'July 2024',
    description: 'Honored for our seamless integration of the Metro Hub into the existing historical urban fabric.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop',
    content: 'Our firm has been honored with the Urban Integration Award for our work on the Metro Hub project. The challenge was to insert a modern transportation facility into a dense, historical urban fabric without disrupting the area\'s character. Our solution involved careful contextual analysis and the use of materials that complement the surrounding architecture. The award recognizes our success in creating a functional, contemporary infrastructure project that respects and enhances its historical context.'
  }
];

const categories = ['ALL', 'AWARDS', 'COMPETITIONS', 'ARTICLES', 'PRESS'];

interface PublicationsSectionProps {
  id: string;
  onPublicationClick: (pub: Publication) => void;
}

const PublicationsSection: React.FC<PublicationsSectionProps> = ({ id, onPublicationClick }) => {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [visibleCount, setVisibleCount] = useState(4);
  const [isLoading, setIsLoading] = useState(false);

  const filteredPublications = activeCategory === 'ALL' 
    ? publicationsData 
    : publicationsData.filter(pub => pub.category === activeCategory);

  const displayedPublications = filteredPublications.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPublications.length;

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setVisibleCount(4); // Reset visible count when changing category
  };

  const handleLoadMore = () => {
    setIsLoading(true);
    // Simulate async CMS load
    setTimeout(() => {
      setVisibleCount(prev => prev + 4);
      setIsLoading(false);
    }, 800);
  };

  return (
    <section id={id} className="py-16 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 items-end">
          <div className="md:col-span-4">
            <h2 className="text-3xl md:text-5xl font-serif text-[#1A1A1A] mb-4">Publications</h2>
            <div className="w-12 h-[1px] bg-brand-red"></div>
          </div>
          
          {/* Filtering System */}
          <div className="md:col-span-8 flex flex-wrap gap-6 md:justify-end">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`font-sans text-xs tracking-[0.15em] uppercase transition-colors duration-300 pb-1 border-b ${
                  activeCategory === category 
                    ? 'text-[#1A1A1A] border-[#1A1A1A] font-medium' 
                    : 'text-brand-grey/70 border-transparent hover:text-brand-red'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Horizontal Scroll Track */}
        <div className="flex flex-nowrap overflow-x-auto gap-8 pb-12 pt-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] -mx-6 px-6 md:-mx-12 md:px-12">
          {displayedPublications.map((pub) => (
            <a 
              key={pub.id} 
              href={`#publication-${pub.id}`}
              onClick={(e) => {
                e.preventDefault();
                onPublicationClick(pub);
              }}
              className="block shrink-0 snap-start group flex flex-col min-w-[300px] w-[85vw] md:min-w-[350px] md:w-[28vw] text-left"
            >
              {/* High-resolution thumbnail image space */}
              <div className="w-full aspect-[4/3] overflow-hidden mb-6 bg-brand-grey/5">
                <img 
                  src={pub.image} 
                  alt={pub.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Date & Category */}
              <div className="flex items-center gap-4 mb-3">
                <span className="font-sans text-[10px] tracking-widest uppercase text-brand-red font-medium">
                  {pub.category}
                </span>
                <span className="w-1 h-1 rounded-full bg-brand-grey/30"></span>
                <span className="font-sans text-[10px] tracking-widest uppercase text-brand-grey/70">
                  {pub.date}
                </span>
              </div>
              
              {/* Bold serif headline */}
              <h3 className="text-xl md:text-2xl font-serif text-[#1A1A1A] mb-3 leading-tight group-hover:text-brand-red transition-colors duration-300">
                {pub.title}
              </h3>
              
              {/* Brief two-line sans-serif description */}
              <p className="font-sans text-sm text-brand-grey font-light leading-relaxed line-clamp-2">
                {pub.description}
              </p>
            </a>
          ))}

          {/* Load More Card */}
          {hasMore && (
            <button 
              onClick={handleLoadMore}
              disabled={isLoading}
              className="shrink-0 snap-start flex flex-col justify-center items-center min-w-[300px] w-[85vw] md:min-w-[350px] md:w-[28vw] aspect-[4/3] bg-[#1A1A1A] text-white hover:bg-[#2A2A2A] transition-colors duration-300 group cursor-pointer"
            >
              {isLoading ? (
                <Loader2 className="w-8 h-8 animate-spin text-brand-red" />
              ) : (
                <div className="flex flex-col items-center gap-4">
                  <span className="font-sans text-sm tracking-[0.2em] uppercase font-light group-hover:text-brand-red transition-colors duration-300">
                    Load More
                  </span>
                  <ArrowRight className="w-6 h-6 text-white group-hover:text-brand-red group-hover:translate-x-2 transition-all duration-300" />
                </div>
              )}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
