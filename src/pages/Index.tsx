
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/services/Services';
import Stats from '@/components/Stats';
import OfficesUpdated from '@/components/OfficesUpdated';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "ECARIS | Excellence in Consulting";
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen antialiased">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Stats />
      <OfficesUpdated />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
