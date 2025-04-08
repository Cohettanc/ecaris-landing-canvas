
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ArrowRight, ArrowDown, Circle } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

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
          
          {/* Project Approach - New Modern Diagram */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Project Approach</h2>
            
            <div className="w-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 shadow-lg">
              {/* Modern Diagram Container */}
              <div className="relative">
                {/* Central Vertical Line */}
                <div className="absolute left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-ecaris-green via-ecaris-accent to-ecaris-green transform -translate-x-1/2"></div>
                
                {/* Timeline Step Items */}
                <div className="grid grid-cols-1 gap-16">
                  {/* Stage 1: Diagnosis */}
                  <div className="relative">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                      {/* Stage Number */}
                      <div className="z-10 flex-shrink-0 w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center text-3xl font-bold text-ecaris-green border-4 border-ecaris-green">
                        1
                      </div>
                      
                      {/* Stage Content */}
                      <div className="w-full md:w-[calc(100%-4rem)] bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 duration-300">
                        <h3 className="text-xl font-bold text-ecaris-green mb-3">Diagnosis</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Circle className="h-2 w-2 text-ecaris-green mt-2 mr-2 flex-shrink-0" />
                            <span className="text-gray-700">Understanding needs</span>
                          </li>
                          <li className="flex items-start">
                            <Circle className="h-2 w-2 text-ecaris-green mt-2 mr-2 flex-shrink-0" />
                            <span className="text-gray-700">Defining the scope of the solution</span>
                          </li>
                          <li className="flex items-start">
                            <Circle className="h-2 w-2 text-ecaris-green mt-2 mr-2 flex-shrink-0" />
                            <span className="text-gray-700">Setting objectives</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* Arrow Down */}
                    <div className="absolute left-1/2 bottom-[-2rem] transform -translate-x-1/2">
                      <ArrowDown className="h-8 w-8 text-ecaris-green" />
                    </div>
                  </div>
                  
                  {/* Stage 2: Scoping */}
                  <div className="relative">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                      {/* Stage Number */}
                      <div className="z-10 flex-shrink-0 w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center text-3xl font-bold text-ecaris-green border-4 border-ecaris-green">
                        2
                      </div>
                      
                      {/* Stage Content */}
                      <div className="w-full md:w-[calc(100%-4rem)] bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 duration-300">
                        <h3 className="text-xl font-bold text-ecaris-green mb-3">Scoping (Specification drafting)</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Circle className="h-2 w-2 text-ecaris-green mt-2 mr-2 flex-shrink-0" />
                            <span className="text-gray-700">Definition of business and IT architecture</span>
                          </li>
                          <li className="flex items-start">
                            <Circle className="h-2 w-2 text-ecaris-green mt-2 mr-2 flex-shrink-0" />
                            <span className="text-gray-700">Technical scoping</span>
                          </li>
                          <li className="flex items-start">
                            <Circle className="h-2 w-2 text-ecaris-green mt-2 mr-2 flex-shrink-0" />
                            <span className="text-gray-700">Definition of a roadmap (timeline)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* Arrow Down */}
                    <div className="absolute left-1/2 bottom-[-2rem] transform -translate-x-1/2">
                      <ArrowDown className="h-8 w-8 text-ecaris-green" />
                    </div>
                  </div>
                  
                  {/* Stage 3: Build */}
                  <div className="relative">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                      {/* Stage Number */}
                      <div className="z-10 flex-shrink-0 w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center text-3xl font-bold text-ecaris-green border-4 border-ecaris-green">
                        3
                      </div>
                      
                      {/* Stage Content */}
                      <div className="w-full md:w-[calc(100%-4rem)] bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 duration-300">
                        <h3 className="text-xl font-bold text-ecaris-green mb-3">Build</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <Circle className="h-2 w-2 text-ecaris-green mt-2 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">Data collection and annotation</span>
                            </li>
                            <li className="flex items-start">
                              <Circle className="h-2 w-2 text-ecaris-green mt-2 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">Model implementation</span>
                            </li>
                          </ul>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <Circle className="h-2 w-2 text-ecaris-green mt-2 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">Testing and performance optimization</span>
                            </li>
                            <li className="flex items-start">
                              <Circle className="h-2 w-2 text-ecaris-green mt-2 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">Model adjustment based on internal user feedback</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* Arrow Down */}
                    <div className="absolute left-1/2 bottom-[-2rem] transform -translate-x-1/2">
                      <ArrowDown className="h-8 w-8 text-ecaris-green" />
                    </div>
                  </div>
                  
                  {/* Stage 4: Integration and Deployment */}
                  <div className="relative">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                      {/* Stage Number */}
                      <div className="z-10 flex-shrink-0 w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center text-3xl font-bold text-ecaris-green border-4 border-ecaris-green">
                        4
                      </div>
                      
                      {/* Stage Content */}
                      <div className="w-full md:w-[calc(100%-4rem)] bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 duration-300">
                        <h3 className="text-xl font-bold text-ecaris-green mb-3">Integration and Deployment</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Circle className="h-2 w-2 text-ecaris-green mt-2 mr-2 flex-shrink-0" />
                            <span className="text-gray-700">Integration of the solution into the environment</span>
                          </li>
                          <li className="flex items-start">
                            <Circle className="h-2 w-2 text-ecaris-green mt-2 mr-2 flex-shrink-0" />
                            <span className="text-gray-700">Implementation of the user interface</span>
                          </li>
                          <li className="flex items-start">
                            <Circle className="h-2 w-2 text-ecaris-green mt-2 mr-2 flex-shrink-0" />
                            <span className="text-gray-700">Unit and integration testing</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* Arrow Down */}
                    <div className="absolute left-1/2 bottom-[-2rem] transform -translate-x-1/2">
                      <ArrowDown className="h-8 w-8 text-ecaris-green" />
                    </div>
                  </div>
                  
                  {/* Stage 5: Continuous Improvement */}
                  <div className="relative">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                      {/* Stage Number */}
                      <div className="z-10 flex-shrink-0 w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center text-3xl font-bold text-ecaris-green border-4 border-ecaris-green">
                        5
                      </div>
                      
                      {/* Stage Content */}
                      <div className="w-full md:w-[calc(100%-4rem)] bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 duration-300">
                        <h3 className="text-xl font-bold text-ecaris-green mb-3">Continuous Improvement</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Circle className="h-2 w-2 text-ecaris-green mt-2 mr-2 flex-shrink-0" />
                            <span className="text-gray-700">Collecting and analyzing user feedback</span>
                          </li>
                          <li className="flex items-start">
                            <Circle className="h-2 w-2 text-ecaris-green mt-2 mr-2 flex-shrink-0" />
                            <span className="text-gray-700">Implementation of monitoring and reporting systems</span>
                          </li>
                          <li className="flex items-start">
                            <Circle className="h-2 w-2 text-ecaris-green mt-2 mr-2 flex-shrink-0" />
                            <span className="text-gray-700">Planning of new features and improvements</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Diagram description */}
              <div className="mt-12 bg-white rounded-xl p-6 shadow-sm">
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
          <Button className="bg-white text-ecaris-green hover:bg-gray-100 px-8 py-6 rounded-md font-medium transition-colors duration-300">
            Contact Us
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ServiceProjectDelivery;
