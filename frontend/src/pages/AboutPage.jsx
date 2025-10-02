import React from 'react';
import styles from './AboutPage.module.css'; // We'll use CSS Modules for clean styling

// 1. Import the specific images directly
import dadImage from '../assets/team/dad.jpeg';
import sonImage from '../assets/team/son.jpeg';

function About() {
  return (
    <section className={styles.aboutPage}>
      <div className={styles.contentWrapper}>

        <div className={styles.introSection}>
          <h2>Our Philosophy</h2>
          <p>
            Stack and Stones is more than just a title; it's our philosophy. It represents our belief that every great structure is built on a foundation of trust, expertise, and collaboration. "Stones" are the dreams and aspirations of our clients, and "Stack" is our promise to meticulously layer our skills and integrity to bring that vision to life.
          </p>
        </div>

        {/* Section for the Father (Text on Left, Image on Right) */}
        <div className={styles.storySection}>
          <div className={styles.storyText}>
            <h3>A Legacy of Trust</h3>
            <p>
              My father, Rajendran, started his journey over three decades ago in Chennai. He built his reputation on the simple principle of treating every project as a personal commitment. His dedication to quality resulted in more than 200 happy homes, and his legacy became the bedrock of our family business.
            </p>
          </div>
          <div className={styles.storyImage}>
            <img src={dadImage} alt="Rajendran, Founder" />
          </div>
        </div>

        {/* Section for the Son (Image on Left, Text on Right) */}
        <div className={`${styles.storySection} ${styles.storySectionReversed}`}>
          <div className={styles.storyText}>
            <h3>Modern Expertise</h3>
            <p>
              After completing my engineering degree, I, Muthulingam, joined him five years ago, ready to formalize our expertise. In that time, we've collaborated on more than 20 projects, combining his decades of hands-on experience with my modern approach to project management.
            </p>
          </div>
          <div className={styles.storyImage}>
            <img src={sonImage} alt="Muthulingam, Co-Founder" />
          </div>
        </div>

        <div className={styles.missionSection}>
          <h3>Our Promise</h3>
          <p>
            At Stack and Stones, we offer end-to-end solutions, guiding you through every step of the construction process. From the initial design to the final finishing touches, we are dedicated to making your dream a reality. We are ready to build a lasting legacy with you, one project at a time, across Tamil Nadu and beyond.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;