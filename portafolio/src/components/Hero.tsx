import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { isDark } = useTheme();
  const { t } = useLanguage();

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: isDark 
          ? 'linear-gradient(135deg, #111827 0%, #1f2937 100%)'
          : 'linear-gradient(135deg, #eff6ff 0%, #f3e8ff 100%)'
      }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-20 left-20 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"
          style={{
            backgroundColor: isDark ? '#1e40af' : '#dbeafe'
          }}
        ></div>
        <div 
          className="absolute top-20 right-20 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"
          style={{
            backgroundColor: isDark ? '#7c3aed' : '#e9d5ff'
          }}
        ></div>
        <div 
          className="absolute -bottom-8 left-1/2 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"
          style={{
            backgroundColor: isDark ? '#be185d' : '#fce7f3'
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8 animate-fadeInUp">
            <div className="relative inline-block">
              <img 
                src="/profile.jpg" 
                alt="Milton Polanco" 
                className="w-40 h-40 rounded-full mx-auto mb-6 shadow-xl object-cover"
                style={{
                  border: `4px solid ${isDark ? '#374151' : '#ffffff'}`,
                  boxShadow: `0 0 0 4px ${isDark ? '#1e40af' : '#dbeafe'}`
                }}
                onError={(e) => {
                  e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Crect width='160' height='160' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='20' fill='%236b7280'%3EMP%3C/text%3E%3C/svg%3E";
                }}
              />
              {/* Status indicator */}
              <div 
                className="absolute bottom-8 right-4 w-6 h-6 bg-green-400 rounded-full animate-pulse"
                style={{
                  border: `3px solid ${isDark ? '#374151' : '#ffffff'}`
                }}
              ></div>
            </div>
          </div>
          
          {/* Typography */}
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 animate-fadeInUp leading-tight"
            style={{ color: isDark ? '#f9fafb' : '#1f2937' }}
          >
            {t('hero.greeting')}{' '}
            <span className="gradient-text">
              Milton Polanco
            </span>
          </h1>
          
          <p 
            className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto animate-fadeInUp font-light leading-relaxed"
            style={{ color: isDark ? '#d1d5db' : '#6b7280' }}
          >
            {t('hero.role')} <span className="font-semibold text-blue-600 dark:text-blue-400">{t('hero.specialty')}</span> {t('hero.description')} 
            <span className="font-semibold text-purple-600 dark:text-purple-400"> {t('hero.exceptional')}</span> {t('hero.technologies')}
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fadeInUp">
            <a 
              href="#projects"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover-lift shadow-primary flex items-center gap-2"
            >
              <span>{t('hero.viewProjects')}</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a 
              href="#contact"
              className="border-2 px-10 py-4 rounded-full font-semibold transition-all duration-300 hover-lift flex items-center gap-2"
              style={{
                borderColor: isDark ? '#60a5fa' : '#2563eb',
                color: isDark ? '#60a5fa' : '#2563eb'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = isDark ? '#60a5fa' : '#2563eb';
                e.currentTarget.style.color = isDark ? '#1f2937' : '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = isDark ? '#60a5fa' : '#2563eb';
              }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>{t('hero.letsTalk')}</span>
            </a>
          </div>
          
          {/* Social links */}
          <div className="flex justify-center space-x-8 animate-fadeInUp">
            <a 
              href="https://github.com/miltonpolanco" 
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover-lift"
              style={{ color: isDark ? '#9ca3af' : '#6b7280' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = isDark ? '#60a5fa' : '#2563eb';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = isDark ? '#9ca3af' : '#6b7280';
              }}
              aria-label="GitHub"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a 
              href="https://linkedin.com/in/miltonpolanco" 
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover-lift"
              style={{ color: isDark ? '#9ca3af' : '#6b7280' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = isDark ? '#60a5fa' : '#2563eb';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = isDark ? '#9ca3af' : '#6b7280';
              }}
              aria-label="LinkedIn"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a 
              href="mailto:milton@example.com" 
              className="transition-all duration-300 hover-lift"
              style={{ color: isDark ? '#9ca3af' : '#6b7280' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = isDark ? '#60a5fa' : '#2563eb';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = isDark ? '#9ca3af' : '#6b7280';
              }}
              aria-label="Email"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll to about section" className="group">
          <div className="flex flex-col items-center gap-2">
            <span 
              className="text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
              style={{ color: isDark ? '#9ca3af' : '#6b7280' }}
            >
              {t('hero.scroll')}
            </span>
            <svg 
              className="w-6 h-6 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              style={{ color: isDark ? '#9ca3af' : '#6b7280' }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;