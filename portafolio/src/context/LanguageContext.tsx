import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Traducciones
const translations = {
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.skills': 'Habilidades',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    'nav.cta': 'Hablemos',
    
    // Hero Section
    'hero.greeting': 'Hola, soy',
    'hero.role': 'Desarrollador',
    'hero.specialty': 'Full Stack',
    'hero.description': 'especializado en crear',
    'hero.exceptional': 'experiencias digitales excepcionales',
    'hero.technologies': 'con React, Node.js y tecnologías modernas.',
    'hero.viewProjects': 'Ver mis proyectos',
    'hero.letsTalk': 'Hablemos',
    'hero.scroll': 'Scroll',
    
    // About Section
    'about.title': 'Sobre mí',
    'about.subtitle': 'Desarrollador apasionado por crear soluciones innovadoras',
    'about.description1': 'Soy un desarrollador Full Stack con más de 3 años de experiencia creando aplicaciones web modernas y escalables. Mi pasión es transformar ideas complejas en soluciones digitales elegantes y funcionales.',
    'about.description2': 'Me especializo en tecnologías como React, Node.js, y Python, siempre manteniéndome actualizado con las últimas tendencias del desarrollo web.',
    
    // Skills Section
    'skills.title': 'Habilidades',
    'skills.subtitle': 'Tecnologías y herramientas que domino para crear soluciones completas',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend', 
    'skills.database': 'Base de Datos',
    'skills.tools': 'Herramientas',
    'skills.learning': 'Aprendiendo',
    'skills.learningSubtitle': 'Tecnologías emergentes que estoy explorando actualmente',
    'skills.alwaysLearning': 'Siempre aprendiendo...',
    
    // Projects Section
    'projects.title': 'Proyectos',
    'projects.subtitle': 'Algunos de los proyectos en los que he trabajado recientemente',
    'projects.ecommerce.title': 'Plataforma E-commerce',
    'projects.ecommerce.description': 'Plataforma completa de comercio electrónico con React, Node.js y Stripe',
    'projects.taskmanager.title': 'App de Gestión de Tareas',
    'projects.taskmanager.description': 'Aplicación de gestión de tareas con funcionalidades colaborativas',
    'projects.weather.title': 'Dashboard del Clima',
    'projects.weather.description': 'Dashboard del clima con visualizaciones interactivas y pronósticos',
    
    // Contact Section
    'contact.title': 'Contacto',
    'contact.subtitle': '¿Tienes un proyecto en mente? Me encantaría escuchar tu idea y ayudarte a hacerla realidad',
    'contact.info': 'Información de contacto',
    'contact.followMe': 'Sígueme en redes',
    'contact.form.name': 'Nombre completo',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Asunto',
    'contact.form.message': 'Mensaje',
    'contact.form.send': 'Enviar mensaje',
    'contact.form.sending': 'Enviando...',
    'contact.form.success': '¡Mensaje enviado con éxito! Te responderé pronto.',
    'contact.form.error': 'Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.',
    'contact.form.placeholders.name': 'Tu nombre',
    'contact.form.placeholders.email': 'tu@email.com',
    'contact.form.placeholders.subject': '¿De qué quieres hablar?',
    'contact.form.placeholders.message': 'Cuéntame sobre tu proyecto...',
    'contact.phone': 'Teléfono',
    'contact.location': 'Ubicación',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.cta': 'Let\'s Talk',
    
    // Hero Section
    'hero.greeting': 'Hello, I\'m',
    'hero.role': 'Developer',
    'hero.specialty': 'Full Stack',
    'hero.description': 'specialized in creating',
    'hero.exceptional': 'exceptional digital experiences',
    'hero.technologies': 'with React, Node.js and modern technologies.',
    'hero.viewProjects': 'View my projects',
    'hero.letsTalk': 'Let\'s Talk',
    'hero.scroll': 'Scroll',
    
    // About Section
    'about.title': 'About Me',
    'about.subtitle': 'Developer passionate about creating innovative solutions',
    'about.description1': 'I am a Full Stack developer with over 3 years of experience creating modern and scalable web applications. My passion is transforming complex ideas into elegant and functional digital solutions.',
    'about.description2': 'I specialize in technologies like React, Node.js, and Python, always staying updated with the latest web development trends.',
    
    // Skills Section
    'skills.title': 'Skills',
    'skills.subtitle': 'Technologies and tools I master to create complete solutions',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.database': 'Database',
    'skills.tools': 'Tools',
    'skills.learning': 'Learning',
    'skills.learningSubtitle': 'Emerging technologies I am currently exploring',
    'skills.alwaysLearning': 'Always learning...',
    
    // Projects Section
    'projects.title': 'Projects',
    'projects.subtitle': 'Some of the projects I have worked on recently',
    'projects.ecommerce.title': 'E-commerce Platform',
    'projects.ecommerce.description': 'Complete e-commerce platform with React, Node.js and Stripe',
    'projects.taskmanager.title': 'Task Management App',
    'projects.taskmanager.description': 'Task management application with collaborative features',
    'projects.weather.title': 'Weather Dashboard',
    'projects.weather.description': 'Weather dashboard with interactive visualizations and forecasts',
    
    // Contact Section
    'contact.title': 'Contact',
    'contact.subtitle': 'Do you have a project in mind? I would love to hear your idea and help you make it a reality',
    'contact.info': 'Contact Information',
    'contact.followMe': 'Follow me on social media',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send message',
    'contact.form.sending': 'Sending...',
    'contact.form.success': 'Message sent successfully! I will reply soon.',
    'contact.form.error': 'There was an error sending the message. Please try again.',
    'contact.form.placeholders.name': 'Your name',
    'contact.form.placeholders.email': 'you@email.com',
    'contact.form.placeholders.subject': 'What do you want to talk about?',
    'contact.form.placeholders.message': 'Tell me about your project...',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'es' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'es' ? 'en' : 'es';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};