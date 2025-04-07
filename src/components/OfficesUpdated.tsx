
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { offices } from '@/data/officeData';

const OfficesUpdated = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const officesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          officesRef.current?.classList.add('animate-fade-in-up');
          officesRef.current?.classList.remove('opacity-0'); // Remove opacity-0 class when visible
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0 duration-500 transition-all"
        >
          {offices.map((office) => (
            <Link 
              key={office.id} 
              to={`/offices/${office.city.toLowerCase()}`}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 block"
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">{office.flagEmoji}</span>
                <h3 className="text-xl font-bold text-gray-900">{office.city}</h3>
              </div>
              <p className="text-gray-700 whitespace-pre-line">
                {office.address}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfficesUpdated;
