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
            Stack and Stones is more than just a title; it's our philosophy. It represents our belief that every great structure is built on a foundation of trust, expertise, and collaboration. "Stones" are the dreams and aspirations of our clients, and "Stack" is our promise to meticulously layer our skills and integrity to bring that vision to life.
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
              My father, Rajendran, started his journey over three decades ago in Chennai. He built his reputation on the simple principle of treating every project as a personal commitment. His dedication to quality resulted in more than 200 happy homes, and his legacy became the bedrock of our family business.
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
              After completing my engineering degree, I, Muthulingam, joined him five years ago, ready to formalize our expertise. In that time, we've collaborated on more than 20 projects, combining his decades of hands-on experience with my modern approach to project management.

               </p>
          </motion.div>
          <motion.div className={styles.storyImage} variants={imageVariants}>
            <img src={sonImage} alt="Muthulingam, Co-Founder" />
          </motion.div>
        </motion.div>

        <motion.div className={styles.missionSection} variants={sectionVariants}>
          <h3>Our Promise</h3>
          <p>
            At Stack and Stones, we offer end-to-end solutions, guiding you through every step of the construction process. From the initial design to the final finishing touches, we are dedicated to making your dream a reality. We are ready to build a lasting legacy with you, one project at a time, across Tamil Nadu and beyond.          </p>
        </motion.div>

      </div>
    </motion.section>
  );
}

export default About;