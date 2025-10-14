import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import "./about.css";
import "../../Themes/Base/_variables.css";
import colaboradores from "../../colaboradores.json";
import Cta from "../../components/cta/Cta";
import AboutUsSlider from "../../components/quienes/AboutUsSlider";

const About = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', updateScreenWidth);
    return () => window.removeEventListener('resize', updateScreenWidth);
  }, []);

  // Stats de la empresa
  const stats = [
    { number: "50+", label: "Proyectos Completados", icon: "🚀" },
    { number: "30+", label: "Clientes Satisfechos", icon: "⭐" },
    { number: "10+", label: "Desarrolladores Expertos", icon: "👨‍💻" },
    { number: "100%", label: "Código Limpio", icon: "✨" }
  ];

  // Valores de la empresa
  const values = [
    {
      title: "Innovación Constante",
      description: "Utilizamos las últimas tecnologías y mejores prácticas del desarrollo de software",
      icon: "💡"
    },
    {
      title: "Código de Calidad",
      description: "Escribimos código limpio, escalable y mantenible siguiendo estándares de la industria",
      icon: "⚡"
    },
    {
      title: "Entrega a Tiempo",
      description: "Cumplimos con los plazos establecidos mediante metodologías ágiles",
      icon: "⏱️"
    },
    {
      title: "Soporte Continuo",
      description: "Acompañamos tu proyecto con mantenimiento y actualizaciones constantes",
      icon: "🛠️"
    }
  ];

  const titleCta = "¿Listo para digitalizar tu negocio?";
  const subtitleCta = "Transformemos tus ideas en soluciones digitales de alto impacto";

  return (
    <>
      <Helmet>
        <title>Nosotros - Pochitama.dev | Agencia de Desarrollo de Software</title>
        <meta 
          name="description" 
          content="Conoce al equipo de Pochitama.dev. Somos una agencia de desarrollo especializada en crear soluciones digitales innovadoras con tecnologías de vanguardia." 
        />
        <meta 
          name="keywords" 
          content="equipo desarrollo, agencia software, desarrolladores expertos, equipo tech, programadores profesionales, desarrollo web Argentina" 
        />
        <meta property="og:title" content="Nosotros - Pochitama.dev | Agencia de Desarrollo" />
        <meta 
          property="og:description" 
          content="Somos un equipo de desarrolladores expertos especializados en crear soluciones digitales de alto impacto." 
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://pochitama.dev/about" />
      </Helmet>

      <main className="about-page">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="about-hero__content">
            <span className="about-hero__badge">🚀 Sobre Nosotros</span>
            <h1 className="about-hero__title">
              Somos una <span className="gradient-text">Agencia Tech</span>
              <br />
              Apasionada por la Innovación
            </h1>
            <p className="about-hero__description">
              Transformamos ideas en soluciones digitales de alto rendimiento.
              Combinamos experiencia técnica con creatividad para construir
              productos que generan impacto real.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="about-stats">
          <div className="about-stats__grid">
            {stats.map((stat, index) => (
              <article key={index} className="stat-card">
                <span className="stat-card__icon">{stat.icon}</span>
                <h3 className="stat-card__number">{stat.number}</h3>
                <p className="stat-card__label">{stat.label}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="about-why">
          <div className="section-header">
            <h2 className="section-title">
              ¿Por Qué Elegirnos?
            </h2>
            <p className="section-subtitle">
              Nuestro enfoque combina expertise técnico con metodologías ágiles
            </p>
          </div>

          <div className="values-grid">
            {values.map((value, index) => (
              <article key={index} className="value-card">
                <div className="value-card__icon">{value.icon}</div>
                <h3 className="value-card__title">{value.title}</h3>
                <p className="value-card__description">{value.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Tech Stack Preview */}
        <section className="about-tech">
          <div className="section-header">
            <h2 className="section-title">Tecnologías que Dominamos</h2>
            <p className="section-subtitle">
              Stack moderno para soluciones escalables y performantes
            </p>
          </div>
          <div className="tech-tags">
            {['React', 'Node.js', 'TypeScript', 'Next.js', 'MongoDB', 'PostgreSQL', 
              'AWS', 'Docker', 'GraphQL', 'React Native', 'Vue.js', 'Python'].map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="about-team">
          <div className="section-header">
            <h2 className="section-title">Nuestro Equipo</h2>
            <p className="section-subtitle">
              Desarrolladores apasionados por crear código de calidad
            </p>
          </div>

          {screenWidth >= 1024 ? (
            <div className="team-grid">
              {colaboradores.equipo.map((colaborador, index) => (
                <article key={index} className="team-member">
                  <div className="team-member__image-wrapper">
                    <img 
                      src={colaborador.imagen} 
                      alt={`${colaborador.nombre} - ${colaborador.area}`}
                      className="team-member__image"
                      loading="lazy"
                    />
                    <div className="team-member__overlay">
                      <span className="team-member__icon">👋</span>
                    </div>
                  </div>
                  <div className="team-member__info">
                    <h3 className="team-member__name">{colaborador.nombre}</h3>
                    <p className="team-member__role">{colaborador.area}</p>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <AboutUsSlider equipo={colaboradores.equipo} screenWidth={screenWidth} />
          )}
        </section>

        {/* CTA Section */}
        <Cta title={titleCta} subtitle={subtitleCta} />
      </main>
    </>
  );
};

export default About;
