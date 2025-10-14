import React, { useState } from "react";
import ModalPortfolio from "./ModalPortfolio";

function ProyectCard({
  proyectName,
  image,
  images,
  url,
  description,
  category = "web",
  technologies = []
}) {
  const [showModal, setShowModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleCardClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <article
        className="project-card"
        onClick={handleCardClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Container */}
        <div className="project-card__image-wrapper">
          <img
            src={image}
            alt={`Proyecto ${proyectName}`}
            className="project-card__image"
            loading="lazy"
          />
          <div className={`project-card__overlay ${isHovered ? 'active' : ''}`}>
            <div className="project-card__overlay-content">
              <span className="project-card__view-icon">👁️</span>
              <p className="project-card__view-text">Ver Proyecto</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="project-card__content">
          <div className="project-card__header">
            <h3 className="project-card__title">{proyectName}</h3>
            <span className="project-card__category">{category}</span>
          </div>
          
          {/* Technologies */}
          {technologies && technologies.length > 0 && (
            <div className="project-card__tech">
              {technologies.slice(0, 3).map((tech, index) => (
                <span key={index} className="project-card__tech-tag">
                  {tech}
                </span>
              ))}
              {technologies.length > 3 && (
                <span className="project-card__tech-more">
                  +{technologies.length - 3}
                </span>
              )}
            </div>
          )}

          <button className="project-card__button">
            Ver Detalles
            <span className="project-card__arrow">→</span>
          </button>
        </div>
      </article>

      {showModal && (
        <ModalPortfolio
          show={showModal}
          data={{ 
            title: proyectName, 
            image, 
            images, 
            url, 
            description,
            technologies 
          }}
          onHide={handleCloseModal}
        />
      )}
    </>
  );
}

export default ProyectCard;
