import React, { useContext } from 'react';
import '../App.css';
import GlassmorphismComponent from '../components/glassmorphism/glassmorphism-component';
import styled from 'styled-components';
import { StyleContext } from '../contexts/style.context';

export default function AboutMe() {
  const { PageContainer, pageContainerStyle, } = useContext(StyleContext);
  const fontName = "cursive Bungee Inline";
  return (
    <PageContainer style={pageContainerStyle} id='about_me'>
      <GlassmorphismComponent>
        <h2 >À propos de moi</h2>
        <p >
          Après un cursus initial en biologie inspiré par un besoin continu d'apprentissage et de recherche, je me suis réorienté vers le developpement web et mobile, un métier d'avenir et ayant pour caractéristique un apprentissage continu tout au long de sa carrière ce qui correspond à mes besoins.
        </p>

        <p >
          C'est donc ainsi que j'ai commencé en Mars 2021 une formation de 4 semaines au sein de
          <a target="_blank" rel="noreferrer" href="https://simplon.co/">Simplon</a>
          ayant pour but d'initier ses apprenants au codage et à la création d'un prototype d'appplication au cours de celle-ci. <br/>
          J'ai ensuite poursuivi avec une autre formation de "Devellopeur Web et Mobile Fullstack" entre Mai 2021 et Ocotbre 2021  au sein de
          <a target="_blank" rel="noreferrer" href="https://www.konexio.eu/index.html">Konexio</a>,
          celle-ci ayant pour but de professionnaliser ses apprenants à travers une formations complète et très intense. J'ai ensuite effectué un stage de 6mois au sein de
          <a target="_blank" rel="noreferrer" href="https://www.orchestra.eu/">Orchestra</a>.<br/>
        </p>
        <p >Plus personellement, j'ai un intérêt prononcé pour les projets liés au secteur du jeu (web ou mobile), de l'apprentissage, de la santé physique (Sport, remise en forme, conseils/motivations) ainsi que les scienses.</p>
      </GlassmorphismComponent>
    </PageContainer>
  )
}

// font-family: 'Berkshire Swash', cursive;
// font-family: 'Bungee Inline', cursive;
// font-family: 'Dancing Script', cursive;
// font-family: 'Indie Flower', cursive;
// font-family: 'Italianno', cursive;
// font-family: 'Kaushan Script', cursive;
// font-family: 'Merienda', cursive;

// font-family: 'Yatra One', cursive;
// font-family: 'Major Mono Display', monospace;
// font-family: 'Almendra SC', serif;
// font-family: 'Prata', serif;
// font-family: 'Major Mono Display', monospace;