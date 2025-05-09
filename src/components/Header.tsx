// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Link as ScrollLink } from 'react-scroll';  // Import ScrollLink from react-scroll
// import '../styles/header.css';

// const Header: React.FC = () => {
//   const location = useLocation();  // Get the current route

//   return (
//     <header className="sticky-header">
//       <nav>
//         <ul className="nav-links">
//           {/* Display section links on the homepage */}
//           {location.pathname === "/" ? (
//             <>
//               <li><ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink></li>
//               <li><ScrollLink to="testimonials" smooth={true} duration={500}>Testimonials</ScrollLink></li>
//               <li><ScrollLink to="tech" smooth={true} duration={500}>Tech Used</ScrollLink></li>
//               <li><ScrollLink to="funFacts" smooth={true} duration={500}>Fun Facts</ScrollLink></li>
//               <li><Link to="/blog">Blog</Link></li> {/* Blog link on the homepage */}
//             </>
//           ) : (
//             <>
//               {/* Display only Home and Blog on the Blog page */}
//               <li><Link to="/">Home</Link></li>
//               <li><Link to="/blog">Blog</Link></li>
//             </>
//           )}
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { useSpring, animated } from '@react-spring/web';
import '../styles/header.css';

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
        <div className="nav-logo"><img src='/assets/leologo2t.png'/></div>

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
