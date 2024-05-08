import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "./Chest.css"; 

function Chest() {
  const [exercises, setExercises] = useState([
    { name: "Bench Press", sets: 3, reps: 10, weight: 100, src: "https://media.istockphoto.com/id/181307197/photo/man-on-an-incline-bench-doing-bench-presses.jpg?s=612x612&w=0&k=20&c=V71Q2wWGqqUa7le7loMDBeb8B4vQ6HLk_jCHYViLuf8=", videoUrl:"https://youtu.be/dPb9JxFMuuE?feature=shared"  },
    { name: "Incline Bench Press", sets: 3, reps: 10, weight: 80,src:"https://media.istockphoto.com/id/534502980/photo/incline-bench-press-ending-position.jpg?s=612x612&w=0&k=20&c=pnO18DyQMhJvS7L3kG2mhvmAwy0NIHA-HIySHM2qXk4=" ,videoUrl:"https://youtu.be/SrqOu55lrYU?feature=shared"},
    { name: "Dumbbell Flyes", sets: 3, reps: 12, weight: 25, src: "data:image/jpeg;base64,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", videoUrl:"https://youtu.be/QENKPHhQVi4?feature=shared"  },
    { name: "Push-ups", sets: 3, reps: 15, weight: "Bodyweight", src: "https://i.pinimg.com/564x/86/4c/8d/864c8db2ff42ac116243c1220aa1fc3d.jpg", videoUrl:"https://youtu.be/euPXf2hqU3s?feature=shared"  },
    { name: "Chest Dips", sets: 3, reps: 12, weight: "Bodyweight", src: "https://i.ytimg.com/vi/wjUmnZH528Y/maxresdefault.jpg", videoUrl:"https://youtu.be/dX_nSOOJIsE?feature=shared" },
    { name: "Cable Crossover", sets: 3, reps: 12, weight: 30, src: "https://athleanx.com/wp-content/uploads/2010/09/BLOG-IMAGES_0056_DEATH-OF-CABLE-CROSS.jpg", videoUrl:"https://youtu.be/s1O5NV4PctE?feature=shared" },
    { name: "Dumbbell Pullover", sets: 3, reps: 12, weight: 35, src: "https://i0.wp.com/www.muscleandfitness.com/wp-content/uploads/2019/12/Muscular-Topless-Male-Performing-Lying-Dumbbell-Pullover-End-Position.jpg?quality=86&strip=al", videoUrl:"https://youtu.be/5YStMv6m2g8?feature=shared" },
    { name: "Machine Chest Press", sets: 3, reps: 10, weight: 120, src: "https://media.post.rvohealth.io/wp-content/uploads/2019/05/Male_Chest_Press_732x549-thumbnail.jpg", videoUrl:"https://youtu.be/xUm0BiZCWlQ?feature=shared" },
    { name: "Pec Deck Machine", sets: 3, reps: 12, weight: 90, src: "https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/05/Male_Gym_1296x728-body-1296x728.jpg?w=1155&h=1528", videoUrl:"https://youtu.be/eGjt4lk6g34?feature=shared" },
  
  ]);

  const recordSet = (index) => {
    console.log(`Recorded set for exercise ${exercises[index].name}`);
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

export default Chest;
