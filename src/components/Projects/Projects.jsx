import { useState } from "react";
import { Button, Card, Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import paw from '../../assets/images/ion--paw.svg'
import projectImage from "../../assets/images/exampleProyect.webp";
import waveImage from "../../assets/images/wave-project.webp";
import "./projects.css";
import ModalPortfolio from "../Portfolio/ModalPortfolio"; 
import '../../pages/Portfolio/portfolio.css'

function Projects() {
  const [showModal, setShowModal] = useState(false)
  
  const handleShowModal = () =>{
    setShowModal(!showModal)
}
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
            <Card className="project_card card_hover"
              onClick={handleShowModal}
            >
              <Card.Body>
                <Row className="d-flex flex-column flex-md-row">
                  <Col
                    xs={{ order: 2, className: "d-flex" }}
                    md={4}
                    className="order-md-1"
                  >
                    <p className="text-primary text-uppercase">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut et massa mi. Aliquam in hendrerit urna. Pellentesque
                      sit amet sapien fringilla, mattis ligula consectetur,
                      ultrices mauris.
                    </p>
                  </Col>
                  <Col
                    xs={{ order: 1, className: "d-flex" }}
                    md={8}
                    className="order-md-2"
                  >
                    <img
                      src={projectImage}
                      alt="Proyecto 1"
                      className="img-fluid text-center"
                      style={{ height: "300px", width: "96%" }}
                    />
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
                    <img
                      src={projectImage}
                      alt="Proyecto 2"
                      className="img-fluid text-center"
                      style={{ height: "300px", width: "96%" }}
                    />
                  </Col>
                  <Col md={4}>
                    <p className="text-primary text-uppercase">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut et massa mi. Aliquam in hendrerit urna. Pellentesque
                      sit amet sapien fringilla, mattis ligula consectetur,
                      ultrices mauris.
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {showModal &&
          <ModalPortfolio
            show={showModal}
            setShow={setShowModal} 
          />
      }

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
