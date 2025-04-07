
import { useEffect, useRef } from 'react';

const offices = [
  {
    title: "Main Office (Luxembourg)",
    address: ["70, route d'Esch", "1470 Luxembourg", "LUXEMBOURG"],
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Representative Office (Paris)",
    address: ["78 avenue des Champs Elysées", "75008 Paris", "FRANCE"],
    image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  }
];

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

  return (
    <section id="offices" ref={sectionRef} className="py-24 bg-gray-50">
      <div className="section-container">
        <div 
          ref={titleRef}
          className="text-center mb-16 opacity-0"
        >
          <h2 className="heading-lg text-gray-900 mb-4 inline-block relative">
            Our Offices
            <span className="absolute left-0 right-0 bottom-0 w-full h-1 bg-ecaris-green"></span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offices.map((office, index) => (
            <div
              key={index}
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
          ))}
        </div>
        
        <div className="mt-12 text-center opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          <p className="text-lg text-gray-700">Our presence extends to multiple European countries:</p>
          <p className="text-lg font-medium text-gray-900 mt-2">Luxembourg – Paris – Geneva – London – Berlin</p>
        </div>
      </div>
    </section>
  );
};

export default Offices;
