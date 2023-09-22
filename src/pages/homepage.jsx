// LIBRARY //
import React, { useContext } from 'react';
import styled from 'styled-components';
// STYLE //
import '../App.css';
import 'animate.css';
// CONTEXT //
import { StyleContext } from '../contexts/style.context';
import { ThemeContext } from '../contexts/theme.context';
import { DeviseContext } from '../contexts/devise';
// PAGE //
// COMPONENT //
import BugButton from '../components/bug-Button';
import DownloadIcone from '../components/icons/download';
import HighlighText from '../components/HighlighText';
// OTHER //
import { mainTitleClass1, mainTitleClass2, mainTitleClass3, mainTitle1, mainTitle2, mainTitle3, profilClass, profilTitle1, profilTitle2, btnText } from '../utils/other/constante';
import CV from '../downloads/CV_Anthony_DELFORGE.pdf';

export default function Homepage() {
  // const { orientation, isDesktop } = useDevice();
  const { orientation, device } = useContext(DeviseContext);
  const { themeColor } = useContext(ThemeContext);
  const { PageContainer } = useContext(StyleContext);

  return (
    <PageContainer id="homepage">
      <MainTitle device={device} themeColor={themeColor.text}>
        <span className={`${mainTitleClass1} end`}>{mainTitle1}</span>
        <span className={mainTitleClass2}>{mainTitle2}</span>
        <span className={`${mainTitleClass3} end`}>{mainTitle3}</span>
      </MainTitle>
      <Profil orientation={orientation} device={device} className={profilClass} themeColor={themeColor.text}>
        <div className='profil-container'>
          <img src={require("../assets/profil-image.png")} alt="profil" className='profil-image' />
          <div className='profil-title'>
            <HighlighText text={profilTitle1} />
            <HighlighText text={profilTitle2} />
          </div>
        </div>
        <div className='profil-btn-container'>
          <BugButton addBefore={<DownloadIcone />} addstyle={{fontSize: device !== "desktop" && "3vw"}}>
            <a href={CV} download="CV_Anthony_DELFORGE" style={{ color: themeColor.text}}>{btnText}</a>
          </BugButton>
        </div>
      </Profil>
    </PageContainer>
  )
}

const MainTitle = styled.h1`
display: flex; flex-direction: column; width: 90%; font-size: ${props => props.device === "mobile" ? "4vw" : "3vw"}; margin-top: 30px;
>span { color: ${props => props.themeColor && props.themeColor}; }
>span.end {align-self: flex-end;}
`;

const Profil = styled.section`
display: flex; align-items: center; flex-direction: column; 
margin-top: ${props => props.device === "desktop" ? "0px" : "20px"};
.profil-container {
  display: flex; align-items: center; justify-content: center; 
  flex-direction: ${props => props.device === "desktop" ? "row" : "column"};
}
.profil-image {
  border-radius: 50%; opacity: 0.8; box-shadow: -5px -5px 15px 5px red, 5px 5px 15px 8px blue;
  width: ${props => props.device === "desktop" ? "15%" : props.device === "mobile" ? "40%" : "30%"};
  
}
.profil-title {
  display: flex; flex-direction: column; margin-left: ${props => props.device === "desktop" && "30px"};
  margin-top: ${props => props.device !== "desktop" && "20px"};
  align-items: ${props => props.device === "desktop" ? "flex-start" : "center"};
}
.profil-btn-container {
  display: flex; width: 100%; justify-content: center; 
  margin-top: ${props => props.device !== "desktop" && "20px"}
}
`;