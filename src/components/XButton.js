// Filename MUST be XButton.js
import React from 'react';
import './style.css'; // Assuming style.css is your main stylesheet

const XButton = () => {
  // Replace with your club's official X profile URL
  const xLink = "https://twitter.com/YourClubHandle";

  return (
    <a href={xLink} target="_blank" rel="noopener noreferrer" className="x-button">
      Follow on X
    </a>
  );
};

export default XButton; // Make sure this line exists
