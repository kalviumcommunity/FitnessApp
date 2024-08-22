import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "./Leg.css"; 

function Legs() {
  const [exercises, setExercises] = useState([
    { name: "Squats", sets: 3, reps: 10, weight: 150, src: "https://hips.hearstapps.com/hmg-prod/images/workouts/2016/03/bodyweightsquat-1457041691.gif", videoUrl: "https://youtu.be/aclHkVaku9U?feature=shared" },
    { name: "Lunges", sets: 3, reps: 12, weight: 50, src: "https://fitnessprogramer.com/wp-content/uploads/2023/09/power-lunge.gif", videoUrl: "https://youtu.be/41Pr1T1Yhh0?feature=shared" },
    { name: "Leg Press", sets: 3, reps: 10, weight: 200, src: "https://www.inspireusafoundation.org/wp-content/uploads/2021/06/leg-press-calf-raise.gif", videoUrl: "https://youtu.be/I9nIV7U8wto?feature=shared" },
    { name: "Leg Extensions", sets: 3, reps: 12, weight: 60, src: "https://i.pinimg.com/originals/67/b3/3f/67b33f07f968201db8ef58e526dad53b.gif", videoUrl: "https://youtu.be/YyvSfVjQeL0?feature=shared" },
    { name: "Leg Curls", sets: 3, reps: 12, weight: 70, src: "https://media.tenor.com/ZElx6PviDq0AAAAM/gym.gif", videoUrl: "https://youtu.be/1Tq3QdYUuHs?feature=shared" },
    { name: "Calf Raises", sets: 3, reps: 15, weight: "Bodyweight", src: "https://i.pinimg.com/originals/2f/7c/ca/2f7cca8d37c65384c1d0bd84cc0a91d1.gif", videoUrl: "https://youtu.be/wyPzd3xB4ks?feature=shared" },
    { name: "Bulgarian Split Squats", sets: 3, reps: 10, weight: 40, src: "https://i.pinimg.com/originals/62/dc/62/62dc62bd3ad05a3a47aa2729195d8f3d.gif", videoUrl: "https://youtu.be/2C-uNgKwPLE?feature=shared" },
    { name: "Glute Bridge", sets: 3, reps: 15, weight: "Bodyweight", src: "https://hips.hearstapps.com/hmg-prod/images/workouts/2016/08/glutebridgedynamic-1472218237.gif", videoUrl: "https://youtu.be/wPM8icPu6H8?feature=shared" },
  ]);

  return (
    <div className="legs-container">
      <h2>Leg Exercises</h2>
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

export default Legs;
