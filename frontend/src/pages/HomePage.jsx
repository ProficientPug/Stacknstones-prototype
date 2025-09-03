import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styles from './HomePage.module.css';
import ScrollingImageMask from '../components/ScrollingImageMask';
import ContactForm from '../components/ContactForm';
import Milestones from '../components/Milestones';

// --- Animation variants for the text section ---
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const lineVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      damping: 15,
      stiffness: 100,
      staggerChildren: 0.09,
    },
  },
};

const itemVariants = {
  hidden: { y: 70, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      damping: 15,
      stiffness: 100,
    },
  },
};

function HomePage() {
  const navigate = useNavigate();
  const handleNavigateToProjects = () => navigate('/projects');

  const phrase1 = "Tropical Modernism & Heritage"; // New phrase
  const phrase2 = "Timelessness, Reimagined."; // New phrase
  const headline = "Building Tomorrow's Visions.";
  const tagline = 'Expert constructions for residential and commercial projects.';

  // --- Animation Trigger Logic ---
  const textSectionRef = useRef(null);
  const isInView = useInView(textSectionRef, { once: true, amount: 0.5 });

  return (
    <div className={styles.pageWrapper}>
      {/* --- HERO AND SCROLLING SECTIONS --- */}
      <div>
        <ScrollingImageMask />
        <div ref={textSectionRef} className={styles.textSectionContainer}>
          <motion.div
            className={styles.heroContent}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.h1
              className={styles.heroHeadline}
              variants={lineVariants}
              aria-label={headline}
            >
              {headline.split(' ').map((word, index) => (
                <motion.span
                  key={index}
                  variants={itemVariants}
                  className={styles.wordWrapper}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
            <motion.h2
              className={styles.heroPhrase} // Use a new style for these phrases
              variants={lineVariants}
              aria-label={phrase1}
            >
              {phrase1.split(' ').map((word, index) => (
                <motion.span
                  key={index}
                  variants={itemVariants}
                  className={styles.wordWrapper}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h2>

            <motion.h2
              className={styles.heroPhrase}
              variants={lineVariants}
              aria-label={phrase2}
            >
              {phrase2.split(' ').map((word, index) => (
                <motion.span
                  key={index}
                  variants={itemVariants}
                  className={styles.wordWrapper}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h2>
           
            <motion.p
              className={styles.heroTagline}
              variants={lineVariants}
              aria-label={tagline}
            >
              {tagline.split(' ').map((word, index) => (
                <motion.span
                  key={index}
                  variants={itemVariants}
                  className={styles.wordWrapper}
                >
                  {word}
                </motion.span>
              ))}
            </motion.p>
            
            <motion.div variants={itemVariants}>
              <motion.button
                className={styles.heroCtaButton}
                onClick={handleNavigateToProjects}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                View Our Work
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      {/* --- MILESTONES SECTION --- */}
      <Milestones />
      
      {/* --- CONTACT FORM SECTION --- */}
      <ContactForm />

    </div>
  );
}

export default HomePage;