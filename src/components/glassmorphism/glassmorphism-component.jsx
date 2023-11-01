import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../contexts/theme.context';


export default function GlassmorphismComponent({ children, addStyle, action, addClass }) {
    const { theme } = useContext(ThemeContext);
    return <Component className={addClass} style={addStyle} theme={theme} onClick={() => action && action()}>{children}</Component>;
}

const Component = styled.div`
position: relative; 
overflow: hidden; 
text-align: justify;
display: flex; 
flex-direction: column; 
align-items: center; 
justify-content: flex-start;
max-width: 90vw; 
padding: 2vh 2vw; 
border-radius: 15px;
background-color: rgba(255,255,255,0.1);
backdrop-filter: 15px; 
box-shadow: ${props => props.theme.default ? "5px 5px 15px rgb(0,0,0)" : `0px 0px 15px ${props.theme.border}`};
`;