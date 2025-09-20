// src/components/EmailButton.js
import React from 'react';

const EmailButton = () => {
  const emailAddress = "neelvardhan.community@gmail.com";
  const subject = "Inquiry about Neelvardhan";

  return (
    <a href={`mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`} className="email-button google-border-button">
      <span className="button-text">📧 Email</span>
    </a>
  );
};

export default EmailButton;
