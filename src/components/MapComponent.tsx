
import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface MapComponentProps {
  longitude: number;
  latitude: number;
  zoom?: number;
  markerTitle?: string;
}

const MapComponent = ({ longitude, latitude, zoom = 14, markerTitle }: MapComponentProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const marker = useRef<mapboxgl.Marker | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map with a placeholder token
    // In production, use environment variables for this token
    mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [longitude, latitude],
      zoom: zoom
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    // Add marker
    if (latitude && longitude) {
      marker.current = new mapboxgl.Marker({ color: '#006C4C' })
        .setLngLat([longitude, latitude])
        .addTo(map.current);
      
      if (markerTitle) {
        const popup = new mapboxgl.Popup({ offset: 25 })
          .setHTML(`<h3 class="font-bold">${markerTitle}</h3>`);
        
        marker.current.setPopup(popup);
      }
    }

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [longitude, latitude, zoom, markerTitle]);

  return (
    <div className="w-full h-96 rounded-lg shadow-md overflow-hidden">
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
};

export default MapComponent;
