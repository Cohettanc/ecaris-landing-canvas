
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { offices } from '@/data/officeData';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Array of all city names for the carousel
const cityNames = ["Luxembourg", "Paris", "Geneva", "London", "Berlin"];

const Offices = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const officesRef = useRef<(HTMLDivElement | null)[]>([]);
  const [autoplay, setAutoplay] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

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

  // Handle autoplay for the city carousel
  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % cityNames.length);
      }, 4000);
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [autoplay]);

  // Pause autoplay when user interacts with the carousel
  const handleManualNavigation = (index: number) => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      setAutoplay(false);
    }
    setCurrentSlide(index);
    
    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => {
      setAutoplay(true);
    }, 10000);
  };

  const nextSlide = () => {
    handleManualNavigation((currentSlide + 1) % cityNames.length);
  };

  const prevSlide = () => {
    handleManualNavigation((currentSlide - 1 + cityNames.length) % cityNames.length);
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
        
        <div className="mt-16 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          <p className="text-lg text-gray-700 mb-6">Our presence extends to multiple European countries:</p>
          
          <div className="city-carousel-wrapper max-w-md mx-auto">
            <div className="city-carousel-container relative">
              <div className="city-carousel-track">
                {cityNames.map((city, index) => (
                  <div 
                    key={city}
                    className={`city-carousel-item ${index === currentSlide ? 'active' : ''}`}
                  >
                    {city}
                  </div>
                ))}
              </div>
              
              <div className="city-carousel-navigation">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="city-carousel-nav-btn prev"
                  onClick={prevSlide}
                >
                  <ChevronLeft className="h-5 w-5" />
                  <span className="sr-only">Previous city</span>
                </Button>
                
                <div className="city-carousel-indicators">
                  {cityNames.map((_, index) => (
                    <button
                      key={index}
                      className={`city-carousel-indicator ${index === currentSlide ? 'active' : ''}`}
                      onClick={() => handleManualNavigation(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
                
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="city-carousel-nav-btn next"
                  onClick={nextSlide}
                >
                  <ChevronRight className="h-5 w-5" />
                  <span className="sr-only">Next city</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offices;
