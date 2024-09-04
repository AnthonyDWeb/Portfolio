import React, { Suspense } from 'react';
import './App.css';
import { ThemeProvider } from './contexts/theme';

function App() {
  const PageComponent = React.lazy(() => import('./pages'));
  const Background = () => <div className='background-app' />;
  
  return (
    <ThemeProvider>
      <Suspense fallback={<Background />}>
        <PageComponent />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
