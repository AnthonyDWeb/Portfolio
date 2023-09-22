import React, { useContext } from 'react';
import styled from 'styled-components';
import { DeviseContext } from '../../contexts/devise';
import { ThemeContext } from '../../contexts/theme.context';


export default function GlassmorphismComponent({ children, height, width, space, justify, blur, shadow, background, rad }) {
    const { orientation, device } = useContext(DeviseContext);
    const { theme, themeColor } = useContext(ThemeContext);

    const cardStle = { background: themeColor.glasscard, border:`solid 1px rgba(0,0,0,0.1)` };
    return (
        <Component className={`glassComponent-${device}-${orientation}`} height={height} width={width} space={space} justify={justify} blur={blur} shadow={shadow} background={background} radius={rad} style={cardStle}>{children}</Component>
    )
}

const Component = styled.div`
display: flex; position: relative;
flex-direction: column;
align-items: center;
justify-content: ${props => props.justify && props.justify};
min-height: ${props => props.height && props.height};
min-width: ${props => props.width && props.width};
// max-height: 98vh;
max-width: 90vw;
margin: ${props => props.space ? props.space : "0px"};
padding: ${props => props.space ? props.space : "10px"};
// border-top: solid 1px rgba(255,255,255,0.5);
// border-left: solid 1px rgba(255,255,255,0.5);
border-radius: ${props => props.radius ? props.radius : "15px"};
overflow: hidden;
backdrop-filter: blur(${props => props.blur ? `${props.blur}px` : "15px"});
box-shadow: 5px 5px 15px rgba(0,0,0,1);
background: ${props => props.background && props.background};
text-align: justify;
`;
