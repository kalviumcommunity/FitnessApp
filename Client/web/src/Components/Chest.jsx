import React, { useState } from "react";
import "./Chest.css"; // Import the CSS file

function Chest() {
  const [exercises, setExercises] = useState([
    { name: "Bench Press", sets: 3, reps: 10, weight: 100 },
    { name: "Incline Bench Press", sets: 3, reps: 10, weight: 80 },
    { name: "Dumbbell Flyes", sets: 3, reps: 12, weight: 20 }
  ]);

  const recordSet = (index) => {
    console.log(`Recorded set for exercise ${exercises[index].name}`);
  };

  return (
    <div className="chest-container">
      <h2>Chest Exercises</h2>
      <ul className="exercise-list">
        {exercises.map((exercise, index) => (
          <li key={index} className="exercise-item">
            <div className="exercise-name">{exercise.name}</div>
            <div className="sets-reps-weight">
              {exercise.sets} sets of {exercise.reps} reps at {exercise.weight} lbs
            </div>
            <button className="record-button" onClick={() => recordSet(index)}>Record Set</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Chest;
