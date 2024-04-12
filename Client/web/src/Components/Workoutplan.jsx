import React from 'react';

const Workoutplan = () => {
  return (
    <div className="weekly-workout-plan">
      <h1>Weekly Workout Plan</h1>
      <div className="day">
        <h2>Monday</h2>
        <ul>
          <li>Chest workout</li>
          <li>Cardio</li>
        </ul>
      </div>
      <div className="day">
        <h2>Tuesday</h2>
        <ul>
          <li>Back workout</li>
          <li>Abs workout</li>
        </ul>
      </div>
      <div className="day">
        <h2>Wednesday</h2>
        <ul>
          <li>Leg workout</li>
          <li>Cardio</li>
        </ul>
      </div>
      <div className="day">
        <h2>Thursday</h2>
        <ul>
          <li>Shoulder workout</li>
          <li>Arms workout</li>
        </ul>
      </div>
      <div className="day">
        <h2>Friday</h2>
        <ul>
          <li>Rest day</li>
        </ul>
      </div>
      <div className="day">
        <h2>Saturday</h2>
        <ul>
          <li>Full body workout</li>
          <li>Cardio</li>
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
