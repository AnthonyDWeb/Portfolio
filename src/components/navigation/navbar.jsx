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
// import Star from '../buttons/star';
import Glasscard from '../cards/glass-card/glasscard';
// OTHER //


export default function NavBar({ device }) {
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

  const NavLink = ({ to, label }) => <a id={`nav-${to}`} href={`#${to}`} onClick={handle}>{label}</a>;

  const Home = () => {
    return (
      <svg className='home' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64px" height="64px"><path d="M 32 3 L 1 28 L 1.4921875 28.654297 C 2.8591875 30.477297 5.4694688 30.791703 7.2304688 29.345703 L 32 9 L 56.769531 29.345703 C 58.530531 30.791703 61.140812 30.477297 62.507812 28.654297 L 63 28 L 54 20.742188 L 54 8 L 45 8 L 45 13.484375 L 32 3 z M 32 13 L 8 32 L 8 56 L 56 56 L 56 35 L 32 13 z M 26 34 L 38 34 L 38 52 L 26 52 L 26 34 z" /></svg>
    )
  }


  return (
    <div className={`nav ${theme}`}>
      <Glasscard addClass="navbar">
        <Hamburger />
        <div className='navcontainer'>
          <ul className="navlinks">
            <NavLink to={"homepage"} label={<Home/>} />
            <NavLink to={"project"} label={"Projets"} />
            <NavLink to={"skills"} label={"Mes compétences"} />
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





