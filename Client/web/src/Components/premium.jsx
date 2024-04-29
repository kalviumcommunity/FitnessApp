import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Premium.css"

function Premium() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePlanChange = (e) => {
    setSelectedPlan(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(`Name: ${name}, Email: ${email}, Password: ${password}, Plan: ${selectedPlan}`);
    
  };

  return (
    <div className="premium-container">
      <h2 className="premium-heading">Premium Subscription form</h2>
      <form onSubmit={handleSubmit} className="premium-form">
        <div>
          <label htmlFor="name" className="premium-label">Name:</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} className="premium-input" required />
        </div>
        <div>
          <label htmlFor="email" className="premium-label">Email:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} className="premium-input" required />
        </div>
        <div>
          <label htmlFor="password" className="premium-label">Password:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} className="premium-input" required />
        </div>
        <div>
          <p className="premium-label">Choose your subscription plan:</p>
          <label>
            Premium Plan - ₹999/month:
            <input type="radio" name="plan" value="premium" onChange={handlePlanChange} required />
          </label>
          <br />
        </div>
        <button type="submit" className="premium-button">Subscribe Now</button>
      </form>
    </div>
  );
}

export default Premium;
