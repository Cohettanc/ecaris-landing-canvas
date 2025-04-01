
import { LucideIcon } from 'lucide-react';

interface ServiceItemProps {
  icon: React.ReactElement;
  title: string;
  description: string;
}

const ServiceItem = ({ icon, title, description }: ServiceItemProps) => {
  return (
    <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-4 text-gray-900">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default ServiceItem;
