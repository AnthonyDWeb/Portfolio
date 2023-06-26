// LIBRARY //
import React, { useContext, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow, EffectCards } from 'swiper';
// STYLE //
import '../App.css';
import 'swiper/css';
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
                spaceBetween={20}
                slidesPerView={2}
                loop={true}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSlideChange={(swiper) => console.log('slide change', swiper.slides)}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {data?.map(d =>
                    <SwiperSlide key={d.source} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <img src={require(`../assets/projects/${d.source}`)} alt="slide_image" style={{ height: "25rem", width: "fit-content", borderRadius: 5 }} />
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    )
}
