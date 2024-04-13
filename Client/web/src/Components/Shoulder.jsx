import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "./Shoulder.css"; 

function Shoulder() {
  const [exercises, setExercises] = useState([
    { name: "Overhead Press", sets: 3, reps: 10, weight: 50, src: "https://tse2.mm.bing.net/th?id=OIP.cXBVIgjQeoRbqCPTcD9nsgHaFL&pid=Api&P=0&h=180" },
    { name: "Lateral Raises", sets: 3, reps: 12, weight: 15, src:"https://tse2.mm.bing.net/th?id=OIP.U12nNGhtOdiDXluoJBHdIwHaHa&pid=Api&P=0&h=180" },
    { name: "Front Raises", sets: 3, reps: 12, weight: 15 , src:"https://tse2.mm.bing.net/th?id=OIP.XCt1Zlg2PZGRGbIc9M153AHaE8&pid=Api&P=0&h=180"},
    { name: "Seated Dumbbell Press", sets: 3, reps: 10, weight: 40, src:"https://tse2.mm.bing.net/th?id=OIP.42mH0My7JZhARXf4OY8KKQHaGa&pid=Api&P=0&h=180" },
    { name: "Reverse Flyes", sets: 3, reps: 12, weight: 20 , src:"https://tse3.mm.bing.net/th?id=OIP.FW5rqhIU3fZVZN7RkQWoxQHaHa&pid=Api&P=0&h=180" },
    { name: "Barbell Shrugs", sets: 3, reps: 12, weight: 135,src:"https://tse2.mm.bing.net/th?id=OIP.4rehVhnbXmzpu7F1MTU8qgHaF1&pid=Api&P=0&h=180" },
    { name: "Arnold Press", sets: 3, reps: 10, weight: 30,src:"https://tse3.mm.bing.net/th?id=OIP.6j2Nsduz34ZnkHagdjaQaQHaHa&pid=Api&P=0&h=180" },
    { name: "Upright Rows", sets: 3, reps: 10, weight: 40 , src:"https://tse3.mm.bing.net/th?id=OIP.NAaeMyDRnrc0iOXtYKzOFwHaFU&pid=Api&P=0&h=180"},
    { name: "Face Pulls", sets: 3, reps: 12, weight: 25 , src:"https://tse3.mm.bing.net/th?id=OIP.hR6AHEiODjY5K16O4vufdAHaEK&pid=Api&P=0&h=180"},
    { name: "Machine Shoulder Press", sets: 3, reps: 10, weight: 90,src:"https://tse4.mm.bing.net/th?id=OIP.GdCIxKoUkBWyfvkYL03G2gHaEK&pid=Api&P=0&h=180" }
    
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
            <img src={exercise.src} alt={exercise.name} />
            <button className="image-button" onClick={() => recordSet(index)}>View Workout</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Shoulder;