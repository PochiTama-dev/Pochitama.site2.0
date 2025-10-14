import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import "./portfolio.css";
import ProyectCard from "../../components/Portfolio/ProyectCard";
import { texto, titleCTA, subtitleCTA } from "./variables.js";
import Cta from "../../components/cta/Cta.jsx";
import { projectsData } from "./projectsData";

const Portfolio = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [selectedFilter, setSelectedFilter] = useState("all");

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateScreenWidth);
    return () => window.removeEventListener("resize", updateScreenWidth);
  }, []);

  const allProjectsData = [...projectsData];

  // Filtros de categorías (puedes expandir esto según tus proyectos)
  const categories = [
    { id: "all", label: "Todos" },
    { id: "ecommerce", label: "E-commerce" },
    { id: "web", label: "Sitios Web" },
    { id: "mobile", label: "Apps Móviles" }
  ];

  const filteredProjects = selectedFilter === "all" 
    ? allProjectsData 
    : allProjectsData.filter(project => project.category === selectedFilter);

  return (
    <>
      <Helmet>
        <title>Portfolio - Pochitama.dev | Proyectos de Desarrollo Web y Apps</title>
        <meta 
          name="description" 
          content="Explora nuestro portfolio de proyectos exitosos. Desarrollo web, e-commerce, aplicaciones móviles y soluciones digitales personalizadas para empresas." 
        />
        <meta 
          name="keywords" 
          content="portfolio desarrollo web, proyectos web, casos de éxito, desarrollo apps, e-commerce, sitios web profesionales" 
        />
        <meta property="og:title" content="Portfolio - Pochitama.dev" />
        <meta 
          property="og:description" 
          content="Descubre los proyectos exitosos que hemos desarrollado para nuestros clientes." 
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://pochitama.dev/portfolio" />
      </Helmet>

      <main className="portfolio-page">
        {/* Hero Section */}
        <section className="portfolio-hero">
          <div className="portfolio-hero__content">
            <span className="portfolio-hero__badge">💼 Nuestro Trabajo</span>
            <h1 className="portfolio-hero__title">
              Proyectos que <span className="gradient-text-portfolio">Transforman Negocios</span>
            </h1>
            <p className="portfolio-hero__description">
              {texto}
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="portfolio-filters">
          <div className="portfolio-filters__container">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`portfolio-filter-btn ${selectedFilter === category.id ? 'active' : ''}`}
                onClick={() => setSelectedFilter(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </section>

        {/* Projects Grid */}
        <section className="portfolio-projects">
          <div className="portfolio-projects__container">
            {screenWidth > 1000 ? (
              <div className="portfolio-grid">
                {filteredProjects.map((project, index) => (
                  <ProyectCard
                    key={index}
                    proyectName={project.title}
                    image={project.image}
                    images={project.images}
                    url={project.url}
                    description={project.description}
                    category={project.category}
                    technologies={project.technologies}
                  />
                ))}
              </div>
            ) : (
              <div className="portfolio-mobile-grid">
                {filteredProjects.map((project, index) => (
                  <ProyectCard
                    key={index}
                    proyectName={project.title}
                    image={project.image}
                    images={project.images}
                    url={project.url}
                    description={project.description}
                    category={project.category}
                    technologies={project.technologies}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Stats Section */}
        <section className="portfolio-stats">
          <div className="portfolio-stats__grid">
            <div className="portfolio-stat">
              <h3 className="portfolio-stat__number">50+</h3>
              <p className="portfolio-stat__label">Proyectos Completados</p>
            </div>
            <div className="portfolio-stat">
              <h3 className="portfolio-stat__number">100%</h3>
              <p className="portfolio-stat__label">Clientes Satisfechos</p>
            </div>
            <div className="portfolio-stat">
              <h3 className="portfolio-stat__number">50+</h3>
              <p className="portfolio-stat__label">Tecnologías Dominadas</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <Cta title={titleCTA} subtitle={subtitleCTA} />
      </main>
    </>
  );
};

export default Portfolio;
