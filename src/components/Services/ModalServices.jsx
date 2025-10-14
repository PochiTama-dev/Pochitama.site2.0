import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ModalServices.css";

function ModalServices({ show, data, onHide }) {
  const renderDescription = () => {
    if (!data) return "";

    const parts = data.description.split("**");
    const renderedParts = [];

    for (let i = 0; i < parts.length; i++) {
      if (i % 2 === 0) {
        renderedParts.push(parts[i]);
      } else {
        renderedParts.push(<strong key={i}>{parts[i]}</strong>);
      }
    }

    return renderedParts;
  };

  return (
    <Modal
      show={show}
      centered
      size="xl"
      onHide={onHide}
      onClick={(e) => e.stopPropagation()}
      className="modal-services-modern"
    >
      <Modal.Body className="modal-services-body">
        <button className="modal-close-button" onClick={onHide}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        <div
          className="modal-service-image"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(184, 175, 213, 0.9), rgba(215, 188, 220, 0.8)), url(${
              data ? data.img : "/src/assets/images/exampleProyect.webp"
            })`,
          }}
        >
          <div className="modal-service-header">
            <div className="modal-service-badge">✨ Servicio Premium</div>
            <h2 className="modal-service-title">{data?.title}</h2>
          </div>
        </div>

        <div className="modal-service-content">
          <div className="modal-service-description">
            <pre className="description-text">{renderDescription()}</pre>
          </div>

          <div className="modal-service-features">
            <h3 className="features-title">¿Por qué elegirnos?</h3>
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">⚡</div>
                <div className="feature-text">
                  <h4>Entrega Rápida</h4>
                  <p>Cumplimos con los plazos acordados</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🎯</div>
                <div className="feature-text">
                  <h4>Calidad Garantizada</h4>
                  <p>Código limpio y escalable</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">💬</div>
                <div className="feature-text">
                  <h4>Soporte Continuo</h4>
                  <p>Te acompañamos en todo momento</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🚀</div>
                <div className="feature-text">
                  <h4>Tecnología Avanzada</h4>
                  <p>Herramientas de vanguardia</p>
                </div>
              </div>
            </div>
          </div>

          <div className="modal-service-actions">
            <Link to="/contacto" className="modal-primary-button">
              <span>Solicitar este servicio</span>
              <span className="button-arrow">→</span>
            </Link>
            <button className="modal-secondary-button" onClick={onHide}>
              Ver más servicios
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ModalServices;
