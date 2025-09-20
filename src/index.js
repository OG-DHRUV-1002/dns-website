// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ParallaxProvider } from 'react-scroll-parallax'; // <-- 1. Import Provider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 2. Wrap your App component */}
    <ParallaxProvider>
      <App />
    </ParallaxProvider>
  </React.StrictMode>
);