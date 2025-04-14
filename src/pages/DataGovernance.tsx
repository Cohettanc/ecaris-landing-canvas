import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Database, ClipboardCheck, BarChart2, Layers, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const DataGovernance = () => {
  useEffect(() => {
    // Update document title
    document.title = "ECARIS | AI, Data Products & Data Governance";
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
            <h1 className="heading-lg mb-6 max-w-3xl">AI, Data Products & Data Governance</h1>
            <p className="text-xl text-white/90 max-w-3xl mb-8">
              We help organizations transform raw data into strategic assets through robust governance frameworks, 
              high-quality data products, and compliant data management practices.
            </p>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16">
          <div className="section-container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="heading-md mb-6">Transforming Data into Strategic Assets</h2>
                <p className="text-gray-700 mb-4">
                  In today's data-driven world, effective data governance is the foundation of successful digital transformation. 
                  Our comprehensive data governance solutions help organizations establish clear frameworks, policies, and processes 
                  to ensure data quality, compliance, and accessibility.
                </p>
                <p className="text-gray-700 mb-6">
                  Beyond governance, we help organizations transform raw data into valuable insights through advanced analytics, 
                  business intelligence, and machine learning solutions that drive informed decision-making and competitive advantage.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link to="/#contact">
                    <Button className="bg-ecaris-green">Contact Us</Button>
                  </Link>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1600&auto=format&fit=crop" 
                  alt="Data Governance and Analytics" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-white">
          <div className="section-container">
            <h2 className="heading-md text-center mb-12">Our Data Governance Services</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-t-4 border-t-ecaris-green">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <Database className="h-10 w-10 text-ecaris-green" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Data Strategy & Governance</h3>
                  <p className="text-gray-700">
                    We help you define and operationalize your data strategy: governance models, data ownership, quality management, and metadata/catalog tools — all tailored to your organization's maturity and priorities.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-t-4 border-t-ecaris-green">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <BarChart2 className="h-10 w-10 text-ecaris-green" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Data Products & AI/BI Use Cases</h3>
                  <p className="text-gray-700">
                    We support the design and delivery of high-impact data products, from BI dashboards to machine learning models, ensuring alignment with business goals and user adoption.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-t-4 border-t-ecaris-green">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <Layers className="h-10 w-10 text-ecaris-green" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">DataOps & Industrialization</h3>
                  <p className="text-gray-700">
                    Our teams implement DataOps practices to streamline data pipelines, automate delivery cycles, and enable scalable, reliable data product development.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-t-4 border-t-ecaris-green">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <Users className="h-10 w-10 text-ecaris-green" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Data Organization & Operating Model</h3>
                  <p className="text-gray-700">
                    We assist in structuring your data function: roles, responsibilities, and tooling — ensuring your teams are equipped to support data-driven initiatives at scale.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-t-4 border-t-ecaris-green">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <Shield className="h-10 w-10 text-ecaris-green" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Compliance & Regulation</h3>
                  <p className="text-gray-700">
                    We help you stay compliant with GDPR and industry regulations through pragmatic approaches that combine governance, security, and operational efficiency.
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
                  <h3 className="text-xl font-bold mb-3">Global Financial Institution</h3>
                  <p className="text-gray-600 mb-2">Data Governance Transformation</p>
                  <p className="text-gray-700 mb-4">
                    We helped a multinational bank establish an enterprise-wide data governance program that improved data quality by 45%, 
                    reduced regulatory reporting time by 30%, and created a trusted foundation for their analytics initiatives. The program 
                    included data ownership frameworks, quality metrics, and automated data lineage tracking.
                  </p>
                  <p className="text-ecaris-green">Read case study →</p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Healthcare Provider Network</h3>
                  <p className="text-gray-600 mb-2">Data Products & Analytics</p>
                  <p className="text-gray-700 mb-4">
                    For a network of regional hospitals, we developed a suite of data products that provided operational insights across 
                    facilities. Our solution integrated data from 12 disparate systems, creating a unified view of patient care, resource 
                    utilization, and clinical outcomes that drove a 15% improvement in operational efficiency.
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
                  What is data governance and why is it important?
                </AccordionTrigger>
                <AccordionContent>
                  Data governance is the framework of policies, processes, and standards that ensure data is managed as a valuable organizational asset. It defines who can take what actions, with what data, under what circumstances. Data governance is essential because it ensures data quality, accessibility, security, and compliance with regulations, enabling organizations to make confident decisions based on trustworthy information.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  How do you approach implementing data governance in organizations?
                </AccordionTrigger>
                <AccordionContent>
                  We take a pragmatic, phased approach to implementing data governance. We start with an assessment of your current data landscape and maturity, then develop a roadmap tailored to your specific needs and priorities. We focus on quick wins to demonstrate value while building toward a comprehensive framework. Our approach balances the need for governance with the realities of organizational culture, ensuring adoption through change management and stakeholder engagement.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  What technologies do you recommend for data governance?
                </AccordionTrigger>
                <AccordionContent>
                  The right technology stack depends on your specific requirements, existing systems, and maturity level. We typically recommend solutions that include data catalogs, metadata management, data quality monitoring, master data management, and data lineage tracking capabilities. We're tool-agnostic and can work with leading platforms like Informatica, Collibra, Alation, and AWS or GCP native services, as well as open-source alternatives depending on your needs and budget.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  How do you measure the success of data governance initiatives?
                </AccordionTrigger>
                <AccordionContent>
                  We establish clear metrics aligned with business outcomes from the start. These typically include data quality metrics (accuracy, completeness, timeliness), operational metrics (reduced time to access data, fewer reconciliation issues), compliance metrics (reduced regulatory findings), and business value metrics (improved decision-making, increased analytics adoption). We implement dashboards to track these metrics and demonstrate the ROI of your data governance investments.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-ecaris-green text-white">
          <div className="section-container text-center">
            <h2 className="heading-md mb-6">Ready to Transform Your Data Strategy?</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Let our data experts help you unlock the full potential of your data assets and drive informed decision-making across your organization.
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

export default DataGovernance;
