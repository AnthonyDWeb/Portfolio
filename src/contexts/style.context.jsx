import React, { createContext, useState, useEffect, useContext } from "react";
import styled from 'styled-components';
import useDevice from "../utils/hooks/useDevice";
import { ThemeContext } from "./theme.context";

export const StyleContext = createContext({});
export const StyleProvider = props => {
  const { isMobile, isTablet, isDesktop } = useDevice();
  const { themeColor } = useContext(ThemeContext);
  const [isLoad, setLoad] = useState(false);
  const [showMore, setShow] = useState(false);

  useEffect(() => { setTimeout(() => setLoad(true), 4500); }, []);
  // CONTAINER
  // const row = { display: "flex", flexDirection: "row", alignItems: "center" };
  // const column = { display: "flex", flexDirection: "column" };
  // const contentContainer = { display: "flex", alignItems: "start", width: "100%", };

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
padding-top: 20px;
`;

