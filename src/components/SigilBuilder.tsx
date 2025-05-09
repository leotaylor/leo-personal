// src/components/SigilBuilder.tsx
import React from 'react';
import { animated, useSpring } from '@react-spring/web';
import { useVisitedSections } from '../context/VisitedSectionsContext';
import '../styles/SigilBuilder.css';

const SigilBuilder: React.FC = () => {
  const { visited } = useVisitedSections();

  // About segment (horizontal)
  const aboutSpring = useSpring({
    x2: visited.has('about') ? 90 : 10,
    opacity: visited.has('about') ? 1 : 0,
    config: { tension: 120, friction: 20 },
  });

  // Tech segment (vertical)
  const techSpring = useSpring({
    y2: visited.has('tech') ? 10 : 90,
    opacity: visited.has('tech') ? 1 : 0,
    config: { tension: 120, friction: 20 },
  });

  // Testimonials segment (top-left → center)
  const testimonialsSpring = useSpring({
    x2: visited.has('testimonials') ? 50 : 10,
    y2: visited.has('testimonials') ? 50 : 10,
    opacity: visited.has('testimonials') ? 1 : 0,
    config: { tension: 120, friction: 20 },
  });

  // Fun Facts segment (bottom-right → center)
  const funFactsSpring = useSpring({
    x1: visited.has('funFacts') ? 50 : 90,
    y1: visited.has('funFacts') ? 50 : 90,
    opacity: visited.has('funFacts') ? 1 : 0,
    config: { tension: 120, friction: 20 },
  });

  return (
    <div className="sigil-container">
      <svg viewBox="0 0 100 100" className="sigil-svg">
        {/* Base horizontal line (always visible) */}
        {/* <line x1="10" y1="90" x2="90" y2="90" className="sigil-line base" /> */}

        {/* About */}
        <animated.line
          x1="10"
          y1="90"
          x2={aboutSpring.x2}
          y2="90"
          style={{ opacity: aboutSpring.opacity }}
          className="sigil-line"
        />

        {/* Tech */}
        <animated.line
          x1="90"
          y1="90"
          x2="90"
          y2={techSpring.y2}
          style={{ opacity: techSpring.opacity }}
          className="sigil-line"
        />

        {/* Testimonials */}
        <animated.line
          x1="10"
          y1="10"
          x2={testimonialsSpring.x2}
          y2={testimonialsSpring.y2}
          style={{ opacity: testimonialsSpring.opacity }}
          className="sigil-line"
        />

        {/* Fun Facts */}
        <animated.line
          x1={funFactsSpring.x1}
          y1={funFactsSpring.y1}
          x2="90"
          y2="10"
          style={{ opacity: funFactsSpring.opacity }}
          className="sigil-line"
        />
      </svg>
    </div>
  );
};

export default SigilBuilder;
