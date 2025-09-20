
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

interface CallToActionProps {
    titleKey?: string;
    textKey?: string;
    buttonTextKey?: string;
    buttonLink?: string;
}

const CallToAction: React.FC<CallToActionProps> = ({
    titleKey = "ctaTitle",
    textKey = "ctaText",
    buttonTextKey = "ctaButton",
    buttonLink = "/contact"
}) => {
  const { t } = useLanguage();
  return (
    <section className="bg-brand-light-blue">
      <div className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-brand-dark-blue mb-4">{t(titleKey)}</h2>
        <p className="text-lg text-brand-gray max-w-3xl mx-auto mb-8">
          {t(textKey)}
        </p>
        <Link
          to={buttonLink}
          className="bg-brand-gold text-brand-dark-blue font-bold py-3 px-8 rounded-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          {t(buttonTextKey)}
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;