import React from 'react';
import "./eclosioncard.css";
import CV from "../../../downloads/CV_Anthony_DELFORGE.pdf"
import profilPhoto from "../../../assets/images/profile-img.png";
export default function EclosionCard() {
    return (
        <div className='profil-container'>
            <img src={profilPhoto} className='profil-img' alt='' />
            <div className='profil-photo' />
            <div className='profil-cv-container'>
                <a className='profil-cv' href={CV} download="CV_Anthony_DELFORGE">Télécharger CV</a>
            </div>
        </div>
    )
}
