import './App.css';
import { ThemeProvider } from './contexts/theme';
import Pages from './pages';

function App() {
  return (
    <ThemeProvider>
      <Pages />
    </ThemeProvider>
  );
}

export default App;
