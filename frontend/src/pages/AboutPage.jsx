// frontend/src/components/About.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AboutPage.css';

// 1. IMPORT THE TEAM IMAGES
const imageModules = import.meta.glob('../assets/team/*.{jpg,png,jpeg}', { eager: true });
const teamImagesMap = Object.keys(imageModules).reduce((acc, path) => {
  const fileName = path.split('/').pop();
  acc[fileName] = imageModules[path].default;
  return acc;
}, {});


function About() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/about');
        setMembers(response.data);
      } catch (error) {
        console.error("Error fetching about data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
  <section id="about" className="about-section">
    <h2>About Us</h2>
    <div className="members-container">
      {members.map(member => (
        // Add the key prop to this div
        <div key={member._id} className="member-card">
          <img 
            src={teamImagesMap[member.imageUrl]} 
            alt={member.name} 
            className="member-image" 
          />
          <h3>{member.name}</h3>
          <h4>{member.role}</h4>
          <p>{member.bio}</p>
        </div>
      ))}
    </div>
  </section>
);
}

export default About;