import React from 'react';
import "./Home.css";
import backgroundImage from "../assets/background.avif"; // Import the background image

const Home = () => {
    return (
        <div className="home-container" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
            <div className="box above">
                <div className="inner-box"></div>
                <div className="inner-box"></div>
                <div className="inner-box"></div>
                <div className="inner-box"></div>
            </div>
            <div className="background-text">WORKOUTS</div>
            <div className="box below">
                <div className="inner-box"></div>
                <div className="inner-box"></div>
                <div className="inner-box"></div>
                <div className="inner-box"></div>
            </div>
        </div>
    );
}

export default Home;
