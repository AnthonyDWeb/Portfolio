import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import 'animate.css';
import { DeviseContext } from '../contexts/devise';
import GlassmorphismComponent from './glassmorphism/glassmorphism-component';
import { ThemeContext } from '../contexts/theme.context';

export default function NavigationBar() {
    const { orientation, isDesktop } = useContext(DeviseContext);
    const { theme,setTheme } = useContext(ThemeContext);
    const [display, setDisplay] = useState(false);

    const arrowSrc = require("../assets/icon-arrow-down.webp");
    const arrowStyle = { height: 20, width: 30 }
    const ThemeButton = ({t}) => <p style={{ position: "relative", textAlign: "center", }} onClick={() => setTheme(t)} className='link'>{t}</p> 
    const MenuButton = ({ title, classname, id }) => {
        const themeButton = id === "#theme";
        return (
            <div className="linkContainer" style={{ margin: "5px 0", textAlign: "center", position: "relative" }}>
                <a href={id} className={`link ${classname}`} onClick={() => themeButton && setDisplay(!display)}>{title}</a>
                {(display && themeButton) &&
                    <div style={{ position: "absolute", right: "-10%", zIndex: 8, top: "130%" }}>
                        <GlassmorphismComponent background={"rgba(0,0,0,0.7)"}>
                            <ThemeButton t={"Clair"}/>
                            <ThemeButton t={"Sombre"}/>
                            <ThemeButton t={"Spécial"}/>
                        </GlassmorphismComponent>
                    </div>
                }
            </div>
        )
    };

    console.log("setdisplay", display);
    return (
        <div className={`animate__animated animate__fadeIn  animate__delay-3s`} style={{ position: "fixed", zIndex: 12 }}>
            <NavBar orientation={`${orientation}`} desktop={isDesktop}>
                {(display || isDesktop) &&
                    <NavList orientation={`${orientation}`} desktop={isDesktop}>
                        <MenuButton title={"Acceuil"} id={"#homepage"} />
                        <MenuButton title={"Outils"} id={"#tools"} />
                        <MenuButton title={"Portfolio"} id={"#portfolio"} />
                        <MenuButton title={"A propos de moi"} id={"#about_me"} />
                        <MenuButton title={"Contact"} id={"#contact"} />
                        <MenuButton title={`Thème (${theme})`} id={"#theme"} classname={display && "isHover"} />
                    </NavList>
                }
                {!isDesktop && <Displayer orientation={`${orientation}`} onClick={() => setDisplay(!display)}
                >
                    <img src={arrowSrc} style={arrowStyle} className={`arrow ${display}`} alt='' />
                </Displayer>}
            </NavBar>
        </div>
    )
}


const NavBar = styled.nav`
display: flex; align-items: center; 
flex-direction: ${props => props.orientation !== "portrait" && "column"};
height: ${props => props.orientation === "portrait" && "100vh"};
width: ${props => props.orientation === "portrait" ? "180px" : "100vw"};
background-color: ${props => props.desktop && "rgba(10,3,3,0.4)"};
// ${props => props.orientation !== "portrait" && "rgba(10,3,3,0.4)"};

`;

const NavList = styled.div`
display: flex;  z-index: 2;  
justify-content: ${props => props.desktop ? "right" : "space-around"}; 
align-items: center; position:"relative"; padding: 5px;
background-color: ${props => props.desktop ? "transparent" : "whitesmoke"};
flex-direction: ${props => props.orientation === "portrait" && "column"};
height: ${props => props.orientation === "portrait" && "100vh"}; 
width: ${props => props.desktop ? "95%" : "100%"};
border: none;
.link {
    color: ${props => props.desktop ? "whitesmoke" : "black"};
    font-weight: bold;
    margin: ${props => props.orientation === "portrait" ? "25px 0px" : "5px 20px"};
    padding: 2px 8px 5px 8px;
    border: 1px solid transparent;
    border-radius: 10px;
    :hover {
        color: black;
        background-color: whitesmoke;
        box-shadow: 0px 0px 5px 0px whitesmoke;
    }
}
.isHover {
    color: black;
    background-color: whitesmoke;
    box-shadow: 0px 0px 5px 0px whitesmoke;
}
`;

const Displayer = styled.button`
display: flex; 
align-items: center; 
justify-content: center; 
background-color: whitesmoke; 
margin-top: ${props => props.orientation !== "portrait" && "0px"};
margin-left: ${props => props.orientation === "portrait" && "-5px"};
border-radius: ${props => props.orientation === "portrait" ? "0% 90% 90% 0%" : "0 0 90% 90%"};
height: ${props => props.orientation === "portrait" ? "20vh" : "fit-content"};
width: ${props => props.orientation === "portrait" ? "fit-content" : "20vw"};
border: none;
.arrow {
    rotate: ${props => props.orientation === "portrait" && "-90"}deg;
    transform: translateY(2px);
    background-color: transparent;
}
.true {
    rotate: ${props => props.orientation === "portrait" ? "90" : "180"}deg
}
`;