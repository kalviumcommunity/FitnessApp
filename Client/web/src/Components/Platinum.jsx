import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Platinum.css";

function Platinum() {
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
    <div className="platinum-container">
      <h2 className="platinum-heading">Platinum Subscription form</h2>
      <form onSubmit={handleSubmit} className="platinum-form">
        <div>
          <label htmlFor="name" className="platinum-label">Name:</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} className="platinum-input" required />
        </div>
        <div>
          <label htmlFor="email" className="platinum-label">Email:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} className="platinum-input" required />
        </div>
        <div>
          <label htmlFor="password" className="platinum-label">Password:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} className="platinum-input" required />
        </div>
        <div>
          <p className="platinum-label">Choose your subscription plan:</p>
          <label>
            Platinum Plan - ₹1499/month:
            <input type="radio" name="plan" value="platinum" onChange={handlePlanChange} required />
          </label>
          <br />
        </div>
        <button type="submit" className="platinum-button">Subscribe Now</button>
      </form>
    </div>
  );
}

export default Platinum;
