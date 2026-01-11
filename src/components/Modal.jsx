
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
            <div id="modal" style={{ display: "flex", position: "fixed", top: 0 + "px", right: 0 + "px", bottom: 0 + "px", left: 0 + "px", background: "black" }}>
                <img style={{objectFit:"contain"}} ref={modalRef} onClick={closeModal} src={image?.url} alt={image?.alt} title={image?.title} aria-label="main image window" />
                {/* <button onClick={onClose}>X</button> */}
            </div>
        </>
    );

}

export default Modal;
