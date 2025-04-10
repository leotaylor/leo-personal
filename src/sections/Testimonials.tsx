import React from 'react';
import WordCloudComponent from '../components/WordCloud';

const Testimonials: React.FC = () => {

  return (
    <section id="testimonials">
      <h1>Testimonials</h1>
      <WordCloudComponent />
      <p>* words pulled from actual performance reviews</p>
    </section>
  );
};

export default Testimonials;
