import { useRef, useState, useEffect } from "react";
import { useForm } from "./../../hooks/useForm";
import { Alert, Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { RiMailSendLine } from "react-icons/ri";
import "./contact.css";
import "../../Themes/Base/_variables.css";

const initialForm = {
  user_name: "",
  user_email: "",
  message: "",
};

const validationsForm = (form, fieldName = '', value = '') => {
  const errors = {};
  const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

  const validateField = (name, val) => {
    if (!val || !val.trim()) {
      errors[name] = `El campo ${name} es requerido`;
    } else if (name === "user_name" && !regexName.test(val)) {
      errors[name] = `El campo ${name} solo puede contener letras y espacios`;
    } else if (name === "user_email" && !regexEmail.test(val)) {
      errors[name] = `Debes ingresar un E-mail válido`;
    }
  };

  if (!form || fieldName === '') {
    validateField("user_name", form.user_name);
    validateField("user_email", form.user_email);
    validateField("message", form.message);
  } else {
    validateField(fieldName, value);
  }

  return errors;
};

const Contact = () => {
  const {
    form,
    buttonSelections,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  const formRef = useRef();

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    if (response) {
      setShowSuccessMessage(true);
      
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    }
  }, [response]);

  return (
    <Container fluid className="bg-primary p-5">
      <Row className="ps-md-4 ps-md-4 ps-lg-5 ms-lg-5">
        <Col xs={12}>
          <h2 className="text-bold text-white text-uppercase">
            ¡Vamos a charlar sobre tu proyecto!
          </h2>
        </Col>
        <Col xs={10} md={9} lg={5}>
          <h3 className="contactSubtitle">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perferendis, aut rem. Eveniet laborum quae inventore.
          </h3>
        </Col>
      </Row>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Row className="ps-md-4 ps-md-4 ps-lg-5 ms-lg-5">
          <Col xs={12} className="text-white mb-3">
            <span>Estas buscando:</span>
          </Col>
          <Col xs={12} md={8} lg={5} className="mb-4">
            <input
              type="hidden"
              name="seo"
              value={buttonSelections['seo'] ? 'SEO' : ''}
            />
            <Button
              variant={buttonSelections['seo'] ? 'quaternary' : 'tertiary'}
              className={`text-white px-md-4 me-md-1 my-1 ${buttonSelections['seo'] ? 'selected btn-transition' : 'btn-transition'}`}
              size="lg"
              value="seo"
              onClick={(e) => handleChange(e, 'seo')}
            >
              SEO
            </Button>{" "}
            <input
              type="hidden"
              name="web_design"
              value={buttonSelections['web_design'] ? 'Web design & dev' : ''}
            />
            <Button
              variant={buttonSelections['web_design'] ? 'quaternary' : 'tertiary'}
              className={`text-white px-md-4 mx-md-1 my-1 ${buttonSelections['web_design'] ? 'selected btn-transition' : 'btn-transition'}`}
              size="lg"
              value="web_design"
              onClick={(e) => handleChange(e, 'web_design')}
            >
              Web design & dev
            </Button>{" "}
            <input
              type="hidden"
              name="app_design"
              value={buttonSelections['app_design'] ? 'App design & dev' : ''}
            />
            <Button
              variant={buttonSelections['app_design'] ? 'quaternary' : 'tertiary'}
              className={`text-white px-md-4 mx-md-1 my-1 ${buttonSelections['app_design'] ? 'selected btn-transition' : 'btn-transition'}`}
              size="lg"
              value="app_design"
              onClick={(e) => handleChange(e, 'app_design')}
            >
              App design & dev
            </Button>{" "}
            <input
              type="hidden"
              name="branding"
              value={buttonSelections['branding'] ? 'Branding' : ''}
            />
            <Button
              variant={buttonSelections['branding'] ? 'quaternary' : 'tertiary'}
              className={`text-white px-md-4 me-md-1 my-1 ${buttonSelections['branding'] ? 'selected btn-transition' : 'btn-transition'}`}
              size="lg"
              value="branding"
              onClick={(e) => handleChange(e, 'branding')}
            >
              Branding
            </Button>{" "}
            <input
              type="hidden"
              name="design_context"
              value={buttonSelections['design_context'] ? 'Design Context' : ''}
            />
            <Button
              variant={buttonSelections['design_context'] ? 'quaternary' : 'tertiary'}
              className={`text-white px-md-4 mx-md-1 my-1 ${buttonSelections['design_context'] ? 'selected btn-transition' : 'btn-transition'}`}
              size="lg"
              value="design_context"
              onClick={(e) => handleChange(e, 'design_context')}
            >
              Design Context
            </Button>{" "}
          </Col>
        </Row>

        <Row className="ps-md-4 ps-md-4 ps-lg-5 ms-lg-5">
          <Col xs={12} md={10} lg={4}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label className="text-white">
                ¿Cual es tu nombre?
              </Form.Label>
              <Form.Control
                type="text"
                name="user_name"
                isInvalid={!!errors.user_name}
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.user_name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.user_name}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-white">Tu E-mail</Form.Label>
              <Form.Control
                type="email"
                name="user_email"
                isInvalid={!!errors.user_email}
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.user_email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.user_email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicProject">
              <Form.Label className="text-white">
                Contanos sobre tu proyecto
              </Form.Label>
              <Form.Control
                type="textarea"
                name="message"
                isInvalid={!!errors.message}
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.message}
              />
              <Form.Control.Feedback type="invalid">
                {errors.message}
              </Form.Control.Feedback>
            </Form.Group>
            <div className="text-end mt-4">
              <Button
                variant="tertiary"
                className="text-white text-uppercase"
                type="submit"
              >
                <RiMailSendLine className="me-2 mb-1" size={25} />
                Enviar formulario
              </Button>
            </div>
          </Col>
        </Row>
      </Form>

      {/* Mostrar el Spinner durante el envío */}
      {loading && <Spinner animation="border" variant="primary" role="status" className="mt-3">
          <span className="visually-hidden">Enviando...</span>
        </Spinner>}

      {/* Mensaje de éxito */}
      {showSuccessMessage && (
        <Alert variant="success" className="mt-3">
          ¡El formulario se envió con éxito!
        </Alert>
      )}
    </Container>
  );
};

export default Contact;
