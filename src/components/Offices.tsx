
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { offices } from '@/data/officeData';

const Offices = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const officesRef = useRef<(HTMLDivElement | null)[]>([]);
  
  // Animation for section entry
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          titleRef.current?.classList.add('animate-fade-in');
          
          officesRef.current.forEach((office, index) => {
            if (office) {
              setTimeout(() => {
                office.classList.add('animate-fade-in');
              }, 200 * index);
            }
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Our city names for the infinite scroll
  const cities = ["Luxembourg", "Paris", "Geneva", "London", "Berlin"];
  // Duplicate the cities to create the illusion of infinite scrolling
  const allCities = [...cities, ...cities, ...cities];

  return (
    <section id="offices" ref={sectionRef} className="py-24 bg-gray-50">
      <div className="section-container">
        <div 
          ref={titleRef}
          className="text-center mb-16 opacity-0"
        >
          <h2 className="heading-lg text-gray-900 mb-4 inline-block relative">
            <span className="inline-block pb-2 relative">
              Our Offices
              <span className="absolute left-0 bottom-0 w-full h-1 bg-primary"></span>
            </span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offices.map((office, index) => (
            <Link
              key={office.id}
              to={`/office/${office.id}`}
              className="block"
            >
              <div
                ref={(el) => officesRef.current[index] = el}
                className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 opacity-0 bg-white"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={office.image} 
                    alt={office.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{office.title}</h3>
                  <div className="text-gray-700">
                    {office.address.map((line, i) => (
                      <p key={i} className="mb-1">{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-16 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          <p className="text-lg text-gray-700 mb-8 text-center">Our presence extends to multiple European countries:</p>
          
          <div className="infinite-scroll-container max-w-3xl mx-auto overflow-hidden relative bg-white p-6 rounded-lg shadow-sm">
            <div className="infinite-scroll-content">
              {allCities.map((city, index) => (
                <span key={index} className="infinite-scroll-item">
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offices;
