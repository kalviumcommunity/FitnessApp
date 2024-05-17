import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "./Forearms.css"; 

function Forearms() {
  const [exercises, setExercises] = useState([
    { name: "Wrist Curls", sets: 3, reps: 15, weight: 20, src: "https://tse2.explicit.bing.net/th?id=OIP.8wmdj4VOEE4eyOt4E4fbjQHaEK&pid=Api&P=0&h=180" },
    { name: "Reverse Wrist Curls", sets: 3, reps: 15, weight: 20, src:"https://tse2.mm.bing.net/th?id=OIP.Fh5vpHp5lG5-kSx2z58fcgHaEK&pid=Api&P=0&h=180" },
    { name: "Farmer's Walk", sets: 3, reps: "30 meters", weight: "Body weight" , src:"https://tse1.mm.bing.net/th?id=OIP.RKUfc2CuYg6KFCPK1ILb9AHaE8&pid=Api&P=0&h=180"},
    { name: "Hand Gripper Exercise", sets: 3, reps: 12, weight: "Adjustable", src:"https://tse4.mm.bing.net/th?id=OIP.S-IeH2yjfy9AvE_h-VILFQAAAA&pid=Api&P=0&h=180" },
    { name: "Hammer Curls", sets: 3, reps: 12, weight: 25 , src:"https://tse4.mm.bing.net/th?id=OIP.S-IeH2yjfy9AvE_h-VILFQAAAA&pid=Api&P=0&h=180"},
    { name: "Reverse Curls", sets: 3, reps: 12, weight: 20,src:"https://tse2.mm.bing.net/th?id=OIP.e3AnaUWIhgWm0w6iYBXJfAHaDX&pid=Api&P=0&h=180" },
    { name: "Forearm Plank", sets: 3, reps: "Hold for 30 seconds", weight: "Body weight" , src:"https://tse1.mm.bing.net/th?id=OIP.8RaeKsBotKqyq4zcExkp6AHaEK&pid=Api&P=0&h=180"},
    { name: "Wrist Roller Exercise", sets: 3, reps: "5 rolls each way", weight: "Adjustable",src:"https://tse2.mm.bing.net/th?id=OIP.utOLRLvesrwYpj7KGL7PngAAAA&pid=Api&P=0&h=180" },
    { name: "Dead Hangs", sets: 3, reps: "Hold for 30 seconds", weight: "Body weight" , src:"https://tse1.mm.bing.net/th?id=OIP.yoCDC0fOJ5oHvlcGIlROogHaFX&pid=Api&P=0&h=180"}
  ]);

  const recordSet = (index) => {
    console.log(`Recorded set for exercise ${exercises[index].name}`);
  };

  return (
    <div className="forearms-container">
      <h2>Forearms Exercises</h2>
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

export default Forearms;
