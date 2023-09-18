// LIBRARY //
import React, { useContext } from 'react';
import styled from 'styled-components';
// STYLE //
import '../App.css';
import 'animate.css';
// CONTEXT //
import { StyleContext } from '../contexts/style.context';
import { ThemeContext } from '../contexts/theme.context';
// PAGE //
// COMPONENT //
// OTHER //
import useDevice from '../utils/hooks/useDevice';
import CV from '../downloads/CV_Anthony_DELFORGE.pdf';
import { animatedTitleClass1, animatedTitleClass2, animatedTitleClass3, animatedTitle1, animatedTitle2, animatedTitle3 } from '../utils/other/constante';

export default function Homepage() {
  const { orientation, isMobile, isTablet, isDesktop } = useDevice();
  const { theme, themeColor } = useContext(ThemeContext);
  const { PageContainer, pageContainerStyle, row, column, homeTitleStyle, homeTitle2Style, homeTitle3Style } = useContext(StyleContext);

  // TITLE
  const titleStyle = { ...homeTitleStyle, color: themeColor.mainTitle };
  const titleStyleEnd = { ...titleStyle, alignSelf: "flex-end" }

  // PROFILE
  const divContainerClass = "animate__animated animate__backInUp animate__delay-3s";
  const portraitMob = (isMobile && orientation === "portrait");
  const divContainerStyle = portraitMob ? { ...column, alignItems: "center" } : { ...row, justifyContent: "center" };
  const imageSize = isMobile ? 150 : isTablet ? 200 : 250;
  const imgStyle = { opacity: 0.8, width: imageSize, height: imageSize };
  let profileTitle = column;
  if (isMobile && orientation === "portrait") profileTitle = { ...profileTitle, alignItems: "center", marginTop: 20 }
  let profileText = { ...homeTitle2Style, fontFamily: "VT323, monospace", color: themeColor.mainTitle };
  if (isMobile && orientation === "portrait") profileText = { ...profileText, margin: "0px 10px" }

  return (
    <PageContainer style={pageContainerStyle} id="homepage">
      <MainTitle desktop={isDesktop}>
        <span className={animatedTitleClass1} style={titleStyleEnd}>{animatedTitle1}</span>
        <span className={animatedTitleClass2} style={titleStyle}>{animatedTitle2}</span>
        <span className={animatedTitleClass3} style={titleStyleEnd}>{animatedTitle3}</span>
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
            <a href={CV} download="CV_Anthony_DELFORGE" style={{ ...homeTitle3Style, fontFamily: "VT323, monospace", fontWeight: "bold", color: "white" }}>Télécharger mon CV</a>
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
background: linear-gradient(to left, blue, red); border: none; border-radius: 10px; padding: 10px; margin: 0px; width: fit-content;
>a { color: black; }
:hover { 
  background: linear-gradient(to left, red, blue); 
  >a { color: whitesmoke; }
}
`;
