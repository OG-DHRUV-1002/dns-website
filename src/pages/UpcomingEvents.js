// src/pages/UpcomingEvents.js
import React from 'react';
import EventCard from '../components/EventCard';

const UpcomingEvents = () => {
  // This data can be fetched from a server in the future
  const events = [
    {
      title: 'Juhu Koliwada Beach Cleanup Volunteers',
      ngo: 'Bhumi with VFS Global',
      date: 'Sunday, September 14, 2025',
      time: "7:00 AM – 9:00 AM",
      location: "Juhu Koliwada Beach, Mumbai",
      description: 'This International Coastal Cleanup Day, let’s come together to create a real impact where it matters most — our oceans. Bhumi, in collaboration with VFS Global, is organizing large-scale coastal cleanups in Mumbai, and we are inviting corporates, Individuals, Colleges to come along.',
      link: 'https://www.connectfor.org/volunteer-now?aid=1574953346033&eventId=59638' // Replace with actual event link
    },
  /*  {
      title: 'Tree Plantation at Central Park',
      ngo: 'WWF-India',
      date: 'Sunday, October 12, 2025',
      description: 'We are teaming up with WWF-India to plant 100 native saplings. Let\'s make our city greener, one tree at a time!',
      link: 'https://www.connectfor.org/' // Replace with actual event link
    }*/
  ];

  return (
    <div className="page-container">
      <h1>Upcoming Events</h1>
      <p>Here are the opportunities where you can join us to make an impact. Sign up and be a part of the change!</p>
      {events.map((event, index) => (
        <EventCard key={index} event={event} />
      ))}
    </div>
  );
};

export default UpcomingEvents;
