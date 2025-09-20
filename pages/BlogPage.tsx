
import React from 'react';
import Hero from '../components/Hero';
import CallToAction from '../components/CallToAction';
import { useLanguage } from '../contexts/LanguageContext';
import { usePageMetadata } from '../hooks/usePageMetadata';

const BlogPage: React.FC = () => {
  const { t } = useLanguage();
  
  usePageMetadata({
    title: t('blogMetaTitle'),
    description: t('blogMetaDescription'),
  });

  return (
    <div>
      <Hero 
        title={t('blogHeroTitle')} 
        subtitle={t('blogHeroSubtitle')} 
        imageUrl="https://picsum.photos/1600/400?random=blog" 
      />
      <div className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-dark-blue text-center mb-10">{t('blogContentTitle')}</h2>
            <div className="text-center text-lg text-brand-gray p-8 border-2 border-dashed border-gray-300 rounded-lg">
              <p>{t('blogContentPlaceholder')}</p>
            </div>
            {/* Future blog posts will be mapped here */}
          </div>
        </div>
      </div>
      <CallToAction />
    </div>
  );
};

export default BlogPage;
