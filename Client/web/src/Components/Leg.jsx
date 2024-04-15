import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "./Leg.css"; 

function Leg() {
  const [exercises, setExercises] = useState([
    { name: "Squats", sets: 4, reps: 12, weight: 135, src: "https://tse4.mm.bing.net/th?id=OIP.yo_AwoXCJmoS9eZiJfJ3LgHaNK&pid=Api&P=0&w=300&h=300" },
    { name: "Deadlifts", sets: 4, reps: 10, weight: 225, src:"https://tse2.mm.bing.net/th?id=OIP.T-f2XrM2qSxQUwNzCFgfAgHaE7&pid=Api&P=0&w=236&h=157" },
    { name: "Leg Press", sets: 4, reps: 12, weight: 270 , src:"https://tse4.mm.bing.net/th?id=OIP.Z-f5RtOCU3R_eQ0m0o2YrwHaG3&pid=Api&P=0&w=179&h=165"},
    { name: "Lunges", sets: 4, reps: 12, weight: "Body weight", src:"https://tse2.mm.bing.net/th?id=OIP.LfrSsxW9lFgTFu-mGUKWjQHaFF&pid=Api&P=0&w=241&h=166" },
    { name: "Leg Curls", sets: 4, reps: 12, weight: 90 , src:"https://tse1.mm.bing.net/th?id=OIP.ubv76-F1IOYRVmr8eXY79wHaEk&pid=Api&P=0&w=283&h=175"},
    { name: "Calf Raises", sets: 4, reps: 15, weight: "Body weight",src:"https://tse2.mm.bing.net/th?id=OIP.nJCh07pyO6PeCv6K6KgDOAHaEK&pid=Api&P=0&w=299&h=169" },
    { name: "Leg Extensions", sets: 4, reps: 12, weight: 90,src:"https://tse2.mm.bing.net/th?id=OIP.xjsWx0f2cNYCZABEr7Hf5QHaE8&pid=Api&P=0&w=232&h=155" },
    { name: "Step Ups", sets: 4, reps: 12, weight: "Body weight" , src:"https://tse4.mm.bing.net/th?id=OIP.sjAKuUJGhzecRFr6FhjEfgHaEK&pid=Api&P=0&w=320&h=180"},
    { name: "Hack Squats", sets: 4, reps: 12, weight: 180 , src:"https://tse2.mm.bing.net/th?id=OIP.WXVWNoT6NtAB1e6Mvz8NdwHaEK&pid=Api&P=0&w=306&h=173"},
    { name: "Good Mornings", sets: 4, reps: 12, weight: 95 , src:"https://tse3.mm.bing.net/th?id=OIP.lf5PZgPENSwNkjz5Av1qPwHaEK&pid=Api&P=0&w=308&h=174"}
  ]);

  const recordSet = (index) => {
    console.log(`Recorded set for exercise ${exercises[index].name}`);
  };

  return (
    <div className="leg-container">
      <h2>Leg Exercises</h2>
      <ul className="exercise-list">
        {exercises.map((exercise, index) => (
          <li key={index} className="exercise-item">
            <div className="exercise-name">{exercise.name}</div>
            <div className="sets-reps-weight">
              {exercise.sets} sets of {exercise.reps} reps at {exercise.weight}
            </div>
            <img src={exercise.src} alt={exercise.name} />
            <button className="image-button" onClick={() => recordSet(index)}>View Workout</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Leg;
