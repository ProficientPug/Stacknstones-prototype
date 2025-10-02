// src/components/Navbar.jsx
import React, { useState } from 'react';
// 1. Import 'useNavigate' from react-router-dom
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../assets/logo.jpg';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  // 2. Initialize the navigate function
  const navigate = useNavigate();

  // 3. Define the handler function for the contact button
  const handleContactClick = () => {
    // First, close the mobile menu if it's open
    setMenuOpen(false);

    // If we are not on the homepage, navigate there first
    if (window.location.pathname !== '/') {
      navigate('/');
    }

    // Use a short timeout to ensure the homepage is rendered before we scroll
    setTimeout(() => {
      const contactSection = document.getElementById('contact-form');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // 100ms delay is usually sufficient
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <NavLink to="/">
          <img src={logo} alt="Company Logo" />
        </NavLink>
      </div>
      
      <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        <span />
        <span />
        <span />
      </div>
      
      <ul className={`${styles.navbarLinks} ${menuOpen ? styles.open : ''}`}>
        <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
        <li><NavLink to="/projects" onClick={() => setMenuOpen(false)}>Projects</NavLink></li>
        <li><NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink></li>
        <li><NavLink to="/process" onClick={() => setMenuOpen(false)}>Process</NavLink></li>
        
        {/* 4. Wrap your button in an <li> tag and update its onClick */}
        <li>
          <button onClick={handleContactClick} className={styles.navContactButton}>
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;