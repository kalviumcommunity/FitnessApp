import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "./Triceps.css"; 

function Triceps() {
  const [exercises, setExercises] = useState([
    { name: "Tricep Dips", sets: 3, reps: 10, weight: "Body weight", src: "https://tse1.mm.bing.net/th?id=OIP.uw8041nYiyD91Qblv1TreAHaE8&pid=Api&P=0&h=180" },
    { name: "Skull Crushers", sets: 3, reps: 12, weight: 30, src:"https://tse3.mm.bing.net/th?id=OIP.leWr6sRBozQ_2OiAslnxcAHaE8&pid=Api&P=0&h=180" },
    { name: "Tricep Kickbacks", sets: 3, reps: 12, weight: 20 , src:"https://tse2.mm.bing.net/th?id=OIP.wbKnQs4kAdo25QM-JGDQDwHaEK&pid=Api&P=0&h=180"},
    { name: "Close Grip Bench Press", sets: 3, reps: 10, weight: 135, src:"https://tse1.mm.bing.net/th?id=OIP.GPCN8kegOaBIcXrAV890IwHaE7&pid=Api&P=0&h=180" },
    { name: "Tricep Pushdowns", sets: 3, reps: 12, weight: 50 , src:"https://tse4.mm.bing.net/th?id=OIP.Hdxmk-Y53EvZsDmeqdEhrgHaG8&pid=Api&P=0&h=180"},
    { name: "Overhead Tricep Extension", sets: 3, reps: 12, weight: 25,src:"https://tse1.mm.bing.net/th?id=OIP.rm_umSndVerVVYtNRUT7FwHaE8&pid=Api&P=0&h=180" },
    { name: "Dumbbell Tricep Kickbacks", sets: 3, reps: 12, weight: 20,src:"https://tse2.mm.bing.net/th?id=OIP.wbKnQs4kAdo25QM-JGDQDwHaEK&pid=Api&P=0&h=180" },
    { name: "Diamond Push-Ups", sets: 3, reps: 10, weight: "Body weight" , src:"https://tse3.mm.bing.net/th?id=OIP.EVckyQGGWSo7l3UZNTQ3wgHaG_&pid=Api&P=0&h=180"},
    { name: "Tricep Rope Pushdowns", sets: 3, reps: 12, weight: 40 , src:"https://tse1.explicit.bing.net/th?id=OIP.4--NTXDxO5Icc8z5Yu6LGQEsCo&pid=Api&P=0&h=180"},
    { name: "Close Grip Push-Ups", sets: 3, reps: 12, weight: "Body weight",src:"https://tse2.mm.bing.net/th?id=OIP.USRyIzbwy1VjrQKzK24zpQAAAA&pid=Api&P=0&h=180" }
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
              {exercise.sets} sets of {exercise.reps} reps at {exercise.weight}
            </div>
            <img src={exercise.src} alt={exercise.name} />
            <button className="image-button" onClick={() => recordSet(index)}>View Workout</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Triceps;
