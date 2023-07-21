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
SwiperCore.use([EffectCube, Navigation, Pagination]);

export default function SwiperComponent(props) {
const effects = { shadow: true, slideShadows: false, shadowOffset: 20, shadowScale: 0.94 };
    return (
        <div className="container">
            <Swiper effect='cube' grabCursor={true} cubeEffect={effects} loop={true} pagination={{ clickable: true }} navigation>
                {projects?.map(d =>
                    <SwiperSlide key={d.source}>
                        <img src={require(`../../assets/projects/${d.source}`)} alt="slide_image" />
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    )
}