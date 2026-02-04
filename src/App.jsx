import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSectionWrapper from './components/ContactSectionWrapper';
import Footer from './components/Footer';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const sections = ['hero', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className="min-h-screen bg-bg relative"
      style={{
        background:
          'radial-gradient(circle at 20% 20%, rgba(49, 98, 99, 0.08), transparent 30%), radial-gradient(circle at 80% 0%, rgba(61, 116, 118, 0.07), transparent 28%), #f0eee9',
      }}
    >
      <NavBar activeSection={activeSection} onNavClick={scrollToSection} />
      <HeroSection isVisible={isVisible} onScrollTo={scrollToSection} />
      <SkillsSection />
      <ProjectsSection />
      <ContactSectionWrapper />
      <Footer />
    </div>
  );
}

export default App;
