import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      {/* This div will contain the SVG wave */}
      <div className={styles.waveContainer}>
        <svg
          className={styles.wave}
          viewBox="0 0 1440 100" // Defines the coordinate system
          preserveAspectRatio="none"
        >
          {/* This path creates the wave shape */}
          <path
            d="M0,50 C150,100 350,0 500,50 C650,100 850,0 1000,50 C1150,100 1350,0 1500,50 L1440,100 L0,100 Z"
          />
        </svg>
      </div>

      {/* This div will contain your footer text */}
      <div className={styles.footerContent}>
        <p>© {new Date().getFullYear()} Stacknstones. All Rights Reserved.</p>
        <p>Built with elegance and precision.</p>
      </div>
    </footer>
  );
}

export default Footer;