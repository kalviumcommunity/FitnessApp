import React, { useState } from 'react';
import './Home.css';
import backgroundImage from '../assets/background.avif';
import Chest from './Chest';
import Shoulder from './Shoulder';
import WORKOUTS from '../assets/chest.png';
import { Link } from 'react-router-dom';
import Back from './Back';
import Biceps from './Biceps';
import Triceps from './Triceps';
import Forearms from './Forearms';
import Leg from './Leg';
import Workoutplan from './Workoutplan';
import Crisp from './Crisp';

const Home = () => {
    const [activeComponent, setActiveComponent] = useState(null);

    const handleBoxClick = (component) => {
        setActiveComponent(component);
    };

    return (
        <>
            <Crisp /> {/* Add the Crisp component here */}
            <div className="home-container" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
                <div className="inner-box box below">
                    <img src={WORKOUTS} alt="Chest Workout" />
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX///8AAAABAQFJSUnQ0NA+Pj7W1tb8/Pzv7+/r6+tFRUXIyMj5+fn09PRubm65ubnj4+OsrKyioqJOTk5oaGiysrKRkZEzMzMiIiKZmZkuLi4pKSk6OjpfX195eXlUVFSEhIQNDQ3c3NwXFxccHByUlJSAgIB0dHTzKTXFAAAGqUlEQVR4nO2diWKiMBRFCS6RRXFDpdbdtv//hxMIrUCigs0LzMw97Vi1yvNAyEtCJ3EcAAAAAAAAAAAAAAAAAAAAAAAAT+H8Xwx1i/kfRBzNPne9gQ16u8/ZyLbeeOYzu/izsUU/b75Jg7r2SMNt5p4lvzDwM7v0xsrhE2GkpR+ENgS9RPpZ0itKMpZYOIzTvYjHbNr9WKZR91NywUlbgnncCbHiaJ+fgu0oppH3pIkjTNoUzGMnlNVN0K5gHj2gE/T81s7BH0Xx5VNVqNyZVwXd0o/Kwzq/bPKWm+KcqpE6vhaS4K2tQU45lLi3oWnAcScunISu3eJaaGCknyEmOogLVtyR4v4gCYb0BMmgpCjuL0j8nFFxR6aCM5o4GmbFZka6dylyIk/DFKOwoa1eqYgyZMW9y4iK6bFw5mVH0OIohjyKt+hHkjDL0qkwsDuqwAelSmBJEuRQMkysjg5xnpQMDyRRFqX8QNh00hKUcgdNZdorGfZJYtynXzLskcSAIS0wNAEMaYGhCWBICwxNAENaYGgCGNICQxPAkBYYmgCGtMDQBDCkBYYmgCEtMDQBDGmBoQlgSAsMTQBDWmBoAhjSAkMTwJAWGJoAhrTA0AQwpAWGJoAhLTA0AQxpgaEJYEgLDE0AQ1pgaAIY0gJDE8CQFhiaAIa0wNAEMKQFhiaAIS0wNAEMa+AFURwFL0239ncYBpOteOd28srML3+DYTh/y9/7Nm8+9eFfYOjtT/nkcoyd9o1LatcNuXNesHy+ruxmcW44kVbHDTmP2G3aTPkzajbRVMcNR6vKxIDpplaNppXrtuF5WZwzT35G8Wh5brCNLhvyoFcVzB/3gvoFtcOG4zRJqBOBZs+8zWvP09lVQ+6M9pc7M/Omz172o5p1akcNuTP11RJaKqn+tJ5iRw2dSB4sreD3L6JaW+qm4Xilq2KUw7iqczJ20lAzf7sy+XA+z/rzgtpBwzBaMFYSyh9onltET5viXTPkTpisK2dg1pLZHDbMVZ5n6yR8UuF0zJA7469qknDT703sxRt5t1R02eVr/FixY4bO9L2a5bNH2yF3+FlpAWSP3h8vetAxw/jEmFLFsHTmWJ4eqYPSyEkL8Cl+tMlOGY7LPYm8iLLrh5w8Wvz7uLJqQX2WNjpkyM+TqqBcJKaY2aNe5TBKxcn57rnYIcMsSZQF5Ycv1CSiy1/NlVJxcbeB0xFD4ZBsywkvf7SqDsx4K6Z74Ta5Mw96Rwwd71NTT4qHkXqGjaOqonznp36QqiOG/YPSmc+ShL4zP90quyN970G/6Q4Ycifasmo7Jr1Z6vuAou+4/HnNzw4RN9tI8/ouGKbDTaxSh4qb6/x+W4XPr2qdyrSDVB0wzIebqkmi97j7dydtqINU7RsGg+q6JTJJDJ9sdah0sbLd9F69ttG24Xh21SaJj+ej996HNm1cKqsBtmrInenxpJZQl13jOldgwmijKKbN1M/SCE6bhtwZKk3pTLdXd8Sx31NKeNZQHxYUWz2G4hjoKsQGa8B5k9vbCoqbQi3VomF4VD+deOU1abRxkTaqxTwNd/w5Gdsz9JRmDFN6EnWI/Oqwo2zgfFdVbRmGwUDbYd81uegiOe+0TdpBvjJnS4ajubYncWp24SxntLro6tTtPNtYG4Zc9CQuSrYW3+vZKysUciecrZVBKvF1Eb0N3s4xVJKEvL/ov7qKEO8vbpsplHmRNloxjK+VTyOP5/I3K4aN1GupWes9bsFwqF6TkGto/jKKug6oTBtD24buRruz102ThEq01haNTWngh97QZdrhpmXTvyFR4aIb5uoGqUrRLRi6mob2ZlX3gu4jRNd/pWuKu3YNy0jddWxq8cxxvFbGlEvx7Bumv/GH5paa48MHF8dbMMw+ys7sOsTh7oGiZUNZln6bJFSS28bbNZRXxgLjC1pyJ1Cu0LVimFXsBpKESpo2TvqSatEwy1SXlUeyJKlo2a8u2irVnqHMgpprEqYYK4NUdg2z3Tt4NiD6O0TacJWSaslQBv6qP9z0GtMvNfnbMZQxX/iT9KaE81s4m4bZyTEwnyRUuKOMBVEZLgo7UvYkhhYEsxHncr/YpVotd1KM4Tb9O+1fMVqVjqLLJgRBuBN/nw5Z/f1mb2X1lHSQ6vvP4hjVyuOhn42EyTr0YH1NZzny7GaDcT5RBTeVhy8NsqdOEpro+1t4sujTdX4iJHYXVpfwJI++Jty9PN69r/3jS/+9zgDe0V+/72I7Ffg/C/+5+R/DAwAAAAAAAAAAAAAAAACt8gfel1RLSPAA0QAAAABJRU5ErkJggg=="alt="Save Icon" className="save-icon" />
                    <Link to="/chest" className="box above" onClick={() => handleBoxClick(Chest)}>
                        <button className="view-workout-btn">View Workout</button>
                    </Link>
                </div>
                <div className="inner-box box below">
                    <img src="https://play-lh.googleusercontent.com/Q36ZaK_YdHFyMTcM22ZLzjxsRp62giJu8CcnDaw51IMl6fz4e9Wlf-14t7pP6TemFz8" alt="Shoulder Workout" />
                    <img src="data:image/png;base64,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" alt="Save Icon" className="save-icon" />
                    <Link to="/Shoulder" className="box above" onClick={() => handleBoxClick(Shoulder)}>
                        <button className="view-workout-btn">View Workout</button>
                    </Link>
                </div>
                <div className="inner-box box below">
                    <img src="https://tse1.mm.bing.net/th?id=OIP.uWnYJaLEuYeyiuspCwYCHQHaGa&pid=Api&P=0&h=180" alt="Back Workout" />
                    <img src=" data:image/png;base64,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"alt="Save Icon" className="save-icon" />
                    <Link to="/Back" className="box above" onClick={() => handleBoxClick(Back)}>
                        <button className="view-workout-btn">View Workout</button>
                    </Link>
                </div>
                <div className="inner-box box below">
                    <img src="https://athleanx.com/wp-content/uploads/2021/11/BICEPS_MAIN-IMAGE.png" alt="Biceps Workout" />
                    <img src="data:image/png;base64,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"alt="Save Icon" className="save-icon" />
                    <Link to="/Biceps" className="box above" onClick={() => handleBoxClick(Biceps)}>
                        <button className="view-workout-btn">View Workout</button>
                    </Link>
                </div>
                <div className="inner-box box below">
                    <img src="https://st.depositphotos.com/2389277/3604/i/450/depositphotos_36042999-stock-photo-exercise-for-triceps-with-cable.jpg" alt="Triceps Workout" />
                    <img src=" data:image/png;base64,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"alt="Save Icon" className="save-icon" />
                    <Link to="/Triceps" className="box above" onClick={() => handleBoxClick(Triceps)}>
                        <button className="view-workout-btn">View Workout</button>
                    </Link>
                </div>
                <div className="inner-box box below">
                    <img src="https://athleanx.com/wp-content/uploads/2022/12/FOREARMS-Workouts.png" alt="Forearms Workout" />
                    <img src="data:image/png;base64,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" alt="Save Icon" className="save-icon" />
                    <Link to="/Forearms" className="box above" onClick={() => handleBoxClick(Forearms)}>
                        <button className="view-workout-btn">View Workout</button>
                    </Link>
                </div>
                <div className="inner-box box below">
                    <img src="https://www.bodybuilding.com/fun/images/2015/leg-workouts-for-men-the-7-best-workouts-for-thicker-quads-glutes-and-hams-mobile-facebook-960x540.jpg" alt="Leg Workout" />
                    <img src="data:image/png;base64,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"alt="Save Icon" className="save-icon" />
                    <Link to="/Leg" className="box above" onClick={() => handleBoxClick(Leg)}>
                        <button className="view-workout-btn">View Workout</button>
                    </Link>
                </div>
                <div className="inner-box box below">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9mzAv_lMY2NycvZ3EwJVJVhoftZ3VOnXs729dNkoYNg&s" alt="Workout Plan" />
                    <img src="data:image/png;base64,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"alt="Save Icon" className="save-icon" />
                    <Link to="/Workoutplan" className="box above" onClick={() => handleBoxClick(Workoutplan)}>
                        <button className="view-workout-btn">View Workout Plan</button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Home;
