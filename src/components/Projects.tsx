/* filepath: c:\Users\mdax8\OneDrive\Desktop\Web\Portafolio Milton Polanco\portfolio\src\components\Projects.tsx */
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

// Función para generar screenshots de proyectos
const generateScreenshotUrl = (projectUrl: string): string => {
  const encodedUrl = encodeURIComponent(projectUrl);
  return `https://api.microlink.io/?url=${encodedUrl}&screenshot=true&embed=screenshot.url`;
};

const Projects = () => {
  const { isDark } = useTheme();
  const { t } = useLanguage();

  const projects = [
    {
      title: t('projects.portfolio.title'),
      description: t('projects.portfolio.description'),
      image: generateScreenshotUrl('https://portafolio-milton-polanco.netlify.app/'),
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap', 'Tailwind CSS'],
      githubUrl: 'https://github.com/MiltonPolanco/Portafolio-Milton-Polanco',
      liveUrl: 'https://portafolio-milton-polanco.netlify.app/'
    },
    {
      title: t('projects.research-assistant.title'),
      description: t('projects.research-assistant.description'),
      image: generateScreenshotUrl('https://asistente-de-investigacin-digital.streamlit.app/'),
      technologies: ['Python', 'Streamlit', 'OpenAI API', 'Tavily API', 'WordCloud'],
      githubUrl: 'https://github.com/MiltonPolanco/Proyecto1-IA',
      liveUrl: 'https://asistente-de-investigacin-digital.streamlit.app/'
    },
    {
      title: t('projects.tecnomedica.title'),
      description: t('projects.tecnomedica.description'),
      image: generateScreenshotUrl('https://tenomedica-tm.netlify.app/'),
      technologies: ['Next.js', 'React', 'MongoDB', 'NextAuth.js', 'Tailwind CSS', 'Node.js'],
      githubUrl: 'https://github.com/MiltonPolanco/Tecnomedica-TM',
      liveUrl: 'https://tenomedica-tm.netlify.app/'
    },
    {
      title: t('projects.seriesTracker.title'),
      description: t('projects.seriesTracker.description'),
      image: generateScreenshotUrl('https://github.com/MiltonPolanco/Lab-6-Backend-only'),
      technologies: ['Go', 'MariaDB', 'Docker', 'REST API', 'JavaScript', 'HTML/CSS'],
      githubUrl: 'https://github.com/MiltonPolanco/Lab-6-Backend-only',
      liveUrl: ''
    }
  ];

  return (
    <section 
      id="projects" 
      className="py-20"
      style={{
        backgroundColor: isDark ? '#1f2937' : '#ffffff'
      }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl font-bold mb-4"
            style={{ color: isDark ? '#f9fafb' : '#1f2937' }}
          >
            {t('projects.title')}
          </h2>
          <p 
            className="text-xl max-w-2xl mx-auto"
            style={{ color: isDark ? '#d1d5db' : '#6b7280' }}
          >
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              style={{
                backgroundColor: isDark ? '#374151' : '#ffffff'
              }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200' viewBox='0 0 400 200'%3E%3Crect width='400' height='200' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='16' fill='%236b7280'%3EProject Image%3C/text%3E%3C/svg%3E";
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a 
                      href={project.githubUrl}
                      className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a 
                      href={project.liveUrl}
                      className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 
                  className="text-xl font-bold mb-2"
                  style={{ color: isDark ? '#f9fafb' : '#1f2937' }}
                >
                  {project.title}
                </h3>
                <p 
                  className="mb-4 line-clamp-3"
                  style={{ color: isDark ? '#d1d5db' : '#6b7280' }}
                >
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 text-sm rounded-full"
                      style={{
                        backgroundColor: isDark ? '#1e40af' : '#dbeafe',
                        color: isDark ? '#bfdbfe' : '#1e40af'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;