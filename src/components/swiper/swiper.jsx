import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

export default function SwiperGalery({ children, width, data, show, margin }) {
    const [selected, setSelection] = useState(0);
    const elRef = useRef();
    const posRef = useRef(0);
    const scroll = (width / show) + margin;
    console.log("scroll", scroll);
    const arrowImg = require("../../assets/icon-arrow-down.webp");


    useEffect(() => {
        const el = elRef.current;
        if (el) {
            const onWheel = e => {
                if (e.deltaY === 0) return;
                e.preventDefault();
                if (e.deltaY > 0 && posRef.current < 7) {
                    posRef.current = posRef.current + 1;
                } else if (e.deltaY < 0 && posRef.current > 0) {
                    posRef.current = posRef.current - 1;
                }
                const newPos = posRef.current;
                el.scrollTo({
                    left: newPos * scroll,
                    behavior: "smooth"
                });
                if (newPos <= 7 && newPos >= 0) setSelection(newPos);
            };
            el.addEventListener("wheel", onWheel);
            return () => el.removeEventListener("wheel", onWheel);
        }
    }, [scroll]);

    const scrollChange = (value) => {
        const el = elRef.current;
        if (selected >= 0 && value > 0 && selected < 7) setSelection(selected + 1);
        if (selected > 0 && value < 0) setSelection(selected - 1);
        el.scrollTo({
            left: el.scrollLeft + value,
            behavior: "smooth"
        });
    };

    const Bullets = () => {
        return data.map((e, i) => {
            const isSelected = selected === i;
            const spanClass = `bullet ${isSelected && "selected"}`
            return <span key={`bullet-${i}`} className={spanClass} onClick={() => handlePagination(i)} />
        })
    };

    const handlePagination = (value) => {
        const el = elRef.current;
        el.scrollTo({
            left: value * scroll,
            behavior: "smooth"
        });
        posRef.current = value;
        setSelection(value);
    };

    return (
        <Swiper>
            <SwiperContainer>
                <ScrollButton onClick={() => scrollChange(-scroll)}>
                    <Arrow src={arrowImg} className='left' alt='' />
                </ScrollButton>
                <SwiperWrapper ref={elRef}>{children}</SwiperWrapper>
                <ScrollButton onClick={() => scrollChange(scroll)}>
                    <Arrow src={arrowImg} className='right' alt='' />
                </ScrollButton>
            </SwiperContainer>
            <Pagination>
                <Bullets />
            </Pagination>
        </Swiper>
    )
}

const Swiper = styled.div`
display: flex; 
flex-direction: column; 
align-items: center;
width: 100%;
`;

const SwiperContainer = styled.div`
display: flex;
justify-content: center;
justify-content: space-between;
align-items: center;
width: 100%;
`;

const SwiperWrapper = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
position: relative;
height: fit-content;
max-width: 95%;
overflow: scroll;
padding: 5vh 0;

&::-webkit-scrollbar {
    display: none;
}
`;

const ScrollButton = styled.button`
display: flex;
justify-content: center;
align-center: center;
height: fit-content;
border-radius: 50%;
padding: 0.5rem;

`;

const Arrow = styled.img`
width: 40px;
aspect-ratio: 1/1;
background-image: url("../../assets/icon-arrow-down.webp");
    &.left {
        transform: rotate(90deg);
    }
    &.right {
        transform: rotate(-90deg);
    }
`;

const Pagination = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 20px;
height: 20px;
min-width: 50%;
border-radius: 10px;
background-color: rgba(0, 0, 0, 0.611);

& .bullet {
width: 8px;
margin-inline: 10px;
aspect-ratio: 1/1;
border-radius: 50%;
cursor: pointer;
background-color: aliceblue;
transition: all 0.5s ease;

    &.selected {
        background-color: blue;
    }
}
`;