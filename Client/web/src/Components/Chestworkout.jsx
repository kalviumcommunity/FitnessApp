import React, { useState } from 'react';
import "./Chestt.css"
function Chestworkout() {
  const [exercises, setExercises] = useState([
    { name: "Bench Press", sets: 4, reps: 10, weight: 185 },
    { name: "Incline Dumbbell Press", sets: 3, reps: 12, weight: 60 },
    { name: "Chest Flyes", sets: 3, reps: 12, weight: 40 },
    { name: "Push-Ups", sets: 3, reps: 15, weight: "Body Weight" },
    { name: "Cable Crossovers", sets: 3, reps: 12, weight: 50 },
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

export default Chestworkout;
