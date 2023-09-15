import React from 'react';
import "./about.css"
import "../../Themes/Base/_variables.css"

const About = () => {
  return (
    <section>
      <section className='aboutSection'>
        <div className='aboutLine1'></div>
        <h1 className='aboutTitle'>Quiénes Somos</h1>
        <div className='aboutLine2'></div>
      </section>
      <section className='equipoPochitama'>
        <div className='colaboradores'>
          <div className='colaborador'>
            <div className='encabezado'>
              <img src="https://avatars.githubusercontent.com/u/111319458?v=4" alt="" />
            </div>
            <div className='info'>
              <h4>GONZALA ENRICA</h4>
              <h5>Fullstack Developer</h5>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default About