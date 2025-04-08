
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

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
          
          {/* Project Approach - Updated for better aesthetics */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Project Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                <h3 className="text-lg font-semibold text-ecaris-green mb-4 border-b pb-2">01. Diagnosis</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-ecaris-green mr-2"></div>Understanding needs</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-ecaris-green mr-2"></div>Defining solution scope</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-ecaris-green mr-2"></div>Setting objectives</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                <h3 className="text-lg font-semibold text-ecaris-green mb-4 border-b pb-2">02. Scoping</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-ecaris-green mr-2"></div>Business & IT architecture</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-ecaris-green mr-2"></div>Technical requirements</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-ecaris-green mr-2"></div>Project roadmap</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                <h3 className="text-lg font-semibold text-ecaris-green mb-4 border-b pb-2">03. Build</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-ecaris-green mr-2"></div>Data collection</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-ecaris-green mr-2"></div>Implementation</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-ecaris-green mr-2"></div>Testing & optimization</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                <h3 className="text-lg font-semibold text-ecaris-green mb-4 border-b pb-2">04. Integration</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-ecaris-green mr-2"></div>Solution deployment</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-ecaris-green mr-2"></div>UI implementation</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-ecaris-green mr-2"></div>Testing & validation</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                <h3 className="text-lg font-semibold text-ecaris-green mb-4 border-b pb-2">05. Improvement</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-ecaris-green mr-2"></div>Feedback analysis</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-ecaris-green mr-2"></div>Monitoring systems</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-ecaris-green mr-2"></div>Feature planning</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-ecaris-green/5 to-ecaris-green/10 p-6 rounded-lg shadow-sm border border-ecaris-green/20 hover:shadow-md transition-all duration-300">
                <h3 className="text-lg font-semibold text-ecaris-green mb-4 border-b pb-2">Our Methodology</h3>
                <p className="text-gray-700">
                  Our proven 5-step methodology ensures seamless project delivery, from initial diagnosis to continuous improvement, with dedicated expertise at every stage.
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
