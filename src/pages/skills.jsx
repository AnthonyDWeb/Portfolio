// LIBRARY //
import React, { useEffect, useRef } from 'react';
// STYLE //
// CONTEXT //
// PAGE //
// COMPONENT //
import Intersection from '../components/Insersection/intersection';
// OTHER //
import toolsData from "../utils/data/tools.json";

export default function MySkills({ device }) {
  const titleRefs = useRef();
  const webintegrationRefs = useRef();
  const clientsideRefs = useRef();
  const serversideRefs = useRef();
  const databaseRefs = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach(el => el.isIntersecting && el.target.classList.add("active")));
    observer.observe(titleRefs.current);
    observer.observe(webintegrationRefs.current);
    observer.observe(clientsideRefs.current);
    observer.observe(serversideRefs.current);
    observer.observe(databaseRefs.current);
  })

  const getSkills = () => {
    const typeSkills = [];
    toolsData.forEach(s => {
      const exist = typeSkills.findIndex(e => e.name === s.type) !== -1;
      !exist && typeSkills.push({ name: s.type, list: [] });
      const index = typeSkills.findIndex(e => e.name === s.type);
      typeSkills[index].list.push(s);
    })
    return typeSkills;
  }

  const Skills = () => {
    const dataSkills = getSkills();
    return dataSkills.map((ds, i) => {
      const isItegration = ds.name === "Web integration";
      const isClientSide = ds.name === "Front-end";
      const isServerSide = ds.name === "Server side";
      const currentRef = isItegration ? webintegrationRefs
        : isClientSide ? clientsideRefs
          : isServerSide ? serversideRefs
            : databaseRefs;
      const containerStyle = {};
      const listStyle = {};
      return (
        <Intersection key={ds.name} refObserver={currentRef} addClass={"fadein skills-container"} addStyle={containerStyle}>
          <h3 className='skills-type'>{ds.name}</h3>

          <div className='skill-list-container' style={listStyle}>
            {ds.list.map(l => {
              return (
                <div key={l.imgLabel} className='skill-container'>
                  <img className='skill-icon' src={require(`../assets/skillsIcone/${l.imgFileName}`)} alt={l.imgLabel} />
                  <p className='skill-label'>{l.imgLabel}</p>
                </div>
              )
            })}
          </div>
        </Intersection>
      )
    });
  }


  return (
    <div id='skills' className={`page ${device.name}`}>
      <Intersection refObserver={titleRefs} addClass={"bottom"}>
        <h2 className='title-page'>Mes Compétences</h2>
      </Intersection>
      <section className='skills-section'>
        <Skills />
      </section>
    </div>
  )
}