import React from 'react';
import { useTheme } from './ThemeContext';
import Child from './Child';

// PARENT COMPONENT (Level 2)
// This component sits between Grandparent and Child
// It also consumes the theme context to demonstrate multi-level access
const Parent = () => {
  // Accessing the same context as Grandparent - no props needed!
  const { isDark } = useTheme();

  const containerStyle = {
    border: `2px solid ${isDark ? '#555' : '#ccc'}`,
    borderRadius: '8px',
    padding: '20px',
    margin: '10px 0',
    backgroundColor: isDark ? '#444' : '#f9f9f9'
  };

  const titleStyle = {
    color: isDark ? '#fff' : '#333',
    borderBottom: `1px solid ${isDark ? '#555' : '#ddd'}`,
    paddingBottom: '10px',
    marginBottom: '15px'
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>📦 Parent Component (Middle Layer)</h2>
      
      <p style={{ color: isDark ? '#ccc' : '#666', marginBottom: '15px' }}>
        This parent component also has access to the theme context.
        Notice how it doesn't receive any props from Grandparent, 
        but can still access the theme state directly through useContext!
      </p>

      {/* 
        DEMONSTRATION: Parent component rendering content based on theme
        Without needing props from Grandparent
      */}
      <div style={{ 
        padding: '10px', 
        backgroundColor: isDark ? '#555' : '#e9ecef',
        borderRadius: '5px',
        marginBottom: '15px'
      }}>
        <strong>Parent says:</strong> I'm using the {isDark ? 'dark' : 'light'} theme 
        from context, not props! 🎨
      </div>

      {/* 
        Passing down to Child component
        Again, no theme props needed - Child can access context directly
      */}
      <Child />
    </div>
  );
};

export default Parent;