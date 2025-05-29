
import { useEffect, useRef } from 'react';

const BusinessExpertise = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const expertiseAreas = [
    {
      logo: "/lovable-uploads/751b4c6a-6e04-4a09-9903-73498e1a11b4.png",
      emoji: "🚚",
      title: "Supply Chain",
      description: "We optimize supply chain processes through smart data integration, advanced analytics, and AI use cases — from demand forecasting to logistics flow optimization."
    },
    {
      logo: "/lovable-uploads/be172d23-d8ae-44b5-8647-63dc27d0ea1f.png",
      emoji: "🏭",
      title: "Industrial Operations",
      description: "We support manufacturing excellence by leveraging real-time data, automation, and predictive insights to enhance productivity, quality, and agility on the shop floor."
    },
    {
      logo: "/lovable-uploads/f76c8ba3-2287-446c-aa5c-f33beb96c8c7.png",
      emoji: "💰",
      title: "Finance & Performance Management",
      description: "We help finance teams streamline reporting, improve cost control, and enable scenario planning through data-driven platforms and performance dashboards."
    },
    {
      logo: "/lovable-uploads/98e2239d-0e1b-498a-b688-07b4f67aa13e.png",
      emoji: "👥",
      title: "Human Resources & Organizational Efficiency",
      description: "We enable HR transformation and organizational design by integrating workforce data, aligning structures to strategy, and supporting change management through actionable insights."
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
          <h2 className="heading-lg text-gray-900 mb-6 relative">
            <span className="inline-block pb-2 relative">
              Business Expertise
              <span className="absolute left-0 bottom-0 w-full h-1 bg-ecaris-green"></span>
            </span>
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
            At ECARIS, we combine deep technical know-how with a sharp understanding of business needs. Our consultants deliver high-impact solutions tailored to the operational challenges of today's organizations.
          </p>
          <p className="text-lg text-gray-700 font-medium">
            We bring value across four key domains:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              ref={(el) => cardsRef.current[index] = el}
              className="bg-gray-50 p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 opacity-0"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0">
                  <img 
                    src={area.logo} 
                    alt={`${area.title} logo`}
                    className="h-12 w-12 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {area.title}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessExpertise;
