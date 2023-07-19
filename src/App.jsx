// LIBRARY //
import './App.css';
// STYLE //
// CONTEXT //
import { DeviseProvider } from './contexts/devise';
import { StyleProvider } from './contexts/style.context';
// PAGE //
import Homepage from './pages/homepage';
import AboutMe from './pages/about_me';
import Contact from './pages/contact';
import Projets from './pages/projets';
import Tools from './pages/tools';
import Error from './pages/error';
// COMPONENT //
import ParticulesBackground from './components/background-particules/background.particules';
import NavigationBar from './components/navigationBar';
// OTHER //

function App() {
  const maintenance = false;

  const Pages = () => {
    return (
      <>
        <NavigationBar />
        <Homepage />
        <Tools />
        <Projets />
        <AboutMe />
        <Contact />
      </>
    )
  };

  return (
    <DeviseProvider>
      <StyleProvider>
        <ParticulesBackground />
        {maintenance ? <Error /> : <Pages />}
      </StyleProvider>
    </DeviseProvider>
  );
}

export default App;
