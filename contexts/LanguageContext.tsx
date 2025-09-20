
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { translations } from '../translations';

type Language = 'en' | 'hi' | 'gu';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
  getTranslation: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const getTranslationData = (lang: Language, key: string) => {
    const keys = key.split('.');
    let result: any = translations[lang];
    for (const k of keys) {
      result = result?.[k];
      if (result === undefined) {
        return undefined;
      }
    }
    return result;
  }

  const t = (key: string): string => {
    const translation = getTranslationData(language, key);
    if (typeof translation === 'string') {
      return translation;
    }
    // Fallback to English if translation not found or not a string
    const fallback = getTranslationData('en', key);
    return (typeof fallback === 'string') ? fallback : key;
  };
  
  const getTranslation = (key: string): any => {
    const translation = getTranslationData(language, key);
    if (translation !== undefined) {
      return translation;
    }
    // Fallback to English
    return getTranslationData('en', key);
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, getTranslation }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
