

import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { offices } from '@/data/officeData';

interface DropdownItem {
  name: string;
  path: string;
}

interface NavItem {
  name: string;
  id?: string;
  path?: string;
  dropdown?: DropdownItem[];
}

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRefs = useRef<{[key: string]: HTMLDivElement | null}>({});

  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const location = useLocation();

  const navItems: NavItem[] = [
    { 
      name: "Who Are We", 
      dropdown: [
        { name: "About Us", path: "/#about" },
        { name: "Our Team", path: "/our-team" },
        { name: "Our Values", path: "/our-values" }
      ]
    },
    { 
      name: "Our Services", 
      dropdown: [
        { name: "All Our Services", path: "/#main-services" },
        { name: "Daily Rate Services", path: "/service-daily-rate" },
        { name: "Project Delivery Services", path: "/service-project-delivery" }
      ]
    },
    { 
      name: "Our IT Expertise", 
      dropdown: [
        { name: "All Our IT Expertise", path: "/#services" },
        { name: "AI & Data Governance", path: "/data-governance" },
        { name: "Strategy & Architecture", path: "/strategy-architecture" },
        { name: "Cloud Services", path: "/cloud-service" },
        { name: "ERP & Applications", path: "/erp-applications" }
      ]
    },
    { 
      name: "ECARIS at a glance", 
      id: "clients" 
    },
    { 
      name: "Our Offices", 
      dropdown: [
        { name: "All Our Offices", path: "/#offices" },
        { name: "Luxembourg", path: "/office/luxembourg" },
        { name: "Paris", path: "/office/paris" }
      ]
    },
    { 
      name: "Contact Us", 
      id: "contact" 
    }
  ];

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

  useEffect(() => {
    if (location.hash && location.pathname === '/') {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    }
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown && dropdownRefs.current[activeDropdown] && 
          !dropdownRefs.current[activeDropdown]?.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeDropdown]);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    
    if (location.pathname !== '/') {
      navigate(`/#${id}`, { replace: true });
      return;
    }
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const navigateToHome = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    navigate('/', { replace: true });
  };

  const navigateToPage = (path: string) => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    
    if (path.startsWith('/#')) {
      const id = path.substring(2);
      
      if (location.pathname === '/') {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
        return;
      }
      
      navigate(path, { replace: true });
    } else {
      navigate(path, { replace: true });
    }
  };

  const toggleDropdown = (name: string) => {
    setActiveDropdown(prev => prev === name ? null : name);
  };

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white', 
        scrolled ? 'shadow-sm backdrop-blur-md py-3' : 'py-5'
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

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <div 
                key={item.name} 
                className="relative group"
                ref={el => dropdownRefs.current[item.name] = el}
              >
                {item.dropdown ? (
                  <>
                    <button 
                      onClick={() => toggleDropdown(item.name)}
                      className={cn(
                        "nav-link flex items-center gap-1",
                        activeDropdown === item.name ? "text-ecaris-green" : ""
                      )}
                      aria-expanded={activeDropdown === item.name}
                    >
                      {item.name}
                      <ChevronDown size={16} className={cn(
                        "transition-transform duration-200",
                        activeDropdown === item.name ? "rotate-180" : ""
                      )} />
                    </button>
                    
                    <div 
                      className={cn(
                        "absolute left-0 top-full mt-2 w-56 rounded-lg bg-white shadow-lg z-20 transition-all duration-200 transform origin-top-left",
                        activeDropdown === item.name 
                          ? "opacity-100 visible translate-y-0" 
                          : "opacity-0 invisible translate-y-2 pointer-events-none"
                      )}
                      style={{ boxShadow: '0 6px 16px rgba(0,0,0,0.08)' }}
                    >
                      <div className="py-2 px-1">
                        {item.dropdown.map((dropdownItem) => (
                          <button
                            key={dropdownItem.path}
                            onClick={() => navigateToPage(dropdownItem.path)}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors duration-150"
                          >
                            {dropdownItem.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </>
                ) : item.path ? (
                  <button 
                    onClick={() => navigateToPage(item.path!)}
                    className="nav-link"
                  >
                    {item.name}
                  </button>
                ) : (
                  <button 
                    onClick={() => item.id && scrollToSection(item.id)} 
                    className="nav-link"
                  >
                    {item.name}
                  </button>
                )}
              </div>
            ))}
          </nav>

          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-ecaris-green focus:outline-none"
              aria-expanded={mobileMenuOpen}
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

      <div 
        className={cn(
          "fixed inset-0 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out md:hidden",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
        style={{ top: '140px' }}
      >
        <div className="px-4 py-6 space-y-1 bg-white overflow-y-auto max-h-[calc(100vh-140px)]">
          {navItems.map((item) => (
            <div key={item.name} className="border-b border-gray-100">
              {item.dropdown ? (
                <div>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex justify-between items-center w-full py-3 text-left"
                  >
                    {item.name}
                    <ChevronDown 
                      size={16} 
                      className={cn(
                        "transition-transform",
                        activeDropdown === item.name ? "rotate-180" : ""
                      )} 
                    />
                  </button>
                  
                  <div 
                    className={cn(
                      "pl-4 overflow-hidden transition-all duration-200",
                      activeDropdown === item.name ? "max-h-60" : "max-h-0"
                    )}
                  >
                    {item.dropdown?.map((dropdownItem) => (
                      <button
                        key={dropdownItem.path}
                        onClick={() => navigateToPage(dropdownItem.path)}
                        className="block w-full text-left py-2 text-sm text-gray-600 hover:text-ecaris-green"
                      >
                        {dropdownItem.name}
                      </button>
                    ))}
                  </div>
                </div>
              ) : item.path ? (
                <button 
                  onClick={() => navigateToPage(item.path!)}
                  className="block w-full text-left py-3"
                >
                  {item.name}
                </button>
              ) : (
                <button 
                  onClick={() => item.id && scrollToSection(item.id)} 
                  className="block w-full text-left py-3"
                >
                  {item.name}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;

