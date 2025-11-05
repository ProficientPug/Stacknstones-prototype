import React from 'react';
import { motion } from 'framer-motion';

// Import our new clean data and the existing helper function
import { processUpdates } from '../data/processData';
import { getImageUrl } from '../utils/imageHelper'; // Reusing the same helper!
import styles from './ProcessPage.modules.css'; // A new CSS file for this page

// --- Animation Variants (Identical to ProjectsPage for consistency) ---
const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
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

      <motion.div
        className={styles.processGrid}
        variants={gridContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {processUpdates.map((update) => (
          <motion.div
            key={update.id}
            className={styles.processCard}
            variants={cardVariants}
            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
          >
            <div className={styles.imageContainer}>
              <img
                // Use the helper to get the correct path for each image
                src={getImageUrl("process",update.imageUrl)}
                alt={update.title}
                className={styles.processImage}
              />
            </div>
            <div className={styles.processContent}>
              <h3 className={styles.processTitle}>{update.title}</h3>
              <p className={styles.processDescription}>{update.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default ProcessPage;