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
      <section className='beneSection3'>
        <section>
          <div className='bar1'>
            <h2 className='benefitTitle1'>PASIÓN POR TU VISIÓN</h2>
            <div>
            <img className= "benefitImage" src="https://avatars.githubusercontent.com/u/111319458?v=4" alt="Pasion por tu Vision" />
            </div>
          </div>
          <div className='beneDescription2'>
            <p className='benefitText'>En Pochitama.dev, no solo creamos aplicaciones web, sino que también nos enamoramos de tus ideas. Nos emociona cada proyecto como si fuera nuestro, y trabajamos incansablemente para convertir tus sueños en una realidad digital impresionante.</p>
          </div>
        </section>
        <section>
          <div className='bar2'>
            <h2 className='benefitTitle2'>DISEÑO CENTRADO EN EL USUARIO</h2>
            <div>
            <img className= "benefitImage2" src="https://avatars.githubusercontent.com/u/111319458?v=4" alt="Pasion por tu Vision" />
            </div>
          </div>
          <div className='beneDescription3'>
            <p className='benefitText2'>Sabemos que cada usuario es único. Es por eso que nuestros diseñadores se sumergen en la mente de tus usuarios para crear una experiencia que los haga sonreír. Desde una interfaz intuitiva hasta un diseño atractivo, nos aseguramos de que cada clic sea una delicia.</p>
          </div>
        </section>
        <section>
          <div className='bar3'>
            <h2 className='benefitTitle3'>CÓDIGO QUE IMPULSA RESULTADOS</h2>
            <div>
            <img className= "benefitImage3" src="https://avatars.githubusercontent.com/u/111319458?v=4" alt="Pasion por tu Vision" />
            </div>
          </div>
          <div className='beneDescription4'>
            <p className='benefitText'>No solo creamos aplicaciones que se ven bien, sino que también funcionan excepcionalmente bien. Nuestro equipo de desarrolladores se enorgullece de escribir un código limpio y eficiente que no solo cumple con tus requisitos, sino que también impulsa resultados tangibles para tu negocio.</p>
          </div>
        </section>
        <section>
          <div className='bar2'>
            <h2 className='benefitTitle4'>COLABORACION TRANSPARENTE</h2>
            <div>
            <img className= "benefitImage4" src="https://avatars.githubusercontent.com/u/111319458?v=4" alt="Pasion por tu Vision" />
            </div>
          </div>
          <div className='beneDescription5'>
            <p className='benefitText2'>Consideramos a nuestros clientes como socios en cada paso del camino. Mantenemos líneas de comunicación abiertas y transparentes, asegurándonos de que estés al tanto de cada avance y decisión tomada en el proceso de desarrollo. Tu opinión es esencial en la creación de algo realmente extraordinario.</p>
          </div>
        </section>
        <section>
          <div className='bar3'>
            <h2 className='benefitTitle5'>ENTREGA A TIEMPO, SIEMPRE</h2>
            <div>
            <img className= "benefitImage5" src="https://avatars.githubusercontent.com/u/111319458?v=4" alt="Pasion por tu Vision" />
            </div>
          </div>
          <div className='beneDescription4'>
            <p className='benefitText'>Comprendemos lo crucial que es el tiempo en el mundo digital. Nos comprometemos a cumplir plazos sin comprometer la calidad. Con Pochitama.dev, no solo obtendrás una aplicación excepcional, sino que también la tendrás justo cuando la necesites.</p>
          </div>
        </section>
        <section>
          <div className='bar2'>
            <h2 className='benefitTitle6'>SOPORTE CONTINUO</h2>
            <div>
            <img className= "benefitImage6" src="https://avatars.githubusercontent.com/u/111319458?v=4" alt="Pasion por tu Vision" />
            </div>
          </div>
          <div className='beneDescription5'>
            <p className='benefitText2'>Nuestro compromiso no termina cuando tu aplicación está lista. Ofrecemos soporte continuo para resolver cualquier problema, realizar actualizaciones y asegurarnos de que tu aplicación siga funcionando sin problemas en un entorno en constante cambio.</p>
          </div>
        </section>
        <section>
          <div className='bar3'>
            <h2 className='benefitTitle7'>HISTORIAS DE ÉXITO COMPARTIDAS</h2>
            <div>
            <img className= "benefitImage7" src="https://avatars.githubusercontent.com/u/111319458?v=4" alt="Pasion por tu Vision" />
            </div>
          </div>
          <div className='beneDescription4'>
            <p className='benefitText'>Nada habla mejor de nuestro trabajo que los éxitos de nuestros clientes. Hemos ayudado a diversas empresas a lograr sus objetivos digitales y estamos ansiosos por compartir estas historias contigo. ¡Tu éxito es nuestro éxito!</p>
          </div>
        </section>
      </section>
    </section>
  )
}

export default Home