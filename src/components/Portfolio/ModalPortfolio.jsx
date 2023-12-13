import React from 'react';
import { Modal } from 'react-bootstrap';
import { loreIpsum } from '../../pages/Portfolio/variables';

function ModalPortfolio({show, data}) {
    return (
        <Modal show={show} centered size='xl'>
            <Modal.Header closeButton>
                <Modal.Title> {data ? data.name : "TITULO DEL PROYECTO"} </Modal.Title>
            </Modal.Header>
            <Modal.Body className='d-flex' style={{flexDirection:'column', padding:'0'}}>
                <div className='' style={{background:`url(${data ? data.img : "/src/assets/images/exampleProyect.png"})`, width:'100%', height:'45vh'}}/>
                <div className="modal_rectangule">
                    <label className='modal_rectangule_title'>Proyecto</label>
                     <div className="modal_logo"/>
                </div>
                <div style={{width:'100%', padding:'5px ', maxHeight:'20vh'}}>
                    <label> 
                        {data ? data.description : loreIpsum}
                    </label>
                </div>
            </Modal.Body>
            <Modal.Footer closeButton>

            </Modal.Footer>
        </Modal>
    );
}

export default ModalPortfolio;