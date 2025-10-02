import React from 'react';
// 1. Import the local data instead of fetching
import { projects } from './projectsData.js'; 
import styles from './ProjectsPage.module.css';

function ProjectsPage() {
  return (
    <section id="projects" className={styles.projectsSection}>
      <h1>Our Projects</h1>
      <div className={styles.projectGrid}>
        {/* 2. Map over the imported array directly */}
        {projects.map((project) => (
          <a
            key={project._id.$oid} // Use the unique ID from your data for the key
            href={project.projectLink}
            className={styles.projectCard}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              // Assumes images are in the public/images/ folder
              src={`/images/${project.imageUrl}`} 
              alt={project.title}
              className={styles.projectImage}
            />
            <div className={styles.projectInfoOverlay}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default ProjectsPage;