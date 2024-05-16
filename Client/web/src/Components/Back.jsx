import React, { useState } from "react";
import "./Back.css"; 

function Back() {
  const [exercises, setExercises] = useState([
    { name: "Deadlifts", sets: 3, reps: 8, weight: 200 , src:"https://tse2.explicit.bing.net/th?id=OIP.cskqyLLhSFBOAvVHspzXkAHaEJ&pid=Api&P=0&h=180",videoUrl:"https://youtu.be/AweC3UaM14o?feature=shared"}, 
    { name: "Pull-ups", sets: 3, reps: 10, weight: "Body Weight", src:"https://tse3.mm.bing.net/th?id=OIP.14yPFkPqw1Ydm2jl0Zfy8gHaEb&pid=Api&P=0&h=180",videoUrl:"https://youtube.com/shorts/aXIbyf4EnDU?feature=shared"},
    { name: "Barbell Rows", sets: 3, reps: 10, weight: 120 , src:"https://tse1.mm.bing.net/th?id=OIP.izLsrBR5hnIN6F89xuoh5QHaEc&pid=Api&P=0&h=180",videoUrl:"https://youtu.be/T3N-TO4reLQ?feature=shared"},
    { name: "Dumbbell Rows", sets: 3, reps: 12, weight: 50 , src:"https://tse1.mm.bing.net/th?id=OIP.LK0SzoKFoEjpIQ8X4SiNzAHaE5&pid=Api&P=0&h=180",videoUrl:"https://youtu.be/gfUg6qWohTk?feature=shared"},
    { name: "T-Bar Rows", sets: 3, reps: 10, weight: 100, src:"https://tse1.mm.bing.net/th?id=OIP.aQNk0Aj1BTxuBPRdUJYyCAHaFj&pid=Api&P=0&h=180" ,videoUrl:"https://youtu.be/yPis7nlbqdY?feature=shared"},
    { name: "Cable Rows", sets: 3, reps: 12, weight: 100, src:"https://tse1.mm.bing.net/th?id=OIP.0fvCdRTT8jhHtKVbM9LNDQHaEc&pid=Api&P=0&h=180",videoUrl:"https://youtu.be/UCXxvVItLoM?feature=shared"},
    { name: "Lat Pulldowns", sets: 3, reps: 10, weight: 100 , src:"https://tse3.mm.bing.net/th?id=OIP.Lqom5OPadf-n9d9HfvtJ9gHaJ4&pid=Api&P=0&h=180",videoUrl:"https://youtu.be/JGeRYIZdojU?feature=shared"},
    { name: "Seated Cable Rows", sets: 3, reps: 10, weight: 90 , src:"https://tse1.mm.bing.net/th?id=OIP.QfldrvqUJDz3D3Hq1YkGtwHaFj&pid=Api&P=0&h=180",videoUrl:"https://youtube.com/shorts/TzHaXk3WSJY?feature=shared"},
    { name: "Bent-Over Rows", sets: 3, reps: 10, weight: 95 , src:"https://tse3.mm.bing.net/th?id=OIP.PkjOIAKSuV7YwfmcZRc0xQHaEp&pid=Api&P=0&h=180",videoUrl:"https://youtu.be/qXrTDQG1oUQ?feature=shared"},
    { name: "One-Arm Dumbbell Rows", sets: 3, reps: 10, weight: 45 ,src:"https://tse3.mm.bing.net/th?id=OIP._DdMBb8tmwOh1c9IyKiiOQHaGk&pid=Api&P=0&h=180",videoUrl:"https://youtu.be/gfUg6qWohTk?feature=shared"}
  ]);

  const recordSet = (index) => {
    console.log(`Recorded set for exercise ${exercises[index].name}`);
  };

  return (
    <div className="back-container">
      <h2>Back Exercises</h2>
      <ul className="exercise-list">
        {exercises.map((exercise, index) => (
          <li key={index} className="exercise-item">
            <div className="exercise-name">{exercise.name}</div>
            <div className="sets-reps-weight">
              {exercise.sets} sets of {exercise.reps} reps at {exercise.weight}
            </div>
            
            <img src={exercise.src} alt={exercise.name} className="exercise-image" />
            <button className="image-button" onClick={() => recordSet(index)}>View Image</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Back;
