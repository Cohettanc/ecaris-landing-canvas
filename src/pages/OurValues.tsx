
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Target, ShieldCheck, Gem, Users } from 'lucide-react';

const OurValues = () => {
  useEffect(() => {
    // Update document title
    document.title = "Our Values | ECARIS";
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
                Our Values
                <span className="absolute left-0 bottom-0 w-full h-1 bg-ecaris-green"></span>
              </span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              The core principles that guide our mission and shape our approach to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-8 mb-20">
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/3c35e841-2a19-4149-afe6-610b8807c475.png" 
                  alt="ECARIS team collaboration" 
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At ECARIS, we believe that exceptional talent is the foundation of business success. Our mission is to bridge the gap between innovative companies and the skilled professionals they need to thrive.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                By fostering meaningful connections between businesses and experts, we enable transformative projects that drive growth and innovation.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-12 mb-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">Core Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-14 h-14 bg-ecaris-green bg-opacity-10 rounded-full flex items-center justify-center mb-6">
                  <ShieldCheck size={28} className="text-ecaris-green" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Trust & Integrity</h3>
                <p className="text-gray-700 leading-relaxed">
                  We build lasting relationships based on transparency and ethical practices. Our clients and partners can rely on our commitment to honesty in every interaction.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-14 h-14 bg-ecaris-green bg-opacity-10 rounded-full flex items-center justify-center mb-6">
                  <Gem size={28} className="text-ecaris-green" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Excellence</h3>
                <p className="text-gray-700 leading-relaxed">
                  We are committed to delivering exceptional quality in everything we do. From talent selection to project execution, we maintain the highest standards of excellence.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-14 h-14 bg-ecaris-green bg-opacity-10 rounded-full flex items-center justify-center mb-6">
                  <Target size={28} className="text-ecaris-green" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Innovation</h3>
                <p className="text-gray-700 leading-relaxed">
                  We embrace change and continuously seek new approaches to solve complex challenges. By staying at the forefront of industry trends, we help our clients navigate digital transformation.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-14 h-14 bg-ecaris-green bg-opacity-10 rounded-full flex items-center justify-center mb-6">
                  <Users size={28} className="text-ecaris-green" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Collaboration</h3>
                <p className="text-gray-700 leading-relaxed">
                  We believe in the power of teamwork. By fostering a collaborative environment, we bring together diverse perspectives to create holistic solutions for our clients.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-ecaris-green bg-opacity-5 rounded-xl p-10 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Commitment</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We are committed to sustainable business practices and social responsibility. 
              ECARIS actively participates in community initiatives and supports educational 
              programs that develop the next generation of talent.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default OurValues;
