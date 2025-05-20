import React from 'react';
import { animated, useSpring } from '@react-spring/web';
import { useVisitedSections } from '../context/VisitedSectionsContext';
import '../styles/SigilBuilder.css';

const SigilBuilder: React.FC = () => {
  const { visited } = useVisitedSections();

  const lSpring = useSpring({
    strokeDashoffset: visited.has('about') ? 0 : 200,
    opacity: visited.has('about') ? 1 : 0,
    config: { tension: 120, friction: 20 },
  });

  const eSpring = useSpring({
    strokeDashoffset: visited.has('tech') ? 0 : 200,
    opacity: visited.has('tech') ? 1 : 0,
    config: { tension: 120, friction: 20 },
  });

  const oSpring = useSpring({
    strokeDashoffset: visited.has('funFacts') ? 0 : 200,
    opacity: visited.has('funFacts') ? 1 : 0,
    config: { tension: 120, friction: 20 },
  });

  const allVisited =
    visited.has('about') && visited.has('tech') && visited.has('funFacts');

  const flourishSpring = useSpring({
    strokeDashoffset: allVisited ? 0 : 300,
    opacity: allVisited ? 1 : 0,
    config: { tension: 150, friction: 18 },
  });

  return (
    <div className="sigil-container">
      <svg
        viewBox="0 -10 300 130"
        className="sigil-svg"
        fill="none"
        stroke="white"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* L */}
        <animated.path
          d="M20 10 V90 H80"
          strokeDasharray="200"
          style={lSpring}
        />

        {/* E */}
        <animated.path
          d="M120 10 H180 M120 50 H160 M120 90 H180 M120 10 V90"
          strokeDasharray="200"
          style={eSpring}
        />

        {/* O */}
        <animated.circle
          cx="255"
          cy="55"
          r="40"
          strokeDasharray="251.2"
          style={oSpring}
        />

        {/* Final flourish (a swirl/curve under the word) */}
        <animated.path
          d="M10 118 Q150 78 290 118"
          strokeDasharray="300"
          style={flourishSpring}
        />
      </svg>
    </div>
  );
};

export default SigilBuilder;
