import { useState, useEffect } from 'react';

const withAuth = (WrappedComponent) => {
  return function AuthenticatedComponent(props) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
      const checkAuth = async () => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const storedAuth = localStorage.getItem('isAuthenticated');
        const storedUser = localStorage.getItem('user');
        
        if (storedAuth === 'true' && storedUser) {
          setIsAuthenticated(true);
          setUser(JSON.parse(storedUser));
        }
        
        setIsLoading(false);
      };

      checkAuth();
    }, []);

    const login = (username) => {
      const userData = { username, id: Date.now() };
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('user', JSON.stringify(userData));
      setIsAuthenticated(true);
      setUser(userData);
    };

    const logout = () => {
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('user');
      setIsAuthenticated(false);
      setUser(null);
    };

    if (isLoading) {
      return (
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '200px',
          fontSize: '18px' 
        }}>
          Loading...
        </div>
      );
    }

    if (!isAuthenticated) {
      return (
        <div style={{ 
          padding: '20px', 
          border: '1px solid #ddd', 
          borderRadius: '8px',
          maxWidth: '400px',
          margin: '20px auto',
          textAlign: 'center'
        }}>
          <h3>Authentication Required</h3>
          <p>Please log in to access this component</p>
          <input 
            type="text" 
            placeholder="Enter username" 
            onKeyDown={(e) => {
              if (e.key === 'Enter' && e.target.value.trim()) {
                login(e.target.value.trim());
              }
            }}
            style={{ 
              padding: '8px', 
              marginRight: '10px',
              borderRadius: '4px',
              border: '1px solid #ccc'
            }}
          />
          <button 
            onClick={() => {
              const input = document.querySelector('input');
              if (input.value.trim()) {
                login(input.value.trim());
              }
            }}
            style={{ 
              padding: '8px 16px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Login
          </button>
        </div>
      );
    }

    return <WrappedComponent {...props} user={user} logout={logout} />;
  };
};

export default withAuth;