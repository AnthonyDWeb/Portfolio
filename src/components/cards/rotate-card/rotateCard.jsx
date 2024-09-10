import React, { useEffect } from 'react';
import "./rotatecard.css";
import Blooming from '../../blooming-flower/blooming';

export default function RotateCard() {
    const imgSrc = require("../../../assets/images/profile-img.png");

    useEffect(() => {
        setTimeout(() => document.querySelector(".img-card").classList.add("active"), 1000);
        setTimeout(() => document.querySelector(".card-container").classList.add("active"), 1250);
    }, [])

    return (
        <div id='rotateCard' className='container'>
            <div className='card-container'>
                <div className="img-card">
                    <img src={imgSrc} alt="profil-image" className="profil-image front" id="profil-image-front" />
                    <span className='left' />
                    <span className='right' />
                    <img src={imgSrc} alt="profil-image" className="profil-image back" id="profil-image-back" />
                </div>
            </div>
            <Blooming />
        </div>
    )
}
