
import { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

type Language = 'id' | 'en';

const LanguageSelector = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    // Get language from localStorage or default to Indonesian
    return (localStorage.getItem('language') as Language) || 'id';
  });
  
  const navigate = useNavigate();
  
  useEffect(() => {
    // Save language preference
    localStorage.setItem('language', currentLanguage);
  }, [currentLanguage]);

  const toggleLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
  };

  return (
    <div className="fixed top-4 right-4 md:right-8 z-[60] flex gap-2 items-center">
      <Globe className="h-4 w-4 text-waras-lime hidden md:block" />
      <div className="flex space-x-1 bg-waras-asphalt/75 backdrop-blur-sm p-1 rounded-full border border-waras-lime/30">
        <Button 
          size="sm" 
          variant={currentLanguage === 'id' ? 'default' : 'outline'}
          className={`rounded-full text-xs px-3 py-1 h-auto ${currentLanguage === 'id' ? 'bg-waras-lime text-black' : 'text-white border-waras-lime/30 hover:text-waras-lime'}`}
          onClick={() => toggleLanguage('id')}
        >
          ID
        </Button>
        <Button 
          size="sm" 
          variant={currentLanguage === 'en' ? 'default' : 'outline'}
          className={`rounded-full text-xs px-3 py-1 h-auto ${currentLanguage === 'en' ? 'bg-waras-lime text-black' : 'text-white border-waras-lime/30 hover:text-waras-lime'}`}
          onClick={() => toggleLanguage('en')}
        >
          EN
        </Button>
      </div>
    </div>
  );
};

export default LanguageSelector;
