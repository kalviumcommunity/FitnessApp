import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./SignUp.css"

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log('Signing up...');
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div className="signup-form-group">
          <label className="signup-label" htmlFor="email">Username:</label>
          <input
            type="email"
            className="signup-input"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="signup-form-group">
          <label className="signup-label" htmlFor="password">Password:</label>
          <input
            type="password"
            className="signup-input"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="signup-form-group">
          <label className="signup-label" htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            className="signup-input"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="signup-submit">Sign Up</button>
      </form>
      <div className="signup-message">
        <p>Already have an account? <Link className="signup-link" to="/signin">Sign In</Link></p>
      </div>
    </div>
  );
};

export default SignUp