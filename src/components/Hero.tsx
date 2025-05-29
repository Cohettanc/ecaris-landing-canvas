
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(0,108,76,0.05),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(0,108,76,0.05),transparent_50%)]"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="max-w-4xl">
          <h1 
            className="heading-xl mb-4 text-gray-900 opacity-0 animate-fade-in" 
            style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
          >
            <span className="text-ecaris-green">{t('hero.title')}</span>
          </h1>
          
          <p 
            className="text-xl md:text-2xl text-gray-700 mb-8 opacity-0 animate-fade-in" 
            style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
          >
            {t('hero.description')}
          </p>
          
          <div 
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}
          >
            <button 
              onClick={() => scrollToSection('services')}
              className="px-8 py-3 rounded-md bg-ecaris-green text-white hover:bg-ecaris-green/90 transition-colors duration-300 transform hover:scale-[1.02] font-medium"
            >
              {t('hero.ourServices')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 rounded-md border border-ecaris-green text-ecaris-green hover:bg-ecaris-green/5 transition-colors duration-300 transform hover:scale-[1.02] font-medium"
            >
              {t('hero.contactUs')}
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-ecaris-green transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;
