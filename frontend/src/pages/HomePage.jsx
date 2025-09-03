import React from 'react';
import styles from './HomePage.module.css';

// Import all the necessary page sections
import ScrollingImageMask from '../components/ScrollingImageMask';
import ParallaxIntro from '../components/ParallaxIntro'; // <-- The new parallax component
import Milestones from '../components/Milestones';
import ContactForm from '../components/ContactForm';

/**
 * The HomePage component now composes the different sections of the page.
 * The complex text animation logic has been moved into the self-contained
 * ParallaxIntro component.
 */
function HomePage() {
  return (
    <div className={styles.pageWrapper}>
      {/* Section 1: The scrolling image hero */}
      <ScrollingImageMask />
      
      {/* Section 2: The new GSAP-powered parallax text intro */}
 

      {/* Section 3: The milestones section */}
      <Milestones />
      <ParallaxIntro />
      
      {/* Section 4: The contact form section */}
      <ContactForm />
    </div>
  );
}

export default HomePage;