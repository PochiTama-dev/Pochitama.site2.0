import { Modal } from "react-bootstrap";
/* eslint-disable */
function ModalServices({ show, data, onHide }) {
  return (
    <Modal
      show={show}
      centered
      size="xl"
      onHide={onHide}
      onClick={(e) => e.stopPropagation()}
    >
      <Modal.Body className="d-flex modal-services flex-column p-0">
        <div
          className=""
          style={{
            background: `url(${
              data ? data.img : "/src/assets/images/exampleProyect.webp"
            })`,
            backgroundSize: "cover", // Ajusta el tamaño de la imagen para cubrir completamente el contenedor
            backgroundPosition: "center", // Ajusta la posición de la imagen al centro
            width: "100%",
            minHeight: "45vh",
          }}
        />
        <div className="modal_rectangule">
          <div className="modal_div_title">
            <label className="modal_rectangule_title">{data.title}</label>
          </div>
          <div className="modal_logo" />
        </div>
        <div style={{ width: "100%", padding: "5px " }}>
          <div>
            <div
              style={{ marginTop: "100px" }}
              className="description-modal-portfolio"
            >
              <pre className="modal_label">
                {data ? data.description : loreIpsum}
              </pre>
            </div>
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
