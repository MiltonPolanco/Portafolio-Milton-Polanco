import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();
  const { isDark } = useTheme();

  return (
    <button
      onClick={toggleLanguage}
      className="relative flex items-center px-3 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      style={{
        backgroundColor: isDark ? '#374151' : '#e5e7eb',
        color: isDark ? '#f9fafb' : '#1f2937'
      }}
      aria-label={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
    >
      <span className="text-sm font-semibold">
        {language === 'es' ? 'ES' : 'EN'}
      </span>
      <div className="ml-2 flex items-center">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      </div>
    </button>
  );
};

export default LanguageToggle;