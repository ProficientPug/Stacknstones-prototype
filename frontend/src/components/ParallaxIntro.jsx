import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedCounter from './AnimatedCounter'; // Make sure this path is correct
import styles from './ParallaxIntro.module.css';

gsap.registerPlugin(ScrollTrigger);

// Milestone data is now inside this component
const milestones = [
  { value: 35, label: 'Years of Experience' },
  { value: 120, label: 'Projects Completed' },
  { value: 100, label: 'Happy Customers' },
];

function ParallaxIntro() {
  const navigate = useNavigate();
  const handleNavigateToProjects = () => navigate('/projects');

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.parallaxContainer}`,
        start: 'top top',
        // The animation will now span a scroll distance of 200% of the viewport height
        end: '+=200%', 
        scrub: 1.5, // Slightly slower scrub for a smoother feel
        pin: `.${styles.stickyContainer}`,
      },
    });

    // 1. Animate the large phrases out
    tl.to(`.${styles.phrase}`, {
      opacity: 0,
      scale: 0.8,
      duration: 1,
    });

    // 2. Animate the milestones in, floating from different directions
    tl.from(`.${styles.milestoneItem}`, {
      opacity: 0,
      y: (index) => (index % 2 === 0 ? 100 : -100), // Alternate starting position
      x: (index) => (index === 1 ? 0 : (index === 0 ? -100 : 100)),
      scale: 0.5,
      stagger: 0.3,
      duration: 1,
    }, "-=0.5"); // Overlap with previous animation

    // 3. Hold the milestones for a moment, then animate them out
    tl.to(`.${styles.milestoneItem}`, {
      opacity: 0,
      scale: 1.5,
      filter: 'blur(10px)',
      stagger: 0.2,
      duration: 1,
    }, "+=1.5"); // Hold for 1.5 seconds of scroll

    // 4. Animate the final headline section in
    tl.from(`.${styles.headlineSection}`, {
      opacity: 0,
      scale: 0.8,
      duration: 1,
    }, "-=0.5"); // Overlap for a smooth transition

  }, []);

  return (
    <div className={styles.parallaxContainer}>
      <div className={styles.stickyContainer}>
        {/* --- Phrases (Repositioned & Styled via CSS) --- */}
        <h2 className={`${styles.phrase} ${styles.phraseTopLeft}`}>
          Tropical Modernism & Heritage
        </h2>
        <h2 className={`${styles.phrase} ${styles.phraseBottomRight}`}>
          Timelessness, Reimagined.
        </h2>

        {/* --- Milestones (Now part of this component) --- */}
        <div className={styles.milestonesGrid}>
          {milestones.map((milestone, index) => (
            <div key={index} className={`${styles.milestoneItem} ${styles[`milestonePos${index + 1}`]}`}>
              <h3 className={styles.milestoneValue}>
                <AnimatedCounter value={milestone.value} />+
              </h3>
              <p className={styles.milestoneLabel}>{milestone.label}</p>
            </div>
          ))}
        </div>

        {/* --- Final Headline --- */}
        <div className={styles.headlineSection}>
          <h1 className={styles.heroHeadline}>Building Tomorrow's Visions.</h1>
          <p className={styles.heroTagline}>
            Expert constructions for residential and commercial projects.
          </p>
          <button
            className={styles.heroCtaButton}
            onClick={handleNavigateToProjects}
          >
            View Our Work
          </button>
        </div>
      </div>
    </div>
  );
}

export default ParallaxIntro;