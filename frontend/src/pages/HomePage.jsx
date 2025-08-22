// src/pages/HomePage.jsx

import React, { useRef, useEffect, useState } from 'react';
import { motion,useInView} from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styles from './HomePage.module.css';
import ScrollingImageMask from '../components/ScrollingImageMask'; 
import { ShootingLines } from '../components/ShootingLines';
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

  const headline = "Building Tomorrow's Visions.";
  const tagline = 'Expert constructions for residential and commercial projects.';
   // --- Animation Trigger Logic ---
  const textSectionRef = useRef(null);
  const isInView = useInView(textSectionRef, { once: true, amount: 0.5 });
  const [startLines, setStartLines] = useState(false);

  useEffect(() => {
    if (isInView) {
      // A small delay before firing the lines for a better effect
      setTimeout(() => {
        setStartLines(true);
      }, 300); // 300ms delay
    }
  }, [isInView]);

 return (
    <div className={styles.pageWrapper}>
      {/* Add the ShootingLines component here, it will be fixed to the screen */}
     
      {/* This simple wrapper div fixes the animation trigger */}
      <div>
        <ScrollingImageMask />

        <div ref={textSectionRef} className={styles.textSectionContainer}>
           <ShootingLines animate={startLines} />
  
          <motion.div
            className={styles.heroContent}
            variants={containerVariants}
            initial="hidden"
            // Animate when the section is in view
            animate={isInView ? 'visible' : 'hidden'}
          >
            {/* The rest of the text and button components are unchanged */}
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
    </div>
  );
}

export default HomePage;