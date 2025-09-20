// src/components/EventCard.js
import React from 'react';
// Assuming main styles.css handles .event-card, .signup-btn etc.

const EventCard = ({ event, isExpanded, onHeaderClick }) => {
  return (
    // Your original card design implies a dark background for the card
    // and bright text. The classes '.event-card' and '.internal-event'
    // will control this via styles.css.
    <div className={`event-card ${isExpanded ? 'expanded' : ''} ${event.isInternal ? 'internal-event' : ''}`}>
      <div className="event-header" onClick={() => onHeaderClick(event.id)}>
        <h2>{event.title}</h2>
        <div className="event-info-summary"> {/* New class for event summary container */}
          <p>📅 Date: {event.date}</p>
          <p>🕖 Time: {event.time}</p>
          <span className="dropdown-arrow">{isExpanded ? '▲' : '▼'}</span>
        </div>
      </div>
      {isExpanded && (
        <div className="event-details">
          <p>🤝🏼 In partnership with: {event.ngo}</p> {/* Reverted to 'ngo' */}
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
