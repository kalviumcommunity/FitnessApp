import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "./Leg.css"; 

function Leg() {
  const [exercises, setExercises] = useState([
    { name: "Squats", sets: 4, reps: 12, weight: 135, src: "https://tse2.mm.bing.net/th?id=OIP.bRb8ffj7DWkwB24pnrbiTgHaLV&pid=Api&P=0&h=180" },
    { name: "Deadlifts", sets: 4, reps: 10, weight: 225, src:"https://tse2.mm.bing.net/th?id=OIP.dCf4ocAPuh4D9BRma6YqxgHaEv&pid=Api&P=0&h=180" },
    { name: "Leg Press", sets: 4, reps: 12, weight: 270 , src:"https://tse3.mm.bing.net/th?id=OIP.3LXb7Hyh6hes5rm6EhQJ-gHaFD&pid=Api&P=0&h=180"},
    { name: "Lunges", sets: 4, reps: 12, weight: "Body weight", src:"https://tse3.mm.bing.net/th?id=OIP.jku0H-xLrPgWhkbn2VauSQAAAA&pid=Api&P=0&h=180" },
    { name: "Calf Raises", sets: 4, reps: 15, weight: "Body weight",src:"https://tse1.mm.bing.net/th?id=OIP.Txspu6bQo70r9GYHRMZa3wHaFQ&pid=Api&P=0&h=180" },
    { name: "Leg Extensions", sets: 4, reps: 12, weight: 90,src:"https://tse4.mm.bing.net/th?id=OIP.C-wHMfYIMdcd7cunSJayBwHaE8&pid=Api&P=0&h=180" },
    { name: "Step Ups", sets: 4, reps: 12, weight: "Body weight" , src:"https://tse4.mm.bing.net/th?id=OIP.O9KxAI0j7LFkmCQt5d0EsQHaKw&pid=Api&P=0&h=180"},
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
