// LIBRARY //
import React, { useEffect, useRef } from 'react';
// STYLE //
// CONTEXT //
// PAGE //
// COMPONENT //
import Intersection from '../components/Insersection/intersection';
import Glasscard from '../components/cards/glass-card/glasscard';
// OTHER //

export default function Tools({device}) {
  const refs = useRef([]);

  const toolsArr = [
    { imgFileName: "bootstrap.png", imgLabel: "Bootstrap" },
    { imgFileName: "jquery.png", imgLabel: "Jquery" },
    { imgFileName: "typescript.png", imgLabel: "Typescript" },
    { imgFileName: "react.png", imgLabel: "React/Native" },
    { imgFileName: "expressJS.webp", imgLabel: "ExpressJs" },
    { imgFileName: "nodejs.png", imgLabel: "NodeJs" },
    { imgFileName: "nestjs.png", imgLabel: "NestJs" },
    { imgFileName: "mongoDB.svg", imgLabel: "MongoDB" },
    { imgFileName: "mysql.png", imgLabel: "Mysql" },
    { imgFileName: "figma.png", imgLabel: "Figma" },
    { imgFileName: "trello.png", imgLabel: "Trello" },
    { imgFileName: "slack.png", imgLabel: "Slack" },
    { imgFileName: "notion.png", imgLabel: "Notion" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach(el =>
      el.isIntersecting ? el.target.classList.add("active") : el.target.classList.remove("active")
    ));
    toolsArr.forEach((t, i) => observer.observe(refs.current[i]))
  })


  return (
    <div id='tools' className={`page ${device.name}`}>
      <h2 className='title-page'>Mes outils</h2>
      <section className='tools-section'>
        {toolsArr.map((t, index) => {
          const currRef = (e) => { refs.current[index] = e };
          const newStyle = { transitionDelay: "0.2s" };
          return (
            <Intersection key={t.imgLabel} refObserver={currRef} addClass={"fadein"} addStyle={newStyle}>
                <Glasscard hoverIt addClass={"tools-container"}>
                  <img className='tools-icon' src={require(`../assets/toolsIcone/${t.imgFileName}`)} alt={t.imgLabel} />
                  <p className='tools-label'>{t.imgLabel}</p>
                </Glasscard>
            </Intersection>
          )
        })}
      </section>
    </div>
  )
}