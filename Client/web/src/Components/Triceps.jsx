import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "./Triceps.css"; 

function Triceps() {
  const [exercises, setExercises] = useState([
    { name: "Tricep Dips", sets: 3, reps: 12, weight: "Bodyweight", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx0sQtzwVGzGXEyMuD1WjgpvCFLZCZP4g7dg&s", videoUrl:"https://youtu.be/s4RU04e53_I?feature=shared"},
    { name: "Tricep Pushdown", sets: 3, reps: 10, weight: 70, src: "https://i.pinimg.com/originals/cd/07/7e/cd077ebb5a33aedd405f082c1494189a.gif", videoUrl:"https://youtu.be/s4RU04e53_I?feature=shared"},
    { name: "Overhead Tricep Extension", sets: 3, reps: 12, weight: 40, src: "https://fitnessprogramer.com/wp-content/uploads/2020/05/Banded-Triceps-Extension.gif", videoUrl:"https://youtu.be/JuXXnDYkfxs?feature=shared"},
    { name: "Skull Crushers", sets: 3, reps: 10, weight: 50, src: "https://fitnessprogramer.com/wp-content/uploads/2022/02/Band-Skull-Crusher.gif", videoUrl:"https://youtu.be/KWRoyhh3uZk?feature=shared"},
    { name: "Close-Grip Bench Press", sets: 3, reps: 10, weight: 100, src: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Close-Grip-Bench-Press.gif", videoUrl:"https://youtu.be/DxM7PC1y78I?feature=shared"},
    { name: "Diamond Push-ups", sets: 3, reps: 15, weight: "Bodyweight", src: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Diamond-Push-up.gif", videoUrl:"https://youtu.be/wUyRzYpPFEk?feature=shared"},
    { name: "Tricep Kickbacks", sets: 3, reps: 12, weight: 25, src: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Kickback.gif", videoUrl:"https://youtu.be/6x_M_DtMECs?feature=shared"},
    { name: "Cable Overhead Tricep Extension", sets: 3, reps: 12, weight: 30, src: "https://i.pinimg.com/originals/e1/cb/f3/e1cbf337b41701d1c91e7ed4354542f2.gif", videoUrl:"https://youtu.be/MfnhmDo6JdI?feature=shared"},
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
              {exercise.sets} sets of {exercise.reps} reps at {exercise.weight} lbs
            </div>
            <a href={exercise.videoUrl} target="_blank" rel="noopener noreferrer">
              <img src={exercise.src} alt={exercise.name} />
            </a>
            <p>click the image to see the video</p>
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

export default Triceps;
