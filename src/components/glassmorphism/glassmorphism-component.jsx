import React, { useContext } from 'react';
import styled from 'styled-components';
import { DeviseContext } from '../../contexts/devise';


export default function GlassmorphismComponent({children,height,width,space,justify,blur,shadow, background}) {
    const { orientation, device } = useContext(DeviseContext);
    return (
            <Component className={`glassComponent-${device}-${orientation}`}  height={height} width={width} space={space} justify={justify} blur={blur} shadow={shadow} background={background}>{children}</Component>
    )
}

const Component = styled.div`
display: flex; position: relative;
flex-direction: column;
align-items: center;
justify-content: ${props => props.justify && props.justify};
max-height: ${props => props.height && props.height};
max-width: 90vw;
min-width: ${props => props.width && props.width};
margin: ${props => props.space ? props.space : "0px"};
padding: ${props => props.space ? props.space : "10px"};
background: rgba(255,255,255,0.051);
border-top: solid 1px rgba(255,255,255,0.5);
border-left: solid 1px rgba(255,255,255,0.5);
border-radius: 15px;
overflow: hidden;
backdrop-filter: blur(${props => props.blur ? `${props.blur}px` : "2.5px"});
box-shadow: ${props => props.shadow && `10px 10px 25px rgba(${props.shadow})`};
background: ${props => props.background && props.background};
text-align: justify;
`;
