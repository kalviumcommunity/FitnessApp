import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "./Shoulder.css"; 

function Shoulder() {
  const [exercises, setExercises] = useState([
    { name: "Overhead Press", sets: 3, reps: 10, weight: 50, src: "https://tse2.mm.bing.net/th?id=OIP.cXBVIgjQeoRbqCPTcD9nsgHaFL&pid=Api&P=0&h=180", videoUrl:"https://youtu.be/QAQ64hK4Xxs?feature=shared" },
    { name: "Lateral Raises", sets: 3, reps: 12, weight: 15, src:"https://tse2.mm.bing.net/th?id=OIP.U12nNGhtOdiDXluoJBHdIwHaHa&pid=Api&P=0&h=180", videoUrl:"https://youtu.be/XPPfnSEATJA?feature=shared" },
    { name: "Front Raises", sets: 3, reps: 12, weight: 15 , src:"https://tse2.mm.bing.net/th?id=OIP.XCt1Zlg2PZGRGbIc9M153AHaE8&pid=Api&P=0&h=180", videoUrl:"https://youtu.be/hRJ6tR5-if0?feature=shared"},
    { name: "Seated Dumbbell Press", sets: 3, reps: 10, weight: 40, src:"https://tse2.mm.bing.net/th?id=OIP.42mH0My7JZhARXf4OY8KKQHaGa&pid=Api&P=0&h=180", videoUrl:"https://youtu.be/HzIiNhHhhtA?feature=shared" },
    { name: "Reverse Flyes", sets: 3, reps: 12, weight: 20 , src:"https://tse3.mm.bing.net/th?id=OIP.FW5rqhIU3fZVZN7RkQWoxQHaHa&pid=Api&P=0&h=180", videoUrl:"https://youtu.be/cL1HxbOBkTs?feature=shared" },
    { name: "Barbell Shrugs", sets: 3, reps: 12, weight: 135,src:"https://tse2.mm.bing.net/th?id=OIP.4rehVhnbXmzpu7F1MTU8qgHaF1&pid=Api&P=0&h=180", videoUrl:"https://youtu.be/jTVbilkxSAk?feature=shared" },
    { name: "Arnold Press", sets: 3, reps: 10, weight: 30,src:"https://tse3.mm.bing.net/th?id=OIP.6j2Nsduz34ZnkHagdjaQaQHaHa&pid=Api&P=0&h=180", videoUrl:"https://youtu.be/6Z15_WdXmVw?feature=shared" },
    { name: "Upright Rows", sets: 3, reps: 10, weight: 40 , src:"https://tse3.mm.bing.net/th?id=OIP.NAaeMyDRnrc0iOXtYKzOFwHaFU&pid=Api&P=0&h=180", videoUrl:"https://youtu.be/um3VVzqunPU?feature=shared"},
    { name: "Face Pulls", sets: 3, reps: 12, weight: 25 , src:"https://tse3.mm.bing.net/th?id=OIP.hR6AHEiODjY5K16O4vufdAHaEK&pid=Api&P=0&h=180", videoUrl:"https://youtu.be/0Po47vvj9g4?feature=shared"},
    { name: "Machine Shoulder Press", sets: 3, reps: 10, weight: 90,src:"https://tse4.mm.bing.net/th?id=OIP.GdCIxKoUkBWyfvkYL03G2gHaEK&pid=Api&P=0&h=180", videoUrl:"https://youtu.be/WvLMauqrnK8?feature=shared" }
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
            <a href={exercise.videoUrl} target="_blank" rel="noopener noreferrer">
              <img src={exercise.src} alt={exercise.name} />
            </a>
            <p>click the image to see the video</p>
            <Link to="/Instruction">
              <button>INSTRUCTIONS</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Shoulder;
