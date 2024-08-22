import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "./Forearms.css"; 

function Forearms() {
  const [exercises, setExercises] = useState([
    { name: "Wrist Curls", sets: 3, reps: 15, weight: 30, src: "https://i.pinimg.com/originals/15/ac/77/15ac77a4a3da197a0336e9bff38491b2.gif", videoUrl:"https://youtu.be/kty-sbLD0yQ" },
    { name: "Reverse Wrist Curls", sets: 3, reps: 15, weight: 20, src: "https://fitnessprogramer.com/wp-content/uploads/2022/06/Barbell-Reverse-Wrist-Curl-Over-a-Bench.gif", videoUrl:"https://youtu.be/_Z8P9oaXIdQ" },
    { name: "Hammer Curls", sets: 3, reps: 12, weight: 25, src: "https://i.pinimg.com/originals/6e/0f/68/6e0f68a89b92c79e454eb3783c7ee4f2.gif", videoUrl:"https://youtu.be/zC3nLlEvin4" },
    { name: "Zottman Curls", sets: 3, reps: 10, weight: 20, src: "https://i.pinimg.com/originals/4b/e4/68/4be46841032506b311d43b8d49c6a58a.gif", videoUrl:"https://youtu.be/bMeI_5HZawI" },
    { name: "Farmer's Walk", sets: 3, reps: "50 meters", weight: "Heavy", src: "https://fitnessprogramer.com/wp-content/uploads/2022/02/Farmers-walk_Cardio.gif", videoUrl:"https://youtu.be/6gkHZF6df5k" },
    { name: "Plate Pinches", sets: 3, reps: "30 seconds", weight: "2 plates", src: "https://pump-app.s3.eu-west-2.amazonaws.com/exercise-assets/12251101-Standing-Plate-Presses_Shoulders_small.jpg", videoUrl:"https://youtu.be/EI4ksLJrFlM" },
    { name: "Reverse Curls", sets: 3, reps: 12, weight: 25, src: "https://fitnessprogramer.com/wp-content/uploads/2021/04/dumbbell-reverse-curl.gif", videoUrl:"https://youtu.be/_XRhOe1Txno" },
    { name: "Wrist Roller", sets: 3, reps: "2-3 minutes", weight: "Variable", src: "https://fitnessprogramer.com/wp-content/uploads/2021/08/wrist-roller.gif", videoUrl:"https://youtu.be/TMNwa_wkGxk" },
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
              {exercise.sets} sets of {exercise.reps} reps at {exercise.weight} lbs
            </div>
            <a href={exercise.videoUrl} target="_blank" rel="noopener noreferrer">
              <img src={exercise.src} alt={exercise.name} />
            </a>
            <p>Click the image to see the video</p>
            <Link to="/Instruction">
              <div className="save">
                <button>INSTRUCTIONS</button>   
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Forearms;
