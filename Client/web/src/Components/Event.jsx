import React, { useState } from 'react';
import "./Event.css"

function Event() {

  const [events, setEvents] = useState([
    { id: 1, title: 'Fitness Tips', date: '2024-05-15', time: '10:00 AM', location: 'Studio A' },
    { id: 2, title: 'CrossFit Workshop', date: '2024-05-20', time: '6:00 PM', location: 'Gym Floor' },
    
  ]);

  
  const handleRSVP = (eventId) => {
    
    console.log(`RSVP for event with ID ${eventId} handled`);
  };

  return (
    <div className="event-container">
      <h2>Upcoming Events</h2>
      <div className="event-list">
        {events.map(event => (
          <div key={event.id} className="event-item">
            <div className="event-details">
              <h3>{event.title}</h3>
              <p>Date: {event.date}</p>
              <p>Time: {event.time}</p>
              <p>Location: {event.location}</p>
            </div>
            <div className="rsvp-button">
              <button onClick={() => handleRSVP(event.id)}>RSVP</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Event;
