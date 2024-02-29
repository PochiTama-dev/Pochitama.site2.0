import { Modal } from "react-bootstrap";
import { loreIpsum } from "../../pages/Portfolio/variables";

const ModalPortfolio = ({ show, data }) => {
  const handlerEvent = (e) => {
    e.stopPropagation();
  };

  return (
    <Modal show={show} centered size="xl" onClick={handlerEvent}>
      <Modal.Body className="d-flex flex-column p-0">
        <div
          className=""
          style={{
            background: `url(${
              data ? data.img : "/src/assets/images/exampleProyect.webp"
            }) no-repeat center center`,
            backgroundSize: 'cover',
            width: "100%",
            minHeight: "45vh",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
          }}
        />
        <div className="modal_rectangule">
          <div style={{ width: "60%" }}>
            <label className="modal_rectangule_title">
              Desarrollo de Pagina Web
            </label>
          </div>
          <div className="modal_logo" />
        </div>
        <div style={{ width: "100%", padding: "5px", marginTop: "50px" }}>
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
          <button className="modal_button">
            <label className="modal_button_label">Contrata este servicio</label>
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalPortfolio;
