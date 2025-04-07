
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage("fadeOut");
      
      const timeout = setTimeout(() => {
        setDisplayLocation(location);
        setTransitionStage("fadeIn");
      }, 400); // Match this with CSS animation duration
      
      return () => clearTimeout(timeout);
    }
  }, [location, displayLocation]);

  return (
    <div className="page-transition-container">
      <div className={`page-transition-overlay ${transitionStage === "fadeOut" ? "active" : ""}`} />
      <div className={`page-transition-content ${transitionStage}`}>
        {children}
      </div>
    </div>
  );
};

export default PageTransition;
