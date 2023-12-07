import React from 'react'
import './portfolio.css'
import {texto} from "./variables.js";

const Portfolio = () => {

  return (
    <div className='container-fluid portfolio-container'>
      <div className="row pt-10">{/* ROW TEXTOS */}
        <div className='col-2'/>
        <div className="col-8">
          <div className="d-flex flex-row justify-content-center align-items-center">{/* BOX TITULO */}
            <hr className='portfolio-hr'/>
            <h2 className='portfolio-title'> Proyectos Destacados</h2>
            <hr className='portfolio-hr'/>
          </div>
          <div className='portfolio-text-box'>{/* TEXT-BOX */}
            <p className='portfolio-p'>{texto}</p>{/*texto */}
          </div>
        </div>
        <div className='col-2'/>
      </div>
        <div className="row pt-8">{/* ROW IMGS */}
            <div className='col-2'/>
            <div className='col-8 d-flex flex-row justify-content-center'>
                <div className="porfolio-proyect-box impar">{/*FONDO CON IMAGEN*/}
                    <div className='portfolio-pildora'>{/*PILDORA PROYECTO*/}
                        <label className='portfolio-label'>Proyecto</label>
                    </div>
                </div>
                <div className="porfolio-proyect-box par">{/*FONDO CON IMAGEN*/}
                    <div className='portfolio-pildora'>{/*PILDORA PROYECTO*/}
                        <label className='portfolio-label'>Proyecto</label>
                    </div>
                </div>
                <div className="porfolio-proyect-box impar">{/*FONDO CON IMAGEN*/}
                    <div  className='portfolio-pildora'>{/*PILDORA PROYECTO*/}
                        <label className='portfolio-label'>Proyecto</label>
                    </div>
                </div>
                <div className="porfolio-proyect-box par">{/*FONDO CON IMAGEN*/}
                    <div  className='portfolio-pildora'>{/*PILDORA PROYECTO*/}
                        <label className='portfolio-label'>Proyecto</label>
                    </div>
                </div>
            </div>
            <div className='col-2'/>

        </div>
    </div>
  )
}

export default Portfolio