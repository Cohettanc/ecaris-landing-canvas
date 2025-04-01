import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink, Workflow, Building2, ServerCog, Database, Archive } from 'lucide-react';

const services = [
  {
    id: "strategy-architecture",
    title: "Strategy and IT Architecture",
    description: "We design and implement IT master plans, ensuring alignment between business and technology. Our services include system urbanization, application portfolio rationalization, and the scoping of complex transformation projects to support your strategic trajectory.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-ecaris-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
    pagePath: "/strategy-architecture",
    detailImage: "/images/strategy-architecture.jpg",
    detailContent: [
      {
        title: "Strategic IT Planning",
        description: "We work with your leadership team to create comprehensive IT roadmaps that align with your business objectives. Our strategic planning considers current technological capabilities, anticipated business growth, and evolving market demands to create a future-proof IT foundation.",
        icon: <Workflow className="h-8 w-8 text-ecaris-green" />
      },
      {
        title: "Enterprise Architecture",
        description: "Our enterprise architecture services help organizations design, plan, and implement technology solutions that support business goals. We create architectural frameworks that promote agility, scalability, and cost-effectiveness while ensuring alignment with your organizational strategy.",
        icon: <Building2 className="h-8 w-8 text-ecaris-green" />
      },
      {
        title: "System Urbanization",
        description: "We help rationalize your IT landscape by organizing systems into coherent zones, ensuring clear interfaces between components. This systematic approach improves maintainability, reduces redundancy, and creates a more efficient technological ecosystem.",
        icon: <ServerCog className="h-8 w-8 text-ecaris-green" />
      },
      {
        title: "Application Portfolio Management",
        description: "Our application portfolio rationalization services help you evaluate your existing applications, identify redundancies, and make informed decisions about which applications to invest in, retire, or replace. This process optimizes IT spending and improves overall system performance.",
        icon: <Archive className="h-8 w-8 text-ecaris-green" />
      },
      {
        title: "Digital Transformation Planning",
        description: "We help scope and plan complex digital transformation initiatives, breaking large projects into manageable components with clear dependencies, timelines, and resource requirements. Our approach minimizes risk while maximizing the business value of your transformation efforts.",
        icon: <Database className="h-8 w-8 text-ecaris-green" />
      }
    ]
  },
  {
    id: "cloud-infrastructure",
    title: "Cloud, Infrastructure and Operations",
    description: "We support your cloud transformation with tailored strategies (public, private, hybrid, multi-cloud), expert migrations to GCP, Azure, or AWS, and robust governance and FinOps practices. Our teams ensure reliable operations through infrastructure administration and environment management across IaaS, PaaS, and SaaS layers.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-ecaris-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    pagePath: "/cloud-service"
  },
  {
    id: "data-governance",
    title: "Data Governance and Data Products",
    description: "We help you build a strong data foundation through strategic governance, data cataloging, quality frameworks, and role definitions. We also design and deliver advanced data products – BI, AI, ML, dashboards – and industrialize data pipelines via DataOps practices, all while ensuring compliance with GDPR and other regulations.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-ecaris-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7l5-3h6l5 3" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v8" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h8" />
      </svg>
    ),
    pagePath: "/data-governance"
  },
  {
    id: "erp-applications",
    title: "ERP, Business Platforms and Applications",
    description: "We modernize and integrate critical ERP systems and business applications, including CRM and SaaS platforms. Our teams manage core application projects, optimize application lifecycles (ALM), and enable application cloudification to enhance agility, scalability, and performance.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-ecaris-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  }
];

const Services = () => {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const openServiceDetail = (serviceId: string) => {
    const service = services.find(s => s.id === serviceId);
    
    if (service && service.pagePath) {
      navigate(service.pagePath);
    } else {
      setSelectedService(serviceId);
    }
  };

  const closeServiceDetail = () => {
    setSelectedService(null);
  };

  const selectedServiceData = services.find(service => service.id === selectedService);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          titleRef.current?.classList.add('animate-fade-in');
          
          cardsRef.current.forEach((card, index) => {
            if (card) {
              setTimeout(() => {
                card.classList.add('animate-scale-in');
              }, 150 * index); // Staggered animation
            }
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-gray-50">
      <div className="section-container">
        <div 
          ref={titleRef}
          className="text-center mb-16 opacity-0"
        >
          <h2 className="heading-lg text-gray-900 mb-4 inline-block relative">
            Our Services
            <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-24 h-1 bg-ecaris-green"></span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We focus on our core expertise sectors, to provide you with our most relevant Subject Matter Experts for each industry.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => cardsRef.current[index] = el}
              className="service-card bg-white opacity-0 cursor-pointer"
              onClick={() => openServiceDetail(service.id)}
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center gap-2">
                {service.title} 
                <ExternalLink className="h-4 w-4 text-ecaris-green" />
              </h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={selectedService !== null} onOpenChange={closeServiceDetail}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          {selectedServiceData && selectedServiceData.id === "strategy-architecture" && (
            <div className="overflow-y-auto max-h-[80vh]">
              <div className="bg-ecaris-green text-white p-6">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-white">
                    {selectedServiceData.title}
                  </DialogTitle>
                </DialogHeader>
                <p className="mt-2 text-ecaris-light">{selectedServiceData.description}</p>
              </div>
              
              <div className="p-6">
                <div className="aspect-video w-full mb-8 bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
                    alt="Strategy and IT Architecture"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {selectedServiceData.detailContent.map((item, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="mb-4">{item.icon}</div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-100">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Our Approach</h3>
                  <p className="mb-4 text-gray-700">
                    At ECARIS, we take a comprehensive, business-first approach to IT architecture and strategy. We believe that technology should serve business objectives, not the other way around. Our consultants combine deep technical expertise with business acumen to create solutions that drive real value.
                  </p>
                  <p className="mb-4 text-gray-700">
                    We work collaboratively with your teams to understand your unique challenges and opportunities, then design tailored solutions that leverage best practices while addressing your specific context.
                  </p>
                  <p className="text-gray-700">
                    Our methodology emphasizes pragmatic, actionable plans over theoretical frameworks, ensuring that our recommendations can be implemented effectively to achieve tangible results.
                  </p>
                </div>
                
                <div className="mt-8 flex justify-center">
                  <button
                    onClick={closeServiceDetail}
                    className="bg-ecaris-green hover:bg-ecaris-green/90 text-white px-6 py-3 rounded transition-colors"
                  >
                    Contact Us About This Service
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {selectedServiceData && selectedServiceData.id !== "strategy-architecture" && (
            <div className="p-6">
              <DialogHeader>
                <DialogTitle>{selectedServiceData.title}</DialogTitle>
              </DialogHeader>
              <p className="mt-4">{selectedServiceData.description}</p>
              <p className="mt-4 italic text-gray-500">Detailed information about this service will be available soon.</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Services;
