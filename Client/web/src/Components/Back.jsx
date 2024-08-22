import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Back.css";

function Back() {
  const [exercises, setExercises] = useState([
    { name: "Deadlift", sets: 3, reps: 10, weight: 150, src: "https://www.kettlebellkings.com/cdn/shop/articles/barbell-deadlift-movement.gif?v=1692228918", videoUrl: "https://youtu.be/op9kVnSso6Q?feature=shared" },
    { name: "Bent Over Row", sets: 3, reps: 10, weight: 100, src: "https://hips.hearstapps.com/hmg-prod/images/workouts/2016/03/barbellrow-1457038583.gif", videoUrl: "https://youtu.be/8k2cMYiG2mQ?feature=shared" },
    { name: "Pull-Ups", sets: 3, reps: 12, weight: "Bodyweight", src: "https://i.pinimg.com/originals/82/77/25/827725c8e3653c95be7a09d0611523c2.gif", videoUrl: "https://youtu.be/WB1i8cl7EtQ?feature=shared" },
    { name: "Lat Pulldown", sets: 3, reps: 12, weight: 90, src: "https://i.pinimg.com/originals/74/68/5a/74685a8a1b44b902c9d3ac1404844e88.gif", videoUrl: "https://youtu.be/Idl2ZZ8pTtQ?feature=shared" },
    { name: "Seated Cable Row", sets: 3, reps: 12, weight: 70, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD4zX-meoI7ZdS_TLLgCXaG7TsIhCgOgENsg&s", videoUrl: "https://youtu.be/GZbfZ033f74?feature=shared" },
    { name: "Single-Arm Dumbbell Row", sets: 3, reps: 12, weight: 45, src: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Row.gif", videoUrl: "https://youtu.be/xi8pvq6Y6Fo?feature=shared" },
    { name: "T-Bar Row", sets: 3, reps: 12, weight: 80, src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhOqvFL85VD4PBDTBWiCBwIDN8tDzYELNn-nfx6GChi8ABs1C3A2UI8A01md44tYbSvTFl9L517jgqVYf9hlZK-jkq_aoF5djbD3mN_8kDfiel0HaR4RWfll9d4CZu49jfgJiNJTVcywIb4ve3rwjqgSiQTOxrQMFUz-Gp2s1H5CwUFeKYvW07NtVF1CA/s360/T-Bar-Row.gif", videoUrl: "https://youtu.be/-xlFxkKTydE?feature=shared" },
    { name: "Face Pull", sets: 3, reps: 15, weight: 50, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv83aZQeflK-P7NBR2ShOengXRxZkbx7U6jw&s", videoUrl: "https://youtu.be/8XrseO50RoM?feature=shared" },
  ]);

  return (
    <div className="back-container">
      <h2>Back Exercises</h2>
      <ul className="exercise-list">
        {exercises.map((exercise, index) => (
          <li key={index} className="exercise-item">
            <div className="exercise-name">{exercise.name}</div>
            <div className="sets-reps-weight">
              {exercise.sets} sets of {exercise.reps} reps at {exercise.weight} lbs
            </div>
            <a href={exercise.videoUrl} target="_blank" rel="noopener noreferrer">
              <img src={exercise.src} alt={exercise.name} style={{ width: '100%', height: 'auto' }} />
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

export default Back;
