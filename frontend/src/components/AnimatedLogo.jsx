import React from 'react';
import './AnimatedLogo.css'; // We still use this for the container's size

// 1. Import your SVG file. React/Vite gives you the URL path.
import logoSrc from '../assets/logo_final.svg';

const AnimatedLogo = () => {
  return (
    <div className="animated-logo-container">
      
      {/* 2. Render it as a simple image. */}
      <img 
        src={logoSrc} 
        alt="Stack & Stones Logo" 
        className="logo-image" // We'll add this class to the CSS
      />

    </div>
  );
};

export default AnimatedLogo;