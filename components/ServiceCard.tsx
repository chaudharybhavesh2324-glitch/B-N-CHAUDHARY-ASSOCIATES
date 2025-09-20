
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  linkTo: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, linkTo }) => {
  const { t } = useLanguage();
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 flex flex-col">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-light-blue text-brand-blue">
          <Icon className="h-8 w-8" />
        </div>
        <h3 className="mt-6 text-xl font-bold text-brand-dark-blue">{title}</h3>
        <p className="mt-2 text-brand-gray">{description}</p>
      </div>
      <div className="mt-6 flex-grow flex items-end">
        <Link to={linkTo} className="text-brand-blue font-semibold hover:text-brand-gold transition-colors duration-300">
          {t('serviceCardLearnMore')}
          <span className="sr-only"> about {title}</span>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
