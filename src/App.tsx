import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Splash from './sections/Splash';
import About from './sections/About';
import Testimonials from './sections/Testimonials';
import Tech from './sections/Tech';
import FunFacts from './sections/FunFacts';
import Blog from './sections/Blog';
import Footer from './components/Footer';

import './styles/global.css';
import './index.css';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<><Splash /><About /><Testimonials /><Tech /><FunFacts /></>} />
          
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
