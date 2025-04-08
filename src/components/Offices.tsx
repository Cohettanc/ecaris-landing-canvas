
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { offices } from '@/data/officeData';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';

// Array of all city names for the carousel
const cityNames = ["Luxembourg", "Paris", "Geneva", "London", "Berlin"];

const Offices = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const officesRef = useRef<(HTMLDivElement | null)[]>([]);
  const [api, setApi] = useState<any>(null);
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

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

  // Set up autoplay
  useEffect(() => {
    if (!api) return;
    
    const autoplay = () => {
      intervalRef.current = setInterval(() => {
        api.scrollNext();
      }, 3000);
    };
    
    autoplay();
    
    // Pause autoplay when user interacts with carousel
    api.on('pointerDown', () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    });
    
    // Resume autoplay after a period of inactivity
    api.on('pointerUp', () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setTimeout(autoplay, 5000);
    });
    
    // Track current slide
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
    
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      api.off('select');
      api.off('pointerDown');
      api.off('pointerUp');
    };
  }, [api]);

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
          
          <div className="cities-slider-container max-w-lg mx-auto">
            <Carousel
              setApi={setApi}
              className="w-full"
              opts={{
                align: "center",
                loop: true,
              }}
            >
              <CarouselContent>
                {cityNames.map((city, index) => (
                  <CarouselItem key={city} className="basis-auto">
                    <div className={`city-slider-item px-8 py-2 ${current === index ? 'active' : ''}`}>
                      {city}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              <div className="flex items-center justify-center mt-6">
                <CarouselPrevious className="relative static mr-2 h-8 w-8" />
                
                <div className="flex gap-2">
                  {cityNames.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => api?.scrollTo(index)}
                      className={`slider-indicator ${current === index ? 'active' : ''}`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
                
                <CarouselNext className="relative static ml-2 h-8 w-8" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offices;
