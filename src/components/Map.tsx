
import { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface MapProps {
  latitude: number;
  longitude: number;
  zoom?: number;
  title?: string;
}

const Map = ({ latitude, longitude, zoom = 14, title }: MapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Mapbox public token - in a production app, this should be in an environment variable
    mapboxgl.accessToken = 'pk.eyJ1IjoibG92YWJsZWFpIiwiYSI6ImNsdmhodmI5cDBrYmEybXBmdWlpMXZsaWsifQ.bOg7L6rCOTEBEYeN-Q8OLQ';

    // Initialize the map
    mapInstance.current = new mapboxgl.Map({
      container: mapRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitude, latitude],
      zoom: zoom,
    });

    // Add navigation controls
    mapInstance.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add a marker at the office location
    new mapboxgl.Marker({ color: '#10b981' }) // Use a green color matching ecaris-green
      .setLngLat([longitude, latitude])
      .setPopup(new mapboxgl.Popup().setHTML(`<h3>${title || 'Office Location'}</h3>`))
      .addTo(mapInstance.current);

    // Clean up on unmount
    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
      }
    };
  }, [latitude, longitude, zoom, title]);

  return (
    <div className="relative w-full h-96 rounded-lg border border-gray-200 overflow-hidden">
      <div ref={mapRef} className="absolute inset-0"></div>
    </div>
  );
};

export default Map;
