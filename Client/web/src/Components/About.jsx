import React, { useState } from 'react';
import "./About.css";

const About = () => {
    const [feedback, setFeedback] = useState('');
    const [rating, setRating] = useState(0);

    const handleFeedbackChange = (e) => {
        setFeedback(e.target.value);
    };

    const handleRatingChange = (e) => {
        setRating(parseInt(e.target.value));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Feedback:', feedback);
        console.log('Rating:', rating);
        
        setFeedback('');
        setRating(0);
    };

    return (
        <div className="about-container">
            <div className="about-content">
                <h2>About Us</h2>
                <p>Welcome to <span className="highlight">Gofit</span>, your ultimate destination for all things fitness!</p>
                <p>At <span className="highlight">Gofit</span>, we're more than just a fitness app - we're a community of like-minded individuals dedicated to transforming lives and achieving greatness.</p>
                <p>Our team of experts is committed to providing you with the tools, knowledge, and support you need to reach your fitness goals and unleash your full potential.</p>
                <p>So whether you're looking to build muscle, lose weight, increase flexibility, or simply improve your overall health and well-being, <span className="highlight">Gofit</span> is here to help you every step of the way.</p>
                <p>Join our thriving community today and discover the endless possibilities that await you on your journey to a stronger, fitter, and healthier you!</p>
                <div className="quote">
                    <p className="quote-text">"Fitness is not about being better than someone else. It's about being better than you used to be."</p>
                </div>
                <div className="contact-info">
                    <p>If you have any questions or inquiries, feel free to reach out to us at <span className="highlight">info@gofit.com</span>.</p>
                </div>
                <div className="feedback-section">
                    <h3>Feedback and Ratings</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="feedback">Your Feedback:</label>
                            <textarea
                                id="feedback"
                                value={feedback}
                                onChange={handleFeedbackChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="rating">Rating:</label>
                            <select id="rating" value={rating} onChange={handleRatingChange} required>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default About;