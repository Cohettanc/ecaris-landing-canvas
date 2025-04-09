
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Clock, Users, FileCheck, ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const MainServices = () => {
  const navigate = useNavigate();
  const [expandedService, setExpandedService] = useState<string | null>(null);
  
  const toggleExpand = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };
  
  const services = [
    {
      id: "daily-rate",
      title: "Daily Rate Services",
      description: "Expert consultants available on a daily rate basis for flexible staffing needs and specialized skills.",
      longDescription: "Our consultants seamlessly integrate with your teams to provide targeted expertise exactly when you need it, allowing for maximum flexibility and knowledge transfer while maintaining cost control. We carefully match consultants with your specific technical and business requirements to ensure successful outcomes.",
      icon: <Clock className="w-10 h-10 text-ecaris-green" />,
      path: "/service-daily-rate",
      benefits: [
        "Flexible engagement model to adapt to changing project needs",
        "Access to specialized skills when you need them",
        "Knowledge transfer to your internal teams",
        "Cost-effective way to fill skill gaps",
        "Quick onboarding and integration with your teams"
      ]
    },
    {
      id: "project-delivery",
      title: "Project Delivery Services",
      description: "Full project management and delivery with fixed scope, timeline and budget for your transformation initiatives.",
      longDescription: "We take full responsibility for delivering your projects from initial planning through execution to final delivery, managing risks and ensuring quality outcomes that align perfectly with your business objectives. Our experienced project teams use proven methodologies to ensure successful delivery on time and within budget.",
      icon: <FileCheck className="w-10 h-10 text-ecaris-green" />,
      path: "/service-project-delivery",
      benefits: [
        "End-to-end project management and delivery",
        "Fixed scope, timeline, and budget for better planning",
        "Risk management and mitigation",
        "Regular reporting and transparent communication",
        "Quality assurance throughout the project lifecycle"
      ]
    }
  ];

  return (
    <section id="main-services" className="py-24 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-gray-900 mb-4 inline-block relative">
            <span className="inline-block pb-2 relative">
              Our Services
              <span className="absolute left-0 bottom-0 w-full h-1 bg-ecaris-green"></span>
            </span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We offer flexible service models to meet your exact business needs and project requirements. Our service offerings are designed to adapt to your organization's specific challenges, whether you need targeted expertise or end-to-end project delivery.
          </p>
        </div>
        
        <div className="space-y-6">
          {services.map((service) => (
            <Card
              key={service.id}
              className={`overflow-hidden transition-all duration-300 ${
                expandedService === service.id ? 'shadow-lg' : 'shadow-md hover:shadow-lg'
              }`}
            >
              <div 
                className="p-6 cursor-pointer"
                onClick={() => toggleExpand(service.id)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex gap-4 items-start">
                    <div className="rounded-full bg-ecaris-green/10 p-3">
                      {service.icon}
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold mb-2 text-gray-900">{service.title}</h3>
                      <p className="text-gray-700">{service.description}</p>
                    </div>
                  </div>
                  <div className="text-ecaris-green">
                    {expandedService === service.id ? (
                      <ChevronUp className="h-6 w-6" />
                    ) : (
                      <ChevronDown className="h-6 w-6" />
                    )}
                  </div>
                </div>
              </div>
              
              {expandedService === service.id && (
                <CardContent className="px-6 pt-0 pb-6 border-t border-gray-100 animate-fade-in">
                  <div className="mt-4 text-gray-700">
                    <p className="mb-4">{service.longDescription}</p>
                    
                    <h4 className="font-semibold text-lg mb-2 text-gray-900">Key Benefits:</h4>
                    <ul className="list-disc pl-5 mb-6 space-y-1">
                      {service.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                    
                    <button
                      onClick={() => navigate(service.path)}
                      className="bg-ecaris-green hover:bg-ecaris-green/90 text-white font-medium py-2 px-4 rounded-md inline-flex items-center transition-colors"
                    >
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
            In addition to our service delivery models, we offer deep expertise across multiple domains including IT Strategy, Cloud Infrastructure, Data Governance, and Business Applications.
          </p>
          <button 
            onClick={() => navigate("/#services")}
            className="inline-flex items-center text-gray-700 hover:text-ecaris-green transition-colors font-medium"
          >
            <Users className="mr-2 h-5 w-5" />
            View our expertise areas
          </button>
        </div>
      </div>
    </section>
  );
};

export default MainServices;
