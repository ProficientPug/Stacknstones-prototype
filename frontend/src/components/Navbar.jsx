// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // 1. Import Link
import logo from '../assets/logo.jpg';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Company Name Logo" />
        </Link>
      </div>
      <ul className="navbar-links">
        {/* 2. Replace <a> tags with <Link> tags */}
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/about">About</Link></li>
        {/* You can add a Contact link later */}
      </ul>
    </nav>
  );
}

export default Navbar;