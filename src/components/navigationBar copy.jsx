import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import 'animate.css';
import { DeviseContext } from '../contexts/devise';
// import GlassmorphismComponent from './glassmorphism/glassmorphism-component';
import { ThemeContext } from '../contexts/theme.context';
import Toggle from './toggle';

export default function NavigationBar() {
    const { orientation, isDesktop } = useContext(DeviseContext);
    const { theme, setTheme, themeColor } = useContext(ThemeContext);
    const [display, setDisplay] = useState(false);
    const [displayTheme, setDisplayTheme] = useState(false);
    const [btnHover, setBtnHover] = useState();

    const arrowSrc = require("../assets/icon-arrow-down.webp");
    const arrowStyle = { height: 20, width: 30 };

    console.log("display ->", display)

    const MenuButton = ({ title, classname, id }) => {
        return (
            <div className="linkContainer" style={{ margin: "5px 0", textAlign: "center", position: "relative", }}>
                <a
                    href={id}
                    className={`link ${classname}`}
                    style={{ color: btnHover === title ? "black" : themeColor.navtext }}
                    desktop={true}
                    background={`${themeColor.background}`}
                    onMouseEnter={() => setBtnHover(title)}
                    onMouseLeave={() => setBtnHover(undefined)}
                >
                    {title}
                </a>
            </div>
        )
    };

    return (
        <div className={`animate__animated animate__fadeIn  animate__delay-3s`} style={{ position: "fixed", zIndex: 12 }}>
            <NavBar orientation={`${orientation}`} desktop={isDesktop} style={{ backgroundColor: isDesktop ? themeColor.navbar : "transparent" }}>
                <NavList orientation={`${orientation}`} desktop={isDesktop} theme={themeColor.navlist}>
                    <MenuButton title={"Acceuil"} id={"#homepage"} />
                    <MenuButton title={"Outils"} id={"#tools"}  />
                    <MenuButton title={"Portfolio"} id={"#portfolio"}  />
                    <MenuButton title={"A propos de moi"} id={"#about_me"}  />
                    <MenuButton title={"Contact"} id={"#contact"}  />
                    <Toggle theme={theme} action={() => setTheme(theme === "Spécial" ? "Sombre" : "Spécial")} />
                </NavList>
            </NavBar>
        </div>
    )
}


const NavBar = styled.nav`
display: flex; align-items: center; 
flex-direction: ${props => props.orientation !== "portrait" && "column"};
height: ${props => props.orientation === "portrait" && "100vh"};
width: ${props => props.orientation === "portrait" ? "180px" : "100vw"};
background-color: ${props => props.desktop && "rgba(0,0,0,1)"};
padding: 5px 0;
`;

const NavList = styled.div`
display: flex;  z-index: 2;  
justify-content: ${props => props.desktop ? "right" : "space-around"}; 
align-items: center; position:"relative"; padding: 0px;
background-color: ${props => props.desktop ? "transparent" : props.theme};
// backdrop-filter: blur("15px");
flex-direction: ${props => props.orientation === "portrait" && "column"};
height: ${props => props.orientation === "portrait" && "100vh"}; 
width: ${props => props.desktop ? "95%" : "100%"};
border: none;
.link {
    color: ${props => props.desktop ? "whitesmoke" : "black"};
    font-weight: bold;
    margin: ${props => props.orientation === "portrait" ? "25px 0px" : "0px 20px"};
    padding: 5px 8px 5px 8px;
    border: 1px solid transparent;
    border-radius: 10px;
    :hover {
        color: black;
        background-color: #FDF8F8;
        opacity: 1 !important;
        box-shadow: 0px 0px 5px 0px whitesmoke;
        cursor: pointer;
    }
}
.isHover {
    color: black;
    background-color: whitesmoke;
    opacity: 1 !important;
    box-shadow: 0px 0px 5px 0px whitesmoke;
}
`;

const Displayer = styled.button`
display: flex; 
align-items: center; 
justify-content: center; 
background-color:  ${props => !props.desktop && props.theme};;
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