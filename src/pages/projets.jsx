// LIBRARY //
import React, { useContext, useState } from 'react';
// STYLE //
import '../App.css';
// CONTEXT //
import { StyleContext } from '../contexts/style.context';
// PAGE //
// COMPONENT //
import GlassmorphismComponent from '../components/glassmorphism/glassmorphism-component';
import { ThemeContext } from '../contexts/theme.context';
import { projects } from '../utils/other/project-datalist';
import useDevice from '../utils/hooks/useDevice';
import SwiperGalery from '../components/swiper/swiper';
import { FlipCard } from '../components/filpCard/flipCard';
// OTHER //

export default function Projets() {
  const { PageContainer, isLoad } = useContext(StyleContext);
  const { theme } = useContext(ThemeContext);
  const { width, device } = useDevice();
  const [display, setDisplay] = useState({ card: true, description: undefined });
  const pageAnim = 'animate__animated animate__backIn';
  const arrowImg = require("../assets/icon-arrow-down.webp");
  const deviceWidth = width * (device === "desktop" ? 0.65 : 0.58);

  const Title = () => {
    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        <h2 style={{ color: theme.text }}>Portfolio</h2>
        {device !== "desktop" &&
          <img className={`title-arrow ${display.card}`} src={arrowImg} alt="" onClick={() => setDisplay({ ...display, card: !display.card })} />
        }
      </div>
    )
  };

  const Galery = () => projects.map(e => {
    const url = require(`../assets/projects/${device}/${e.source}`);
    const show = display.description === e.title;
    const handle = () => setDisplay({ ...display, description: show ? undefined : e.title });

    return (<div className='project-container' key={e.title}>
      <h3>{e.title}</h3>
      <p className={`detail ${show}`} onClick={() => handle()}>[<span>{`${show ? "-" : "+"} detail`}</span>]</p>
      {show && <p>{e.description}</p>}
      {display.card && <a href={e.link} rel="noreferrer" target="_blank" key={e.title}><img src={url} alt={`${e.title}`} /></a>}
      <div className='border-container' />
    </div>)
  });

  const SwipeGalery = () => {

    const Front = ({ e }) => {
      const imgSrc = require(`../assets/projects/${device}/${e.source}`);
      return imgSrc && <img className='front' src={imgSrc} alt="" />
    };
    const Back = ({ e }) => {
      return (
        <div className='back'>
          <h2>{e.title}</h2>
          <p>{e.description}</p>
        </div>
      )
    };

    return (
      <SwiperGalery show={1} width={deviceWidth} margin={20} data={projects}>
        {projects.map(e =>
          <a href={e.link} rel="noreferrer" target="_blank" key={e.title}>
            <FlipCard device={device} width={deviceWidth}>
              <Front e={e} />
              <Back e={e} />
            </FlipCard>
          </a>
        )}
      </SwiperGalery>
    )
  };


  return isLoad &&
    <PageContainer id='portfolio' className={pageAnim}>
      <GlassmorphismComponent>
        <Title />
        {device === "mobile" ? <Galery /> : <SwipeGalery />}
      </GlassmorphismComponent>
    </PageContainer>
};
