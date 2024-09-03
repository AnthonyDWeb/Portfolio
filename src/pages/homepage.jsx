// LIBRARY //
import React from 'react';
// STYLE //
// CONTEXT //
// PAGE //
// COMPONENT //
import EclosionCard from '../components/cards/eclosion-card/eclosioncard';
import TextLoad from '../components/loader/loader-text';
// OTHER //

export default function Homepage({device}) {

  const MainTitle = () => {
    const titleJob = device.width < 480 ? "Développeur Web & Mobile" : "Développeur Web & Mobile FullStack";
    return (
      <div className="main-title-container">
        <TextLoad label={"main-title name"} text={"Anthony Delforge"} />
        <h2 className='main-title job'>{titleJob}</h2>
      </div>
    )
  };

  const SubTitles = () => {
    return (
      <div className="subtitle-container">
        <h3 className='animate-subtitle'>Une idée ? Un projet ?</h3>
        <h3 className='animate-subtitle'>La création d'un site web ou d'une application mobile ?</h3>
        <h3 className='animate-subtitle'>Donnez vie à tous vos projets !</h3>
      </div>
    )
  };

  return (
    <section id='homepage' className={`page ${device.name}`}>
      <EclosionCard />
      <div className='title-container'>
        <MainTitle />
        <SubTitles />
      </div>
    </section>
  )
}