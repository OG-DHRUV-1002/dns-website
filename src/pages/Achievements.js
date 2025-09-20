// src/pages/Achievements.js
import React from 'react';
import FloatingRegisterButton from '../components/FloatingRegisterButton'; // <-- 1. Import the new component
// import '../../assets/styles.css'; // Only if not already globally imported

const Achievements = () => {
  // --- CATEGORIZED ACHIEVEMENTS DATA (WITH ORIGINAL PROPERTIES) ---
  const categorizedAchievements = {
    'Beach Clean-Up Drives': [
      {
        id: 'juhu-cleanup-internal-achieved',
        title: 'Juhu Silver Beach Cleanup (Internal Assessment)',
        ngo: 'Bhumi NGO & VFS Global, via ConnectFor',
        date: 'September 20, 2025',
        location: 'Silver Beach, Juhu, Mumbai',
        outcome: 'Successfully conducted an internal logistics assessment and refined operational workflows, crucial for future large-scale community events. ~150 kg of waste removed.',
      },
      // {
      //   id: 'carter-cleanup-achieved',
      //   title: 'Carter Beach Road Cleanup',
      //   ngo: 'Ek Saath - The Earth Foundation, via ConnectFor',
      //   date: 'October 04, 2025',
      //   location: 'Carter Road, Bandra (West)',
      //   outcome: 'Engaged X volunteers in removing Y kg of plastic and debris, significantly improving the beach environment.',
      // },
    ],
    'Restoration Drives': [
      // {
      //   id: 'aarey-plantation-achieved',
      //   title: 'Aarey Colony Tree Plantation Drive',
      //   ngo: 'WWF-India',
      //   date: 'October 12, 2025',
      //   location: 'Aarey Milk Colony',
      //   outcome: 'Planted 100 native saplings, contributing to local biodiversity and green cover.',
      // },
    ],
    'Donation Drives': [
      // {
      //   id: 'winter-blanket-achieved',
      //   title: 'Winter Blanket Collection & Distribution',
      //   ngo: 'Local Community Shelters',
      //   date: 'November 15, 2025',
      //   location: 'Various collection points',
      //   outcome: 'Collected and distributed over 200 blankets to vulnerable communities during winter.',
      // },
    ],
    'Environmental Awareness Campaigns': [
      // {
      //   id: 'plastic-workshop-achieved',
      //   title: 'Youth Workshop on Plastic Waste Management',
      //   ngo: 'Green Initiative Foundation',
      //   date: 'November 02, 2025',
      //   location: 'Online (Zoom)',
      //   outcome: 'Educated 120 students on practical strategies for reducing plastic consumption and promoting recycling.',
      // },
    ],
    'Community Teachings / Skill-Based Events': [
      // {
      //   id: 'leadership-training-achieved',
      //   title: 'Volunteer Leadership & Event Management Training',
      //   ngo: 'Internal Mentors',
      //   date: 'November 08, 2025',
      //   location: 'Neelvardhan HQ (Virtual)',
      //   outcome: 'Trained 15 core members in advanced leadership, team coordination, and event execution techniques.',
      // },
    ],
  };

  return (
    <div className="page-container achievements-page">
      <h1 className="page-title">Our Impact Journey</h1> {/* Added class for specific styling */}
      <p className="page-description">Here we proudly showcase the results of our efforts across various initiatives. This is the tangible difference our dedicated volunteers are making.</p>

      {Object.entries(categorizedAchievements).map(([category, events]) => (
        <section key={category} className="achievement-category-section">
          <h2 className="category-title">{category}</h2> {/* Added class for specific styling */}
          {events.length > 0 ? (
            <div className="achievements-list"> {/* New container for achievements within a category */}
              {events.map((event) => (
                <div key={event.id} className="achievement-card">
                  <h3>{event.title}</h3>
                  <p><strong>📅 Date:</strong> {event.date}</p>
                  <p><strong>🤝🏼 Partners:</strong> {event.ngo}</p>
                  <p><strong>📍 Location:</strong> {event.location}</p>
                  <p><strong>✨ Outcome:</strong> {event.outcome}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-achievements-message">No completed {category.toLowerCase()} yet. Stay tuned for our future impact!</p>
          )}
        </section>
      ))}
  <FloatingRegisterButton /> 

    </div>
  );
};

export default Achievements;
