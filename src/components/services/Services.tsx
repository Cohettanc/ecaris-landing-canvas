
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { services } from './serviceData';
import ServiceCard from './ServiceCard';
import ServiceDetail from './ServiceDetail';

const Services = () => {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const openServiceDetail = (serviceId: string) => {
    const service = services.find(s => s.id === serviceId);
    
    if (service && service.pagePath) {
      navigate(service.pagePath);
    } else {
      setSelectedService(serviceId);
    }
  };

  const closeServiceDetail = () => {
    setSelectedService(null);
  };

  const selectedServiceData = services.find(service => service.id === selectedService);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          titleRef.current?.classList.add('animate-fade-in');
          
          cardsRef.current.forEach((card, index) => {
            if (card) {
              setTimeout(() => {
                card.classList.add('animate-scale-in');
              }, 150 * index); // Staggered animation
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

  // This function sets the refs for the card elements
  const setCardRef = (el: HTMLDivElement | null, index: number) => {
    cardsRef.current[index] = el;
  };

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-gray-50">
      <div className="section-container">
        <div 
          ref={titleRef}
          className="text-center mb-16 opacity-0"
        >
          <h2 className="heading-lg text-gray-900 mb-4 inline-block relative">
            Our Services
            <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-24 h-1 bg-ecaris-green"></span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We focus on our core expertise sectors, to provide you with our most relevant Subject Matter Experts for each industry.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              onSelect={openServiceDetail}
              cardRef={(el) => setCardRef(el, index)}
            />
          ))}
        </div>
      </div>

      <ServiceDetail
        service={selectedServiceData}
        isOpen={selectedService !== null}
        onClose={closeServiceDetail}
      />
    </section>
  );
};

export default Services;
