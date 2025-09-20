// src/pages/Achievements.js
import React from 'react';
import FloatingRegisterButton from '../components/FloatingRegisterButton'; // <-- 1. Import the new component

const Achievements = () => {
  return (
    <div className="page-container">
      <h1 style={{color: '#5E9211' }}>Our Impact Journey</h1>
      <p>
        As a newly formed voluntary club, our journey to create a tangible impact is just beginning! We are incredibly excited about the future and are actively planning our first series of high-impact events with our partner NGOs.
      </p>
      
      {/* This is the new "In Progress" section */}
      <div className="in-progress-notice">
        <h2>Stay Tuned - Achievements In Progress!</h2>
        <p>
          This is where we will proudly showcase the results of our beach clean-ups, tree plantation drives, and community campaigns. Check back soon to see the difference our dedicated volunteers are making. Our first events are right around the corner!
        </p>
      </div>
  <FloatingRegisterButton /> 
    </div>
  );
};

export default Achievements;
