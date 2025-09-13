// src/components/EventCard.js
import React from 'react';

const EventCard = ({ event, isExpanded, onHeaderClick }) => {
  // This function stops the card from toggling when you click the "Sign Up" button
  const handleButtonClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={`event-card ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <div className="event-card-header" onClick={onHeaderClick}>
        <div className="event-summary">
          <h3>{event.title}</h3>
          <p><strong>📅 Date:</strong> {event.date} | <strong>🕖 Time:</strong> {event.time}</p>
        </div>
        
        {/* The "Sign Up" button is now part of the header */}
        <a 
          href={event.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="signup-button-header"
          onClick={handleButtonClick} // Prevents card from toggling
        >
          Sign Up Here
        </a>
      </div>

      {/* This content is still collapsible */}
      {isExpanded && (
        <div className="event-card-body">
          {/* A professional chevron icon now indicates the state */}
          <div className="event-toggle-icon expanded">▲</div>
          <p><strong>🫱🏼‍🫲🏼 In partnership with:</strong> {event.ngo}</p>
          <p><strong>📍 Location:</strong> {event.location}</p>
          <p><strong>💁🏻 Description:</strong> {event.description}</p>
        </div>
      )}
       {/* Show the down arrow only when collapsed */}
      {!isExpanded && (
         <div className="event-toggle-icon collapsed" onClick={onHeaderClick}>▼</div>
      )}
    </div>
  );
};

export default EventCard;
