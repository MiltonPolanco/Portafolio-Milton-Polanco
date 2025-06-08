/* filepath: c:\Users\mdax8\OneDrive\Desktop\Web\Portafolio Milton Polanco\portfolio\src\components\Skills.tsx */
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

const Skills = () => {
  const { isDark } = useTheme();
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t('skills.frontend'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      skills: [
        'React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 
        'Tailwind CSS', 'Bootstrap', 'Streamlit'
      ]
    },
    {
      title: t('skills.backend'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      skills: [
        'Node.js', 'Express.js', 'Python', 'Go', 'REST APIs', 'JWT', 'OAuth', 'NextAuth.js'
      ]
    },
    {
      title: t('skills.database'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
        </svg>
      ),
      skills: [
        'PostgreSQL', 'MongoDB', 'MySQL', 'MariaDB', 'Prisma', 'Mongoose', 
        'SQL', 'Supabase'
      ]
    },
    {
      title: t('skills.tools'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      skills: [
        'Git', 'GitHub', 'Docker', 'Vercel', 'Netlify', 
        'VS Code', 'Postman', 'Figma', 'Linux', 'Nginx'
      ]
    },
    {
      title: t('skills.apis'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
        </svg>
      ),
      skills: [
        'OpenAI API', 'Tavily API', 'Stripe', 'WordCloud', 'REST APIs'
      ]
    }
  ];

  const learningSkills = [
    'Rust', 'React Native',
    'Machine Learning', 'AI/LLMs', 'PHP', 
    'Laravel', 'SQLite', 'Database Design', 'AWS', 'CI/CD', 'React Router',
    'GraphQL', 'Microservices'
  ];

  return (
    <section 
      id="skills" 
      className="py-20"
      style={{
        backgroundColor: isDark ? '#111827' : '#f9fafb'
      }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl font-bold mb-4"
            style={{ color: isDark ? '#f9fafb' : '#1f2937' }}
          >
            {t('skills.title')}
          </h2>
          <p 
            className="text-xl max-w-2xl mx-auto"
            style={{ color: isDark ? '#d1d5db' : '#6b7280' }}
          >
            {t('skills.subtitle')}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className="rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                style={{
                  backgroundColor: isDark ? '#1f2937' : '#ffffff'
                }}
              >
                {/* Category Header */}
                <div className="flex items-center mb-4">
                  <div 
                    className="p-2 rounded-lg mr-3"
                    style={{
                      backgroundColor: isDark ? '#1e40af' : '#dbeafe',
                      color: isDark ? '#bfdbfe' : '#1e40af'
                    }}
                  >
                    {category.icon}
                  </div>
                  <h3 
                    className="text-xl font-bold"
                    style={{ color: isDark ? '#f9fafb' : '#1f2937' }}
                  >
                    {category.title}
                  </h3>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 cursor-pointer"
                      style={{
                        backgroundColor: isDark ? '#374151' : '#e5e7eb',
                        color: isDark ? '#d1d5db' : '#374151'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = isDark ? '#1e40af' : '#2563eb';
                        e.currentTarget.style.color = '#ffffff';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = isDark ? '#374151' : '#e5e7eb';
                        e.currentTarget.style.color = isDark ? '#d1d5db' : '#374151';
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Learning Section */}
          <div 
            className="rounded-xl p-8 shadow-lg border-2 border-dashed"
            style={{
              backgroundColor: isDark ? '#1f2937' : '#ffffff',
              borderColor: isDark ? '#374151' : '#d1d5db'
            }}
          >
            <div className="text-center mb-6">
              <div className="flex items-center justify-center mb-4">
                <div 
                  className="p-3 rounded-full mr-3"
                  style={{
                    backgroundColor: isDark ? '#7c2d12' : '#fed7aa',
                    color: isDark ? '#fdba74' : '#ea580c'
                  }}
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 
                  className="text-2xl font-bold"
                  style={{ color: isDark ? '#f9fafb' : '#1f2937' }}
                >
                  {t('skills.learning')}
                </h3>
              </div>
              <p 
                className="text-lg max-w-2xl mx-auto mb-6"
                style={{ color: isDark ? '#d1d5db' : '#6b7280' }}
              >
                {t('skills.learningSubtitle')}
              </p>
            </div>

            {/* Learning Skills */}
            <div className="flex flex-wrap justify-center gap-3">
              {learningSkills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 text-sm font-medium rounded-full border-2 transition-all duration-300 hover:scale-105 cursor-pointer animate-pulse"
                  style={{
                    borderColor: isDark ? '#ea580c' : '#f97316',
                    backgroundColor: isDark ? 'rgba(234, 88, 12, 0.1)' : 'rgba(249, 115, 22, 0.1)',
                    color: isDark ? '#fdba74' : '#ea580c'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = isDark ? '#ea580c' : '#f97316';
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.animationPlayState = 'paused';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = isDark ? 'rgba(234, 88, 12, 0.1)' : 'rgba(249, 115, 22, 0.1)';
                    e.currentTarget.style.color = isDark ? '#fdba74' : '#ea580c';
                    e.currentTarget.style.animationPlayState = 'running';
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Learning Progress Indicator */}
            <div className="flex items-center justify-center mt-8">
              <div className="flex space-x-1">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full animate-bounce"
                    style={{
                      backgroundColor: isDark ? '#ea580c' : '#f97316',
                      animationDelay: `${i * 0.2}s`
                    }}
                  />
                ))}
              </div>
              <span 
                className="ml-3 text-sm font-medium"
                style={{ color: isDark ? '#fdba74' : '#ea580c' }}
              >
                {t('skills.alwaysLearning')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;