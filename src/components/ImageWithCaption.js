import React from "react";

const ImageWithCaption = ({imageSource, imageFolderSource, imageAlt}) => {
    return (
        <figure id="esp-image">
            <img src={imageFolderSource} alt={imageAlt}/>
            <figcaption>Sourced from <a href={imageSource}>{imageSource}</a></figcaption>
        </figure>

    )
}

export default ImageWithCaption;