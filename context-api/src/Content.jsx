import React from 'react';
import { useTheme } from './App';

function Content() {
  const { theme } = useTheme();

  return (
    <main style={{
      backgroundColor: theme === 'light' ? '#fff' : '#444',
      color: theme === 'light' ? '#333' : '#fff',
      padding: '40px',
      minHeight: '500px'
    }}>
      <h2>Welcome to the {theme} theme!</h2>
      <p>This content automatically changes based on the theme from Context API.</p>
      <p>No props were passed down - both Header and Content components access the theme directly.</p>
    </main>
  );
}

export default Content;