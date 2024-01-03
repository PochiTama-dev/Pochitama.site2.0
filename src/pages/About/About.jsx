import React from "react";
import "./about.css";
import "../../Themes/Base/_variables.css";
import colaboradores from "../../colaboradores.json";
import Cta from "../../components/cta/Cta";
import AboutUsSlider
 from "../../components/quienes/AboutUsSlider.JSX";
const About = () => {
  const titleCta = "¿Queres que tu proyecto se expanda?";
  const subtitleCta =
    "¡Es posible! \n Nuestros expertos en E-commerce te pueden ayudar.";
  return (
    <div>
      <Cta title={titleCta} subtitle={subtitleCta} />
      <section>
        <section className="aboutSection">
          <div className="aboutLine1"/>
          <h1 className="aboutTitle">QUIÉNES SOMOS</h1>
          <div className="aboutLine2"/>
        </section>
        <section className="equipoPochitama">
          {colaboradores.equipo && (
             <AboutUsSlider
            equipo = {colaboradores.equipo}
            />
          )}
         
          {/* <div className="colaboradores">
            {colaboradores.equipo.map((colaborador, index) => (
              <div key={index} className="colaborador">
                <div className="encabezado">
                  <img src={colaborador.imagen} alt={colaborador.nombre} />
                </div>
                <div className="info">
                  <h4>{colaborador.nombre}</h4>
                  <h5>{colaborador.area}</h5>
                </div>
              </div>
            ))}
          </div> */}
        </section>
      </section>
    </div>
  );
};

export default About;
