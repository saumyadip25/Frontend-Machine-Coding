const PublicComponent = () => {
  return (
    <div style={{ 
      padding: '20px', 
      border: '1px solid #28a745', 
      borderRadius: '8px',
      maxWidth: '400px',
      margin: '20px auto',
      backgroundColor: '#d4edda'
    }}>
      <h2 style={{ color: '#155724' }}>Public Component</h2>
      <p style={{ color: '#155724' }}>
        This component is accessible to everyone without authentication.
        No HOC wrapper is applied here.
      </p>
      <ul style={{ color: '#155724', textAlign: 'left' }}>
        <li>No login required</li>
        <li>Always visible</li>
        <li>Public information only</li>
      </ul>
    </div>
  );
};

export default PublicComponent;