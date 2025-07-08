import React, { Suspense, lazy, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      {/* Thin Gradient Top Line */}
      <div style={{
        height: '2px',
        width: '100vw',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 100,
        background: 'linear-gradient(90deg, #089cf1 0%, #7c3aed 50%, #f472b6 100%)'
      }} />
      {/* Minimal Navbar */}
      <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-8 py-2 bg-[#0a2342] z-50" style={{top: '2px'}}>
        {/* Left: Code symbol */}
        <div className="text-blue-300 text-xl font-mono font-normal flex items-center select-none">
          <span className="mr-2">&lt;/&gt;</span>
        </div>
        {/* Right: Nav links for desktop */}
        <div className="hidden sm:flex gap-7 text-white text-base font-normal">
          <a href="#about" className="hover:text-blue-300 transition-colors duration-200">About</a>
          <a href="#skills" className="hover:text-blue-300 transition-colors duration-200">Skills</a>
          <a href="#projects" className="hover:text-blue-300 transition-colors duration-200">Projects</a>
          <a href="#experience" className="hover:text-blue-300 transition-colors duration-200">Experience</a>
          <a href="#contact" className="hover:text-blue-300 transition-colors duration-200">Contact</a>
        </div>
        {/* Hamburger for mobile */}
        <button
          className="sm:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Open menu"
        >
          <span className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 flex flex-col items-center bg-[#0a2342]/95 backdrop-blur-sm animate-fadeIn">
            <div className="w-full flex flex-col items-center mt-20 gap-6 text-white text-lg font-medium">
              <a href="#about" className="hover:text-blue-300 transition-colors duration-200" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#skills" className="hover:text-blue-300 transition-colors duration-200" onClick={() => setMobileMenuOpen(false)}>Skills</a>
              <a href="#projects" className="hover:text-blue-300 transition-colors duration-200" onClick={() => setMobileMenuOpen(false)}>Projects</a>
              <a href="#experience" className="hover:text-blue-300 transition-colors duration-200" onClick={() => setMobileMenuOpen(false)}>Experience</a>
              <a href="#contact" className="hover:text-blue-300 transition-colors duration-200" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </nav>
      <div className="min-h-screen scroll-smooth pt-16">
        <Suspense fallback={<div className="w-full flex justify-center items-center py-20 text-xl text-blue-700">Loading...</div>}>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Resume />
          <Contact />
          <Footer />
        </Suspense>
      </div>
    </>
  );
}

export default App;