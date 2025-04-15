import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { offices } from '@/data/officeData';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Updated array of city names for the carousel
const cityNames = ["Luxembourg", "Paris", "Geneva", "London", "Berlin", "Milan"];

const Offices = () => {
  const location = useLocation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const officesRef = useRef<(HTMLDivElement | null)[]>([]);
  const [autoplay, setAutoplay] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  // Check if we should scroll to this section on mount
  useEffect(() => {
    if (location.hash === '#offices' && sectionRef.current) {
      setTimeout(() => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [location.hash]);

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
      }, 3000);
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
        
        <div className="mt-12 text-center opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          <p className="text-lg text-gray-700 mb-4">Our presence extends to multiple European countries:</p>
          
          <div className="cities-carousel-container relative max-w-lg mx-auto">
            <div className="overflow-hidden px-10">
              <div 
                className="cities-carousel flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {cityNames.map((city, index) => (
                  <div 
                    key={city} 
                    className="cities-carousel-item w-full flex-shrink-0 flex justify-center"
                  >
                    <span className={`text-lg font-medium ${index === currentSlide ? 'text-ecaris-green font-semibold' : 'text-gray-900'}`}>
                      {city}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <Button 
              variant="outline" 
              size="icon" 
              className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous city</span>
            </Button>
            
            <Button 
              variant="outline" 
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full"
              onClick={nextSlide}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next city</span>
            </Button>
            
            <div className="city-indicators flex justify-center mt-4 space-x-2">
              {cityNames.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-ecaris-green' : 'bg-gray-300'
                  }`}
                  onClick={() => handleManualNavigation(index)}
                  aria-label={`Go to slide ${index + 1}`}
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
