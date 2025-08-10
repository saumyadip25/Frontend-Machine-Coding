import React, { createContext, useContext, useState } from 'react'
import Header from './Header'
import Content from './Content'

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Header />
      <Content />
    </ThemeContext.Provider>
  )
}

export default App
