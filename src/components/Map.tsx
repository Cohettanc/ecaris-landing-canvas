
import { useRef, useEffect } from 'react';
import { MapPin } from 'lucide-react';

interface MapProps {
  latitude: number;
  longitude: number;
  zoom?: number;
  title?: string;
}

const Map = ({ latitude, longitude, zoom = 14, title }: MapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // In a real implementation, you would use a mapping library like Mapbox, Google Maps, etc.
    // For this demo, we'll create a placeholder map with the coordinates displayed
    if (mapRef.current) {
      const mapElement = mapRef.current;
      mapElement.innerHTML = '';
      
      const mapInfo = document.createElement('div');
      mapInfo.className = 'absolute inset-0 flex flex-col items-center justify-center text-center p-4';
      
      const mapIcon = document.createElement('div');
      mapIcon.className = 'text-ecaris-green mb-4';
      mapIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`;
      
      const mapTitle = document.createElement('h3');
      mapTitle.className = 'text-lg font-bold mb-2';
      mapTitle.textContent = title || 'Location';
      
      const mapCoordinates = document.createElement('p');
      mapCoordinates.className = 'text-gray-600 mb-2';
      mapCoordinates.textContent = `Coordinates: ${latitude.toFixed(4)}, ${longitude.toFixed(4)}`;
      
      const mapZoom = document.createElement('p');
      mapZoom.className = 'text-gray-600';
      mapZoom.textContent = `Zoom Level: ${zoom}`;
      
      const mapNote = document.createElement('p');
      mapNote.className = 'mt-4 text-sm text-gray-500';
      mapNote.textContent = 'Note: This is a placeholder for a real map component.';
      
      mapInfo.appendChild(mapIcon);
      mapInfo.appendChild(mapTitle);
      mapInfo.appendChild(mapCoordinates);
      mapInfo.appendChild(mapZoom);
      mapInfo.appendChild(mapNote);
      
      mapElement.appendChild(mapInfo);
    }
  }, [latitude, longitude, zoom, title]);

  return (
    <div className="relative w-full h-96 bg-gray-100 rounded-lg border border-gray-200 overflow-hidden">
      <div ref={mapRef} className="absolute inset-0"></div>
    </div>
  );
};

export default Map;
