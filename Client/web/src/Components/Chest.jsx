import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "./Chest.css"; 
import imageview from "./imageview";


function Chest() {
  const [exercises, setExercises] = useState([
    { name: "Bench Press", sets: 3, reps: 10, weight: 100, src: "https://media.istockphoto.com/id/181307197/photo/man-on-an-incline-bench-doing-bench-presses.jpg?s=612x612&w=0&k=20&c=V71Q2wWGqqUa7le7loMDBeb8B4vQ6HLk_jCHYViLuf8=", videoUrl:"https://www.youtube.com/embed/2ljLZoAxu1w"  },
    { name: "Incline Bench Press", sets: 3, reps: 10, weight: 80,src:"https://media.istockphoto.com/id/534502980/photo/incline-bench-press-ending-position.jpg?s=612x612&w=0&k=20&c=pnO18DyQMhJvS7L3kG2mhvmAwy0NIHA-HIySHM2qXk4=" },
    // Rest of the exercises
  ]);

  const recordSet = (index) => {
    console.log(`Recorded set for exercise ${exercises[index].name}`);
  };

  const [selectedExercise, setSelectedExercise] = useState(null);

  const openVideoModal = (exercise) => {
    setSelectedExercise(exercise);
  };

  const closeVideoModal = () => {
    setSelectedExercise(null);
  };

  return (
    <div className="chest-container">
      <h2>Chest Exercises</h2>
      <ul className="exercise-list">
        {exercises.map((exercise, index) => (
          <li key={index} className="exercise-item">
            <div className="exercise-name">{exercise.name}</div>
            <div className="sets-reps-weight">
              {exercise.sets} sets of {exercise.reps} reps at {exercise.weight} lbs
            </div>
            <img
              src={exercise.src}
              alt=""
              onClick={() => openVideoModal(exercise)} 
            />
            <p>click the image to see the video</p>
          </li>
        ))}
      </ul>

      {/* Modal for displaying video */}
      {selectedExercise && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeVideoModal}>&times;</span>
            <iframe
              title="exercise-video"
              width="560"
              height="315"
              src={selectedExercise.videoUrl}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <Link to={selectedExercise.videoUrl} target="_blank">
              <button>View Video</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );

}

export default Chest;
