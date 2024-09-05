// LIBRARY //
import React, { useEffect, useRef } from 'react';
// STYLE //
// CONTEXT //
// PAGE //
// COMPONENT //
import Glasscard from '../components/cards/glass-card/glasscard';
import Intersection from '../components/Insersection/intersection';
// OTHER //

export default function AboutMe({ device }) {
  const titleRefs = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach(el => el.isIntersecting && el.target.classList.add("active")));
    observer.observe(titleRefs.current);
  });

  return (
    <div id='about_me' className={`page ${device.name}`}>
      <Intersection refObserver={titleRefs} addClass={"bottom"}>
        <h2 className='title-page'>À propos de moi ?</h2>
      </Intersection>
      <Glasscard addClass="container">
        <p>
          Après un cursus initial en biologie guidé par un besoin continu d'apprentissage et de recherche, je me suis réorienté vers le developpement web et mobile, un métier d'avenir ayant pour caractéristique un apprentissage continu tout au long de sa carrière, ce qui correspond à mes besoins.
        </p>
        <br />
        <p>
          C'est donc ainsi que j'ai commencé en Mars 2021 la formation
          <a target="_blank" rel="noreferrer" className='formation link' href="https://simplon.co/formation/foundation/24">Apple Foundation Program</a>
          de 4 semaines au sein de
          <a target="_blank" rel="noreferrer" className='redirect link' href="https://simplon.co/">Simplon</a>
          ayant pour but d'initier ses apprenants au codage via la création d'un prototype d'appplication au cours de celle-ci.
        </p>
        <br />
        <p> J'ai ensuite poursuivi entre Mai 2021 et Octobre 2021 avec une formation de
          <a target="_blank" rel="noreferrer" className='redirect link' href="https://www.konexio.eu/index.html">Konexio</a> intitulé <a target="_blank" rel="noreferrer" className='formation link' href="https://www.konexio.eu/formation-developpeur-web">Développeur Web et Mobile Fullstack</a>,
          celle-ci ayant pour but de professionnaliser ses apprenants à travers une formations complète et très intense à laquelle j'ai continué avec un stage de 6 mois chez
          <a target="_blank" rel="noreferrer" className='redirect link' href="https://www.orchestra.eu/">Orchestra</a>.
        </p>
        <br />
        <p>
          Afin de me perfectionner et d'approfondir mes connaissances sur la création d'application mobile, j'ai suivi la formation
          <a target="_blank" rel="noreferrer" className='formation link' href="https://www.gpi2d.greta.fr/fichesformation/developpeur-dapplications-mobiles/">Développeur d’applications mobiles</a>
          du
          <a target="_blank" rel="noreferrer" className='redirect link' href="https://www.greta-iledefrance.fr/">Greta</a>d'Octobre 2022 à Décembre 2022.
        </p>
        <br />
        <p>
          Plus personellement, j'ai un intérêt prononcé pour les projets liés au secteur du jeu (web ou mobile), de l'apprentissage, de la santé physique (Sport, remise en forme, conseils/motivations) ainsi que les scienses.
        </p>
      </Glasscard>
    </div>
  )
}
