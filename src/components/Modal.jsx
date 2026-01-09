
// get alt, id, title, url from API in App.jsx
function Modal({ handler, image }) {
    return (
        <>
            <span id="modal">
                <img onClick={handler} src={image?.url} alt={image?.alt} title={image?.title} />
            </span>
        </>
    );
}

export default Modal;
