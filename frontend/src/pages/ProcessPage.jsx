import React from 'react';
import { motion } from 'framer-motion';

import { processUpdates } from '../data/processData';
import { getImageUrl } from '../utils/imageHelper';
import styles from './ProcessPage.module.css';

// --- Animation Variants ---

// This grid variant is no longer needed
// const gridContainerVariants = { ... };

// We only need the card's variants
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

  
      <div
        className={styles.processGrid}
      >
        {processUpdates.map((update) => (
         
          <motion.div
            key={update.id}
            className={styles.processCard}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} // Triggers when 30% of the card is visible
            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
          >
            <div className={styles.imageContainer}>
              <img
                src={getImageUrl("process", update.imageUrl)}
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
      </div>
    </motion.section>
  );
}

export default ProcessPage;