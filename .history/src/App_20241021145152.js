import React, { useState } from 'react';
import './App.module.css'; // Assuming this is where your global styles are

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <header>
        <nav>
          <h1>Movie Explorer</h1>
          <button onClick={toggleDarkMode}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </nav>
      </header>

      {/* Your main app content goes here */}
    </div>
  );
}

export default App;
