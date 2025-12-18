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
    'about.description1': 'Soy un desarrollador Full Stack con experiencia creando aplicaciones web modernas y escalables. Mi pasión es transformar ideas complejas en soluciones digitales elegantes y funcionales.',
    'about.description2': 'Me especializo en tecnologías como React, Node.js, y Python, siempre manteniéndome actualizado con las últimas tendencias del desarrollo web.',
    
    // Skills Section
    'skills.title': 'Habilidades',
    'skills.subtitle': 'Tecnologías y herramientas que domino para crear soluciones completas',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend', 
    'skills.database': 'Base de Datos',
    'skills.tools': 'Herramientas',
    'skills.apis': 'APIs y Servicios',
    'skills.learning': 'Aprendiendo',
    'skills.learningSubtitle': 'Tecnologías emergentes que estoy explorando actualmente',
    'skills.alwaysLearning': 'Siempre aprendiendo...',
    
    // Projects Section
    'projects.title': 'Proyectos',
    'projects.subtitle': 'Algunos de los proyectos en los que he trabajado recientemente',
    'projects.portfolio.title': 'Portafolio Personal',
    'projects.portfolio.description': 'Mi portafolio personal desarrollado con tecnologías web modernas, mostrando mis habilidades y proyectos como desarrollador',
    'projects.research-assistant.title': 'Asistente Digital de Investigación',
    'projects.research-assistant.description': 'Herramienta de investigación impulsada por IA que busca en la web, genera resúmenes y crea nubes de palabras usando las APIs de OpenAI y Tavily.',
    'projects.tecnomedica.title': 'Sistema Tecnomedica',
    'projects.tecnomedica.description': 'Plataforma web completa para gestión médica con autenticación, dashboard administrativo y sistema de roles. Incluye integración con Google OAuth y base de datos MongoDB',
    'projects.seriesTracker.title': 'Series Tracker API',
    'projects.seriesTracker.description': 'API RESTful desarrollada en Go para gestionar un backlog de series con operaciones CRUD completas. Incluye frontend interactivo, filtros avanzados, actualizaciones parciales (PATCH) y sistema de ranking con upvote/downvote',
    'projects.raytracingPS3.title': 'Juego Raytracing PS3',
    'projects.raytracingPS3.description': 'Juego 3D implementado con técnicas de raytracing para PlayStation 3. Proyecto que demuestra programación gráfica avanzada en hardware de consola con renderizado en tiempo real.',
    'projects.raycastingNDS.title': 'Juego Raycasting NDS',
    'projects.raycastingNDS.description': 'Juego estilo Doom desarrollado para Nintendo DS utilizando técnicas de raycasting. Implementación de un motor gráfico 3D en sistemas embebidos con recursos limitados.',
    'projects.spaceTravelSTM32.title': 'Space Travel STM32',
    'projects.spaceTravelSTM32.description': 'Juego de viaje espacial implementado en microcontrolador STM32. Proyecto de sistemas embebidos con gráficos en tiempo real y control de periféricos de bajo nivel.',
    'projects.shaderRendererSTM32.title': 'Shader Renderer STM32',
    'projects.shaderRendererSTM32.description': 'Motor de renderizado con shaders implementado en STM32. Demuestra técnicas avanzadas de programación gráfica y optimización en sistemas embebidos de recursos limitados.',
    
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
    'about.description1': 'I am a Full Stack developer with experience creating modern and scalable web applications. My passion is transforming complex ideas into elegant and functional digital solutions.',
    'about.description2': 'I specialize in technologies like React, Node.js, and Python, always staying updated with the latest web development trends.',
    
    // Skills Section
    'skills.title': 'Skills',
    'skills.subtitle': 'Technologies and tools I master to create complete solutions',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.database': 'Database',
    'skills.tools': 'Tools',
    'skills.apis': 'APIs & Services',
    'skills.learning': 'Learning',
    'skills.learningSubtitle': 'Emerging technologies I am currently exploring',
    'skills.alwaysLearning': 'Always learning...',
    
    // Projects Section
    'projects.title': 'Projects',
    'projects.subtitle': 'Some of the projects I have worked on recently',
    'projects.portfolio.title': 'Personal Portfolio',
    'projects.portfolio.description': 'My personal portfolio built with modern web technologies, showcasing my skills and projects as a developer',
    'projects.research-assistant.title': 'Digital Research Assistant',
    'projects.research-assistant.description': 'AI-powered research tool that searches the web, generates summaries, and creates word clouds from search results using OpenAI and Tavily APIs.',
    'projects.tecnomedica.title': 'Tecnomedica System',
    'projects.tecnomedica.description': 'Complete medical management web platform with authentication, administrative dashboard and role-based system. Features Google OAuth integration and MongoDB database',
    'projects.seriesTracker.title': 'Series Tracker API',
    'projects.seriesTracker.description': 'RESTful API built with Go for managing a series backlog with full CRUD operations. Features interactive frontend, advanced filtering, partial updates (PATCH), and ranking system with upvote/downvote functionality',
    'projects.raytracingPS3.title': 'Raytracing Game PS3',
    'projects.raytracingPS3.description': '3D game implemented with raytracing techniques for PlayStation 3. Project demonstrating advanced graphics programming on console hardware with real-time rendering.',
    'projects.raycastingNDS.title': 'Raycasting Game NDS',
    'projects.raycastingNDS.description': 'Doom-style game developed for Nintendo DS using raycasting techniques. Implementation of a 3D graphics engine on embedded systems with limited resources.',
    'projects.spaceTravelSTM32.title': 'Space Travel STM32',
    'projects.spaceTravelSTM32.description': 'Space travel game implemented on STM32 microcontroller. Embedded systems project with real-time graphics and low-level peripheral control.',
    'projects.shaderRendererSTM32.title': 'Shader Renderer STM32',
    'projects.shaderRendererSTM32.description': 'Rendering engine with shaders implemented on STM32. Demonstrates advanced graphics programming techniques and optimization on resource-constrained embedded systems.',
    
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