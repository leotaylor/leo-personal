// src/sections/Splash.tsx
import React from 'react';
import '../styles/section.css';

const Splash: React.FC = () => (
  <section id="splash" className="splash-section">
    <div className="splash-content">
      <h1>Welcome to My Personal Site</h1>
      <p>Get to know more about me, my work, and my journey in tech.</p>
      <a href="#about" className="cta-button">Learn More</a> {/* Button linking to About */}
    </div>
  </section>
);

export default Splash;
