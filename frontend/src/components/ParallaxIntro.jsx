import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import styles from './ParallaxIntro.module.css';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function ParallaxIntro() {
  const navigate = useNavigate();
  const handleNavigateToProjects = () => navigate('/projects');

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.parallaxContainer}`,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        pin: `.${styles.stickyContainer}`,
      },
    });

    tl.fromTo(
      `.${styles.phrase}`,
      { y: 0, opacity: 1 },
      { y: -150, opacity: 0, stagger: 0.2 }
    );

    tl.fromTo(
      `.${styles.headlineSection}`,
      { y: 150, opacity: 0 },
      { y: 0, opacity: 1 },
      "<25%"
    );
  }, []);

  return (
    <div className={styles.parallaxContainer}>
      <div className={styles.stickyContainer}>
        
        {/* --- THE FIX IS HERE --- */}
        {/* This single container is now centered, and the h2 tags inside stack normally. */}
        <div className={styles.textCenter}>
          <h2 className={styles.phrase}>
            Tropical Modernism & Heritage
          </h2>
          <h2 className={styles.phrase}>
            Timelessness, Reimagined.
          </h2>
        </div>
        {/* --- END OF FIX --- */}

        {/* This headline section is a separate absolutely positioned element, which is correct. */}
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