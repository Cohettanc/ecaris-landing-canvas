
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/services/Services';
import Stats from '@/components/Stats';
import Offices from '@/components/Offices';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // Update document title
    document.title = "ECARIS | Excellence in Consulting";
    
    // Check if there's a hash in the URL (for section scrolling)
    if (location.hash) {
      const id = location.hash.substring(1); // Remove the # symbol
      const element = document.getElementById(id);
      
      if (element) {
        // Use a small delay to ensure the page has fully loaded
        setTimeout(() => {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      } else {
        // If no matching element, scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
    // We don't automatically scroll to top here since the PageTransition component handles that
  }, [location.hash]);

  return (
    <div className="min-h-screen antialiased">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Stats />
      <Offices />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
