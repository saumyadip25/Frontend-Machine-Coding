import React from 'react';
import { useTheme } from './ThemeContext';
import Parent from './Parent';

// GRANDPARENT COMPONENT (Level 1)
// This is the top-level component that consumes the theme context
// and passes it down through the component tree
const Grandparent = () => {
  // Using our custom hook to access theme context
  const { theme, toggleTheme, isDark } = useTheme();

  // Simple inline styles based on theme
  const containerStyle = {
    padding: '20px',
    minHeight: '100vh',
    backgroundColor: isDark ? '#333' : '#fff',
    color: isDark ? '#fff' : '#333',
    fontFamily: 'Arial, sans-serif',
    transition: 'all 0.3s ease'
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '20px'
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: isDark ? '#555' : '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    marginBottom: '20px'
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h1>🌟 Context API Demo - Grandparent Component</h1>
        <p>Current theme: <strong>{theme}</strong></p>
        
        {/* Theme toggle button - demonstrates context usage at grandparent level */}
        <button 
          style={buttonStyle}
          onClick={toggleTheme}
          onMouseOver={(e) => e.target.style.opacity = '0.8'}
          onMouseOut={(e) => e.target.style.opacity = '1'}
        >
          Switch to {isDark ? 'Light' : 'Dark'} Mode
        </button>
      </div>

      {/* 
        IMPORTANT: Notice how we don't need to pass theme props down!
        The Parent component and its children can access the context directly
        This eliminates prop drilling - the main benefit of useContext
      */}
      <Parent />
    </div>
  );
};

export default Grandparent;