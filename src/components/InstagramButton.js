// Filename MUST be InstagramButton.js
import React from 'react';
import './style.css'; // Assuming style.css is your main stylesheet

const InstagramButton = () => {
  // Replace with your club's official Instagram profile URL
  const instagramLink = "https://instagram.com/YourClubHandle";

  return (
    <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="instagram-button">
      Follow on Instagram
    </a>
  );
};

export default InstagramButton; // Make sure this line exists
