
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Map from '@/components/Map';
import { getOfficeById } from '@/data/officeData';

const OfficePageLayout = () => {
  const { officeId } = useParams<{ officeId: string }>();
  const office = getOfficeById(officeId || '');

  useEffect(() => {
    // Update document title
    if (office) {
      document.title = `ECARIS | ${office.title}`;
    }
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, [office]);

  if (!office) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center p-4">
          <h1 className="text-2xl font-bold mb-4">Office Not Found</h1>
          <p className="mb-6">The office you're looking for doesn't exist.</p>
          <Link to="/" className="text-ecaris-green hover:underline flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative h-64 md:h-96 bg-gray-900">
          <img 
            src={office.image} 
            alt={office.title} 
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{office.title}</h1>
              <div className="flex items-center justify-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{office.city}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Office Information</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-3">Address</h3>
                <div className="text-gray-700 mb-6">
                  {office.address.map((line, i) => (
                    <p key={i} className="mb-1">{line}</p>
                  ))}
                </div>
                
                <h3 className="text-lg font-semibold mb-3">Contact</h3>
                <div className="text-gray-700">
                  <p className="mb-1">Phone: +1 234 567 890</p>
                  <p className="mb-1">Email: info@ecaris.com</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Location</h2>
              <Map 
                latitude={office.coordinates[1]} 
                longitude={office.coordinates[0]} 
                zoom={10}
                title={office.city}
              />
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              to="/" 
              className="inline-flex items-center text-ecaris-green hover:underline"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default OfficePageLayout;
