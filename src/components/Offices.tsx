
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { offices } from '@/data/officeData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Offices = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const officesRef = useRef<(HTMLDivElement | null)[]>([]);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeCity, setActiveCity] = useState(0);
  
  const cities = ["Luxembourg", "Paris", "Geneva", "London", "Berlin"];

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

  // Auto-scroll carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCity((prev) => (prev + 1) % cities.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [cities.length]);

  const handlePrevious = () => {
    setActiveCity((prev) => (prev - 1 + cities.length) % cities.length);
  };

  const handleNext = () => {
    setActiveCity((prev) => (prev + 1) % cities.length);
  };

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
          
          <div className="simple-carousel max-w-3xl mx-auto">
            <div className="relative">
              <div 
                ref={carouselRef} 
                className="overflow-hidden py-8"
              >
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${activeCity * 20}%)` }}
                >
                  {cities.map((city, index) => (
                    <div 
                      key={index}
                      className={`w-1/5 flex-shrink-0 text-center px-4 transition-all duration-500 ${
                        activeCity === index 
                          ? 'text-primary font-semibold scale-110' 
                          : 'text-gray-500'
                      }`}
                    >
                      {city}
                    </div>
                  ))}
                </div>
              </div>
              
              <button 
                onClick={handlePrevious}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md text-gray-700 hover:text-primary transition-colors z-10"
                aria-label="Previous city"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <button 
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md text-gray-700 hover:text-primary transition-colors z-10"
                aria-label="Next city"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex justify-center gap-2 mt-6">
              {cities.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCity(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeCity === index ? 'bg-primary w-3 h-3' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to city ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offices;
