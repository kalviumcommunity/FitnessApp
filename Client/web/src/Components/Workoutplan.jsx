import React from 'react';
import { Link } from 'react-router-dom';
import './Workoutplan.css';

const Workoutplan = () => {
  return (
    <div className="weekly-workout-plan">
      <h1>Weekly Workout Plan</h1>
      <div className="day">
        <h2>Monday</h2>
        <ul>
          <li>
            <Link to="/chestworkout">Chest workout</Link>
          </li>
          <li>Triceps workout</li>
        </ul>
      </div>
      <div className="day">
        <h2>Tuesday</h2>
        <ul>
          <li>Shoulder workout</li>
          <li>Biceps workout</li>
        </ul>
      </div>
      <div className="day">
        <h2>Wednesday</h2>
        <ul>
          <li>Back workout</li>
          <li>Forearms workout</li>
        </ul>
      </div>
      <div className="day">
        <h2>Thursday</h2>
        <ul>
          <li>Triceps Workout</li>
          <li>Arms workout</li>
        </ul>
      </div>
      <div className="day">
        <h2>Friday</h2>
        <ul>
          <li>Abs and Cardio</li>
        </ul>
      </div>
      <div className="day">
        <h2>Saturday</h2>
        <ul>
          <li>Full body workout</li>
          <li>Leg</li>
        </ul>
      </div>
      <div className="day">
        <h2>Sunday</h2>
        <ul>
          <li>Rest day</li>
        </ul>
      </div>
    </div>
  );
}

export default Workoutplan;
