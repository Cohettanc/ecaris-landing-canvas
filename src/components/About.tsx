
import { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          textRef.current?.classList.add('animate-fade-in-left');
          imageRef.current?.classList.add('animate-fade-in-right');
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
    <section id="about" ref={sectionRef} className="py-24 bg-white">
      <div className="section-container">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div 
            ref={textRef}
            className="w-full md:w-1/2 opacity-0"
          >
            <h2 className="heading-lg text-gray-900 mb-6 relative">
              <span className="inline-block pb-2 relative">
                Who Are We?
                <span className="absolute left-0 bottom-0 w-full h-1 bg-ecaris-green"></span>
              </span>
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              ECARIS is a consulting firm that supports business and IT teams in their digital transformation initiatives.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We cover the full data value chain — from integrating business applications (ERP, WMS, CRM, HRIS, accounting) to designing and deploying data platforms (cloud, on-premise, hybrid) that enable high-value data and AI use cases.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our mission: deliver tangible outcomes across supply chain, industrial operations, finance, and HR.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Our projects are led by senior independent experts who combine deep technical skills with strong business understanding.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our hybrid model blends the agility of independent talent with the quality standards of top-tier consulting firms.
            </p>
          </div>
          <div 
            ref={imageRef}
            className="w-full md:w-1/2 opacity-0"
          >
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/3c35e841-2a19-4149-afe6-610b8807c475.png" 
                  alt="Tech professionals collaborating on code" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <p className="text-ecaris-green font-medium">Connecting top talent with leading businesses</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
