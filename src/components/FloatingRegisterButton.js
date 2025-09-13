// src/components/FloatingRegisterButton.js
import React from 'react';
import './FloatingRegisterButton.css'; // We will create this CSS file next

const FloatingRegisterButton = () => {
  // The same link as your other register button
  const registerLink = "https://forms.gle/QP95Kq8PDMNx6TLVA";

  return (
    <a href={registerLink} target="_blank" rel="noopener noreferrer" className="floating-register-btn">
      📢 Register Here !!
    </a>
  );
};

export default FloatingRegisterButton;
