
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ArrowRight, Circle, ArrowDown } from 'lucide-react';
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
          
          {/* Project Approach - Vertical Timeline Diagram */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Project Approach</h2>
            
            <div className="relative bg-gray-50 rounded-lg p-8 overflow-hidden">
              {/* Vertical timeline */}
              <div className="flex flex-col items-center">
                
                {/* Step 1: Diagnosis */}
                <div className="w-full md:w-3/4 flex flex-col md:flex-row items-center mb-12 animate-fade-in">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-ecaris-green flex items-center justify-center text-white font-bold text-xl z-10 mb-4 md:mb-0">
                    1
                  </div>
                  <div className="md:ml-8 w-full">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold text-ecaris-green mb-3">Diagnosis</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <Circle className="h-3 w-3 text-ecaris-green mt-1.5 mr-2 flex-shrink-0" />
                          <span>Understanding needs</span>
                        </li>
                        <li className="flex items-start">
                          <Circle className="h-3 w-3 text-ecaris-green mt-1.5 mr-2 flex-shrink-0" />
                          <span>Defining the scope of the solution</span>
                        </li>
                        <li className="flex items-start">
                          <Circle className="h-3 w-3 text-ecaris-green mt-1.5 mr-2 flex-shrink-0" />
                          <span>Setting objectives</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Connecting arrow */}
                <div className="h-12 w-1 bg-ecaris-green mb-4"></div>
                <div className="h-6 w-6 flex items-center justify-center mb-4">
                  <ArrowDown className="h-8 w-8 text-ecaris-green" />
                </div>
                
                {/* Step 2: Scoping */}
                <div className="w-full md:w-3/4 flex flex-col md:flex-row items-center mb-12 animate-fade-in" style={{ animationDelay: "150ms" }}>
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-ecaris-green flex items-center justify-center text-white font-bold text-xl z-10 mb-4 md:mb-0">
                    2
                  </div>
                  <div className="md:ml-8 w-full">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold text-ecaris-green mb-3">Scoping (Specification Drafting)</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <Circle className="h-3 w-3 text-ecaris-green mt-1.5 mr-2 flex-shrink-0" />
                          <span>Definition of business and IT architecture</span>
                        </li>
                        <li className="flex items-start">
                          <Circle className="h-3 w-3 text-ecaris-green mt-1.5 mr-2 flex-shrink-0" />
                          <span>Technical scoping</span>
                        </li>
                        <li className="flex items-start">
                          <Circle className="h-3 w-3 text-ecaris-green mt-1.5 mr-2 flex-shrink-0" />
                          <span>Definition of a roadmap (timeline)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Connecting arrow */}
                <div className="h-12 w-1 bg-ecaris-green mb-4"></div>
                <div className="h-6 w-6 flex items-center justify-center mb-4">
                  <ArrowDown className="h-8 w-8 text-ecaris-green" />
                </div>
                
                {/* Step 3: Build */}
                <div className="w-full md:w-3/4 flex flex-col md:flex-row items-center mb-12 animate-fade-in" style={{ animationDelay: "300ms" }}>
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-ecaris-green flex items-center justify-center text-white font-bold text-xl z-10 mb-4 md:mb-0">
                    3
                  </div>
                  <div className="md:ml-8 w-full">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold text-ecaris-green mb-3">Build</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <Circle className="h-3 w-3 text-ecaris-green mt-1.5 mr-2 flex-shrink-0" />
                          <span>Data collection and annotation</span>
                        </li>
                        <li className="flex items-start">
                          <Circle className="h-3 w-3 text-ecaris-green mt-1.5 mr-2 flex-shrink-0" />
                          <span>Model implementation</span>
                        </li>
                        <li className="flex items-start">
                          <Circle className="h-3 w-3 text-ecaris-green mt-1.5 mr-2 flex-shrink-0" />
                          <span>Testing and performance optimization</span>
                        </li>
                        <li className="flex items-start">
                          <Circle className="h-3 w-3 text-ecaris-green mt-1.5 mr-2 flex-shrink-0" />
                          <span>Model adjustment based on feedback</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Connecting arrow */}
                <div className="h-12 w-1 bg-ecaris-green mb-4"></div>
                <div className="h-6 w-6 flex items-center justify-center mb-4">
                  <ArrowDown className="h-8 w-8 text-ecaris-green" />
                </div>
                
                {/* Step 4: Integration and Deployment */}
                <div className="w-full md:w-3/4 flex flex-col md:flex-row items-center mb-12 animate-fade-in" style={{ animationDelay: "450ms" }}>
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-ecaris-green flex items-center justify-center text-white font-bold text-xl z-10 mb-4 md:mb-0">
                    4
                  </div>
                  <div className="md:ml-8 w-full">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold text-ecaris-green mb-3">Integration and Deployment</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <Circle className="h-3 w-3 text-ecaris-green mt-1.5 mr-2 flex-shrink-0" />
                          <span>Integration of the solution into the environment</span>
                        </li>
                        <li className="flex items-start">
                          <Circle className="h-3 w-3 text-ecaris-green mt-1.5 mr-2 flex-shrink-0" />
                          <span>Implementation of the user interface</span>
                        </li>
                        <li className="flex items-start">
                          <Circle className="h-3 w-3 text-ecaris-green mt-1.5 mr-2 flex-shrink-0" />
                          <span>Unit and integration testing</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Connecting arrow */}
                <div className="h-12 w-1 bg-ecaris-green mb-4"></div>
                <div className="h-6 w-6 flex items-center justify-center mb-4">
                  <ArrowDown className="h-8 w-8 text-ecaris-green" />
                </div>
                
                {/* Step 5: Continuous Improvement */}
                <div className="w-full md:w-3/4 flex flex-col md:flex-row items-center mb-12 animate-fade-in" style={{ animationDelay: "600ms" }}>
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-ecaris-green flex items-center justify-center text-white font-bold text-xl z-10 mb-4 md:mb-0">
                    5
                  </div>
                  <div className="md:ml-8 w-full">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold text-ecaris-green mb-3">Continuous Improvement</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <Circle className="h-3 w-3 text-ecaris-green mt-1.5 mr-2 flex-shrink-0" />
                          <span>Collecting and analyzing user feedback</span>
                        </li>
                        <li className="flex items-start">
                          <Circle className="h-3 w-3 text-ecaris-green mt-1.5 mr-2 flex-shrink-0" />
                          <span>Implementation of monitoring and reporting systems</span>
                        </li>
                        <li className="flex items-start">
                          <Circle className="h-3 w-3 text-ecaris-green mt-1.5 mr-2 flex-shrink-0" />
                          <span>Planning of new features and improvements</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Diagram description */}
              <div className="mt-8 p-6 bg-white rounded-lg shadow-sm">
                <p className="text-gray-700 text-center">
                  Our comprehensive project approach ensures successful delivery from initial diagnosis to 
                  continuous improvement, with a focus on quality, efficiency, and client satisfaction at every step.
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
