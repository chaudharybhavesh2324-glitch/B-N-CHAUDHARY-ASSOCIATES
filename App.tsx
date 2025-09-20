
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicePage from './pages/ServicePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import TeamPage from './pages/TeamPage';
import NewsPage from './pages/NewsPage';
import BlogPage from './pages/BlogPage';
import NotFoundPage from './pages/NotFoundPage';
import { useLanguage } from './contexts/LanguageContext';

const App: React.FC = () => {
  const location = useLocation();
  const { language } = useLanguage();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  React.useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <div className={`bg-gray-50 text-brand-gray font-sans lang-${language}`}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/:serviceId" element={<ServicePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
