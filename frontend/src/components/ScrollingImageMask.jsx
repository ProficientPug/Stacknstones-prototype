// src/components/ScrollingImageMask.jsx

import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import styles from './ScrollingImageMask.module.css';

const imageModules = import.meta.glob('../assets/images/*.{jpg,jpeg,png}', { eager: true });
const localImages = Object.values(imageModules).map(module => module.default);

gsap.registerPlugin(ScrollTrigger);

const imagesToUse = localImages.slice(0, 5);

function ScrollingImageMask() {
  const componentRef = useRef(null);
  const imagesRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // We are keeping the Lenis smooth scroll setup for both desktop and mobile
      const lenis = new Lenis();
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);

      const allImages = gsap.utils.toArray(imagesRef.current.children);

      // --- Use matchMedia for responsive animations ---
      ScrollTrigger.matchMedia({
        
        // --- Desktop Animation ---
        "(min-width: 769px)": function() {
          // This is your original, complex animation for large screens
          const masterTimeline = gsap.timeline({
            scrollTrigger: {
              trigger: componentRef.current,
              start: 'top top',
              end: `+=${(allImages.length + 0.5) * 700}`,
              pin: true,
              scrub: 1.5,
            },
          });
          
          masterTimeline.to({}, { duration: 0.1 });

          allImages.forEach((img, index) => {
            if (index === allImages.length - 1) return;
            masterTimeline.to(img, {
              maskImage: `linear-gradient(130deg, black 0%, transparent 0%, transparent 100%, black 100%)`,
              WebkitMaskImage: `linear-gradient(130deg, black 0%, transparent 0%, transparent 100%, black 100%)`,
              duration: 1,
            }, ">-0.4");
          });
          
          masterTimeline.to(imagesRef.current, {
            opacity: 0,
            duration: 0.5,
          }, ">-0.5");
        },

        // --- Mobile Animation ---
        "(max-width: 768px)": function() {
          // This is a new, simpler animation for small screens
          // The images will just fade and slide up as you scroll past them
          allImages.forEach((img) => {
            gsap.from(img, {
              opacity: 0,
              y: 80,
              duration: 1,
              scrollTrigger: {
                trigger: img,
                start: 'top 90%', // Start animation when the top of the image is 90% from the top of the viewport
                toggleActions: 'play none none none',
              },
            });
          });
        }
        
      });

    }, componentRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={componentRef} className={styles.hero}>
      <div ref={imagesRef} className={styles.images}>
        {imagesToUse.map((src, index) => (
          <div
            key={index}
            className={styles.maskImg}
            style={{ zIndex: imagesToUse.length - index }}
          >
            <img src={src} alt={`scroll animation image ${index + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScrollingImageMask;