// src/App.js
import React from 'react';
import { useLocation } from 'react-router-dom'; // <-- Import useLocation
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import UpcomingEvents from './pages/UpcomingEvents';
import Achievements from './pages/Achievements';
import Contact from './pages/Contact';

// Import CSS
import './assets/styles.css';


// This new component will help us apply padding conditionally
function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    // Only add the 'page-container' class (with padding) if it's NOT the homepage
    <main className={!isHomePage ? 'page-container' : ''}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/upcoming-events" element={<UpcomingEvents />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/contact" element={<Contact />} />
        {/* ... your other routes */}
      </Routes>
    </main>
  );
}


function App() {
  return (
    <Router>
      <Navbar />
      <AppContent /> {/* Use the new content wrapper */}
      <Footer />
    </Router>
  );
}

export default App;