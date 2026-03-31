import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

interface ProjectDetailProps {
  project: any;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-32 pb-24 animate-fade-in">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <button 
          onClick={onBack}
          className="group flex items-center gap-4 text-brand-grey hover:text-brand-red transition-colors"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform"/>
          <span className="font-sans uppercase tracking-widest text-xs font-medium">Back to Works</span>
        </button>
      </div>

      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8">
            <div className="flex items-center gap-4 mb-6">
               <span className="h-[1px] w-12 bg-brand-red"></span>
               <span className="text-brand-red font-sans uppercase tracking-widest text-xs font-medium">{project.category}</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#1A1A1A] leading-tight mb-8">
              {project.title}
            </h1>
          </div>
          <div className="md:col-span-4 flex flex-col justify-end pb-4">
            <div className="space-y-4">
              <div>
                <h4 className="font-sans uppercase tracking-widest text-[10px] text-brand-grey/70 mb-1">Location</h4>
                <p className="font-sans text-sm text-[#1A1A1A]">{project.location}</p>
              </div>
              <div>
                <h4 className="font-sans uppercase tracking-widest text-[10px] text-brand-grey/70 mb-1">Status</h4>
                <p className="font-sans text-sm text-[#1A1A1A]">{project.status}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Opening Description */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 md:col-start-3">
            <p className="font-sans text-lg md:text-xl text-brand-grey font-light leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>
      </div>

      {/* Project Media (Full-Width Image) */}
      <div className="w-full relative group mb-32 bg-brand-grey/5">
        <div className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Project Gallery */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {project.gallery?.map((img: string, index: number) => (
            <div 
              key={index} 
              className={`relative overflow-hidden bg-brand-grey/5 h-[300px] md:h-[400px] lg:h-[500px] group ${
                index % 5 === 0 ? 'md:col-span-2' : 'col-span-1'
              }`}
            >
              <img 
                src={img} 
                alt={`${project.title} Gallery ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
