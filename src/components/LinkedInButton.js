import React from 'react';

const LinkedInButton = () => {
  // IMPORTANT: Replace with your actual LinkedIn profile URL
  const linkedInProfileUrl = "https://www.linkedin.com";

  return (
    <a href={linkedInProfileUrl} target="_blank" rel="noopener noreferrer" className="linkedin-button">
      Follow us on LinkedIn
    </a>
  );
};

export default LinkedInButton;