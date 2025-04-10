import React, { useEffect, useState } from 'react';
import '../styles/section.css';

const Splash: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);
  return (
    <section
      id="splash"
      className='splash-section'
    >
      <div className={`fade-in-section ${isVisible ? 'visible' : ''}`}>
        <h1>Welcome to My Personal Site</h1>
        <p>Get to know more about me, my work, and my journey in tech.</p>
        <a href="#about" className="cta-button">Learn More</a>
      </div>
    </section>
  );
};

export default Splash;
