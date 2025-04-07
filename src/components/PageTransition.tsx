
import { ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('fadeIn');
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // On initial load, set ready after a small delay to ensure content is loaded
    if (!isReady) {
      const timer = setTimeout(() => {
        setIsReady(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isReady]);

  useEffect(() => {
    // Only start transition when component is ready and location changes
    if (isReady && location !== displayLocation) {
      setTransitionStage('fadeOut');
    }
  }, [location, displayLocation, isReady]);

  const handleAnimationEnd = () => {
    if (transitionStage === 'fadeOut') {
      // Update displayed location before starting the fade in
      setDisplayLocation(location);
      
      // Short delay before fade in to ensure new content is ready
      setTimeout(() => {
        setTransitionStage('fadeIn');
        // Scroll to top when navigating to a new page
        window.scrollTo(0, 0);
      }, 50);
    }
  };

  return (
    <div
      className={`page-transition ${isReady ? transitionStage : 'invisible'}`}
      onAnimationEnd={handleAnimationEnd}
    >
      {children}
    </div>
  );
};

export default PageTransition;
