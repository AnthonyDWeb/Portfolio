import React, { useContext } from 'react';
import styled from 'styled-components';
import { StyleContext } from '../../contexts/style.context';
import useDevice from '../../utils/hooks/useDevice';
import GlassmorphismComponent from '../glassmorphism/glassmorphism-component';

export default function ModelProjectCard({ link, source, title, colab, description, technology, responsive }) {
    const { projectTitle, contentContainer } = useContext(StyleContext);
    const { isMobile, isTablet, isDesktop, horizontalScreen, device } = useDevice();
    const imgSrc = require(`../../assets/projects/${source}`);
    const imgClassname= `${device} ${horizontalScreen}`
    const componentHeight = isMobile ? horizontalScreen ? "50vw" : "50vw" : isTablet ? "70vw" : isDesktop && "70vh";
    const componentWidth = isMobile ? horizontalScreen ? "50vw" : "50vw" : isTablet ? "50vw" : isDesktop && "22vw";

    return (
        <GlassmorphismComponent height={componentHeight} width={componentWidth} blur={0} shadow={"10, 10, 10, 1"}>
            <a target="_blank" rel="noreferrer" href={`${link}`}><img src={imgSrc} alt="" className={imgClassname}/></a>
            <a target="_blank" rel="noreferrer" href={`${link}`}><h4 style={projectTitle}>{title}</h4></a>

            <p><Key>Description:</Key>{description}</p>

            <div style={contentContainer}>
                <p><Key>Colaborateur(s) :</Key></p>
                <div style={{ display: "block" }}>
                    {colab.length === 0
                        ? <p>-</p>
                        : colab.map(c => c.link ?
                            <a key={c.name} target="_blank" rel="noreferrer" href={`${c.link}`}>{c.name}</a>
                            : <p key={c.name}>{c.name}</p>
                        )
                    }
                </div>
            </div>
            <p><Key>Technologies utilisée(s) :</Key>{technology}</p>
            <div style={contentContainer}>
                <p><Key>Responsive :</Key></p>
                <div style={{ display: "block" }}>
                    {responsive.length === 0
                        ? <p>-</p>
                        : responsive.map(r => <p key={r}>- {r}</p>
                        )
                    }
                </div>
            </div>

        </GlassmorphismComponent>
    )
}

const Key = styled.span`
font-weight: bolder;
font-style: normal;
margin-right: 5px;

`;
