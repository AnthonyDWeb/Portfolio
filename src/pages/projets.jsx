// LIBRARY //
import React, { useEffect, useRef } from 'react';
// STYLE //
// CONTEXT //
// PAGE //
// COMPONENT //
import Intersection from '../components/Insersection/intersection';
// OTHER //
import dataProjects from '../utils/data/projects.json';

export default function Projets({ device }) {
  const titleRefs = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach(el => el.isIntersecting && el.target.classList.add("active")));
    observer.observe(titleRefs.current);
  })

  // ----------------------------- FUNCTION -----------------------------

  // ----------------------------- RENDER -----------------------------
  const IconLink = ({ url }) => {
    return (
      <a href={url} className='project-link' target='_blank' rel="noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="project-link-icon feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3" fill="black"></line></svg>
      </a>
    )
  }

  const ProjectGalery = () => {
    const hiddenProject = ["Backery", "PokeDex", "Wheather App","Fight Calculator"];
    return device.name && (
      <div className='projects-galery'>
        {dataProjects.map((p, i) => {
          const imgSrc = require(`../assets/projects/${device.name}/${p.source}`);
          const isNotHidden = !hiddenProject.includes(p.Titre);
          return isNotHidden && (
            <div key={p.Titre} className='container'>
              <img className='project-image' id={p.source} src={imgSrc} alt={p.Titre} />
              <p className='project-information'>Description: {p.Description}</p>
              <IconLink url={p.Url} />
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div id='project' className={`page ${device.name}`}>
      <Intersection refObserver={titleRefs} addClass={"bottom"}>
        <h2 id='project-title' className='title-page'>Mes projets</h2>
      </Intersection>
      <ProjectGalery />
    </div >
  )
}