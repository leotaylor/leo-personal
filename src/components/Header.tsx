import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { useSpring, animated } from '@react-spring/web';
import '../styles/header.css';
import SigilBuilder from './SigilBuilder';

const Header: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const menuAnimation = useSpring({
    transform: isOpen ? 'translateX(0%)' : 'translateX(100%)',
    opacity: isOpen ? 1 : 0,
  });

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = location.pathname === "/" ? (
    <>
      <li><ScrollLink to="about" smooth={true} duration={500} onClick={closeMenu}>About</ScrollLink></li>
      <li><ScrollLink to="testimonials" smooth={true} duration={500} onClick={closeMenu}>Testimonials</ScrollLink></li>
      <li><ScrollLink to="tech" smooth={true} duration={500} onClick={closeMenu}>Tech Used</ScrollLink></li>
      <li><ScrollLink to="funFacts" smooth={true} duration={500} onClick={closeMenu}>Fun Facts</ScrollLink></li>
      <li><Link to="/blog" onClick={closeMenu}>Blog</Link></li>
    </>
  ) : (
    <>
      <li><Link to="/" onClick={closeMenu}>Home</Link></li>
      <li><Link to="/blog" onClick={closeMenu}>Blog</Link></li>
    </>
  );

  return (
    <header className="sticky-header">
      <nav className="nav-wrapper">
        <div className="nav-logo"><SigilBuilder /></div>
        <ul className="nav-links desktop">{navLinks}</ul>
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        </div>

        <animated.ul className="nav-links mobile" style={menuAnimation}>
          {navLinks}
        </animated.ul>
      </nav>
    </header>
  );
};

export default Header;
