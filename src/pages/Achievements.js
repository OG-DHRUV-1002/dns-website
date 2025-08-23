// src/pages/Achievements.js
import React from 'react';

const Achievements = () => {
  return (
    <div className="page-container">
      <h1>Our Achievements</h1>
      <p>We are proud of the work our volunteers have accomplished. Here's a look at our impact so far.</p>
      <div className="gallery">
        <div className="gallery-item">
          <img src="/images/achievement1.png" alt="Beach Clean-up Drive" />
          <h3>Beach Clean-up Drive with Beach Please</h3>
          <p>Over 50 volunteers collected 200kg of waste.</p>
        </div>
        <div className="gallery-item">
          <img src="/images/achievement2.png" alt="Tree Planting Event" />
          <h3>Tree Planting with Local NGO</h3>
          <p>Planted 75 saplings in a community park.</p>
        </div>
        {/* Add more gallery items as you complete events */}
      </div>
    </div>
  );
};

export default Achievements;
