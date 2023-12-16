import React from 'react'
import './portfolio.css'
import ProyectCard from '../../components/Portfolio/ProyectCard';
import {texto} from "./variables.js";

const Portfolio = () => {

  return (
    <div className='container-fluid portfolio-container'>
      <div className="row pt-10">{/* ROW TEXTOS */}
        <div className='col-2'/>
        <div className="col-8">
          <div className="d-flex flex-row justify-content-center align-items-center mb-4">{/* BOX TITULO */}
            <div className='portfolio-hr'/>
            <h2 className='portfolio-title'> Proyectos Destacados</h2>
            <div className='portfolio-hr'/>
          </div>
          <div className='portfolio-text-box'>{/* TEXT-BOX */}
            <p className='portfolio-p'>{texto}</p>{/*texto */}
          </div>
        </div>
        <div className='col-2'/>
      </div>
        <div className="row pt-8">{/* ROW IMGS */}
            <div className='col-1'/>
            <div className='col-10 d-flex flex-row justify-content-center'>
              <ProyectCard proyectName="Proyecto" position="impar"/>
              <ProyectCard proyectName="Proyecto" position="par"/>
              <ProyectCard proyectName="Proyecto" position="impar"/>
              <ProyectCard proyectName="Proyecto" position="par"/>
            </div>
            <div className='col-1'/>

        </div>
    </div>
  )
}

export default Portfolio