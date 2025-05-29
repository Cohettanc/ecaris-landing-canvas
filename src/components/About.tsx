
import { useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
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
                {t('about.title')}
                <span className="absolute left-0 bottom-0 w-full h-1 bg-ecaris-green"></span>
              </span>
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {t('about.p1')}
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {t('about.p2')}
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {t('about.p3')}
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              {t('about.p4')}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('about.p5')}
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
                  alt={t('about.imageAlt')} 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <p className="text-ecaris-green font-medium">{t('about.tagline')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
