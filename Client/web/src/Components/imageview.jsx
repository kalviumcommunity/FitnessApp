import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to access route parameters
import './imageview.css'; // Import CSS file

function ImageView() {
  const { exerciseIndex } = useParams(); // Get the exercise index from route parameters
  const exercises = [
    { name: "Bench Press", src: "https://media.istockphoto.com/id/181307197/photo/man-on-an-incline-bench-doing-bench-presses.jpg?s=612x612&w=0&k=20&c=V71Q2wWGqqUa7le7loMDBeb8B4vQ6HLk_jCHYViLuf8=" },
    { name: "Incline Bench Press", src: "image URL for Incline Bench Press" },
    // Define other exercise images
  ];
  
  // Ensure that exerciseIndex is a valid index
  if (!exercises[exerciseIndex]) {
    return <div>Exercise not found</div>;
  }

  return (
    <div className="imageViewContainer">
      <h2>{exercises[exerciseIndex].name}</h2>
      <img src={exercises[exerciseIndex].src} alt="Exercise Image" />
    </div>
  );
}

export default ImageView;
