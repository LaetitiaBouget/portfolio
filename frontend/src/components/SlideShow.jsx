import { useState } from 'react';
import ArrowLeft from '../assets/images/arrow-left.png';
import ArrowRight from '../assets/images/arrow-right.png';

const Slideshow = ( { imageUrls }) => {

    const [imageIndex, setImageIndex] = useState(0)

    function showPrevImage () {
        setImageIndex(index => {
            if (index === 0 ) return imageUrls.length - 1
            return index - 1
        })
    }

    function showNextImage () {
        setImageIndex(index => {
            if (index === imageUrls.length - 1) return 0
            return index + 1
        })
    }

    return (
        <div className="slideShow__gallery">
            <img src = {imageUrls[imageIndex]} alt ="Images du projet" className="slideShow__img"/>

            {imageUrls.length > 1 && (
                <>
                <button onClick = {showPrevImage} className="slideShow__btn left"><img src={ArrowLeft} className="arrow__image" alt="Précédent"/></button>
                <button onClick = {showNextImage} className="slideShow__btn right"><img src={ArrowRight} className="arrow__image" alt="Suivant"/></button>
                </>
            )}
        </div>
    )
}

export default Slideshow;