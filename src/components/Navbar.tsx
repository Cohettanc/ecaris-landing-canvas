
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';

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

  const navigateTo = (path: string) => {
    setMobileMenuOpen(false);
    navigate(path);
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            <div className="relative">
              <button onClick={() => scrollToSection('about')} className="nav-link flex items-center">
                Who Are We
              </button>
            </div>

            <div className="relative">
              <DropdownMenu>
                <DropdownMenuTrigger className="nav-link flex items-center">
                  Our Services
                  <ChevronDown className="h-4 w-4 ml-1" />
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  align="start" 
                  sideOffset={15}
                  className="bg-white rounded-xl border border-gray-100 p-2 shadow-lg animate-in fade-in-80 slide-in-from-top-2"
                >
                  <DropdownMenuItem 
                    onClick={() => navigateTo('/cloud-service')}
                    className="rounded-lg px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer"
                  >
                    Cloud Services
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => navigateTo('/strategy-architecture')}
                    className="rounded-lg px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer"
                  >
                    Strategy & Architecture
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => navigateTo('/data-governance')}
                    className="rounded-lg px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer"
                  >
                    Data Governance
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => navigateTo('/erp-applications')}
                    className="rounded-lg px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer"
                  >
                    ERP Applications
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            
            <div className="relative">
              <button onClick={() => scrollToSection('clients')} className="nav-link">
                Our Clients
              </button>
            </div>

            <div className="relative">
              <DropdownMenu>
                <DropdownMenuTrigger className="nav-link flex items-center">
                  Our Offices
                  <ChevronDown className="h-4 w-4 ml-1" />
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  align="start" 
                  sideOffset={15}
                  className="bg-white rounded-xl border border-gray-100 p-2 shadow-lg animate-in fade-in-80 slide-in-from-top-2"
                >
                  <DropdownMenuItem 
                    onClick={() => navigateTo('/office/paris')}
                    className="rounded-lg px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer"
                  >
                    Paris
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => navigateTo('/office/berlin')}
                    className="rounded-lg px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer"
                  >
                    Berlin
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => navigateTo('/office/london')}
                    className="rounded-lg px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer"
                  >
                    London
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => navigateTo('/office/new-york')}
                    className="rounded-lg px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer"
                  >
                    New York
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="relative">
              <button onClick={() => scrollToSection('contact')} className="nav-link">
                Contact Us
              </button>
            </div>
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
          "fixed inset-0 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out md:hidden",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
        style={{ top: '140px' }}
      >
        <div className="px-4 py-6 space-y-6 bg-white">
          <button onClick={() => scrollToSection('about')} className="block w-full text-left py-3 border-b border-gray-100">Who Are We</button>
          
          <div className="block w-full text-left py-3 border-b border-gray-100">
            <div className="font-medium mb-2">Our Services</div>
            <div className="pl-4 space-y-2">
              <button onClick={() => navigateTo('/cloud-service')} className="block w-full text-left py-2 text-sm">Cloud Services</button>
              <button onClick={() => navigateTo('/strategy-architecture')} className="block w-full text-left py-2 text-sm">Strategy & Architecture</button>
              <button onClick={() => navigateTo('/data-governance')} className="block w-full text-left py-2 text-sm">Data Governance</button>
              <button onClick={() => navigateTo('/erp-applications')} className="block w-full text-left py-2 text-sm">ERP Applications</button>
            </div>
          </div>
          
          <button onClick={() => scrollToSection('clients')} className="block w-full text-left py-3 border-b border-gray-100">Our Clients</button>
          
          <div className="block w-full text-left py-3 border-b border-gray-100">
            <div className="font-medium mb-2">Our Offices</div>
            <div className="pl-4 space-y-2">
              <button onClick={() => navigateTo('/office/paris')} className="block w-full text-left py-2 text-sm">Paris</button>
              <button onClick={() => navigateTo('/office/berlin')} className="block w-full text-left py-2 text-sm">Berlin</button>
              <button onClick={() => navigateTo('/office/london')} className="block w-full text-left py-2 text-sm">London</button>
              <button onClick={() => navigateTo('/office/new-york')} className="block w-full text-left py-2 text-sm">New York</button>
            </div>
          </div>
          
          <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-3 border-b border-gray-100">Contact Us</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
