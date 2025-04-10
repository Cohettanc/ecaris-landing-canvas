
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

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
              This approach is ideal for projects where scope might evolve, or when you need specialized support without committing to a fixed-price project.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <Card className="relative overflow-hidden border-t-4 border-t-ecaris-green">
                <div className="absolute top-0 right-0 w-24 h-24 -mt-8 -mr-8 bg-ecaris-green/10 rounded-full"></div>
                <CardHeader>
                  <CardTitle>Resource Flexibility</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Scale resources up or down based on your project needs. Bring in experts only when you need them.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="relative overflow-hidden border-t-4 border-t-ecaris-green">
                <div className="absolute top-0 right-0 w-24 h-24 -mt-8 -mr-8 bg-ecaris-green/10 rounded-full"></div>
                <CardHeader>
                  <CardTitle>Specialized Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Access to consultants with specific skills and industry knowledge to address your unique challenges.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="relative overflow-hidden border-t-4 border-t-ecaris-green">
                <div className="absolute top-0 right-0 w-24 h-24 -mt-8 -mr-8 bg-ecaris-green/10 rounded-full"></div>
                <CardHeader>
                  <CardTitle>Team Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Our consultants work seamlessly with your team, following your processes while bringing external perspective.
                  </p>
                </CardContent>
              </Card>
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
          
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Ideal for</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-ecaris-green">
                      <Check className="h-6 w-6" />
                    </div>
                    <p className="ml-3 text-gray-700">Teams needing temporary specialized expertise</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-ecaris-green">
                      <Check className="h-6 w-6" />
                    </div>
                    <p className="ml-3 text-gray-700">Projects with evolving requirements</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-ecaris-green">
                      <Check className="h-6 w-6" />
                    </div>
                    <p className="ml-3 text-gray-700">Multi-phase initiatives where needs may change</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-ecaris-green">
                      <Check className="h-6 w-6" />
                    </div>
                    <p className="ml-3 text-gray-700">Organizations seeking to augment their internal capabilities</p>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" 
                  alt="Teams collaborating" 
                  className="max-w-full h-auto rounded-lg shadow-lg"
                />
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
                <h3 className="text-2xl font-bold mb-4">IT Transformation Support</h3>
                <p className="text-gray-700 mb-4">
                  A global manufacturing company needed specialized support during their IT transformation. They engaged ECARIS consultants on a daily rate basis to provide expertise in cloud migration and ERP implementation.
                </p>
                <p className="text-gray-700 mb-4">
                  Our flexible engagement model allowed them to scale resources as needed throughout different project phases, resulting in a successful transformation with minimized disruption to operations.
                </p>
                <div className="flex items-center mt-6">
                  <div className="mr-4 h-12 w-12 rounded-full bg-ecaris-green flex items-center justify-center text-white text-xl font-bold">
                    C
                  </div>
                  <div>
                    <p className="font-medium">Client CIO</p>
                    <p className="text-sm text-gray-600">Manufacturing Industry</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952" 
                  alt="IT transformation case study" 
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
