// LIBRARY //
import React, { useContext } from 'react';
// STYLE //
import '../App.css';
// CONTEXT //
import { ThemeContext } from '../contexts/theme.context';
// PAGE //
import Homepage from '../pages/homepage';
import Contact from '../pages/contact';
import AboutMe from '../pages/about_me';
import Projets from '../pages/projets';
import Tools from '../pages/tools';
// COMPONENT //
import ParticulesBackground from '../components/background-particules/background.particules';
import NavigationBar from '../components/navigationBar/navigationBar';

// OTHER //

export default function Pages() {
    const { theme } = useContext(ThemeContext);

    return (
        <>
            {!theme.default && <ParticulesBackground />}
            <div style={{ backgroundColor: theme?.background }} className='body-page'>
                <NavigationBar />
                <Homepage />
                <Tools />
                <Projets />
                <AboutMe />
                <Contact />
            </div>
        </>
    )
};