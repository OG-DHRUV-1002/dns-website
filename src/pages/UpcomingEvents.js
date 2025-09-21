// src/pages/UpcomingEvents.js
import React, { useState } from 'react';
import EventCard from '../components/EventCard';
// Ensure your styles.css is imported globally or here if necessary
// import '../../assets/styles.css'; 

const UpcomingEvents = () => {
  const [expandedEventId, setExpandedEventId] = useState(null); // Tracks expanded card by its unique ID
  const [selectedCategory, setSelectedCategory] = useState('All Options');
  
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
        description: 'This International Coastal Cleanup Day, let’s come together to create a real impact where it matters most — our oceans. Bhumi, in collaboration with VFS Global, is organizing large-scale coastal cleanups in Mumbai, and we are inviting corporates, Individuals, Colleges to come along.',
        link: 'https://forms.gle/Hn2qxrHLSfVGUKk49'
      },
      {
        id: 'carter-cleanup-2025',
        title: 'Carter Beach Road Cleanup',
        ngo: 'Ek Saath - The Earth Foundation',
        date: 'Saturday, October 04, 2025',
        time: "7:00 AM – 9:00 AM",
        location: "Carter Road, Bandra(West)",
        description: 'ConnectFor invites you to join us for a clean-up drive at Carter Road, Mumbai in collaboration with our partner Carter CleanUp, and Ek Saath - The Earth Foundation. Carter Road for years has been a garbage dump for all sorts of plastic, tins, cans, and even food waste – dumped near the sea and park. It takes away from the scenic view and area all residents should access. Let us all together create awareness about the environment & sustainability and create a difference by volunteering in this cleanup drive. Volunteers will be collecting plastic bottles, bags, bottle caps, waste, and garbage off the Carter Road beach. Volunteers will be provided with the necessary cleaning equipment by the NGO on the day of the activity.',
        link: 'https://forms.gle/BgFP2oVuc1Vpb8AJ9'
      },
      {
        id: 'mahim-cleanup-2025',
        title: 'Jallosh Clean Coast Mahim',
        ngo: 'Project Mumbai',
        date: 'Saturday, October 11, 2025',
        time: "7:00 AM – 9:00 AM",
        location: "Mahim Beach, Mahim(West)",
        description: "Volunteer with Jallosh and Project Mumbai for a rewarding beach cleanup at Mahim Beach. We'll provide all necessary equipment and guidance. Help us remove trash, protect marine life, and make Mahim Beach a cleaner, healthier place for everyone. Join us for a morning of community service and environmental action.",
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

    const handleCardClick = (id) => {
    setExpandedEventId(expandedEventId === id ? null : id);
  };

  // NEW: Function to handle filter change
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setExpandedEventId(null); // Close any open cards when filter changes
  };

  // Get all unique category names for the filter dropdown
  const categories = ['All Options', ...Object.keys(categorizedEvents)];

  return (
    <div className="page-container">
      <h1 style={{color: '#5E9211' }}>Upcoming Events</h1>
      <p>Here are the opportunities where you can join us to make an impact. Click on an event to see more details.</p>

      {/* NEW: Filter Dropdown */}
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
            // This inner filter ensures only events of the selected category are shown
            selectedCategory === 'All Options' || categorizedEvents[selectedCategory].some(e => e.id === event.id)
          );

          if (filteredEvents.length === 0) {
            // Display message if no events in the selected (or current) category
            return (
              <section key={category} className="event-category-section">
                <h2 className="category-title">{category}</h2>
                <p className="no-events-message">No upcoming {category.toLowerCase()} at the moment. Stay tuned!</p>
              </section>
            );
          }

          // Render category title and its events
          return (
            <section key={category} className="event-category-section">
              <h2 className="category-title">{category}</h2>
              <div className="events-list">
                {filteredEvents.map((event) => (
                  <EventCard 
                    key={event.id} // Use unique ID for key
                    event={event}
                    isExpanded={expandedEventId === event.id}
                    onHeaderClick={() => handleCardClick(event.id)}
                  />
                ))}
              </div>
            </section>
          );
        }
        return null; // Don't render if not selected
      })}
      
      {/* Optional: Message if "All Options" is selected but all categories are empty */}
      {selectedCategory === 'All Options' && 
       Object.values(categorizedEvents).every(events => events.length === 0) && (
         <p className="no-events-message">No upcoming events across all categories at the moment. Stay tuned!</p>
       )}

      {/* Optional: Message for a specific category selected, but it has no events (redundant if handled above but good for clarity) */}
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
