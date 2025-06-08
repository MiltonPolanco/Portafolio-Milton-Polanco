import React, { useState, useEffect } from 'react';
import DarkModeToggle from './DarkModeToggle';
import LanguageToggle from './LanguageToggle';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark } = useTheme();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('nav.home'), href: '#hero' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.contact'), href: '#contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
      style={{
        backgroundColor: isScrolled 
          ? (isDark ? 'rgba(17, 24, 39, 0.9)' : 'rgba(255, 255, 255, 0.9)')
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        boxShadow: isScrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
        borderBottom: isScrolled 
          ? (isDark ? '1px solid #374151' : '1px solid #e5e7eb')
          : 'none'
      }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a 
            href="#hero" 
            className="flex items-center space-x-2 group"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg">MP</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-blue-600 font-bold text-xl">Milton</span>
              <span 
                className="font-bold text-xl"
                style={{ color: isDark ? '#f9fafb' : '#1f2937' }}
              >
                Polanco
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative font-medium transition-colors duration-300 group"
                style={{ 
                  color: isDark ? '#d1d5db' : '#6b7280'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = isDark ? '#60a5fa' : '#2563eb';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = isDark ? '#d1d5db' : '#6b7280';
                }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Toggles & CTA Button - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageToggle />
            <DarkModeToggle />
            <a
              href="#contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {t('nav.cta')}
            </a>
          </div>

          {/* Mobile Menu Button & Toggles */}
          <div className="md:hidden flex items-center space-x-3">
            <LanguageToggle />
            <DarkModeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative w-8 h-8 flex flex-col justify-center items-center space-y-1 group"
              aria-label="Toggle mobile menu"
            >
              <span 
                className={`w-6 h-0.5 transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
                style={{ backgroundColor: isDark ? '#d1d5db' : '#6b7280' }}
              ></span>
              <span 
                className={`w-6 h-0.5 transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
                style={{ backgroundColor: isDark ? '#d1d5db' : '#6b7280' }}
              ></span>
              <span 
                className={`w-6 h-0.5 transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
                style={{ backgroundColor: isDark ? '#d1d5db' : '#6b7280' }}
              ></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav 
            className="py-4 space-y-2 backdrop-blur-sm rounded-lg mt-2 shadow-lg border"
            style={{
              backgroundColor: isDark ? 'rgba(31, 41, 55, 0.95)' : 'rgba(255, 255, 255, 0.95)',
              borderColor: isDark ? '#374151' : '#e5e7eb'
            }}
          >
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-6 py-3 font-medium transition-all duration-300"
                style={{ 
                  color: isDark ? '#d1d5db' : '#6b7280',
                  animationDelay: `${index * 0.1}s`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = isDark ? '#60a5fa' : '#2563eb';
                  e.currentTarget.style.backgroundColor = isDark ? '#374151' : '#f3f4f6';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = isDark ? '#d1d5db' : '#6b7280';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                {item.name}
              </a>
            ))}
            <div className="px-6 py-3">
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                {t('nav.cta')}
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;