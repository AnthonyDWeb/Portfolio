// LIBRARY //
import React, { useContext } from 'react';
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
  const { PageContainer, pageContainerStyle, isLoad } = useContext(StyleContext);
  const { theme } = useContext(ThemeContext);
  const { width, device } = useDevice();

  const nbImages = device === "desktop" ? 3 : 1;

  const Front = ({ e }) => <img className='front' src={require(`../assets/projects/${e.source}`)} alt="" />;
  const Back = ({ e }) => {
    return (
      <div className='back'>
        <h2>{e.title}</h2>
        <p>{e.description}</p>
      </div>
    )
  }

  // FIX ISSUE SIZE IMAGES

  return (isLoad &&
    <PageContainer style={{ ...pageContainerStyle }} id='portfolio' className={"animate__animated animate__backIn"}>
      <GlassmorphismComponent addStyle={{maxWidth: "100vw"}}>
        <h2 style={{ color: theme.text }}>Portfolio</h2>
        <SwiperGalery show={nbImages} width={width * 0.9} margin={20} data={projects}>
          {projects.map(e =>
            <FlipCard key={e.title} width={(width * 0.9 / nbImages)} >
              <Front e={e} />
              <Back e={e} />
            </FlipCard>
          )}
        </SwiperGalery>
      </GlassmorphismComponent>
    </PageContainer>
  )
};
