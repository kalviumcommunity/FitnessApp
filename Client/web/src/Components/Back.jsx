import React, { useState } from "react";
import "./Back.css"; 

function Back() {
  const [exercises, setExercises] = useState([
    { name: "Deadlifts", sets: 3, reps: 8, weight: 200 },
    { name: "Pull-ups", sets: 3, reps: 10, weight: "Body Weight" },
    { name: "Barbell Rows", sets: 3, reps: 10, weight: 120 },
    { name: "Dumbbell Rows", sets: 3, reps: 12, weight: 50 },
    { name: "T-Bar Rows", sets: 3, reps: 10, weight: 100 },
    { name: "Cable Rows", sets: 3, reps: 12, weight: 100 },
    { name: "Lat Pulldowns", sets: 3, reps: 10, weight: 100 },
    { name: "Seated Cable Rows", sets: 3, reps: 10, weight: 90 },
    { name: "Bent-Over Rows", sets: 3, reps: 10, weight: 95 },
    { name: "One-Arm Dumbbell Rows", sets: 3, reps: 10, weight: 45 }
    
  ]);

  const recordSet = (index) => {
    console.log(`Recorded set for exercise ${exercises[index].name}`);
  };

  return (
    <div className="back-container">
      <h2>Back Exercises</h2>
      <ul className="exercise-list">
        {exercises.map((exercise, index) => (
          <li key={index} className="exercise-item">
            <div className="exercise-name">{exercise.name}</div>
            <div className="sets-reps-weight">
              {exercise.sets} sets of {exercise.reps} reps at {exercise.weight}
            </div>
            <button className="image-button" onClick={() => recordSet(index)}>Veiw image</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Back;
