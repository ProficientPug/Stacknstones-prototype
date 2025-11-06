import React, { useRef } from 'react'; // <-- 1. Import useRef
import { useNavigate } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedCounter from './AnimatedCounter'; 
import styles from './ParallaxIntro.module.css';

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  { value: 35, label: 'Years of Experience' },
  { value: 120, label: 'Projects Completed' },
  { value: 100, label: 'Happy Customers' },
];

function ParallaxIntro() {
  const navigate = useNavigate();
  const handleNavigateToProjects = () => navigate('/projects');
  
  // 2. Create a ref for the main container
  const container = useRef(null); 

  // 3. Pass the scope to useGSAP
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        // We can use the ref here for the trigger, which is safer
        trigger: container.current, 
        start: 'top top',
        end: '+=200%', 
        scrub: 1.5, 
        // And we can use a simple class for the pin
        pin: '.sticky-container', 
      },
    });

    // 4. Use simple, non-mangled class names as selectors
    tl.to('.phrase', {
      opacity: 0,
      scale: 0.8,
      duration: 1,
    });

    tl.from('.milestone-item', {
      opacity: 0,
      y: (index) => (index % 2 === 0 ? 100 : -100), 
      x: (index) => (index === 1 ? 0 : (index === 0 ? -100 : 100)),
      scale: 0.5,
      stagger: 0.3,
      duration: 1,
    }, "-=0.5"); 

    tl.to('.milestone-item', {
      opacity: 0,
      scale: 1.5,
      filter: 'blur(10px)',
      stagger: 0.2,
      duration: 1,
    }, "+=1.5"); 

    tl.from('.headline-section', {
      opacity: 0,
      scale: 0.8,
      duration: 1,
    }, "-=0.5"); 

  }, { scope: container }); // <-- 3. Pass scope here

  return (
    // 5. Attach the ref to the main container
    <div className={styles.parallaxContainer} ref={container}>
      {/* 6. Add the simple class 'sticky-container' for GSAP to find */}
      <div className={`${styles.stickyContainer} sticky-container`}>
        
        {/* 7. Add the simple class 'phrase' */}
        <h2 className={`${styles.phrase} ${styles.phraseTopLeft} phrase`}>
          Tropical Modernism & Heritage
        </h2>
        <h2 className={`${styles.phrase} ${styles.phraseBottomRight} phrase`}>
          Timelessness, Reimagined.
        </h2>

        <div className={styles.milestonesGrid}>
          {milestones.map((milestone, index) => (
            // 8. Add the simple class 'milestone-item'
            <div key={index} className={`${styles.milestoneItem} ${styles[`milestonePos${index + 1}`]} milestone-item`}>
              <h3 className={styles.milestoneValue}>
                <AnimatedCounter value={milestone.value} />+
              </h3>
              <p className={styles.milestoneLabel}>{milestone.label}</p>
            </div>
          ))}
        </div>

        {/* 9. Add the simple class 'headline-section' */}
        <div className={`${styles.headlineSection} headline-section`}>
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