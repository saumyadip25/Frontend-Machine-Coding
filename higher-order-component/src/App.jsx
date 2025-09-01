import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'
import PublicComponent from './components/PublicComponent'
import './App.css'

function App() {
  const [activeComponent, setActiveComponent] = useState('public')

  const renderComponent = () => {
    switch (activeComponent) {
      case 'dashboard':
        return <Dashboard />
      case 'profile':
        return <Profile />
      case 'public':
      default:
        return <PublicComponent />
    }
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1>Higher-Order Component Demo</h1>
        <p style={{ color: '#666', maxWidth: '600px', margin: '0 auto' }}>
          This demo showcases the withAuth HOC pattern. Protected components (Dashboard & Profile) 
          require authentication, while public components are accessible to everyone.
        </p>
      </header>

      <nav style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '10px', 
        marginBottom: '30px' 
      }}>
        <button 
          onClick={() => setActiveComponent('public')}
          style={{ 
            padding: '10px 20px',
            backgroundColor: activeComponent === 'public' ? '#007bff' : '#f8f9fa',
            color: activeComponent === 'public' ? 'white' : '#333',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Public Component
        </button>
        <button 
          onClick={() => setActiveComponent('dashboard')}
          style={{ 
            padding: '10px 20px',
            backgroundColor: activeComponent === 'dashboard' ? '#007bff' : '#f8f9fa',
            color: activeComponent === 'dashboard' ? 'white' : '#333',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Dashboard (Protected)
        </button>
        <button 
          onClick={() => setActiveComponent('profile')}
          style={{ 
            padding: '10px 20px',
            backgroundColor: activeComponent === 'profile' ? '#007bff' : '#f8f9fa',
            color: activeComponent === 'profile' ? 'white' : '#333',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Profile (Protected)
        </button>
      </nav>

      <main>
        {renderComponent()}
      </main>

      <footer style={{ 
        textAlign: 'center', 
        marginTop: '40px', 
        padding: '20px',
        borderTop: '1px solid #eee',
        color: '#666'
      }}>
        <h3>HOC Pattern Benefits:</h3>
        <ul style={{ 
          listStyle: 'none', 
          padding: 0, 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          gap: '20px' 
        }}>
          <li>✅ Code Reusability</li>
          <li>✅ Separation of Concerns</li>
          <li>✅ Cross-cutting Logic</li>
          <li>✅ Component Enhancement</li>
        </ul>
      </footer>
    </div>
  )
}

export default App
