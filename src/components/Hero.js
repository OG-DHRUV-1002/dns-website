// src/components/Hero.js
import React from 'react';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    // Add className="hero-parallax-banner" to this component
    <ParallaxBanner className="hero-parallax-banner" style={{ height: '100vh' }}>
      <ParallaxBannerLayer image="/hero-background.png" speed={10} />
      <ParallaxBannerLayer>
        <div className="hero-content">
          <h1>Neelvardhan</h1>
          <h2>Youth Power for a Greener Planet.</h2>
          <div className="hero-buttons">
            <Link to="/contact" className="hero-btn primary">Get Involved</Link>
            <Link to="/achievements" className="hero-btn secondary">See Our Impact</Link>
          </div>
        </div>
      </ParallaxBannerLayer>
    </ParallaxBanner>
  );
};

export default Hero;