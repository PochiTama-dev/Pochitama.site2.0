import { Link } from 'react-router-dom';
import '../policy-and-privacy/PolicyAndPrivacy.css';

const TermsOfService = () => {
  return (
    <div className="policy-container">
      <div className="policy-wrapper">
        <div className="policy-header">
          <div className="policy-badge">
            📋 Términos Legales
          </div>
          <h1 className="policy-title">Términos de Uso</h1>
          <p className="policy-date">Última actualización: 14 de octubre de 2025</p>
          <p className="policy-intro">
            Al acceder y utilizar nuestros servicios, aceptas los siguientes términos y condiciones.
          </p>
        </div>

        <div className="policy-content">
          <section className="policy-section">
            <h2 className="policy-subtitle">1. Aceptación de los Términos</h2>
            <p>
              Al acceder y utilizar los servicios de <strong>Pochitama.dev</strong>, aceptas cumplir con estos Términos de Uso.
              Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar nuestros servicios.
            </p>
          </section>

          <section className="policy-section">
            <h2 className="policy-subtitle">2. Descripción de los Servicios</h2>
            <p>Pochitama.dev ofrece servicios de desarrollo de software, incluyendo:</p>
            <ul>
              <li>Desarrollo de aplicaciones web y móviles</li>
              <li>Diseño UX/UI</li>
              <li>Consultoría tecnológica</li>
              <li>Integración de APIs y servicios de terceros</li>
              <li>Soluciones de e-commerce</li>
              <li>Mantenimiento y soporte técnico</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2 className="policy-subtitle">3. Uso Aceptable</h2>
            <p>Al utilizar nuestros servicios, te comprometes a:</p>
            <ul>
              <li>No utilizar los servicios para fines ilegales o no autorizados</li>
              <li>No intentar acceder sin autorización a sistemas o datos</li>
              <li>No interferir con el funcionamiento de nuestros servicios</li>
              <li>No distribuir contenido malicioso o dañino</li>
              <li>Respetar los derechos de propiedad intelectual</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2 className="policy-subtitle">4. Propiedad Intelectual</h2>
            <p>
              Todo el contenido, diseño, código y materiales proporcionados por Pochitama.dev están protegidos por derechos 
              de autor y otras leyes de propiedad intelectual. Los derechos específicos sobre los proyectos desarrollados 
              se establecerán en los contratos individuales con cada cliente.
            </p>
          </section>

          <section className="policy-section">
            <h2 className="policy-subtitle">5. Responsabilidades del Cliente</h2>
            <p>Como cliente de Pochitama.dev, eres responsable de:</p>
            <ul>
              <li>Proporcionar información precisa y completa</li>
              <li>Mantener la confidencialidad de tus credenciales de acceso</li>
              <li>Realizar los pagos acordados en tiempo y forma</li>
              <li>Proporcionar feedback y aprobaciones necesarias en los plazos establecidos</li>
              <li>Cumplir con las leyes aplicables al usar nuestros servicios</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2 className="policy-subtitle">6. Limitación de Responsabilidad</h2>
            <p>
              Pochitama.dev no será responsable por daños indirectos, incidentales, especiales o consecuentes que resulten 
              del uso o la imposibilidad de usar nuestros servicios. Nuestra responsabilidad total no excederá el monto 
              pagado por los servicios en cuestión.
            </p>
          </section>

          <section className="policy-section">
            <h2 className="policy-subtitle">7. Garantías y Soporte</h2>
            <p>
              Proporcionamos garantías sobre la calidad de nuestro trabajo según lo establecido en cada contrato individual. 
              El período de garantía, términos de soporte y mantenimiento se especificarán en el acuerdo de servicio 
              correspondiente.
            </p>
          </section>

          <section className="policy-section">
            <h2 className="policy-subtitle">8. Modificaciones de los Términos</h2>
            <p>
              Nos reservamos el derecho de modificar estos Términos de Uso en cualquier momento. Los cambios serán efectivos 
              inmediatamente después de su publicación en nuestro sitio web. Es tu responsabilidad revisar periódicamente 
              estos términos.
            </p>
          </section>

          <section className="policy-section">
            <h2 className="policy-subtitle">9. Rescisión</h2>
            <p>
              Nos reservamos el derecho de suspender o terminar tu acceso a nuestros servicios en cualquier momento, 
              con o sin causa, con o sin previo aviso, si consideramos que has violado estos Términos de Uso.
            </p>
          </section>

          <section className="policy-section">
            <h2 className="policy-subtitle">10. Ley Aplicable</h2>
            <p>
              Estos Términos de Uso se rigen por las leyes de la República Argentina. Cualquier disputa relacionada con 
              estos términos será resuelta en los tribunales competentes de Buenos Aires, Argentina.
            </p>
          </section>

          <section className="policy-section">
            <h2 className="policy-subtitle">11. Contacto</h2>
            <p>Si tienes preguntas sobre estos Términos de Uso, contáctanos:</p>
            <div className="policy-contact-box">
              <ul>
                <li><strong>Correo electrónico:</strong> Enriquegonzalodamian@outlook.com</li>
                <li><strong>Dirección:</strong> Cotagaita 613, Avellaneda, Buenos Aires.</li>
              </ul>
            </div>
          </section>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/" className="policy-back-link">
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
