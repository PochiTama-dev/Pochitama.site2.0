import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { RiWindowFill } from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";
import { CiMobile4 } from "react-icons/ci";
import { CgFigma } from "react-icons/cg";
import { PiDesktopBold } from "react-icons/pi";

const Services = () => {
  return (
    <Container fluid className="bg-white py-5">
      <Row className="justify-content-center text-center">
        <Col xs={3} md={2} className="d-flex flex-column justify-content-center" >
          <div className="bg-primary h-3px"></div>
        </Col>
        <Col xs={6} md={7} lg={6} xl={4} className="d-flex flex-column justify-content-center" >
          <h2 className="text-primary text-uppercase fw-bold">
            Servicios que ofrecemos
          </h2>
        </Col>
        <Col xs={3} md={2} className="d-flex flex-column justify-content-center" >
          <div className="bg-primary h-3px"></div>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col xs={10} md={4} lg={3} className="d-flex justify-content-center my-3">
          <Card style={{ width: '18rem' }}>
            <div className="card-image text-center">
              <RiWindowFill size={50} />
            </div>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={10} md={4} lg={3} className="d-flex justify-content-center my-3">
          <Card style={{ width: '18rem' }}>
            <div className="card-image text-center">
              <FiShoppingCart size={50} />
            </div>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={10} md={4} lg={3} className="d-flex justify-content-center my-3">
          <Card style={{ width: '18rem' }}>
            <div className="card-image text-center">
              <CiMobile4 size={50} />
            </div>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      <Row className="justify-content-center">
        <Col xs={10} md={4} lg={3} className="d-flex justify-content-center my-3">
          <Card style={{ width: '18rem' }}>
            <div className="card-image text-center">
              <CgFigma size={50} />
            </div>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={10} md={4} lg={3} className="d-flex justify-content-center my-3">
          <Card style={{ width: '18rem' }}>
            <div className="card-image text-center">
              <PiDesktopBold size={50} />
            </div>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
