import { useState } from "react";
import { Modal} from "react-bootstrap";

const ModalProject =({show, titulo, info}) => {
    return(
        <Modal show={show} centered>
            <Modal.Title>
                {titulo ? titulo: 'Nombre del Proyecto'}
            </Modal.Title>
            <Modal.Body>
                {info ? info : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Maecenas vitae mattis                  tellus.'}
            </Modal.Body>
        </Modal>
    )
}

export default ModalProject