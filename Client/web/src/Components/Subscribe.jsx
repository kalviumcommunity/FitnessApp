// Subscribe.js

import React, { useState } from 'react';
import "./Subscribe.css"

function Subscribe() {
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
    // You can handle form submission logic here, such as sending data to backend or processing registration
    console.log(`Name: ${name}, Email: ${email}, Password: ${password}, Plan: ${selectedPlan}`);
  };

  return (
    <div className="subscribe-container">
      <h2 className="subscribe-heading">Subscription form </h2>
      <form onSubmit={handleSubmit} className="subscribe-form">
        <div>
          <label htmlFor="name" className="subscribe-label">Name:</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} className="subscribe-input" required />
        </div>
        <div>
          <label htmlFor="email" className="subscribe-label">Email:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} className="subscribe-input" required />
        </div>
        <div>
          <label htmlFor="password" className="subscribe-label">Password:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} className="subscribe-input" required />
        </div>
        <div>
          <p className="subscribe-label">Choose your subscription plan:</p>
          <label>
            Basic Plan - ₹499/month:
            <input type="radio" name="plan" value="basic" onChange={handlePlanChange} required />
          </label>
          <br />
          <label>
            Premium Plan - ₹999/month:
            <input type="radio" name="plan" value="premium" onChange={handlePlanChange} required />
          </label>
          <br />
          <label>
            Platinum Plan - ₹1499/month:
            <input type="radio" name="plan" value="platinum" onChange={handlePlanChange} required />
          </label>
        </div>
        <button type="submit" className="subscribe-button">Register</button>
      </form>
    </div>
  );
}

export default Subscribe;
