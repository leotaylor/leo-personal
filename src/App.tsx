import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Splash from './sections/Splash';
import About from './sections/About';
import Testimonials from './sections/Testimonials';
import Tech from './sections/Tech';
import FunFacts from './sections/FunFacts';
import Blog from './sections/Blog';
import Footer from './components/Footer';
import Kirby from './components/Kirby';

import './styles/global.css';
import './index.css';

const App: React.FC = () => {
  const [hoverColor, setHoverColor] = useState<string | null>(null);
  const [sectionBgImage, setSectionBgImage] = useState<string | null>(null);
  const [titleColor, setTitleColor] = useState<string | null>(null);


  return (
    <Router>
      <Header />
      <main>
        <Kirby />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Splash />
                <About />
                <Testimonials />
                <Tech />
                <FunFacts
                  setHoverColor={setHoverColor}
                  hoverColor={hoverColor}
                  setSectionBgImage={setSectionBgImage}
                  sectionBgImage={sectionBgImage}
                  setTitleColor={setTitleColor}
                  titleColor={titleColor}
                />              </>
            }
          />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>
      <Footer hoverColor={hoverColor} />
    </Router>
  );
};

export default App;
