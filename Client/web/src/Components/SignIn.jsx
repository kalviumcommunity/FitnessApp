// SignIn.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import auth from './Firebase.config'; // Import your Firebase auth instance

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const authInstance = getAuth();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(authInstance, email, password);
      const user = userCredential.user;
      // Additional logic here if needed

      // Redirect or navigate to home after successful sign in
      navigate('/Home');
    } catch (error) {
      console.error('Error during signin:', error.message);
      alert(`Signup failed:${error.message}`);
    }
  };

  return (
    <div style={styles.signinContainer}>
      <h2 style={styles.signinTitle}>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <div style={styles.signinFormGroup}>
          <label style={styles.signinLabel} htmlFor="email">Email</label>
          <input
            type="email"
            style={styles.signinInput}
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div style={styles.signinFormGroup}>
          <label style={styles.signinLabel} htmlFor="password">Password</label>
          <input
            type="password"
            style={styles.signinInput}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" style={styles.signinSubmit}>Sign In</button>
      </form>
      <div style={styles.signinMessage}>
        <p>Don't have an account? <Link style={styles.signinLink} to="/signup">Sign Up</Link></p>
      </div>
    </div>
  );
};

const styles = {
  signinContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  signinTitle: {
    fontSize: '2rem',
    marginBottom: '1rem',
    color:'black'
  },
  signinFormGroup: {
    marginBottom: '1rem',
    width: '100%',
  },
  signinLabel: {
    display: 'block',
    marginBottom: '0.5rem',
  },
  signinInput: {
    width: '100%',
    padding: '0.5rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  signinSubmit: {
    padding: '0.5rem 1rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '1rem',
  },
  signinMessage: {
    marginTop: '1rem',
  },
  signinLink: {
    color: '#007bff',
    textDecoration: 'none',
  },
};

export default SignIn;
