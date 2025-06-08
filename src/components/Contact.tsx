import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const { isDark } = useTheme();
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | ''>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');
    
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/x-www-form-urlencoded' 
        },
        body: new URLSearchParams({
          'form-name': 'contact',
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        }).toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Error en el envío');
      }
      
    } catch (error) {
      console.error('Error al enviar:', error);
      setSubmitStatus('error');
    }
    
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(''), 5000);
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      content: 'miltonpolanco00@gmail.com',
      link: 'mailto:miltonpolanco00@gmail.com'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: t('contact.phone'),
      content: '+502 5825-3509',
      link: 'tel:+50258253509'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: t('contact.location'),
      content: 'Guatemala, Guatemala',
      link: '#'
    }
  ];

  return (
    <section 
      id="contact" 
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
            {t('contact.title')}
          </h2>
          <p 
            className="text-xl max-w-2xl mx-auto"
            style={{ color: isDark ? '#d1d5db' : '#6b7280' }}
          >
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 
                className="text-2xl font-bold mb-6"
                style={{ color: isDark ? '#f9fafb' : '#1f2937' }}
              >
                {t('contact.info')}
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 group"
                    style={{
                      backgroundColor: isDark ? '#1f2937' : '#ffffff'
                    }}
                  >
                    <div 
                      className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300"
                      style={{
                        backgroundColor: isDark ? '#1e40af' : '#dbeafe'
                      }}
                    >
                      {info.icon}
                    </div>
                    <div className="ml-4">
                      <h4 
                        className="text-lg font-semibold"
                        style={{ color: isDark ? '#f9fafb' : '#1f2937' }}
                      >
                        {info.title}
                      </h4>
                      <p style={{ color: isDark ? '#d1d5db' : '#6b7280' }}>
                        {info.content}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-8">
                <h4 
                  className="text-lg font-semibold mb-4"
                  style={{ color: isDark ? '#f9fafb' : '#1f2937' }}
                >
                  {t('contact.followMe')}
                </h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/miltonpolanco" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors"
                    style={{ color: isDark ? '#9ca3af' : '#6b7280' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = isDark ? '#60a5fa' : '#2563eb';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = isDark ? '#9ca3af' : '#6b7280';
                    }}
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/milton-giovanni-polanco-serrano-737a9b266/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors"
                    style={{ color: isDark ? '#9ca3af' : '#6b7280' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = isDark ? '#60a5fa' : '#2563eb';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = isDark ? '#9ca3af' : '#6b7280';
                    }}
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form 
                onSubmit={handleSubmit} 
                className="space-y-6"
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
              >
                {/* Campo oculto para Netlify */}
                <input type="hidden" name="form-name" value="contact" />
                
                {/* Campo honeypot oculto para spam */}
                <div style={{ display: 'none' }}>
                  <label>
                    Don't fill this out if you're human: 
                    <input name="bot-field" />
                  </label>
                </div>

                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-medium mb-2"
                    style={{ color: isDark ? '#d1d5db' : '#374151' }}
                  >
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    style={{
                      backgroundColor: isDark ? '#1f2937' : '#ffffff',
                      color: isDark ? '#f9fafb' : '#1f2937',
                      border: `1px solid ${isDark ? '#374151' : '#d1d5db'}`
                    }}
                    placeholder={t('contact.form.placeholders.name')}
                  />
                </div>

                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium mb-2"
                    style={{ color: isDark ? '#d1d5db' : '#374151' }}
                  >
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    style={{
                      backgroundColor: isDark ? '#1f2937' : '#ffffff',
                      color: isDark ? '#f9fafb' : '#1f2937',
                      border: `1px solid ${isDark ? '#374151' : '#d1d5db'}`
                    }}
                    placeholder={t('contact.form.placeholders.email')}
                  />
                </div>

                <div>
                  <label 
                    htmlFor="subject" 
                    className="block text-sm font-medium mb-2"
                    style={{ color: isDark ? '#d1d5db' : '#374151' }}
                  >
                    {t('contact.form.subject')}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    style={{
                      backgroundColor: isDark ? '#1f2937' : '#ffffff',
                      color: isDark ? '#f9fafb' : '#1f2937',
                      border: `1px solid ${isDark ? '#374151' : '#d1d5db'}`
                    }}
                    placeholder={t('contact.form.placeholders.subject')}
                  />
                </div>

                <div>
                  <label 
                    htmlFor="message" 
                    className="block text-sm font-medium mb-2"
                    style={{ color: isDark ? '#d1d5db' : '#374151' }}
                  >
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    style={{
                      backgroundColor: isDark ? '#1f2937' : '#ffffff',
                      color: isDark ? '#f9fafb' : '#1f2937',
                      border: `1px solid ${isDark ? '#374151' : '#d1d5db'}`
                    }}
                    placeholder={t('contact.form.placeholders.message')}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner"></div>
                      <span>{t('contact.form.sending')}</span>
                    </>
                  ) : (
                    <>
                      <span>{t('contact.form.send')}</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </button>

                {/* Status messages */}
                {submitStatus === 'success' && (
                  <div 
                    className="p-4 border rounded-lg"
                    style={{
                      backgroundColor: isDark ? '#065f46' : '#d1fae5',
                      borderColor: isDark ? '#059669' : '#10b981',
                      color: isDark ? '#a7f3d0' : '#065f46'
                    }}
                  >
                    {t('contact.form.success')}
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div 
                    className="p-4 border rounded-lg"
                    style={{
                      backgroundColor: isDark ? '#7f1d1d' : '#fee2e2',
                      borderColor: isDark ? '#dc2626' : '#ef4444',
                      color: isDark ? '#fca5a5' : '#7f1d1d'
                    }}
                  >
                    {t('contact.form.error')}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;