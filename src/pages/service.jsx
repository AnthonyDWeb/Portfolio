import React, { useContext, useEffect, useRef } from 'react';
import Intersection from '../components/Insersection/intersection';
import servicesData from "../utils/data/services.json";
import { ThemeContext } from '../contexts/theme';

const Service = ({ device }) => {
  const { theme } = useContext(ThemeContext);
  const titleRefs = useRef();
  const card0Refs = useRef();
  const card1Refs = useRef();
  const card2Refs = useRef();
  const card3Refs = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach(el => el.isIntersecting && el.target.classList.add("active")));
    observer.observe(titleRefs.current);
    observer.observe(card0Refs.current);
    observer.observe(card1Refs.current);
    observer.observe(card2Refs.current);
    observer.observe(card3Refs.current);
  })

  const ServicesCards = () => {
    return (
      <div className="services-container">
        {servicesData.map((s, i) => <CardService key={i} id={i} title={s.title} description={s.description} source={s.source} />)}
        <CardTarif />
      </div>
    )
  }

  const CardService = ({ id, title, description, source }) => {
    const themeSrc = theme ==="light" ? source : `light-${source}`;
    const currRef = id === 0 ? card0Refs : id === 1 ? card1Refs : id === 2 ? card2Refs : null;
    const desktopStyle = device.isDesktop ? { transitionDelay: "5s" } : undefined;
    return (
      <Intersection refObserver={currRef} addClass={"fadein services-card"} addStyle={desktopStyle}>
        <img className="services-card-img" src={require(`../assets/${themeSrc}`)} alt='device' />
        <h3 className="services-card-title">{title}</h3>
        <p className="services-card-description">{description}</p>
      </Intersection>
    )
  };

  const CardTarif = () => {
    const desktopStyle = device.isDesktop ? { transitionDelay: "5s"} : undefined;
    return (
      <Intersection refObserver={card3Refs} addClass={"fadein services-card"} addStyle={desktopStyle}>
        <h3 className="services-card-title tjm"><strong>Taux Journalier</strong></h3>
        <p className="services-card-tjm"><span className="tjm-value">450</span>€/Jour</p>
        <p className="services-card-description">- Travail à distance *</p>
        <p className="services-card-description">- Méthode Agile</p>
        <p className="services-card-explanation">* possible rdv en présentiel en Ile-de-France</p>
      </Intersection>
    )
  };

  return (
    <div id='services' className={`page ${device.name}`}>
      <Intersection refObserver={titleRefs} addClass={"left"}>
        <h2 className='title-page'>Mes Services</h2>
      </Intersection>
      <ServicesCards />
    </div>
  )
}

export default Service;