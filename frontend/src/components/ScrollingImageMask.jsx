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
      const lenis = new Lenis();
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);

      const allImages = gsap.utils.toArray(imagesRef.current.children);

      // This timeline will now run on ALL screen sizes
      const masterTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: componentRef.current,
          start: 'top top',
          end: `+=${(allImages.length + 0.5) * 400}`,
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