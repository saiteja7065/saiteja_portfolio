
import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold">
            <span className="text-primary">Saiteja</span> Garlapati
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-primary transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('experience')} className="hover:text-primary transition-colors">
              Experience
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">
              Contact
            </button>
          </div>

          {/* Theme Toggle and Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <div className="w-px h-6 bg-border"></div>
            <a href="https://github.com/saiteja7065" target="_blank" rel="noopener noreferrer" 
               className="hover:text-primary transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/saitejagarlapati" target="_blank" rel="noopener noreferrer"
               className="hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:saiteja8421@gmail.com" className="hover:text-primary transition-colors">
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button 
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('home')} 
                      className="block px-3 py-2 hover:text-primary transition-colors w-full text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} 
                      className="block px-3 py-2 hover:text-primary transition-colors w-full text-left">
                About
              </button>
              <button onClick={() => scrollToSection('projects')} 
                      className="block px-3 py-2 hover:text-primary transition-colors w-full text-left">
                Projects
              </button>
              <button onClick={() => scrollToSection('experience')} 
                      className="block px-3 py-2 hover:text-primary transition-colors w-full text-left">
                Experience
              </button>
              <button onClick={() => scrollToSection('contact')} 
                      className="block px-3 py-2 hover:text-primary transition-colors w-full text-left">
                Contact
              </button>
              <div className="flex space-x-4 px-3 py-2">
                <a href="https://github.com/saiteja7065" target="_blank" rel="noopener noreferrer" 
                   className="hover:text-primary transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/saitejagarlapati" target="_blank" rel="noopener noreferrer"
                   className="hover:text-primary transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:saiteja8421@gmail.com" className="hover:text-primary transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
