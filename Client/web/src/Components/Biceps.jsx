import React, { useState } from "react";
import "./Biceps.css"; 

function Biceps() {
  const [exercises, setExercises] = useState([
    { name: "Dumbbell Bicep Curl", sets: 4, reps: 12, weight: 20 },
    { name: "Hammer Curl", sets: 3, reps: 10, weight: 25 },
    { name: "Concentration Curl", sets: 3, reps: 10, weight: 15 },
    { name: "EZ Bar Curl", sets: 4, reps: 10, weight: 30 },
    { name: "Reverse Barbell Curl", sets: 3, reps: 12, weight: 20 },
    { name: "Alternating Dumbbell Curl", sets: 3, reps: 12, weight: 15 },
    { name: "Cable Curl", sets: 4, reps: 10, weight: 25 },
    { name: "Zottman Curl", sets: 3, reps: 10, weight: 20 },
    { name: "Seated Incline Dumbbell Curl", sets: 4, reps: 10, weight: 15 },
    { name: "Preacher Curl", sets: 3, reps: 12, weight: 25 },
    { name: "Wide-Grip Barbell Curl", sets: 4, reps: 10, weight: 35 },
    { name: "Spider Curl", sets: 3, reps: 12, weight: 15 },
    { name: "Standing Barbell Curl", sets: 4, reps: 10, weight: 30 },
    { name: "Machine Bicep Curl", sets: 3, reps: 12, weight: 40 },
    { name: "Incline Inner-Biceps Curl", sets: 3, reps: 10, weight: 15 },
  ]);

  const recordSet = (index) => {
    console.log(`Recorded set for exercise ${exercises[index].name}`);
  };

  return (
    <div className="biceps-container">
      <h2>Biceps Exercises</h2>
      <ul className="exercise-list">
        {exercises.map((exercise, index) => (
          <li key={index} className="exercise-item">
            <div className="exercise-name">{exercise.name}</div>
            <div className="sets-reps-weight">
              {exercise.sets} sets of {exercise.reps} reps at {exercise.weight} lbs
            </div>
            <button className="image-button" onClick={() => recordSet(index)}>View image</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Biceps;
