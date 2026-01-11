
import { useRef } from 'react';

function Modal({ onClose, image }) {
    const modalRef = useRef();
    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            onClose();
        }
    }
    return (
        <>
            <div id="modal" ref={modalRef} onClick={closeModal} title="click to close">
                {/* <img ref={modalRef} onClick={closeModal} src={image?.url} alt={image?.alt} title="click to close" aria-label="main image window" /> */}
                <img onClick={onClose} src={image?.url} alt={image?.alt} title="click to close" aria-label="main image window" />
                {/* <button onClick={onClose}>X</button> */}
            </div>
        </>
    );

}

export default Modal;
