import React, { useRef } from 'react';
import { useVisitedSections } from '../context/VisitedSectionsContext';
import { useInView } from '../hooks/useInView';

import TechUsed from '../components/TechUsed';
import '../styles/section.css';

const Tech: React.FC = () => {
  const { markVisited } = useVisitedSections();
  const ref = useRef<HTMLElement>(null);

  useInView(ref, () => markVisited('tech'));

  return (
    <section id="tech" ref={ref}>
      <div className="container">
        <TechUsed />
      </div>
    </section>
  );
};

export default Tech;
