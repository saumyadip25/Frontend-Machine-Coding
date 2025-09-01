import withAuth from '../hocs/withAuth';

const Dashboard = ({ user, logout }) => {
  return (
    <div style={{ 
      padding: '20px', 
      border: '1px solid #ddd', 
      borderRadius: '8px',
      maxWidth: '600px',
      margin: '20px auto'
    }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '20px'
      }}>
        <h2>Dashboard</h2>
        <button 
          onClick={logout}
          style={{ 
            padding: '8px 16px',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Logout
        </button>
      </div>
      
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '15px', 
        borderRadius: '4px',
        marginBottom: '15px'
      }}>
        <h3>Welcome, {user?.username}!</h3>
        <p>User ID: {user?.id}</p>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
        <div style={{ 
          padding: '15px', 
          backgroundColor: '#e3f2fd', 
          borderRadius: '4px',
          textAlign: 'center'
        }}>
          <h4>Total Projects</h4>
          <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#1976d2' }}>12</p>
        </div>
        
        <div style={{ 
          padding: '15px', 
          backgroundColor: '#e8f5e8', 
          borderRadius: '4px',
          textAlign: 'center'
        }}>
          <h4>Completed Tasks</h4>
          <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#388e3c' }}>84</p>
        </div>
      </div>
    </div>
  );
};

export default withAuth(Dashboard);