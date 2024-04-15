import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "./Triceps.css"; 

function Triceps() {
  const [exercises, setExercises] = useState([
    { name: "Tricep Dips", sets: 3, reps: 10, weight: "Body weight", src: "https://tse2.mm.bing.net/th?id=OIP.B6idwK4P5t53xqny-rJgjAHaHa&pid=Api&P=0&h=180" },
    { name: "Skull Crushers", sets: 3, reps: 12, weight: 30, src:"https://tse1.mm.bing.net/th?id=OIP.lRKc9kH4U5LQu8UZhV0ivgHaFj&pid=Api&P=0&h=180" },
    { name: "Tricep Kickbacks", sets: 3, reps: 12, weight: 20 , src:"https://tse3.mm.bing.net/th?id=OIP.8Hc7or2ftQ1p2MMF4C30NwHaG2&pid=Api&P=0&h=180"},
    { name: "Close Grip Bench Press", sets: 3, reps: 10, weight: 135, src:"https://tse1.mm.bing.net/th?id=OIP.9RMeR9NATL4jlwU4qBBV9QHaEK&pid=Api&P=0&h=180" },
    { name: "Tricep Pushdowns", sets: 3, reps: 12, weight: 50 , src:"https://tse4.mm.bing.net/th?id=OIP.7v8V-YHk3Jv1E2n2eklnbgHaEK&pid=Api&P=0&h=180"},
    { name: "Overhead Tricep Extension", sets: 3, reps: 12, weight: 25,src:"https://tse3.mm.bing.net/th?id=OIP.CsWtJn-cWMkppLbIBJQ7mQHaFj&pid=Api&P=0&h=180" },
    { name: "Dumbbell Tricep Kickbacks", sets: 3, reps: 12, weight: 20,src:"https://tse3.mm.bing.net/th?id=OIP.M1y8USaVBmZ76V3-qKQ3zgHaFj&pid=Api&P=0&h=180" },
    { name: "Diamond Push-Ups", sets: 3, reps: 10, weight: "Body weight" , src:"https://tse3.mm.bing.net/th?id=OIP.ayMZw6RURym6BhI0TmEv4gHaHa&pid=Api&P=0&h=180"},
    { name: "Tricep Rope Pushdowns", sets: 3, reps: 12, weight: 40 , src:"https://tse4.mm.bing.net/th?id=OIP.q2Og3Rn1zKlcbLx4HS78fgHaI4&pid=Api&P=0&h=180"},
    { name: "Close Grip Push-Ups", sets: 3, reps: 12, weight: "Body weight",src:"https://tse2.mm.bing.net/th?id=OIP.S0-zlx94NWbw2iLKF2mS-AHaEK&pid=Api&P=0&h=180" }
  ]);

  const recordSet = (index) => {
    console.log(`Recorded set for exercise ${exercises[index].name}`);
  };

  return (
    <div className="triceps-container">
      <h2>Triceps Exercises</h2>
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

export default Triceps;
