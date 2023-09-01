// LIBRARY //
import './App.css';
// STYLE //
import 'animate.css';
// CONTEXT //
import { DeviseProvider } from './contexts/devise';
import { StyleProvider } from './contexts/style.context';
// PAGE //
import Pages from './pages';
// COMPONENT //
import Error from './pages/error';
import { ThemeProvider } from './contexts/theme.context';
// OTHER //

function App() {
  const maintenance = false;

  return (
    <DeviseProvider>
      <ThemeProvider>
        <StyleProvider>
          {maintenance ? <Error /> : <Pages />}
        </StyleProvider>
      </ThemeProvider>
    </DeviseProvider>
  );
}

export default App;