import {useState, useEffect} from "react";
import "./about.css";
import "../../Themes/Base/_variables.css";
import colaboradores from "../../colaboradores.json";
import Cta from "../../components/cta/Cta";
import AboutUsSlider from "../../components/quienes/AboutUsSlider"
const About = () => {
  
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', updateScreenWidth);

    return () => {
      window.removeEventListener('resize', updateScreenWidth);
    };
  }, []);

  const titleCta = "¿Queres que tu negocio se expanda?";
  const subtitleCta =
    "¡Es posible! \n Nuestros expertos en E-commerce te pueden ayudar.";

  return (
    <div>
      <Cta title={titleCta} subtitle={subtitleCta} />
      { screenWidth > 1024 &&
          <section className="why_section">
            <section className="d-flex justify-content-center align-items-center w-100">
              <div className="aboutLine1"style={{backgroundColor:'white', margin:"0px"}}/>
              <h1 className="">¿POR QUÉ ELEGIRNOS?</h1>
              <div className="aboutLine2" style={{backgroundColor:'white', margin:"0px"}}/>
            </section>
            <section style={{width:"80%"}}>
              <text className="why_description">
              Pochitama.dev se especializa en transformar ideas en aplicaciones web y móviles excepcionales, centradas en el usuario y diseñadas para impresionar. Nuestro enfoque se basa en la colaboración estrecha, comunicación transparente y entrega a tiempo, asegurando soluciones de alta calidad que cumplen y superan tus expectativas. Nos enorgullecemos de nuestro soporte continuo, garantizando que tu proyecto se mantenga actualizado y funcional en el cambiante entorno digital. Con un historial probado de éxito, hacemos de tu visión una realidad, impulsando tu negocio hacia adelante. Descubre la diferencia de trabajar con nosotros y lleva tus objetivos digitales al próximo nivel.
              </text>
            </section>
          </section>
      }
      <section>
        <section className="aboutSection">
          { screenWidth > 1024 && <div className="aboutLine1"/>}
          <h1 className="aboutTitle">¿QUIÉNES SOMOS?</h1>
          {screenWidth > 1024 && <div className="aboutLine2"/>}
        </section>
        { screenWidth >= 1024 ? 
                  <section className="equipoPochitama">
                  <div className="colaboradores">
                    {colaboradores.equipo.map((colaborador, index) => (
                      <div key={index} className="colaborador">
                        <div className="box">
                          <div className="encabezado">
                            <img src={colaborador.imagen} alt={colaborador.nombre} />
                          </div> 
                          <div className="info">
                            <h4>{colaborador.nombre}</h4>
                            <h5>{colaborador.area}</h5>
                        </div>
                      </div>
                        </div>
                    ))}
                  </div>
                </section>
        :
          <AboutUsSlider
              equipo={colaboradores.equipo}
              screenWidth={screenWidth}
          />
        }

      </section>
    </div>
  );
};

export default About;
