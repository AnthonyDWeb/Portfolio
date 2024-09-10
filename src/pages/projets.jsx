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

  const dataList1 = device.isTablet ? dataProjects.slice(0, 2) : dataProjects.slice(0, 4);
  const dataList2 = device.isTablet ? dataProjects.slice(2, 4) : dataProjects.slice(4);
  const dataList3 = dataProjects.slice(4, 6);
  const dataList4 = dataProjects.slice(6, 8);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach(el => el.isIntersecting && el.target.classList.add("active")));
    observer.observe(titleRefs.current);
  })

  // ----------------------------- FUNCTION -----------------------------

  // ----------------------------- RENDER -----------------------------
  const IconLink = ({ url }) => {
    return (
      <a href={url} className='project-link' target='_blank' rel="noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="red" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="project-link-icon feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3" fill="blue"></line></svg>
      </a>
    )
  }

  const ProjectGalery = ({ data }) => {
    return (
      <div className='projects-galery'>
        {data.map((p, i) => {
          const imgSrc = require(`../assets/projects/${device.name}/${p.source}`);
          return (
            <div key={p.Titre} className='project-container'>
              <img className='project-image' id={p.source} src={imgSrc} alt={p.Titre} />
              <h2 className='project-title'>{p.Titre}</h2>
              <p className='project-information'>Description: {p.Description}</p>
              <p className='project-information'>Technologie(s): {p["Technologie(s)"]}</p>
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
      {device.name && <>
        <ProjectGalery data={dataList1} />
        <ProjectGalery data={dataList2} />
        {device.isTablet && <>
          <ProjectGalery data={dataList3} />
          <ProjectGalery data={dataList4} />
        </>}
      </>}
    </div >
  )
}