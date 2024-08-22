import React, { useState } from 'react';
import Chest from './Chest';
import cap from "../assets/cap.webp";
import Shoulder from './Shoulder';
import WORKOUTS from '../assets/chest.png';
import Shoulderimg from '../assets/shoulder.png';
import Bicepsimg from '../assets/Biceps.png';
import Tricepsimg from '../assets/Triceps.png';
import Legsimg from '../assets/Legs.png';
import Forearmsimg from '../assets/Forearms.png';
import Backimg from '../assets/Back.png';
import { Link } from 'react-router-dom';
import Back from './Back';
import Biceps from './Biceps';
import Triceps from './Triceps';
import Forearms from './Forearms';
import Leg from './Leg';
import Workoutplan from './Workoutplan';
import Crisp from './Crisp';
import Navbar from './Navbar';
import Footer from './Footer';
import "./Home.css"

const styles = {
    homeContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        backgroundImage: `url(${cap})`,
        backgroundSize: 'cover',
        padding: '2rem',
    },
    innerBox: {
        flex: '1 1 300px',
        margin: '1rem',
        padding: '1rem',
        borderRadius: '8px',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '100%',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '200px',
        objectFit: 'cover',
        borderRadius: '8px',
    },
    link: {
        textDecoration: 'none',
    },
    viewWorkoutBtn: {
        marginTop: '0.5rem',
        padding: '0.5rem 1rem',
        fontSize: '1rem',
        color: '#fff',
        backgroundColor: '#007bff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        width: '100%',
        textAlign: 'center',
    }
};

const Home = () => {
    const [activeComponent, setActiveComponent] = useState(null);

    const handleBoxClick = (component) => {
        setActiveComponent(component);
    };

    return (
        <>
            <Navbar />
            <Crisp />
            <div style={styles.homeContainer}>
                <div style={styles.innerBox}>
                    <img src={WORKOUTS} alt="Chest Workout" style={styles.image} />
                    <Link to="/chest" style={styles.link} onClick={() => handleBoxClick(Chest)}>
                        <button style={styles.viewWorkoutBtn}>View Workout</button>
                    </Link>
                </div>
                <div style={styles.innerBox}>
                    <img src={Shoulderimg} alt="Shoulder Workout" style={styles.image} />
                    <Link to="/Shoulder" style={styles.link} onClick={() => handleBoxClick(Shoulder)}>
                        <button style={styles.viewWorkoutBtn}>View Workout</button>
                    </Link>
                </div>
                <div style={styles.innerBox}>
                    <img src={Backimg} alt="Back Workout" style={styles.image} />
                    <Link to="/Back" style={styles.link} onClick={() => handleBoxClick(Back)}>
                        <button style={styles.viewWorkoutBtn}>View Workout</button>
                    </Link>
                </div>
                <div style={styles.innerBox}>
                    <img src={Bicepsimg} alt="Biceps Workout" style={styles.image} />
                    <Link to="/Biceps" style={styles.link} onClick={() => handleBoxClick(Biceps)}>
                        <button style={styles.viewWorkoutBtn}>View Workout</button>
                    </Link>
                </div>
                <div style={styles.innerBox}>
                    <img src={Tricepsimg} alt="Triceps Workout" style={styles.image} />
                    <Link to="/Triceps" style={styles.link} onClick={() => handleBoxClick(Triceps)}>
                        <button style={styles.viewWorkoutBtn}>View Workout</button>
                    </Link>
                </div>
                <div style={styles.innerBox}>
                    <img src={Forearmsimg}alt="Forearms Workout" style={styles.image} />
                    <Link to="/Forearms" style={styles.link} onClick={() => handleBoxClick(Forearms)}>
                        <button style={styles.viewWorkoutBtn}>View Workout</button>
                    </Link>
                </div>
                <div style={styles.innerBox}>
                    <img src={Legsimg} alt="Leg Workout" style={styles.image} />
                    <Link to="/Leg" style={styles.link} onClick={() => handleBoxClick(Leg)}>
                        <button style={styles.viewWorkoutBtn}>View Workout</button>
                    </Link>
                </div>
                <div style={styles.innerBox}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9mzAv_lMY2NycvZ3EwJVJVhoftZ3VOnXs729dNkoYNg&s" alt="Workout Plan" style={styles.image} />
                    <Link to="/Workoutplan" style={styles.link} onClick={() => handleBoxClick(Workoutplan)}>
                        <button style={styles.viewWorkoutBtn}>View Workout Plan</button>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;
