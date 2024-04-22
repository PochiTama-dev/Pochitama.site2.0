import { useEffect, useState } from "react";
import "./portfolio.css";
import ProyectCard from "../../components/Portfolio/ProyectCard";
import { texto, titleCTA, subtitleCTA } from "./variables.js";
import Cta from "../../components/cta/Cta.jsx";
import { Carousel } from "react-bootstrap";
import { projectsData  } from "./projectsData";
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
 
  const allProjectsData = [...projectsData ];
  function chunkArray(array, size) {
    return Array.from({ length: Math.ceil(array.length / size) }, (_, index) =>
      array.slice(index * size, (index + 1) * size)
    );
  }
 
  
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
     <div className="col-10 mb-4 d-flex flex-row flex-wrap justify-content-center" >
     {chunkArray(allProjectsData, 4).map((row, rowIndex) => (
  <div key={rowIndex} className={`d-flex flex-row ${row.length === 4 ? 'justify-content-start' : 'justify-content-start'} mb-4`}>
    {row.map((project, index) => (
      <ProyectCard
        key={index}
        proyectName={project.title}
        position={(index % 2 === 0) ? "par" : "impar"}
        image={project.image}
        images={project.images}
        url={project.url}
        description={project.description}
      />
    ))}
         </div>
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
                    <ProyectCard proyectName={project.title}  image={project.image}   images={project.images}
        url={project.url}
        description={project.description} />
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