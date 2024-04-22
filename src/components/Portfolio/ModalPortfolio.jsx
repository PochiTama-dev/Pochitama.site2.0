import React from "react";
import { Modal, Carousel } from "react-bootstrap";
import { loreIpsum } from "../../pages/Portfolio/variables";

const ModalPortfolio = ({ show, onHide, data }) => {
  const handleClick = () => {
    const url =
      data.url.startsWith("http://") || data.url.startsWith("https://")
        ? data.url
        : `http://${data.url}`;

    window.open(url, "_blank");
  };
  const handlerEvent = (e) => {
  
  };
console.log(data.description)
  return (
    <Modal
      show={show}
      centered
      size="xl"
      onClick={handlerEvent}
      onHide={onHide}
    >
      <Modal.Body className="d-flex flex-column p-0">
        <Carousel
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {data.images &&
            data.images.map((image, index) => (
              <Carousel.Item
                key={index}
                className="text-center"
                style={{ marginBottom: "50px" }}
              >
                <img
                  src={image}
                  alt={`${data.title}-${index}`}
                  style={{
                    height: "400px",
                    width: "70%",
                    display: "inline-block",
                    margin: "20px",
                  }}
                  className="mx-auto portfolio-image-modal"
                />
              </Carousel.Item>
            ))}
        </Carousel>

        <div className="modal_rectangule">
          <div style={{ width: "60%" }}>
            <label className="modal_rectangule_title">{data.title}</label>
          </div>
          <div className="modal_logo" />
        </div>

        <div style={{ width: "100%", padding: "5px", marginTop: "50px" }}>
          <div className="description-modal-portfolio">
            <label className="modal_label">
              {data.description }
            </label>
          </div>
        </div>

        <div
          className="d-flex justify-content-center"
          style={{ marginTop: "50px" }}
        >
          {data.url && (
            <button className="modal_button">
              <label className="modal_button_label" onClick={handleClick}>
                Visitala!
              </label>
            </button>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalPortfolio;
