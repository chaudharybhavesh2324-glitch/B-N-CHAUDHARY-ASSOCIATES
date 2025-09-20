
import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { useLanguage } from '../contexts/LanguageContext';
import { usePageMetadata } from '../hooks/usePageMetadata';

const NotFoundPage: React.FC = () => {
  const { t } = useLanguage();
  
  usePageMetadata({
    title: t('notFoundMetaTitle'),
    description: t('notFoundMetaDescription'),
  });
  
  return (
    <div>
        <Hero title={t('notFoundTitle')} />
        <div className="text-center py-20 bg-white">
            <div className="container mx-auto px-6">
                <p className="text-xl text-brand-gray mb-8">{t('notFoundText')}</p>
                <Link to="/" className="bg-brand-blue text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-800 transition-colors">
                    {t('notFoundButton')}
                </Link>
            </div>
        </div>
    </div>
  );
};

export default NotFoundPage;
