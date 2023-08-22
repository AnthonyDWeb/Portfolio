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
// OTHER //

export default function Projets() {
  const { PageContainer, pageContainerStyle, sectionTitle, isLoad } = useContext(StyleContext);

  return (isLoad &&
    <PageContainer style={{ ...pageContainerStyle }} id='portfolio' className={"animate__animated animate__backIn"}>
      <GlassmorphismComponent width={"90vw"} height={"auto"}>
        <h2 style={sectionTitle}>Portfolio</h2>
        <SwiperComponent />
      </GlassmorphismComponent>
    </PageContainer>
  )
};
