// src/components/Footer.js
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>Copyright &copy; {currentYear} Neelvardhan. All Rights Reserved 🌱</p>
    </footer>
  );
};

export default Footer;
