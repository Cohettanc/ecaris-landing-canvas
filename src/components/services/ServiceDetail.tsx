
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ServiceType } from './types';

type ServiceDetailProps = {
  service: ServiceType | undefined;
  isOpen: boolean;
  onClose: () => void;
};

const ServiceDetail = ({ service, isOpen, onClose }: ServiceDetailProps) => {
  if (!service) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden">
        {service && service.id === "strategy-architecture" && (
          <div className="overflow-y-auto max-h-[80vh]">
            <div className="bg-ecaris-green text-white p-6">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-white">
                  {service.title}
                </DialogTitle>
              </DialogHeader>
              <p className="mt-2 text-ecaris-light">{service.description}</p>
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
                {service.detailContent?.map((item, index) => (
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
                <Link to="/#contact">
                  <Button 
                    onClick={onClose}
                    className="bg-ecaris-green hover:bg-ecaris-green/90 text-white px-6 py-3 rounded transition-colors"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
        
        {service && service.id !== "strategy-architecture" && (
          <div className="p-6">
            <DialogHeader>
              <DialogTitle>{service.title}</DialogTitle>
            </DialogHeader>
            <p className="mt-4">{service.description}</p>
            <p className="mt-4 italic text-gray-500">Detailed information about this service will be available soon.</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ServiceDetail;
