import React from 'react';
import { motion } from 'framer-motion';

import { processUpdates } from '../data/processData';
import { getImageUrl } from '../utils/imageHelper';
import styles from './ProcessPage.module.css';

// The variants are still useful for the image animation
const imageVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

function ProcessPage() {
  return (
    <motion.section 
      className={styles.processPage}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.header}>
        <h1 className={styles.title}>Updates & Work in Progress</h1>
        <p className={styles.subtitle}>
          Follow along with the real-time progress of our ongoing projects, from foundation to finish.
        </p>
      </div>

      <div
        className={styles.processGrid}
      >
        {processUpdates.map((update) => (
          
          // --- THIS IS THE MODIFIED PART ---
          // We are no longer rendering a "card".
          // This is now an animated container that *only* holds the image.
          // It re-uses your "imageContainer" style to keep the aspect ratio.

          <motion.div
            key={update.id}
            className={styles.imageContainer} // Use this class for aspect-ratio
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
          >
            <img
              src={getImageUrl("process", update.imageUrl)}
              // We still use the title for the 'alt' tag for accessibility
              alt={update.title} 
              className={styles.processImage}
            />
            {/* The entire processContent div has been removed */}
          </motion.div>

        ))}
      </div>
    </motion.section>
  );
}

export default ProcessPage;