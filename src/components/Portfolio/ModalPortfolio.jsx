import React, { useState } from "react";
import { Modal, Carousel } from "react-bootstrap";
import "./modalPortfolio.css";

const ModalPortfolio = ({ show, onHide, data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleVisitSite = () => {
    const url =
      data.url.startsWith("http://") || data.url.startsWith("https://")
        ? data.url
        : `https://${data.url}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      size="xl"
      className="portfolio-modal"
      backdrop="static"
    >
      <Modal.Header closeButton className="portfolio-modal__header">
        <Modal.Title className="portfolio-modal__title">
          {data.title}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="portfolio-modal__body">
        {/* Image Carousel */}
        <div className="portfolio-modal__carousel-wrapper">
          <Carousel
            activeIndex={activeIndex}
            onSelect={handleSelect}
            interval={null}
            indicators={true}
            controls={data.images && data.images.length > 1}
          >
            {data.images && data.images.map((image, index) => (
              <Carousel.Item key={index}>
                <div className="portfolio-modal__image-container">
                  <img
                    src={image}
                    alt={`${data.title} - Vista ${index + 1}`}
                    className="portfolio-modal__image"
                  />
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
          
          {/* Image Counter */}
          {data.images && data.images.length > 1 && (
            <div className="portfolio-modal__counter">
              {activeIndex + 1} / {data.images.length}
            </div>
          )}
        </div>

        {/* Project Info */}
        <div className="portfolio-modal__info">
          {/* Description */}
          <div className="portfolio-modal__section">
            <h3 className="portfolio-modal__section-title">
              📋 Sobre el Proyecto
            </h3>
            <p className="portfolio-modal__description">
              {data.description}
            </p>
          </div>

          {/* Technologies */}
          {data.technologies && data.technologies.length > 0 && (
            <div className="portfolio-modal__section">
              <h3 className="portfolio-modal__section-title">
                🛠️ Tecnologías Utilizadas
              </h3>
              <div className="portfolio-modal__tech-grid">
                {data.technologies.map((tech, index) => (
                  <span key={index} className="portfolio-modal__tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Features */}
          <div className="portfolio-modal__section">
            <h3 className="portfolio-modal__section-title">
              ✨ Características Destacadas
            </h3>
            <ul className="portfolio-modal__features">
              <li>Diseño responsive y adaptable</li>
              <li>Optimizado para SEO</li>
              <li>Alto rendimiento y velocidad</li>
              <li>Experiencia de usuario intuitiva</li>
            </ul>
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer className="portfolio-modal__footer">
        <button 
          className="portfolio-modal__btn portfolio-modal__btn--secondary"
          onClick={onHide}
        >
          Cerrar
        </button>
        {data.url && (
          <button 
            className="portfolio-modal__btn portfolio-modal__btn--primary"
            onClick={handleVisitSite}
          >
            Visitar Sitio Web
            <span className="portfolio-modal__btn-icon">🚀</span>
          </button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default ModalPortfolio;
