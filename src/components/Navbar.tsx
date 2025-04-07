
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

// Define dropdown menu items with their links
const navItems = [
  { label: 'Who Are We', id: 'about', type: 'scroll' },
  { 
    label: 'Our Services', 
    id: 'services', 
    type: 'dropdown',
    items: [
      { label: 'Cloud Service', link: '/cloud-service' },
      { label: 'Strategy & Architecture', link: '/strategy-architecture' },
      { label: 'Data Governance', link: '/data-governance' },
      { label: 'ERP Applications', link: '/erp-applications' }
    ]
  },
  { label: 'Our Clients', id: 'clients', type: 'scroll' },
  { label: 'Our Offices', id: 'offices', type: 'scroll' },
  { label: 'Contact Us', id: 'contact', type: 'scroll' }
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  
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
    // Close dropdowns when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown !== null) {
        const dropdownEl = dropdownRefs.current[activeDropdown];
        if (dropdownEl && !dropdownEl.contains(event.target as Node)) {
          setActiveDropdown(null);
        }
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
    setActiveDropdown(null);
    navigate('/');
  };

  const handleMouseEnter = (id: string) => {
    setActiveDropdown(id);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
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
            {navItems.map((item) => (
              <div 
                key={item.id}
                className="relative"
                onMouseEnter={() => item.type === 'dropdown' && handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
                ref={(el) => {
                  if (item.type === 'dropdown') {
                    dropdownRefs.current[item.id] = el;
                  }
                }}
              >
                {item.type === 'scroll' ? (
                  <button 
                    onClick={() => scrollToSection(item.id)} 
                    className="nav-link"
                  >
                    {item.label}
                  </button>
                ) : (
                  <div className="flex items-center cursor-pointer nav-link">
                    <span>{item.label}</span>
                    <ChevronDown className="ml-1 h-4 w-4" />
                    
                    {/* Dropdown Menu */}
                    <div 
                      className={cn(
                        "absolute top-full left-0 bg-white rounded-lg shadow-lg min-w-[200px] transition-all duration-300 z-50 mt-2",
                        activeDropdown === item.id 
                          ? "opacity-100 visible transform translate-y-0" 
                          : "opacity-0 invisible transform -translate-y-3 pointer-events-none"
                      )}
                      style={{ boxShadow: '0 6px 16px rgba(0,0,0,0.08)' }}
                    >
                      <div className="py-2">
                        {item.items?.map((subItem) => (
                          <Link 
                            key={subItem.link} 
                            to={subItem.link}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors duration-150"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
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
        <div className="px-4 py-6 space-y-1 bg-white">
          {navItems.map((item) => (
            <div key={item.id}>
              {item.type === 'scroll' ? (
                <button 
                  onClick={() => scrollToSection(item.id)} 
                  className="block w-full text-left py-3 border-b border-gray-100"
                >
                  {item.label}
                </button>
              ) : (
                <>
                  <button 
                    onClick={() => setActiveDropdown(activeDropdown === item.id ? null : item.id)}
                    className="flex items-center justify-between w-full text-left py-3 border-b border-gray-100"
                  >
                    <span>{item.label}</span>
                    <ChevronDown 
                      className={cn(
                        "h-4 w-4 transition-transform", 
                        activeDropdown === item.id ? "transform rotate-180" : ""
                      )} 
                    />
                  </button>
                  <div className={cn(
                    "pl-4 space-y-1 overflow-hidden transition-all duration-200",
                    activeDropdown === item.id ? "max-h-96 opacity-100 py-2" : "max-h-0 opacity-0"
                  )}>
                    {item.items?.map((subItem) => (
                      <Link 
                        key={subItem.link} 
                        to={subItem.link}
                        className="block py-2 text-gray-600 hover:text-ecaris-green"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
