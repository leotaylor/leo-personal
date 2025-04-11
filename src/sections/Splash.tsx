import React, { useEffect, useState } from 'react';
import '../styles/section.css';

const Splash: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 400);

    return () => clearTimeout(timer);
  }, []);
  return (
    <section
      id="splash"
      className='splash-section'
    >
      <div className={`fade-in-section ${isVisible ? 'visible' : ''}`}>
        <h1>Developer. Mentor. Human.</h1>
        <p>Get to know more about me, my work, and my journey in tech.</p>
        <a href="#about" className="cta-button">Learn More</a>
        <h1 className='name'>LEO TAYLOR</h1>
      </div>
    </section>
  );
};

export default Splash;
