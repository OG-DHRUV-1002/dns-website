// src/components/EventCard.js
import React from 'react';

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <h3>{event.title}</h3>
      <p><strong>In partnership with:</strong> {event.ngo}</p>
      <p><strong>Date:</strong> {event.date}</p>
      <p>{event.description}</p>
      <a href={event.link} target="_blank" rel="noopener noreferrer">Sign Up Here</a>
    </div>
  );
};

export default EventCard;