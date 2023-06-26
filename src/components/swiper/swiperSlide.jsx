import React, { useState } from 'react';
import { Navigation, Pagination, EffectCoverflow, EffectCards } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './swiperSlide.css'
import 'swiper/css';
import 'swiper/css/bundle';
import ModelProjectCard from '../portfolio/portfolio-card';
import useDevice from '../../utils/hooks/useDevice';

export default function SwiperSlider(props) {
    const { isDesktop, horizontalScreen, device } = useDevice();
    const paginationClassname= `${device} ${horizontalScreen}`
    const [showActiveView, setShowActiveView] = useState(false)
    const activeView = () => setTimeout(() => setShowActiveView(true), 500); 

    return (
        <div className='container'>
                    <Swiper
                        modules={[Navigation, Pagination, EffectCoverflow, EffectCards]}
                        effect={"coverflow"}
                        navigation={(!isDesktop) && true}
                        centeredSlides={true}
                        slideToClickedSlide={true}
                        slidesPerView={window.innerWidth <= 768 ? 1 : 1}
                        loop={true}
                        grabCursor={true}
                        pagination={{ clickable: true }}
                        cardsEffect={{ depth: 0, modifier: 0, rotate: 100, stretch: 0 }}
                        loopPreventsSliding={true}
                        speed={1000}
                        onSlideChange={()=> activeView()}
                        className={`pagination ${paginationClassname}`}
                    >
                        
                        {props.data.map((data,i) => <SwiperSlide  key={data.source+i} onClick={() => setShowActiveView(false)}>
                            { ({isActive}) => isActive 
                                ? showActiveView && <ModelProjectCard link={data.link} source={data.source} title={data.title} colab={data.colab} description={data.description} technology={data.technology} responsive={data.responsive} />
                                : <img src={require(`../../assets/projects/${data.source}`)} name={data} alt={data.source} />
                            }      
                        </SwiperSlide>)}        
                    </Swiper>
                </div>
    )
}
