
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { offices } from '@/data/officeData';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Offices = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const [activeCity, setActiveCity] = useState<number>(0);
  const cities = ["Luxembourg", "Paris", "Geneva", "London", "Berlin"];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          titleRef.current?.classList.add('animate-fade-in');
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

  // City highlight effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCity((prev) => (prev + 1) % cities.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [cities.length]);

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
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Explore our international presence across Europe's major business centers
          </p>
        </div>
        
        <div className="relative px-8 sm:px-12 md:px-16 lg:px-20 mb-12">
          <Carousel className="w-full">
            <CarouselContent>
              {offices.map((office) => (
                <CarouselItem key={office.id} className="md:basis-1/2 lg:basis-1/3">
                  <Link to={`/office/${office.id}`} className="block h-full">
                    <div className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full bg-white">
                      <div className="h-52 overflow-hidden">
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 md:-left-2" />
            <CarouselNext className="right-0 md:-right-2" />
          </Carousel>
        </div>
        
        <div className="mt-12 text-center opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          <p className="text-lg text-gray-700 mb-2">Our presence extends to multiple European countries:</p>
          <p className="text-lg font-medium text-gray-900 flex justify-center flex-wrap gap-x-4">
            {cities.map((city, index) => (
              <span 
                key={index}
                className={`city-highlight transition-all duration-300 ${activeCity === index ? 'active-city' : 'text-gray-900'}`}
              >
                {city}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Offices;
