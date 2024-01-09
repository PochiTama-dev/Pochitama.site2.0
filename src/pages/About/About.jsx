import React,{useState, useEffect} from "react";
import "./about.css";
import "../../Themes/Base/_variables.css";
import colaboradores from "../../colaboradores.json";
import Cta from "../../components/cta/Cta";
import AboutUsSlider from "../../components/quienes/AboutUsSlider.jsx";
const About = () => {
  const titleCta = "¿Queres que tu proyecto se expanda?";
  const subtitleCta =
    "¡Es posible! \n Nuestros expertos en E-commerce te pueden ayudar.";

    const [equipo, setEquipo] = useState()
    useEffect(()=>{
      setEquipo(colaboradores.equipo)
    },[])
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
            <div style={{maxHeight:"40vh", border:'2px solid red'}}>
              <AboutUsSlider
             equipo = {equipo}
             setEquipo = {setEquipo}
             />
            </div>
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
