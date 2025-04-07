
import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons in Leaflet with webpack/vite
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// Custom icon for our markers
const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

interface MapProps {
  latitude: number;
  longitude: number;
  zoom?: number;
  title?: string;
}

const Map = ({ latitude, longitude, zoom = 14, title }: MapProps) => {
  // Make sure to have the correct position format for react-leaflet
  const position: [number, number] = [latitude, longitude];

  useEffect(() => {
    // This is needed to properly render the map after component mount
    const container = L.DomUtil.get('map-container');
    if (container) {
      // @ts-ignore
      if (container._leaflet_id) {
        // @ts-ignore
        container._leaflet_id = null;
      }
    }
  }, []);

  return (
    <div className="relative w-full h-96 rounded-lg border border-gray-200 overflow-hidden">
      <MapContainer 
        center={position} 
        zoom={zoom} 
        style={{ height: "100%", width: "100%" }}
        id="map-container"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={customIcon}>
          <Popup>
            <div className="text-center p-1">
              <strong>{title || 'Office Location'}</strong>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
