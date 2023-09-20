// LIBRARY //
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, EffectCube } from "swiper";
// STYLE //
import '../../App.css';
import './swiper.css';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// OTHER
import { projects } from '../portfolio/project-datalist';
import useDevice from '../../utils/hooks/useDevice';
SwiperCore.use([EffectCube, Navigation, Pagination]);

export default function SwiperComponent(props) {
    // screenSize, isMobile, isTablet, isDesktop, orientation,
    const {  device } = useDevice();
    const effects = { shadow: true, slideShadows: false, shadowOffset: 20, shadowScale: 0.94 };
    // console.log(`screenSize: ${screenSize.height}/${screenSize.width} - device: ${device} - orientation: ${orientation}`);
    const imgHeight = device === "mobile" ? "500px" : "";
    return (
        <div className="container">
            <Swiper effect='cube' grabCursor={true} cubeEffect={effects} loop={true} pagination={{ clickable: true }} navigation>
                {projects?.map(d => {
                    const imgSrc = require(`../../assets/projects/${d.source}`);
                    return (
                        <SwiperSlide key={d.source}>
                            <img src={imgSrc} alt="slide_image"/>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}