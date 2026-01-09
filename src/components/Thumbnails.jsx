
function Thumbnails({ handler, images }) {
    return (
        <>
            <div id="thumbs" aria-live="polite">
                {images.map((image) => (
                    <img onClick={handler} key={image.id} src={image.url} alt={image.alt} title={image.title} id={image.id} aria-label={`thumbnail image number ${image.id} of 6`} />
                ))}
            </div>
        </>
    );
}

export default Thumbnails;
