// LIBRARY //
import React, { useContext } from 'react';
// STYLE //
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
import NavigationBar from '../components/navigationBar';
// OTHER //

export default function Pages() {
    const { theme } = useContext(ThemeContext);
    console.log("theme ->", theme);

    return (
        <>
            {theme === "Spécial" && <ParticulesBackground />}
            <div style={{ position: "relative" }}>
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