
import { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Button } from '@/components/ui/button';

interface MapProps {
  latitude: number;
  longitude: number;
  zoom?: number;
  title?: string;
}

const Map = ({ latitude, longitude, zoom = 14, title }: MapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<mapboxgl.Map | null>(null);
  const [apiKey, setApiKey] = useState<string>('');
  const [showMap, setShowMap] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Function to initialize the map
  const initializeMap = () => {
    if (!mapRef.current || !apiKey) return;
    
    try {
      // Clear any previous errors
      setError(null);
      
      // Set the access token
      mapboxgl.accessToken = apiKey;

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
      new mapboxgl.Marker({ color: '#10b981' }) // Green color matching ecaris-green
        .setLngLat([longitude, latitude])
        .setPopup(new mapboxgl.Popup().setHTML(`<h3>${title || 'Office Location'}</h3>`))
        .addTo(mapInstance.current);
        
      // Listen for map load errors
      mapInstance.current.on('error', (e) => {
        console.error('Map error:', e);
        setError('Error loading map. Please check your Mapbox token.');
      });
    } catch (err) {
      console.error('Failed to initialize map:', err);
      setError('Failed to initialize map. Please try again with a valid Mapbox token.');
    }
  };

  // Clean up map instance on unmount
  useEffect(() => {
    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
      }
    };
  }, []);
  
  // Initialize map when showMap is true
  useEffect(() => {
    if (showMap) {
      initializeMap();
    }
  }, [showMap, apiKey, latitude, longitude, zoom, title]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapInstance.current) {
      mapInstance.current.remove();
      mapInstance.current = null;
    }
    setShowMap(true);
  };

  return (
    <div className="relative w-full rounded-lg border border-gray-200 overflow-hidden bg-white p-4">
      {!showMap ? (
        <div className="space-y-4">
          <div className="text-sm text-gray-600">
            <p className="mb-2">
              To display the map, please enter your Mapbox access token. 
              You can get a token from <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-ecaris-green hover:underline">Mapbox</a>.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Enter your Mapbox access token"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
            <Button type="submit" className="bg-ecaris-green hover:bg-ecaris-green/90">
              Show Map
            </Button>
          </form>
        </div>
      ) : (
        <div className="h-96">
          {error ? (
            <div className="flex items-center justify-center h-full flex-col text-center p-4">
              <p className="text-red-500 mb-4">{error}</p>
              <Button 
                onClick={() => setShowMap(false)} 
                className="bg-ecaris-green hover:bg-ecaris-green/90"
              >
                Try Again
              </Button>
            </div>
          ) : (
            <div ref={mapRef} className="absolute inset-0"></div>
          )}
        </div>
      )}
    </div>
  );
};

export default Map;
