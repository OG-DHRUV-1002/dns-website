import React from 'react';
import './style.css'; // Use a shared CSS file for styling

const XButton = () => {
  // Replace with your club's actual X profile URL
  const xProfileUrl = 'https://twitter.com/YourClubHandle';

  return (
    <a href={xProfileUrl} target="_blank" rel="noopener noreferrer" className="social-button x-button">
      Connect on X
    </a>
  );
};

export default XButton;
