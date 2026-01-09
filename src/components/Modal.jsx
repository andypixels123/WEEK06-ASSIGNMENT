
// get alt, id, title, url from API in App.jsx
function Modal({ handler, image }) {
    return (
        <>
            <div id="modal">
                <img onClick={handler} src={image?.url} alt={image?.alt} title={image?.title} id={image?.id} />
            </div>
        </>
    );
}

export default Modal;
