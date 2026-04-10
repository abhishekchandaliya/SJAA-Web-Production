import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Search, ChevronUp, ChevronDown, Instagram, Linkedin, Youtube } from 'lucide-react';

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

interface HeaderProps {
  onNavigate: (id: string) => void;
  onSearch: (query: string) => void;
  onNext: () => void;
  onPrev: () => void;
  onClear: () => void;
  currentMatch: number;
  totalMatches: number;
}

const Header: React.FC<HeaderProps> = ({ 
  onNavigate, 
  onSearch, 
  onNext, 
  onPrev, 
  onClear,
  currentMatch, 
  totalMatches 
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const lastScrollY = useRef(0);

  // NEW: Determines if the header should be in "Transparent / White Text" mode
  const isTop = !isScrolled && !isSearchOpen && !isMobileMenuOpen;

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Firm', id: 'firm' },
    { name: 'Selected Works', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSearch(inputValue);
    }
  };

  const closeSearch = () => {
    setInputValue('');
    onClear();
    setIsSearchOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isTop ? 'bg-transparent' : 'bg-white/95 backdrop-blur-md shadow-sm'} ${isHidden ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="w-full px-6 md:px-12 h-24 flex items-center justify-between max-w-7xl mx-auto relative">
        
        {/* Logo Section */}
        <div 
          className={`flex flex-col md:flex-row md:items-center gap-4 cursor-pointer z-50 group ${isSearchOpen ? 'hidden md:flex' : 'flex'}`} 
          onClick={() => handleNavClick('home')}
        >
          <img 
            src="/images/logo/sjaa-logo.png" 
            alt="SJAA Logo - Shree Jinendra Architect & Associates" 
            // CSS Magic: Turns the logo pure white when at the top!
            className={`h-12 md:h-16 w-auto object-contain transition-all duration-500 group-hover:scale-[1.02] ${isTop ? 'brightness-0 invert opacity-90' : ''}`}
          />
        </div>

        {/* Desktop Navigation */}
        <div className={`hidden md:flex items-center gap-10 ${isSearchOpen ? 'opacity-0 pointer-events-none absolute' : 'opacity-100 relative'} transition-opacity duration-300`}>
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.id)}
                className={`font-sans text-xs font-medium uppercase tracking-widest transition-colors py-2 relative group ${isTop ? 'text-white/90 hover:text-white' : 'text-brand-grey hover:text-brand-red'}`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${isTop ? 'bg-white' : 'bg-brand-red'}`}></span>
              </button>
            ))}
          </nav>
          
          {/* Social Icons */}
          <div className={`flex items-center gap-4 border-l pl-6 transition-colors duration-500 ${isTop ? 'border-white/30' : 'border-brand-grey/20'}`}>
            <a href="https://www.instagram.com/shreejinendra/?hl=en" target="_blank" rel="noopener noreferrer" className={`transition-colors ${isTop ? 'text-white/90 hover:text-white' : 'text-brand-grey hover:text-brand-red'}`} aria-label="Instagram">
              <Instagram size={20} strokeWidth={1.5} />
            </a>
            <a href="https://www.linkedin.com/company/shreejinendra" target="_blank" rel="noopener noreferrer" className={`transition-colors ${isTop ? 'text-white/90 hover:text-white' : 'text-brand-grey hover:text-brand-red'}`} aria-label="LinkedIn">
              <Linkedin size={20} strokeWidth={1.5} />
            </a>
            <a href="#" className={`transition-colors ${isTop ? 'text-white/90 hover:text-white' : 'text-brand-grey hover:text-brand-red'}`} aria-label="YouTube">
              <Youtube size={20} strokeWidth={1.5} />
            </a>
            <a href="https://wa.me/919314622669" target="_blank" rel="noopener noreferrer" className={`transition-colors ${isTop ? 'text-white/90 hover:text-white' : 'text-brand-grey hover:text-brand-red'}`} aria-label="WhatsApp">
              <WhatsAppIcon size={20} />
            </a>
          </div>
        </div>

        {/* Search Bar Container */}
        <div className={`flex items-center justify-end ${isSearchOpen ? 'w-full md:w-auto absolute left-0 px-6 md:px-0 md:relative' : 'w-auto'}`}>
            
            {/* Expanded Search Controls */}
            {isSearchOpen ? (
              <div className="flex items-center gap-2 w-full md:w-auto bg-white md:bg-transparent h-24 md:h-auto z-50">
                 <div className="flex items-center border-b border-brand-red/50 pb-1 mr-4 flex-grow md:w-64 lg:w-80 transition-all">
                    <Search size={18} className="text-brand-red mr-2 flex-shrink-0" />
                    <input 
                      ref={searchInputRef}
                      type="text" 
                      placeholder="Find..." 
                      className="bg-transparent text-brand-grey text-sm focus:outline-none font-sans font-light placeholder-brand-grey/50 w-full"
                      value={inputValue}
                      onChange={handleSearchInput}
                      onKeyDown={handleKeyDown}
                    />
                    {totalMatches > 0 && (
                       <span className="font-sans text-[10px] font-medium text-brand-grey/70 whitespace-nowrap ml-2">
                         {currentMatch} of {totalMatches}
                       </span>
                    )}
                 </div>

                 {/* Navigation Controls */}
                 <div className="flex items-center gap-1">
                    <button 
                      onClick={onPrev}
                      disabled={totalMatches === 0}
                      className="p-2 hover:bg-brand-grey/5 rounded-full text-brand-grey disabled:opacity-30 transition-colors"
                    >
                      <ChevronUp size={20} strokeWidth={1.5} />
                    </button>
                    <button 
                      onClick={onNext}
                      disabled={totalMatches === 0}
                      className="p-2 hover:bg-brand-grey/5 rounded-full text-brand-grey disabled:opacity-30 transition-colors"
                    >
                      <ChevronDown size={20} strokeWidth={1.5} />
                    </button>
                    <div className="w-[1px] h-6 bg-brand-grey/20 mx-1"></div>
                    <button 
                      onClick={closeSearch}
                      className="p-2 hover:text-brand-red text-brand-grey transition-colors"
                    >
                      <X size={20} strokeWidth={1.5} />
                    </button>
                 </div>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                 <button 
                  onClick={() => setIsSearchOpen(true)}
                  className={`p-2 transition-colors duration-300 ${isTop ? 'text-white/90 hover:text-white' : 'text-brand-grey hover:text-brand-red'}`}
                  aria-label="Open Search"
                 >
                  <Search size={20} strokeWidth={1.5} />
                 </button>
                 
                 {/* Mobile Menu Toggle */}
                 <div className="md:hidden">
                    <button 
                      className={`p-2 transition-colors duration-300 ${isTop ? 'text-white' : 'text-brand-grey'}`}
                      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                      {isMobileMenuOpen ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
                    </button>
                 </div>
              </div>
            )}
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && !isSearchOpen && (
        <div className="fixed inset-0 top-0 left-0 w-full h-screen bg-white z-40 flex flex-col animate-fade-in md:hidden pt-24">
          <div className="flex flex-col items-center justify-center gap-8 flex-grow">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.id)}
                className="font-sans text-3xl font-light text-brand-grey hover:text-brand-red transition-colors uppercase tracking-widest"
              >
                {link.name}
              </button>
            ))}
          </div>
          
          {/* Mobile Social Icons */}
          <div className="w-full flex justify-center gap-6 pb-12">
            <a href="https://www.instagram.com/shreejinendra/?hl=en" target="_blank" rel="noopener noreferrer" className="text-brand-grey hover:text-brand-red transition-colors p-3">
              <Instagram size={24} strokeWidth={1.5} />
            </a>
            <a href="https://www.linkedin.com/company/shreejinendra" target="_blank" rel="noopener noreferrer" className="text-brand-grey hover:text-brand-red transition-colors p-3">
              <Linkedin size={24} strokeWidth={1.5} />
            </a>
            <a href="#" className="text-brand-grey hover:text-brand-red transition-colors p-3">
              <Youtube size={24} strokeWidth={1.5} />
            </a>
            <a href="https://wa.me/919314622669" target="_blank" rel="noopener noreferrer" className="text-brand-grey hover:text-brand-red transition-colors p-3">
              <WhatsAppIcon size={24} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;