import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cloud, Server, Database, Lock, BarChart3, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const CloudService = () => {
  useEffect(() => {
    // Update document title
    document.title = "ECARIS | Cloud, Infrastructure and Operations";
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
            <h1 className="heading-lg mb-6 max-w-3xl">Cloud, Infrastructure and Operations</h1>
            <p className="text-xl text-white/90 max-w-3xl mb-8">
              Comprehensive cloud solutions and infrastructure management to power your digital transformation.
            </p>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16">
          <div className="section-container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="heading-md mb-6">Strategic Cloud Adoption</h2>
                <p className="text-gray-700 mb-4">
                  Our cloud expertise spans across public, private, hybrid, and multi-cloud environments. We help you navigate the complexities of cloud adoption with tailored strategies that align with your business objectives.
                </p>
                <p className="text-gray-700 mb-6">
                  Whether you're looking to migrate to Google Cloud Platform (GCP), Microsoft Azure, or Amazon Web Services (AWS), our team of certified experts will guide you through every step of the journey.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link to="/#contact">
                    <Button className="bg-ecaris-green">Contact Us</Button>
                  </Link>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1600&auto=format&fit=crop" 
                  alt="Cloud infrastructure visualization" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-white">
          <div className="section-container">
            <h2 className="heading-md text-center mb-12">Our Cloud, Infrastructure & Operations Services</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-t-4 border-t-ecaris-green">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <Cloud className="h-10 w-10 text-ecaris-green" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Cloud Strategy</h3>
                  <p className="text-gray-700">
                    We develop comprehensive cloud strategies tailored to your specific business needs, whether it's public, private, hybrid, or multi-cloud solutions.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-t-4 border-t-ecaris-green">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <Server className="h-10 w-10 text-ecaris-green" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Infrastructure Management</h3>
                  <p className="text-gray-700">
                    Our experts design, implement, and manage robust IT infrastructure solutions that ensure scalability, reliability, and performance.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-t-4 border-t-ecaris-green">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <Database className="h-10 w-10 text-ecaris-green" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Cloud Migration</h3>
                  <p className="text-gray-700">
                    We facilitate seamless migrations to leading cloud platforms including GCP, Azure, and AWS, minimizing disruption to your operations.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-t-4 border-t-ecaris-green">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <Lock className="h-10 w-10 text-ecaris-green" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Cloud Security</h3>
                  <p className="text-gray-700">
                    Our security frameworks protect your cloud environments from threats while ensuring compliance with industry standards and regulations.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-t-4 border-t-ecaris-green">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <BarChart3 className="h-10 w-10 text-ecaris-green" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">FinOps</h3>
                  <p className="text-gray-700">
                    We implement cost optimization strategies and governance models to maximize your cloud investment and prevent unexpected expenditures.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-t-4 border-t-ecaris-green">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <RefreshCw className="h-10 w-10 text-ecaris-green" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Operations Management</h3>
                  <p className="text-gray-700">
                    Our operations teams ensure reliable performance across your IaaS, PaaS, and SaaS environments with monitoring and proactive management.
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
                  <h3 className="text-xl font-bold mb-3">Water Services Company – Europe & North Africa</h3>
                  <p className="text-gray-600 mb-2">Hybrid Cloud Migration</p>
                  <p className="text-gray-700 mb-4">
                    We supported a major water treatment company in a large-scale move to cloud as part of an IT carve-out. 
                    The project involved migrating over 400 virtual machines from on-premise infrastructure to Microsoft Azure, 
                    including Microsoft Fabric components, across operations in the Benelux, Spain, and North Africa. The initiative 
                    enabled greater infrastructure scalability, cost control, and autonomy post-separation.
                  </p>
                  <p className="text-ecaris-green">Read case study →</p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Healthcare Organization</h3>
                  <p className="text-gray-600 mb-2">Multi-Cloud Strategy</p>
                  <p className="text-gray-700 mb-4">
                    We designed and implemented a secure multi-cloud strategy for a healthcare organization, enabling them to leverage best-in-class services from different cloud providers while maintaining stringent data protection standards.
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
                  How do you approach cloud security and compliance?
                </AccordionTrigger>
                <AccordionContent>
                  Our approach to cloud security is multi-layered, incorporating security by design principles, automated compliance monitoring, access controls, encryption, and continuous vulnerability assessments. We ensure your cloud environments meet industry-specific regulatory requirements including GDPR, HIPAA, PCI-DSS, and others, depending on your sector and geographic location.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  What is your methodology for cloud migration?
                </AccordionTrigger>
                <AccordionContent>
                  Our cloud migration methodology follows a structured approach: assessment and discovery, strategy development, detailed planning, migration execution, testing and validation, and post-migration support. We tailor this methodology to each client's specific needs, considering factors such as application complexity, data volumes, performance requirements, and business criticality.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  How do you optimize cloud costs?
                </AccordionTrigger>
                <AccordionContent>
                  We implement FinOps practices that align cloud spending with business value. This includes right-sizing resources, leveraging reserved instances and savings plans, implementing auto-scaling, identifying and removing unused resources, and providing detailed cost allocation and reporting. Our continuous monitoring tools help identify cost optimization opportunities as your cloud usage evolves.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  Which cloud platforms do you support?
                </AccordionTrigger>
                <AccordionContent>
                  We have expertise across all major cloud platforms including Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP), and private cloud technologies. Our specialists are certified in these platforms and can help you choose the right provider(s) based on your specific requirements, or design hybrid and multi-cloud strategies that leverage the strengths of different platforms.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-ecaris-green text-white">
          <div className="section-container text-center">
            <h2 className="heading-md mb-6">Ready to Transform Your Infrastructure?</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Let our cloud experts help you build a future-ready infrastructure that drives innovation and operational excellence.
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

export default CloudService;
