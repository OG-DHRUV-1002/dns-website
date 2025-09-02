// src/components/Navbar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close menu when a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* --- START OF CHANGES --- */}
      <NavLink to="/" className="navbar-left" onClick={handleLinkClick}>
        <img src="/images/logo.png" alt="DNS Logo" className="navbar-logo" />
        <div className="navbar-title">Neelvardhan Community</div>
      </NavLink>
      {/* --- END OF CHANGES --- */}

      {/* Hamburger Menu Icon (only for mobile) */}
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </div>

      {/* Desktop Navigation Links */}
      <ul className="nav-links">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/about">About Us</NavLink></li>
        <li><NavLink to="/upcoming-events">Upcoming Events</NavLink></li>
        <li><NavLink to="/achievements">Achievements</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>

      {/* Mobile Menu Dropdown (only shows when isMenuOpen is true) */}
      {isMenuOpen && (
        <ul className="mobile-nav-links">
          <li onClick={handleLinkClick}><NavLink to="/" end>Home</NavLink></li>
          <li onClick={handleLinkClick}><NavLink to="/about">About Us</NavLink></li>
          <li onClick={handleLinkClick}><NavLink to="/upcoming-events">Upcoming Events</NavLink></li>
          <li onClick={handleLinkClick}><NavLink to="/achievements">Achievements</NavLink></li>
          <li onClick={handleLinkClick}><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
