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
import { projects } from '../../utils/other/project-datalist';
// import useDevice from '../../utils/hooks/useDevice';
SwiperCore.use([EffectCube, Navigation, Pagination]);

export default function SwiperComponent(props) {
    // const { device } = useDevice();
    const effects = { shadow: true, slideShadows: false, shadowOffset: 20, shadowScale: 0.94 };


    return (
        <div className="container">
            <Swiper effect='cube' grabCursor={true} cubeEffect={effects} loop={false} pagination={{ clickable: true }} slidesPerView={3}>
                {projects?.map(d => {
                    const imgSrc = require(`../../assets/projects/${d.source}`);
                    return (
                        <SwiperSlide key={d.source}>
                            <a href={d.link} target="_blank" rel="noreferrer"><img src={imgSrc} alt="slide_image" /></a>
                            <h4 style={{ color: "white", margin: "0.5rem 0" }}>{d.title}</h4>
                                <p style={{ color: 'white', marginBottom: "0.5rem" }}><span style={{ marginRight: "0.5rem", textDecoration: "underline" }}>Technologie:</span><br />{d.technology}</p>
                                <p style={{ color: 'white', marginBottom: "0.5rem" }}><span style={{ marginRight: "0.5rem", textDecoration: "underline" }}>Description:</span><br />{d.description}</p>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}