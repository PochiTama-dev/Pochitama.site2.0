import { useState } from 'react';
import ModalPortfolio from './ModalPortfolio';

function ProyectCard({ proyectName, position, link, image }) {
  const [show, setShow] = useState(false);

  const handleShowModal = () => {
    setShow(!show);
  }

  const handleCLickCard = () => {
    if (link) {
      window.open(link, '_blank');
    } else {
      handleShowModal();
    }
  }
  return (
    <div className={`porfolio-proyect-box ${position}`} onClick={handleCLickCard}>
      {/* FONDO CON IMAGEN */}
      <div style={{ position: 'relative' }}>
        <img
          src={image}
          className='portfolio-label'
          style={{ width: '100%', height: '85%', borderRadius: '20px' }}
        />
        <div className='portfolio-pildora'>
          {/* PILDORA PROYECTO */}
          <label className='portfolio-label'>{proyectName}</label>
        </div>
      </div>
      {show === true && <ModalPortfolio show={show} setShow={setShow} />}
    </div>
  );
}

export default ProyectCard;
