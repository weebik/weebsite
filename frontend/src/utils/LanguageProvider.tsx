import { useState } from 'react';
import { language, LanguageProviderProps } from '../types/language.type.ts';
import { LanguageContext } from './LanguageContext.ts';

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<language>('en');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'pl' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
