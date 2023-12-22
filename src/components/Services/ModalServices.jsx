import React from "react";
import { Modal } from "react-bootstrap";

function ModalServices({ show, data, onHide }) {
  return (
    <Modal
      show={show}
      centered
      size="xl"
      onHide={onHide}
      onClick={(e) => e.stopPropagation()}
    >
      <Modal.Body className="d-flex flex-column p-0">
        <div
          className=""
          style={{
            background: `url(${
              data ? data.img : "/src/assets/images/exampleProyect.png"
            })`,
            backgroundSize: "cover", // Ajusta el tamaño de la imagen para cubrir completamente el contenedor
            backgroundPosition: "center", // Ajusta la posición de la imagen al centro
            width: "100%",
            minHeight: "45vh",
          }}
        />
        <div className="modal_rectangule_services">
          <div className="modal_div_title">
            <label className="modal_rectangule_services_title">{data.title}</label>
          </div>
          <div className="modal_logo_services" />
        </div>
        <div style={{ width: "100%", padding: "5px ", marginTop: "50px" }}>
          <div>
            <label className="modal_label">
              {data ? data.description : loreIpsum}
            </label>
          </div>
        </div>
        <div
          className="d-flex justify-content-center"
          style={{ marginTop: "50px" }}
        >
          <button className="modal_button_services">
            <label className="modal_button_label">Contrata este servicio</label>
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ModalServices;
