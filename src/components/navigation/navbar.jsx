// LIBRARY //
import React, { useContext, useEffect } from 'react';
// STYLE //
import "./nav-style.css"
// CONTEXT //
import { ThemeContext } from '../../contexts/theme';
// PAGE //
// COMPONENT //
import Toggle from '../toggle';
import Hamburger from '../buttons/hamburger';
import Star from '../buttons/star';
import Glasscard from '../cards/glass-card/glasscard';
// OTHER //


export default function NavBar({device}) {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    handle();
  }, [theme])

  // FUNCTIONS ------------------------------------------------

  const handle = () => {
    const classLists = [".navbar", ".hamburger"];
    classLists.forEach(c => document.querySelector(c).classList.remove("open"));
  };



  // RENDERS --------------------------------------------------

  const NavLink = ({ to, label }) => <a id={`nav-${to}`} href={`#${to}`} onClick={handle}>{label}</a>


  return (
    <div className={`nav ${theme}`}>
      <Glasscard addClass="navbar">
        <Hamburger />
        <div className='navcontainer'>
          <ul className="navlinks">
            <NavLink to={"homepage"} label={"Acceuil"} />
            <NavLink to={"project"} label={"Projets"} />
            <NavLink to={"tools"} label={"Outils"} />
            <NavLink to={"about_me"} label={"À propos de moi"} />
            <NavLink to={"contact"} label={"Contact"} />
          </ul>
          <div className="nav-theme">
            <Toggle />
            {/* <Star /> */}
          </div>
        </div>
      </Glasscard>
    </div>
  )
}





