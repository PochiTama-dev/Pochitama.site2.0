import React from 'react';
import { Modal } from 'react-bootstrap';
import { loreIpsum } from '../../pages/Portfolio/variables';

function ModalPortfolio({show, data}) {
    return (
        <Modal show={show} centered size='xl'>
            <Modal.Header closeButton>
                <Modal.Title> {data ? data.name : "TITULO DEL PROYECTO"} </Modal.Title>
            </Modal.Header>
            <Modal.Body className='d-flex flex-row' style={{border:"2px solid blue"}}>
                <div className='' style={{background:`url(${data ? data.img : "/src/assets/images/exampleProyect.png"})`, width:'50%'}}/>
                <div style={{width:'50%', padding:'5px  '}}>
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