import React from 'react';
import '../styles/About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <p>Hi! I'm [Your Name], a passionate developer with experience in [Technologies you use]. I have worked on various projects that have honed my skills in web development, problem-solving, and leadership.</p>
      
      <h3>Experience</h3>
      <ul>
        <li>Role: [Your Role]</li>
        <li>Company: [Your Company]</li>
        <li>Years: [Number of Years]</li>
        <li>Key Achievements: [List of major accomplishments]</li>
      </ul>
    </section>
  );
};

export default About;
