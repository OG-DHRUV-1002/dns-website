// src/components/Navbar.js
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };


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
        <li><NavLink to="/upcoming-events" onClick={handleLinkClick}>Upcoming Events</NavLink></li>
        <li><NavLink to="/achievements" onClick={handleLinkClick}>Achievements</NavLink></li>
        <li><NavLink to="/contact" onClick={handleLinkClick}>Contact</NavLink></li>
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
