
import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { MapPin } from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix Leaflet's default icon issue
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

// Create a custom icon for the marker with ECARIS brand color
const createCustomIcon = () => {
  return L.divIcon({
    html: `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="41" viewBox="0 0 25 41">
      <path fill="#016E42" stroke="#FFFFFF" stroke-width="1.5" d="M12.5 0C5.596 0 0 5.596 0 12.5C0 21.875 12.5 41 12.5 41S25 21.875 25 12.5C25 5.596 19.404 0 12.5 0zm0 17.5c-2.762 0-5-2.238-5-5s2.238-5 5-5 5 2.238 5 5-2.238 5-5 5z"/>
    </svg>`,
    iconSize: [25, 41],
    iconAnchor: [12.5, 41],
    popupAnchor: [0, -41],
    className: ''
  });
};

interface MapProps {
  latitude: number;
  longitude: number;
  zoom?: number;
  title?: string;
}

const Map: React.FC<MapProps> = ({ latitude, longitude, zoom = 13, title }) => {
  return (
    <div className="w-full rounded-lg border border-gray-200 overflow-hidden bg-white p-4 relative" style={{ zIndex: 1 }}>
      <div className="flex flex-col items-center mb-4">
        <h3 className="text-lg font-semibold">{title || 'Office Location'}</h3>
      </div>
      
      <div className="h-80 relative rounded overflow-hidden">
        <MapContainer 
          center={[latitude, longitude]} 
          zoom={zoom} 
          style={{ height: "100%", width: "100%" }}
          scrollWheelZoom={false}
          zoomControl={true}
        >
          <TileLayer
            attribution=''
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker 
            position={[latitude, longitude]} 
            icon={createCustomIcon()}
          >
            <Popup>
              {title || 'Office Location'}
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
