import React, { useState, useEffect } from 'react';
import { useLocalStorage } from './Hooks/LocalStorage';
import { useWindowSize } from './Hooks/WindowSize';
import './App.css';

function App() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const windowSize = useWindowSize();
  const isDesktop = windowSize.width > 768; 

  useEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="App">
      <header>
        <h1>My Dark Mode App</h1>
        {isDesktop && (
          <button onClick={handleToggleTheme}>
            Toggle Theme
          </button>
        )}
      </header>
      <main>
        <p>here should be content.</p>
      </main>
    </div>
  );
}

export default App;
