
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const location = useLocation();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState('fadeIn');
  
  // Update content when route changes
  useEffect(() => {
    // Start transition out
    setTransitionStage('fadeOut');
    
    // Small delay before updating content
    const timeout = setTimeout(() => {
      window.scrollTo(0, 0);
      setDisplayChildren(children);
      setTransitionStage('fadeIn');
    }, 200); // Keep this short for minimal delay
    
    return () => clearTimeout(timeout);
  }, [location.pathname, children]);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main 
        className={`content-transition flex-grow ${transitionStage}`}
        key={location.pathname}
      >
        {displayChildren}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
