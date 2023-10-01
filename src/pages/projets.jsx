// LIBRARY //
import React, { useContext } from 'react';
// STYLE //
import '../App.css';
// CONTEXT //
import { StyleContext } from '../contexts/style.context';
// PAGE //
// COMPONENT //
import GlassmorphismComponent from '../components/glassmorphism/glassmorphism-component';
import SwiperComponent from '../components/swiper/swiper';
import { ThemeContext } from '../contexts/theme.context';
// OTHER //

export default function Projets() {
  const { PageContainer, pageContainerStyle, isLoad } = useContext(StyleContext);
  const { themeColor } = useContext(ThemeContext);

  return (isLoad &&
    <PageContainer style={{ ...pageContainerStyle }} id='portfolio' className={"animate__animated animate__backIn"}>
      <GlassmorphismComponent height={"auto"}>
        <h2 style={{color: themeColor.text}}>Portfolio</h2>
        <SwiperComponent />
      </GlassmorphismComponent>
    </PageContainer>
  )
};
