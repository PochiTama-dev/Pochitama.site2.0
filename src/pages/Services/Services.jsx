import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import "./Services.css";
import ModalServices from "../../components/Services/ModalServices";
import Cta from "../../components/cta/Cta";
import {
  dataCardWeb,
  dataCardSoftware,
  dataCardApps,
  dataCardUXUI,
  dataCardECommerce,
  dataCardAI,
  dataCardMetaAPI,
} from "./variables";

const Services = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCardData, setSelectedCardData] = useState(null);

  const handleClickCard = (dataCar) => {
    setShowModal(true);
    setSelectedCardData(dataCar);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCardData(null);
  };

  const services = [
    {
      id: 1,
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
          <circle cx="8" cy="19" r="2"/>
          <circle cx="16" cy="19" r="2"/>
          <path d="M18 14.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/>
        </svg>
      ),
      title: "Automatizaciones con IA",
      description: "Optimiza procesos empresariales con inteligencia artificial: chatbots, análisis predictivo y automatización inteligente.",
      features: ["ChatGPT Integration", "Machine Learning", "NLP & Sentiment Analysis", "Automation Bots"],
      data: dataCardAI,
    },
    {
      id: 2,
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z"/>
        </svg>
      ),
      title: "Meta API (WhatsApp & Instagram)",
      description: "Automatiza la comunicación de tu negocio con WhatsApp Business API e Instagram para atención al cliente 24/7.",
      features: ["WhatsApp Business API", "Instagram Automation", "Chatbots Inteligentes", "CRM Integration"],
      data: dataCardMetaAPI,
    },
    {
      id: 3,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 3H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h7v2H8v2h8v-2h-3v-2h7c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2M4 14V5h16l.002 9z"/>
        </svg>
      ),
      title: "Desarrollo Web",
      description: "Creación de sitios web personalizados, optimizados para ofrecer la mejor experiencia al usuario.",
      features: ["Responsive Design", "Optimización SEO", "Alta Performance", "Seguridad Avanzada"],
      data: dataCardWeb,
    },
    {
      id: 4,
      icon: (
        <svg width="48" height="48" viewBox="0 0 52 41" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M28.3891 17.3562L41.1282 5.02188L45.9672 0.329407C46.4593 -0.147265 47.2516 -0.109375 47.7281 0.382813C48.0375 0.690938 48.1875 1.1125 48.1781 1.53406V39.4653C48.1785 39.8925 48.0255 40.3051 47.7469 40.6281C47.7016 40.6752 47.6536 40.7198 47.6032 40.7619C47.1329 41.1684 46.4221 41.1419 45.9829 40.7025L41.1423 35.8628L28.3891 23.5266L15.8563 35.6572L11.0954 40.2956C10.6204 40.7531 9.84698 40.7534 9.37167 40.2956C9.08598 39.9969 8.92792 39.5953 8.93198 39.1778V1.8375C8.93136 1.42031 9.0881 1.01843 9.37011 0.710313C9.4067 0.67375 9.44485 0.639063 9.48423 0.606094C9.96423 0.199219 10.6938 0.225938 11.1423 0.674219L15.9845 5.50969L28.3891 17.3562Z"/>
        </svg>
      ),
      title: "Desarrollo de Software",
      description: "Soluciones de software a medida que impulsan la eficiencia y el crecimiento de tu negocio.",
      features: ["Soluciones Personalizadas", "Tecnología Avanzada", "Arquitectura Escalable", "Integración API"],
      data: dataCardSoftware,
    },
    {
      id: 5,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 36 36" fill="currentColor">
          <path d="M25 4H11a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M11 6h14v18H11Zm0 24v-4h14v4Z"/>
          <path d="M17 27h2v2h-2z"/>
        </svg>
      ),
      title: "Desarrollo de Aplicaciones",
      description: "Creación de apps móviles innovadoras, diseñadas para satisfacer las necesidades específicas de los usuarios.",
      features: ["iOS & Android", "UX Optimizada", "Notificaciones Push", "Análisis en Tiempo Real"],
      data: dataCardApps,
    },
    {
      id: 6,
      icon: (
        <svg width="48" height="48" viewBox="0 0 30 47" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M6.55334 16.9369C5.69341 16.9369 4.8419 17.1066 4.04743 17.4364C3.25296 17.7661 2.53108 18.2495 1.92302 18.8588C1.31495 19.4681 0.832612 20.1915 0.503531 20.9876C0.174449 21.7837 0.00507358 22.637 0.00507358 23.4987C0.00507358 24.3604 0.174449 25.2137 0.503531 26.0098C0.832612 26.806 1.31495 27.5293 1.92302 28.1387C2.53108 28.748 3.25296 29.2313 4.04743 29.5611C4.8419 29.8909 5.69341 30.0606 6.55334 30.0606H13.1016V23.6308C13.1006 23.5428 13.1006 23.4547 13.1016 23.3666V16.9369H6.55334ZM13.1016 13.1263H6.55334C4.8163 13.1263 3.1504 12.4348 1.92212 11.204C0.693844 9.97314 0.0038055 8.30378 0.0038055 6.56313C0.0038055 4.82248 0.693844 3.15312 1.92212 1.9223C3.1504 0.691471 4.8163 0 6.55334 0H13.1016V13.1263Z"/>
        </svg>
      ),
      title: "Diseño UX/UI",
      description: "Diseño intuitivo y atractivo de interfaces, mejorando la experiencia de usuario y la interacción.",
      features: ["User Research", "Prototipado", "Design System", "Usability Testing"],
      data: dataCardUXUI,
    },
    {
      id: 7,
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: "Mantenimiento y Soporte",
      description: "Asistencia técnica continua y actualización de sistemas para garantizar su óptimo funcionamiento.",
      features: ["Soporte 24/7", "Actualizaciones", "Monitoreo", "Backups Automáticos"],
      data: dataCardECommerce,
    },
  ];

  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "TypeScript", category: "Language" },
    { name: "Docker", category: "DevOps" },
    { name: "AWS", category: "Cloud" },
    { name: "MongoDB", category: "Database" },
    { name: "Python", category: "Backend" },
  ];

  return (
    <div className="services-modern">
      <Helmet>
        <title>Servicios: Automatización IA, WhatsApp API, Desarrollo Web & Apps | Pochitama</title>
        <meta
          name="description"
          content="Servicios especializados en Automatización con IA (ChatGPT, OpenAI), WhatsApp Business API, Instagram API, desarrollo web, apps móviles y diseño UX/UI. Soluciones tech que transforman negocios."
        />
        <meta
          name="keywords"
          content="automatización IA, ChatGPT integration, WhatsApp Business API, Instagram API, Meta API, desarrollo web, apps móviles, chatbots inteligentes, machine learning, OpenAI, React, Node.js, diseño UX/UI, SEO, software empresarial"
        />
        <meta property="og:title" content="Servicios: IA, WhatsApp API, Desarrollo Web & Apps | Pochitama" />
        <meta
          property="og:description"
          content="Automatizaciones con IA, WhatsApp Business API, Instagram API, desarrollo web y apps móviles. Tecnología innovadora para impulsar tu negocio."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pochitamadev.com/servicios" />
        <meta property="og:image" content="https://pochitamadev.com/ico/LogoPochi.webp" />
        <link rel="canonical" href="https://pochitamadev.com/servicios" />
        
        {/* Schema.org JSON-LD para Servicios */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Digital Technology Services",
            "provider": {
              "@type": "Organization",
              "name": "Pochitama",
              "url": "https://pochitamadev.com"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Worldwide"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Servicios Digitales",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Automatizaciones con IA",
                    "description": "Soluciones de automatización con ChatGPT, OpenAI API, Machine Learning y procesamiento de lenguaje natural"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Meta API - WhatsApp & Instagram",
                    "description": "Implementación de WhatsApp Business API e Instagram API para automatización de atención al cliente y ventas"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Desarrollo Web",
                    "description": "Desarrollo de sitios web personalizados con React, Node.js y tecnologías modernas"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Desarrollo de Apps Móviles",
                    "description": "Aplicaciones móviles nativas y multiplataforma para iOS y Android"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Diseño UX/UI",
                    "description": "Diseño de interfaces intuitivas centradas en la experiencia del usuario"
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>

      <section className="services-hero">
        <div className="services-hero-content">
          <div className="services-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 15.5C10.067 15.5 8.5 13.933 8.5 12C8.5 10.067 10.067 8.5 12 8.5C13.933 8.5 15.5 10.067 15.5 12C15.5 13.933 13.933 15.5 12 15.5ZM19.43 12.97C19.47 12.65 19.5 12.33 19.5 12C19.5 11.67 19.47 11.34 19.43 11L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.96 19.05 5.05L16.56 6.05C16.04 5.66 15.5 5.32 14.87 5.07L14.5 2.42C14.46 2.18 14.25 2 14 2H10C9.75 2 9.54 2.18 9.5 2.42L9.13 5.07C8.5 5.32 7.96 5.66 7.44 6.05L4.95 5.05C4.73 4.96 4.46 5.05 4.34 5.27L2.34 8.73C2.21 8.95 2.27 9.22 2.46 9.37L4.57 11C4.53 11.34 4.5 11.67 4.5 12C4.5 12.33 4.53 12.65 4.57 12.97L2.46 14.63C2.27 14.78 2.21 15.05 2.34 15.27L4.34 18.73C4.46 18.95 4.73 19.03 4.95 18.95L7.44 17.94C7.96 18.34 8.5 18.68 9.13 18.93L9.5 21.58C9.54 21.82 9.75 22 10 22H14C14.25 22 14.46 21.82 14.5 21.58L14.87 18.93C15.5 18.67 16.04 18.34 16.56 17.94L19.05 18.95C19.27 19.03 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.97Z"/>
            </svg>
            Nuestros Servicios
          </div>
          <h1 className="services-hero-title">
            Soluciones <span className="gradient-text">Digitales</span> Innovadoras
          </h1>
          <p className="services-hero-description">
            Transformamos ideas en experiencias digitales excepcionales. Desde desarrollo web hasta aplicaciones móviles,
            ofrecemos soluciones tecnológicas de vanguardia que impulsan tu negocio.
          </p>
        </div>
      </section>

      <section className="services-grid-section">
        <div className="services-container">
          <div className="services-grid">
            {services.map((service) => (
              <div
                key={service.id}
                className="service-card"
                onClick={() => handleClickCard(service.data)}
              >
                <div className="service-card-icon">{service.icon}</div>
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-description">{service.description}</p>
                <div className="service-features">
                  {service.features.map((feature, index) => (
                    <span key={index} className="service-feature-tag">
                      {feature}
                    </span>
                  ))}
                </div>
                <button className="service-card-button">
                  Ver Más <span className="arrow">→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-tech-section">
        <div className="services-container">
          <h2 className="section-title">Tecnologías que Utilizamos</h2>
          <p className="section-subtitle">
            Trabajamos con las herramientas más avanzadas para garantizar soluciones de alta calidad
          </p>
          <div className="tech-grid">
            {technologies.map((tech, index) => (
              <div key={index} className="tech-tag">
                <span className="tech-category">{tech.category}</span>
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-process-section">
        <div className="services-container">
          <h2 className="section-title">Nuestro Proceso</h2>
          <div className="services-process-grid">
            <div className="services-process-step">
              <div className="services-process-number">01</div>
              <h3 className="services-process-title">Análisis</h3>
              <p className="services-process-description">
                Entendemos tus necesidades y objetivos para crear una estrategia personalizada.
              </p>
            </div>
            <div className="services-process-step">
              <div className="services-process-number">02</div>
              <h3 className="services-process-title">Diseño</h3>
              <p className="services-process-description">
                Creamos prototipos y diseños que reflejan tu visión y marca.
              </p>
            </div>
            <div className="services-process-step">
              <div className="services-process-number">03</div>
              <h3 className="services-process-title">Desarrollo</h3>
              <p className="services-process-description">
                Implementamos soluciones con código limpio y mejores prácticas.
              </p>
            </div>
            <div className="services-process-step">
              <div className="services-process-number">04</div>
              <h3 className="services-process-title">Entrega</h3>
              <p className="services-process-description">
                Lanzamos tu proyecto con soporte continuo y mantenimiento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Component */}
      <Cta 
        title="¿Listo para llevar tu negocio al siguiente nivel?"
        subtitle="Trabajemos juntos para crear soluciones digitales que impulsen tu crecimiento. Contáctanos y hagamos realidad tu proyecto."
      />

      {showModal && (
        <ModalServices
          show={showModal}
          data={selectedCardData}
          onHide={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Services;
