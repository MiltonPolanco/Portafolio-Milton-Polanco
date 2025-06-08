/* filepath: c:\Users\mdax8\OneDrive\Desktop\Web\Portafolio Milton Polanco\portfolio\src\components\About.tsx */
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { isDark } = useTheme();
  const { t } = useLanguage();

  const skills = [
    'JavaScript/TypeScript',
    'React & Next.js',
    'Node.js & Express',
    'Python & Django',
    'PostgreSQL & MongoDB',
    'Docker'
  ];

  return (
    <section 
      id="about" 
      className="py-20"
      style={{
        backgroundColor: isDark ? '#1f2937' : '#ffffff'
      }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl font-bold mb-4"
              style={{ color: isDark ? '#f9fafb' : '#1f2937' }}
            >
              {t('about.title')}
            </h2>
            <p 
              className="text-xl max-w-2xl mx-auto"
              style={{ color: isDark ? '#d1d5db' : '#6b7280' }}
            >
              {t('about.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p 
                className="text-lg mb-6"
                style={{ color: isDark ? '#d1d5db' : '#6b7280' }}
              >
                {t('about.description1')}
              </p>
              
              <p 
                className="text-lg mb-8"
                style={{ color: isDark ? '#d1d5db' : '#6b7280' }}
              >
                {t('about.description2')}
              </p>

              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div 
                    key={index}
                    className="flex items-center"
                    style={{ color: isDark ? '#d1d5db' : '#374151' }}
                  >
                    <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img 
                src="/Akirapic.jpg"
                alt={t('about.title')}
                className="rounded-lg shadow-xl"
                onError={(e) => {
                  e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='16' fill='%236b7280'%3EImagen%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;