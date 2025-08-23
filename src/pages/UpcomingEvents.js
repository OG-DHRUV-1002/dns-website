// src/pages/UpcomingEvents.js
import React from 'react';
import EventCard from '../components/EventCard';

const UpcomingEvents = () => {
  // This data can be fetched from a server in the future
/*  const events = [
    {
      title: 'Mangrove Clean-Up Drive',
      ngo: 'Green Yatra',
      date: 'Saturday, September 27, 2025',
      description: 'Join us as we partner with Green Yatra to clean the precious mangrove ecosystem in Navi Mumbai. A great opportunity to make a difference and earn a certificate.',
      link: 'https://www.connectfor.org/' // Replace with actual event link
    },
    {
      title: 'Tree Plantation at Central Park',
      ngo: 'WWF-India',
      date: 'Sunday, October 12, 2025',
      description: 'We are teaming up with WWF-India to plant 100 native saplings. Let\'s make our city greener, one tree at a time!',
      link: 'https://www.connectfor.org/' // Replace with actual event link
    }
  ];*/




const events = [{title:'Will Update Soon',
		ngo: 'Reputable NGOs are on the way',
		date: 'Begins From September'}];





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