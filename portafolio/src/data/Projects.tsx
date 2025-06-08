// Actualizar src/data/Projects.tsx
export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl: string;
  featured: boolean;
  category: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce React App",
    description: "Aplicación de comercio electrónico completa con carrito de compras, autenticación de usuarios y pasarela de pagos. Incluye panel de administración para gestión de productos.",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    githubUrl: "https://github.com/miltonpolanco/ecommerce-app",
    liveUrl: "https://ecommerce-milton.vercel.app",
    imageUrl: "/projects/ecommerce.jpg",
    featured: true,
    category: "Full Stack"
  },
  {
    id: 2,
    title: "Task Management Dashboard",
    description: "Dashboard para gestión de tareas con funcionalidades de drag & drop, colaboración en tiempo real y reportes de productividad.",
    technologies: ["React", "Firebase", "Material-UI", "Chart.js", "Socket.io"],
    githubUrl: "https://github.com/miltonpolanco/task-dashboard",
    liveUrl: "https://tasks-milton.netlify.app",
    imageUrl: "/projects/dashboard.jpg",
    featured: true,
    category: "Frontend"
  },
  {
    id: 3,
    title: "Weather App PWA",
    description: "Aplicación del clima como PWA con geolocalización, notificaciones push y funcionamiento offline. Diseño responsive y moderno.",
    technologies: ["React", "PWA", "Weather API", "Service Workers", "CSS3"],
    githubUrl: "https://github.com/miltonpolanco/weather-pwa",
    liveUrl: "https://weather-milton.vercel.app",
    imageUrl: "/projects/weather.jpg",
    featured: false,
    category: "PWA"
  },
  {
    id: 4,
    title: "Blog Personal",
    description: "Blog personal desarrollado con Next.js, con sistema de comentarios, búsqueda avanzada y optimización SEO completa.",
    technologies: ["Next.js", "MDX", "Prisma", "PostgreSQL", "Vercel"],
    githubUrl: "https://github.com/miltonpolanco/personal-blog",
    liveUrl: "https://blog-milton.vercel.app",
    imageUrl: "/projects/blog.jpg",
    featured: false,
    category: "Full Stack"
  },
  {
    id: 5,
    title: "Restaurant Landing Page",
    description: "Landing page moderna para restaurante con reservas online, menú interactivo y integración con redes sociales.",
    technologies: ["HTML5", "CSS3", "JavaScript", "GSAP", "EmailJS"],
    githubUrl: "https://github.com/miltonpolanco/restaurant-landing",
    liveUrl: "https://restaurant-milton.netlify.app",
    imageUrl: "/projects/restaurant.jpg",
    featured: false,
    category: "Frontend"
  }
];

export const skills = [
  { name: "React", level: 90, category: "Frontend" },
  { name: "TypeScript", level: 85, category: "Languages" },
  { name: "JavaScript", level: 95, category: "Languages" },
  { name: "Node.js", level: 80, category: "Backend" },
  { name: "Python", level: 75, category: "Languages" },
  { name: "MongoDB", level: 70, category: "Database" },
  { name: "PostgreSQL", level: 75, category: "Database" },
  { name: "Tailwind CSS", level: 90, category: "Styling" },
  { name: "Next.js", level: 85, category: "Framework" },
  { name: "Git", level: 90, category: "Tools" },
  { name: "Docker", level: 65, category: "DevOps" },
  { name: "AWS", level: 60, category: "Cloud" }
];