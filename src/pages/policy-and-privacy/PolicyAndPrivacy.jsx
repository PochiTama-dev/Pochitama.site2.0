import { Link } from 'react-router-dom';
import './PolicyAndPrivacy.css';

const PolicyAndPrivacy = () => {
  return (
    <div className="policy-container">
      <div className="policy-wrapper">
        <div className="policy-header">
          <div className="policy-badge">
            🔒 Información Legal
          </div>
          <h1 className="policy-title">Política de Privacidad</h1>
          <p className="policy-date">Última actualización: 18 de septiembre de 2024</p>
          <p className="policy-intro">
            En Pochitama.dev, nos comprometemos a proteger tu privacidad y mantener 
            la seguridad de tu información personal.
          </p>
        </div>

        <div className="policy-content">
          <section className="policy-section">
            <h2 className="policy-subtitle">1. Introducción</h2>
        <p>
          En <strong>pochitama.dev</strong>, entendemos la importancia de la privacidad de los datos y estamos comprometidos a proteger la
          información personal de nuestros clientes, usuarios y asociados. Esta política describe cómo recopilamos, utilizamos, almacenamos
          y protegemos la información personal en relación con el uso de nuestras soluciones y servicios, incluidos aquellos que involucran
          el uso de la API de WhatsApp proporcionada por Meta Platforms, Inc. (Meta).
        </p>
      </section>

      <section className="policy-section">
        <h2 className="policy-subtitle">2. Información que Recopilamos</h2>
        <p>Durante el uso de nuestros servicios, podemos recopilar las siguientes categorías de información:</p>
        <ul>
          <li><strong>Datos personales:</strong> nombre, dirección de correo electrónico, número de teléfono y otros datos que puedan identificar directamente a una persona.</li>
          <li><strong>Datos de interacción:</strong> mensajes enviados a través de WhatsApp, registros de chat y otro contenido compartido durante las interacciones.</li>
          <li><strong>Información técnica:</strong> dirección IP, tipo de navegador, sistema operativo, identificadores de dispositivos y otra información técnica.</li>
        </ul>
      </section>

      <section className="policy-section">
        <h2 className="policy-subtitle">3. Uso de la Información</h2>
        <p>La información que recopilamos se utiliza para:</p>
        <ul>
          <li>Facilitar la comunicación entre nuestros clientes y sus usuarios a través de la API de WhatsApp.</li>
          <li>Proveer servicios de desarrollo de aplicaciones web y soluciones digitales.</li>
          <li>Mejorar la experiencia de usuario y personalizar los servicios ofrecidos.</li>
          <li>Cumplir con los requisitos legales y normativos aplicables.</li>
        </ul>
      </section>

      <section className="policy-section">
        <h2 className="policy-subtitle">4. Compartición de Datos</h2>
        <p>En pochitama.dev no vendemos ni compartimos datos personales con terceros, salvo en los siguientes casos:</p>
        <ul>
          <li><strong>Proveedores de servicios:</strong> Podemos compartir información con terceros que nos ayudan a operar nuestros servicios.</li>
          <li><strong>Con Meta Platforms, Inc.:</strong> Para utilizar la API de WhatsApp, algunos datos pueden ser compartidos con Meta.</li>
          <li><strong>Requisitos legales:</strong> Podemos divulgar información si es requerido por ley o para proteger derechos y seguridad.</li>
        </ul>
      </section>

      <section className="policy-section">
        <h2 className="policy-subtitle">5. Almacenamiento y Seguridad de los Datos</h2>
        <p>
          Mantenemos medidas técnicas, administrativas y físicas necesarias para proteger la información personal contra accesos no
          autorizados, pérdida, alteración o destrucción.
        </p>
      </section>

      <section className="policy-section">
        <h2 className="policy-subtitle">6. Derechos del Usuario</h2>
        <p>Los usuarios tienen derecho a:</p>
        <ul>
          <li>Acceder a la información personal que hemos recopilado.</li>
          <li>Solicitar la corrección de cualquier dato incorrecto.</li>
          <li>Solicitar la eliminación de sus datos personales, salvo excepciones legales.</li>
        </ul>
      </section>

      <section className="policy-section">
        <h2 className="policy-subtitle">7. Uso de la API de WhatsApp</h2>
        <p>
          Al utilizar nuestros servicios que incluyen la API de WhatsApp, los usuarios aceptan que pochitama.dev utilice los datos
          proporcionados para enviar mensajes a través de WhatsApp.
        </p>
      </section>

      <section className="policy-section">
        <h2 className="policy-subtitle">8. Cambios a Esta Política</h2>
        <p>
          Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Los cambios serán publicados en nuestro
          sitio web.
        </p>
      </section>

          <section className="policy-section">
            <h2 className="policy-subtitle">9. Contacto</h2>
            <p>Si tienes preguntas sobre nuestra política de privacidad, por favor contáctanos:</p>
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

export default PolicyAndPrivacy;
