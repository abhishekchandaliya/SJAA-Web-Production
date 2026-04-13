import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

interface SectionProps {
  id: string;
}

const useScrollReveal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return { isVisible, domRef };
};

const ContactSection: React.FC<SectionProps> = ({ id }) => {
  const [isTypologyOpen, setIsTypologyOpen] = useState(false);
  const [selectedTypology, setSelectedTypology] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const { isVisible: isFormVisible, domRef: formRef } = useScrollReveal();
  const { isVisible: isDetailsVisible, domRef: detailsRef } = useScrollReveal();

  const typologies = [
    "Luxury Residential",
    "Hospitality & Wellness",
    "Commercial & Institutional",
    "Housing & Townships",
    "Other"
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsTypologyOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    // Reduced bottom padding slightly so it merges smoothly with the new footer
    <section id={id} className="pt-20 md:pt-24 pb-12 md:pb-16 px-6 md:px-12 bg-[#111111] text-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
        
        {/* Left Column: Form */}
        <div 
            ref={formRef}
            className={`col-span-12 md:col-span-6 space-y-8 md:space-y-12 transition-all duration-1000 ease-out ${
                isFormVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
        >
          {/* Aligned Header Text */}
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-tight">
              Get in Touch
            </h2>
            <p className="font-sans text-white/70 font-light max-w-md text-sm md:text-base leading-relaxed">
              We would love to hear about your upcoming project.
            </p>
          </div>

          <form className="space-y-6 max-w-md">
            <div className="space-y-1">
              <label htmlFor="name" className="font-sans text-[11px] md:text-xs text-brand-red font-medium uppercase tracking-wide block">Name</label>
              <input 
                type="text" 
                id="name"
                className="w-full bg-transparent border-b border-white/20 py-2 font-sans text-sm md:text-base font-light focus:outline-none focus:border-white transition-colors placeholder-white/30 rounded-none"
                placeholder="Your full name"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="email" className="font-sans text-[11px] md:text-xs text-brand-red font-medium uppercase tracking-wide block">Email Address</label>
              <input 
                type="email" 
                id="email"
                className="w-full bg-transparent border-b border-white/20 py-2 font-sans text-sm md:text-base font-light focus:outline-none focus:border-white transition-colors placeholder-white/30 rounded-none"
                placeholder="yourname@example.com"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="phone" className="font-sans text-[11px] md:text-xs text-brand-red font-medium uppercase tracking-wide block">Phone</label>
              <input 
                type="tel" 
                id="phone"
                className="w-full bg-transparent border-b border-white/20 py-2 font-sans text-sm md:text-base font-light focus:outline-none focus:border-white transition-colors placeholder-white/30 rounded-none"
                placeholder="+91 00000 00000"
              />
            </div>

            <div className="space-y-1">
               <label htmlFor="projectType" className="font-sans text-[11px] md:text-xs text-brand-red font-medium uppercase tracking-wide block">Project Typology</label>
               <div className="relative" ref={dropdownRef}>
                  <div 
                    className="w-full bg-transparent border-b border-white/20 py-2 font-sans text-sm md:text-base font-light cursor-pointer flex justify-between items-center transition-colors hover:border-white focus:border-white"
                    onClick={() => setIsTypologyOpen(!isTypologyOpen)}
                  >
                    <span className={selectedTypology ? "text-white" : "text-white/30"}>
                      {selectedTypology || "Select typology..."}
                    </span>
                    <ChevronDown size={18} className={`text-white/50 transition-transform duration-300 ${isTypologyOpen ? 'rotate-180' : ''}`} />
                  </div>
                  
                  {isTypologyOpen && (
                    <div className="absolute top-full left-0 w-full mt-0 bg-[#1A1A1A] border border-white/10 shadow-2xl z-50">
                      {typologies.map((typology, index) => (
                        <div 
                          key={index}
                          className="px-4 py-3 font-sans text-xs md:text-sm text-white/80 hover:text-white hover:bg-white/5 cursor-pointer transition-colors border-b border-white/5 last:border-b-0"
                          onClick={() => {
                            setSelectedTypology(typology);
                            setIsTypologyOpen(false);
                          }}
                        >
                          {typology}
                        </div>
                      ))}
                    </div>
                  )}
               </div>
            </div>

            <div className="space-y-1">
              <label htmlFor="details" className="font-sans text-[11px] md:text-xs text-brand-red font-medium uppercase tracking-wide block">Project Details</label>
              <textarea 
                id="details"
                rows={2}
                className="w-full bg-transparent border-b border-white/20 py-2 font-sans text-sm md:text-base font-light focus:outline-none focus:border-white transition-colors resize-none placeholder-white/30 rounded-none"
                placeholder="Briefly describe your site..."
              ></textarea>
            </div>

            <button type="submit" className="group flex items-center gap-3 text-white pt-2 hover:text-brand-red transition-colors">
              <span className="font-sans text-xs md:text-sm font-medium tracking-wide uppercase">Submit Inquiry</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
            </button>
          </form>
        </div>

        {/* Right Column: Contact Info & Map */}
        <div 
            ref={detailsRef}
            // Math Magic: Added mt-10 md:mt-24 so the content aligns with the top of the form, not the big title above it!
            className={`col-span-12 md:col-span-6 flex flex-col space-y-8 md:pl-12 mt-4 md:mt-[100px] transition-all duration-1000 delay-200 ease-out ${
                isDetailsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
        >
          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-b border-white/10 pb-8">
              <div>
                 <h4 className="font-sans text-[11px] md:text-xs text-brand-red mb-3 font-medium uppercase tracking-wide">Contact</h4>
                 <div className="font-sans font-light text-sm md:text-base text-white flex flex-col gap-2">
                   <a href="tel:+919314622669" className="flex items-center gap-2 hover:text-brand-red transition-colors w-fit">
                     <span className="text-white/40 text-xs">M:</span> +91 93146 22669
                   </a>
                   <a href="tel:+911413173720" className="flex items-center gap-2 hover:text-brand-red transition-colors w-fit">
                     <span className="text-white/40 text-xs">T:</span> +91 141 3173720
                   </a>
                   <a href="mailto:info@shreejinendra.com" className="flex items-center gap-2 hover:text-brand-red transition-colors w-fit mt-1">
                     <span className="text-white/40 text-xs">E:</span> info@shreejinendra.com
                   </a>
                 </div>
              </div>

              <div>
                 <h4 className="font-sans text-[11px] md:text-xs text-brand-red mb-3 font-medium uppercase tracking-wide">Careers</h4>
                 <div className="flex flex-col items-start gap-3">
                    <a href="mailto:info@shreejinendra.com?subject=Job Application" className="font-sans text-white hover:text-brand-red transition-colors border-b border-white/20 hover:border-brand-red pb-0.5 text-sm md:text-base font-light w-fit">
                        Apply for Job
                    </a>
                    <a href="mailto:info@shreejinendra.com?subject=Internship Application" className="font-sans text-white hover:text-brand-red transition-colors border-b border-white/20 hover:border-brand-red pb-0.5 text-sm md:text-base font-light w-fit mt-1">
                        Apply for Internship
                    </a>
                 </div>
              </div>
          </div>
          
          {/* Address & Live Map Embed */}
          <div className="flex flex-col gap-4">
             <div>
                <h4 className="font-sans text-[11px] md:text-xs text-brand-red mb-2 font-medium uppercase tracking-wide">Studio</h4>
                <p className="font-sans font-light text-sm md:text-base leading-relaxed text-white">
                  C-86C, Nandkishore Pareek Marg,<br/>
                  near Kanoria College, Bapu Nagar,<br/>
                  Jaipur (Rajasthan) 302015
                </p>
             </div>
             
             {/* Functional Google Map - New Link Inserted */}
             <div className="w-full h-56 sm:h-64 mt-2 bg-white/5 rounded-sm overflow-hidden border border-white/10 relative group">
                <iframe 
                  src="https://maps.app.goo.gl/A3ezq832LM2fi1qz7" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SJAA Studio Location"
                  className="absolute inset-0 transition-all duration-700 grayscale invert contrast-75 opacity-80 group-hover:grayscale-0 group-hover:invert-0 group-hover:contrast-100 group-hover:opacity-100"
                ></iframe>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;