// src/components/Navbar.jsx

// 1. Import 'useEffect' from React
import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../assets/logo.jpg';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  // 2. Add state to track if the page has been scrolled
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  // 3. Add an effect to listen for scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Set 'scrolled' to true if the user scrolls more than 10px down
      setScrolled(window.scrollY > 10);
    };

    // Add the scroll listener when the component is added to the page
    window.addEventListener('scroll', handleScroll);

    // Clean up the listener when the component is removed from the page
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // The empty array ensures this effect runs only once

  const handleContactClick = () => {
    setMenuOpen(false);
    if (window.location.pathname !== '/') {
      navigate('/');
    }
    setTimeout(() => {
      const contactSection = document.getElementById('contact-form');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    // 4. Conditionally apply a 'scrolled' class based on the state
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navbarLogo}>
        <NavLink to="/">
          <img src={logo} alt="Company Logo" />
        </NavLink>
      </div>
      
      {/* 5. Add a conditional 'open' class for the hamburger animation */}
      <div className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span />
        <span />
        <span />
      </div>
      
      <ul className={`${styles.navbarLinks} ${menuOpen ? styles.open : ''}`}>
        <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
        <li><NavLink to="/projects" onClick={() => setMenuOpen(false)}>Projects</NavLink></li>
        <li><NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink></li>
        <li><NavLink to="/process" onClick={() => setMenuOpen(false)}>Process</NavLink></li>
        
        <li>
          <button onClick={handleContactClick} className={styles.navContactButton}>
            Contact Us
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;