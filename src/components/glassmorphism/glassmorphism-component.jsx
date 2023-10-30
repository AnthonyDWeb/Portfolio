import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../contexts/theme.context';


export default function GlassmorphismComponent({ children, addStyle, action }) {
    const { theme } = useContext(ThemeContext);
    return <Component style={addStyle} onClick={() => action && action()}>{children}</Component>;
}

const Component = styled.div`
position: relative; 
overflow: hidden; 
text-align: justify;
display: flex; 
flex-direction: column; 
align-items: center; 
justify-content: flex-start;
max-width: 80vw; 
padding: 10px 5vw; 
border: solid 1px rgba(0,0,0,0.1);
border-radius: 15px; 
backdrop-filter: 15px; 
box-shadow: 5px 5px 15px rgb(0,0,0);
`;