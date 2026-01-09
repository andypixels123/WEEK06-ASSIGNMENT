
function Thumbnails({ handler, images }) {
    return (
        <>
            <div id="thumbs">
                {images.map((image) => (
                    <img onClick={handler} key={image.id} src={image.url} alt={image.alt} title={image.title} id={image.id} aria-label={`thumbnail image number ${image.id}`} />
                ))}
            </div>
        </>
    );
}

export default Thumbnails;
