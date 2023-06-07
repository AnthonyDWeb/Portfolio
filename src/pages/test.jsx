import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import '../App.css';
import 'animate.css';
import CV from '../downloads/CV_Anthony_DELFORGE.pdf';
import { StyleContext } from '../contexts/style.context';
import useDevice from '../utils/hooks/useDevice';
import GlassmorphismComponent from '../components/glassmorphism/glassmorphism-component';

export default function Test() {
    const { orientation, isMobile, isTablet, isDesktop, device } = useDevice();
    const { PageContainer, row, column, titleStyle, title2Style, title3Style } = useContext(StyleContext);
    const [style, setStyle] = useState(false);
    const imageSource = require("../assets/profil-image.png")

    return (
            <div className={`card card${style}`} onClick={() => setStyle(!style)} >
                <h2 style={{transform: "rotate(90deg)", width: "fit-content", position: "absolute", top: 0, left: "-20%"}}>A propos de moi</h2>
            </div>
    )
    return (
        <>
            <div className={`card card${style}`} onClick={() => setStyle(!style)} >
                <h2 style={{transform: "rotate(90deg)", width: "fit-content", position: "absolute", top: 0, left: "-20%"}}>A propos de moi</h2>
            </div>
            <div className={`card card${style}`} onClick={() => setStyle(!style)} >
                <h2 style={{transform: "rotate(90deg)", width: "fit-content", position: "absolute", top: 0, left: "-20%"}}>A propos de moi</h2>
            </div>
            <div className={`card card${style}`} onClick={() => setStyle(!style)} >
                <h2 style={{transform: "rotate(90deg)", width: "fit-content", position: "absolute", top: 0, left: "-20%"}}>A propos de moi</h2>
            </div>
        </>
    )
}

