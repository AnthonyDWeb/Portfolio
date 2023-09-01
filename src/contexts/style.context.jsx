import React, { createContext, useState, useEffect } from "react";
import styled from 'styled-components';
import useDevice from "../utils/hooks/useDevice";

export const StyleContext = createContext({});
export const StyleProvider = props => {
  const { isMobile, isTablet, isDesktop } = useDevice();
  const [isLoad, setLoad] = useState(false);
  const [showMore, setShow] = useState(false);

  useEffect(() => { setTimeout(() => setLoad(true), 4500); }, []);
  // CONTAINER
  const row = { display: "flex", flexDirection: "row", alignItems: "center" };
  const column = { display: "flex", flexDirection: "column" };
  const pageContainerStyle = { padding: isDesktop ? "50px 0px" : "20px 0px" };
  const contentContainer = { display: "flex", alignItems: "start", width: "100%", };

  // TITLE
  const homeTitleStyle = { fontSize: isMobile ? "4vw" : isTablet ? "3vw" : "3vw", marginBottom: "30px" };
  const homeTitle2Style = { fontSize: isMobile ? "3.5vw" : isTablet ? "2.5vw" : "3vw", margin: "10px 30px", };
  const homeTitle3Style = { fontSize: isMobile ? "2.5vw" : isTablet ? "2vw" : "1.5vw", };
  const sectionTitle = { marginBottom: "20px" };

  const styleContextValue = { PageContainer, pageContainerStyle, row, column, homeTitleStyle, homeTitle2Style, homeTitle3Style, sectionTitle, contentContainer, isLoad, setLoad, showMore, setShow, };
  return <StyleContext.Provider value={styleContextValue} {...props} />
};

// make a style for H2 title with down space (10px)

const PageContainer = styled.div`
position: relative; 
display: flex; 
flex-direction: column; 
justify-content: center; 
align-items: center; 
overflow: hidden; 
`;
