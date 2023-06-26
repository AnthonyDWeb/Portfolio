import './App.css';
import ParticulesBackground from './components/background-particules/background.particules';
import NavigationBar from './components/navigationBar';
import { DeviseProvider } from './contexts/devise';
import Homepage from './pages/homepage';
import AboutMe from './pages/about_me';
import Contact from './pages/contact';
import Projets from './pages/projets';
import Tools from './pages/tools';
import { StyleProvider } from './contexts/style.context';
import Error from './pages/error';
import Test from './pages/test';

function App() {
  const maintenance = false;
  return (
    <DeviseProvider>
      <StyleProvider>
        <ParticulesBackground />
        {maintenance ?
          <Error />
          :
          <>
            <NavigationBar />
            <Homepage />
            <Tools />
            <Projets />
            <AboutMe />
            <Contact />
          </>
        }
        {/* <Test/> */}
      </StyleProvider>
    </DeviseProvider>
  );
}

export default App;
