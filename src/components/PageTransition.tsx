
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  useEffect(() => {
    // If location changes, start the transition
    if (location.pathname !== displayLocation.pathname) {
      setIsTransitioning(true);
      
      // After the overlay fades in completely, update the displayed page
      const timer = setTimeout(() => {
        setDisplayLocation(location);
        
        // After content is updated, fade out the overlay
        const fadeOutTimer = setTimeout(() => {
          setIsTransitioning(false);
        }, 50); // Small delay to ensure content is rendered
        
        return () => clearTimeout(fadeOutTimer);
      }, 400); // Match this with the CSS transition time
      
      return () => clearTimeout(timer);
    }
  }, [location, displayLocation]);

  return (
    <div className="page-transition-container">
      <div className={`page-transition-overlay ${isTransitioning ? 'active' : ''}`} />
      <div className="page-transition-content">
        {children}
      </div>
    </div>
  );
};

export default PageTransition;
