import React from 'react';
import { motion } from 'framer-motion';
import styles from './ShootingLines.module.css';

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.07, // Stagger the animation of each line
    },
  },
  hidden: {},
};

// Variant for horizontal lines drawing from left to right
const drawHorizontalVariant = {
  hidden: { clipPath: 'inset(0 100% 0 0)' }, // Starts clipped from the right
  visible: {
    clipPath: 'inset(0 0 0 0)', // Reveals the line
    transition: { duration: 1.0, ease: [0.76, 0, 0.24, 1] },
  },
};

// Variant for vertical lines drawing from top to bottom
const drawVerticalVariant = {
  hidden: { clipPath: 'inset(0 0 100% 0)' }, // Starts clipped from the bottom
  visible: {
    clipPath: 'inset(0 0 0 0)', // Reveals the line
    transition: { duration: 1.0, ease: [0.76, 0, 0.24, 1] },
  },
};

// Configuration for horizontal and vertical lines
const numLines = 10; // Adjust the number of lines for the grid
const horizontalLines = Array.from({ length: numLines }).map((_, i) => ({
  top: `${(i + 1) * (100 / (numLines + 1))}%`,
}));

const verticalLines = Array.from({ length: numLines }).map((_, i) => ({
  left: `${(i + 1) * (100 / (numLines + 1))}%`,
}));

export function ShootingLines({ animate }) {
  return (
    <motion.div
      className={styles.linesContainer}
      variants={containerVariants}
      initial="hidden"
      animate={animate ? 'visible' : 'hidden'}
    >
      {/* Render Horizontal Lines */}
      {horizontalLines.map((config, index) => (
        <motion.div
          key={`h-${index}`}
          variants={drawHorizontalVariant}
          className={styles.horizontalLine}
          style={{
            top: config.top,
          }}
        />
      ))}
      
      {/* Render Vertical Lines */}
      {verticalLines.map((config, index) => (
        <motion.div
          key={`v-${index}`}
          variants={drawVerticalVariant}
          className={styles.verticalLine}
          style={{
            left: config.left,
          }}
        />
      ))}
    </motion.div>
  );
}