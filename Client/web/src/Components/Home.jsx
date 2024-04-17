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


const Home = () => {
    const [activeComponent, setActiveComponent] = useState(null);
    const [favorites, setFavorites] = useState([]); // State for storing favorites

    const handleBoxClick = (component) => {
        setActiveComponent(component);
    };

    // Function to add component to favorites
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
                    <Link to="/favourite" className="favorite-link">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQADfCXklJ2F3Ug6N199VFUc_CbeAsD2tEy8w&s" alt="favorite" className="favorite-btn" onClick={() => handleAddToFavorites(Chest)} />
                    </Link>
                </div>
                <div className="inner-box box below">
                    <img src="https://play-lh.googleusercontent.com/Q36ZaK_YdHFyMTcM22ZLzjxsRp62giJu8CcnDaw51IMl6fz4e9Wlf-14t7pP6TemFz8" alt="" />
                    <Link to="/Shoulder" className="box above" onClick={() => handleBoxClick(null)}>
                        <button className="view-workout-btn">View Workout</button>
                    </Link>
                    <Link to="/favourite" className="favorite-link">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQADfCXklJ2F3Ug6N199VFUc_CbeAsD2tEy8w&s" alt="favorite" className="favorite-btn" onClick={() => handleAddToFavorites(Shoulder)} />
                    </Link>
                </div>
                <div className="inner-box box below">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2HrQRyadu-xGTnBnnudgXlSKyNQb6c4BA15vZJy38_4kOEmnSPGuQ31IUBs279Dy4YP4&usqp=CAU" alt="" />
                    <Link to="/Back" className="box above" onClick={() => handleBoxClick(null)}>
                        <button className="view-workout-btn">View Workout</button>
                    </Link>
                    <Link to="/favourite" className="favorite-link">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQADfCXklJ2F3Ug6N199VFUc_CbeAsD2tEy8w&s" alt="favorite" className="favorite-btn" onClick={() => handleAddToFavorites(Back)} />
                    </Link>
                </div>
                <div className="inner-box box below">
                    <img src="https://athleanx.com/wp-content/uploads/2021/11/BICEPS_MAIN-IMAGE.png" alt="" />
                    <Link to="/Biceps" className="box above" onClick={() => handleBoxClick(null)}>
                        <button className="view-workout-btn">View Workout</button>
                    </Link>
                    <Link to="/favourite" className="favorite-link">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQADfCXklJ2F3Ug6N199VFUc_CbeAsD2tEy8w&s" alt="favorite" className="favorite-btn" onClick={() => handleAddToFavorites(Biceps)} />
                    </Link>
                </div>
                ...


            {/* Render the active component */}
            {activeComponent && <ActiveComponent />}

            {/* Render the Workoutchart component */}
            {/* {activeComponent === Workoutchart && <Workoutchart />} */}

            <Link to="/workoutplan" onClick={() => handleBoxClick(null)}>
                <div className="inner-box">
                    <img src="https://tse2.mm.bing.net/th?id=OIP.7xEHYPV_HQZMI6xSfmYwgAHaE4&pid=Api&P=0&h=180" alt="Workout Plan" />
                    <button className="view-workout-btn">View Workout Plan</button>
                </div>
            </Link>
        </div>
        <Link to="/favourite"></Link> {/* This link should navigate to the favorite page */}
        {/* <Favorite favorites={favorites} /> */}
    
        </>
    );
}

export default Home;

