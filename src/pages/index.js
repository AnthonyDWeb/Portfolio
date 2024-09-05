import { useContext } from 'react';
import "../App.css";
import { ThemeContext } from '../contexts/theme';
import NavBar from '../components/navigation/navbar';
import Homepage from './homepage';
import Projets from './projets';
import MySkills from './skills';
import AboutMe from './about_me';
import Contact from './contact';
import useDevice from '../utils/useDevice';

export default function Pages() {
    const { theme } = useContext(ThemeContext);
    const { device } = useDevice();
    return (
        <div className={`App ${theme}`}>
            <header>
                <NavBar  device={device}/>
            </header>
            <main>
                <Homepage device={device}/>
                <Projets  device={device}/>
                <MySkills  device={device}/>
                <AboutMe  device={device}/>
            </main>
            <footer>
                <Contact  device={device}/>
            </footer>
        </div>
    )
}
