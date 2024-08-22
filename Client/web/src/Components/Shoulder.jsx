import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Shoulder.css";

function Shoulder() {
  const [exercises, setExercises] = useState([
    {
      name: "Overhead Press",
      sets: 3,
      reps: 10,
      weight: 50,
      src: "https://i.ytimg.com/vi/QAQ64hK4Xxs/maxresdefault.jpg",
      videoUrl: "https://youtu.be/QAQ64hK4Xxs?feature=shared",
    },
    {
      name: "Lateral Raises",
      sets: 3,
      reps: 12,
      weight: 15,
      src: "https://i.ytimg.com/vi/XPPfnSEATJA/maxresdefault.jpg",
      videoUrl: "https://youtu.be/XPPfnSEATJA?feature=shared",
    },
    {
      name: "Front Raises",
      sets: 3,
      reps: 12,
      weight: 15,
      src: "https://i.ytimg.com/vi/hRJ6tR5-if0/maxresdefault.jpg",
      videoUrl: "https://youtu.be/hRJ6tR5-if0?feature=shared",
    },
    {
      name: "Seated Dumbbell Press",
      sets: 3,
      reps: 10,
      weight: 40,
      src: "https://i.ytimg.com/vi/HzIiNhHhhtA/maxresdefault.jpg",
      videoUrl: "https://youtu.be/HzIiNhHhhtA?feature=shared",
    },
    {
      name: "Reverse Flyes",
      sets: 3,
      reps: 12,
      weight: 20,
      src: "https://i.ytimg.com/vi/cL1HxbOBkTs/maxresdefault.jpg",
      videoUrl: "https://youtu.be/cL1HxbOBkTs?feature=shared",
    },
    {
      name: "Barbell Shrugs",
      sets: 3,
      reps: 12,
      weight: 135,
      src: "https://i.ytimg.com/vi/jTVbilkxSAk/maxresdefault.jpg",
      videoUrl: "https://youtu.be/jTVbilkxSAk?feature=shared",
    },
    {
      name: "Arnold Press",
      sets: 3,
      reps: 10,
      weight: 30,
      src: "https://i.ytimg.com/vi/3ml7BH7mNwQ/maxresdefault.jpg",
      videoUrl: "https://youtu.be/6Z15_WdXmVw?feature=shared",
    },
    {
      name: "Upright Rows",
      sets: 3,
      reps: 10,
      weight: 40,
      src: "https://i.ytimg.com/vi/um3VVzqunPU/maxresdefault.jpg",
      videoUrl: "https://be/um3VVzqunPU?feature=shared", // Fixed URL typo
    },
    {
      name: "Face Pulls",
      sets: 3,
      reps: 12,
      weight: 25,
      src: "https://i.ytimg.com/vi/0Po47vvj9g4/maxresdefault.jpg",
      videoUrl: "https://youtu.be/0Po47vvj9g4?feature=shared",
    },
    {
      name: "Machine Shoulder Press",
      sets: 3,
      reps: 10,
      weight: 90,
      src: "https://i.ytimg.com/vi/WvLMauqrnK8/maxresdefault.jpg", // Fixed image URL
      videoUrl: "https://youtu.be/WvLMauqrnK8?feature=shared",
    },
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