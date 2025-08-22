import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>&copy; {currentYear} Your Company Name. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;