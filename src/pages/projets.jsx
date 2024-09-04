// LIBRARY //
import React, { useEffect, useRef, useState } from 'react';
// STYLE //
// CONTEXT //
// PAGE //
// COMPONENT //
import Intersection from '../components/Insersection/intersection';
import Glasscard from '../components/cards/glass-card/glasscard';
// OTHER //
import dataProjects from '../utils/data/projects.json';

export default function Projets({ device }) {
  const [display, setDisplay] = useState(false);
  const refs = useRef([]);
  const titleRefs = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach(el =>
      el.isIntersecting ? el.target.classList.add("active") : el.target.classList.remove("active")
    ));
    device.name && dataProjects.forEach((t, i) => observer.observe(refs.current[i]));
    observer.observe(titleRefs.current);
  })

  // ----------------------------- FUNCTION -----------------------------
  const showDetail = (range) => {
    const els = document.querySelectorAll(`.projects-informations`);
    els[range].classList.add("show");
  };
  const hideDetail = (range) => {
    const els = document.querySelectorAll(`.projects-informations`);
    els[range].classList.remove("show");
  };


  // ----------------------------- RENDER -----------------------------

  const Projects = () => {
    return (
      <div className='projects'>
        {device.name && dataProjects.map((d, i) => {
          const currRef = (e) => { refs.current[i] = e };
          const newStyle = { transitionDelay: "0.2s" };
          const imgSrc = require(`../assets/projects/${device.name}/${d.source}`);
          return (
            <Intersection key={d.Titre} refObserver={currRef} addClass={"fadein project-container"} addStyle={newStyle}>
              <div className="project-image-container">
                <img className='project-image' id={d.source} src={imgSrc} alt={d.Titre} />
                <Glasscard addClass={"project-image-link"}>
                  <button className='project-image-link-label' onMouseEnter={() => showDetail(i)} onMouseLeave={() => hideDetail(i)}>
                    <a href={d.Url} target='_blank' rel="noreferrer">Voir le projet</a>
                  </button>
                </Glasscard>
              </div>
              <div className="test" />
              <ProjectCard data={d} />
            </Intersection>
          )
        })}
      </div>
    )
  };

  const ProjectCard = ({ data }) => {
    const project_field = Object.keys(data);

    return (
      <Glasscard addClass={'projects-informations'}>
        {project_field.map(p => {
          const isTitle = p === "Titre";
          const isNotException = p !== "source" && p !== "Url";
          const canDisplay = (!device.isMobile || display);
          return isNotException && (
            <div className='project-label' key={`${data.Titre}-${p}`}>
              {isTitle ?
                <p className='label-category-title'>{data[p]}</p>
                : canDisplay
                  ? <p><span className='label-category'>{p}:</span> {data[p]}</p>
                  : null
              }
            </div>
          )
        })}
        <button className='label-category-details' onClick={() => setDisplay(!display)}>{display ? "Afficher moins" : "Afficher plus"}</button>
      </Glasscard>
    )
  }

  return (
    <div id='project' className={`page ${device.name}`}>
      <Intersection refObserver={titleRefs} addClass={"bottom"}>
        <h2 id='project-title' className='title-page'>Mes projets</h2>
      </Intersection>
      <Projects />
    </div >
  )
}