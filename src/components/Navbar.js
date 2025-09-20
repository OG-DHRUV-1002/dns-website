// src/components/Navbar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Define your navigation links in one place
  const navLinks = [
    { to: "/", text: "Home", end: true },
    { to: "/about", text: "About Us" },
    { to: "/upcoming-events", text: "Upcoming Events" },
    { to: "/achievements", text: "Achievements" },
    { to: "/contact", text: "Contact" },
  ];

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

      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </div>

      {/* Desktop Navigation Links - Mapped from the array */}
      <ul className="nav-links">
        {navLinks.map((link) => (
          <li key={link.to}>
            <NavLink to={link.to} end={link.end} onClick={handleLinkClick}>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Dropdown - Mapped from the same array */}
      {isMenuOpen && (
        <ul className="mobile-nav-links">
          {navLinks.map((link) => (
            <li key={link.to} onClick={handleLinkClick}>
              <NavLink to={link.to} end={link.end}>
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
