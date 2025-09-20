// src/pages/UpcomingEvents.js
import React, { useState } from 'react';
import EventCard from '../components/EventCard';
// Assuming global styles.css handles the main look,
// and specific styles for category headers will be added to it if needed.
// import '../../assets/styles.css'; // Only if not already globally imported

const UpcomingEvents = () => {
  const [expandedEventId, setExpandedEventId] = useState(null); // State to track expanded card by unique ID

  // --- CATEGORIZED UPCOMING EVENTS DATA (WITH ORIGINAL PROPERTIES) ---
  const categorizedEvents = {
    'Beach Clean-Up Drives': [
      {
        id: 'juhu-cleanup-2025', // Unique ID
        title: 'Juhu Silver Beach Cleanup Volunteers',
        ngo: 'Bhumi with VFS Global', // Reverted to 'ngo' as per your original structure
        date: 'Saturday, September 20, 2025',
        time: "7:30 AM – 9:00 AM",
        location: "Silver Beach, Juhu-Mumbai",
        description: 'This inaugural event is an internal training and logistics assessment for our Leadership Council. It will prepare us for larger-scale public events from October onwards. We are immensely grateful for the overwhelming interest!',
        link: 'https://forms.gle/Hn2qxrHLSfVGUKk49', // Your Juhu form link
        isInternal: true // Mark as internal
      },
      {
        id: 'carter-cleanup-2025', // Unique ID
        title: 'Carter Beach Road Cleanup',
        ngo: 'Ek Saath - The Earth Foundation', // Reverted to 'ngo'
        date: 'Saturday, October 04, 2025',
        time: "7:30 AM – 9:30 AM",
        location: "Carter Road, Bandra(West)",
        description: 'Join the Neelvardhan Community for our second official event: a vital cleanup drive at Carter Road, Bandra! This is our chance to come together, create awareness, and make a tangible difference.',
        link: 'https://forms.gle/BgFP2oVuc1Vpb8AJ9', // Your Carter Road form link
        isInternal: false // Public event
      },
      {
        id: 'mahim-cleanup-2025', // Unique ID
        title: 'Jallosh Clean Coast Mahim',
        ngo: 'Project Mumbai', // Reverted to 'ngo'
        date: 'Saturday, October 11, 2025',
        time: "7:00 AM – 9:00 AM",
        location: "Mahim Beach, Mahim(West)",
        description: "Volunteer with Jallosh and Project Mumbai for a rewarding beach cleanup at Mahim Beach. We'll provide all necessary equipment and guidance. Help us remove trash, protect marine life, and make Mahim Beach a cleaner, healthier place for everyone. Join us for a morning of community service and environmental action.",
        link: 'https://forms.gle/YOUR_MAHIM_FORM_LINK', // Your Mahim form link
        isInternal: false // Public event
      },
    ],
    'Restoration Drives': [
      // {
      //   id: 'aarey-plantation-2025',
      //   title: 'Tree Plantation at Aarey Colony',
      //   ngo: 'WWF-India',
      //   date: 'Sunday, October 12, 2025',
      //   time: "8:00 AM – 11:00 AM",
      //   location: "Aarey Milk Colony",
      //   description: 'We are teaming up with WWF-India to plant 100 native saplings. Let\'s make our city greener, one tree at a time!',
      //   link: 'https://forms.gle/YOUR_AAREY_FORM_LINK',
      //   isInternal: false
      // }
    ],
    'Donation Drives': [
      // {
      //   id: 'winter-blanket-2025',
      //   title: 'Winter Blanket Collection Drive',
      //   ngo: 'Local Community Shelters',
      //   date: 'Saturday, November 15, 2025',
      //   time: "10:00 AM – 1:00 PM",
      //   location: "Various collection points",
      //   description: 'Help us collect and distribute blankets to those in need this winter season.',
      //   link: 'https://forms.gle/YOUR_BLANKET_FORM_LINK',
      //   isInternal: false
      // }
    ],
    'Environmental Awareness Campaigns': [
      // {
      //   id: 'plastic-workshop-2025',
      //   title: 'Plastic Waste Reduction Workshop',
      //   ngo: 'Green Initiative Foundation',
      //   date: 'Sunday, November 2, 2025',
      //   time: "2:00 PM – 4:00 PM",
      //   location: "Online (Zoom)",
      //   description: 'Join our interactive workshop to learn practical tips on reducing plastic waste in your daily life.',
      //   link: 'https://forms.gle/YOUR_WORKSHOP_FORM_LINK',
      //   isInternal: false
      // }
    ],
    'Community Teachings / Skill-Based Events': [
      // {
      //   id: 'leadership-training-2025',
      //   title: 'Volunteer Leadership Training',
      //   ngo: 'Internal Mentors',
      //   date: 'Saturday, November 8, 2025',
      //   time: "1:00 PM – 3:00 PM",
      //   location: "Neelvardhan HQ (Virtual)",
      //   description: 'A specialized training session for aspiring leaders within our community to enhance event management and team coordination skills.',
      //   link: 'https://forms.gle/YOUR_LEADERSHIP_FORM_LINK',
      //   isInternal: false
      // }
    ],
  };

  const handleCardClick = (id) => {
    setExpandedEventId(expandedEventId === id ? null : id);
  };

  return (
    <div className="page-container upcoming-events-page">
      <h1 className="page-title">Upcoming Events</h1> {/* Added class for specific styling */}
      <p className="page-description">Here are the opportunities where you can join us to make an impact. Click on an event to see more details.</p>

      {/* Map through each category and render events */}
      {Object.entries(categorizedEvents).map(([category, events]) => (
        <section key={category} className="event-category-section">
          <h2 className="category-title">{category}</h2> {/* Added class for specific styling */}
          {events.length > 0 ? (
            <div className="events-list"> {/* Container for events within a category */}
              {events.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  isExpanded={expandedEventId === event.id}
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
