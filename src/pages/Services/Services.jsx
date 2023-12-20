import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { RiWindowFill } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiMobile4 } from "react-icons/ci";
import { CgFigma } from "react-icons/cg";
import { PiDesktopBold } from "react-icons/pi";
import "./services.css";
import Cta from "../../components/cta/Cta";

const Services = () => {
  const titleCta = "Descubre más sobre nuestros servicios";
  const subtitleCta =
    "Crear aplicaciones que marquen la diferencia. Diseño elegante, funcionalidad poderosa y compromiso absoluto con la excelencia.";
  return (
    <div>
      <Cta title={titleCta} subtitle={subtitleCta} />
      <Container fluid className="bg-white py-5">
      <Row className="justify-content-center text-center mb-5">
        <Col xs={3} md={2} className="d-flex flex-column justify-content-center" >
          <div className="bg-primary h-3px"></div>
        </Col>
        <Col xs={6} md={7} lg={6} xl={4} className="d-flex flex-column justify-content-center" >
          <h2 className="text-primary text-uppercase fw-bolder">
            Servicios que ofrecemos
          </h2>
        </Col>
        <Col xs={3} md={2} className="d-flex flex-column justify-content-center" >
          <div className="bg-primary h-3px"></div>
        </Col>
      </Row>

      <Row className="justify-content-center pt-md-5 pb-md-5">
        <Col xs={10} md={4} lg={3} className="d-flex justify-content-center my-5 my-md-3">
          <Card className="bg-primary card_hover" style={{ width: '18rem' }}>
            <div className="card-image text-center">
              <RiWindowFill className="icon-cards" size={65} />
            </div>
            <Card.Body className="d-flex flex-column justify-content-between bg-primary">
              <Card.Title className="text-uppercase text-center text-white">Desarrollo de Aplicaciones Web a Medida</Card.Title>
              <Card.Text className="text-white text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ut et massa mi. Aliquam in hendrerit urna.
                Maecenas vitae mattis tellus.
              </Card.Text>
              <div className="text-center">
                <Button variant="tertiary" className="rounded-pill fw-bolder text-white text-uppercase text-center bg-primary px-5 border-radius btn rounded">Ver Mas</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={10} md={4} lg={3} className="d-flex justify-content-center my-5 my-md-3">
          <Card className="bg-primary card_hover" style={{ width: '18rem' }}>
            <div className="card-image text-center">
              <AiOutlineShoppingCart className="icon-cards" size={65} />
            </div>
            <Card.Body className="d-flex flex-column justify-content-between bg-primary">
              <Card.Title className="text-uppercase text-center text-white">Optimización de Rendimiento</Card.Title>
              <Card.Text className="text-white text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ut et massa mi. Aliquam in hendrerit urna.
                Maecenas vitae mattis tellus.
              </Card.Text>
              <div className="text-center">
                <Button variant="tertiary" className="rounded-pill fw-bolder text-white text-uppercase text-center bg-primary px-5 border-radius btn rounded">Ver Mas</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={10} md={4} lg={3} className="d-flex justify-content-center my-5 my-md-3">
          <Card className="bg-primary card_hover" style={{ width: '18rem' }}>
            <div className="card-image text-center">
              <CiMobile4 className="icon-cards" size={65} />
            </div>
            <Card.Body className="d-flex flex-column justify-content-between bg-primary">
              <Card.Title className="text-uppercase text-center text-white">Desarrollo de aplicaciones</Card.Title>
              <Card.Text className="text-white text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ut et massa mi. Aliquam in hendrerit urna.
                Maecenas vitae mattis tellus.
              </Card.Text>
              <div className="text-center">
                <Button variant="tertiary" className="rounded-pill fw-bolder text-white text-uppercase text-center bg-primary px-5 border-radius btn rounded">Ver Mas</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      <Row className="justify-content-center mt-md-5">
        <Col xs={10} md={4} lg={3} className="d-flex justify-content-center my-5 my-md-3">
          <Card className="bg-primary card_hover" style={{ width: '18rem' }}>
            <div className="card-image text-center">
              <CgFigma className="icon-cards" size={65} />
            </div>
            <Card.Body className="d-flex flex-column justify-content-between bg-primary">
              <Card.Title className="text-uppercase text-center text-white">Diseños UX/UI</Card.Title>
              <Card.Text className="text-white text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ut et massa mi. Aliquam in hendrerit urna.
                Maecenas vitae mattis tellus.
              </Card.Text>
              <div className="text-center">
                <Button variant="tertiary" className="rounded-pill fw-bolder text-white text-uppercase text-center bg-primary px-5 border-radius btn rounded">Ver Mas</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={10} md={4} lg={3} className="d-flex justify-content-center my-5 my-md-3">
          <Card className="bg-primary card_hover" style={{ width: '18rem' }}>
            <div className="card-image text-center">
              <PiDesktopBold className="icon-cards" size={65} />
            </div>
            <Card.Body className="d-flex flex-column justify-content-between bg-primary">
              <Card.Title className="text-uppercase text-center text-white">Mantenimiento y Soporte</Card.Title>
              <Card.Text className="text-white text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ut et massa mi. Aliquam in hendrerit urna.
                Maecenas vitae mattis tellus.
              </Card.Text>
              <div className="text-center">
                <Button variant="tertiary" className="rounded-pill fw-bolder text-white text-uppercase text-center bg-primary px-5 border-radius btn rounded">Ver Mas</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Services;
