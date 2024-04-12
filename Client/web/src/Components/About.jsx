import React from 'react';
import "./About.css";

const About = () => {
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
            </div>
        </div>
    );
}

export default About;
