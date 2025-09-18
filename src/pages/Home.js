// src/pages/Home.js
import React from 'react';
import Hero from '../components/Hero';
import './Home.css'; // Make sure this CSS file is imported

const Home = () => {
  // Updated list with your 5 main activities
  const activities = [
    { title: 'Tree Plantation Initiatives', image: '/images/placeholder-tree.webp' },
    { title: 'Food & Clothes Donations', image: '/images/placeholder-donation.webp' },
    { title: 'Beach Clean-Up Drives', image: '/images/placeholder-beach.webp' },
    { title: 'Environmental Awareness Campaigns', image: '/images/placeholder-awareness.webp' },
    { title: 'Community Teachings', image: '/images/placeholder-teaching.webp' },
  ];

  return (
    <div>
      <Hero />
      <section className="home-activities-section">
        <h2>Our Major Activities</h2>
        <div className="activities-grid">
          {activities.map((activity, index) => (
            <div key={index} className="activity-card">
              <div className="image-container">
                <img src={activity.image} alt={activity.title} />
              </div>
              <h3>{activity.title}</h3>
              <a href="/upcoming-events" className="activity-button">Learn More</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
