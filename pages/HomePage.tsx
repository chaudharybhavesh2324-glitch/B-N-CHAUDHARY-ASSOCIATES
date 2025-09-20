
import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import CallToAction from '../components/CallToAction';
import ServiceCard from '../components/ServiceCard';
import { SERVICES_DATA } from '../constants';
import { caBhaveshChaudharyPhoto } from '../assets/ca-bhavesh-chaudhary';
import { useLanguage } from '../contexts/LanguageContext';
import { usePageMetadata } from '../hooks/usePageMetadata';

const HomePage: React.FC = () => {
    const { t, getTranslation } = useLanguage();
    const featuredServices = SERVICES_DATA;
    
    usePageMetadata({
      title: t('homeMetaTitle'),
      description: t('homeMetaDescription'),
      structuredData: {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "B N CHAUDHARY & ASSOCIATES",
        "url": "https://www.bnca.in/",
        "logo": "https://www.bnca.in/logo.png",
        "telephone": "+91-8291658940",
        "email": "chaudharybhavesh2324@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Third floor, Shop No-10 Trimurti Complex, Hanuman Tekri, near SBI bank",
          "addressLocality": "Palanpur",
          "addressRegion": "Gujarat",
          "postalCode": "385001",
          "addressCountry": "IN"
        },
        "description": t('homeMetaDescription'),
        "founder": {
            "@type": "Person",
            "name": "CA Bhaveshkumar Chaudhary"
        }
      }
    });

  return (
    <div>
      <Hero
        title={t('homeHeroTitle')}
        subtitle={t('homeHeroSubtitle')}
        imageUrl="https://picsum.photos/1920/1080?grayscale&blur=2"
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-brand-dark-blue mb-4">{t('homeExcellenceTitle')}</h2>
            <p className="text-lg text-brand-gray max-w-3xl mx-auto">
            {t('homeExcellenceText')}
            </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-brand-dark-blue">{t('homeServicesTitle')}</h2>
                <p className="text-lg text-brand-gray mt-2">{t('homeServicesSubtitle')}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {featuredServices.map(service => {
                   const serviceContent = getTranslation(`services.${service.id}`);
                   if (!serviceContent) return null;
                   return (
                       <ServiceCard 
                        key={service.id}
                        title={serviceContent.title}
                        description={serviceContent.introduction.substring(0, 120) + '...'}
                        linkTo={`/services/${service.id}`}
                        icon={service.icon}
                       />
                   )
               })}
            </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
                <img src={caBhaveshChaudharyPhoto} alt={t('teamPhotoAlt')} className="rounded-lg shadow-xl"/>
            </div>
            <div>
                <h2 className="text-3xl font-bold text-brand-dark-blue mb-4">{t('homeWhyChooseUsTitle')}</h2>
                <ul className="space-y-4 text-brand-gray text-lg">
                    <li className="flex items-start"><span className="text-brand-gold mr-3 mt-1">&#10003;</span> <strong>{t('homeWhy1Title')}:</strong> {t('homeWhy1Text')}</li>
                    <li className="flex items-start"><span className="text-brand-gold mr-3 mt-1">&#10003;</span> <strong>{t('homeWhy2Title')}:</strong> {t('homeWhy2Text')}</li>
                    <li className="flex items-start"><span className="text-brand-gold mr-3 mt-1">&#10003;</span> <strong>{t('homeWhy3Title')}:</strong> {t('homeWhy3Text')}</li>
                </ul>
                <Link to="/team" className="mt-8 inline-block bg-brand-blue text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-800 transition-colors">
                    {t('homeMeetPartnerButton')}
                </Link>
            </div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
};

export default HomePage;
