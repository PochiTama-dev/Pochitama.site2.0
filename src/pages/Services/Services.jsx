import { useEffect, useRef, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { RiWindowFill } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiMobile4 } from "react-icons/ci";
import { CgFigma } from "react-icons/cg";
import { PiDesktopBold } from "react-icons/pi";
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
  // ... (resto del código)
  const { state } = useLocation();
  const fromOurServices = state?.fromOurServices;

  useEffect(() => {
    // Verifica si la redirección fue iniciada desde OurServices
    if (servicesRef.current && fromOurServices) {
      // Realiza el scroll a la posición de la referencia
      servicesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [fromOurServices]);

  const handleShowModal = () => {
    console.log("evento");
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
              <div className="card-image text-center">
                <RiWindowFill className="icon-cards" size={65} />
              </div>
              <Card.Body className="d-flex flex-column justify-content-between bg-primary">
                <Card.Title className="text-uppercase text-center text-white">
                  Desarrollo de Aplicaciones Web a Medida
                </Card.Title>
                <Card.Text className="text-white text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                  massa mi. Aliquam in hendrerit urna. Maecenas vitae mattis
                  tellus.
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
              <div className="card-image text-center">
                <AiOutlineShoppingCart className="icon-cards" size={65} />
              </div>
              <Card.Body className="d-flex flex-column justify-content-between bg-primary">
                <Card.Title className="text-uppercase text-center text-white">
                  Optimización de Rendimiento
                </Card.Title>
                <Card.Text className="text-white text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                  massa mi. Aliquam in hendrerit urna. Maecenas vitae mattis
                  tellus.
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
              <div className="card-image text-center">
                <CiMobile4 className="icon-cards" size={65} />
              </div>
              <Card.Body className="d-flex flex-column justify-content-between bg-primary">
                <Card.Title className="text-uppercase text-center text-white">
                  Desarrollo de aplicaciones
                </Card.Title>
                <Card.Text className="text-white text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                  massa mi. Aliquam in hendrerit urna. Maecenas vitae mattis
                  tellus.
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
              <div className="card-image text-center">
                <CgFigma className="icon-cards" size={65} />
              </div>
              <Card.Body className="d-flex flex-column justify-content-between bg-primary">
                <Card.Title className="text-uppercase text-center text-white">
                  Diseños UX/UI
                </Card.Title>
                <Card.Text className="text-white text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                  massa mi. Aliquam in hendrerit urna. Maecenas vitae mattis
                  tellus.
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
              <div className="card-image text-center">
                <PiDesktopBold className="icon-cards" size={65} />
              </div>
              <Card.Body className="d-flex flex-column justify-content-between bg-primary">
                <Card.Title className="text-uppercase text-center text-white">
                  Mantenimiento y Soporte
                </Card.Title>
                <Card.Text className="text-white text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                  massa mi. Aliquam in hendrerit urna. Maecenas vitae mattis
                  tellus.
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
