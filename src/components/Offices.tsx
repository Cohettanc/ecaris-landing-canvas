
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { offices } from '@/data/officeData';

const Offices = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const officesRef = useRef<(HTMLDivElement | null)[]>([]);

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

  // City light effect animation
  useEffect(() => {
    const cityElements = document.querySelectorAll('.city-light');
    
    const animateCities = () => {
      cityElements.forEach((city, index) => {
        setTimeout(() => {
          city.classList.add('city-light-active');
          setTimeout(() => {
            city.classList.remove('city-light-active');
          }, 1500);
        }, index * 600);
      });
    };

    // Initial animation
    setTimeout(animateCities, 1500);
    
    // Repeat the animation every 6 seconds
    const interval = setInterval(animateCities, 6000);
    
    return () => clearInterval(interval);
  }, []);

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
              <span className="absolute left-0 bottom-0 w-full h-1 bg-ecaris-green"></span>
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
        
        <div className="mt-12 text-center opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          <p className="text-lg text-gray-700 mb-4">Our presence extends to multiple European countries:</p>
          <div className="flex flex-wrap justify-center gap-x-3 text-lg font-medium">
            <span className="city-light inline-block px-2">Luxembourg</span>
            <span className="text-gray-500">–</span>
            <span className="city-light inline-block px-2">Paris</span>
            <span className="text-gray-500">–</span>
            <span className="city-light inline-block px-2">Geneva</span>
            <span className="text-gray-500">–</span>
            <span className="city-light inline-block px-2">London</span>
            <span className="text-gray-500">–</span>
            <span className="city-light inline-block px-2">Berlin</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offices;
