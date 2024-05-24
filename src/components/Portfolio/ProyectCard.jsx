import React, { useState } from "react";
import ModalPortfolio from "./ModalPortfolio";

function ProyectCard({
  proyectName,
  position,
  link,
  image,
  images,
  url,
  description,
}) {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCardClick = () => {
    setSelectedProject({ title: proyectName, image, images, url, description });
    handleShowModal();
  };

  return (
    <div
      className={`porfolio-proyect-box ${position}`}
      onClick={handleCardClick}
    >
      {/* FONDO CON IMAGEN */}
      <div style={{ position: "relative", width: "250px" }}>
        <img
          src={image}
          className="portfolio-label"
          style={{ width: "100%", height: "80%", borderRadius: "20px" }}
        />
        <div className="portfolio-pildora">
          {/* PILDORA PROYECTO */}
          <label className="portfolio-label">{proyectName}</label>
        </div>
      </div>

      {showModal && (
        <ModalPortfolio
          show={showModal}
          data={selectedProject}
          onHide={handleCloseModal}
        />
      )}
    </div>
  );
}

export default ProyectCard;
