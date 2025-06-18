import { useEffect, useState } from "react";
import ArrowUp from '../assets/images/arrow-up.svg';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState (false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY>300);
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({  top:0, behavior: 'smooth'});
    };

    if (!isVisible) return null;

    return (
        <button className="scroll-to-top" onClick={scrollToTop}>
            <img src={ArrowUp} alt="Bouton pour remonter en haut de la page"/>
        </button>
    );
}

export default ScrollToTopButton;