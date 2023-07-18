// LIBRARY //
import React, { useContext, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow, EffectCards, EffectCube } from 'swiper';
import styled from 'styled-components';
// STYLE //
import '../App.css';
import '../App.css';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-cube';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// CONTEXT //
import { StyleContext } from '../contexts/style.context';
// PAGE //
// COMPONENT //
import GlassmorphismComponent from '../components/glassmorphism/glassmorphism-component';
import projectList from '../components/portfolio/data/project-datalist';
// OTHER //
import useDevice from '../utils/hooks/useDevice';

export default function Projets() {
  const { PageContainer, pageContainerStyle, } = useContext(StyleContext);
  const { isMobile, isTablet, isDesktop, horizontalScreen } = useDevice();
  const [data, setData] = useState();
  const componentHeight = isMobile ? horizontalScreen ? "50vw" : "50vw" : isTablet ? horizontalScreen ? "65vw" : "65vh" : isDesktop && "80vh";

  useEffect(() => {
    const loadData = () => {
      const dataload = projectList();
      setData(dataload)
    };
    loadData();
  }, []);

  return (
    <PageContainer style={{...pageContainerStyle}} id='portfolio'>
      <GlassmorphismComponent width={"90vw"} height={"60vh"}>
          <h2>Portfolio</h2>
        <div className="container" style={{width: "100%",}}>
          <Swiper
           effect={'cube'}
           grabCursor={true}
           cubeEffect={{
             shadow: true,
             slideShadows: false,
             shadowOffset: 20,
             shadowScale: 0.94,
           }}
           loop={true}
            modules={[EffectCube, Pagination, Navigation]}
            style={{  position: "relative", paddingTop: 10, backgroundColor: "rgba(255,255,255,0.2)", borderRadius: 5}}
          >
            {data?.map(d =>
              <SwiperSlide key={d.source} style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%"}}>
                <img src={require(`../assets/projects/${d.source}`)} alt="slide_image" style={{ borderRadius: 5, width: "50vw", height: "auto", objectFit: "cover" }} />
              </SwiperSlide>
            )}
          </Swiper>
        </div>
      </GlassmorphismComponent>
    </PageContainer>
  )
};
