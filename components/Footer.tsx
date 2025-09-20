
import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const serviceLinks = NAV_LINKS.find(link => link.name === 'navServices')?.sublinks || [];
  
  return (
    <footer className="bg-brand-dark-blue text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-brand-gold mb-4">B N CHAUDHARY & ASSOCIATES</h3>
            <p className="text-gray-300">
              {t('footerSlogan')}
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footerImportantLinks')}</h4>
            <ul className="space-y-2">
              <li><a href="https://eportal.incometax.gov.in/iec/foservices/#/login" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">{t('linkIncomeTax')}</a></li>
              <li><a href="https://services.gst.gov.in/services/login" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">{t('linkGst')}</a></li>
              <li><a href="https://www.mca.gov.in/content/mca/global/en/foportal/fologin.html" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">{t('linkMca')}</a></li>
              <li><a href="https://ewaybillgst.gov.in/login.aspx" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">{t('linkEway')}</a></li>
              <li><a href="https://www.icai.org/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">{t('linkIcai')}</a></li>
              <li><a href="https://www.icsi.edu/home/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">{t('linkIcsi')}</a></li>
              <li><a href="https://icmai.in/icmai/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">{t('linkIcmai')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footerOurServices')}</h4>
            <ul className="space-y-2">
              {serviceLinks.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-brand-gold transition-colors">{t(link.name)}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('navContact')}</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Third floor, Shop No-10 Trimurti Complex, Hanuman Tekri, near SBI bank</li>
              <li>Palanpur, Gujarat-385001</li>
              <li>{t('emailLabel')}: chaudharybhavesh2324@gmail.com</li>
              <li>{t('phoneLabel')}: +91-8291658940</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} B N CHAUDHARY & ASSOCIATES. {t('footerRights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;