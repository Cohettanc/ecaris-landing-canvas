
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Users, Clock, BarChart, Zap } from 'lucide-react';

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
      
      {/* Completely redesigned header with larger padding and more presence */}
      <section className="pt-72 pb-24 bg-ecaris-green text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            
            {/* Added image banner */}
            <div className="relative rounded-xl overflow-hidden mb-10 shadow-lg">
              <img 
                src="/images/daily-rate-team.jpg" 
                alt="Team of IT professionals collaborating" 
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-ecaris-green/70 to-transparent flex items-center">
                <div className="px-8 py-6 max-w-md text-white">
                  <h3 className="text-2xl font-bold mb-2">Expert Consultants</h3>
                  <p className="text-ecaris-light">Our consultants bring specialized skills directly to your team when you need them most.</p>
                </div>
              </div>
            </div>
            
            <p className="text-lg text-gray-700 mb-4">
              Our daily rate service model provides you with access to skilled consultants who can augment your team, provide specialized expertise, or lead key initiatives on a flexible basis.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              This approach is ideal for projects where scope might evolve, or when you need specialized support without committing to a fixed-price project.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <Card className="overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="/images/resource-flexibility.jpg" 
                    alt="Resource flexibility" 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-5 w-5 mr-2 text-ecaris-green" />
                    Resource Flexibility
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Scale resources up or down based on your project needs. Bring in experts only when you need them.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="/images/specialized-expertise.jpg" 
                    alt="Specialized expertise" 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart className="h-5 w-5 mr-2 text-ecaris-green" />
                    Specialized Expertise
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Access to consultants with specific skills and industry knowledge to address your unique challenges.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="/images/team-integration.jpg" 
                    alt="Team integration" 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="h-5 w-5 mr-2 text-ecaris-green" />
                    Team Integration
                  </CardTitle>
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
            
            {/* Added image and text in a flex layout */}
            <div className="flex flex-col md:flex-row gap-8 mb-10">
              <div className="md:w-1/2">
                <img 
                  src="/images/daily-rate-benefits.jpg" 
                  alt="Professionals working together" 
                  className="rounded-lg shadow-md w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Daily Rate Services?</h3>
                <p className="text-gray-700 mb-4">
                  With our daily rate model, you gain the flexibility to adapt to changing project requirements while maintaining budget control. Our experienced consultants integrate seamlessly with your team, bringing specialized knowledge exactly when you need it.
                </p>
                <p className="text-gray-700">
                  This approach enables knowledge transfer within your organization, ensuring that your team develops capabilities alongside our consultants.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-ecaris-green">
                  <Check className="h-6 w-6" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">Cost Control</h3>
                  <p className="mt-2 text-gray-700">Transparent pricing with agreed-upon daily rates and no hidden costs.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-ecaris-green">
                  <Check className="h-6 w-6" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">Adaptability</h3>
                  <p className="mt-2 text-gray-700">Easily adjust to changing requirements or priorities without contract renegotiation.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-ecaris-green">
                  <Check className="h-6 w-6" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">Knowledge Transfer</h3>
                  <p className="mt-2 text-gray-700">Our consultants work closely with your team, sharing expertise and best practices.</p>
                </div>
              </div>
              
              <div className="flex items-start">
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
          
          <div className="bg-gray-50 p-8 rounded-lg relative overflow-hidden">
            <div className="absolute right-0 top-0 h-full w-1/3 opacity-10">
              <img 
                src="/images/daily-rate-pattern.jpg" 
                alt="" 
                className="h-full w-full object-cover"
              />
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Ideal for</h2>
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
          </div>
        </div>
      </section>
      
      {/* Case Study Section - New */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">Client Success Story</h2>
          
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src="/images/case-study-daily-rate.jpg" 
                  alt="Case study client" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="text-sm font-medium text-ecaris-green mb-2">Financial Services</div>
                <h3 className="text-xl font-bold mb-4">System Migration Support</h3>
                <p className="text-gray-700 mb-4">
                  A leading financial institution needed specialized expertise to support their core banking system migration. Rather than hiring full-time employees for this temporary need, they engaged our consultants on a daily rate basis.
                </p>
                <p className="text-gray-700 mb-4">
                  Our team provided technical migration expertise, testing support, and knowledge transfer to internal teams. The client was able to scale resources up during critical phases and down during quieter periods.
                </p>
                <div className="mt-6 border-t pt-4">
                  <div className="font-medium">Results:</div>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-ecaris-green flex-shrink-0 mr-2 mt-0.5" />
                      <span>Successfully migrated within aggressive timeline</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-ecaris-green flex-shrink-0 mr-2 mt-0.5" />
                      <span>30% cost savings compared to fixed-price contract</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-ecaris-green flex-shrink-0 mr-2 mt-0.5" />
                      <span>Internal team upskilled through knowledge transfer</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-ecaris-green text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
