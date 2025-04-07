
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const location = useLocation();
  
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
    
    // If we're not on the homepage, navigate to homepage first
    if (location.pathname !== '/') {
      navigate('/#' + id);
    } else {
      // If we're already on the homepage, just scroll to the section
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateToHome = () => {
    setMobileMenuOpen(false);
    navigate('/');
  };

  const navigateToPage = (path: string) => {
    setMobileMenuOpen(false);
    navigate(path);
  };

  // Pages that actually exist in the app (from App.tsx routes)
  const existingPages = {
    services: [
      { label: 'Cloud Service', path: '/cloud-service' },
      { label: 'Strategy & Architecture', path: '/strategy-architecture' },
      { label: 'Data Governance', path: '/data-governance' },
      { label: 'ERP Applications', path: '/erp-applications' },
    ],
    legal: [
      { label: 'Legal Notice', path: '/legal-notice' },
      { label: 'Data Protection', path: '/data-protection' },
    ]
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
            <button 
              onClick={navigateToHome}
              className="focus:outline-none" 
              aria-label="Navigate to homepage"
            >
              <img 
                src="/lovable-uploads/e39cb3b2-abde-4150-8b2f-0b3efdd5efee.png" 
                alt="ECARIS" 
                className="h-24 md:h-32 w-auto" 
              />
            </button>
          </div>

          {/* Desktop Navigation with Dropdowns */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="gap-2">
                {/* About Section */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-ecaris-green transition-colors duration-300 bg-transparent hover:bg-transparent data-[state=open]:bg-transparent"
                  >
                    Who Are We
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white rounded-lg p-2 shadow-custom border border-gray-100 min-w-[200px] data-[motion^=from-]:animate-fade-in data-[motion^=to-]:animate-fade-out">
                    <button
                      onClick={() => scrollToSection('about')}
                      className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-50 rounded-md transition-colors duration-200 text-gray-700"
                    >
                      About Us
                    </button>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Services Section */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-ecaris-green transition-colors duration-300 bg-transparent hover:bg-transparent data-[state=open]:bg-transparent"
                  >
                    Our Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white rounded-lg p-2 shadow-custom border border-gray-100 min-w-[220px] data-[motion^=from-]:animate-fade-in data-[motion^=to-]:animate-fade-out">
                    <button
                      onClick={() => scrollToSection('services')}
                      className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-50 rounded-md transition-colors duration-200 text-gray-700"
                    >
                      All Services
                    </button>
                    <div className="h-px bg-gray-100 my-2 mx-2" />
                    {existingPages.services.map((service) => (
                      <button
                        key={service.path}
                        onClick={() => navigateToPage(service.path)}
                        className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-50 rounded-md transition-colors duration-200 text-gray-700"
                      >
                        {service.label}
                      </button>
                    ))}
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Clients Section */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-ecaris-green transition-colors duration-300 bg-transparent hover:bg-transparent data-[state=open]:bg-transparent"
                  >
                    Our Clients
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white rounded-lg p-2 shadow-custom border border-gray-100 min-w-[200px] data-[motion^=from-]:animate-fade-in data-[motion^=to-]:animate-fade-out">
                    <button
                      onClick={() => scrollToSection('clients')}
                      className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-50 rounded-md transition-colors duration-200 text-gray-700"
                    >
                      Client Overview
                    </button>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Offices Section */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-ecaris-green transition-colors duration-300 bg-transparent hover:bg-transparent data-[state=open]:bg-transparent"
                  >
                    Our Offices
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white rounded-lg p-2 shadow-custom border border-gray-100 min-w-[200px] data-[motion^=from-]:animate-fade-in data-[motion^=to-]:animate-fade-out">
                    <button
                      onClick={() => scrollToSection('offices')}
                      className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-50 rounded-md transition-colors duration-200 text-gray-700"
                    >
                      All Locations
                    </button>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Contact Section */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-ecaris-green transition-colors duration-300 bg-transparent hover:bg-transparent data-[state=open]:bg-transparent"
                  >
                    Contact Us
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white rounded-lg p-2 shadow-custom border border-gray-100 min-w-[200px] data-[motion^=from-]:animate-fade-in data-[motion^=to-]:animate-fade-out">
                    <button
                      onClick={() => scrollToSection('contact')}
                      className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-50 rounded-md transition-colors duration-200 text-gray-700"
                    >
                      Contact Information
                    </button>
                    <div className="h-px bg-gray-100 my-2 mx-2" />
                    {existingPages.legal.map((page) => (
                      <button
                        key={page.path}
                        onClick={() => navigateToPage(page.path)}
                        className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-50 rounded-md transition-colors duration-200 text-gray-700"
                      >
                        {page.label}
                      </button>
                    ))}
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-ecaris-green focus:outline-none p-2"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Slide in from right */}
      <div 
        className={cn(
          "fixed inset-0 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out md:hidden",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
        style={{ top: '140px' }}
      >
        <div className="px-4 py-6 space-y-6 bg-white">
          <div className="space-y-2">
            <button 
              onClick={() => scrollToSection('about')} 
              className="block w-full text-left py-3 border-b border-gray-100"
            >
              Who Are We
            </button>
          </div>

          <div className="space-y-2">
            <button 
              onClick={() => scrollToSection('services')}
              className="block w-full text-left py-3 border-b border-gray-100"
            >
              Our Services
            </button>
            <div className="pl-4 space-y-2 mt-2">
              {existingPages.services.map((service) => (
                <button
                  key={service.path}
                  onClick={() => navigateToPage(service.path)}
                  className="block w-full text-left py-2 text-gray-600 hover:text-ecaris-green transition-colors"
                >
                  {service.label}
                </button>
              ))}
            </div>
          </div>

          <button 
            onClick={() => scrollToSection('clients')}
            className="block w-full text-left py-3 border-b border-gray-100"
          >
            Our Clients
          </button>

          <button 
            onClick={() => scrollToSection('offices')}
            className="block w-full text-left py-3 border-b border-gray-100"
          >
            Our Offices
          </button>

          <div className="space-y-2">
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left py-3 border-b border-gray-100"
            >
              Contact Us
            </button>
            <div className="pl-4 space-y-2 mt-2">
              {existingPages.legal.map((page) => (
                <button
                  key={page.path}
                  onClick={() => navigateToPage(page.path)}
                  className="block w-full text-left py-2 text-gray-600 hover:text-ecaris-green transition-colors"
                >
                  {page.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
