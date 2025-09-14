// src/components/Hero.js
import React from 'react';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import { Link } from 'react-router-dom';

const Hero = () => {
  const registerLink = "https://forms.gle/QP95Kq8PDMNx6TLVA";

  return (
    // Add className="hero-parallax-banner" to this component
    <ParallaxBanner className="hero-parallax-banner" style={{ height: '100vh' }}>
      <ParallaxBannerLayer image="/hero-background.png" speed={10} />
      <ParallaxBannerLayer>
        <div className="hero-content">
          <h1 className="hero-title-neelvardhan">Neelvardhan</h1>
          <h2><strong>Youth Power for a Greener Planet.</strong></h2>
          <div className="hero-buttons">
            <Link to="/contact" className="hero-btn primary">Get Involved</Link>
            <Link to="/achievements" className="hero-btn secondary">See Our Impact</Link>
  <a href={registerLink} target="_blank" rel="noopener noreferrer" className="hero-btn primary-accent">📢 Register Here !!</a>
          </div>
        </div>
      </ParallaxBannerLayer>
    </ParallaxBanner>
  );
};

export default Hero;
