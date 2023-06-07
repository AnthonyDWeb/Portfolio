import React, { useContext } from 'react';
import styled from 'styled-components';
import '../App.css';
import { StyleContext } from '../contexts/style.context';

export default function Projets() {
  const { PageContainer, pageContainerStyle, } = useContext(StyleContext);
  return (
    <PageContainer style={pageContainerStyle} id='portfolio'>
    <h2>Portfolio</h2>
  </PageContainer>
  )
}
