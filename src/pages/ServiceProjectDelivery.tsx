
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ArrowRight, Circle } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const ServiceProjectDelivery = () => {
  useEffect(() => {
    // Update document title
    document.title = "ECARIS | Project Delivery Services";
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen antialiased">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-40 pb-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Project Delivery Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering targeted IT initiatives within defined timelines and budgets
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="mb-16">
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                ECARIS is also able to provide its services in a project-based mode. These projects typically focus on delivering specific IT initiatives within a defined timeline and budget.
              </p>
            </div>
          </div>
          
          {/* Image Section */}
          <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                alt="Software Development" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                alt="Team Collaboration" 
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
          
          {/* Project Types */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Examples of Previously Completed Projects</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-ecaris-green">New Product Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Development of a new product or a secondary product included in the product roadmap
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-ecaris-green">IT Infrastructure Implementation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Deployment of new hardware, software, or networks
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-ecaris-green">Systems Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Connecting different IT systems to work together seamlessly
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-ecaris-green">IT Security Assessments</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Identifying and mitigating security vulnerabilities
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-ecaris-green">Business Process Automation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Using technology to streamline workflows and improve efficiency
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Project Approach - Updated with a diagram */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Project Approach</h2>
            
            <div className="relative px-4 py-10">
              {/* Diagram */}
              <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-0 relative">
                {/* Step 1: Diagnosis */}
                <div className="z-10 flex flex-col items-center w-full md:w-1/4">
                  <div className="w-16 h-16 bg-ecaris-green rounded-full flex items-center justify-center mb-4 text-white">
                    <span className="text-xl font-bold">01</span>
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-ecaris-green mb-2">Diagnosis</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>Understanding needs</li>
                      <li>Defining solution scope</li>
                      <li>Setting objectives</li>
                    </ul>
                  </div>
                </div>
                
                {/* Step 2: Scoping */}
                <div className="z-10 flex flex-col items-center w-full md:w-1/4">
                  <div className="w-16 h-16 bg-ecaris-green rounded-full flex items-center justify-center mb-4 text-white">
                    <span className="text-xl font-bold">02</span>
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-ecaris-green mb-2">Scoping</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>Business & IT architecture</li>
                      <li>Technical requirements</li>
                      <li>Project roadmap</li>
                    </ul>
                  </div>
                </div>
                
                {/* Step 3: Build */}
                <div className="z-10 flex flex-col items-center w-full md:w-1/4">
                  <div className="w-16 h-16 bg-ecaris-green rounded-full flex items-center justify-center mb-4 text-white">
                    <span className="text-xl font-bold">03</span>
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-ecaris-green mb-2">Build</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>Data collection</li>
                      <li>Model implementation</li>
                      <li>Testing & optimization</li>
                    </ul>
                  </div>
                </div>
                
                {/* Step 4: Integration & Improvement */}
                <div className="z-10 flex flex-col items-center w-full md:w-1/4">
                  <div className="w-16 h-16 bg-ecaris-green rounded-full flex items-center justify-center mb-4 text-white">
                    <span className="text-xl font-bold">04</span>
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-ecaris-green mb-2">Integration</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>Solution deployment</li>
                      <li>Integration testing</li>
                      <li>Continuous improvement</li>
                    </ul>
                  </div>
                </div>
                
                {/* Connecting line */}
                <div className="hidden md:block absolute top-8 left-1/8 right-1/8 h-1 bg-ecaris-green/30 w-3/4 mx-auto"></div>
              </div>
              
              {/* Diagram description */}
              <div className="mt-16 bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 text-center">
                  Our cyclical approach ensures continuous improvement throughout the project lifecycle. 
                  Each phase feeds into the next, creating a feedback loop that optimizes results and drives innovation.
                </p>
              </div>
            </div>
          </div>
          
          {/* Bottom Image */}
          <div className="mb-16">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                alt="Software Development" 
                className="w-full h-72 object-cover"
              />
            </div>
          </div>
          
          {/* Benefits */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Benefits of Our Project Delivery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 text-ecaris-green">
                  <Check className="h-6 w-6" />
                </div>
                <p className="ml-3 text-gray-700">Fixed timeline and budget for better planning</p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 text-ecaris-green">
                  <Check className="h-6 w-6" />
                </div>
                <p className="ml-3 text-gray-700">Specialized expertise for specific project needs</p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 text-ecaris-green">
                  <Check className="h-6 w-6" />
                </div>
                <p className="ml-3 text-gray-700">Dedicated project management for smooth delivery</p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 text-ecaris-green">
                  <Check className="h-6 w-6" />
                </div>
                <p className="ml-3 text-gray-700">Clear deliverables and success criteria</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-ecaris-green text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to start your next project?</h2>
          <p className="text-xl mb-8 text-ecaris-light">
            Contact us today to discuss how our project-based services can help you achieve your business objectives.
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

export default ServiceProjectDelivery;
