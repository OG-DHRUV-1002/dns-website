import React from 'react';
import './style.css'; // Use the same shared CSS file

const InstagramButton = () => {
  // Replace with your club's actual Instagram profile URL
  const instagramProfileUrl = 'https://www.instagram.com/YourClubHandle';

  return (
    <a href={instagramProfileUrl} target="_blank" rel="noopener noreferrer" className="social-button instagram-button">
      Follow on Instagram
    </a>
  );
};

export default InstagramButton;
