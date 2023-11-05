// LIBRARY //
import React, { useContext } from 'react';
import styled from 'styled-components';
// STYLE //
import '../App.css';
// CONTEXT //
import { StyleContext } from '../contexts/style.context';
// PAGE //
// COMPONENT //
import GlassmorphismComponent from '../components/glassmorphism/glassmorphism-component';
// OTHER //
import useDevice from '../utils/hooks/useDevice';
import github from '../assets/toolsIcone/github.svg';
import linkedin from '../assets/linkedin.png';
import { ThemeContext } from '../contexts/theme.context';

export default function Contact() {
    const { isMobile } = useDevice();
    const { PageContainer, pageContainerStyle, isLoad } = useContext(StyleContext);
    const { theme, } = useContext(ThemeContext);



    // Media
    const IconesLink = ({ source, link, label, className }) => <IconeLink href={link} target="_blank" theme={theme}><Icone src={source} className="iconsocialnetworks" />{label}</IconeLink>;

    const Media = () => {
        const githubLabel = isMobile ? <span style={{ textAlign: "center" }}>Mon<br />Github</span> : "AnthonyDWeb";
        const linkedinLabel = isMobile ? <span>Anthony<br />Delforge</span> : "Anthony Delforge";
        return (
            <div style={{ display: "flex", justifyContent: "space-around", width: "100%", marginTop: 20, }}>
                <IconesLink source={github} link={"https://github.com/AnthonyDWeb"} label={githubLabel} />
                <IconesLink source={linkedin} link={"https://www.linkedin.com/in/anthony-delforge-9b0805214"} label={linkedinLabel} />
            </div>
        )
    }


    return (isLoad &&
        <PageContainer style={{ ...pageContainerStyle }} id='contact' className={"animate__animated animate__backIn"}>
            <GlassmorphismComponent addStyle={{ width: "90vw" }}>
                <h2 style={{ color: theme.text, marginBottom: 10 }}>Me Contacter</h2>
                <Media />
            </GlassmorphismComponent>
        </PageContainer>
    )

}

const IconeLink = styled.a`
display: flex;
flex-direction: column;
align-items: center;
margin: 5px;

`;

const Icone = styled.img`
width: 50px;
height: 50px;
`;
