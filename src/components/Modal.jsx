
// get alt, id, title, url from API in App.jsx
function Modal({ handler, src, alt, title }) {
    return (
        <>
            <div id="modal">
                <img onClick={handler} src={src} alt={alt} title={title} />
            </div>
        </>
    );
}

export default Modal;
