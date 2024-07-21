
import './WhatsAppButton.css'; // Asegúrate de crear este archivo CSS para estilizar el botón

const WhatsAppButton = () => {
  const phoneNumber = '5491166092758'; // Reemplaza con tu número de WhatsApp

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="whatsapp-icon"
      />
      <div className="whatsapp-text">¡Chatea con nosotros!</div>
    </a>
  );
};

export default WhatsAppButton;
