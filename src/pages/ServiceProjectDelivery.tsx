
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ArrowRight, ArrowDown, Circle, Server, Shield, Database, Plug, FileCode, Cloud, BarChart, Settings, Users, Activity } from 'lucide-react';
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
      
      {/* Header Section - Significantly increased padding top to pt-48 to ensure it's fully visible below navbar */}
      <section className="pt-48 pb-16 bg-gray-50">
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
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                alt="Software Development" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                alt="Team Collaboration" 
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
          
          {/* Project Approach - New Modern Diagram */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Project Approach</h2>
            
            <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
              <div className="grid grid-cols-1 gap-4">
                {/* Step 1: Diagnosis */}
                <div className="bg-white rounded-xl p-6 border-l-4 border-ecaris-green">
                  <div className="flex items-center gap-4">
                    <div className="bg-ecaris-green text-white font-bold text-2xl rounded-lg h-12 w-12 flex items-center justify-center">
                      1
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Diagnosis</h3>
                  </div>
                  <p className="ml-16 text-gray-700 mt-2">
                    Understand needs and define the solution's scope.
                  </p>
                </div>

                {/* Arrow Connector */}
                <div className="flex justify-center">
                  <ArrowDown className="text-ecaris-green h-8 w-8" />
                </div>

                {/* Step 2: Scoping */}
                <div className="bg-white rounded-xl p-6 border-l-4 border-ecaris-green">
                  <div className="flex items-center gap-4">
                    <div className="bg-ecaris-green text-white font-bold text-2xl rounded-lg h-12 w-12 flex items-center justify-center">
                      2
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Scoping (Specification Drafting)</h3>
                  </div>
                  <p className="ml-16 text-gray-700 mt-2">
                    Establish business and technical architecture; define the roadmap.
                  </p>
                </div>

                {/* Arrow Connector */}
                <div className="flex justify-center">
                  <ArrowDown className="text-ecaris-green h-8 w-8" />
                </div>

                {/* Step 3: Build */}
                <div className="bg-white rounded-xl p-6 border-l-4 border-ecaris-green">
                  <div className="flex items-center gap-4">
                    <div className="bg-ecaris-green text-white font-bold text-2xl rounded-lg h-12 w-12 flex items-center justify-center">
                      3
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Build</h3>
                  </div>
                  <p className="ml-16 text-gray-700 mt-2">
                    Collect data, implement the model, and optimize performance.
                  </p>
                </div>

                {/* Arrow Connector */}
                <div className="flex justify-center">
                  <ArrowDown className="text-ecaris-green h-8 w-8" />
                </div>

                {/* Step 4: Integration and Deployment */}
                <div className="bg-white rounded-xl p-6 border-l-4 border-ecaris-green">
                  <div className="flex items-center gap-4">
                    <div className="bg-ecaris-green text-white font-bold text-2xl rounded-lg h-12 w-12 flex items-center justify-center">
                      4
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Integration and Deployment</h3>
                  </div>
                  <p className="ml-16 text-gray-700 mt-2">
                    Integrate the solution into the environment and conduct necessary tests.
                  </p>
                </div>

                {/* Arrow Connector */}
                <div className="flex justify-center">
                  <ArrowDown className="text-ecaris-green h-8 w-8" />
                </div>

                {/* Step 5: Continuous Improvement */}
                <div className="bg-white rounded-xl p-6 border-l-4 border-ecaris-green">
                  <div className="flex items-center gap-4">
                    <div className="bg-ecaris-green text-white font-bold text-2xl rounded-lg h-12 w-12 flex items-center justify-center">
                      5
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Continuous Improvement</h3>
                  </div>
                  <p className="ml-16 text-gray-700 mt-2">
                    Analyze user feedback and plan future enhancements.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 text-center text-gray-700 max-w-2xl mx-auto">
                <p>
                  Our structured approach ensures successful project delivery from initial diagnosis 
                  through continuous improvement, with a focus on quality and client satisfaction.
                </p>
              </div>
            </div>
          </div>
          
          {/* Project Categories - UPDATED SECTION */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Project Categories</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1: AI, Data & Governance */}
              <Card className="border-l-4 border-ecaris-green hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="bg-ecaris-green/10 p-2 rounded-full">
                      <BarChart className="h-6 w-6 text-ecaris-green" />
                    </div>
                    <CardTitle className="text-xl">AI, Data & Governance</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">
                    Design of data/AI products, launch of data governance programs (maturity assessment, policies, tooling), business-focused use cases.
                  </p>
                </CardContent>
              </Card>
              
              {/* Card 2: Cloud & Infrastructure */}
              <Card className="border-l-4 border-ecaris-green hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="bg-ecaris-green/10 p-2 rounded-full">
                      <Cloud className="h-6 w-6 text-ecaris-green" />
                    </div>
                    <CardTitle className="text-xl">Cloud & Infrastructure</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">
                    Cloud strategy (public, private, hybrid), infrastructure migration (audit, target architecture, execution, FinOps), cloud cost optimization.
                  </p>
                </CardContent>
              </Card>
              
              {/* Card 3: ERP & Business Applications */}
              <Card className="border-l-4 border-ecaris-green hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="bg-ecaris-green/10 p-2 rounded-full">
                      <Settings className="h-6 w-6 text-ecaris-green" />
                    </div>
                    <CardTitle className="text-xl">ERP & Business Applications</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">
                    ERP modernization sprints, targeted implementation or evolution projects (modules, integrations, UX), cloud readiness assessments.
                  </p>
                </CardContent>
              </Card>
              
              {/* Card 4: System Integration & APIs */}
              <Card className="border-l-4 border-ecaris-green hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="bg-ecaris-green/10 p-2 rounded-full">
                      <Plug className="h-6 w-6 text-ecaris-green" />
                    </div>
                    <CardTitle className="text-xl">System Integration & APIs</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">
                    Integration architecture (ESB, iPaaS, microservices), API lifecycle management (exposure, security, developer portals), system interoperability.
                  </p>
                </CardContent>
              </Card>
              
              {/* Card 5: Business Process Automation */}
              <Card className="border-l-4 border-ecaris-green hover:shadow-lg transition-shadow duration-300 md:col-span-2 lg:col-span-1 lg:col-start-1 lg:col-end-3">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="bg-ecaris-green/10 p-2 rounded-full">
                      <Activity className="h-6 w-6 text-ecaris-green" />
                    </div>
                    <CardTitle className="text-xl">Business Process Automation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">
                    Process automation using RPA, low-code, and BPM tools. Focus on high-ROI workflows (e.g., Order-to-Cash, Procure-to-Pay).
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Bottom Image */}
          <div className="mb-16">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
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
