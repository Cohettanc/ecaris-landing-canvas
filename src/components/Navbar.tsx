
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
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

  const navigateToPage = (path: string) => {
    setMobileMenuOpen(false);
    navigate(path);
  };

  const navigateToHome = () => {
    setMobileMenuOpen(false);
    navigate('/');
  };

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300', 
        scrolled ? 'bg-white/95 shadow-sm backdrop-blur-md py-3' : 'bg-transparent py-5'
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
          <nav className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="space-x-4">
                {/* About Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-transparent">Who Are We</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-2 p-4 w-[220px]">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link 
                            to="/" 
                            onClick={() => scrollToSection('about')}
                            className="block select-none space-y-1 rounded-md p-3 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            About Us
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link 
                            to="/legal-notice" 
                            className="block select-none space-y-1 rounded-md p-3 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            Legal Notice
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link 
                            to="/data-protection" 
                            className="block select-none space-y-1 rounded-md p-3 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            Data Protection
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Services Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-transparent">Our Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-2 p-4 w-[250px]">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link 
                            to="/" 
                            onClick={() => scrollToSection('services')}
                            className="block select-none space-y-1 rounded-md p-3 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            All Services
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link 
                            to="/cloud-service" 
                            className="block select-none space-y-1 rounded-md p-3 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            Cloud Service
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link 
                            to="/strategy-architecture" 
                            className="block select-none space-y-1 rounded-md p-3 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            Strategy & Architecture
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link 
                            to="/data-governance" 
                            className="block select-none space-y-1 rounded-md p-3 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            Data Governance
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link 
                            to="/erp-applications" 
                            className="block select-none space-y-1 rounded-md p-3 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            ERP Applications
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Clients Link */}
                <NavigationMenuItem>
                  <Link
                    to="/"
                    onClick={() => scrollToSection('clients')}
                    className={navigationMenuTriggerStyle({ className: "bg-transparent hover:bg-transparent" })}
                  >
                    Our Clients
                  </Link>
                </NavigationMenuItem>

                {/* Offices Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-transparent">Our Offices</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-2 p-4 w-[220px]">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link 
                            to="/" 
                            onClick={() => scrollToSection('offices')}
                            className="block select-none space-y-1 rounded-md p-3 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            All Offices
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link 
                            to="/office/paris" 
                            className="block select-none space-y-1 rounded-md p-3 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            Paris
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link 
                            to="/office/berlin" 
                            className="block select-none space-y-1 rounded-md p-3 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            Berlin
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link 
                            to="/office/london" 
                            className="block select-none space-y-1 rounded-md p-3 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            London
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Contact Link */}
                <NavigationMenuItem>
                  <Link
                    to="/"
                    onClick={() => scrollToSection('contact')}
                    className={navigationMenuTriggerStyle({ className: "bg-transparent hover:bg-transparent" })}
                  >
                    Contact Us
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-primary focus:outline-none"
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

      {/* Mobile Menu with Collapsible Sections */}
      <div 
        className={cn(
          "fixed inset-0 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out md:hidden overflow-y-auto",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
        style={{ top: '140px' }}
      >
        <div className="px-4 py-6 space-y-2 bg-white">
          {/* About Section */}
          <DropdownMenu>
            <DropdownMenuTrigger className="w-full flex justify-between items-center py-2.5 text-base font-medium border-b border-gray-100">
              <span>Who Are We</span>
              <ChevronDown className="h-4 w-4 ml-2" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[94vw] mx-[3vw]">
              <DropdownMenuItem onSelect={() => scrollToSection('about')}>
                About Us
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => navigateToPage('/legal-notice')}>
                Legal Notice
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => navigateToPage('/data-protection')}>
                Data Protection
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Services Section */}
          <DropdownMenu>
            <DropdownMenuTrigger className="w-full flex justify-between items-center py-2.5 text-base font-medium border-b border-gray-100">
              <span>Our Services</span>
              <ChevronDown className="h-4 w-4 ml-2" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[94vw] mx-[3vw]">
              <DropdownMenuItem onSelect={() => scrollToSection('services')}>
                All Services
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => navigateToPage('/cloud-service')}>
                Cloud Service
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => navigateToPage('/strategy-architecture')}>
                Strategy & Architecture
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => navigateToPage('/data-governance')}>
                Data Governance
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => navigateToPage('/erp-applications')}>
                ERP Applications
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Clients Link */}
          <button 
            onClick={() => scrollToSection('clients')} 
            className="block w-full text-left py-2.5 text-base font-medium border-b border-gray-100"
          >
            Our Clients
          </button>

          {/* Offices Section */}
          <DropdownMenu>
            <DropdownMenuTrigger className="w-full flex justify-between items-center py-2.5 text-base font-medium border-b border-gray-100">
              <span>Our Offices</span>
              <ChevronDown className="h-4 w-4 ml-2" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[94vw] mx-[3vw]">
              <DropdownMenuItem onSelect={() => scrollToSection('offices')}>
                All Offices
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => navigateToPage('/office/paris')}>
                Paris
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => navigateToPage('/office/berlin')}>
                Berlin
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => navigateToPage('/office/london')}>
                London
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Contact Link */}
          <button 
            onClick={() => scrollToSection('contact')} 
            className="block w-full text-left py-2.5 text-base font-medium border-b border-gray-100"
          >
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
