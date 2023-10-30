import React, { createContext, useState, useEffect } from "react";
import styled from 'styled-components';

export const StyleContext = createContext({});
export const StyleProvider = props => {
  const [isLoad, setLoad] = useState(false);

  useEffect(() => { setTimeout(() => setLoad(true), 4500); }, []);

  const styleContextValue = { PageContainer, isLoad };
  return <StyleContext.Provider value={styleContextValue} {...props} />
};

const PageContainer = styled.div`
position: relative; 
display: flex; 
flex-direction: column; 
justify-content: center; 
align-items: center; 
overflow: hidden; 
padding: ${props => props.mobile ? "30px 0 20px 0" : "50px 0 20px 0"};
`;

