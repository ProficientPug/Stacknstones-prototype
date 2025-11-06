import React from 'react';
import styles from './HomePage.module.css';

// Import all the necessary page sections
import AnimatedLogo from '../components/AnimatedLogo';
import ParallaxIntro from '../components/ParallaxIntro'; // <-- The new parallax component
import ContactForm from '../components/ContactForm';

/**
 * The HomePage component now composes the different sections of the page.
 * The complex text animation logic has been moved into the self-contained
 * ParallaxIntro component.
 */
function HomePage() {
  return (
    <div className={styles.pageWrapper}>
      
      <ParallaxIntro />
      
      <ContactForm />
    </div>
  );
}

export default HomePage;