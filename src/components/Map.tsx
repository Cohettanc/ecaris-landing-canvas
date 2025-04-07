
import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { MapPin } from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

interface MapProps {
  latitude: number;
  longitude: number;
  zoom?: number;
  title?: string;
}

const Map = ({ latitude, longitude, zoom = 14, title }: MapProps) => {
  return (
    <div className="w-full rounded-lg border border-gray-200 overflow-hidden bg-white p-4">
      <div className="flex flex-col items-center mb-4">
        <h3 className="text-lg font-semibold">{title || 'Office Location'}</h3>
        <div className="flex items-center justify-center mt-2">
          <MapPin className="h-5 w-5 mr-2 text-ecaris-green" />
          <span>Lat: {latitude.toFixed(4)}, Lng: {longitude.toFixed(4)}</span>
        </div>
      </div>
      
      <div className="h-80 relative rounded overflow-hidden">
        <MapContainer 
          center={[latitude, longitude]} 
          zoom={zoom} 
          style={{ height: "100%", width: "100%" }}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[latitude, longitude]}>
            <Popup>
              {title || 'Office Location'}<br />
              Lat: {latitude.toFixed(4)}<br />
              Lng: {longitude.toFixed(4)}
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
