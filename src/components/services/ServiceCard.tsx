
import { ExternalLink } from 'lucide-react';
import { ServiceType } from './types';

type ServiceCardProps = {
  service: ServiceType;
  index: number;
  onSelect: (serviceId: string) => void;
  cardRef: (el: HTMLDivElement | null) => void;
};

const ServiceCard = ({ service, index, onSelect, cardRef }: ServiceCardProps) => {
  return (
    <div
      ref={cardRef}
      className="service-card bg-white opacity-0 cursor-pointer"
      onClick={() => onSelect(service.id)}
    >
      <div className="mb-6">{service.icon}</div>
      <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center gap-2">
        {service.title} 
        <ExternalLink className="h-4 w-4 text-ecaris-green" />
      </h3>
      <p className="text-gray-700">{service.description}</p>
    </div>
  );
};

export default ServiceCard;
