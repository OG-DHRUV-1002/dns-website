import React from 'react';

const LinkedInButton = () => {
  // IMPORTANT: Replace with your actual LinkedIn profile URL
  const linkedInProfileUrl = "https://www.linkedin.com/company/neelvardhan/";

  return (
    <a href={linkedInProfileUrl} target="_blank" rel="noopener noreferrer" className="linkedin-button">
      ℹ️ LinkedIn
    </a>
  );
};

export default LinkedInButton;
