import React, { useContext } from 'react';
import styled from 'styled-components';
import { DeviseContext } from '../../contexts/devise';
import { ThemeContext } from '../../contexts/theme.context';


export default function GlassmorphismComponent({ children, height, width, space, justify, blur, shadow, background, rad, addStyle, addClass, action }) {
    const { orientation, device, isMobile } = useContext(DeviseContext);
    const { theme, themeColor } = useContext(ThemeContext);

    const cardStle = { background: background ? background : themeColor.glasscard, border: `solid 1px rgba(0,0,0,0.1)`, ...addStyle };
    return (
        <Component 
        className={`glassComponent-${device}-${orientation} ${addClass}`} 
        height={height} width={width}
        space={space}
        justify={justify} 
        blur={blur} 
        shadow={shadow} 
        theme={theme} 
        radius={rad} 
        style={cardStle}
        mobile={isMobile}
        onClick={() => action && action()}
        >
            {children}
        </Component>
    )
}

const Component = styled.div`
display: flex; position: relative;
flex-direction: column;
align-items: center;
justify-content: ${props => props.justify && props.justify};
min-height: ${props => props.height && props.height};
min-width: ${props => props.width && props.width};
max-width: ${props => props.mobile ? "80vw" : "90vw"};
margin: ${props => props.space ? props.space : "0px"};
padding: ${props => props.space ? props.space : "10px"};
border-radius: ${props => props.radius ? props.radius : "15px"};
overflow: hidden;
backdrop-filter: blur(${props => props.blur ? `${props.blur}px` : "15px"});
box-shadow: ${props => props.theme === "Spécial" ? "0px 0px 15px rgb(55,255,139)" : "5px 5px 15px rgb(0,0,0)"};
box-shadow: ${props => props.theme === "Spécial" ? "0px 0px 15px rgb(55,255,139)" : "5px 5px 15px rgb(0,0,0)"};
text-align: justify;
`;
