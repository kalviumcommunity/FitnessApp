// Logout.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import firebaseApp from './Firebase.config'; // Assuming you export your Firebase app instance from another file

const Logout = () => {
  const auth = getAuth(firebaseApp);
  const navigate = useNavigate(); // Use useNavigate to access navigation

  const handleLogout = async () => {
    try {
      await signOut(auth);
      // Redirect or navigate to the desired location after logout
      navigate('/'); // Example: Redirect to signin page
    } catch (error) {
      console.error('Error during logout:', error.message);
      alert('Logout failed');
    }
  };

  return (
    <div style={styles.logoutContainer}>
      <h2 style={styles.logoutTitle}>Logout</h2>
      <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
      <div style={styles.logoutMessage}>
        <p>Want to go back? <Link style={styles.logoutLink} to="/Home">Home</Link></p>
      </div>
    </div>
  );
};

const styles = {
  logoutContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  logoutTitle: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  logoutButton: {
    padding: '0.5rem 1rem',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '1rem',
  },
  logoutMessage: {
    marginTop: '1rem',
  },
  logoutLink: {
    color: '#007bff',
    textDecoration: 'none',
  },
};

export default Logout;
