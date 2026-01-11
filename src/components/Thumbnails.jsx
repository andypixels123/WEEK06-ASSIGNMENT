
function Thumbnails({ handler, images }) {
    const imageQty = images.length;
    return (
        <>
            <div id="thumbs" aria-live="polite" aria-label="use tab, enter and escape keys for modal popup image">
                {images.map((image) => (
                    <button key={image.id}>
                        {/* <button onClick={() => setShowModal(true)}>click me</button> */}
                        <img onClick={handler} id={image.id} key={image.id} src={image.url} alt={image.alt} title={image.title} aria-label={`thumbnail image number ${image.id} of ${imageQty}`} tabIndex={image.id} />
                    </button>
                ))}
            </div>
        </>
    );
}

export default Thumbnails;
