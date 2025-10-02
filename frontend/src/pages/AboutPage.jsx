import React from 'react';
// 1. Import 'motion' from Framer Motion
import { motion } from 'framer-motion';
import styles from './AboutPage.module.css';

import dadImage from '../assets/team/dad.jpg';
import sonImage from '../assets/team/son.jpg';

// 2. Define our animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

function About() {
  return (
    // 3. Convert HTML elements to 'motion' elements and add animation props
    <motion.section 
      className={styles.aboutPage}
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }} // Stagger the main sections
    >
      <div className={styles.contentWrapper}>

        <motion.div className={styles.introSection} variants={sectionVariants}>
          <h2>Our Philosophy</h2>
          <p>
            Stack and Stones is more than just a title; it's our philosophy...
          </p>
        </motion.div>

        <motion.div 
          className={styles.storySection}
          initial="hidden"
          whileInView="visible" // Triggers animation on scroll
          viewport={{ once: true, amount: 0.3 }} // Animation runs once, when 30% is visible
          variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
        >
          <motion.div className={styles.storyText} variants={sectionVariants}>
            <h3>A Legacy of Trust</h3>
            <p>
              My father, Rajendran, started his journey over three decades ago...
            </p>
          </motion.div>
          <motion.div className={styles.storyImage} variants={imageVariants}>
            <img src={dadImage} alt="Rajendran, Founder" />
          </motion.div>
        </motion.div>

        <motion.div 
          className={`${styles.storySection} ${styles.storySectionReversed}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
        >
          <motion.div className={styles.storyText} variants={sectionVariants}>
            <h3>Modern Expertise</h3>
            <p>
              After completing my engineering degree, I, Muthulingam, joined him...
            </p>
          </motion.div>
          <motion.div className={styles.storyImage} variants={imageVariants}>
            <img src={sonImage} alt="Muthulingam, Co-Founder" />
          </motion.div>
        </motion.div>

        <motion.div className={styles.missionSection} variants={sectionVariants}>
          <h3>Our Promise</h3>
          <p>
            At Stack and Stones, we offer end-to-end solutions...
          </p>
        </motion.div>

      </div>
    </motion.section>
  );
}

export default About;