import React from 'react';
import styled from 'styled-components';


export default function GlassmorphismComponent({ children, addStyle, action, addClass }) {
    return <Component className={addClass} style={addStyle} onClick={() => action && action()}>{children}</Component>;
}

const Component = styled.div`
position: relative; 
overflow: hidden; 
text-align: justify;
display: flex; 
flex-direction: column; 
align-items: center; 
justify-content: flex-start;
max-width: 100vw; 
padding: 10px 5vw; 
border: solid 1px rgba(0,0,0,0.1);
border-radius: 15px; 
background-color: transparent;
background-color: rgba(255,255,255,0.1);
backdrop-filter: 15px; 
box-shadow: 5px 5px 15px rgb(0,0,0);
`;