
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-waras-asphalt/90 backdrop-blur-md py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/eecba1f8-b795-4472-8a2a-8247d377debb.png" 
              alt="WARAS Logo" 
              className="h-10 mr-2"
            />
            <h1 className="text-3xl font-bebas text-waras-lime">WARAS</h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          <button onClick={() => scrollToSection('about')} className="text-white hover:text-waras-lime transition">
            Siapa Kami
          </button>
          <button onClick={() => scrollToSection('services')} className="text-white hover:text-waras-lime transition">
            Layanan
          </button>
          <button onClick={() => scrollToSection('portfolio')} className="text-white hover:text-waras-lime transition">
            Portfolio
          </button>
          <button onClick={() => scrollToSection('contact')} className="waras-button waras-button-primary">
            Kontak
          </button>
        </div>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className={`w-6 h-0.5 bg-current transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : 'mb-1.5'}`}></div>
          <div className={`w-6 h-0.5 bg-current transition-all ${menuOpen ? 'opacity-0' : 'mb-1.5'}`}></div>
          <div className={`w-6 h-0.5 bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 z-40 bg-waras-asphalt transition-all duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col h-full justify-center items-center space-y-8 pt-16">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/eecba1f8-b795-4472-8a2a-8247d377debb.png" 
              alt="WARAS Logo" 
              className="h-16 mx-auto mb-4"
            />
          </div>
          <button onClick={() => scrollToSection('about')} className="text-2xl text-white hover:text-waras-lime transition">
            Siapa Kami
          </button>
          <button onClick={() => scrollToSection('services')} className="text-2xl text-white hover:text-waras-lime transition">
            Layanan
          </button>
          <button onClick={() => scrollToSection('portfolio')} className="text-2xl text-white hover:text-waras-lime transition">
            Portfolio
          </button>
          <button onClick={() => scrollToSection('contact')} className="waras-button waras-button-primary text-2xl">
            Kontak
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
