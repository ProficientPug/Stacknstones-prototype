import React, { useRef } from 'react'; // <-- 1. Import useRef
import { useNavigate } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedCounter from './AnimatedCounter'; 
// 2. Import the CSS file you just sent
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
  
  // 3. Create a ref for the main container
  const container = useRef(null); 

  // 4. Pass the scope to useGSAP
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current, 
        start: 'top top',
        end: '+=200%', 
        scrub: 1.5, 
        pin: '.sticky-container', // 5. Use simple classes for GSAP
      },
    });

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

  }, { scope: container }); // <-- 4. Pass scope here

  return (
    // 6. Attach the ref to the main container
    <div className={styles.parallaxContainer} ref={container}>
      {/* 7. Add the simple classes alongside the CSS Module classes */}
      <div className={`${styles.stickyContainer} sticky-container`}>
        
        {/* --- TEXT SWAPPED --- */}
        <h2 className={`${styles.phrase} ${styles.phraseTopLeft} phrase`}>
          Building Tomorrow's Visions.
        </h2>
        <h2 className={`${styles.phrase} ${styles.phraseBottomRight} phrase`}>
          Expert constructions for residential and commercial projects.
        </h2>

        <div className={styles.milestonesGrid}>
          {milestones.map((milestone, index) => (
            <div key={index} className={`${styles.milestoneItem} ${styles[`milestonePos${index + 1}`]} milestone-item`}>
              <h3 className={styles.milestoneValue}>
                <AnimatedCounter value={milestone.value} />+
              </h3>
              <p className={styles.milestoneLabel}>{milestone.label}</p>
            </div>
          ))}
        </div>

        {/* --- TEXT SWAPPED --- */}
        <div className={`${styles.headlineSection} headline-section`}>
          <h1 className={styles.heroHeadline}>Tropical Modernism & Heritage</h1>
          <p className={styles.heroTagline}>
            Timelessness, Reimagined.
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