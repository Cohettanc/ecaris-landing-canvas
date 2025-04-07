
import { ArrowLeft, MapPin, Phone, Mail, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import MapComponent from './MapComponent';

export interface OfficeData {
  id: number;
  city: string;
  country: string;
  address: string[];
  flagEmoji: string;
  coordinates: {
    longitude: number;
    latitude: number;
  };
  contactInfo?: {
    phone?: string;
    email?: string;
    hours?: string;
  };
  description: string;
}

interface OfficePageLayoutProps {
  office: OfficeData;
}

const OfficePageLayout = ({ office }: OfficePageLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/#offices" className="inline-flex items-center text-ecaris-green hover:underline mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to all offices
        </Link>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          {/* Header */}
          <div className="bg-ecaris-green text-white p-8">
            <div className="flex items-center gap-4">
              <span className="text-5xl">{office.flagEmoji}</span>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">{office.city}</h1>
                <p className="text-xl opacity-90">{office.country}</p>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column */}
              <div>
                <h2 className="text-2xl font-bold mb-6">About this location</h2>
                <p className="text-gray-700 mb-8">{office.description}</p>
                
                <h3 className="text-xl font-semibold mb-4">Address</h3>
                <div className="flex gap-3 text-gray-700 mb-6">
                  <MapPin className="w-5 h-5 text-ecaris-green flex-shrink-0 mt-1" />
                  <div>
                    {office.address.map((line, index) => (
                      <p key={index} className="mb-1">{line}</p>
                    ))}
                  </div>
                </div>
                
                {office.contactInfo && (
                  <>
                    <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                    {office.contactInfo.phone && (
                      <div className="flex gap-3 text-gray-700 mb-3">
                        <Phone className="w-5 h-5 text-ecaris-green flex-shrink-0" />
                        <p>{office.contactInfo.phone}</p>
                      </div>
                    )}
                    {office.contactInfo.email && (
                      <div className="flex gap-3 text-gray-700 mb-3">
                        <Mail className="w-5 h-5 text-ecaris-green flex-shrink-0" />
                        <p>{office.contactInfo.email}</p>
                      </div>
                    )}
                    {office.contactInfo.hours && (
                      <div className="mt-4 p-4 bg-gray-50 rounded-md">
                        <h4 className="font-medium mb-2">Office Hours</h4>
                        <p className="text-gray-700">{office.contactInfo.hours}</p>
                      </div>
                    )}
                  </>
                )}
                
                <div className="mt-8">
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${office.coordinates.latitude},${office.coordinates.longitude}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-ecaris-green hover:underline"
                  >
                    View on Google Maps
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
              
              {/* Right Column - Map */}
              <div>
                <MapComponent 
                  longitude={office.coordinates.longitude}
                  latitude={office.coordinates.latitude}
                  markerTitle={`ECARIS ${office.city}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficePageLayout;
