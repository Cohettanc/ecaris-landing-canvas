import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Workflow, Building2, ServerCog, Database, Archive } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const StrategyArchitecture = () => {
  useEffect(() => {
    // Update document title
    document.title = "ECARIS | Strategy and IT Architecture";
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-ecaris-green/90 to-ecaris-green pt-24 pb-16 text-white">
          <div className="section-container">
            <div className="mb-6">
              <Link to="/" className="inline-flex items-center text-white/90 hover:text-white">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </div>
            <h1 className="heading-lg mb-6 max-w-3xl">Strategy and IT Architecture</h1>
            <p className="text-xl text-white/90 max-w-3xl mb-8">
              We design and implement IT master plans, ensuring alignment between business and technology. 
              Our services include system urbanization, application portfolio rationalization, and the scoping 
              of complex transformation projects to support your strategic trajectory.
            </p>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16">
          <div className="section-container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="heading-md mb-6">Strategic IT Planning</h2>
                <p className="text-gray-700 mb-4">
                  At ECARIS, we take a comprehensive, business-first approach to IT architecture and strategy. 
                  We believe that technology should serve business objectives, not the other way around. 
                  Our consultants combine deep technical expertise with business acumen to create solutions that drive real value.
                </p>
                <p className="text-gray-700 mb-6">
                  We work collaboratively with your teams to understand your unique challenges and opportunities, 
                  then design tailored solutions that leverage best practices while addressing your specific context.
                  Our methodology emphasizes pragmatic, actionable plans over theoretical frameworks, ensuring that 
                  our recommendations can be implemented effectively to achieve tangible results.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link to="/#contact">
                    <Button className="bg-ecaris-green">Contact Us</Button>
                  </Link>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop" 
                  alt="Strategy and IT Architecture" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-white">
          <div className="section-container">
            <h2 className="heading-md text-center mb-12">Our Strategy & Architecture Services</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-t-4 border-t-ecaris-green">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <Workflow className="h-10 w-10 text-ecaris-green" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Strategic IT Planning</h3>
                  <p className="text-gray-700">
                    We work with your leadership team to create comprehensive IT roadmaps that align with your business objectives. Our strategic planning considers current technological capabilities, anticipated business growth, and evolving market demands.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-t-4 border-t-ecaris-green">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <Building2 className="h-10 w-10 text-ecaris-green" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Enterprise Architecture</h3>
                  <p className="text-gray-700">
                    Our enterprise architecture services help organizations design, plan, and implement technology solutions that support business goals. We create architectural frameworks that promote agility, scalability, and cost-effectiveness.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-t-4 border-t-ecaris-green">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <ServerCog className="h-10 w-10 text-ecaris-green" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">System Urbanization</h3>
                  <p className="text-gray-700">
                    We help rationalize your IT landscape by organizing systems into coherent zones, ensuring clear interfaces between components. This systematic approach improves maintainability and reduces redundancy.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-t-4 border-t-ecaris-green">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <Archive className="h-10 w-10 text-ecaris-green" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Application Portfolio Management</h3>
                  <p className="text-gray-700">
                    Our application portfolio rationalization services help you evaluate your existing applications, identify redundancies, and make informed decisions about which applications to invest in, retire, or replace.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-t-4 border-t-ecaris-green">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <Database className="h-10 w-10 text-ecaris-green" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Digital Transformation Planning</h3>
                  <p className="text-gray-700">
                    We help scope and plan complex digital transformation initiatives, breaking large projects into manageable components with clear dependencies, timelines, and resource requirements.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Case Studies */}
        <section className="py-16 bg-gray-50">
          <div className="section-container">
            <h2 className="heading-md text-center mb-12">Success Stories</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Global Logistics Leader - Port Operations IT Strategy</h3>
                  <p className="text-gray-600 mb-2">IT Strategy & Architecture Transformation</p>
                  <p className="text-gray-700 mb-4">
                    We supported a major logistics operator in defining the IT master plan for a large vehicle port on the Suez Canal. The project involved designing the deployment roadmap for key systems — including WMS, TMS, and cybersecurity solutions — to streamline port operations, improve traceability, and ensure secure, scalable infrastructure aligned with business growth.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Top-Tier Insurance Group – IT Carve-Out Strategy</h3>
                  <p className="text-gray-600 mb-2">Carve-Out Planning & Execution</p>
                  <p className="text-gray-700 mb-4">
                    We defined the IT carve-out strategy for the subsidiary of a major insurance group, supporting its transition to full operational and technological autonomy. The engagement covered the separation of infrastructure, applications, and data, with a strong focus on business continuity, security, and regulatory compliance. Our work provided a clear roadmap for the stand-alone entity's future IT landscape, enabling it to scale independently while maintaining alignment with group standards during the transition phase.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="section-container max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-12">Frequently Asked Questions</h2>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  How do you approach enterprise architecture?
                </AccordionTrigger>
                <AccordionContent>
                  Our approach to enterprise architecture is pragmatic and business-outcome focused. We begin with understanding your business strategy and goals, then assess your current architecture, identify gaps, and develop a target architecture that supports your objectives. We create roadmaps that balance short-term wins with long-term vision, ensuring that all stakeholders understand the path forward.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  How long does it typically take to develop an IT strategy?
                </AccordionTrigger>
                <AccordionContent>
                  The timeline for developing an IT strategy varies based on organizational complexity, but typically ranges from 8-12 weeks. This includes stakeholder interviews, current state assessment, future state definition, gap analysis, and roadmap development. We prioritize efficiency while ensuring thorough stakeholder engagement to build consensus and support for the strategy.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  What frameworks do you use for strategy development?
                </AccordionTrigger>
                <AccordionContent>
                  We leverage industry-standard frameworks such as TOGAF, Zachman, and ITIL, but adapt them to fit your specific context rather than applying them rigidly. Our consultants are certified in these frameworks but prioritize practical outcomes over theoretical purity. We believe that frameworks should serve as useful tools rather than constraining straitjackets.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  How do you measure the success of strategy and architecture initiatives?
                </AccordionTrigger>
                <AccordionContent>
                  We establish clear success metrics at the outset of each engagement, tailored to your specific objectives. These typically include both technical metrics (e.g., reduced technical debt, improved system performance) and business outcomes (e.g., faster time-to-market, cost savings, improved customer experience). We implement regular checkpoints to track progress and make adjustments as needed.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-ecaris-green text-white">
          <div className="section-container text-center">
            <h2 className="heading-md mb-6">Ready to Transform Your IT Strategy?</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Let our experts help you build a future-proof IT foundation that aligns with your business objectives and drives growth.
            </p>
            <Link to="/#contact">
              <Button className="bg-white text-ecaris-green px-8 py-3 hover:bg-white/90">
                Contact Us
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default StrategyArchitecture;
