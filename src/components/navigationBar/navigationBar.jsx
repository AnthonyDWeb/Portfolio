import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import 'animate.css';
import { DeviseContext } from '../../contexts/devise';
import { ThemeContext } from '../../contexts/theme.context';
import Toggle from '../toggle';
import GlassmorphismComponent from '../glassmorphism/glassmorphism-component';
import MenuButton from '../menu-Button';

export default function NavigationBar() {
    const { isMobile } = useContext(DeviseContext);
    const { theme, setTheme } = useContext(ThemeContext);
    const [display, setDiplay] = useState(false);

    const animateClass = "animate__animated animate__fadeIn  animate__delay-3s";

    const Link = ({ title, classname, id }) => {
        const handle = () => { if (isMobile) setDiplay(!display) };
        return (
            <div className="linkContainer" onClick={() => handle()}>
                <a href={id} className={`link ${classname}`}>{title}</a>
            </div>
        )
    };


    return (
        <NavBar className={animateClass} mobile={isMobile} display={display} theme={theme}>
            <GlassmorphismComponent addClass={"navCard"}>
                <MenuButton display={display} action={() => setDiplay(!display)} />
                <NavList theme={theme} mobile={isMobile} display={display}>
                    <Link title={"Acceuil"} id={"#homepage"} />
                    <Link title={"Outils"} id={"#tools"} />
                    <Link title={"Portfolio"} id={"#portfolio"} />
                    <Link title={"A propos de moi"} id={"#about_me"} />
                    <Link title={"Contact"} id={"#contact"} />
                    <Toggle checked={theme === "Spécial"} action={() => setTheme({ ...theme, default: !theme.default })} />
                </NavList>
            </GlassmorphismComponent>
        </NavBar>
    )
}


const NavBar = styled.nav`
position: fixed; 
right: 5%;
z-index: 12;
width: ${props => !props.mobile ? "90vw" : props.display ? "90vw" : "fit-content"};
margin: 2vh auto;
border-radius: 20px;
background-color: ${props => props.theme && props.theme.background};
backdrop-filter: blur(${props => (props.display || !props.theme.default) && "15px"});
transition: all 1s ease;

.navCard {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
    padding: 1vh 2vw;
    transition: all 1s ease;
    border-radius: ${props => (!props.display && props.mobile) && "50%"};

}
.menu__icon {
    display: ${props => props.mobile ? "inset" : "none"};
}
`;


const NavList = styled.div`
position: relative;
width: 100%;
display: ${props => (props.display || !props.mobile) ? "flex" : "none"};
flex-direction: ${props => props.mobile && "column"};
align-items: center;
justify-content: ${props => !props.mobile && "space-around"};
transition: all 1s ease;

.linkContainer {
    position: relative;
    margin-bottom: ${props => props.mobile && "10px"}; 
    text-align: center; 
}
.link {
    color: ${props => props.theme && props.theme.text};
    font-weight: bold; 
    padding: 5px 8px; 
    border: none; 
    border-radius: 10px;
    :hover {
        color: black; 
        cursor: pointer; 
        background-color: #37FF8B;
        box-shadow: 0px 0px 15px 0px #37FF8B;
        filter: drop-shadow(0 0 23px #37FF8B);
        -webkit-text-stroke: 0.3px #37FF8B;
    }
}
`;
