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
            <Link to="/chest">Chest workout</Link>
          </li>
          <li><Link to="/Triceps">Triceps workout</Link></li>
        </ul>
      </div>
      <div className="day">
        <h2>Tuesday</h2>
        <ul>
        <li><Link to="/Shoulder">Shoulder workout</Link></li>
          <li><Link to="/Biceps">Biceps workout</Link></li>
        </ul>
      </div>
      <div className="day">
        <h2>Wednesday</h2>
        <ul>
          <li><Link to="/Back">Back workout</Link></li>
          <li><Link to="/Forearms">Forearms workout</Link></li>
        </ul>
      </div>
      <div className="day">
        <h2>Thursday</h2>
        <ul>
          <li><Link to="/Triceps">Triceps Workout</Link></li>
        </ul>
      </div>
      <div className="day">
        <h2>Friday</h2>
        <ul>
          <li><Link to="/Forearms">Forearm</Link></li>
        </ul>
      </div>
      <div className="day">
        <h2>Saturday</h2>
        <ul>
          <li><Link to="/Leg">Leg</Link></li>
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
