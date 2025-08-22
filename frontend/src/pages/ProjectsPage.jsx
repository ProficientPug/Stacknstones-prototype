import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProjectsPage.css';

// 1. DYNAMICALLY IMPORT IMAGES AND CREATE A LOOKUP MAP
const imageModules = import.meta.glob('../assets/images/*.jpg', { eager: true });

const localImagesMap = Object.keys(imageModules).reduce((acc, path) => {
  // Extracts the filename (e.g., "image1.jpg") from the full path
  const fileName = path.split('/').pop();
  // Assigns the imported image to the filename key
  acc[fileName] = imageModules[path].default;
  return acc;
}, {});


const tileColors = ['#00A3A3', '#E5A629', '#D95B3D', '#4B8BF5', '#9C3DD9'];

function ProjectGallery() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/projects');
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (loading) {
    return <div className="loading-message">Loading projects...</div>;
  }

  return (
    <section id="projects">
      <h1>Our Work</h1>
      <div className="project-grid">
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <a 
              key={project._id} 
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
              style={{ backgroundColor: tileColors[index % tileColors.length] }}
            >
              {/* 2. USE THE MAP TO FIND THE CORRECT IMAGE BY FILENAME */}
              <img 
                src={localImagesMap[project.imageUrl]} 
                alt={project.title} 
                className="project-image" 
              />
              
              <div className="project-info-overlay">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </a>
          ))
        ) : (
          <p>No projects to display yet!</p>
        )}
      </div>
    </section>
  );
}

export default ProjectGallery;