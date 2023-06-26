// LIBRARY //
import React, { useContext, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow, EffectCards } from 'swiper';
import styled from 'styled-components';
// STYLE //
import '../App.css';
import 'swiper/css';
// CONTEXT //
import { StyleContext } from '../contexts/style.context';
// PAGE //
// COMPONENT //
import GlassmorphismComponent from '../components/glassmorphism/glassmorphism-component';
import SwiperSlider from '../components/swiper/swiperSlide';
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
  }, [])
  return (
    <PageContainer style={pageContainerStyle} id='portfolio'>
      <GlassmorphismComponent width={"100%"} >
        <h2>Portfolio</h2>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {data?.map((d,i) =>
            <SwiperSlide key={d.source}>
              <img src={require(`../assets/projects/${d.source}`)} name={d} alt={d.source} />
            </SwiperSlide>
          )}
        </Swiper>
      </GlassmorphismComponent>
    </PageContainer>
  )
};

{/* <SwiperSlider data={data} /> */ }
