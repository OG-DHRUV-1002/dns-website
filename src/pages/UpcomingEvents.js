// src/pages/UpcomingEvents.js
import React, { useState } from 'react';
import EventCard from '../components/EventCard';
// Assuming global styles.css handles the main look and filter styles

const UpcomingEvents = () => {
  const [expandedEventId, setExpandedEventId] = useState(null); // State to track expanded card by unique ID
  const [selectedCategory, setSelectedCategory] = useState('All Options'); // New state for filter

  // --- CATEGORIZED UPCOMING EVENTS DATA ---
  const categorizedEvents = {
    'Beach Clean-Up Drives': [
      {
        id: 'juhu-cleanup-2025',
        title: 'Juhu Silver Beach Cleanup Volunteers',
        ngo: 'Bhumi with VFS Global',
        date: 'Saturday, September 20, 2025',
        time: "7:30 AM – 9:00 AM",
        location: "Silver Beach, Juhu, Mumbai",
        description: 'This inaugural event is an internal training and logistics assessment for our Leadership Council. It will prepare us for larger-scale public events from October onwards. We are immensely grateful for the overwhelming interest!',
        link: 'https://forms.gle/Hn2qxrHLSfVGUKk49',
        isInternal: true
      },
      {
        id: 'carter-cleanup-2025',
        title: 'Carter Beach Road Cleanup',
        ngo: 'Ek Saath - The Earth Foundation',
        date: 'Saturday, October 04, 2025',
        time: "7:00 AM – 9:00 AM",
        location: "Carter Road, Bandra(West)",
        description: 'Join the Neelvardhan Community for our second official event: a vital cleanup drive at Carter Road, Bandra! This is our chance to come together, create awareness, and make a tangible difference.',
        link: 'https://forms.gle/BgFP2oVuc1Vpb8AJ9',
        isInternal: false
      },
      {
        id: 'mahim-cleanup-2025',
        title: 'Jallosh Clean Coast Mahim',
        ngo: 'Project Mumbai',
        date: 'Saturday, October 11, 2025',
        time: "7:00 AM – 9:00 AM",
        location: "Mahim Beach, Mahim(West)",
        description: "Volunteer with Jallosh and Project Mumbai for a rewarding beach cleanup at Mahim Beach. We'll provide all necessary equipment and guidance. Help us remove trash, protect marine life, and make Mahim Beach a cleaner, healthier place for everyone. Join us for a morning of community service and environmental action.",
        link: 'https://forms.gle/YOUR_MAHIM_FORM_LINK',
        isInternal: false
      },
    ],
    'Restoration Drives': [
      {
        id: 'aarey-plantation-2025',
        title: 'Tree Plantation at Aarey Colony',
        ngo: 'WWF-India',
        date: 'Sunday, October 12, 2025',
        time: "8:00 AM – 11:00 AM",
        location: "Aarey Milk Colony",
        description: 'We are teaming up with WWF-India to plant 100 native saplings. Let\'s make our city greener, one tree at a time!',
        link: 'https://forms.gle/YOUR_AAREY_FORM_LINK',
        isInternal: false
      }
    ],
    'Donation Drives': [
      // ... add donation events here
    ],
    'Environmental Awareness Campaigns': [
      // ... add awareness events here
    ],
    'Community Teachings / Skill-Based Events': [
      // ... add teaching events here
    ],
  };

  const handleCardClick = (id) => {
    setExpandedEventId(expandedEventId === id ? null : id);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setExpandedEventId(null); // Close any open cards when filter changes
  };

  // Get all unique category names for the filter dropdown
  const categories = ['All Options', ...Object.keys(categorizedEvents)];

  return (
    <div className="page-container upcoming-events-page">
      <h1 className="page-title">Upcoming Events</h1>
      <p className="page-description">Here are the opportunities where you can join us to make an impact. Click on an event to see more details.</p>

      {/* Filter Dropdown */}
      <div className="filter-container">
        <label htmlFor="category-filter" className="filter-label">Filter by Category:</label>
        <select
          id="category-filter"
          className="category-select"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {Object.entries(categorizedEvents).map(([category, events]) => {
        // Only render the category section if it's selected OR "All Options" is selected
        if (selectedCategory === 'All Options' || selectedCategory === category) {
          const filteredEvents = events.filter(event => 
            selectedCategory === 'All Options' || categorizedEvents[selectedCategory].some(e => e.id === event.id)
          );

          if (filteredEvents.length === 0 && selectedCategory !== 'All Options') {
            // This case handles when a specific category is selected but has no events
            return (
              <section key={category} className="event-category-section">
                <h2 className="category-title">{category}</h2>
                <p className="no-events-message">No upcoming {category.toLowerCase()} at the moment. Stay tuned!</p>
              </section>
            );
          }

          if (filteredEvents.length > 0) {
            return (
              <section key={category} className="event-category-section">
                <h2 className="category-title">{category}</h2>
                <div className="events-list">
                  {filteredEvents.map((event) => (
                    <EventCard
                      key={event.id}
                      event={event}
                      isExpanded={expandedEventId === event.id}
                      onHeaderClick={() => handleCardClick(event.id)}
                    />
                  ))}
                </div>
              </section>
            );
          }
        }
        return null; // Don't render if not selected or no events
      })}

      {/* Message for "All Options" when no events exist in any category */}
      {selectedCategory === 'All Options' && 
        Object.values(categorizedEvents).every(events => events.length === 0) && (
          <p className="no-events-message">No upcoming events across all categories at the moment. Stay tuned!</p>
      )}

      {/* Message for a specific category selected, but it has no events */}
      {selectedCategory !== 'All Options' && 
       categorizedEvents[selectedCategory] && 
       categorizedEvents[selectedCategory].length === 0 && (
         <section className="event-category-section">
            <h2 className="category-title">{selectedCategory}</h2>
            <p className="no-events-message">No upcoming {selectedCategory.toLowerCase()} at the moment. Stay tuned!</p>
         </section>
      )}

    </div>
  );
};

export default UpcomingEvents;
