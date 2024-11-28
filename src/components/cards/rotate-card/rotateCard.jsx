import React, { useEffect } from 'react';
import "./rotatecard.css";
import Blooming from '../../blooming-flower/blooming';
import cv from "../../../downloads/CV_Anthony_DELFORGE.pdf";

export default function RotateCard() {
    const imgSrc = require("../../../assets/images/profile-img.png");

    useEffect(() => {
        setTimeout(() => document.querySelector(".img-card").classList.add("active"), 1000);
        setTimeout(() => document.querySelector(".card-container").classList.add("active"), 1250);
    }, [])

    return (
        <div id='rotateCard' className='container'>
            <div className='card-container'>
                <a href={cv} download="cv_delforge_anthony">
                    <div className="img-card">
                        <img src={imgSrc} alt="profil-image" className="profil-image front" id="profil-image-front" />
                        <span className='left' />
                        <span className='right' />
                        <img src={imgSrc} alt="profil-image" className="profil-image back" id="profil-image-back" />
                    </div>
                </a>
            </div>
            <Blooming />
        </div>
    )
}
