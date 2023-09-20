import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import 'animate.css';
import { DeviseContext } from '../contexts/devise';
// import GlassmorphismComponent from './glassmorphism/glassmorphism-component';
import { ThemeContext } from '../contexts/theme.context';

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
        const themeButton = id === "#theme";
        return (
            <div className="linkContainer" style={{ margin: "5px 0", textAlign: "center", position: "relative", }}>
                <a
                    href={id}
                    className={`link ${classname}`}
                    style={{ color: btnHover === title ? "black" : themeColor.navtext }}
                    onClick={() => themeButton && setDisplayTheme(!displayTheme)}
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
    const ThemeButton = ({ t }) => {
        const isTheme = (t === theme);
        const handle = () => { if (!isTheme) { setTheme(t); setDisplayTheme(!displayTheme) } };
        const tStyle = { position: "relative", textAlign: "center", opacity: (t === theme) ? 0.3 : 1 }
        return <p style={tStyle} onClick={() => handle()} className='link'>{t}</p>
    };

    return (
        <div className={`animate__animated animate__fadeIn  animate__delay-3s`} style={{ position: "fixed", zIndex: 12 }}>
            <NavBar orientation={`${orientation}`} desktop={isDesktop} style={{ backgroundColor: isDesktop ? themeColor.navbar : "transparent" }}>
                {(display || isDesktop) &&
                    <NavList orientation={`${orientation}`} desktop={isDesktop} theme={themeColor.navlist}>
                        {!displayTheme &&
                            <>
                                <MenuButton title={"Acceuil"} id={"#homepage"} classname={`${btnHover}isHover`} />
                                <MenuButton title={"Outils"} id={"#tools"} classname={`${btnHover}isHover`} />
                                <MenuButton title={"Portfolio"} id={"#portfolio"} classname={`${btnHover}isHover`} />
                                <MenuButton title={"A propos de moi"} id={"#about_me"} classname={`${btnHover}isHover`} />
                                <MenuButton title={"Contact"} id={"#contact"} classname={`${btnHover}isHover`} />
                            </>
                        }
                        <MenuButton title={`Thème (${theme})`} id={"#theme"} classname={display && "isHover"} />
                        {displayTheme &&
                            <>
                                <ThemeButton t={"Clair"} />
                                <ThemeButton t={"Sombre"} />
                                <ThemeButton t={"Spécial"} />
                            </>
                        }
                    </NavList>
                }
                {!isDesktop &&
                    <Displayer orientation={`${orientation}`} theme={themeColor.navlist} onClick={() => setDisplay(!display)}>
                        <img src={arrowSrc} style={arrowStyle} className={`arrow ${display}`} alt='' />
                    </Displayer>
                }
            </NavBar>
        </div>
    )
}


const NavBar = styled.nav`
display: flex; align-items: center; 
flex-direction: ${props => props.orientation !== "portrait" && "column"};
height: ${props => props.orientation === "portrait" && "100vh"};
width: ${props => props.orientation === "portrait" ? "180px" : "100vw"};
background-color: ${props => props.desktop && "rgba(0,0,0,0.9)"};

`;

const NavList = styled.div`
display: flex;  z-index: 2;  
justify-content: ${props => props.desktop ? "right" : "space-around"}; 
align-items: center; position:"relative"; padding: 0px;
background-color: ${props => props.desktop ? "transparent" : props.theme};
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
background-color:  ${props => !props.desktop &&   props.theme};;
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