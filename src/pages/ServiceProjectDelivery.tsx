
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Target, Package, FileCheck, Zap } from 'lucide-react';

const ServiceProjectDelivery = () => {
  useEffect(() => {
    // Update document title
    document.title = "ECARIS | Services on Project Delivery Basis";
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
              Services on Project Delivery Basis
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end project execution with fixed deliverables, timelines, and costs for predictable outcomes.
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
              Our project delivery model provides certainty in scope, timeline, and budget. We take full responsibility for delivering the agreed outcomes, managing all aspects of the project from planning to implementation.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              This approach is ideal for well-defined initiatives where you need predictable costs and delivery timeframes.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
              <Card className="border-l-4 border-l-ecaris-green">
                <CardHeader>
                  <Target className="h-8 w-8 text-ecaris-green mb-2" />
                  <CardTitle>Discovery & Planning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    We analyze your requirements and develop a comprehensive project plan with clear deliverables.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-ecaris-green">
                <CardHeader>
                  <Package className="h-8 w-8 text-ecaris-green mb-2" />
                  <CardTitle>Fixed-Scope Agreement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    We establish clear deliverables, timelines, and costs before project commencement.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-ecaris-green">
                <CardHeader>
                  <Zap className="h-8 w-8 text-ecaris-green mb-2" />
                  <CardTitle>Execution</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Our team implements the solution with regular progress updates and quality assurance.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-ecaris-green">
                <CardHeader>
                  <FileCheck className="h-8 w-8 text-ecaris-green mb-2" />
                  <CardTitle>Delivery & Handover</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    We complete the project, ensure all success criteria are met, and provide comprehensive documentation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-ecaris-green">
                  <Check className="h-6 w-6" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">Budget Certainty</h3>
                  <p className="mt-2 text-gray-700">Fixed price with no unexpected costs or budget overruns.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-ecaris-green">
                  <Check className="h-6 w-6" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">Defined Scope</h3>
                  <p className="mt-2 text-gray-700">Clear deliverables with documented success criteria and specifications.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-ecaris-green">
                  <Check className="h-6 w-6" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">Timeline Assurance</h3>
                  <p className="mt-2 text-gray-700">Committed delivery dates with project management to maintain progress.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-ecaris-green">
                  <Check className="h-6 w-6" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">Reduced Management Overhead</h3>
                  <p className="mt-2 text-gray-700">We handle all project management aspects, allowing your team to focus on core responsibilities.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-ecaris-green">
                  <Check className="h-6 w-6" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">Risk Mitigation</h3>
                  <p className="mt-2 text-gray-700">We assume delivery risk, with contractual guarantees protecting your interests.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-ecaris-green">
                  <Check className="h-6 w-6" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">Quality Assurance</h3>
                  <p className="mt-2 text-gray-700">Rigorous testing and quality control processes ensure deliverables meet specifications.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Ideal for</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-ecaris-green">
                  <Check className="h-6 w-6" />
                </div>
                <p className="ml-3 text-gray-700">Well-defined projects with clear scope and deliverables</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-ecaris-green">
                  <Check className="h-6 w-6" />
                </div>
                <p className="ml-3 text-gray-700">Organizations requiring budget predictability</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-ecaris-green">
                  <Check className="h-6 w-6" />
                </div>
                <p className="ml-3 text-gray-700">Critical initiatives with firm deadlines</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-ecaris-green">
                  <Check className="h-6 w-6" />
                </div>
                <p className="ml-3 text-gray-700">Projects requiring specialized expertise that isn't needed long-term</p>
              </li>
            </ul>
          </div>
          
          {/* Case Study Section */}
          <div className="mt-16 bg-white p-8 border border-gray-200 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Case Study: ERP Implementation</h2>
            <p className="text-gray-700 mb-4">
              A leading manufacturing company needed to implement a new ERP system with tight integration requirements and a fixed go-live date. Using our project delivery model, we:
            </p>
            <ul className="space-y-3 mb-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 text-ecaris-green">
                  <Check className="h-5 w-5" />
                </div>
                <p className="ml-3 text-gray-700">Delivered a fully integrated ERP solution on time and on budget</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 text-ecaris-green">
                  <Check className="h-5 w-5" />
                </div>
                <p className="ml-3 text-gray-700">Reduced implementation time by 20% compared to industry standards</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 text-ecaris-green">
                  <Check className="h-5 w-5" />
                </div>
                <p className="ml-3 text-gray-700">Achieved 99.8% system availability from day one</p>
              </li>
            </ul>
            <p className="text-gray-700 italic">
              "ECARIS delivered exactly what they promised, on time and with exceptional quality. Their project delivery approach gave us complete confidence throughout the process."
            </p>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-ecaris-green text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to start your next project with predictable results?</h2>
          <p className="text-xl mb-8 text-ecaris-light">
            Contact us today to discuss how our project delivery approach can help you achieve your business objectives.
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
