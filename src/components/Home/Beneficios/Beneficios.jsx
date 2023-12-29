import { Col, Container, Image, Row } from "react-bootstrap";
import ScrollReveal from "scrollreveal";

import CardBeneficio from "./CardBeneficio";

import gatito from "../../../assets/images/gatito.png";
import { useEffect, useRef, useState } from "react";

const listaBeneficios = [
  {
    title: "pasión por tu visión",
    description:
      "En Pochitama.dev, no solo creamos aplicaciones web, sino que también nos enamoramos de tus ideas. Nos emociona cada proyecto como si fuera nuestro, y trabajamos incansablemente para convertir tus sueños en una realidad digital impresionante.",
    image: "https://avatars.githubusercontent.com/u/111319458?v=4",
    alignEnd: true,
  },
  {
    title: "Diseño centrado en el usuario",
    description:
      "Sabemos que cada usuario es único. Es por eso que nuestros diseñadores se sumergen en la mente de tus usuarios para crear una experiencia que los haga sonreír. Desde una interfaz intuitiva hasta un diseño atractivo, nos aseguramos de que cada clic sea una delicia.",
    image: "https://avatars.githubusercontent.com/u/111319458?v=4",
  },
  {
    title: "CÓDIGO QUE IMPULSA RESULTADOS",
    description:
      "No solo creamos aplicaciones que se ven bien, sino que también funcionan excepcionalmente bien. Nuestro equipo de desarrolladores se enorgullece de escribir un código limpio y eficiente que no solo cumple con tus requisitos, sino que también impulsa resultados tangibles para tu negocio.",
    image: "https://avatars.githubusercontent.com/u/111319458?v=4",
    alignEnd: true,
  },
  {
    title: "colaboracion transparente",
    description:
      "Consideramos a nuestros clientes como socios en cada paso del camino. Mantenemos líneas de comunicación abiertas y transparentes, asegurándonos de que estés al tanto de cada avance y decisión tomada en el proceso de desarrollo. Tu opinión es esencial en la creación de algo realmente extraordinario.",
    image: "https://avatars.githubusercontent.com/u/111319458?v=4",
  },
  {
    title: "Entrega a Tiempo, Siempre",
    description:
      "Comprendemos lo crucial que es el tiempo en el mundo digital. Nos comprometemos a cumplir plazos sin comprometer la calidad. Con Pochitama.dev, no solo obtendrás una aplicación excepcional, sino que también la tendrás justo cuando la necesites.",
    image: "https://avatars.githubusercontent.com/u/111319458?v=4",
    alignEnd: true,
  },
  {
    title: "Soporte Continuo",
    description:
      "Nuestro compromiso no termina cuando tu aplicación está lista. Ofrecemos soporte continuo para resolver cualquier problema, realizar actualizaciones y asegurarnos de que tu aplicación siga funcionando sin problemas en un entorno en constante cambio.",
    image: "https://avatars.githubusercontent.com/u/111319458?v=4",
  },
  {
    title: "Historias de Éxito Compartidas",
    description:
      "Nada habla mejor de nuestro trabajo que los éxitos de nuestros clientes. Hemos ayudado a diversas empresas a lograr sus objetivos digitales y estamos ansiosos por compartir estas historias contigo. ¡Tu éxito es nuestro éxito!",
    image: "https://avatars.githubusercontent.com/u/111319458?v=4",
    alignEnd: true,
  },
];

const Beneficios = () => {
  const [scrollY, setScrollY] = useState(0);
  const imageCatRef = useRef(null);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    listaBeneficios.forEach((beneficio, index) => {
      ScrollReveal().reveal(`#beneficio${index}`, {
        delay: 500,
        duration: 2000,
        origin: `${beneficio.alignEnd ? "right" : "left"}`,
        distance: "50%",
        opacity: 0,
      });
    });

    /* ScrollReveal().reveal("#imageCat", {
      delay: 200,
      duration: 5000,
      origin: "bottom",
      distance: "200px",
      opacity: 1,
    }); */

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  return (
    <>
      <Container fluid id="containerHomeBeneficios" className="bg-primary px-0 pt-7" style={{ overflow: 'hidden', position: 'relative' }}>
        <Row className="align-items-center mx-0">
          <Col></Col>
          <Col className="bg-white h-3px"></Col>
          <Col
            xxl={6}
            xs={5}
            className="text-center text-wrap text-uppercase fs-1 fw-bold text-white mx-0"
          >
            ¿por qué elegirnos?
          </Col>
          <Col className="bg-white h-3px"></Col>
          <Col></Col>
        </Row>
        <Row className="d-flex justify-content-center align-items-center mt-5 mx-0 mb-10">
          <Col
            xs={5}
            xxl={9}
            className="fs-5 text-white text-center text-wrap text-uppercase"
          >
            Descripción de la consultoría destacando los beneficios y la
            propuesta de valor única de la consultoría en el campo de desarrollo
            de aplicaciones
          </Col>
        </Row>
        {listaBeneficios.map((beneficio, index) => (
          <CardBeneficio
            key={index}
            id={`beneficio${index}`}
            title={beneficio.title}
            description={beneficio.description}
            image={beneficio.image}
            alignEnd={beneficio.alignEnd}
          />
        ))}
        <Container
          id="imageCat"
          ref={imageCatRef}
          fluid
          className="px-0 bg-primary bottom--20 px-5 d-flex justify-content-center"
        >
          <Image fluid src={gatito} alt="gatito" style= {{ width: '60%', position: 'absolute', top: `${scrollY - 300}px`, zIndex: '1' }} />
        </Container>
      </Container>
    </>
  );
};

export default Beneficios;
