
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ArrowRight, ArrowDown, Circle, Server, Shield, Database, Plug, FileCode, Cloud, BarChart, Settings, Users, Activity } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ServiceProjectDelivery = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Update document title
    document.title = "ECARIS | Project Delivery Services";
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  const handleContactClick = () => {
    navigate('/#contact');
  };

  return (
    <div className="min-h-screen antialiased">
      <Navbar />
      
      {/* Completely redesigned header with larger padding, more presence, and background image */}
      <section className="pt-72 pb-24 bg-ecaris-green text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
            alt="Project delivery workspace" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <span className="text-ecaris-light font-medium">Defined Timelines & Budgets</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Project Delivery Services
            </h1>
            <p className="text-xl md:text-2xl text-ecaris-light max-w-3xl mx-auto">
              Delivering targeted IT initiatives within defined timelines and budgets
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction - REDESIGNED FOR ELEGANCE */}
          <div className="mb-16">
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg">
              <div className="grid md:grid-cols-5">
                {/* Image column - takes 2/5 of the space */}
                <div className="md:col-span-2 h-full">
                  <img 
                    src="/lovable-uploads/0d165bd2-ad63-4226-9adf-52abd159c180.png" 
                    alt="Team collaborating on project delivery" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Text column - takes 3/5 of the space */}
                <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center">
                  <h2 className="text-2xl font-bold text-ecaris-green mb-6">
                    Project-Based Delivery
                  </h2>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      <span className="font-semibold text-ecaris-green">ECARIS</span> delivers strategic and technical projects through a structured, fixed-price model. This approach is designed for initiatives with <span className="font-medium">clear objectives, timelines, and budgets</span> — where execution discipline and accountability are key.
                    </p>
                    <p className="text-gray-700">
                      Our senior consultants lead end-to-end delivery, from scoping and design to implementation, bringing a mix of deep expertise and strong delivery capabilities. We ensure that each engagement is aligned with business priorities and delivers measurable impact.
                    </p>
                    <p className="text-gray-700">
                      This model is particularly suited for <span className="italic">complex IT transformations, targeted technology deployments, and high-impact delivery sprints</span> — across domains such as data, cloud, ERP, integration, and automation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Project Approach - Interactive Accordion */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Project Approach</h2>
            
            <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="step-1">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-4">
                      <div className="bg-ecaris-green text-white font-bold text-2xl rounded-lg h-12 w-12 flex items-center justify-center">
                        1
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Diagnosis</h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-16">
                    <div className="space-y-4 text-gray-700">
                      <p>During the diagnosis phase, we:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Conduct thorough needs assessment</li>
                        <li>Analyze current systems and processes</li>
                        <li>Identify pain points and opportunities</li>
                        <li>Define project scope and objectives</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="step-2">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-4">
                      <div className="bg-ecaris-green text-white font-bold text-2xl rounded-lg h-12 w-12 flex items-center justify-center">
                        2
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Scoping (Specification Drafting)</h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-16">
                    <div className="space-y-4 text-gray-700">
                      <p>In the scoping phase, we:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Define technical architecture requirements</li>
                        <li>Create detailed project specifications</li>
                        <li>Establish project milestones</li>
                        <li>Draft implementation roadmap</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="step-3">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-4">
                      <div className="bg-ecaris-green text-white font-bold text-2xl rounded-lg h-12 w-12 flex items-center justify-center">
                        3
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Build</h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-16">
                    <div className="space-y-4 text-gray-700">
                      <p>During the build phase, we:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Implement core functionality</li>
                        <li>Develop and test features</li>
                        <li>Optimize performance</li>
                        <li>Conduct code reviews</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="step-4">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-4">
                      <div className="bg-ecaris-green text-white font-bold text-2xl rounded-lg h-12 w-12 flex items-center justify-center">
                        4
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Integration and Deployment</h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-16">
                    <div className="space-y-4 text-gray-700">
                      <p>In the integration phase, we:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Set up deployment environments</li>
                        <li>Perform integration testing</li>
                        <li>Execute deployment procedures</li>
                        <li>Validate system functionality</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="step-5">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-4">
                      <div className="bg-ecaris-green text-white font-bold text-2xl rounded-lg h-12 w-12 flex items-center justify-center">
                        5
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Continuous Improvement</h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-16">
                    <div className="space-y-4 text-gray-700">
                      <p>During continuous improvement, we:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Monitor system performance</li>
                        <li>Gather user feedback</li>
                        <li>Implement improvements</li>
                        <li>Plan future enhancements</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              
              <div className="mt-8 text-center text-gray-700 max-w-2xl mx-auto">
                <p>Our structured approach ensures successful project delivery from initial diagnosis through continuous improvement, with a focus on quality and client satisfaction.</p>
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
                src="/lovable-uploads/7590a5b0-f362-47c1-b847-cb0b95ea38de.png" 
                alt="Detailed Circuit Board Technology" 
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
          <Button 
            onClick={handleContactClick}
            className="bg-white text-ecaris-green hover:bg-gray-100 px-8 py-6 rounded-md font-medium transition-colors duration-300"
          >
            Contact Us
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ServiceProjectDelivery;
