
import { MapPin } from 'lucide-react';

interface MapProps {
  latitude: number;
  longitude: number;
  zoom?: number;
  title?: string;
}

const Map = ({ latitude, longitude, zoom = 14, title }: MapProps) => {
  // Generate a static map image URL using OpenStreetMap
  const mapImageUrl = `https://staticmap.openstreetmap.de/staticmap.php?center=${latitude},${longitude}&zoom=${zoom}&size=600x400&maptype=mapnik&markers=${latitude},${longitude},red`;

  return (
    <div className="w-full rounded-lg border border-gray-200 overflow-hidden bg-white p-4">
      <div className="h-96 relative">
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="bg-white p-4 rounded-lg shadow-sm text-center mb-4 z-10">
            <h3 className="text-lg font-semibold">{title || 'Office Location'}</h3>
            <div className="flex items-center justify-center mt-2">
              <MapPin className="h-5 w-5 mr-2 text-ecaris-green" />
              <span>Lat: {latitude.toFixed(4)}, Lng: {longitude.toFixed(4)}</span>
            </div>
          </div>
          <div className="relative w-full h-full">
            <img 
              src={mapImageUrl} 
              alt={`Map showing location of ${title || 'Office'}`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
