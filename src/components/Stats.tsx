
import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 10, prefix: '+', label: 'clients', description: 'ECARIS has been established since 2019 and opened its Paris based subsidiary in 2024. Over the years ECARIS has proved to its customers that experience matters.' },
  { value: 2, prefix: '+', label: 'years of mandates', description: 'Our average mandate ends up being around two years long which is possible only because we deliver our customers long term committed consultants. Low turn over allows maximal value to our customers.' },
  { value: 3000, prefix: '+', label: 'consultants', description: 'Over the years we have built a database of over 3k qualified consultants working with us on a freelance basis. Each of these consultants are screened and must be qualified by one of our roaster of ~10 experts. We are proud to say that our consultants have a high level of engagement and expertise.' },
  { value: 50, prefix: '+', label: 'mandates', description: 'As of september 2024, we have successfully closed on over 50 mandates which position us as a recognized expert in our industry' },
];

const Stats = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
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

  useEffect(() => {
    if (!inView) return;

    stats.forEach((stat, index) => {
      let startValue = 0;
      const endValue = stat.value;
      const duration = 1500; // in milliseconds
      const increment = Math.ceil(endValue / (duration / 15)); // Update every 15ms
      
      const timer = setInterval(() => {
        startValue += increment;
        
        if (startValue > endValue) {
          startValue = endValue;
          clearInterval(timer);
        }
        
        setCounts(prev => {
          const newCounts = [...prev];
          newCounts[index] = startValue;
          return newCounts;
        });
      }, 15);
      
      return () => clearInterval(timer);
    });
  }, [inView]);

  return (
    <section id="clients" ref={sectionRef} className="py-24 bg-white">
      <div className="section-container">
        <div className="text-center mb-16 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <h2 className="heading-lg text-gray-900 mb-4 inline-block relative">
            <span className="inline-block pb-2 relative">
              ECARIS at a Glance
              <span className="absolute left-0 bottom-0 w-full h-1 bg-ecaris-green"></span>
            </span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 bg-white opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.3 + index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <div className="flex items-baseline mb-2">
                <span className="text-4xl font-bold text-ecaris-green">{stat.prefix}</span>
                <span className="text-5xl font-bold text-ecaris-green">{counts[index].toLocaleString()}</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">{stat.label}</h3>
              <p className="text-gray-600 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
