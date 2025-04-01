
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Database, LayoutGrid, Laptop, CreditCard, Boxes, ArrowRightLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const ErpApplications = () => {
  useEffect(() => {
    // Update document title
    document.title = "ECARIS | ERP, Business Platforms and Applications";
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
            <h1 className="heading-lg mb-6 max-w-3xl">ERP, Business Platforms and Applications</h1>
            <p className="text-xl text-white/90 max-w-3xl mb-8">
              Strategic implementation and optimization of business-critical applications to drive operational excellence and digital transformation.
            </p>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16">
          <div className="section-container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="heading-md mb-6">Enterprise Application Excellence</h2>
                <p className="text-gray-700 mb-4">
                  We help organizations modernize, integrate, and optimize their critical business applications and ERP systems to improve operational efficiency and drive strategic value.
                </p>
                <p className="text-gray-700 mb-6">
                  Our expertise spans across leading enterprise platforms including SAP, Oracle, Microsoft Dynamics, Salesforce, and other SaaS solutions, ensuring your business systems align with your organizational goals.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button className="bg-ecaris-green">Request a Consultation</Button>
                  <Button variant="outline">Download Capabilities</Button>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop" 
                  alt="ERP and Business Applications" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-white">
          <div className="section-container">
            <h2 className="heading-md text-center mb-12">Our Application Services</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-t-4 border-t-ecaris-green">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <Database className="h-10 w-10 text-ecaris-green" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">ERP Implementation & Integration</h3>
                  <p className="text-gray-700">
                    We design, implement, and integrate enterprise resource planning solutions tailored to your specific business requirements and industry challenges.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-t-4 border-t-ecaris-green">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <LayoutGrid className="h-10 w-10 text-ecaris-green" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">CRM & Business Platforms</h3>
                  <p className="text-gray-700">
                    Our experts implement and customize CRM and business platforms to enhance customer relationships, streamline processes, and drive revenue growth.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-t-4 border-t-ecaris-green">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <Laptop className="h-10 w-10 text-ecaris-green" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Application Modernization</h3>
                  <p className="text-gray-700">
                    We transform legacy applications into modern, cloud-native solutions that improve performance, scalability, and user experience.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-t-4 border-t-ecaris-green">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <CreditCard className="h-10 w-10 text-ecaris-green" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">SaaS Implementation</h3>
                  <p className="text-gray-700">
                    We help you select, implement, and optimize Software-as-a-Service applications that align with your business objectives and technical requirements.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-t-4 border-t-ecaris-green">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <Boxes className="h-10 w-10 text-ecaris-green" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Application Lifecycle Management</h3>
                  <p className="text-gray-700">
                    Our comprehensive ALM services optimize your application portfolio from requirements to retirement, ensuring maximum value and minimal technical debt.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-t-4 border-t-ecaris-green">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <ArrowRightLeft className="h-10 w-10 text-ecaris-green" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Application Integration</h3>
                  <p className="text-gray-700">
                    We create seamless connections between your business applications, enabling data flow and process automation across your organization.
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
                  <h3 className="text-xl font-bold mb-3">Manufacturing Company</h3>
                  <p className="text-gray-600 mb-2">ERP Transformation</p>
                  <p className="text-gray-700 mb-4">
                    We led a comprehensive ERP transformation for a global manufacturing company, consolidating multiple legacy systems into a unified platform, resulting in a 35% reduction in operational costs and a 50% improvement in supply chain visibility.
                  </p>
                  <p className="text-ecaris-green">Read case study →</p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Retail Organization</h3>
                  <p className="text-gray-600 mb-2">Omnichannel CRM Implementation</p>
                  <p className="text-gray-700 mb-4">
                    We designed and implemented an omnichannel CRM solution for a major retail organization, enabling seamless customer experiences across online and physical stores, which led to a 28% increase in customer retention and a 15% boost in sales.
                  </p>
                  <p className="text-ecaris-green">Read case study →</p>
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
                  How do you approach ERP implementation projects?
                </AccordionTrigger>
                <AccordionContent>
                  Our approach to ERP implementation follows a structured methodology: discovery and requirements gathering, solution design, configuration and customization, data migration, testing, training, go-live support, and continuous improvement. We emphasize change management throughout the process to ensure successful adoption and maximize business value.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  What ERP and business application platforms do you support?
                </AccordionTrigger>
                <AccordionContent>
                  We have expertise across all major ERP and business application platforms, including SAP, Oracle, Microsoft Dynamics, Salesforce, ServiceNow, Workday, and numerous industry-specific solutions. Our consultants are certified in these platforms and bring deep domain knowledge to ensure optimal implementation and utilization.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  How do you manage application integration challenges?
                </AccordionTrigger>
                <AccordionContent>
                  We address integration challenges through a comprehensive approach that includes integration strategy development, architecture design, API management, middleware implementation, and robust testing. We leverage modern integration patterns and technologies like ESBs, iPaaS solutions, and API gateways to create seamless connections between applications while maintaining data integrity and performance.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  What is your approach to application cloudification?
                </AccordionTrigger>
                <AccordionContent>
                  Our application cloudification approach involves assessing your current applications, defining a cloud strategy, refactoring or rearchitecting applications as needed, implementing cloud-native features, and establishing governance and operations processes. We focus on leveraging cloud capabilities to enhance agility, scalability, and cost-efficiency while ensuring business continuity throughout the transition.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-ecaris-green text-white">
          <div className="section-container text-center">
            <h2 className="heading-md mb-6">Ready to Transform Your Business Applications?</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Let our application experts help you modernize your enterprise systems to drive innovation, efficiency, and growth.
            </p>
            <Button className="bg-white text-ecaris-green hover:bg-white/90">
              Contact Our Application Team
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ErpApplications;
