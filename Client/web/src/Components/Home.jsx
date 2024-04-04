import React, { useState } from 'react';
import "./Home.css";
import backgroundImage from "../assets/background.avif"; 
import Chest from './Chest';
import WORKOUTS from "../assets/chest.png";
import { Link } from 'react-router-dom';

const Home = () => {
    const [activeComponent, setActiveComponent] = useState(null);
    const handleBoxClick = (component) => {
        setActiveComponent(component);
    };

    return (
        <div className="home-container" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
            <Link to="/chest" className="box above" onClick={() => handleBoxClick(Chest)}>
                <div className="inner-box">
                    <img src={WORKOUTS} alt="" />
                    <button className="view-workout-btn">View Workout</button>
                </div>
            </Link>
            <Link to="/" className="box above" onClick={() => handleBoxClick(null)}>
                <div className="inner-box">
                    <img src="https://play-lh.googleusercontent.com/Q36ZaK_YdHFyMTcM22ZLzjxsRp62giJu8CcnDaw51IMl6fz4e9Wlf-14t7pP6TemFz8" alt="" />
                    <button className="view-workout-btn">View Workout</button>
                </div>
            </Link>
            <Link to="/" className="box above" onClick={() => handleBoxClick(null)}>
                <div className="inner-box">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2HrQRyadu-xGTnBnnudgXlSKyNQb6c4BA15vZJy38_4kOEmnSPGuQ31IUBs279Dy4YP4&usqp=CAU" alt="" />
                    <button className="view-workout-btn">View Workout</button>
                </div>
            </Link>
            <Link to="/" className="box above" onClick={() => handleBoxClick(null)}>
                <div className="inner-box">
                    <img src="https://athleanx.com/wp-content/uploads/2021/11/BICEPS_MAIN-IMAGE.png" alt="" />
                    <button className="view-workout-btn">View Workout</button>
                </div>
            </Link>
            
            {/* <div className="background-text">WORKOUTS</div> */}
            
            <Link to="/" className="box below" onClick={() => handleBoxClick(null)}>
                <div className="inner-box">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe86dvGYHvodW-Yl1qwiL2L2k681nfEEgMgnuleqcPLw&s" alt="" />
                    <button className="view-workout-btn">View Workout</button>
                </div>
            </Link>
            <Link to="/" className="box below" onClick={() => handleBoxClick(null)}>
                <div className="inner-box">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC7EzZwvV6KMT3Lcm_mRCOaFouo7xC371y5Uih8yoobg&s" alt="" />
                    <button className="view-workout-btn">View Workout</button>
                </div>
            </Link>
            <Link to="/" className="box below" onClick={() => handleBoxClick(null)}>
                <div className="inner-box">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuNraqAo2lfzrDlze2lz_gVMLPUhtR2g_4ZK9gLidNQw&s" alt="" />
                    <button className="view-workout-btn">View Workout</button>
                </div>
            </Link>
            <Link to="/" className="box below" onClick={() => handleBoxClick(null)}>
                <div className="inner-box">
                    <img src="https://st4.depositphotos.com/4428871/24789/v/450/depositphotos_247897908-stock-illustration-diet-plan-apple-word-cloud.jpg" alt="" />
                    <button className="view-workout-btn">View Plan</button>
                </div>
            </Link>
            
            {activeComponent && <activeComponent />}
        </div>
    );
}

export default Home;
