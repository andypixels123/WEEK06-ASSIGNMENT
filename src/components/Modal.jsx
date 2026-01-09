
// get alt, id, title, url from API in App.jsx
function Modal({ handler, image }) {
    return (
        <>
            <span id="modal">
                <img onClick={handler} src={image?.url} alt={image?.alt} title={image?.title} aria-label="main image window" />
            </span>
        </>
    );
}

export default Modal;
