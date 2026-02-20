import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Achievements from './components/Achievements';
import Research from './components/Research';
import Leadership from './components/Leadership';
import Media from './components/Media';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >  50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Header scrolled={scrolled} />
      <Hero />
      <About />
      <Achievements />
      <Research />
      <Leadership />
      <Media />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
