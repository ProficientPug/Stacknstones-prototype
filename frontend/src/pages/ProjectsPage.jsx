import React from 'react';
import { motion } from 'framer-motion';

// Import your data and helper functions
import { projects } from '../data/projectsData';
import { getImageUrl } from '../utils/imageHelper';
import styles from './ProjectsPage.module.css';

// --- Animation Variants ---

// Animation for the container of all cards to stagger them
const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Each card will animate 0.2s after the previous one
    },
  },
};

// Animation for each individual card
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

function ProjectsPage() {
  return (
    <motion.section 
      className={styles.projectsPage}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.header}>
        <h1 className={styles.title}>Our Work</h1>
        <p className={styles.subtitle}>
          A showcase of our commitment to quality, craftsmanship, and client vision.
        </p>
      </div>

      <motion.div
        className={styles.projectGrid}
        variants={gridContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }} // Animate when 10% of the grid is visible
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className={styles.projectCard}
            variants={cardVariants}
            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }} // Slick hover effect
          >
            <div className={styles.imageContainer}>
              <img
                src={getImageUrl('images',project.imageUrl)}
                alt={project.title}
                className={styles.projectImage}
              />
            </div>
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default ProjectsPage;