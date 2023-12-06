import React from 'react'
import './portfolio.css'
import Example from '../../assets/images/exampleProyect.png'
import {texto} from "./variables.js";

const Portfolio = () => {
    const divStyle = {
        display: 'flex',
        borderRadius: '25px',
        background: `url(${Example}) lightgray 50% / cover no-repeat`,
        boxShadow: '20px 20px 20px 0px rgba(0, 0, 0, 0.20)',
        height:'40vh',
        width:'10%',
        padding: '10px',
        margin:"0 5px"
    }
  return (
    <div className='container-fluid portfolio-container'>
      <div className="row">{/* ROW TEXTOS */}
        <div className="col-12">
          <div className="d-flex flex-row justify-content-center align-items-center">{/* BOX TITULO */}
            <hr className='portfolio-hr'/>
            <h2 className='portfolio-title'> Proyectos Destacados</h2>
            <hr className='portfolio-hr'/>
          </div>
          <p className='portfolio-p'>{texto}</p>{/* BOX texto */}
        </div>
      </div>
        <div className="row">{/* ROW IMGS */}
            <div className='col-12 d-flex flex-row justify-content-center'>
                <div className="porfolio-proyect-box impar">{/*FONDO CON IMAGEN*/}
                    <div className='portfolio-pildora'>{/*PILDORA PROYECTO*/}
                        <label className='portfolio-label'>Proyecto</label>
                    </div>
                </div>
                <div className="porfolio-proyect-box par">{/*FONDO CON IMAGEN*/}
                    <div  className='portfolio-pildora'>{/*PILDORA PROYECTO*/}
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

        </div>
    </div>
  )
}

export default Portfolio