import { useEffect, useState } from "react";
import "./portfolio.css";
import ProyectCard from "../../components/Portfolio/ProyectCard";
import { texto, titleCTA, subtitleCTA } from "./variables.js";
import Cta from "../../components/cta/Cta.jsx";
import { Carousel } from "react-bootstrap";
import logoKingdom from "../../assets/images/kingdom-logo.webp"
import logoNutriciom from "../../assets/images/nutricion-logo.webp"
import logoIlum from "../../assets/images/ilum-logo.webp"
import logoLeelo from "../../assets/images/leelo-logo.webp"
import logoMorazul from "../../assets/images/morazul-logo.webp"
import logoCalu from "../../assets/images/logoCalu.webp"
import logoSucurApp from "../../assets/images/sucurApp-logo.webp"
const Portfolio = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateScreenWidth);

    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  const projectsData = [
    { title: "Kingdom", image: logoKingdom },
    { title: "Nutricióm Espiritual", image: logoNutriciom },
    { title: "ILUM MÉXICO", image: logoIlum },
    { title: "CALU", image: logoCalu },
 
 
  ];
  const projectsData2 = [
 
    { title: "LEELO ACÁ", image: logoLeelo },
    { title: "SUCURAPP", image: logoSucurApp },
    { title: "MORAZUL", image: logoMorazul },
    { title: "ESCUCHALO ACÁ", image: logoLeelo },
 
  ];
  const allProjectsData = [...projectsData, ...projectsData2];
  return (
    <div className="portfolio">
      <Cta title={titleCTA} subtitle={subtitleCTA} />
      <div className="container-fluid portfolio-container">
        <div className="row pt-10">
          {/* ROW TEXTOS */}
          <div className="col-2" />
          <div className="col-8">
            <div className="d-flex flex-row justify-content-center align-items-center mb-4">
              {/* BOX TITULO */}
              <div className="portfolio-hr" />
              <h2 className="portfolio-title"> Proyectos Destacados</h2>
              <div className="portfolio-hr" />
            </div>
            <div className="portfolio-text-box">
              {/* TEXT-BOX */}
              <p className="portfolio-p">{texto}</p>
              {/*texto */}
            </div>
          </div>
          <div className="col-2" />
        </div>
        <div className="row pt-8">
          {/* ROW IMGS */}
          <div className="col-1" />
          {screenWidth > 1000 ? (
            <> 
            <div className="col-10 mb-4 d-flex flex-row justify-content-center">
              {projectsData.map((project, index) => (
                <ProyectCard
                  key={index}
                  proyectName={project.title}
                  position={index % 2 === 0 ? "par" : "impar"}
                  image={project.image}
                />
              ))}
            </div>
                   <div className=" mb-4 d-flex flex-row justify-content-center">
                   {projectsData2.map((project, index) => (
                     <ProyectCard
                       key={index}
                       proyectName={project.title}
                       position={index % 2 === 0 ? "par" : "impar"}
                       image={project.image}
                     />
                   ))}
                 </div>
                 </>
          ) : (
            <div className="col-10 d-flex flex-row justify-content-center align-items-center">
              <Carousel
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {allProjectsData.map((project, index) => (
                  <Carousel.Item key={index}>
                    <ProyectCard proyectName={project.title} position={"carousel"} image={project.image} />
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          )}
          <div className="col-1" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;