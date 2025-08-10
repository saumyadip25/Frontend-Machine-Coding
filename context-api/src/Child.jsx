import React, { useState } from 'react';
import { useTheme } from './ThemeContext';

// CHILD COMPONENT (Level 3 - Deepest level)
// This component contains the login/signup form
// Demonstrates how deeply nested components can access context without prop drilling
const Child = () => {
  // Local state for form functionality
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Accessing theme context at the deepest level - no props passed down!
  const { isDark, theme } = useTheme();

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission (just console log for demo)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${isLoginMode ? 'Login' : 'Signup'} attempted with:`, formData);
    alert(`${isLoginMode ? 'Login' : 'Signup'} form submitted! Check console for data.`);
  };

  // Toggle between login and signup modes
  const toggleMode = () => {
    setIsLoginMode(!isLoginMode);
    // Clear form when switching modes
    setFormData({ email: '', password: '', confirmPassword: '' });
  };

  // Dynamic styles based on theme context
  const containerStyle = {
    border: `2px solid ${isDark ? '#666' : '#ddd'}`,
    borderRadius: '8px',
    padding: '20px',
    backgroundColor: isDark ? '#555' : '#ffffff',
    maxWidth: '400px',
    margin: '0 auto'
  };

  const titleStyle = {
    color: isDark ? '#fff' : '#333',
    textAlign: 'center',
    marginBottom: '20px'
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '8px 0',
    border: `1px solid ${isDark ? '#666' : '#ccc'}`,
    borderRadius: '4px',
    backgroundColor: isDark ? '#666' : '#fff',
    color: isDark ? '#fff' : '#333',
    fontSize: '16px',
    boxSizing: 'border-box'
  };

  const buttonStyle = {
    width: '100%',
    padding: '12px',
    backgroundColor: isDark ? '#007bff' : '#0056b3',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '10px'
  };

  const switchButtonStyle = {
    background: 'none',
    border: 'none',
    color: isDark ? '#87ceeb' : '#007bff',
    cursor: 'pointer',
    textDecoration: 'underline',
    fontSize: '14px',
    marginTop: '10px'
  };

  const infoStyle = {
    backgroundColor: isDark ? '#666' : '#f0f0f0',
    padding: '10px',
    borderRadius: '5px',
    marginBottom: '15px',
    fontSize: '14px',
    color: isDark ? '#ccc' : '#555'
  };

  return (
    <div style={containerStyle}>
      <div style={infoStyle}>
        <strong>🎯 Child Component (Level 3):</strong> This deeply nested component 
        has full access to the "{theme}" theme from context, demonstrating how 
        useContext eliminates prop drilling across multiple component levels!
      </div>

      <h3 style={titleStyle}>
        {isLoginMode ? '🔐 Login' : '📝 Sign Up'} Form
      </h3>

      <form onSubmit={handleSubmit}>
        {/* Email Input */}
        <input
          style={inputStyle}
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        {/* Password Input */}
        <input
          style={inputStyle}
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />

        {/* Confirm Password (only for signup) */}
        {!isLoginMode && (
          <input
            style={inputStyle}
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
        )}

        {/* Submit Button */}
        <button 
          type="submit" 
          style={buttonStyle}
          onMouseOver={(e) => e.target.style.opacity = '0.9'}
          onMouseOut={(e) => e.target.style.opacity = '1'}
        >
          {isLoginMode ? 'Login' : 'Sign Up'}
        </button>
      </form>

      {/* Mode Toggle */}
      <div style={{ textAlign: 'center', marginTop: '15px' }}>
        <span style={{ color: isDark ? '#ccc' : '#666', fontSize: '14px' }}>
          {isLoginMode ? "Don't have an account? " : "Already have an account? "}
        </span>
        <button 
          style={switchButtonStyle}
          onClick={toggleMode}
          type="button"
        >
          {isLoginMode ? 'Sign up here' : 'Login here'}
        </button>
      </div>

      {/* Context Demo Info */}
      <div style={{ 
        marginTop: '20px', 
        padding: '10px', 
        backgroundColor: isDark ? '#444' : '#f8f9fa',
        borderRadius: '5px',
        fontSize: '12px',
        color: isDark ? '#bbb' : '#666'
      }}>
        <strong>Context Magic:</strong> This form's styling automatically adapts to 
        theme changes without any props being passed down through Parent or Grandparent!
      </div>
    </div>
  );
};

export default Child;