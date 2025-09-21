// src/pages/UpcomingEvents.js
import React, { useState } from 'react';
import EventCard from '../components/EventCard';
// Ensure you have a CSS file for category headers if needed, or add to a global file.
// import '../../assets/styles.css'; 

const UpcomingEvents = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  // --- NEW: Events are now organized by category ---
  const categorizedEvents = {
    'Beach Clean-Up Drives': [
      {
        id: 'juhu-cleanup-2025',
        title: 'Juhu Silver Beach Cleanup Volunteers',
        ngo: 'Bhumi with VFS Global',
        date: 'Saturday, September 20, 2025',
        time: "7:30 AM – 9:00 AM",
        location: "Silver Beach, Juhu-Mumbai",
        description: 'This International Coastal Cleanup Day, let’s come together to create a real impact...',
        link: 'https://forms.gle/Hn2qxrHLSfVGUKk49'
      },
      {
        id: 'carter-cleanup-2025',
        title: 'Carter Beach Road Cleanup',
        ngo: 'Ek Saath - The Earth Foundation',
        date: 'Saturday, October 04, 2025',
        time: "7:00 AM – 9:00 AM",
        location: "Carter Road, Bandra(West)",
        description: 'ConnectFor invites you to join us for a clean-up drive at Carter Road, Mumbai...',
        link: 'https://forms.gle/BgFP2oVuc1Vpb8AJ9'
      },
      {
        id: 'mahim-cleanup-2025',
        title: 'Jallosh Clean Coast Mahim',
        ngo: 'Project Mumbai',
        date: 'Saturday, October 11, 2025',
        time: "7:00 AM – 9:00 AM",
        location: "Mahim Beach, Mahim(West)",
        description: "Volunteer with Jallosh and Project Mumbai for a rewarding beach cleanup at Mahim Beach...",
        link: 'https://forms.gle/YOUR_MAHIM_LINK' // Remember to replace this
      },
    ],
    'Restoration Drives': [
      // Add your tree plantation events here when ready
    ],
    'Donation Drives': [
      // Add donation events here
    ],
    'Environmental Awareness Campaigns': [
      // Add awareness campaign events here
    ],
    'Community Teachings / Skill-Based Events': [
      // Add community teaching events here
    ],
  };

  const handleCardClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="page-container">
      <h1 style={{color: '#5E9211' }}>Upcoming Events</h1>
      <p>Here are the opportunities where you can join us to make an impact. Click on an event to see more details.</p>

      {/* --- NEW: Map through each category --- */}
      {Object.entries(categorizedEvents).map(([category, events]) => (
        <section key={category} className="event-category-section">
          <h2 className="category-title">{category}</h2>
          {events.length > 0 ? (
            <div className="events-list">
              {events.map((event, index) => (
                <EventCard 
                  key={event.id}
                  event={event}
                  isExpanded={expandedIndex === event.id}
                  onHeaderClick={() => handleCardClick(event.id)}
                />
              ))}
            </div>
          ) : (
            <p className="no-events-message">No upcoming {category.toLowerCase()} at the moment. Stay tuned!</p>
          )}
        </section>
      ))}
      
    </div>
  );
};

export default UpcomingEvents;
