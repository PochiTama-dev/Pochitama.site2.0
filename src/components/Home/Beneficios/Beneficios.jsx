import { Col, Container, Image, Row } from "react-bootstrap";
import ScrollReveal from "scrollreveal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CardBeneficio from "./CardBeneficio";
import SliderBeneficio from "./SliderBeneficio";

import gatito from "../../../assets/images/gatito.png";
import "./beneficios.css";
import { useEffect, useState } from "react";

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
  const [outComponent, setOutComponent] = useState(true);
  const [inComponent, setInComponent] = useState(false);
  const [bottom, setBottom] = useState(false);

  useEffect(() => {
    listaBeneficios.forEach((beneficio, index) => {
      ScrollReveal().reveal(`#beneficio${index}`, {
        delay: 250,
        duration: 1500,
        origin: `${beneficio.alignEnd ? "right" : "left"}`,
        distance: "50%",
        opacity: 0,
      });
    });

    var containerHomeBeneficios = document.getElementById(
      "containerHomeBeneficios"
    );
    var imageCat = document.getElementById("imageCat");

    function adjustImageCatPosition() {
      /* Se ejecuta solo en tamaños lg */
      if (window.innerWidth >= 992) {
        var containerHomeBeneficiosRect =
          containerHomeBeneficios.getBoundingClientRect();

        if (
          !bottom &&
          containerHomeBeneficiosRect.bottom <= window.innerHeight
        ) {
          imageCat.style.position = "relative";
          imageCat.style.bottom = 0;
          setInComponent(false);
          setOutComponent(true);
          setBottom(true);
        } else if (
          !inComponent &&
          containerHomeBeneficiosRect.top + 150 <= window.innerHeight
        ) {
          imageCat.style.position = "fixed";
          imageCat.style.bottom = "-200px";

          // Forzar el reflow antes de aplicar la animación
          imageCat.offsetHeight;

          imageCat.style.transition = "bottom .5s, opacity 1s";
          imageCat.style.bottom = 0;
          imageCat.style.opacity = 1;

          setInComponent(true);
          setOutComponent(false);
        } else if (outComponent) {
          imageCat.style.position = "fixed";
          imageCat.style.bottom = "-200px";
          imageCat.style.transition = "bottom .5s, opacity 1s";
          imageCat.style.opacity = "";
          setInComponent(false);
          setBottom(false);
        }
      }
    }
    window.addEventListener("scroll", adjustImageCatPosition);
    window.addEventListener("resize", adjustImageCatPosition);

    adjustImageCatPosition();

    // Limpieza de eventos al desmontar el componente
    return () => {
      window.removeEventListener("scroll", adjustImageCatPosition);
      window.removeEventListener("resize", adjustImageCatPosition);
    };
  }, []);

  function CustomNextArrow(props) {
    const { style, onClick } = props;
    return (
      <div
        onClick={onClick}
        style={{ ...style, display: "flex" }}
        className="slick-next"
      >
        ➡️
      </div>
    );
  }
  function CustomPrevArrow(props) {
    const { style, onClick } = props;
    return (
      <div
        onClick={onClick}
        style={{ ...style, display: "flex" }}
        className="slick-prev"
      >
        ⬅️
      </div>
    );
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <>
      <Container
        fluid
        id="containerHomeBeneficios"
        className="bg-primary px-0 pt-7"
        style={{ overflow: "hidden", position: "relative" }}
      >
        <Row className="align-items-center mx-0">
          <Col></Col>
          <Col className="d-none d-lg-block bg-white h-3px"></Col>
          <Col
            xxl={10}
            lg={5}
            className="text-center text-wrap text-uppercase fs-1 fw-bold text-white mx-0"
          >
            ¿por qué elegirnos?
          </Col>
          <Col className="d-none d-lg-block bg-white h-3px"></Col>
          <Col></Col>
        </Row>
        <Row className="d-none d-lg-flex justify-content-center align-items-center mt-5 mx-0 mb-10">
          <Col
            xs={0}
            lg={5}
            xxl={9}
            className="fs-5 text-white text-center text-wrap text-uppercase"
          >
            Descripción de la consultoría destacando los beneficios y la
            propuesta de valor única de la consultoría en el campo de desarrollo
            de aplicaciones
          </Col>
        </Row>
        {/* Slider */}
        <div className="beneficios-slider-container d-flex d-lg-none">
          <Slider {...settings} className="beneficios-carousel">
            {listaBeneficios.map((beneficio, index) => (
              <SliderBeneficio
                key={index}
                id={`beneficio${index}`}
                title={beneficio.title}
                description={beneficio.description}
                image={beneficio.image}
              />
            ))}
          </Slider>
        </div>
        <div className="d-none d-lg-block">
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
        </div>
        <Container
          fluid
          id="containerImageCat"
          className="px-0 bg-primary bottom--20 px-5 d-flex justify-content-center containerImageCat"
        >
          <Image
            fluid
            id="imageCat"
            src={gatito}
            alt="gatito"
          />
        </Container>
      </Container>
    </>
  );
};

export default Beneficios;
