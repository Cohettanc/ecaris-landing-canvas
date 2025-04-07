
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, ArrowLeft, Phone, Mail, Clock, Users, Calendar, Building } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Map from '@/components/Map';
import { getOfficeById } from '@/data/officeData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const OfficePageLayout = () => {
  const { officeId } = useParams<{ officeId: string }>();
  const office = getOfficeById(officeId || '');
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    if (office) {
      document.title = `ECARIS | ${office.title}`;
    }
    window.scrollTo(0, 0);

    // Get navbar height on component mount
    const navbar = document.querySelector('header');
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }
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

  // Set a smaller height for the hero section
  const heroHeight = "50vh"; // Reduced from 70vh to 50vh

  // Office-specific information
  const getOfficeSpecificInfo = () => {
    if (officeId === 'luxembourg') {
      return {
        description: 'Our Luxembourg headquarters serves as the primary hub for our European operations. Located in the heart of Luxembourg City, this modern facility houses our executive team and primary administrative functions.',
        teamSize: '40+ professionals', // Updated from 120+ to 40+
        established: 'Established in 2005',
        specialties: ['Corporate Strategy', 'Finance Consulting', 'Digital Transformation', 'Enterprise Architecture'],
        workingHours: 'Monday - Friday: 9:00 AM - 8:00 PM', // Updated working hours
        facilities: ['Modern conference rooms', 'Innovation lab', 'Client meeting spaces', 'Cafeteria', 'Recreation area']
      };
    } else if (officeId === 'paris') {
      return {
        description: 'Our Paris office is strategically positioned on the iconic Champs-Élysées, providing our clients with easy access to our consulting services in one of Europe\'s major business centers.',
        teamSize: '10+ consultants', // Updated from 45+ to 10+
        established: 'Established in 2012',
        specialties: ['Public Sector Consulting', 'Financial Services', 'Retail Strategy', 'Tourism & Hospitality'],
        workingHours: 'Monday - Friday: 9:00 AM - 8:00 PM', // Updated working hours
        facilities: ['Client presentation theater', 'Collaborative workspace', 'Video conferencing suites', 'Rooftop terrace']
      };
    }
    return {
      description: 'One of our key regional offices providing specialized consulting services.',
      teamSize: '30+ consultants',
      established: 'Recently established',
      specialties: ['Business Consulting', 'Technology Advisory', 'Digital Strategy'],
      workingHours: 'Monday - Friday: 9:00 AM - 8:00 PM', // Updated working hours for consistency
      facilities: ['Meeting rooms', 'Collaborative workspace', 'Client lounge']
    };
  };

  const officeInfo = getOfficeSpecificInfo();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div 
          className="relative bg-gray-900 overflow-hidden"
          style={{ 
            marginTop: `${navbarHeight}px`, // Add margin equal to navbar height
            height: heroHeight // Set height to 50vh (smaller than previous 70vh)
          }}
        >
          <div className="absolute inset-0">
            <img 
              src={office.image} 
              alt={office.title} 
              className={`w-full h-full object-cover ${getImagePositionClass()}`}
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
        
        {/* Office Overview Section */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 relative inline-block">
              <span className="inline-block pb-2 relative">
                Office Overview
                <span className="absolute left-0 bottom-0 w-full h-1 bg-ecaris-green"></span>
              </span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {officeInfo.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <Users className="h-6 w-6 text-ecaris-green mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Team</h3>
                      <p className="text-gray-700">{officeInfo.teamSize}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Calendar className="h-6 w-6 text-ecaris-green mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">History</h3>
                      <p className="text-gray-700">{officeInfo.established}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-ecaris-green mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Hours</h3>
                      <p className="text-gray-700">{officeInfo.workingHours}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Building className="h-6 w-6 text-ecaris-green mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Facilities</h3>
                      <ul className="text-gray-700 list-disc list-inside">
                        {officeInfo.facilities.slice(0, 2).map((facility, index) => (
                          <li key={index}>{facility}</li>
                        ))}
                        {officeInfo.facilities.length > 2 && (
                          <li>And more...</li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Card className="h-full">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Office Specialties</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {officeInfo.specialties.map((specialty, index) => (
                        <li key={index} className="flex items-center">
                          <span className="h-2 w-2 rounded-full bg-ecaris-green mr-2"></span>
                          {specialty}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
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
          
          {/* Our Facilities Section has been removed */}
          
          {/* CTA Section - updated with Contact Us button */}
          <div className="bg-gray-50 rounded-xl p-8 mb-12">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">Visit Our {office.city} Office</h2>
              <p className="text-gray-700 mb-6">
                We welcome you to schedule a visit to our {office.city} office. Our team would be happy to meet with you and discuss how we can assist with your business needs.
              </p>
              <Link to="/#contact" className="inline-block bg-ecaris-green text-white px-6 py-3 rounded-md font-medium hover:bg-ecaris-green/90 transition-colors">
                Contact Us
              </Link>
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
