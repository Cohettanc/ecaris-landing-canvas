
import { useEffect, useRef } from 'react';
import { toast } from "sonner";

type MapComponentProps = {
  center: [number, number]; // [longitude, latitude]
  zoom?: number;
  title: string;
}

const MapComponent = ({ center, zoom = 15, title }: MapComponentProps) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Using OpenStreetMap through iframe as a simple solution
    // that doesn't require API keys
    const [longitude, latitude] = center;
    
    if (iframeRef.current) {
      iframeRef.current.src = `https://www.openstreetmap.org/export/embed.html?bbox=${longitude-0.01}%2C${latitude-0.01}%2C${longitude+0.01}%2C${latitude+0.01}&amp;layer=mapnik&amp;marker=${latitude}%2C${longitude}`;
    }
  }, [center]);

  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-md" ref={mapContainerRef}>
      <iframe 
        ref={iframeRef}
        width="100%" 
        height="100%" 
        frameBorder="0" 
        scrolling="no" 
        marginHeight={0} 
        marginWidth={0} 
        title={`Map of ${title}`}
        aria-label={`Map showing location of ${title} office`}
      />
    </div>
  );
};

export default MapComponent;
