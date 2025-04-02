
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300', 
        scrolled ? 'bg-white/90 shadow-sm backdrop-blur-md py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/e39cb3b2-abde-4150-8b2f-0b3efdd5efee.png" 
              alt="ECARIS" 
              className="h-16 w-auto" 
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            <button onClick={() => scrollToSection('about')} className="nav-link">Who Are We</button>
            <button onClick={() => scrollToSection('services')} className="nav-link">Our Services</button>
            <button onClick={() => scrollToSection('clients')} className="nav-link">Our Clients</button>
            <button onClick={() => scrollToSection('offices')} className="nav-link">Our Offices</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">Contact Us</button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-ecaris-green focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out md:hidden",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
        style={{ top: '60px' }}
      >
        <div className="px-4 py-6 space-y-6">
          <button onClick={() => scrollToSection('about')} className="block w-full text-left py-3 border-b border-gray-100">Who Are We</button>
          <button onClick={() => scrollToSection('services')} className="block w-full text-left py-3 border-b border-gray-100">Our Services</button>
          <button onClick={() => scrollToSection('clients')} className="block w-full text-left py-3 border-b border-gray-100">Our Clients</button>
          <button onClick={() => scrollToSection('offices')} className="block w-full text-left py-3 border-b border-gray-100">Our Offices</button>
          <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-3 border-b border-gray-100">Contact Us</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
