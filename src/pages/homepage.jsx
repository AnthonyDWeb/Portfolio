// LIBRARY //
import React, { useEffect, useRef } from 'react';
// STYLE //
// CONTEXT //
// PAGE //
// COMPONENT //
import TextLoad from '../components/loader/loader-text';
import Intersection from '../components/Insersection/intersection';
import RotateCard from '../components/cards/rotate-card/rotateCard';
// OTHER //

export default function Homepage({ device }) {
  const refs = useRef([]);
  const titleRef = useRef();

  const subtitle1 = "Une idée ? Un projet ?";
  const subtitle2 = "La création d'un site web ou d'une application mobile ?";
  const subtitle3 = "Donnez vie à tous vos projets !";
  const titles = [subtitle1, subtitle2, subtitle3];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach(el => el.isIntersecting && el.target.classList.add("active")));
    titles.forEach((t, i) => observer.observe(refs.current[i]));
    observer.observe(titleRef.current);
  })

  const MainTitle = () => {
    const titleJob = device.width < 480 ? "Développeur Web & Mobile" : "Développeur Web & Mobile FullStack";
    return (
      <Intersection refObserver={titleRef} addClass={device.isMobile ? "bottom" : "top"}>
        <div className="main-title-container">
          <TextLoad label={"main-title name"} text={"Anthony Delforge"} />
          <h2 className='main-title job'>{titleJob}</h2>
        </div>
      </Intersection>
    )
  };

  const SubTitles = () => {
    return (
      <div className="subtitle-container">
        {titles.map((t, i) => {
          const currRef = (e) => { refs.current[i] = e };
          return (
            <Intersection key={`as-${i}`} refObserver={currRef} addClass={"right intersection-container"}>
              <h3 className='animate-subtitle'>{t}</h3>
            </Intersection>
          )
        })}
      </div>
    )
  };

  return (
    <section id='homepage' className={`page ${device.name}`}>
      <RotateCard/>
      <div className='title-container'>
        <MainTitle />
        <SubTitles />
      </div>
    </section>
  )
}