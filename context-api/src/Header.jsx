import React from 'react';
import { useTheme } from './App';

function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header style={{
      backgroundColor: theme === 'light' ? '#f8f9fa' : '#333',
      color: theme === 'light' ? '#333' : '#fff',
      padding: '20px',
      textAlign: 'center'
    }}>
      <h1>Context API Demo</h1>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </header>
  );
}

export default Header;