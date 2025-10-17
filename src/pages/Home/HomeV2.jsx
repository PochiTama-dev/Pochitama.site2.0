import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./homeV2.css";

// Assets imports
import logo from "../../assets/images/LogoPochi.webp";
import gatoAnimado from "../../assets/gif/pochitama-gif.webm";

// Tech stack icons
import angular from "../../assets/images/angular.webp";
import django from "../../assets/images/django.webp";
import js from "../../assets/images/js.webp";
import node from "../../assets/images/node.webp";
import php from "../../assets/images/php.webp";
import python from "../../assets/images/python.webp";
import react from "../../assets/images/react.webp";
import ruby from "../../assets/images/ruby.webp";
import vue from "../../assets/images/Vue.webp";
import wordpress from "../../assets/images/Wordpress.webp";

const HomeV2 = () => {
  const [gifVisible, setGifVisible] = useState(true);
  const [activeService, setActiveService] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setGifVisible(false);
    }, 5000);

    // Intersection Observer para animaciones
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  // Tech stack data
  const techStack = [
    { name: "React", icon: react, link: "https://react.dev/learn" },
    { name: "Node.js", icon: node, link: "https://nodejs.org" },
    { name: "Python", icon: python, link: "https://www.python.org/doc/" },
    { name: "JavaScript", icon: js, link: "https://developer.mozilla.org/docs/Web/JavaScript" },
    { name: "Angular", icon: angular, link: "https://angular.io/docs" },
    { name: "Vue", icon: vue, link: "https://vuejs.org" },
    { name: "Django", icon: django, link: "https://docs.djangoproject.com" },
    { name: "PHP", icon: php, link: "https://www.php.net/docs.php" },
    { name: "Ruby", icon: ruby, link: "https://www.ruby-lang.org" },
    { name: "WordPress", icon: wordpress, link: "https://wordpress.org" },
  ];

  // Servicios principales
  const services = [
    {
      icon: "🤖",
      title: "Automatizaciones con IA",
      description: "Soluciones inteligentes que automatizan procesos y optimizan operaciones",
      tags: ["ChatGPT", "OpenAI API", "Machine Learning", "NLP"],
    },
    {
      icon: "📲",
      title: "Meta API",
      description: "Automatización de WhatsApp, Instagram y Facebook para tu negocio",
      tags: ["WhatsApp Business", "Instagram API", "Messenger", "Chatbots"],
    },
    {
      icon: "📱",
      title: "Apps Móviles",
      description: "Desarrollo nativo y multiplataforma para iOS y Android",
      tags: ["React Native", "Flutter", "Swift", "Kotlin"],
    },
    {
      icon: "💻",
      title: "Web Apps",
      description: "Aplicaciones web escalables y de alto rendimiento",
      tags: ["React", "Node.js", "Next.js", "Vue"],
    },
    {
      icon: "🎨",
      title: "UX/UI Design",
      description: "Interfaces intuitivas centradas en el usuario",
      tags: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
    },
    {
      icon: "🚀",
      title: "SEO & Performance",
      description: "Optimización y velocidad de carga garantizada",
      tags: ["Core Web Vitals", "Lighthouse", "Analytics", "GTM"],
    },
  ];

  // Beneficios tech-focused
  const benefits = [
    {
      icon: "⚡",
      title: "Desarrollo Ágil",
      description: "Iteraciones rápidas con metodologías modernas (Scrum/Kanban)",
    },
    {
      icon: "🔒",
      title: "Código Seguro",
      description: "Implementación de mejores prácticas de seguridad (OWASP)",
    },
    {
      icon: "📊",
      title: "Data-Driven",
      description: "Decisiones basadas en métricas y analytics reales",
    },
    {
      icon: "🔄",
      title: "CI/CD Pipeline",
      description: "Integración y despliegue continuo automatizado",
    },
  ];

  // Proceso de desarrollo
  const process = [
    { step: "01", title: "Discovery", desc: "Análisis de requerimientos" },
    { step: "02", title: "Design", desc: "UX/UI y arquitectura" },
    { step: "03", title: "Development", desc: "Código limpio y escalable" },
    { step: "04", title: "Testing", desc: "QA y pruebas exhaustivas" },
    { step: "05", title: "Deploy", desc: "Lanzamiento y monitoreo" },
    { step: "06", title: "Support", desc: "Mantenimiento continuo" },
  ];

  // Stats
  const stats = [
    { value: "50+", label: "Proyectos" },
    { value: "10+", label: "Tecnologías" },
    { value: "98%", label: "Satisfacción" },
    { value: "24/7", label: "Soporte" },
  ];

  return (
    <div className="home-v2">
      {/* Hero Section */}
      <section className="hero-section" ref={heroRef}>
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>

        <div className="hero-container">
          <div className="hero-content">
            {/* Badge */}
            <div className="hero-badge animate-on-scroll">
              <span className="badge-pulse"></span>
              <span className="badge-text">🚀 Agencia Tech Innovadora 2025</span>
            </div>

            {/* Main Title */}
            <h1 className="hero-title animate-on-scroll">
              Construimos <span className="gradient-text">Experiencias Digitales</span> que
              Transforman Negocios
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle animate-on-scroll">
              Desarrollo de apps móviles y web con tecnología de vanguardia.
              Código limpio, arquitectura escalable y resultados medibles.
            </p>

            {/* Logo Animation */}
            <div className="hero-logo-container animate-on-scroll">
              {gifVisible ? (
                <video autoPlay loop muted playsInline className="hero-video">
                  <source src={gatoAnimado} type="video/webm" />
                </video>
              ) : (
                <img src={logo} alt="Pochitama Logo" className="hero-logo" />
              )}
            </div>

            {/* CTA Buttons */}
            <div className="hero-cta animate-on-scroll">
              <Link to="/contacto" className="btn-primary">
                <span>Iniciar Proyecto</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M7.5 15L12.5 10L7.5 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <Link to="/portfolio" className="btn-secondary">
                <span>Ver Portfolio</span>
              </Link>
            </div>

            {/* Stats */}
            <div className="hero-stats animate-on-scroll">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-line"></div>
          <span>Scroll</span>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="tech-stack-section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">Stack Tecnológico</span>
            <h2 className="section-title">
              Dominamos las <span className="gradient-text">Tecnologías</span> del Futuro
            </h2>
          </div>

          <div className="tech-grid">
            {techStack.map((tech, index) => (
              <a
                key={index}
                href={tech.link}
                target="_blank"
                rel="noopener noreferrer"
                className="tech-card animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="tech-icon">
                  <img src={tech.icon} alt={tech.name} loading="lazy" />
                </div>
                <span className="tech-name">{tech.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">Servicios</span>
            <h2 className="section-title">
              Soluciones <span className="gradient-text">End-to-End</span> para tu Negocio
            </h2>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card animate-on-scroll"
                style={{ animationDelay: `${index * 0.15}s` }}
                onMouseEnter={() => setActiveService(index)}
              >
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-tags">
                  {service.tags.map((tag, i) => (
                    <span key={i} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="service-link">
                  Explorar <span>→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">¿Por qué elegirnos?</span>
            <h2 className="section-title">
              Desarrollo <span className="gradient-text">Profesional</span> con Estándares de Calidad
            </h2>
          </div>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="benefit-card animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="benefit-icon">{benefit.icon}</div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">Metodología</span>
            <h2 className="section-title">
              Nuestro <span className="gradient-text">Proceso</span> de Desarrollo
            </h2>
          </div>

          <div className="process-timeline">
            {process.map((item, index) => (
              <div
                key={index}
                className="process-item animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="process-step">{item.step}</div>
                <div className="process-content">
                  <h3 className="process-title">{item.title}</h3>
                  <p className="process-desc">{item.desc}</p>
                </div>
                {index < process.length - 1 && <div className="process-connector"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="final-cta-section">
        <div className="container">
          <div className="cta-box animate-on-scroll">
            <div className="cta-content">
              <h2 className="cta-title">
                ¿Listo para llevar tu proyecto al <span className="gradient-text">siguiente nivel</span>?
              </h2>
              <p className="cta-subtitle">
                Hablemos sobre cómo podemos ayudarte a construir tu próxima aplicación
              </p>
              <div className="cta-buttons">
                <Link to="/contacto" className="btn-primary-large">
                  Comenzar Ahora
                </Link>
                <Link to="/portfolio" className="btn-outline">
                  Ver Casos de Éxito
                </Link>
              </div>
            </div>
            <div className="cta-features">
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Consulta gratuita</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Presupuesto personalizado</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Respuesta en 24h</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeV2;
