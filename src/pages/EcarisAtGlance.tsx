
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Stats from '@/components/Stats';

const EcarisAtGlance = () => {
  useEffect(() => {
    // Update document title
    document.title = "ECARIS at a Glance | Excellence in Consulting";
    
    // Scroll to top on page load
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen antialiased">
      <Navbar />
      <div className="pt-32 pb-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 text-center">ECARIS at a Glance</h1>
          <p className="mt-4 text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Discover key statistics and achievements that define our company's journey.
          </p>
        </div>
      </div>
      <Stats />
      <Footer />
    </div>
  );
};

export default EcarisAtGlance;
