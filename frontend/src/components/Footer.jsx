import React from 'react';
import styles from './Footer.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.waveContainer}>
        {/* This SVG creates the animated wave effect */}
        <svg
          className={styles.gooeff}
          width="100%"
          height="100"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
          <g>
            <path
              className={styles.wave}
              d="M 0,100 C 0,100 0,50 0,50 C 158.1,50 316.1,50 474.2,50 C 632.2,50 790.3,50 948.3,50 C 1106.4,50 1264.4,50 1422.5,50 C 1580.5,50 1738.6,50 1896.6,50 C 2054.7,50 2212.7,50 2370.8,50 C 2528.8,50 2686.9,50 2844.9,50 C 3003,50 3161,50 3319,50 C 3319,50 3319,100 3319,100 Z"
            />
            <path
              id={styles.wave2}
              className={styles.wave}
              d="M 0,100 C 0,100 0,50 0,50 C 158.1,50 316.1,50 474.2,50 C 632.2,50 790.3,50 948.3,50 C 1106.4,50 1264.4,50 1422.5,50 C 1580.5,50 1738.6,50 1896.6,50 C 2054.7,50 2212.7,50 2370.8,50 C 2528.8,50 2686.9,50 2844.9,50 C 3003,50 3161,50 3319,50 C 3319,50 3319,100 3319,100 Z"
            />
            <path
              id={styles.wave3}
              className={styles.wave}
              d="M 0,100 C 0,100 0,50 0,50 C 158.1,50 316.1,50 474.2,50 C 632.2,50 790.3,50 948.3,50 C 1106.4,50 1264.4,50 1422.5,50 C 1580.5,50 1738.6,50 1896.6,50 C 2054.7,50 2212.7,50 2370.8,50 C 2528.8,50 2686.9,50 2844.9,50 C 3003,50 3161,50 3319,50 C 3319,50 3319,100 3319,100 Z"
            />
          </g>
        </svg>
      </div>

      <div className={styles.footerContent}>
        <p>© {new Date().getFullYear()} Stacknstones. All Rights Reserved.</p>
        <p>Built with elegance and precision.</p>
      </div>
    </footer>
  );
}

export default Footer;