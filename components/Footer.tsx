import React from 'react';
import { Instagram, Linkedin, Youtube } from 'lucide-react';

const WhatsAppIcon = ({ size = 20, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.098-.21.046-.39-.03-.54-.075-.15-.673-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.273-.21-.57-.36z"/>
    <path d="M20.52 3.449A11.964 11.964 0 0 0 12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.163 1.605 5.97L0 24l6.188-1.62A11.964 11.964 0 0 0 12 24c6.627 0 12-5.373 12-12 0-3.204-1.248-6.213-3.48-8.551zM12 22.016c-1.795 0-3.553-.483-5.09-1.395l-.365-.215-3.784.99.99-3.69-.236-.375A9.964 9.964 0 0 1 2.016 12c0-5.514 4.486-10 10-10 5.514 0 10 4.486 10 10s-4.486 10-10 10z"/>
  </svg>
);

const Footer: React.FC = () => {
  return (
    // Drastically reduced vertical padding to make it a tight, neat band at the bottom
    <footer className="bg-[#111111] text-white py-6 md:py-8 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center gap-4 text-center">
        
        {/* Social Icons Repeated for Easy Access */}
        <div className="flex items-center gap-5">
            <a href="https://www.instagram.com/shreejinendra/?hl=en" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white hover:scale-110 transition-all duration-300" aria-label="Instagram">
                <Instagram size={20} strokeWidth={1.5} />
            </a>
            <a href="https://www.linkedin.com/company/shreejinendra" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white hover:scale-110 transition-all duration-300" aria-label="LinkedIn">
                <Linkedin size={20} strokeWidth={1.5} />
            </a>
            <a href="#" className="text-white/50 hover:text-white hover:scale-110 transition-all duration-300" aria-label="YouTube">
                <Youtube size={20} strokeWidth={1.5} />
            </a>
            <a href="https://wa.me/919314622669" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white hover:scale-110 transition-all duration-300" aria-label="WhatsApp">
                <WhatsAppIcon size={20} />
            </a>
        </div>

        {/* Copyright Text */}
        <p className="font-sans text-[10px] md:text-xs text-white/30 font-light tracking-wide">
          © {new Date().getFullYear()} Shree Jinendra Architect & Associates. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;