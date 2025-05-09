import React, {useRef} from 'react';
import { useVisitedSections } from '../context/VisitedSectionsContext';
import { useInView } from '../hooks/useInView';

import WordCloudComponent from '../components/WordCloud';

const Testimonials: React.FC = () => {
  const { markVisited } = useVisitedSections();
  const ref = useRef<HTMLElement>(null);

  useInView(ref, () => markVisited('testimonials'));

  return (
    <section id="testimonials" ref={ref}>
      <h1>Testimonials</h1>
      <WordCloudComponent />
      <p>* words pulled from actual performance reviews</p>
    </section>
  );
};

export default Testimonials;
