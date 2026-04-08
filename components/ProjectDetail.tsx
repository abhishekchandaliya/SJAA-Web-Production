import React, { useEffect, useState } from 'react';
import { ArrowLeft, X } from 'lucide-react';

interface ProjectDetailProps {
  project: any;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  const handleSmartBack = () => {
    onBack(); 
    setTimeout(() => {
      const worksSection = document.getElementById('projects');
      if (worksSection) {
        worksSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-24 pb-16 animate-fade-in">
      
      {/* 1. Back Button (Tightened spacing) */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
        <button 
          onClick={handleSmartBack}
          className="group flex items-center gap-3 text-brand-grey hover:text-brand-red transition-colors"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform"/>
          <span className="font-sans text-sm tracking-wide">Back to Projects</span>
        </button>
      </div>

      {/* 2. Hero Image (Moved to the top for immediate impact) */}
      <div className="w-full max-w-[100rem] mx-auto px-4 md:px-8 mb-12">
        <div className="relative w-full h-[60vh] md:h-[75vh] overflow-hidden rounded-sm bg-brand-grey/5 cursor-pointer" onClick={() => setFullscreenImage(project.image)}>
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
          />
        </div>
      </div>

      {/* 3. Title & Info Block (Softened typography, side-by-side layout on desktop) */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          
          {/* Left Column: Title & Description */}
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-4">
               <span className="h-[1px] w-8 bg-brand-red"></span>
               <span className="text-brand-red font-sans text-sm tracking-wide">{project.category}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-[#1A1A1A] leading-tight mb-6">
              {project.title}
            </h1>
            <p className="font-sans text-base md:text-lg text-brand-grey font-light leading-relaxed max-w-3xl">
              {project.description}
            </p>
          </div>

          {/* Right Column: Details (Removed harsh uppercase) */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-8 lg:gap-6 pt-2 lg:pt-14 border-t lg:border-t-0 border-brand-grey/10 mt-6 lg:mt-0">
            <div>
              <h4 className="font-sans text-xs text-brand-grey/60 mb-1">Location</h4>
              <p className="font-sans text-base text-[#1A1A1A]">{project.location}</p>
            </div>
            <div>
              <h4 className="font-sans text-xs text-brand-grey/60 mb-1">Status</h4>
              <p className="font-sans text-base text-[#1A1A1A]">{project.status}</p>
            </div>
          </div>

        </div>
      </div>

      {/* 4. Project Gallery (Tightened spacing) */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {project.gallery?.map((img: string, index: number) => (
            <div 
              key={index}
              onClick={() => setFullscreenImage(img)} 
              className={`relative overflow-hidden bg-brand-grey/5 h-[300px] md:h-[400px] group cursor-pointer rounded-sm ${
                index % 5 === 0 ? 'md:col-span-2' : 'col-span-1'
              }`}
            >
              <img 
                src={img} 
                alt={`${project.title} Detail ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox (Unchanged) */}
      {fullscreenImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-fade-in">
          <button 
            onClick={() => setFullscreenImage(null)}
            className="absolute top-6 right-6 z-[110] p-2 text-white/50 hover:text-white bg-black/20 hover:bg-white/10 rounded-full transition-all"
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
  );
};

export default ProjectDetail;