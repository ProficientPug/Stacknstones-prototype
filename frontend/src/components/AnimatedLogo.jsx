import React from 'react';
import './AnimatedLogo.css'; // Import your new CSS file
import { ReactComponent as Logo } from '../assets/logo_final.svg';

const AnimatedLogo = () => {
  // This renders the SVG inline, allowing the CSS to target its internal classes
  return (
    <div className="animated-logo-container">
      <Logo />
    </div>
  );
};

export default AnimatedLogo;