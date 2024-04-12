import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "./Shoulder.css"; 

function Shoulder() {
  const [exercises, setExercises] = useState([
    { name: "Overhead Press", sets: 3, reps: 10, weight: 50 },
    { name: "Lateral Raises", sets: 3, reps: 12, weight: 15 },
    { name: "Front Raises", sets: 3, reps: 12, weight: 15 },
    { name: "Seated Dumbbell Press", sets: 3, reps: 10, weight: 40 },
    { name: "Reverse Flyes", sets: 3, reps: 12, weight: 20 },
    { name: "Barbell Shrugs", sets: 3, reps: 12, weight: 135 },
    { name: "Arnold Press", sets: 3, reps: 10, weight: 30 },
    { name: "Upright Rows", sets: 3, reps: 10, weight: 40 },
    { name: "Face Pulls", sets: 3, reps: 12, weight: 25 },
    { name: "Machine Shoulder Press", sets: 3, reps: 10, weight: 90 }
    
  ]);

  const recordSet = (index) => {
    console.log(`Recorded set for exercise ${exercises[index].name}`);
  };

  return (
    <div className="shoulder-container">
      <h2>Shoulder Exercises</h2>
      <ul className="exercise-list">
        {exercises.map((exercise, index) => (
          <li key={index} className="exercise-item">
            <div className="exercise-name">{exercise.name}</div>
            <div className="sets-reps-weight">
              {exercise.sets} sets of {exercise.reps} reps at {exercise.weight} lbs
            </div>
            <Link to="/shoulder"> 
              <button className="image-button" onClick={() => recordSet(index)}>View Workout</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Shoulder;
