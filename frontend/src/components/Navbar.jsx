// src/components/Navbar.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css'; // Assuming you use CSS Modules
import logo from '../assets/logo.png'; // Make sure to import your logo

function Navbar() {
  // 1. Add state to track if the menu is open
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <NavLink to="/">
          <img src={logo} alt="Company Logo" />
        </NavLink>
      </div>
      
      {/* 2. Add the hamburger menu icon */}
      <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        <span />
        <span />
        <span />
      </div>
      
      {/* 3. Add a class to the links based on the menu state */}
      <ul className={`${styles.navbarLinks} ${menuOpen ? styles.open : ''}`}>
        <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
        <li><NavLink to="/projects" onClick={() => setMenuOpen(false)}>Projects</NavLink></li>
        <li><NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink></li>
        <li><NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;