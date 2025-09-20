
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as 'en' | 'hi' | 'gu');
  };

  return (
    <div className="relative">
      <select
        value={language}
        onChange={handleLanguageChange}
        className="bg-brand-dark-blue text-white border-gray-400 border rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-brand-gold appearance-none text-sm"
        aria-label="Select language"
      >
        <option value="en">English</option>
        <option value="hi">हिन्दी</option>
        <option value="gu">ગુજરાતી</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
