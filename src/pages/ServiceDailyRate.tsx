
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import FeatureCard from '@/components/services/FeatureCard';

const ServiceDailyRate = () => {
  useEffect(() => {
    // Update document title
    document.title = "ECARIS | Services on Daily Rate Basis";
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen antialiased">
      <Navbar />
      
      {/* Header with background image */}
      <section className="pt-72 pb-24 bg-ecaris-green text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
            alt="Professional consultant workspace" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <span className="text-ecaris-light font-medium">Flexibility & Expertise</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Services on Daily Rate Basis
            </h1>
            <p className="text-xl md:text-2xl text-ecaris-light max-w-3xl mx-auto">
              Flexible expertise delivery tailored to your specific needs with skilled consultants available on a daily rate.
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How it works</h2>
            <p className="text-lg text-gray-700 mb-4">
              Our daily rate service model provides you with access to skilled consultants who can augment your team, provide specialized expertise, or lead key initiatives on a flexible basis.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Most of our consultants are senior professionals with over 8 years of experience, bringing deep technical, functional, and industry-specific expertise to accelerate your projects and deliver tangible impact.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <FeatureCard 
                title="Long-Term Vision"
                description="Our consultants typically stay on assignments for around 2 years, allowing them to build trust, drive sustainable change, and contribute meaningfully over time."
              />
              
              <FeatureCard 
                title="Senior, Cross-Functional Expertise"
                description="All our consultants are senior professionals, with over 8 years of experience. They bring a blend of technical, functional, and/or industry-specific expertise. Example: Head of Transformation, specialized in Supply Chain ERP deployment for the retail industry."
              />
              
              <FeatureCard 
                title="Seamless Team Integration"
                description="Our consultants embed fully into your teams, follow your internal processes, and collaborate closely with stakeholders. We prioritize knowledge transfer and sustainable delivery, so the value we bring continues after our mission ends."
              />
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div className="flex items-start p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="flex-shrink-0 h-6 w-6 text-ecaris-green">
                  <Check className="h-6 w-6" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">Cost Control</h3>
                  <p className="mt-2 text-gray-700">Transparent pricing with agreed-upon daily rates and no hidden costs.</p>
                </div>
              </div>
              
              <div className="flex items-start p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="flex-shrink-0 h-6 w-6 text-ecaris-green">
                  <Check className="h-6 w-6" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">Adaptability</h3>
                  <p className="mt-2 text-gray-700">Easily adjust to changing requirements or priorities without contract renegotiation.</p>
                </div>
              </div>
              
              <div className="flex items-start p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="flex-shrink-0 h-6 w-6 text-ecaris-green">
                  <Check className="h-6 w-6" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">Knowledge Transfer</h3>
                  <p className="mt-2 text-gray-700">Our consultants work closely with your team, sharing expertise and best practices.</p>
                </div>
              </div>
              
              <div className="flex items-start p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="flex-shrink-0 h-6 w-6 text-ecaris-green">
                  <Check className="h-6 w-6" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">Quick Start</h3>
                  <p className="mt-2 text-gray-700">Rapid deployment of resources without lengthy procurement processes.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Case Study Section */}
          <div className="my-16 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8">
                <div className="inline-block px-3 py-1 text-xs font-medium text-ecaris-green bg-ecaris-green/10 rounded-full mb-4">
                  Case Study
                </div>
                <h3 className="text-2xl font-bold mb-4">Finance ERP Rollout Support – Pharmaceutical Sector</h3>
                <p className="text-gray-700 mb-4">
                  A global pharmaceutical company engaged ECARIS to support the rollout of the finance module of Microsoft Dynamics 365 across several international subsidiaries.
                </p>
                <p className="text-gray-700 mb-4">
                  ECARIS provided a senior consultant with over 10 years of experience in finance, ERP deployments, and the pharmaceutical sector — bringing exactly the mix of expertise required for the project.
                </p>
                <p className="text-gray-700 mb-4">
                  Integrated directly into the project team, the consultant played a key role in harmonizing finance processes, adapting global standards to local realities, and ensuring smooth implementation and adoption across countries. The flexibility of our daily rate model allowed the client to scale involvement based on project phases, maintaining efficiency and control throughout the rollout.
                </p>
              </div>
              <div className="bg-gray-100">
                <img 
                  src="/lovable-uploads/4cb1f7f5-676f-4804-a339-1b7491f9f96a.png" 
                  alt="IT consultants collaborating in a modern office" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-ecaris-green text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6">Ready to enhance your team with our expertise?</h2>
          <p className="text-xl mb-8 text-ecaris-light">
            Contact us today to discuss how our daily rate services can address your specific challenges.
          </p>
          <button className="bg-white text-ecaris-green hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors duration-300">
            Contact Us
          </button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ServiceDailyRate;
