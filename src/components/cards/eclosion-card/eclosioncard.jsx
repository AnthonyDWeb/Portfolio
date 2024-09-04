import React, { useEffect, useRef } from 'react';
import "./eclosioncard.css";
import CV from "../../../downloads/CV_Anthony_DELFORGE.pdf"
import Intersection from '../../Insersection/intersection';

export default function EclosionCard() {
    const imgRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => entries.forEach(el =>
            el.isIntersecting ? el.target.classList.add("active") : el.target.classList.remove("active")
        ));
        observer.observe(imgRef.current);
    });

    return (
        <Intersection refObserver={imgRef} addClass={"left intersection-img-container"}>
            <div className="img-container">
                <div className="img-profil">
                </div>
                <button className='img-btn-cv'>
                    <a className='img-btn-link' href={CV} download="CV_Anthony_DELFORGE">Télécharger CV</a>
                </button>
            </div>
        </Intersection>
    )
}
