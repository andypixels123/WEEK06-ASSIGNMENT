
// get alt, id, title, url from API in App.jsx
// function Modal({ handler, image }) {
function Modal({ image }) {
    return (
        <>
            <div id="modal">
                <img src={image?.url} alt={image?.alt} title={image?.title} aria-label="main image window" />
            </div>
        </>
    );
}

export default Modal;
