// Filename MUST be XButton.js
import React from 'react';

const XButton = () => {
  // Replace with your club's official X profile URL
  const xLink = "https://twitter.com/YourClubHandle";

  return (
    <a href={xLink} target="_blank" rel="noopener noreferrer" className="x-button">
      𝕏 X(Twitter)
    </a>
  );
};

export default XButton; // Make sure this line exists
