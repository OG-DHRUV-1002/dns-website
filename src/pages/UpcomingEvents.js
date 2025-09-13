// src/pages/UpcomingEvents.js
import React from 'react';
import EventCard from '../components/EventCard';

const UpcomingEvents = () => {
  const [expandedIndex, setExpandedIndex] = useState(null); // State to track expanded card

  // This data can be fetched from a server in the future
  const events = [
    {
      title: 'Juhu Koliwada Beach Cleanup Volunteers',
      ngo: 'Bhumi with VFS Global',
      date: 'Saturday, September 20, 2025',
      time: "7:00 AM – 9:00 AM",
      location: "Juhu Koliwada Beach, Santacruz(West)",
      description: 'This International Coastal Cleanup Day, let’s come together to create a real impact where it matters most — our oceans. Bhumi, in collaboration with VFS Global, is organizing large-scale coastal cleanups in Mumbai, and we are inviting corporates, Individuals, Colleges to come along.',
      link: 'https://www.connectfor.org/volunteer-now?aid=1574953346033&eventId=59638' // Replace with actual event link
    },
    {
      title: 'Carter Beach Road Cleanup',
      ngo: 'Ek Saath - The Earth Foundation',
      date: 'Saturday, October 04, 2025',
      time: "7:00 AM – 9:00 AM",
      location: "Carter Road, Bandra(West)",
      description: 'ConnectFor invites you to join us for a clean-up drive at Carter Road, Mumbai in collaboration with our partner Carter CleanUp, and Ek Saath - The Earth Foundation. Carter Road for years has been a garbage dump for all sorts of plastic, tins, cans, and even food waste – dumped near the sea and park. It takes away from the scenic view and area all residents should access. Let us all together create awareness about the environment & sustainability and create a difference by volunteering in this cleanup drive. Volunteers will be collecting plastic bottles, bags, bottle caps, waste, and garbage off the Carter Road beach. Volunteers will be provided with the necessary cleaning equipment by the NGO on the day of the activity.',
      link: 'https://www.connectfor.org/volunteer-now?aid=1574953361867&eventId=59674' // Replace with actual event link
    },
    {
      title: 'Jallosh Clean Coast Mahim',
      ngo: 'Project Mumbai',
      date: 'Saturday, October 11, 2025',
      time: "7:00 AM – 9:00 AM",
      location: "Mahim Beach, Mahim(West)",
      description: "Volunteer with Jallosh and Project Mumbai for a rewarding beach cleanup at Mahim Beach. We'll provide all necessary equipment and guidance. Help us remove trash, protect marine life, and make Mahim Beach a cleaner, healthier place for everyone. Join us for a morning of community service and environmental action.",
      link: 'https://www.connectfor.org/volunteer-now?aid=1574953370951&eventId=59693' // Replace with actual event link
    },
  /*  {
      title: 'Tree Plantation at Central Park',
      ngo: 'WWF-India',
      date: 'Sunday, October 12, 2025',
      description: 'We are teaming up with WWF-India to plant 100 native saplings. Let\'s make our city greener, one tree at a time!',
      link: 'https://www.connectfor.org/' // Replace with actual event link
    }*/
  ];
  
// Function to handle clicking on an event card
  const handleCardClick = (index) => {
    // If the clicked card is already open, close it. Otherwise, open it.
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="page-container">
      <h1>Upcoming Events</h1>
      <p>Here are the opportunities where you can join us to make an impact. Click on an event to see more details.</p>
      <div className="events-list"> {/* A container for the list */}
        {events.map((event, index) => (
          <EventCard 
            key={index} 
            event={event}
            isExpanded={expandedIndex === index} // Pass down if it's expanded
            onHeaderClick={() => handleCardClick(index)} // Pass down the click handler
          />
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
