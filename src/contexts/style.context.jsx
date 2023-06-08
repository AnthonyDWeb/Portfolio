import React, { createContext, useState } from "react";
import styled from 'styled-components';
import useDevice from "../utils/hooks/useDevice";

export const StyleContext = createContext({});
export const StyleProvider = props => {
  const { isMobile, isTablet, isDesktop } = useDevice();
  const [theme,setTheme] = useState();

  // CONTAINER
  const row = { display: "flex", flexDirection: "row", alignItems: "center" };
  const column = { display: "flex", flexDirection: "column" };
  const pageContainerStyle = {padding: isDesktop ? "50px 0px" : "20px 0px"};

  // TITLE
  const titleStyle = { fontSize: isMobile ? "4vw" : isTablet ? "3vw" : "3vw", marginBottom: "30px" };
  const title2Style = { fontSize: isMobile ? "3.5vw" : isTablet ? "2.5vw" : "3vw", margin: "10px 30px", };
  const title3Style = { fontSize: isMobile ? "2.5vw" : isTablet ? "2vw" : "1.5vw", };

  const styleContextValue = { PageContainer, pageContainerStyle, row, column, titleStyle, title2Style, title3Style }
  return <StyleContext.Provider value={styleContextValue} {...props} />
};

const PageContainer = styled.div`
position: relative; 
display: flex; 
flex-direction: column; 
justify-content: center; 
align-items: center; 
overflow: hidden; 
`;
