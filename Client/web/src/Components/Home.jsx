import React, { useState } from 'react';
import "./Home.css";
import backgroundImage from "../assets/background.avif";
import Chest from './Chest';
import Shoulder from './Shoulder';
import WORKOUTS from "../assets/chest.png";
import { Link } from 'react-router-dom';
import Favorite from './Favourite';
import Back from './Back';
import Biceps from './Biceps';
import Triceps from './Triceps';
import Forearms from './Forearms';
import Leg from './Leg';



const Advertisement = () => {
    return (
        <div className="advertisement">
            <h3>Unlock Premium Membership for Exclusive Benefits!</h3>
            <p>Get access to personalized workout plans, expert guidance, premium videos, and more!</p>
            <div className="membership-rates">
                <p>Monthly Membership: 1200</p>
                <p>Yearly Membership: 8000</p>
            </div>
            <Link to="/membership" className="membership-link">
                <button className="membership-btn">Learn More</button>
            </Link>
        </div>
    );
}


const Home = () => {
    const [activeComponent, setActiveComponent] = useState(null);
    const [favorites, setFavorites] = useState([]); 

    const handleBoxClick = (component) => {
        setActiveComponent(component);
    };

    const handleAddToFavorites = (component) => {
        setFavorites([...favorites, component]);
    };

    return (
        <>
            <div className="home-container" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
                <div className="inner-box box below">
                    <img src={WORKOUTS} alt="" />
                    <Link to="/chest" className="box above" onClick={() => handleBoxClick(Chest)}>
                        <button className="view-workout-btn">View Workout</button>
                    </Link>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQADfCXklJ2F3Ug6N199VFUc_CbeAsD2tEy8w&s" alt="favorite" className="favorite-btn" onClick={() => handleAddToFavorites(Chest)} />  
                </div>
                <Advertisement /> {/* Add the advertisement component */}
                <div className="inner-box box below">
                    <img src="https://play-lh.googleusercontent.com/Q36ZaK_YdHFyMTcM22ZLzjxsRp62giJu8CcnDaw51IMl6fz4e9Wlf-14t7pP6TemFz8" alt="" />
                    <Link to="/Shoulder" className="box above" onClick={() => handleBoxClick(null)}>
                        <button className="view-workout-btn">View Workout</button>
                    </Link>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQADfCXklJ2F3Ug6N199VFUc_CbeAsD2tEy8w&s" alt="favorite" className="favorite-btn" onClick={() => handleAddToFavorites(Shoulder)} />
                </div>
                <div className="inner-box box below">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2HrQRyadu-xGTnBnnudgXlSKyNQb6c4BA15vZJy38_4kOEmnSPGuQ31IUBs279Dy4YP4&usqp=CAU" alt="" />
                    <Link to="/Back" className="box above" onClick={() => handleBoxClick(null)}>
                        <button className="view-workout-btn">View Workout</button>
                    </Link>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQADfCXklJ2F3Ug6N199VFUc_CbeAsD2tEy8w&s" alt="favorite" className="favorite-btn" onClick={() => handleAddToFavorites(Back)} />

                </div>
                <div className="inner-box box below">
                    <img src="https://athleanx.com/wp-content/uploads/2021/11/BICEPS_MAIN-IMAGE.png" alt="" />
                    <Link to="/Biceps" className="box above" onClick={() => handleBoxClick(null)}>
                        <button className="view-workout-btn">View Workout</button>
                    </Link>

                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQADfCXklJ2F3Ug6N199VFUc_CbeAsD2tEy8w&s" alt="favorite" className="favorite-btn" onClick={() => handleAddToFavorites(Biceps)} />

                </div>
                {/* Other inner boxes */}
            </div>
            {/* This link should navigate to the favorite page */}
            <Favorite favorites={favorites} />
        </>
    );
}

export default Home;
