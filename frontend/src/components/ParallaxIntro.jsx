import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import styles from './ParallaxIntro.module.css'; // We will create this CSS file next

// Register the GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function ParallaxIntro() {
  const navigate = useNavigate();
  const handleNavigateToProjects = () => navigate('/projects');

  useGSAP(() => {
    // --- The Parallax Timeline ---
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.parallaxContainer}`, // The element that triggers the animation
        start: 'top top',     // Start when the top of the trigger hits the top of the viewport
        end: 'bottom top',    // End when the bottom of the trigger hits the top of the viewport
        scrub: 1,             // Smoothly scrub through the animation on scroll (1-second lag)
        pin: `.${styles.stickyContainer}`, // Pin the container during the scroll
      },
    });

    // Animate the phrases out (move up and fade)
    tl.fromTo(
      `.${styles.phrase}`,
      { y: 0, opacity: 1 },
      { y: -150, opacity: 0, stagger: 0.2 } // Stagger makes them animate one after another
    );

    // Animate the main headline section in (move up from bottom and fade in)
    tl.fromTo(
      `.${styles.headlineSection}`,
      { y: 150, opacity: 0 },
      { y: 0, opacity: 1 },
      "<25%" // Start this animation 25% into the previous one for a smooth overlap
    );

  }, []); // Empty dependency array ensures this runs once on mount

  return (
    // This container's height creates the distance needed for scrolling
    <div className={styles.parallaxContainer}>
      {/* This container gets pinned to the screen */}
      <div className={styles.stickyContainer}>
        {/* Phrases that will scroll away */}
        <h2 className={`${styles.textCenter} ${styles.phrase}`}>
          Tropical Modernism & Heritage
        </h2>
        <h2 className={`${styles.textCenter} ${styles.phrase}`}>
          Timelessness, Reimagined.
        </h2>

        {/* Main headline that will be revealed */}
        <div className={`${styles.textCenter} ${styles.headlineSection}`}>
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