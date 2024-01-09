import { Button, Card, Container, Col, Row } from "react-bootstrap";
import "./projects.css";
import projectImage from "../../assets/proyect-example.png";

function Projects() {
  return (
    <div className="project_container">
      <Container fluid className="bg-primary py-5">
        <Row className="justify-content-center text-center mb-5">
          <Col
            xs={3}
            md={2}
            className="d-flex flex-column justify-content-center"
          >
            <div className="bg-white h-3px"></div>
          </Col>
          <Col
            xs={6}
            md={7}
            lg={6}
            xl={4}
            className="d-flex flex-column justify-content-center"
          >
            <h2 className="text-white text-uppercase fw-bolder">
              Proyectos Destacados
            </h2>
          </Col>
          <Col
            xs={3}
            md={2}
            className="d-flex flex-column justify-content-center"
          >
            <div className="bg-white h-3px"></div>
          </Col>
        </Row>

        <Row className="justify-content-center text-center my-5">
          <Col
            xs={10}
            md={8}
            className="d-flex flex-column justify-content-center mb-5"
          >
            <Card className="project_card card_hover">
              <Card.Body>
                <Row>
                  <Col md={4}>
                    <p className="text-primary text-uppercase">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut et massa mi. Aliquam in hendrerit urna. Pellentesque
                      sit amet sapien fringilla, mattis ligula consectetur,
                      ultrices mauris.
                    </p>
                  </Col>
                  <Col md={8}>
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
            xs={9}
            md={8}
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

        <Row className="justify-content-center text-center my-5">
          <Col md={4}>
            <Button
              variant="tertiary"
              className="rounded-pill fw-bolder text-white text-uppercase text-center bg-primary px-5 border-radius btn rounded button_projects_hover"
            >
              Ver Mas Proyectos
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
