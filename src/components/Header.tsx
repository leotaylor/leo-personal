import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';  // Import ScrollLink from react-scroll
import '../styles/header.css';

const Header: React.FC = () => {
  const location = useLocation();  // Get the current route

  return (
    <header className="sticky-header">
      <nav>
        <ul className="nav-links">
          {/* Display section links on the homepage */}
          {location.pathname === "/" ? (
            <>
              <li><ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink></li>
              <li><ScrollLink to="testimonials" smooth={true} duration={500}>Testimonials</ScrollLink></li>
              <li><ScrollLink to="tech" smooth={true} duration={500}>Tech Used</ScrollLink></li>
              <li><ScrollLink to="funFacts" smooth={true} duration={500}>Fun Facts</ScrollLink></li>
              <li><Link to="/blog">Blog</Link></li> {/* Blog link on the homepage */}
            </>
          ) : (
            <>
              {/* Display only Home and Blog on the Blog page */}
              <li><Link to="/">Home</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
