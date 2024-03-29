import { useEffect, useRef, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./Services.css";
import Cta from "../../components/cta/Cta";
import ModalServices from "../../components/Services/ModalServices";
import {
  loreIpsum,
  dataCardWeb,
  dataCardSoftware,
  dataCardApps,
  dataCardUXUI,
  dataCardECommerce,
} from "./variables";
import { useLocation } from "react-router-dom";

const Services = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCardData, setSelectedCardData] = useState({
    title: "",
    img: "exampleProyect.webp",
    description: loreIpsum,
  });

  const servicesRef = useRef(null);
  const { state } = useLocation();
  const fromOurServices = state?.fromOurServices;

  useEffect(() => {
    if (servicesRef.current && fromOurServices) {
      servicesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [fromOurServices]);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCLickCard = (data) => {
    const { title, img, description } = data;

    setSelectedCardData({
      title,
      img,
      description,
    });

    handleShowModal();
  };

  const titleCta = "Descubre más sobre nuestros servicios";
  const subtitleCta =
    "Crear aplicaciones que marquen la diferencia. Diseño elegante, funcionalidad poderosa y compromiso absoluto con la excelencia.";

  return (
    <div>
      <Cta title={titleCta} subtitle={subtitleCta} />
      <Container fluid className="container-services py-5" ref={servicesRef}>
        <Row className="justify-content-center text-center mb-5">
          <Col
            xs={0}
            md={2}
            className="d-flex flex-column justify-content-center"
          >
            <div className="bg-primary h-3px"></div>
          </Col>
          <Col
            xs={11}
            md={7}
            lg={6}
            xl={4}
            className="d-flex flex-column justify-content-center"
          >
            <h2 className="text-primary-services text-uppercase fw-bolder">
              Servicios que ofrecemos
            </h2>
          </Col>
          <Col
            xs={0}
            md={2}
            className="d-flex flex-column justify-content-center"
          >
            <div className="bg-primary h-3px"></div>
          </Col>
        </Row>

        <Row className="justify-content-center pt-md-5 pb-md-5">
          <Col
            xs={10}
            md={4}
            lg={3}
            className="d-flex justify-content-center my-5 my-md-3"
          >
            <Card
              className="bg-primary card_hover"
              style={{ width: "18rem" }}
              onClick={() => handleCLickCard(dataCardWeb)}
            >
              <div className="card-image text-center" style={{display:'flex', justifyContent:'center', alignItems:"center"}}>
                <div className="icon-cards">
                  <svg width="45" height="45" viewBox="0 0 50 44" className="svg-fill" xmlns="http://www.w3.org/2000/svg">
                    <path d="M44.25 0C45.7087 0 47.1076 0.579462 48.1391 1.61091C49.1705 2.64236 49.75 4.04131 49.75 5.5V38.5C49.75 39.9587 49.1705 41.3576 48.1391 42.3891C47.1076 43.4205 45.7087 44 44.25 44H5.75C4.29131 44 2.89236 43.4205 1.86091 42.3891C0.829462 41.3576 0.25 39.9587 0.25 38.5V5.5C0.25 4.04131 0.829462 2.64236 1.86091 1.61091C2.89236 0.579462 4.29131 0 5.75 0H44.25ZM44.25 16.5H5.75V35.75C5.75009 36.4236 5.99738 37.0737 6.44497 37.577C6.89255 38.0804 7.50931 38.4019 8.17825 38.4808L8.5 38.5H41.5C42.1736 38.4999 42.8237 38.2526 43.327 37.805C43.8304 37.3574 44.1519 36.7407 44.2308 36.0718L44.25 35.75V16.5ZM8.5 5.5C7.77065 5.5 7.07118 5.78973 6.55546 6.30546C6.03973 6.82118 5.75 7.52065 5.75 8.25C5.75 8.97935 6.03973 9.67882 6.55546 10.1945C7.07118 10.7103 7.77065 11 8.5 11C9.22935 11 9.92882 10.7103 10.4445 10.1945C10.9603 9.67882 11.25 8.97935 11.25 8.25C11.25 7.52065 10.9603 6.82118 10.4445 6.30546C9.92882 5.78973 9.22935 5.5 8.5 5.5ZM16.75 5.5C16.0207 5.5 15.3212 5.78973 14.8055 6.30546C14.2897 6.82118 14 7.52065 14 8.25C14 8.97935 14.2897 9.67882 14.8055 10.1945C15.3212 10.7103 16.0207 11 16.75 11C17.4793 11 18.1788 10.7103 18.6945 10.1945C19.2103 9.67882 19.5 8.97935 19.5 8.25C19.5 7.52065 19.2103 6.82118 18.6945 6.30546C18.1788 5.78973 17.4793 5.5 16.75 5.5ZM25 5.5C24.2707 5.5 23.5712 5.78973 23.0555 6.30546C22.5397 6.82118 22.25 7.52065 22.25 8.25C22.25 8.97935 22.5397 9.67882 23.0555 10.1945C23.5712 10.7103 24.2707 11 25 11C25.7293 11 26.4288 10.7103 26.9445 10.1945C27.4603 9.67882 27.75 8.97935 27.75 8.25C27.75 7.52065 27.4603 6.82118 26.9445 6.30546C26.4288 5.78973 25.7293 5.5 25 5.5Z"/>
                  </svg>
                </div>
              </div>
              <Card.Body className="d-flex flex-column justify-content-between bg-primary">
                <Card.Title className="text-uppercase text-center text-white">
                  Desarrollo de sitios Web a Medida
                </Card.Title>
                <Card.Text className="text-white text-center">
                Creación personalizada de sitios web innovadores y funcionales, adaptados a necesidades específicas de cada cliente.
                </Card.Text>
                <div className="text-center">
                  <Button
                    variant="tertiary"
                    className="rounded-pill fw-bolder text-white text-uppercase text-center bg-primary px-5 border-radius btn rounded"
                  >
                    Ver Mas
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col
            xs={10}
            md={4}
            lg={3}
            className="d-flex justify-content-center my-5 my-md-3"
          >
            <Card
              className="bg-primary card_hover"
              style={{ width: "18rem" }}
              onClick={() => handleCLickCard(dataCardSoftware)}
            >
              <div className="card-image text-center" style={{display:'flex', justifyContent:'center', alignItems:"center"}}>
                <div className="icon-cards">
                  <svg width="45" height="45" className="svg-fill" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
                    <path d="M41.6 41.6C42.9791 41.6 44.3018 42.1479 45.277 43.123C46.2521 44.0982 46.8 45.4209 46.8 46.8C46.8 48.1791 46.2521 49.5018 45.277 50.477C44.3018 51.4521 42.9791 52 41.6 52C40.2209 52 38.8982 51.4521 37.923 50.477C36.9479 49.5018 36.4 48.1791 36.4 46.8C36.4 43.914 38.714 41.6 41.6 41.6ZM0 0H8.502L10.946 5.2H49.4C50.0896 5.2 50.7509 5.47393 51.2385 5.96152C51.7261 6.44912 52 7.11044 52 7.8C52 8.242 51.87 8.684 51.688 9.1L42.38 25.922C41.496 27.508 39.78 28.6 37.83 28.6H18.46L16.12 32.838L16.042 33.15C16.042 33.3224 16.1105 33.4877 16.2324 33.6096C16.3543 33.7315 16.5196 33.8 16.692 33.8H46.8V39H15.6C14.2209 39 12.8982 38.4521 11.923 37.477C10.9479 36.5018 10.4 35.1791 10.4 33.8C10.4 32.89 10.634 32.032 11.024 31.304L14.56 24.934L5.2 5.2H0V0ZM15.6 41.6C16.9791 41.6 18.3018 42.1479 19.277 43.123C20.2521 44.0982 20.8 45.4209 20.8 46.8C20.8 48.1791 20.2521 49.5018 19.277 50.477C18.3018 51.4521 16.9791 52 15.6 52C14.2209 52 12.8982 51.4521 11.923 50.477C10.9479 49.5018 10.4 48.1791 10.4 46.8C10.4 43.914 12.714 41.6 15.6 41.6ZM39 23.4L46.228 10.4H13.364L19.5 23.4H39Z"/>
                  </svg>
                </div>
              </div>
              <Card.Body className="d-flex flex-column justify-content-between bg-primary">
                <Card.Title className="text-uppercase text-center text-white">
                  Desarrollo de software
                </Card.Title>
                <Card.Text className="text-white text-center">
                  
Mejora y aceleración del rendimiento de sistemas, asegurando eficiencia y rapidez operativa.
                </Card.Text>
                <div className="text-center">
                  <Button
                    variant="tertiary"
                    className="rounded-pill fw-bolder text-white text-uppercase text-center bg-primary px-5 border-radius btn rounded"
                  >
                    Ver Mas
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col
            xs={10}
            md={4}
            lg={3}
            className="d-flex justify-content-center my-5 my-md-3"
          >
            <Card
              className="bg-primary card_hover"
              style={{ width: "18rem" }}
              onClick={() => handleCLickCard(dataCardApps)}
            >
              <div className="card-image text-center" style={{display:'flex', justifyContent:'center', alignItems:"center"}}>
                <div className="icon-cards">
                  <svg xmlns="http://www.w3.org/2000/svg" className="svg-fill" width="45" height="45" viewBox="0 0 36 36">
                    <path d="M25 4H11a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M11 6h14v18H11Zm0 24v-4h14v4Z" class="clr-i-outline clr-i-outline-path-1"/>
                    <path d="M17 27h2v2h-2z" class="clr-i-outline clr-i-outline-path-2"/>
                    <path fill="none" d="M0 0h36v36H0z"/>
                  </svg>
                </div>
              </div>
              <Card.Body className="d-flex flex-column justify-content-between bg-primary">
                <Card.Title className="text-uppercase text-center text-white">
                  Desarrollo de aplicaciones
                </Card.Title>
                <Card.Text className="text-white text-center">
                Creación de apps móviles innovadoras, diseñadas para satisfacer las necesidades específicas de los usuarios.
                </Card.Text>
                <div className="text-center">
                  <Button
                    variant="tertiary"
                    className="rounded-pill fw-bolder text-white text-uppercase text-center bg-primary px-5 border-radius btn rounded"
                  >
                    Ver Mas
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-center mt-md-5">
          <Col
            xs={10}
            md={4}
            lg={3}
            className="d-flex justify-content-center my-5 my-md-3"
          >
            <Card
              className="bg-primary card_hover"
              style={{ width: "18rem" }}
              onClick={() => handleCLickCard(dataCardUXUI)}
            >
              <div className="card-image text-center" style={{display:'flex', justifyContent:'center', alignItems:"center"}}>
                <div className="icon-cards">
                  <svg width="45" height="45" viewBox="0 0 30 47" className="svg-fill" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.55334 16.9369C5.69341 16.9369 4.8419 17.1066 4.04743 17.4364C3.25296 17.7661 2.53108 18.2495 1.92302 18.8588C1.31495 19.4681 0.832612 20.1915 0.503531 20.9876C0.174449 21.7837 0.00507358 22.637 0.00507358 23.4987C0.00507358 24.3604 0.174449 25.2137 0.503531 26.0098C0.832612 26.806 1.31495 27.5293 1.92302 28.1387C2.53108 28.748 3.25296 29.2313 4.04743 29.5611C4.8419 29.8909 5.69341 30.0606 6.55334 30.0606H13.1016V23.6308C13.1006 23.5428 13.1006 23.4547 13.1016 23.3666V16.9369H6.55334ZM13.1016 13.1263H6.55334C4.8163 13.1263 3.1504 12.4348 1.92212 11.204C0.693844 9.97314 0.0038055 8.30378 0.0038055 6.56313C0.0038055 4.82248 0.693844 3.15312 1.92212 1.9223C3.1504 0.691471 4.8163 0 6.55334 0H13.1016V13.1263ZM16.9043 0V13.1263H23.4526C25.1673 13.0925 26.8004 12.3861 28.0012 11.159C29.2019 9.93184 29.8745 8.28176 29.8745 6.56313C29.8745 4.84451 29.2019 3.19443 28.0012 1.96728C26.8004 0.740135 25.1673 0.0338075 23.4526 0H16.9043ZM23.4526 16.9343C21.7337 16.9341 20.0837 17.6111 18.8586 18.8193C17.6335 20.0274 16.9316 21.6698 16.9043 23.392V23.6029C16.9253 24.896 17.3271 26.154 18.0593 27.2189C18.7915 28.2839 19.8213 29.1083 21.0196 29.5887C22.2178 30.069 23.531 30.1838 24.7941 29.9187C26.0573 29.6536 27.2141 29.0204 28.1192 28.0986C29.0244 27.1768 29.6376 26.0075 29.8817 24.7376C30.1259 23.4677 29.9901 22.1539 29.4916 20.9611C28.993 19.7682 28.1537 18.7496 27.0793 18.0332C26.0049 17.3168 24.7431 16.9345 23.4526 16.9343ZM6.55334 33.8712C5.25761 33.8707 3.99083 34.2553 2.91322 34.9763C1.83561 35.6973 0.995585 36.7223 0.499382 37.9217C0.00317814 39.1212 -0.126912 40.4412 0.125566 41.7147C0.378044 42.9882 1.00175 44.1581 1.91779 45.0764C2.83384 45.9947 4.00108 46.6202 5.27188 46.8737C6.54268 47.1272 7.85996 46.9973 9.05711 46.5006C10.2543 46.0038 11.2775 45.1624 11.9974 44.0829C12.7174 43.0033 13.1016 41.734 13.1016 40.4356V33.8712H6.55334Z"/>
                  </svg>
                </div>
              </div>
              <Card.Body className="d-flex flex-column justify-content-between bg-primary">
                <Card.Title className="text-uppercase text-center text-white">
                  Diseños UX/UI
                </Card.Title>
                <Card.Text className="text-white text-center">
                Diseño intuitivo y atractivo de interfaces, mejorando la experiencia de usuario y la interacción.
                </Card.Text>
                <div className="text-center">
                  <Button
                    variant="tertiary"
                    className="rounded-pill fw-bolder text-white text-uppercase text-center bg-primary px-5 border-radius btn rounded"
                  >
                    Ver Mas
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col
            xs={10}
            md={4}
            lg={3}
            className="d-flex justify-content-center my-5 my-md-3"
          >
            <Card
              className="bg-primary card_hover"
              style={{ width: "18rem" }}
              onClick={() => handleCLickCard(dataCardECommerce)}
            >
              <div className="card-image text-center" style={{display:'flex', justifyContent:'center', alignItems:"center"}}>
                <div className="icon-cards">
                  <svg width="45" height="45" viewBox="0 0 54 50" className="svg-fill" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.625 0.71875H46.375C48.1735 0.71875 49.8983 1.4332 51.1701 2.70493C52.4418 3.97666 53.1562 5.7015 53.1562 7.5V33.6562C53.1562 35.4548 52.4418 37.1796 51.1701 38.4513C49.8983 39.723 48.1735 40.4375 46.375 40.4375H29.9062V43.3438H34.75C35.5208 43.3438 36.26 43.6499 36.805 44.195C37.3501 44.74 37.6562 45.4792 37.6562 46.25C37.6562 47.0208 37.3501 47.76 36.805 48.305C36.26 48.8501 35.5208 49.1562 34.75 49.1562H19.25C18.4792 49.1562 17.74 48.8501 17.195 48.305C16.6499 47.76 16.3438 47.0208 16.3438 46.25C16.3438 45.4792 16.6499 44.74 17.195 44.195C17.74 43.6499 18.4792 43.3438 19.25 43.3438H24.0938V40.4375H7.625C6.73447 40.4375 5.85267 40.2621 5.02993 39.9213C4.20719 39.5805 3.45963 39.081 2.82993 38.4513C2.20023 37.8216 1.70073 37.0741 1.35994 36.2513C1.01915 35.4286 0.84375 34.5468 0.84375 33.6562V7.5C0.84375 6.60947 1.01915 5.72767 1.35994 4.90493C1.70073 4.08219 2.20023 3.33463 2.82993 2.70493C3.45963 2.07524 4.20719 1.57573 5.02993 1.23494C5.85267 0.894153 6.73447 0.71875 7.625 0.71875ZM46.375 6.53125H7.625C7.36807 6.53125 7.12167 6.63331 6.93999 6.81499C6.75831 6.99667 6.65625 7.24307 6.65625 7.5V24.9375H47.3438V7.5C47.3438 7.24307 47.2417 6.99667 47.06 6.81499C46.8783 6.63331 46.6319 6.53125 46.375 6.53125ZM7.625 34.625H46.375C46.6319 34.625 46.8783 34.5229 47.06 34.3413C47.2417 34.1596 47.3438 33.9132 47.3438 33.6562V30.75H6.65625V33.6562C6.65625 33.9132 6.75831 34.1596 6.93999 34.3413C7.12167 34.5229 7.36807 34.625 7.625 34.625Z"/>
                  </svg>
                </div>
              </div>
              <Card.Body className="d-flex flex-column justify-content-between bg-primary">
                <Card.Title className="text-uppercase text-center text-white">
                  Mantenimiento y Soporte
                </Card.Title>
                <Card.Text className="text-white text-center">
                  
Asistencia técnica continua y actualización de sistemas para garantizar su óptimo funcionamiento.
                </Card.Text>
                <div className="text-center">
                  <Button
                    variant="tertiary"
                    className="rounded-pill fw-bolder text-white text-uppercase text-center bg-primary px-5 border-radius btn rounded"
                  >
                    Ver Mas
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      {showModal && (
        <ModalServices
          show={showModal}
          data={selectedCardData}
          onHide={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Services;
