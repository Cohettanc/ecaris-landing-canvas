
import { useRef, useEffect } from 'react';

const OfficesUpdated = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const officesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          officesRef.current?.classList.add('animate-fade-in-up');
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

  const offices = [
    {
      id: 1,
      city: 'Luxembourg',
      address: '70, route d\'Esch\n1470 Luxembourg\nLUXEMBOURG',
      flagEmoji: '🇱🇺',
    },
    {
      id: 2,
      city: 'Paris',
      address: '78 avenue des Champs Elysées\n75008\nParis\nFRANCE',
      flagEmoji: '🇫🇷',
    },
    {
      id: 3,
      city: 'Geneva',
      address: '15 route de Ferney\n1202 Geneva\nSWITZERLAND',
      flagEmoji: '🇨🇭',
    },
    {
      id: 4,
      city: 'London',
      address: '20 Fenchurch Street\nLondon EC3M 3BY\nUNITED KINGDOM',
      flagEmoji: '🇬🇧',
    },
    {
      id: 5,
      city: 'Berlin',
      address: 'Friedrichstraße 76\n10117 Berlin\nGERMANY',
      flagEmoji: '🇩🇪',
    },
  ];

  return (
    <section id="offices" ref={sectionRef} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-gray-900 mb-4 relative">
            <span className="inline-block pb-2 relative">
              Our Offices
              <span className="absolute left-0 bottom-0 w-full h-1 bg-ecaris-green"></span>
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            We have offices in 5 European countries to better serve our clients across the continent. 
            Our consultants can work remotely or on-site to meet your specific needs.
          </p>
        </div>
        
        <div 
          ref={officesRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0"
        >
          {offices.map((office) => (
            <div key={office.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">{office.flagEmoji}</span>
                <h3 className="text-xl font-bold text-gray-900">{office.city}</h3>
              </div>
              <p className="text-gray-700 whitespace-pre-line">
                {office.address}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfficesUpdated;
