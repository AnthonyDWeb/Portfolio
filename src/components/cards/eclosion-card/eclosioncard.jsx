import React from 'react';
import "./eclosioncard.css";
import CV from "../../../downloads/CV_Anthony_DELFORGE.pdf"

export default function EclosionCard() {


    return (
        <div className="img-container">
            <div className="img-profil">
            </div>
            <button className='img-btn-cv'>
                <a className='img-btn-link' href={CV} download="CV_Anthony_DELFORGE">Télécharger CV</a>
            </button>
        </div>
    )
}
