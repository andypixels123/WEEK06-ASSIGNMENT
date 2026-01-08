
function Thumbnails({ handler, images }) {
    return (
        <>
            <div id="thumbs">
                {images.map((image) => (
                    <img onClick={handler} key={image.id} src={image.url} alt={image.alt} title={image.title} />
                    // <img onClick={() => {

                    //     console.log(image.id);

                    // }} key={image.id} src={image.url} alt={image.alt} title={image.title} />
                ))}

            </div>

        </>
    );

}

export default Thumbnails;
