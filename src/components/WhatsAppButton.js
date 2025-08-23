// Filename MUST be WhatsAppButton.js
import React from 'react';

const WhatsAppButton = () => {
  const whatsappLink = "https://chat.whatsapp.com/LFnYaFlFw3gKxnVfR9yS0P";

  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp-button">
      Join our WhatsApp Community
    </a>
  );
};

export default WhatsAppButton; // Make sure this line exists