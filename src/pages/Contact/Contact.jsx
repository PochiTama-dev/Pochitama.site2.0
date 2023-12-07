import { Button, Col, Container, Row, Form } from "react-bootstrap";
import { RiMailSendLine } from "react-icons/ri";
import "./contact.css";
import "../../Themes/Base/_variables.css";

const Contact = () => {
  return (
    <Container fluid className="bg-primary p-5">
      <Row className="ps-5 ms-5" >
        <Col xs={12}>
          <h2 className="text-bold text-white text-uppercase">¡Vamos a charlar sobre tu proyecto!</h2>
        </Col>
        <Col xs={10} md={9} lg={5}>
          <h3 className="contactSubtitle">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, aut rem. Eveniet laborum quae inventore.</h3>
        </Col>
      </Row>
      <Row className="ps-5 ms-5" >
        <Col xs={12} className="text-white mb-3">
          <span>Estas buscando:</span>
        </Col>
        <Col xs={12} md={8} lg={5} className="mb-4">
        <Button variant="tertiary" className="text-white px-4 me-1 my-1" size="lg">SEO</Button>{' '}
        <Button variant="tertiary" className="text-white px-4 mx-1 my-1" size="lg">Web design & dev</Button>{' '}
        <Button variant="tertiary" className="text-white px-4 mx-1 my-1" size="lg">App  design & dev</Button>{' '}
        <Button variant="tertiary" className="text-white px-4 me-1 my-1" size="lg">Branding</Button>{' '}
        <Button variant="tertiary" className="text-white px-4 mx-1 my-1" size="lg">Design Context</Button>{' '}
        </Col>
      </Row>

      <Row className="ps-5 ms-5" >
        <Col xs={12} md={10} lg={4}>
          <Form >
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label className="text-white">¿Cual es tu nombre?</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-white">Tu E-mail</Form.Label>
              <Form.Control type="email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicProject">
              <Form.Label className="text-white">Contanos sobre tu proyecto</Form.Label>
              <Form.Control type="textarea" />
            </Form.Group>
            <div className="text-end mt-4">
              <Button variant="tertiary" className="text-white text-uppercase" type="submit">
                <RiMailSendLine className="me-2 mb-1" size={25} />
                Enviar formulario
              </Button>
            </div>
          </Form>
        </Col>
      </Row>

    </Container>
  )
}

export default Contact