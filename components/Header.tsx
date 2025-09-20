import React, { useState, useRef, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import type { ServiceNavLink } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }

  const NavItem: React.FC<{ item: ServiceNavLink }> = ({ item }) => {
    if (item.sublinks) {
      const isOpen = openDropdown === item.name;
      return (
        <li className="relative">
          <button
            onClick={() => setOpenDropdown(isOpen ? null : item.name)}
            className="hover:text-brand-gold transition-colors duration-300 flex items-center"
            aria-haspopup="true"
            aria-expanded={isOpen}
          >
            {t(item.name)}
            <svg className={`w-4 h-4 ml-1 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </button>
          {isOpen && (
            <ul className="absolute z-20 top-full left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-2">
              {item.sublinks.map((sublink) => (
                <li key={sublink.path}>
                  <NavLink
                    to={sublink.path}
                    onClick={closeAllMenus}
                    className={({ isActive }) => 
                      `block px-4 py-2 text-sm text-brand-dark-blue hover:bg-brand-light-blue ${isActive ? 'font-bold' : ''}`
                    }
                  >
                    {t(sublink.name)}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </li>
      );
    }

    return (
      <li>
        <NavLink
          to={item.path}
          onClick={closeAllMenus}
          className={({ isActive }) =>
            `hover:text-brand-gold transition-colors duration-300 ${isActive && item.path !== "/" ? 'text-brand-gold font-semibold' : ''}`
          }
        >
          {t(item.name)}
        </NavLink>
      </li>
    );
  };
  
  return (
    <header className="bg-brand-dark-blue text-white shadow-md sticky top-0 z-50">
      <div className="px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        <Link to="/" onClick={closeAllMenus}>
          <div>
            <div className="font-logo text-xl sm:text-2xl font-bold text-brand-gold tracking-wide leading-tight">
              B N CHAUDHARY & ASSOCIATES
            </div>
            <div className="text-xs text-gray-300 tracking-widest uppercase">
              {t('logoSubtitle')}
            </div>
          </div>
        </Link>
        <nav ref={navRef} className="hidden md:flex items-center">
          <ul className="flex items-center space-x-8 text-lg">
            {NAV_LINKS.map((link) => (
              <NavItem key={link.name} item={link} />
            ))}
          </ul>
           <div className="ml-8">
            <LanguageSelector />
          </div>
        </nav>
        <div className="md:hidden flex items-center space-x-4">
           <LanguageSelector />
          <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-brand-dark-blue pb-4">
          <ul className="flex flex-col items-center space-y-4 text-lg">
            {NAV_LINKS.map((link) => {
              if (link.sublinks) {
                return (
                  <React.Fragment key={link.name}>
                    <li className="font-semibold">{t(link.name)}</li>
                    {link.sublinks.map(sublink => (
                      <li key={sublink.path}>
                         <NavLink to={sublink.path} onClick={closeAllMenus} className={({ isActive }) => `text-sm hover:text-brand-gold ${isActive ? 'text-brand-gold' : ''}`}>{t(sublink.name)}</NavLink>
                      </li>
                    ))}
                  </React.Fragment>
                )
              }
              return (
                 <li key={link.name}>
                    <NavLink
                        to={link.path}
                        onClick={closeAllMenus}
                        className={({ isActive }) =>
                            `hover:text-brand-gold transition-colors duration-300 ${isActive && link.path !== "/" ? 'text-brand-gold font-semibold' : ''}`
                        }
                    >
                        {t(link.name)}
                    </NavLink>
                 </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;