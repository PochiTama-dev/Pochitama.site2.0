import React from 'react';
import "./home.css"
import "../../Themes/Base/_variables.css";

const Home = () => {
  return (
    <section className='beneFont'>
      <section className='beneSection'>
        <div className='beneLine1'></div>
        <h1 className='beneTitle'>¿POR QUÉ ELEGIRNOS?</h1>
        <div className='beneLine2'></div>
      </section>
      <section className='beneSection2'>
        <div className='beneDescription'>
          <h3 className='beneDescriptionText'>Descripción de la consultoría destacando los beneficios</h3>
          <h3 className='beneDescriptionText2'>y la propuesta de valor única de la consultoría en el campo de desarrollo de aplicaciones</h3>
        </div>
      </section>
    </section>
  )
}

export default Home