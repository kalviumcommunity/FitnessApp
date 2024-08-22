import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Eventform.css';

function Eventform() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    event: '',
    date: '',
    comments: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://s51-kiruthik-capstone-fitnessapp.onrender.com/api/register', formData);
      console.log('Registration successful:', response.data);
      // Navigate to home page on success
      navigate('/Home');
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error, e.g., show an error message to the user
    }
  };

  return (
    <div className="form-container">
      <h1 className='h1'> Event Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Event:</label>
          <input
            type="text"
            name="event"
            value={formData.event}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Comments:</label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit-btn">Register</button>
      </form>
    </div>
  );
}

export default Eventform;
