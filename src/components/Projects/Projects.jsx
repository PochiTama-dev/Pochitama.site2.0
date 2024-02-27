import { Button, Card, Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import paw from '../../assets/images/ion--paw.svg'
import projectImage from "../../assets/images/exampleProyect.webp";
import waveImage from "../../assets/images/wave-project.webp";
import ProyectSlider from "./ProyectSlider/ProyectSlider";
import ProyectSlider2 from "./ProyectSlider copy/ProyectSlider";
import "./projects.css";

function Projects() {
  return (
    <div className="project_container">
      <Container fluid className="bg-md-primary py-5">
        <Row className="justify-content-center text-center mb-5">
          <Col
            xs={0}
            md={2}
            className="d-flex flex-column justify-content-center"
          >
            <div className="bg-white h-3px"></div>
          </Col>
          <Col
            xs={12}
            md={7}
            lg={6}
            xl={4}
            className="d-flex flex-column justify-content-center"
          >
            <h2 className="text-md-white text-uppercase fw-bolder">
              Proyectos Destacados
            </h2>
          </Col>
          <Col
            xs={0}
            md={2}
            className="d-flex flex-column justify-content-center"
          >
            <div className="bg-white h-3px"></div>
          </Col>
        </Row>

        <Row className="justify-content-center text-center my-5">
          <Col
            xs={12}
            md={10}
            lg={8}
            className="d-flex flex-column justify-content-center mb-5"
          >
            <Card className="project_card card_hover">
              <Card.Body>
                <Row className="d-flex flex-column flex-md-row">
                  <Col
                    xs={{ order: 2, className: "d-flex" }}
                    md={4}
                    className="order-md-1"
                  >
                    <p className="text-primary text-uppercase">
                    Software avanzado de gestión de redes sociales diseñado para facilitar la generación de contenido atractivo, administración eficaz de campañas publicitarias, integración de chatbots inteligentes, organización con un calendario detallado y análisis exhaustivo de competidores, mejorando significativamente la presencia y estrategia digital de las marcas.
                    </p>
                  </Col>
                  <Col
                    xs={{ order: 1, className: "d-flex" }}
                    md={8}
                    className="order-md-2"
                  >
                   <ProyectSlider/>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col
            xs={12}
            md={10}
            lg={8}
            className="d-flex flex-column justify-content-center"
          >
            <Card className="project_card card_hover">
              <Card.Body>
                <Row>
                  <Col md={8}>
                  <ProyectSlider2/>
                  </Col>
                  <Col md={4}>
                    <p className="text-primary text-uppercase">
                     
Software CRM/ERP especializado para empresas de reparación de electrodomésticos, incluyendo lavarropas, lavavajillas, microondas y aires acondicionados. Ofrece una aplicación contable con API de la AFIP, control de stock por el jefe de taller y una app móvil para la gestión de técnicos en campo o taller. Facilita la interacción directa con clientes a través de WhatsApp, Facebook e Instagram, mejorando la eficiencia operativa y la satisfacción del cliente.
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-center text-center my-5">
          <Col md={6} lg={8}>
            <Link to="/portfolio">
              <Button
                variant="tertiary"
                className="rounded-pill fw-bolder text-white text-uppercase text-center bg-primary px-5 border-radius btn rounded button_projects_hover"
              >
                Ver Mas Proyectos
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
      <div className="background-projects">
        {/*<Wave />*/}
        <img
          src={waveImage}
          alt="ola"
          style={{ width: "100%", height: "20vh" }}
        />
        <div className="paw-icon">
          <img src={paw} alt='aaa' className="paw"/>
        </div>
      </div>
    </div>
  );
}

export default Projects;
