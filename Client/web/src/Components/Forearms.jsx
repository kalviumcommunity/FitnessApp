import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "./Forearms.css"; 

function Forearms() {
  const [exercises, setExercises] = useState([
    { name: "Wrist Curls", sets: 3, reps: 15, weight: 20, src: "https://tse4.mm.bing.net/th?id=OIP.-oJAnpJv5pQyZub84akgRgHaHa&pid=Api&P=0&w=300&h=300" },
    { name: "Reverse Wrist Curls", sets: 3, reps: 15, weight: 20, src:"https://tse4.mm.bing.net/th?id=OIP.xBjRtQbBB6ysUbbNfzxFXwHaEK&pid=Api&P=0&w=269&h=152" },
    { name: "Farmer's Walk", sets: 3, reps: "30 meters", weight: "Body weight" , src:"https://tse2.mm.bing.net/th?id=OIP.eoX1vOa_5djThYGHPUnHdgHaEK&pid=Api&P=0&w=274&h=155"},
    { name: "Hand Gripper Exercise", sets: 3, reps: 12, weight: "Adjustable", src:"https://tse3.mm.bing.net/th?id=OIP.9vZsy06eFGPq4XLCUk1mmQHaFj&pid=Api&P=0&w=247&h=186" },
    { name: "Hammer Curls", sets: 3, reps: 12, weight: 25 , src:"https://tse4.mm.bing.net/th?id=OIP.VN6haKZkjV78W9xDI5TtXAHaE8&pid=Api&P=0&w=267&h=178"},
    { name: "Reverse Curls", sets: 3, reps: 12, weight: 20,src:"https://tse3.mm.bing.net/th?id=OIP.YhG54WT6VYHyRwhVUhp3oQHaEK&pid=Api&P=0&w=272&h=154" },
    { name: "Forearm Plank", sets: 3, reps: "Hold for 30 seconds", weight: "Body weight" , src:"https://tse4.mm.bing.net/th?id=OIP.hT7DY-fLRujhZgURhIOg9QHaE7&pid=Api&P=0&w=250&h=167"},
    { name: "Towel Hangs", sets: 3, reps: "Hold for 30 seconds", weight: "Body weight" , src:"https://tse3.mm.bing.net/th?id=OIP.oXvIKDo68qmrXav2VTp7ZwHaK5&pid=Api&P=0&w=300&h=300"},
    { name: "Wrist Roller Exercise", sets: 3, reps: "5 rolls each way", weight: "Adjustable",src:"https://tse1.mm.bing.net/th?id=OIP.fucvgE5plY-tYNNzAmOivAHaFk&pid=Api&P=0&w=263&h=198" },
    { name: "Dead Hangs", sets: 3, reps: "Hold for 30 seconds", weight: "Body weight" , src:"https://tse3.mm.bing.net/th?id=OIP.Z0JZrSLC-Cn8yL9Uu1jAigHaLG&pid=Api&P=0&w=300&h=300"}
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
