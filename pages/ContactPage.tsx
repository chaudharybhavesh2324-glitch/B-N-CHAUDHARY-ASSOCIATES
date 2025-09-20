
import React from 'react';
import Hero from '../components/Hero';
import { useLanguage } from '../contexts/LanguageContext';
import { usePageMetadata } from '../hooks/usePageMetadata';

const ContactPage: React.FC = () => {
  const { t } = useLanguage();

  usePageMetadata({
    title: t('contactMetaTitle'),
    description: t('contactMetaDescription'),
  });

  return (
    <div>
      <Hero title={t('contactHeroTitle')} subtitle={t('contactHeroSubtitle')} imageUrl="https://picsum.photos/1600/400?blur=1" />
      <div className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-brand-dark-blue mb-4">{t('contactFormTitle')}</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brand-gray">{t('contactNameLabel')}</label>
                  <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue" />
                </div>
                 <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-gray">{t('contactEmailLabel')}</label>
                  <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue" />
                </div>
                 <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brand-gray">{t('contactMessageLabel')}</label>
                  <textarea id="message" name="message" rows={5} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue"></textarea>
                </div>
                <div>
                    <button type="submit" className="w-full bg-brand-blue text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-800 transition-colors">
                        {t('contactSendButton')}
                    </button>
                </div>
              </form>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-brand-dark-blue mb-4">{t('contactOfficeTitle')}</h2>
              <div className="space-y-4 text-brand-gray">
                <p><strong>{t('addressLabel')}:</strong> Third floor, Shop No-10 Trimurti Complex, Hanuman Tekri, near SBI bank, Palanpur, Gujarat-385001</p>
                <p><strong>{t('phoneLabel')}:</strong> +91-8291658940</p>
                <p><strong>{t('emailLabel')}:</strong> chaudharybhavesh2324@gmail.com</p>
              </div>
              <div className="mt-8">
                {/* Placeholder for map */}
                <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    <p className="text-brand-gray">{t('contactMapPlaceholder')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
