// src/components/Navbar.js
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; // Import useNavigate

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // --- NEW FUNCTION FOR UPCOMING EVENTS LINK ---
  const handleUpcomingEventsClick = (e) => {
    e.preventDefault(); // Prevent default NavLink navigation
    setIsMenuOpen(false); // Close mobile menu if open

    const confirmNavigation = window.confirm(
  "IMPORTANT: Please ensure you are a registered member of our WhatsApp community BEFORE you sign up for an event. Only sign-ups from registered members will be considered valid.\n" +
  "Also, make sure you are logged into your ConnectFor account."
);

    if (confirmNavigation) {
      navigate('/upcoming-events'); // Navigate if user confirms
    }
  };
  // --- END NEW FUNCTION ---

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <NavLink to="/" onClick={handleLinkClick}>
          <img src="/images/logo.png" alt="DNS Logo" className="navbar-logo" />
        </NavLink>
        <div className="navbar-title">Neelvardhan Community</div>
      </div>

      {/* Hamburger Menu Icon (only for mobile) */}
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </div>

      {/* Desktop Navigation Links */}
      <ul className="nav-links">
        <li><NavLink to="/" end onClick={handleLinkClick}>Home</NavLink></li>
        <li><NavLink to="/about" onClick={handleLinkClick}>About Us</NavLink></li>
        {/* --- APPLY NEW onClick HANDLER HERE --- */}
        <li><NavLink to="/upcoming-events" onClick={handleUpcomingEventsClick}>Upcoming Events</NavLink></li>
        <li><NavLink to="/achievements" onClick={handleLinkClick}>Achievements</NavLink></li>
        <li><NavLink to="/contact" onClick={handleLinkClick}>Contact</NavLink></li>
      </ul>

      {/* Mobile Menu Dropdown (only shows when isMenuOpen is true) */}
      {isMenuOpen && (
        <ul className="mobile-nav-links">
          <li onClick={handleLinkClick}><NavLink to="/" end>Home</NavLink></li>
          <li onClick={handleLinkClick}><NavLink to="/about">About Us</NavLink></li>
          {/* --- APPLY NEW onClick HANDLER HERE --- */}
          <li onClick={() => handleUpcomingEventsClick({ preventDefault: () => {} })}>
            <NavLink to="/upcoming-events">Upcoming Events</NavLink>
          </li>
          <li onClick={handleLinkClick}><NavLink to="/achievements">Achievements</NavLink></li>
          <li onClick={handleLinkClick}><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
