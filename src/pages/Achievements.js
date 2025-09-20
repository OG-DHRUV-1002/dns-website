// src/pages/Achievements.js
import React, { useState } from 'react';
import FloatingRegisterButton from '../components/FloatingRegisterButton'; // <-- 1. Import the new component
// import '../../assets/styles.css'; // Only if not already globally imported

const Achievements = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentEventTitle, setCurrentEventTitle] = useState('');

  // --- CATEGORIZED ACHIEVEMENTS DATA ---
  const categorizedAchievements = {
    'Beach Clean-Up Drives': [
      {
        id: 'juhu-cleanup-internal-achieved',
        title: 'Juhu Silver Beach Cleanup (Internal Assessment)',
        ngo: 'Bhumi NGO & VFS Global, via ConnectFor',
        date: 'September 20, 2025',
        location: 'Silver Beach, Juhu, Mumbai',
        outcome: 'Successfully conducted an internal logistics assessment and refined operational workflows, crucial for future large-scale community events. ~150 kg of waste removed.',
        images: [
          'https://via.placeholder.com/400x300?text=Juhu+Cleanup+Image+1',
          'https://via.placeholder.com/400x300?text=Juhu+Cleanup+Image+2',
        ],
      },
      {
        id: 'carter-cleanup-achieved',
        title: 'Carter Beach Road Cleanup',
        ngo: 'Ek Saath - The Earth Foundation, via ConnectFor',
        date: 'October 04, 2025',
        location: 'Carter Road, Bandra (West)',
        outcome: 'Engaged X volunteers in removing Y kg of plastic and debris, significantly improving the beach environment.',
        images: [
          'https://via.placeholder.com/400x300?text=Carter+Cleanup+Image+1',
          'https://via.placeholder.com/400x300?text=Carter+Cleanup+Image+2',
          'https://via.placeholder.com/400x300?text=Carter+Cleanup+Image+3',
        ],
      },
    ],
    'Restoration Drives': [
      {
        id: 'aarey-plantation-achieved',
        title: 'Aarey Colony Tree Plantation Drive',
        ngo: 'WWF-India',
        date: 'October 12, 2025',
        location: 'Aarey Milk Colony',
        outcome: 'Planted 100 native saplings, contributing to local biodiversity and green cover.',
        images: [
          'https://via.placeholder.com/400x300?text=Aarey+Plantation+Image+1',
          'https://via.placeholder.com/400x300?text=Aarey+Plantation+Image+2',
        ],
      },
    ],
    'Donation Drives': [
      // ... add donation achievements with images
    ],
    'Environmental Awareness Campaigns': [
      // ... add awareness achievements with images
    ],
    'Community Teachings / Skill-Based Events': [
      // ... add teaching achievements with images
    ],
  };

  const openImageModal = (eventTitle, images) => {
    setCurrentEventTitle(eventTitle);
    setCurrentImages(images);
    setIsModalOpen(true);
  };

  const closeImageModal = () => {
    setIsModalOpen(false);
    setCurrentImages([]);
    setCurrentEventTitle('');
  };

  return (
    <div className="page-container achievements-page">
      <h1 className="page-title">Our Impact Journey</h1>
      <p className="page-description">Here we proudly showcase the results of our efforts across various initiatives. Click on an event to view images!</p>

      {Object.entries(categorizedAchievements).map(([category, events]) => (
        <section key={category} className="achievement-category-section">
          <h2 className="category-title">{category}</h2>
          {events.length > 0 ? (
            <div className="achievements-list">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="achievement-card clickable-card" // Added clickable-card class
                  onClick={() => openImageModal(event.title, event.images)}
                >
                  <h3>{event.title}</h3>
                  <p className="achievement-meta">
                    <span className="achievement-date">📅 {event.date}</span>
                    <span className="achievement-location">📍 {event.location}</span>
                  </p>
                  <p className="achievement-outcome">✨ {event.outcome}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-achievements-message">No completed {category.toLowerCase()} yet. Stay tuned for our future impact!</p>
          )}
        </section>
      ))}

      {/* Image Modal */}
      {isModalOpen && (
        <div className="image-modal-overlay" onClick={closeImageModal}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={closeImageModal}>&times;</button>
            <h3 className="modal-title">Images for: {currentEventTitle}</h3>
            <div className="modal-images-grid">
              {currentImages.map((src, index) => (
                <img key={index} src={src} alt={`${currentEventTitle} ${index + 1}`} className="modal-image" />
              ))}
            </div>
            {currentImages.length === 0 && <p>No images available for this event.</p>}
          </div>
        </div>
      )}
  <FloatingRegisterButton /> 

    </div>
  );
};

export default Achievements;
