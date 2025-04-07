import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, ArrowLeft, Phone, Mail } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Map from '@/components/Map';
import { getOfficeById } from '@/data/officeData';

const OfficePageLayout = () => {
  const { officeId } = useParams<{ officeId: string }>();
  const office = getOfficeById(officeId || '');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (office) {
      document.title = `ECARIS | ${office.title}`;
    }
    window.scrollTo(0, 0);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
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

  const getImagePositionClass = () => {
    if (officeId === 'paris') {
      return 'object-[100%_top]';
    }
    return 'object-right-top';
  };

  const parallaxStyle = {
    transform: `translateY(${scrollY * -0.3}px)`,
    transition: 'transform 0.1s ease-out',
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="relative h-72 sm:h-96 md:h-120 lg:h-144 bg-gray-900 mt-24 md:mt-32 overflow-hidden">
          <div className="absolute inset-0" style={{ height: 'calc(100% + 120px)', top: '-60px' }}>
            <img 
              src={office.image} 
              alt={office.title} 
              className={`w-full h-full object-cover ${getImagePositionClass()}`}
              style={parallaxStyle}
            />
          </div>
          <div className="absolute inset-0 bg-black opacity-60"></div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">{office.title}</h1>
              <div className="flex items-center justify-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span className="text-lg md:text-xl">{office.city}</span>
              </div>
            </div>
          </div>
        </div>
        
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
                  <div className="flex items-center mb-2">
                    <Phone className="h-4 w-4 mr-2 text-ecaris-green" />
                    <p>+1 234 567 890</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-ecaris-green" />
                    <p>info@ecaris.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Location</h2>
              <Map 
                latitude={office.coordinates[1]} 
                longitude={office.coordinates[0]} 
                title={office.title}
                zoom={11}
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
