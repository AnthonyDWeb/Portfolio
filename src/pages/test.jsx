// LIBRARY //
import React, { useContext, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow, EffectCards, EffectCube } from 'swiper';
// STYLE //
import '../App.css';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-cube';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// CONTEXT //
// PAGE //
// COMPONENT //
import projectList from '../components/portfolio/data/project-datalist';
// OTHER //

export default function Test() {
    const [data, setData] = useState();

    useEffect(() => {
        const loadData = () => {
            const dataload = projectList();
            setData(dataload)
        };
        loadData();
    }, [])
    console.log("data", data);
    return (
        <div className="container">
            <h1 className="heading">Flower Gallery</h1>
            <Swiper
                effect={"cards"}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={3}
                modules={[EffectCards, Pagination, Navigation]}
                style={{overflow: "hidden", position: "relative"}}
            >
                {data?.map(d =>
                    <SwiperSlide key={d.source} style={{display: "flex", justifyContent: "center", backgroundColor: "transparent"}}>
                        <img src={require(`../assets/projects/${d.source}`)} alt="slide_image" style={{ height: "auto", width: "100%", borderRadius: 5 }} />
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    )
}
