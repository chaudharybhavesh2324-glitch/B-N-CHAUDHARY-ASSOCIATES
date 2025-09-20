
import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import CallToAction from '../components/CallToAction';
import { caBhaveshChaudharyPhoto } from '../assets/ca-bhavesh-chaudhary';
import { useLanguage } from '../contexts/LanguageContext';
import { usePageMetadata } from '../hooks/usePageMetadata';

const AboutPage: React.FC = () => {
  const { t } = useLanguage();
  
  usePageMetadata({
    title: t('aboutMetaTitle'),
    description: t('aboutMetaDescription'),
  });

  return (
    <div>
      <Hero title={t('aboutHeroTitle')} imageUrl="https://picsum.photos/1600/400?grayscale" />
      <div className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-dark-blue mb-4">{t('aboutMissionTitle')}</h2>
              <p className="text-lg text-brand-gray mb-4">
                {t('aboutMissionText')}
              </p>
              <h2 className="text-3xl font-bold text-brand-dark-blue mb-4 mt-8">{t('aboutVisionTitle')}</h2>
              <p className="text-lg text-brand-gray">
                {t('aboutVisionText')}
              </p>
            </div>
            <div>
              <img src="https://picsum.photos/500/600" alt="Office building" className="rounded-lg shadow-xl"/>
            </div>
          </div>
        </div>
      </div>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-brand-dark-blue mb-4">{t('aboutLeadershipTitle')}</h2>
          <div className="max-w-xs mx-auto mt-8">
            <img src={caBhaveshChaudharyPhoto} alt={t('teamPhotoAlt')} className="rounded-full w-48 h-48 mx-auto shadow-lg object-cover" />
            <h3 className="text-2xl font-bold text-brand-dark-blue mt-6">{t('teamName')}</h3>
            <p className="text-brand-gold font-semibold">{t('teamRole')}</p>
            <Link to="/team" className="mt-6 inline-block bg-brand-blue text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-800 transition-colors">
                {t('aboutReadBioButton')}
            </Link>
          </div>
        </div>
      </section>
      
      <CallToAction />
    </div>
  );
};

export default AboutPage;
