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
  const { PageContainer, pageContainerStyle, isLoad } = useContext(StyleContext);

  return (isLoad &&
    <PageContainer style={{ ...pageContainerStyle }} id='portfolio'>
      <GlassmorphismComponent width={"90vw"} height={"auto"}>
        <h2>Portfolio</h2>
        <SwiperComponent />
      </GlassmorphismComponent>
    </PageContainer>
  )
};
