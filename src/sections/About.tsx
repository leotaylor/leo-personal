import React from 'react';
import '../styles/About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="about-header">
          <h2>About Me</h2>
          <div className="about-image">
            <img src="/assets/Leo_Fun_320.jpg" alt="Leo" />
          </div>
        </div>

        <div className="about-text">
          <p>
            Hey there! I’m Leo, a web developer with 5+ years of experience building digital experiences across a range of industries.
            My background spans full-stack software development for a healthcare scheduling platform, to creating interactive web apps and games for large scale in-person and virtual events.
          </p>
          <p>
            I hold an MBA and have experience managing diverse teams. This allows me to contribute both with technical ability and strategic thinking.
          </p>
        </div>

        <h3>Experience</h3>
        <ul>
          <li>Role: Web Developer, Project Manager</li>
          <li>Years: Since 2017</li>
          <li>Current: Live and Vitual Events Industry</li>
          <li>Past Experience: Full-stack Developer (Healthcare Sector), Plant Manager (Hardwood Flooring Plant)</li>
          <li>Background: MBA, Team Management, Event Tech</li>
        </ul>

        <h3>Brands I've Worked On Projects For</h3>
        <div className="brand-logos">
          {/* Swap these with actual logos later */}
          <img src="/assets/walmart.png" alt="WalMart" />
          <img src="/assets/hilton.png" alt="Hilton" />
          <img src="/assets/logo-sherwin.png" alt="Sherwin Williams" />
          <img src="/assets/logo-paycom.jpg" alt="Paycom" />
          <img src="/assets/logo-az.png" alt="AutoZone" />
          <img src="/assets/logo-pepsi.png" alt="Pepsi" />
          <img src="/assets/logo-ysl.png" alt="YSL" />
          <img src="/assets/logo-ups.png" alt="UPS Store" />
          <img src="/assets/logo-ac.png" alt="Acquia" />
          <img src="/assets/logo-hd.png" alt="Home Depot" />
          <img src="/assets/logo-maa.png" alt="MAA" />
          <img src="/assets/logo-farm.png" alt="Farmers" />
          <img src="/assets/logo-bc.webp" alt="Blue Cross Blue Shield" />
        </div>
      </div>
    </section>
  );
};

export default About;
