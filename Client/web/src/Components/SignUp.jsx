import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import auth from './Firebase.config'; // Adjust this path according to your actual file structure

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      // Additional logic here if needed, e.g., saving user data to Firestore

      // Redirect or navigate to home after successful signup
      navigate('/Home');
    } catch (error) {
      console.error('Error during signup:', error.message);
      alert(`Signup failed:${error.message}`);
    }
  };

  return (
    <div style={styles.signupContainer}>
      <h2 style={styles.signupTitle}>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div style={styles.signupFormGroup}>
          <label style={styles.signupLabel} htmlFor="name">Name</label>
          <input
            type="text"
            style={styles.signupInput}
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div style={styles.signupFormGroup}>
          <label style={styles.signupLabel} htmlFor="email">Email</label>
          <input
            type="email"
            style={styles.signupInput}
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div style={styles.signupFormGroup}>
          <label style={styles.signupLabel} htmlFor="password">Password</label>
          <input
            type="password"
            style={styles.signupInput}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div style={styles.signupFormGroup}>
          <label style={styles.signupLabel} htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            style={styles.signupInput}
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" style={styles.signupSubmit}>Sign Up</button>
      </form>
      <div style={styles.signupMessage}>
        <p>Already have an account? <Link style={styles.signupLink} to="/signin">Sign In</Link></p>
      </div>
    </div>
  );
};

const styles = {
  signupContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  signupTitle: {
    fontSize: '2rem',
    marginBottom: '1rem',
    color:'black'
  },
  signupFormGroup: {
    marginBottom: '1rem',
    width: '100%',
  },
  signupLabel: {
    display: 'block',
    marginBottom: '0.5rem',
  },
  signupInput: {
    width: '100%',
    padding: '0.5rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  signupSubmit: {
    padding: '0.5rem 1rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '1rem',
  },
  signupMessage: {
    marginTop: '1rem',
  },
  signupLink: {
    color: '#007bff',
    textDecoration: 'none',
  },
};

export default SignUp;
