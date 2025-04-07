
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MapComponent from './MapComponent';
import { Office } from '@/data/officeData';

type OfficePageLayoutProps = {
  office: Office;
}

const OfficePageLayout = ({ office }: OfficePageLayoutProps) => {
  useEffect(() => {
    // Update document title
    document.title = `ECARIS | ${office.city} Office`;
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, [office.city]);

  return (
    <div className="min-h-screen antialiased">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link to="/" className="text-ecaris-green hover:underline flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Home
            </Link>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h1 className="text-3xl font-bold mb-6 flex items-center">
                  <span className="text-4xl mr-3">{office.flagEmoji}</span>
                  {office.city} Office
                </h1>
                
                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-2">Address</h2>
                  <p className="text-gray-700 whitespace-pre-line">
                    {office.address}
                  </p>
                </div>
                
                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-2">Contact</h2>
                  <p className="text-gray-700">
                    Phone: +352 123 456 789<br />
                    Email: {office.city.toLowerCase()}@ecaris.com
                  </p>
                </div>
                
                <div>
                  <h2 className="text-xl font-semibold mb-2">Opening Hours</h2>
                  <p className="text-gray-700">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-xl font-semibold mb-4">Office Location</h2>
              <MapComponent center={office.coordinates} title={office.city} />
              
              <div className="mt-6">
                <h2 className="text-xl font-semibold mb-4">About Our {office.city} Office</h2>
                <p className="text-gray-700">
                  Our {office.city} office serves as a strategic hub for our operations in the region. 
                  With a dedicated team of professionals, we provide comprehensive consulting services 
                  tailored to meet the specific needs of our local and international clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default OfficePageLayout;
