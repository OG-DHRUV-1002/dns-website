// src/pages/Achievements.js
import React, { useState } from 'react';
import FloatingRegisterButton from '../components/FloatingRegisterButton';
// import '../../assets/styles.css'; // Ensure your main CSS is imported, if not globally

const Achievements = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentEventTitle, setCurrentEventTitle] = useState('');

  // --- CATEGORIZED ACHIEVEMENTS DATA ---
  // As you complete events, add them here with their image URLs
  const categorizedAchievements = {
    'Beach Clean-Up Drives': [
      {
        id: 'juhu-cleanup-achieved',
        title: 'Juhu Silver Beach Cleanup',
        date: 'September 20, 2025',
        images: [
'/images/achievements/Juhu-Silver-Beach-Achieved/Banner Juhu Silver Beach.jpeg',
'images/achievements/Juhu-Silver-Beach-Achieved/silver (1).jpeg',
'images/achievements/Juhu-Silver-Beach-Achieved/silver (2).jpeg',
'images/achievements/Juhu-Silver-Beach-Achieved/silver (3).jpeg',
'images/achievements/Juhu-Silver-Beach-Achieved/silver (5).jpeg',
'images/achievements/Juhu-Silver-Beach-Achieved/silver (6).jpeg',
'images/achievements/Juhu-Silver-Beach-Achieved/silver (7).jpeg',
'images/achievements/Juhu-Silver-Beach-Achieved/silver (8).jpeg',
'images/achievements/Juhu-Silver-Beach-Achieved/silver (9).jpeg',
'images/achievements/Juhu-Silver-Beach-Achieved/silver (12).jpeg',
'images/achievements/Juhu-Silver-Beach-Achieved/silver (13).jpeg',
'images/achievements/Juhu-Silver-Beach-Achieved/silver (14).jpeg',
'images/achievements/Juhu-Silver-Beach-Achieved/silver (15).jpeg',
'images/achievements/Juhu-Silver-Beach-Achieved/silver (16).jpeg',
'images/achievements/Juhu-Silver-Beach-Achieved/silver (17).jpeg',
'images/achievements/Juhu-Silver-Beach-Achieved/silver (18).jpeg'
        ],
      },
      // { id: 'carter-cleanup-achieved', title: 'Carter Road Cleanup', date: 'October 04, 2025', images: [...] },
    ],
    'Restoration Drives': [],
    'Donation Drives': [],
    'Environmental Awareness Campaigns': [],
    'Community Teachings / Skill-Based Events': [],
  };

  const openImageModal = (title, images) => {
    setCurrentEventTitle(title);
    setCurrentImages(images);
    setIsModalOpen(true);
  };

  const closeImageModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="page-container">
      <h1 style={{color: '#5E9211' }}>Our Impact Journey</h1>
      <p>
        As a newly formed voluntary club, our journey to create a tangible impact is just beginning! Click on any completed event below to see the difference our dedicated volunteers have made.
      </p>

      {Object.entries(categorizedAchievements).map(([category, events]) => (
        <section key={category} className="achievement-category">
          <h2 className="category-title">{category}</h2>
          {events.length > 0 ? (
            <div className="achievements-grid">
              {events.map((event) => (
                <div 
                  key={event.id} 
                  className="achievement-card" 
                  onClick={() => openImageModal(event.title, event.images)}
                >
                   {/* --- CRITICAL CHANGE HERE: Using an <img> tag for the banner --- */}
                  <img
                    src={event.images.length > 0 ? event.images[0] : '/images/placeholder.jpg'}
                    alt={`Banner for ${event.title}`}
                    className="achievement-card-banner-img" // New class for styling
                  />
                  {/* --- END CRITICAL CHANGE --- */}

                  <div className="achievement-card-content">
                    <h3>{event.title}</h3>
                    <p>{event.date}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-achievements-message">No completed achievements in this category yet. Stay tuned!</p>
          )}
        </section>
      ))}

      {/* --- IMAGE MODAL (POP-UP) --- */}
      {isModalOpen && (
        <div className="image-modal-overlay" onClick={closeImageModal}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={closeModal}>&times;</button>
            <h3>{currentEventTitle}</h3>
            <div className="modal-images-container">
              {currentImages.map((src, index) => (
                <img key={index} src={src} alt={`${currentEventTitle} ${index + 1}`} />
              ))}
            </div>
          </div>
        </div>
      )}

      <FloatingRegisterButton />
    </div>
  );
};

export default Achievements;
