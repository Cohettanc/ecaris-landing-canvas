
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
                <span className="absolute left-0 bottom-0 w-24 h-1 bg-ecaris-green"></span>
              </span>
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We connect businesses with the best talent. Thanks to our extensive network and expertise, we can quickly identify the most valuable and sought-after resources.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With Ecaris, you gain access to rare skills, ensuring the success of your most ambitious projects.
            </p>
          </div>
          <div 
            ref={imageRef}
            className="w-full md:w-1/2 opacity-0"
          >
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Business professionals meeting" 
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
