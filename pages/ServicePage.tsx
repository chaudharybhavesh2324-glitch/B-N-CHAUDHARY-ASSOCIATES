import React, { useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import CallToAction from '../components/CallToAction';
import { useLanguage } from '../contexts/LanguageContext';
import { SERVICE_OFFERING_ICONS } from '../constants';
import { usePageMetadata } from '../hooks/usePageMetadata';

const ServicePage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const { getTranslation, t } = useLanguage();

  const serviceData = useMemo(() => 
    serviceId ? getTranslation(`services.${serviceId}`) : null,
    [serviceId, getTranslation]
  );
  
  usePageMetadata({
    title: serviceData?.title || '',
    description: serviceData?.metaDescription || '',
    structuredData: serviceData ? {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": serviceData.title,
      "description": serviceData.introduction,
      "provider": {
        "@type": "ProfessionalService",
        "name": "B N CHAUDHARY & ASSOCIATES"
      },
      "areaServed": {
        "@type": "Place",
        "name": "Palanpur, Gujarat"
      }
    } : null
  });

  useEffect(() => {
    if (!serviceId) {
      navigate('/404');
      return;
    }
    // Initial check for data
    if (!serviceData) {
      // Allow time for language context to provide data on initial load
      const timer = setTimeout(() => {
          if (!getTranslation(`services.${serviceId}`)) {
              navigate('/404');
          }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [serviceId, getTranslation, navigate, serviceData]);

  if (!serviceData) {
    return <div className="min-h-screen"></div>; // or a loading spinner
  }

  const { heroTitle, introduction, offerings, approach, benefits } = serviceData;

  const renderOffering = (offering: { id: string; title: string; description: string; }) => {
    const Icon = SERVICE_OFFERING_ICONS[offering.id];
    return (
      <div key={offering.title} className="flex items-start p-6 bg-gray-50 rounded-lg">
        <div className="flex-shrink-0 mr-6">
          <div className="flex items-center justify-center h-12 w-12 rounded-full bg-brand-light-blue text-brand-blue">
            {Icon && <Icon className="h-6 w-6" />}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-brand-dark-blue mb-2">{offering.title}</h3>
          <p className="text-brand-gray">{offering.description}</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Hero title={heroTitle} imageUrl={`https://picsum.photos/1600/400?random=${serviceId}`} />

      <div className="bg-white">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto">
            {/* Introduction Section */}
            <section className="mb-16 text-center">
              <p className="text-xl leading-relaxed text-brand-gray">{introduction}</p>
            </section>

            {/* Key Offerings Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-brand-dark-blue text-center mb-10">{t('serviceKeyOfferings')}</h2>
              { offerings[0]?.items ? ( // Check for grouped structure (e.g., Certifications)
                <div className="space-y-12">
                  {offerings.map((group: { categoryTitle: string; items: any[] }) => (
                    <div key={group.categoryTitle}>
                      <h3 className="text-2xl font-semibold text-brand-dark-blue mb-6 border-b-2 border-brand-light-blue pb-2">{group.categoryTitle}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {group.items.map(renderOffering)}
                      </div>
                    </div>
                  ))}
                </div>
              ) : ( // Fallback to old flat structure
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {offerings.map(renderOffering)}
                </div>
              )}
            </section>

            {/* Our Approach Section */}
            <section className="mb-16 bg-brand-light-blue p-10 rounded-lg">
              <h2 className="text-3xl font-bold text-brand-dark-blue text-center mb-4">{approach.title}</h2>
              <p className="text-lg text-brand-gray text-center mb-10 max-w-3xl mx-auto">{approach.description}</p>
              <div className="relative">
                <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-brand-blue opacity-30 hidden md:block" aria-hidden="true"></div>
                {approach.steps.map((step: {title: string, description: string}, index: number) => (
                   <div key={index} className="flex md:items-center mb-8 flex-col md:flex-row">
                     <div className="md:w-1/2 md:pr-8 md:text-right">
                       <h3 className="text-xl font-bold text-brand-blue mb-2">{step.title}</h3>
                       <p className="text-brand-gray">{step.description}</p>
                     </div>
                     <div className="relative my-4 md:my-0">
                        <div className="h-8 w-8 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold z-10 relative">
                           {index + 1}
                        </div>
                     </div>
                     <div className="md:w-1/2 md:pl-8"></div>
                   </div>
                ))}
              </div>
            </section>

            {/* Benefits Section */}
            <section>
              <h2 className="text-3xl font-bold text-brand-dark-blue text-center mb-4">{benefits.title}</h2>
              <p className="text-lg text-brand-gray text-center mb-10 max-w-3xl mx-auto">{benefits.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {benefits.points.map((point: string) => (
                  <div key={point} className="flex items-start">
                    <svg className="w-6 h-6 text-brand-gold mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <p className="text-brand-gray">{point}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      <CallToAction />
    </div>
  );
};

export default ServicePage;
