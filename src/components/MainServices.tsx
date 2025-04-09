
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Clock, Users, FileCheck } from 'lucide-react';

const MainServices = () => {
  const navigate = useNavigate();
  
  const services = [
    {
      id: "daily-rate",
      title: "Daily Rate Services",
      description: "Expert consultants available on a daily rate basis for flexible staffing needs and specialized skills.",
      icon: <Clock className="w-10 h-10 text-ecaris-green" />,
      path: "/service-daily-rate"
    },
    {
      id: "project-delivery",
      title: "Project Delivery Services",
      description: "Full project management and delivery with fixed scope, timeline and budget for your transformation initiatives.",
      icon: <FileCheck className="w-10 h-10 text-ecaris-green" />,
      path: "/service-project-delivery"
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
            We offer flexible service models to meet your exact business needs and project requirements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white shadow-md hover:shadow-lg rounded-lg p-8 transition-all duration-300 flex flex-col"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">{service.title}</h3>
              <p className="text-gray-700 mb-6 flex-grow">{service.description}</p>
              <button
                onClick={() => navigate(service.path)}
                className="self-start flex items-center text-ecaris-green hover:text-ecaris-green/80 font-medium"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
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
