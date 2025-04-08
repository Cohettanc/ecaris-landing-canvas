
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Users, Award, Briefcase } from 'lucide-react';

const OurTeam = () => {
  useEffect(() => {
    // Update document title
    document.title = "Our Team | ECARIS";
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen antialiased">
      <Navbar />
      
      <main className="pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="heading-lg text-gray-900 mb-6">
              <span className="inline-block pb-2 relative">
                Our Team
                <span className="absolute left-0 bottom-0 w-full h-1 bg-ecaris-green"></span>
              </span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Meet the experts who make ECARIS a leader in consulting and talent solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-w-3 aspect-h-4 bg-gray-100">
                <img 
                  src="/lovable-uploads/6ac968f6-0063-497d-88b8-92fe866ea998.png" 
                  alt="Alexander Rhea" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">Alexander Rhea</h3>
                <p className="text-ecaris-green font-medium">CEO & Founder</p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-w-3 aspect-h-4 bg-gray-100">
                <img 
                  src="/lovable-uploads/3faf8ffe-0155-441c-b464-dc79d15453eb.png" 
                  alt="Raphaël Attali" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">Raphaël Attali</h3>
                <p className="text-ecaris-green font-medium">Head of Consulting & Co-founder</p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-w-3 aspect-h-4 bg-gray-100">
                <img 
                  src="/lovable-uploads/f5fa7a37-f599-4636-b917-76c629e2d161.png" 
                  alt="Tancrède Cohet" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">Tancrède Cohet</h3>
                <p className="text-ecaris-green font-medium">Head of Sales & Co-founder</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 mb-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-ecaris-green bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                  <Users size={24} className="text-ecaris-green" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Talent Network</h3>
                <p className="text-gray-700">
                  Our extensive network connects you with pre-vetted experts across technology and business domains.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-ecaris-green bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                  <Award size={24} className="text-ecaris-green" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Industry Recognition</h3>
                <p className="text-gray-700">
                  Award-winning consulting services recognized for excellence in digital transformation.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-ecaris-green bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                  <Briefcase size={24} className="text-ecaris-green" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Project Experience</h3>
                <p className="text-gray-700">
                  Successfully delivered over 200 enterprise projects across finance, healthcare, and manufacturing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default OurTeam;
