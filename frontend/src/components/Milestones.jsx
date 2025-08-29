import React from 'react';
import { motion } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';
import styles from './Milestones.module.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const milestones = [
  { value: 35, label: 'Years of Experience' },
  { value: 120, label: 'Projects Completed' },
  { value: 100, label: 'Happy Customers' },
];

function Milestones() {
  return (
    <div className={styles.milestonesSection}>
      <motion.div
        className={styles.milestonesContainer}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {milestones.map((milestone, index) => (
          <motion.div key={index} className={styles.milestoneItem} variants={itemVariants}>
            <h2 className={styles.milestoneValue}>
              <AnimatedCounter value={milestone.value} />+
            </h2>
            <p className={styles.milestoneLabel}>{milestone.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Milestones;