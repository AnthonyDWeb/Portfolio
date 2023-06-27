// LIBRARY //
import React, { useContext } from 'react';
import styled from 'styled-components';
// STYLE //
import '../App.css';
import 'animate.css';
// CONTEXT //
import { StyleContext } from '../contexts/style.context';
// PAGE //
// COMPONENT //
// OTHER //
import useDevice from '../utils/hooks/useDevice';
import CV from '../downloads/CV_Anthony_DELFORGE.pdf';

export default function Homepage() {
  const { orientation, isMobile, isTablet, isDesktop, device } = useDevice();
  const { PageContainer, pageContainerStyle, row, column, titleStyle, title2Style, title3Style } = useContext(StyleContext);

  // TITLE
  const span1TitleClass = "animate__animated animate__backInLeft animate__delay-1s";
  const span2TitleClass = "animate__animated animate__backInRight animate__delay-2s";
  const span3TitleClass = "animate__animated animate__backInLeft animate__delay-2s";
  const spanText1 = "Une idée ? Un projet ?";
  const spanText2 = "La création d'un site web ou d'une application mobile ?";
  const spanText3 = "Donnez vie à tous vos projets !";
  const titleEnd = { ...titleStyle, alignSelf: "flex-end" }

  // PROFILE
  const divContainerClass = "animate__animated animate__backInUp animate__delay-3s";
  const divContainerStyle = (isMobile && orientation === "portrait")
    ? { ...column, alignItems: "center" }
    : { ...row, justifyContent: "center" };
  const imageSize = isMobile ? 150 : isTablet ? 200 : 250;
  const imgStyle = { opacity: 0.8, width: imageSize, height: imageSize };
  let profileTitle = column;
  if (isMobile && orientation === "portrait") profileTitle = { ...profileTitle, alignItems: "center", marginTop: 20 }
  let profileText = { ...title2Style, fontFamily: "VT323, monospace" };
  if (isMobile && orientation === "portrait") profileText = { ...profileText, margin: "0px 10px" }

  return (
    <PageContainer style={pageContainerStyle} id="homepage">
      <MainTitle desktop={isDesktop}>
        <span className={span1TitleClass} style={titleEnd}>{spanText1}</span>
        <span className={span2TitleClass} style={titleStyle}>{spanText2}</span>
        <span className={span3TitleClass} style={titleEnd}>{spanText3}</span>
      </MainTitle>
      <Profil orientation={orientation}>
        <div className={divContainerClass} style={{ ...column, alignItems: "center" }}>
          <div style={divContainerStyle}>
            <img src={require('../assets/profil-image.png')} alt="profil" style={imgStyle} className='profil-image' />
            <h2 style={profileTitle}>
              <span style={profileText}>Anthony Delforge</span>
              <span style={profileText}>Développeur Web et Mobile Full-Stack</span>
            </h2>
          </div>
          <DownloadButton desktop={isDesktop}>
            <a href={CV} download="CV_Anthony_DELFORGE" style={{ ...title3Style, fontFamily: "VT323, monospace", fontWeight: "bold" }}>Télécharger mon CV</a>
          </DownloadButton>
        </div>
      </Profil>
    </PageContainer>
  )
}

const MainTitle = styled.h1`display: flex; flex-direction: column; width: 90%`;
const Profil = styled.section`
display: flex; align-items: center; flex-direction: column; margin-top: ${props => props.orientation && "10px"};
.profil-image {
  border-radius: 50%;
  box-shadow: -5px -5px 15px 5px red, 5px 5px 15px 8px blue;
}
`;
const DownloadButton = styled.button`
background: linear-gradient(to left, blue, red); border: none; border-radius: 10px; padding: 10px; margin: 10px; width: fit-content;
>a { color: black; }
:hover { 
  background: linear-gradient(to left, red, blue); 
  >a { color: whitesmoke; }
}
`;
