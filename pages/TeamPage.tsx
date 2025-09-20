
import React from 'react';
import Hero from '../components/Hero';
import CallToAction from '../components/CallToAction';
import { caBhaveshChaudharyPhoto } from '../assets/ca-bhavesh-chaudhary';
import { useLanguage } from '../contexts/LanguageContext';
import { usePageMetadata } from '../hooks/usePageMetadata';

const TeamPage: React.FC = () => {
  const { t } = useLanguage();

  usePageMetadata({
    title: t('teamMetaTitle'),
    description: t('teamMetaDescription'),
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": t('teamName'),
      "jobTitle": t('teamRole'),
      "image": caBhaveshChaudharyPhoto,
      "worksFor": {
        "@type": "Organization",
        "name": "B N CHAUDHARY & ASSOCIATES"
      },
      "description": t('teamBio1'),
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Palanpur",
        "addressRegion": "Gujarat",
        "addressCountry": "IN"
      },
      "alumniOf": "Institute of Chartered Accountants of India (ICAI)"
    }
  });

  return (
    <div>
      <Hero title={t('teamHeroTitle')} imageUrl="https://picsum.photos/1600/400?grayscale&blur=1" />
      <div className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-2">
              <img 
                src={caBhaveshChaudharyPhoto} 
                alt={t('teamPhotoAlt')} 
                className="rounded-lg shadow-2xl w-full h-auto object-cover aspect-[4/5]"
              />
            </div>
            <div className="md:col-span-3">
              <h2 className="text-3xl font-bold text-brand-dark-blue mb-2">{t('teamName')}</h2>
              <p className="text-xl font-semibold text-brand-gold mb-6">{t('teamRole')}</p>
              
              <h3 className="text-2xl font-bold text-brand-dark-blue mb-4">{t('teamAboutMeTitle')}</h3>
              <div className="space-y-4 text-lg text-brand-gray">
                <p>
                  {t('teamBio1')}
                </p>
                <p>
                  {t('teamBio2')}
                </p>
                <p>
                  {t('teamBio3')}
                </p>
                <p>
                  {t('teamBio4')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CallToAction />
    </div>
  );
};

export default TeamPage;
