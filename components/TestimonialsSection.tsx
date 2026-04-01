import React from 'react';

interface SectionProps {
  id: string;
}

const testimonials = [
  {
    quote: "Ar. Abhishek is an exceptional landscape architect whose proactive problem-solving saved us significant time and capital. His down-to-earth nature and willingness to go far beyond his scope made him a true partner in our vision.",
    author: "Director",
    project: "Ramsetu Global Infra Projects Pvt. Ltd."
  },
  {
    quote: "I have been associated with Abhishek for more than a decade, he treats every project and development as his own, combining relentless hard work with a genuinely kind, approachable spirit. He is undeniably one of the finest architects, constantly pushing boundaries to deliver excellence.",
    author: "Co-Founder",
    project: "Fateh Buildtech Pvt. Ltd."
  },
  {
    quote: "Working with Abhishek was a joy; he is not only a visionary landscape architect but an incredibly grounded, good human being. His deep care for our project and ability to seamlessly resolve complex challenges exceeded all expectations.",
    author: "Owner",
    project: "Glass Haven"
  },
  {
    quote: "His kind nature and profound dedication transformed our resort into a living sanctuary. He consistently went beyond his mandate, proving himself to be a brilliant landscape architect who deeply cares about the final human experience.",
    author: "Owner",
    project: "Nowal Naturecure Wellness Resort"
  },
  {
    quote: "Despite his status as a top-tier landscape architect, he remains incredibly humble and down-to-earth. His meticulous problem-solving and hard work optimized our project costs without ever compromising the beauty of the design.",
    author: "Owner",
    project: "Cultural Elegance Residency"
  }
];

const TestimonialsSection: React.FC<SectionProps> = ({ id }) => {
  return (
    <section id={id} className="py-16 md:py-32 px-6 md:px-12 bg-brand-light w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 text-center">
           <div className="md:col-span-12">
             <h2 className="text-3xl md:text-5xl font-serif text-brand-grey leading-tight">
              Client Experiences
            </h2>
           </div>
        </div>

        <div className="flex flex-nowrap overflow-x-auto gap-6 lg:gap-8 pb-12 pt-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] -mx-6 px-6 md:-mx-12 md:px-12 cursor-ew-resize">
          {testimonials.map((t, index) => (
            <div 
              key={index} 
              className="shrink-0 snap-start w-[85vw] md:flex-[0_0_calc(50%-0.75rem)] lg:flex-[0_0_calc(33.333%-1.333rem)] flex flex-col items-center justify-center text-center group"
            >
              <div className="mb-6 opacity-20 group-hover:opacity-40 transition-opacity">
                <i className="fa-solid fa-quote-left text-brand-grey text-2xl"></i>
              </div>
              <p 
                className="font-serif font-light text-brand-grey mb-10"
                style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', lineHeight: 1.6 }}
              >
                "{t.quote}"
              </p>
              <div className="flex flex-col items-center mt-auto pt-6 w-full">
                {/* The Animated Line */}
                <div className="h-[1px] bg-brand-red/30 w-12 group-hover:w-24 transition-all duration-500 mb-4"></div>
                
                {/* The Unrestricted Text */}
                <p className="text-xs font-sans uppercase tracking-[0.1em] font-medium text-brand-red mb-1 text-center px-4">
                  {t.author}
                </p>
                <p className="text-xs font-sans uppercase tracking-[0.1em] font-medium text-brand-grey/70 text-center px-4">
                  {t.project}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;