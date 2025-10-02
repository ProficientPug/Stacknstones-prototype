import React from 'react';
import { projects } from '../data/projectsData'; 
import styles from './ProjectsPage.module.css';

// 1. Import the new helper function
import { getImageUrl } from '../utils/imageHelper';

function ProjectsPage() {
  return (
    <section id="projects" className={styles.projectsSection}>
      <h1>Our Projects</h1>
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <a
            key={project._id.$oid}
            href={project.projectLink}
            className={styles.projectCard}
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* 2. Use the function to get the correct, processed image URL */}
            <img
              src={getImageUrl(project.imageUrl)} 
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