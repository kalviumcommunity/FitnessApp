import React from 'react';

const Favorite = ({ favorites }) => {
    return (
        <div className="favourite-page">
            <h2>Favourite Exercises</h2>
            <ul className="exercise-list">
                {favorites.map((exercise, index) => (
                    <li key={index} className="exercise-item">
                        <div className="exercise-name">{exercise.name}</div>
                        <div className="sets-reps-weight">
                            {exercise.sets} sets of {exercise.reps} reps at {exercise.weight} lbs
                        </div>
                        <img src={exercise.image} alt={exercise.name} />
                        <p>{exercise.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Favorite;
