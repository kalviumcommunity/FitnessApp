import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Biceps.css";

function Biceps() {
  const [exercises, setExercises] = useState([
    {
      name: "Bicep Curls",
      sets: 3,
      reps: 12,
      weight: 20,
      src: "https://cdn.shopify.com/s/files/1/0250/0362/2496/files/image2_0408198c-8e3f-4c37-86cf-a423f8e3e20f_480x480.gif?v=1669736995",
      videoUrl: "https://youtu.be/ykJmrZ5v0Oo",
    },
    {
      name: "Hammer Curls",
      sets: 3,
      reps: 12,
      weight: 25,
      src: "https://i.pinimg.com/originals/6e/0f/68/6e0f68a89b92c79e454eb3783c7ee4f2.gif",
      videoUrl: "https://youtu.be/ry2f-2D47zw",
    },
    {
      name: "Preacher Curls",
      sets: 3,
      reps: 10,
      weight: 30,
      src: "https://i.pinimg.com/originals/47/34/3d/47343d961ba4958cf640a46b8a26f799.gif",
      videoUrl: "https://youtu.be/h1mrD3cZz5o",
    },
    {
      name: "Concentration Curls",
      sets: 3,
      reps: 12,
      weight: 15,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbU1F3JN-hoOlLTcQuOegwx2cy1oImXygIzA&s",
      videoUrl: "https://youtu.be/0n_Y4ZYsTMk",
    },
    {
      name: "Incline Dumbbell Curls",
      sets: 3,
      reps: 10,
      weight: 25,
      src: "https://i.pinimg.com/originals/b4/30/64/b43064d9ad9f42493dbcf37e653ab87c.gif",
      videoUrl: "https://youtu.be/uqy-xLgZ13I",
    },
    {
      name: "Cable Curls",
      sets: 3,
      reps: 12,
      weight: 30,
      src: "https://i.pinimg.com/originals/f1/52/16/f15216ce06438b9ee776941c4f74dc6e.gif",
      videoUrl: "https://youtu.be/jD1c4o8rMZY",
    },
    {
      name: "Barbell Curls",
      sets: 3,
      reps: 10,
      weight: 40,
      src: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Curl.gif",
      videoUrl: "https://youtu.be/2t0hQXxTVQU",
    },
    {
      name: "Zottman Curls",
      sets: 3,
      reps: 12,
      weight: 20,
      src: "https://i.pinimg.com/originals/4b/e4/68/4be46841032506b311d43b8d49c6a58a.gif",
      videoUrl: "https://youtu.be/ak27C9Tx07s",
    },
    {
      name: "Spider Curls",
      sets: 3,
      reps: 10,
      weight: 25,
      src: "https://i.pinimg.com/originals/56/1a/ce/561ace4a1d37a20bf9fce2fbeb0655a5.gif",
      videoUrl: "https://youtu.be/q3LB0Of9s5Q",
    },
  ]);

  const recordSet = (index) => {
    console.log(`Recorded set for exercise ${exercises[index].name}`);
  };

  return (
    <div className="biceps-container">
      <h2>Biceps Exercises</h2>
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
              <button>INSTRUCTIONS</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Biceps;
