// src/pages/Contact.js
import React from 'react';
import WhatsAppButton from '../components/WhatsAppButton';
import EmailButton from '../components/EmailButton'; // <-- Import EmailButton
import LinkedInButton from '../components/LinkedInButton'; // <-- Import LinkedInButton

const Contact = () => {
  return (
    <div className="page-container">
      <h1>Get Involved</h1>
      <h3><p>Ready to make a difference? Joining us is easy!</p></h3>
      
      <h1>How to Join:</h1>
      <ol>
        <h3><li>Follow our social media pages to stay updated.</li>
        <li>Join our official WhatsApp group for real-time event notifications.</li>
        <li>Choose an upcoming event and sign up through the provided link!</li></h3>
      </ol>      
        <WhatsAppButton />
        <LinkedInButton />


      <h1>Connect With Us:</h1>
      <h3><p>For partnerships, queries, or suggestions, please contact us at:</p></h3>
	<div>
        <EmailButton />
      </div>
    </div>
  );
};

export default Contact;