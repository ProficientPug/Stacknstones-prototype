import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>&copy; {currentYear} Stack N Stones Construction. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;