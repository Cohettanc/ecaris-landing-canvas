
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import OfficePageLayout from '@/components/OfficePageLayout';
import { getOfficeByCity, offices } from '@/data/officeData';

const OfficePage = () => {
  const { city } = useParams<{ city: string }>();
  const navigate = useNavigate();
  
  // Find the office data based on the city parameter
  const officeData = city ? getOfficeByCity(city) : undefined;
  
  useEffect(() => {
    // If the office doesn't exist, redirect to not found
    if (city && !officeData) {
      navigate('/not-found', { replace: true });
      return;
    }
    
    // Update document title if office exists
    if (officeData) {
      document.title = `ECARIS | ${officeData.city} Office`;
    }
    
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, [city, officeData, navigate]);
  
  // If we're waiting for data or redirecting, show a loading state
  if (!officeData) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }
  
  return (
    <div className="min-h-screen antialiased">
      <Navbar />
      <OfficePageLayout office={officeData} />
      <Footer />
    </div>
  );
};

export default OfficePage;
