// src/components/Grabber.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Grabber.css';

function Grabber() {
  const componentRef = useRef(null);
  const timeline = useRef(null); // Use a ref to hold the timeline instance

  const headlineText = "Building Tomorrow's Visions.";
  // Manually split the text into words - this is our free SplitText alternative
  const words = headlineText.split(' ');

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create the timeline and store it in the ref
      timeline.current = gsap.timeline({
        paused: true, // Start paused
        repeat: -1,   // Repeat indefinitely
        repeatDelay: 1,
      });

      // --- ENTER ANIMATION ---
      timeline.current.staggerFromTo(
        ".word", 0.6,
        { yPercent: 100, opacity: 0 }, // Start state
        { yPercent: 0, opacity: 1, ease: 'circ.out' }, // End state
        0.1 // Stagger amount
      );
      
      // Animate the note
      timeline.current.fromTo(".note", 1, { opacity: 0 }, { opacity: 0.6, ease: 'linear' });

      // Add a 1-second pause in the middle of the animation
      timeline.current.to({}, { duration: 1 });

      // --- EXIT ANIMATION ---
      timeline.current.to(".note", 0.5, { opacity: 0, ease: 'linear' });

      timeline.current.staggerTo(
        ".word", 0.4,
        { yPercent: -100, opacity: 0, ease: 'circ.in' }, // Exit state
        0.05, // Stagger amount
        "-=0.5" // Start this animation 0.5s before the previous one ends
      );

    }, componentRef); // Scope selectors to this component

    return () => ctx.revert(); // Cleanup
  }, []);

  const handlePlay = () => {
    // Check if the timeline is not active, then play it
    if (!timeline.current.isActive()) {
      timeline.current.play();
    }
  };

  return (
    <section 
      ref={componentRef} 
      className="Grabber-section"
      onClick={handlePlay} // Play animation on click
    >
      <div className="headline-wrapper">
        <h1 className="headline">
          {words.map((word, index) => (
            <span key={index} className="word-wrapper">
              <span className="word">{word}</span>
            </span>
          ))}
        </h1>
        <p className="note">(Click to replay animation)</p>
      </div>
    </section>
  );
}

export default Grabber;