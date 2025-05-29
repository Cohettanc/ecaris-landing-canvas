
import { useEffect, useRef } from 'react';
import { Truck, Factory, TrendingUp, Users } from 'lucide-react';

const BusinessExpertise = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const expertiseAreas = [
    {
      title: "Supply Chain",
      description: "We optimize supply chain processes through smart data integration, advanced analytics, and AI use cases — from demand forecasting to logistics flow optimization.",
      icon: <Truck className="h-10 w-10 text-ecaris-green" />
    },
    {
      title: "Industrial Operations",
      description: "We support manufacturing excellence by leveraging real-time data, automation, and predictive insights to enhance productivity, quality, and agility on the shop floor.",
      icon: <Factory className="h-10 w-10 text-ecaris-green" />
    },
    {
      title: "Finance & Performance Management",
      description: "We help finance teams streamline reporting, improve cost control, and enable scenario planning through data-driven platforms and performance dashboards.",
      icon: <TrendingUp className="h-10 w-10 text-ecaris-green" />
    },
    {
      title: "Human Resources & Organizational Efficiency",
      description: "We enable HR transformation and organizational design by integrating workforce data, aligning structures to strategy, and supporting change management through actionable insights.",
      icon: <Users className="h-10 w-10 text-ecaris-green" />
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          titleRef.current?.classList.add('animate-fade-in');
          
          cardsRef.current.forEach((card, index) => {
            if (card) {
              setTimeout(() => {
                card.classList.add('animate-scale-in');
              }, 150 * index);
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
    <section id="business-expertise" ref={sectionRef} className="py-24 bg-white">
      <div className="section-container">
        <div 
          ref={titleRef}
          className="text-center mb-16 opacity-0"
        >
          <h2 className="heading-lg text-gray-900 mb-4 inline-block relative">
            <span className="inline-block pb-2 relative">
              Business Expertise
              <span className="absolute left-0 bottom-0 w-full h-1 bg-ecaris-green"></span>
            </span>
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-8">
            At ECARIS, we combine deep technical know-how with a sharp understanding of business needs. Our consultants deliver high-impact solutions tailored to the operational challenges of today's organizations.
          </p>
          <p className="text-lg font-medium text-gray-900 max-w-3xl mx-auto">
            We bring value across four key domains:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              ref={(el) => cardsRef.current[index] = el}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100 opacity-0"
            >
              <div className="mb-6">{area.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                {area.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessExpertise;
