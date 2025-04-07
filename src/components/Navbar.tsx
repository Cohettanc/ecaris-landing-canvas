
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
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { ChevronDown } from 'lucide-react';

// Navigation content for dropdown menus
const navigationItems = [
  {
    title: "Who Are We",
    items: [
      { title: "About Us", href: "/#about" },
      { title: "Our Team", href: "/#about" },
      { title: "Our Story", href: "/#about" }
    ]
  },
  {
    title: "Our Services",
    items: [
      { title: "Cloud Service", href: "/cloud-service" },
      { title: "Strategy & Architecture", href: "/strategy-architecture" },
      { title: "Data Governance", href: "/data-governance" },
      { title: "ERP Applications", href: "/erp-applications" }
    ]
  },
  {
    title: "Our Clients",
    items: [
      { title: "Client Testimonials", href: "/#clients" },
      { title: "Case Studies", href: "/#clients" },
      { title: "Industries", href: "/#clients" }
    ]
  },
  {
    title: "Our Offices",
    items: [
      { title: "Paris", href: "/office/paris" },
      { title: "London", href: "/office/london" },
      { title: "New York", href: "/office/new-york" },
      { title: "All Locations", href: "/#offices" }
    ]
  },
  {
    title: "Contact Us",
    items: [
      { title: "Get in Touch", href: "/#contact" },
      { title: "Careers", href: "/#contact" },
      { title: "Support", href: "/#contact" }
    ]
  }
];

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

  const navigateToHome = () => {
    setMobileMenuOpen(false);
    navigate('/');
  };

  const navigateToPath = (path: string) => {
    setMobileMenuOpen(false);
    if (path.startsWith('/#')) {
      // If we're not on the homepage, navigate to homepage first
      if (location.pathname !== '/') {
        navigate(path);
      } else {
        // If we're already on the homepage, just scroll to the section
        const sectionId = path.substring(2); // Remove the '/#'
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(path);
    }
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
              <NavigationMenuList className="gap-1">
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.title} className="relative">
                    <NavigationMenuTrigger className={cn(
                      "bg-transparent hover:bg-white/50 text-gray-700 hover:text-ecaris-green",
                      "data-[state=open]:bg-white/50 data-[state=open]:text-ecaris-green"
                    )}>
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="absolute left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-md shadow-sm">
                      <ul className="grid w-[200px] gap-0.5 p-3">
                        {item.items.map((subItem) => (
                          <li key={subItem.title}>
                            <NavigationMenuLink asChild>
                              <button
                                onClick={() => navigateToPath(subItem.href)}
                                className="block select-none w-full text-left rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-ecaris-green/10 hover:text-ecaris-green text-gray-700 text-sm"
                              >
                                {subItem.title}
                              </button>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

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
          "fixed inset-0 bg-white/95 backdrop-blur-sm shadow-lg z-40 transform transition-transform duration-300 ease-in-out md:hidden",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
        style={{ top: '140px' }}
      >
        <div className="px-4 py-6 divide-y divide-gray-100">
          {navigationItems.map((category, index) => (
            <div key={index} className="py-3">
              <h3 className="text-lg font-medium text-gray-800 mb-2">{category.title}</h3>
              <ul className="space-y-1 pl-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <button 
                      onClick={() => navigateToPath(item.href)}
                      className="w-full text-left py-2 text-gray-600 hover:text-ecaris-green text-sm"
                    >
                      {item.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
