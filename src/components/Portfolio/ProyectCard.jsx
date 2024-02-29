import {useState} from 'react';
import ModalPortfolio from './ModalPortfolio';

function ProyectCard({proyectName, position, link}) {
    const [show, setShow]  = useState(false);
    const handleShowModal = () =>{
        setShow(!show)
    }
    const handleCLickCard = () =>{
        if(link) window.open(link, '_blank');
        else{
            handleShowModal()
        }
    }

    return (
        <div className={`porfolio-proyect-box ${position}`} onClick={handleCLickCard}>{/*FONDO CON IMAGEN*/}
            <div className='portfolio-pildora'>{/*PILDORA PROYECTO*/}
                <label className='portfolio-label'>{proyectName}</label>
            </div>
            {show === true && <ModalPortfolio show={show} setShow={setShow}/>}
    </div>
    );
}

export default ProyectCard;