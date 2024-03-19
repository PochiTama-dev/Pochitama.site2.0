import { Modal } from "react-bootstrap";
/* eslint-disable */
function ModalServices({ show, data, onHide }) {
  const renderDescription = () => {
    if (!data) return ""; // Manejo de datos nulos

    // Dividir la descripción en partes separadas por '**'
    const parts = data.description.split("**");

    // Inicializar un array para almacenar las partes renderizadas
    const renderedParts = [];

    // Iterar sobre las partes divididas
    for (let i = 0; i < parts.length; i++) {
      // Alternar entre renderizar texto normal y texto en negrita
      if (i % 2 === 0) {
        renderedParts.push(parts[i]); // Agregar texto normal
      } else {
        renderedParts.push(<strong key={i}>{parts[i]}</strong>); // Agregar texto en negrita
      }
    }

    // Devolver las partes renderizadas como elementos React
    return renderedParts;
  };
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
                {/* {data ? data.description : loreIpsum} */}
                {renderDescription()}
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
