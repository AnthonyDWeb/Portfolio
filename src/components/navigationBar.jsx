import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import 'animate.css';
import { DeviseContext } from '../contexts/devise';

export default function NavigationBar() {
    const { orientation, isDesktop } = useContext(DeviseContext);
    const [display, setDisplay] = useState(false);


    const arrow = require("../assets/icon-arrow-down.webp");
    const arrowStyle = { height: 20, width: 30 }

    const MenuButton = ({ title, classname, id }) => {
        return (
            <div className="linkContainer" style={{ margin: "5px 0", textAlign: "center" }}>
                <a href={id} className={`link ${classname}`} onClick={() => setDisplay(!display)}>{title}</a>
            </div>
        )
    };


    return (
        <div className={`animate__animated animate__fadeIn  animate__delay-3s`} style={{ position: "fixed", zIndex: 10 }}>
            <NavBar orientation={`${orientation}`} desktop={isDesktop}>
                {(display || isDesktop) &&
                    <NavList orientation={`${orientation}`} desktop={isDesktop}>
                        <MenuButton title={"Acceuil"} id={"#homepage"} />
                        <MenuButton title={"Outils"} id={"#tools"} />
                        <MenuButton title={"Portfolio"} id={"#portfolio"} />
                        <MenuButton title={"A propos de moi"} id={"#about_me"} />
                        <MenuButton title={"Contact"} id={"#contact"} />
                    </NavList>
                }
                {!isDesktop && <Displayer orientation={`${orientation}`} onClick={() => setDisplay(!display)}
                >
                    <img src={arrow} style={arrowStyle} className={`arrow ${display}`} alt='' />
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
background-color: rgba(10,3,3,0.4);

`;

const NavList = styled.div`
display: flex;   justify-content: right; align-items: center; position:"relative"; padding: 5px;
background-color: ${props => props.desktop ? "transparent" : "whitesmoke"};
flex-direction: ${props => props.orientation === "portrait" && "column"};
height: ${props => props.orientation === "portrait" && "100vh"}; 
width: ${props => props.desktop ? "95%" : "100%"};
.link {
    color: whitesmoke;
    font-weight: bold;
    margin: ${props => props.orientation === "portrait" ? "25px 10px" : "5px 20px"};
    padding: 2px 8px 5px 8px;
    border: 1px solid transparent;
    border-radius: 10px;
    :hover {
        color: ${props => props.desktop ? "whitesmoke" : "black"};
        border: 1px solid ${props => props.desktop && "black"};
        box-shadow: 0px 0px 10px 0px white;
    }

}
`;

const Displayer = styled.button`
display: flex; 
align-items: center; 
justify-content: center; 
background-color: whitesmoke; 
margin-top: ${props => props.orientation !== "portrait" && "-5px"};
margin-left: ${props => props.orientation === "portrait" && "-5px"};
border-radius: ${props => props.orientation === "portrait" ? "0% 90% 90% 0%" : "0 0 90% 90%"};
height: ${props => props.orientation === "portrait" ? "20vh" : "fit-content"};
width: ${props => props.orientation === "portrait" ? "fit-content" : "20vw"};
border: none;
.arrow {
    rotate: ${props => props.orientation === "portrait" && "-90"}deg;
    background-color: transparent;
    margin-right: ${props => props.orientation === "portrait" && "-5px"};

}
.true {
    rotate: ${props => props.orientation === "portrait" ? "90" : "180"}deg
}
`;