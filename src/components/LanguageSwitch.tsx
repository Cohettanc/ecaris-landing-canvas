
import { Languages } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors duration-200"
      aria-label={`Switch to ${language === 'en' ? 'French' : 'English'}`}
    >
      <Languages size={16} className="text-gray-600" />
      <span className={cn(
        "text-sm font-medium",
        language === 'en' ? "text-ecaris-green" : "text-gray-600"
      )}>
        EN
      </span>
      <span className="text-gray-300">|</span>
      <span className={cn(
        "text-sm font-medium",
        language === 'fr' ? "text-ecaris-green" : "text-gray-600"
      )}>
        FR
      </span>
    </button>
  );
};

export default LanguageSwitch;
