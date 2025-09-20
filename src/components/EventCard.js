// src/components/EventCard.js
import React from 'react';
// Assuming you have a CSS file for EventCard specific styles if not in global CSS
// import './styles.css'; 

const EventCard = ({ event, isExpanded, onHeaderClick }) => {
  return (
    <div className={`event-card ${isExpanded ? 'expanded' : ''} ${event.isInternal ? 'internal-event' : ''}`}>
      <div className="event-header" onClick={() => onHeaderClick(event.id)}> {/* Use event.id */}
        <h2>{event.title}</h2>
        <div className="event-info">
          <p>📅 Date: {event.date}</p>
          <p>🕖 Time: {event.time}</p>
          <span className="dropdown-arrow">{isExpanded ? '▲' : '▼'}</span>
        </div>
      </div>
      {isExpanded && (
        <div className="event-details">
          <p>🤝🏼 In partnership with: {event.partners}</p> {/* Use 'partners' */}
          <p>📍 Location: {event.location}</p>
          <p>💁🏻 Description: {event.description}</p>
          {event.isInternal ? (
            <button className="signup-btn internal-btn">Internal Event</button>
          ) : (
            <a href={event.link} target="_blank" rel="noopener noreferrer" className="signup-btn">
              Sign Up Here
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default EventCard;
