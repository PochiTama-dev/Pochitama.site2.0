import React from 'react';
import { Modal, Carousel } from 'react-bootstrap';
import { loreIpsum } from '../../pages/Portfolio/variables';

const ModalPortfolio = ({ show, handleClose, data }) => {
  const handlerEvent = (e) => {
    e.stopPropagation();
  };
console.log(data)
  return (
    <Modal show={show} centered size='xl' onClick={handlerEvent} onHide={handleClose}>
      <Modal.Body className='d-flex flex-column p-0'>
      <Carousel
  style={{
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  }}
>
  {data.images.map((image, index) => (
    <Carousel.Item key={index} className="text-center"  style={{ marginBottom: '50px' }}>
      <img
        src={image}
        alt={`${data.title}-${index}`}
        style={{ height: '400px', width:'600px', display: 'inline-block' , margin : '20px'}}
        className="mx-auto"
      />
    </Carousel.Item>
  ))}
</Carousel>
 

        <div className='modal_rectangule' >
          <div style={{ width: '60%' }}>
            <label className='modal_rectangule_title'>{data.title}</label>
          </div>
          <div className='modal_logo' />
        </div>

        <div style={{ width: '100%', padding: '5px', marginTop: '50px' }}>
          <div>
            <label className='modal_label'>{data.description || loreIpsum}</label>
          </div>
        </div>

        <div className='d-flex justify-content-center' style={{ marginTop: '50px' }}>
          <button className='modal_button'>
            <label className='modal_button_label'>Contrata este servicio</label>
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalPortfolio;