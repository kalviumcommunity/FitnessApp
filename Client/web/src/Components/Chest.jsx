import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "./Chest.css"; 
import imageview from "./imageview";


function Chest() {
  const [exercises, setExercises] = useState([
    { name: "Bench Press", sets: 3, reps: 10, weight: 100, src: "https://media.istockphoto.com/id/181307197/photo/man-on-an-incline-bench-doing-bench-presses.jpg?s=612x612&w=0&k=20&c=V71Q2wWGqqUa7le7loMDBeb8B4vQ6HLk_jCHYViLuf8=", videoUrl:"https://www.youtube.com/embed/2ljLZoAxu1w"  },
    { name: "Incline Bench Press", sets: 3, reps: 10, weight: 80,src:"https://media.istockphoto.com/id/534502980/photo/incline-bench-press-ending-position.jpg?s=612x612&w=0&k=20&c=pnO18DyQMhJvS7L3kG2mhvmAwy0NIHA-HIySHM2qXk4=" },
    { name: "Dumbbell Flyes", sets: 3, reps: 12, weight: 25, src: "https://media.istockphoto.com/id/156204987/photo/man-doing-dumbbell-flyes-exercise-picture-id156204987?s=612x612&w=0&k=20&c=Z3vdqYg7Y9obqblC5NNi5q6zIXzO49MFOv83RSsIqKo=", videoUrl:"https://www.youtube.com/embed/JoqGJr5P2W4"  },
    { name: "Push-ups", sets: 3, reps: 15, weight: "Bodyweight", src: "https://media.istockphoto.com/id/1154673964/photo/closeup-shot-of-young-sporty-woman-doing-push-ups-exercise-at-gym-picture-id1154673964?s=612x612&w=0&k=20&c=p64bXwUcsSBabHh7XqwyP2gG6d6lQuNJ1cQfgq1xK-4=", videoUrl:"https://www.youtube.com/embed/IODxDxX7oi4"  },
   
    { name: "Chest Dips", sets: 3, reps: 12, weight: "Bodyweight", src: "https://media.istockphoto.com/id/172186252/photo/muscular-man-doing-exercises-on-dips-bars-in-the-gym-picture-id172186252?s=612x612&w=0&k=20&c=1_1B7cNl7i-mynw8I2sFXEPx43od_KuxuFACAZZ20uI=", videoUrl:"https://www.youtube.com/embed/ykY2u4uU6bQ" },
    { name: "Cable Crossover", sets: 3, reps: 12, weight: 30, src: "https://media.istockphoto.com/id/476309182/photo/athletic-man-doing-exercise-on-a-machine-in-the-gym-picture-id476309182?s=612x612&w=0&k=20&c=hYWMK39qctn6X2ljkjRT65Mp_QQ7dt-rxLWkEkvlPQ0=", videoUrl:"https://www.youtube.com/embed/SGcJ6B84ZFA" },
    { name: "Dumbbell Pullover", sets: 3, reps: 12, weight: 35, src: "https://media.istockphoto.com/id/958179014/photo/muscular-man-training-his-chest-with-dumbbells-in-gym-picture-id958179014?s=612x612&w=0&k=20&c=eZ3Ektu15aZ1BX9GQe0L0mccO_M7bZcTzGxX6p3RkQ0=", videoUrl:"https://www.youtube.com/embed/sbILhtomBaY" },
    { name: "Machine Chest Press", sets: 3, reps: 10, weight: 120, src: "https://media.istockphoto.com/id/185586791/photo/man-training-on-chest-press-machine-in-gym-picture-id185586791?s=612x612&w=0&k=20&c=g5YrX4d7Tx7gZKYhbvdp7SsPtfRV3WPHwA6G-Cb5LL4=", videoUrl:"https://www.youtube.com/embed/t8Mg_V1pWJ4" },
    { name: "Pec Deck Machine", sets: 3, reps: 12, weight: 90, src: "https://media.istockphoto.com/id/172186360/photo/muscular-man-training-on-a-fly-rear-deltoid-machine-in-the-gym-picture-id172186360?s=612x612&w=0&k=20&c=7D7a5Sk0VlzGGV9mOVcW8ATcyuOS04mvLcVcrYI9nIU=", videoUrl:"https://www.youtube.com/embed/MS-7tIw7ieU" },
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
