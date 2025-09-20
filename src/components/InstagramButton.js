// Filename MUST be InstagramButton.js
import React from 'react';

const InstagramButton = () => {
  // Replace with your club's official Instagram profile URL
  const instagramLink = "https://www.instagram.com/neelvardhan_club";

  return (
    <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="instagram-button">
      🅾 Instagram
    </a>
  );
};

export default InstagramButton; // Make sure this line exists
