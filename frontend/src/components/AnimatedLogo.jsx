import React from 'react';
import './AnimatedLogo.css';
import Logo from '../assets/logo_final.svg?react'

const AnimatedLogo = () => {
  // This renders the SVG inline, allowing the CSS to target its internal classes
  return (
    <div className="animated-logo-container">
      <Logo />
    </div>
  );
};

export default AnimatedLogo;