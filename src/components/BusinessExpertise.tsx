
import { useEffect, useRef } from 'react';
import { Truck, Factory, TrendingUp, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const BusinessExpertise = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const expertiseAreas = [
    {
      title: t('businessExpertise.supplyChain.title'),
      description: t('businessExpertise.supplyChain.description'),
      icon: <Truck className="h-10 w-10 text-ecaris-green" />
    },
    {
      title: t('businessExpertise.industrial.title'),
      description: t('businessExpertise.industrial.description'),
      icon: <Factory className="h-10 w-10 text-ecaris-green" />
    },
    {
      title: t('businessExpertise.finance.title'),
      description: t('businessExpertise.finance.description'),
      icon: <TrendingUp className="h-10 w-10 text-ecaris-green" />
    },
    {
      title: t('businessExpertise.hr.title'),
      description: t('businessExpertise.hr.description'),
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
              {t('businessExpertise.title')}
              <span className="absolute left-0 bottom-0 w-full h-1 bg-ecaris-green"></span>
            </span>
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-8">
            {t('businessExpertise.intro1')}
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {t('businessExpertise.intro2')}
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
