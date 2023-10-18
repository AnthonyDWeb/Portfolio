import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import 'animate.css';
import { DeviseContext } from '../../contexts/devise';
import { ThemeContext } from '../../contexts/theme.context';
import Toggle from '../toggle';
import GlassmorphismComponent from '../glassmorphism/glassmorphism-component';
import ButtonMenu from '../menu-Button';

export default function NavigationBar() {
    const { device, isMobile, screenSize } = useContext(DeviseContext);
    const { theme, setTheme, themeColor } = useContext(ThemeContext);
    const [display, setDiplay] = useState(false);

    const MenuButton = ({ title, classname, id }) => {
        const handle = () => { if (isMobile) setDiplay(!display) };
        return (
            <div className="linkContainer" onClick={() => handle()}>
                <a href={id} className={`link ${classname}`}>{title}</a>
            </div>
        )
    };
    return (
        <NavBar className='animate__animated animate__fadeIn  animate__delay-3s' device={device} mobile={isMobile} display={display} background={themeColor.navbar}>
            <GlassmorphismComponent
                height={(!isMobile || display) ? "auto" : "5vw"}
                width={(!isMobile || display) ? "90vw" : "5vw"}
                rad={(isMobile && !display) ? "50%" : undefined}
                background={(display || !isMobile) ? "transparent" : themeColor.navbar}
                addStyle={{ marginRight: (isMobile && !display) && "10px" }}
            >
                <NavList themeColor={themeColor.text} device={device} mobile={isMobile} display={display} background={!display && themeColor.background}>
                    {isMobile &&
                        <div style={{ display: "flex", width: display && "100%", justifyContent: display && "flex-end" }}>
                            <ButtonMenu display={display} action={() => setDiplay(!display)} />
                        </div>
                    }
                    {(!isMobile || display) &&
                        <>
                            <MenuButton title={"Acceuil"} id={"#homepage"} />
                            <MenuButton title={"Outils"} id={"#tools"} />
                            <MenuButton title={"Portfolio"} id={"#portfolio"} />
                            <MenuButton title={"A propos de moi"} id={"#about_me"} />
                            <MenuButton title={"Contact"} id={"#contact"} />
                            <Toggle mobile={isMobile} theme={theme} action={() => setTheme(theme === "Spécial" ? "Sombre" : "Spécial")} />
                        </>
                    }
                </NavList>
            </GlassmorphismComponent>
        </NavBar>
    )
}


const NavBar = styled.nav`display: flex;  padding-top: 10px;
position: fixed; left: 5%;
z-index: 12;
justify-content: ${props => (props.device !== "mobile" || props.display) ? "center" : "flex-end"};
backdrop-filter: blur(${props => (!props.mobile || props.display) ? "15px" : "0px"});
border-radius: 20px;
width: 90vw;
margin: auto;
`;

const NavList = styled.div`
display: flex;  z-index: 2; position: relative;  border: none;
padding: ${props => (!props.mobile || props.display) ? "0px" : "0 3px"};
width: ${props => (!props.mobile || props.display) ? "100%" : "5vw"};
flex-direction: ${props => props.device == "mobile" && "column"};
height:100%;
justify-content: space-around;
align-items: center;
.linkContainer {margin: 5px 0px; text-align: center; position: relative;}
.link {
    color: ${props => props.themeColor && props.themeColor};
    font-weight: bold; padding: 5px 8px 5px 8px; border: none; border-radius: 10px;
    :hover {
        color: black; cursor: pointer; background-color: #37FF8B; 
        filter: drop-shadow(0 0 23px #37FF8B); -webkit-text-stroke: 0.3px #37FF8B;
        box-shadow: 0px 0px 15px 0px #37FF8B;
    }
}
`;