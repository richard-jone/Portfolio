import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Achievements from './sections/Achievements';
import ResumeSection from './sections/ResumeSection';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-[#F9FAFB]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Achievements />
        <ResumeSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
