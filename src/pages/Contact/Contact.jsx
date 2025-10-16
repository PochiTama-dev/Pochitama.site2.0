import { useEffect, useRef, useState } from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  Image,
  Form,
  Row,
  Spinner,
} from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import riMailSendLine from "../../assets/images/ri--mail-send-line.svg"
import { useForm } from "./../../hooks/useForm";
import logo from "../../assets/images/LogoPochi.webp";
import gatoAnimado from "../../assets/gif/pochitama-gif.webm";
import "./contact.css";

const initialForm = {
  nombre: "",
  email: "",
  mensaje: "",
};

const validationsForm = (emptyForm, fieldName = "", value = "") => {
  const errors = {};
  const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

  const validateField = (name, value) => {
    if (!value || !value.trim()) {
      errors[name] = `El campo ${name} es requerido`;
    } else if (name === "nombre" && !regexName.test(value)) {
      errors[name] = `El campo ${name} solo puede contener letras y espacios`;
    } else if (name === "email" && !regexEmail.test(value)) {
      errors[name] = `Debes ingresar un E-mail válido`;
    }
  };

  if (emptyForm) {
    validateField("nombre", emptyForm.nombre);
    validateField("email", emptyForm.email);
    validateField("mensaje", emptyForm.mensaje);
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
    recaptcha,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  const [showSuccessmensaje, setShowSuccessmensaje] = useState(false);
  const recaptchaRef = useRef(null);

  useEffect(() => {
    if (response) {
      setShowSuccessmensaje(true);

      setTimeout(() => {
        setShowSuccessmensaje(false);
      }, 3000);
    }
  }, [response]);

  const handleRecaptchaLoad = (recaptchaInstance) => {
    if (recaptchaInstance) {
      recaptchaInstance.state = "success";
      recaptcha(recaptchaInstance.state);
    }
  };

  useEffect(() => {
    handleRecaptchaLoad(recaptchaRef.current);

    // Animaciones al hacer scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>

        <Container className="contact-hero-container">
          <Row className="align-items-center">
            <Col xs={12} lg={6} className="contact-hero-content">
              <div className="contact-badge animate-on-scroll">
                <div className="badge-pulse"></div>
                <span className="badge-text">💬 Hablemos de tu proyecto</span>
              </div>

              <h1 className="contact-title animate-on-scroll">
                ¡Transformemos tu <span className="gradient-text">idea</span> en realidad!
              </h1>

              <p className="contact-subtitle animate-on-scroll">
                Envíanos tu propuesta a través del formulario y te contactaremos pronto. 
                Juntos podemos crear algo extraordinario.
              </p>

              <div className="contact-info animate-on-scroll">
                <div className="info-card">
                  <div className="info-icon">⏱️</div>
                  <div className="info-content">
                    <span className="info-label">Tiempo de respuesta</span>
                    <span className="info-value">24-48 horas</span>
                  </div>
                </div>
              </div>
            </Col>

            <Col xs={12} lg={6} className="contact-hero-image animate-on-scroll">
              <div className="logo-wrapper">
                <div className="logo-circle"></div>
                <video
                  className="logo-gif"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={gatoAnimado} type="video/webm" />
                </video>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Form Section */}
      <section className="contact-form-section">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} lg={10} xl={9}>
              <div className="form-wrapper animate-on-scroll">
                <Form onSubmit={handleSubmit}>
                  {/* Email de destino oculto */}
                  <input type="hidden" name="_gotcha" style={{ display: 'none' }} />
                  <input type="hidden" name="_to" value="Enriquegonzalodamian@outlook.com" />
                  
                  {/* Servicios de interés */}
                  <div className="form-group-custom">
                    <label className="form-label-custom">
                      ¿Qué servicios te interesan?
                    </label>
                    <div className="services-buttons">
                      <input
                        type="hidden"
                        name="seo"
                        value={buttonSelections["seo"] ? "SEO" : ""}
                      />
                      <Button
                        variant={buttonSelections["seo"] ? "selected" : "outline"}
                        className={`service-btn ${
                          buttonSelections["seo"] ? "active" : ""
                        }`}
                        onClick={(e) => handleChange(e, "seo")}
                      >
                        🎯 SEO
                      </Button>

                      <input
                        type="hidden"
                        name="web_design"
                        value={buttonSelections["web_design"] ? "Web design & dev" : ""}
                      />
                      <Button
                        variant={buttonSelections["web_design"] ? "selected" : "outline"}
                        className={`service-btn ${
                          buttonSelections["web_design"] ? "active" : ""
                        }`}
                        onClick={(e) => handleChange(e, "web_design")}
                      >
                        💻 Web Design & Dev
                      </Button>

                      <input
                        type="hidden"
                        name="app_design"
                        value={buttonSelections["app_design"] ? "App design & dev" : ""}
                      />
                      <Button
                        variant={buttonSelections["app_design"] ? "selected" : "outline"}
                        className={`service-btn ${
                          buttonSelections["app_design"] ? "active" : ""
                        }`}
                        onClick={(e) => handleChange(e, "app_design")}
                      >
                        📱 App Design & Dev
                      </Button>

                      <input
                        type="hidden"
                        name="branding"
                        value={buttonSelections["branding"] ? "Branding" : ""}
                      />
                      <Button
                        variant={buttonSelections["branding"] ? "selected" : "outline"}
                        className={`service-btn ${
                          buttonSelections["branding"] ? "active" : ""
                        }`}
                        onClick={(e) => handleChange(e, "branding")}
                      >
                        🎨 Branding
                      </Button>

                      <input
                        type="hidden"
                        name="design_context"
                        value={buttonSelections["design_context"] ? "Design Context" : ""}
                      />
                      <Button
                        variant={buttonSelections["design_context"] ? "selected" : "outline"}
                        className={`service-btn ${
                          buttonSelections["design_context"] ? "active" : ""
                        }`}
                        onClick={(e) => handleChange(e, "design_context")}
                      >
                        🖌️ Design Context
                      </Button>
                    </div>
                  </div>

                  {/* Campos del formulario */}
                  <Row>
                    <Col xs={12} md={6}>
                      <Form.Group className="form-group-custom" controlId="formBasicName">
                        <Form.Label className="form-label-custom">
                          ¿Cuál es tu nombre? *
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="nombre"
                          className="form-control-custom"
                          placeholder="Juan Pérez"
                          isInvalid={!!errors.nombre}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={form.nombre}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.nombre}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    <Col xs={12} md={6}>
                      <Form.Group className="form-group-custom" controlId="formBasicEmail">
                        <Form.Label className="form-label-custom">
                          Tu Email *
                        </Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          className="form-control-custom"
                          placeholder="juan@ejemplo.com"
                          isInvalid={!!errors.email}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={form.email}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.email}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    <Col xs={12}>
                      <Form.Group className="form-group-custom" controlId="formBasicProject">
                        <Form.Label className="form-label-custom">
                          Cuéntanos sobre tu proyecto *
                        </Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={5}
                          name="mensaje"
                          className="form-control-custom"
                          placeholder="Describe tu proyecto, objetivos y cualquier detalle relevante..."
                          isInvalid={!!errors.mensaje}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={form.mensaje}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.mensaje}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <ReCAPTCHA
                    sitekey="6LcMY7kpAAAAAHPTkIc6gCw2VtqRcovq3VSI72x-"
                    ref={recaptchaRef}
                    size="invisible"
                  />

                  <div className="recaptcha-disclaimer">
                    Este sitio está protegido por reCAPTCHA y se aplican la{" "}
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                      Política de privacidad
                    </a>{" "}
                    y los{" "}
                    <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">
                      Términos de servicio
                    </a>{" "}
                    de Google.
                  </div>

                  <div className="form-actions">
                    <Button
                      variant="primary"
                      className="submit-btn"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                            className="me-2"
                          />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <img src={riMailSendLine} alt="send" className="btn-icon" />
                          Enviar Formulario
                        </>
                      )}
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Modal de éxito */}
      {showSuccessmensaje && (
        <div className="success-modal-overlay" onClick={() => setShowSuccessmensaje(false)}>
          <div className="success-modal" onClick={(e) => e.stopPropagation()}>
            <div className="success-modal-icon">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                <circle cx="40" cy="40" r="40" fill="#10B981" fillOpacity="0.1"/>
                <circle cx="40" cy="40" r="32" fill="#10B981" fillOpacity="0.2"/>
                <path d="M25 40L35 50L55 30" stroke="#10B981" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="success-modal-title">¡Mensaje Enviado!</h3>
            <p className="success-modal-message">
              Tu mensaje ha sido enviado con éxito. Te responderemos pronto a tu email.
            </p>
            <button 
              className="success-modal-button" 
              onClick={() => setShowSuccessmensaje(false)}
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
