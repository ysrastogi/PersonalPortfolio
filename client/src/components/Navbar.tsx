import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll to update active link
  useEffect(() => {
    const handleScroll = () => {
      // Set navbar background on scroll
      setScrolled(window.scrollY > 10);
      
      // Find which section is currently in view
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      let currentSection = 'home';
      
      sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = sectionId;
          }
        }
      });
      
      setActiveLink(`#${currentSection}`);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`bg-white fixed w-full z-50 transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center text-primary font-bold text-xl">
              <span>Yash Rastogi</span>
            </div>
          </div>
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className={`px-3 py-2 font-medium transition-colors duration-200 ${activeLink === link.href ? 'text-primary' : 'text-neutral-700 hover:text-primary'}`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex items-center md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-700 hover:text-primary focus:outline-none transition-colors duration-200"
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden bg-white border-t border-neutral-200 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`block px-3 py-2 font-medium rounded-md ${activeLink === link.href ? 'text-primary' : 'text-neutral-700 hover:text-primary hover:bg-neutral-50'}`}
              onClick={closeMobileMenu}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
