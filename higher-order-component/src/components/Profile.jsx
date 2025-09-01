import withAuth from '../hocs/withAuth';

const Profile = ({ user, logout }) => {
  return (
    <div style={{ 
      padding: '20px', 
      border: '1px solid #ddd', 
      borderRadius: '8px',
      maxWidth: '400px',
      margin: '20px auto'
    }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '20px'
      }}>
        <h2>User Profile</h2>
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
      
      <div style={{ textAlign: 'center' }}>
        <div style={{ 
          width: '80px', 
          height: '80px', 
          borderRadius: '50%', 
          backgroundColor: '#007bff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 15px',
          color: 'white',
          fontSize: '24px',
          fontWeight: 'bold'
        }}>
          {user?.username?.charAt(0)?.toUpperCase()}
        </div>
        
        <h3 style={{ marginBottom: '10px' }}>{user?.username}</h3>
        <p style={{ color: '#666', marginBottom: '15px' }}>ID: {user?.id}</p>
        
        <div style={{ 
          textAlign: 'left', 
          backgroundColor: '#f8f9fa', 
          padding: '15px', 
          borderRadius: '4px' 
        }}>
          <h4 style={{ marginBottom: '10px' }}>Profile Information</h4>
          <p><strong>Username:</strong> {user?.username}</p>
          <p><strong>Account Created:</strong> {new Date(user?.id).toLocaleDateString()}</p>
          <p><strong>Status:</strong> Active</p>
          <p><strong>Role:</strong> User</p>
        </div>
      </div>
    </div>
  );
};

export default withAuth(Profile);