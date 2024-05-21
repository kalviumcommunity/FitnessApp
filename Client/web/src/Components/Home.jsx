import React, { useState } from 'react';
import "./Home.css";
import backgroundImage from "../assets/background.avif";
import Chest from './Chest';
import Shoulder from './Shoulder';
import WORKOUTS from "../assets/chest.png";
import { Link } from 'react-router-dom';
import Back from './Back';
import Biceps from './Biceps';
import Triceps from './Triceps';
import Forearms from './Forearms';
import Leg from './Leg';
import Workoutplan from './Workoutplan';
import Crisp from './Crisp'; // Import the Crisp component

const Home = () => {
    const [activeComponent, setActiveComponent] = useState(null);

    const handleBoxClick = (component) => {
        setActiveComponent(component);
    };

    return (
        <>
            <Crisp /> {/* Add the Crisp component here */}
            <div className="home-container" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
                <div className="inner-box box below">
                    <img src={WORKOUTS} alt="" />
                    <Link to="/chest" className="box above" onClick={() => handleBoxClick(Chest)}>
                        <button className="view-workout-btn">View Workout</button>
                    </Link>
                </div>
                <div className="inner-box box below">
                    <img src="https://play-lh.googleusercontent.com/Q36ZaK_YdHFyMTcM22ZLzjxsRp62giJu8CcnDaw51IMl6fz4e9Wlf-14t7pP6TemFz8" alt="" />
                    <Link to="/Shoulder" className="box above" onClick={() => handleBoxClick(null)}>
                        <button className="view-workout-btn">View Workout</button>
                    </Link>
                </div>
                <div className="inner-box box below">
                    <img src="https://tse1.mm.bing.net/th?id=OIP.uWnYJaLEuYeyiuspCwYCHQHaGa&pid=Api&P=0&h=180" alt="" />
                    <Link to="/Back" className="box above" onClick={() => handleBoxClick(null)}>
                        <button className="view-workout-btn">View Workout</button>
                    </Link>
                </div>
                <div className="inner-box box below">
                    <img src="https://athleanx.com/wp-content/uploads/2021/11/BICEPS_MAIN-IMAGE.png" alt="" />
                    <Link to="/Biceps" className="box above" onClick={() => handleBoxClick(null)}>
                        <button className="view-workout-btn">View Workout</button>
                    </Link>
                </div>
                <div className="inner-box box below">
                    <img src="https://st.depositphotos.com/2389277/3604/i/450/depositphotos_36042999-stock-photo-exercise-for-triceps-with-cable.jpg" alt="" />
                    <Link to="/Triceps" className="box above" onClick={() => handleBoxClick(null)}>
                        <button className="view-workout-btn">View Workout</button>
                    </Link>
                </div>
                <div className="inner-box box below">
                    <img src="https://athleanx.com/wp-content/uploads/2022/12/FOREARMS-Workouts.png" alt="" />
                    <Link to="/Forearms" className="box above" onClick={() => handleBoxClick(null)}>
                        <button className="view-workout-btn">View Workout</button>
                    </Link>
                </div>
                <div className="inner-box box below">
                    <img src="https://www.bodybuilding.com/fun/images/2015/leg-workouts-for-men-the-7-best-workouts-for-thicker-quads-glutes-and-hams-mobile-facebook-960x540.jpg" alt="" />
                    <Link to="/Leg" className="box above" onClick={() => handleBoxClick(null)}>
                        <button className="view-workout-btn">View Workout</button>
                    </Link>
                </div>
                <div className="inner-box box below">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9mzAv_lMY2NycvZ3EwJVJVhoftZ3VOnXs729dNkoYNg&s" alt="" />
                    <Link to="/Workoutplan" className="box above" onClick={() => handleBoxClick(Workoutplan)}>
                        <button className="view-workout-btn">View Workout Plan</button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Home;
