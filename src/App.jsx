import React, { useState, useEffect } from 'react';
import {
  Code,
  Server,
  Network,
  Github, Linkedin, Twitter,
  Mail,
  Phone,
  MapPin,
  Calendar,
  ExternalLink,
  User,
  Briefcase,
  Award,
  ChevronDown,
  Star
} from 'lucide-react';
import './App.css';
import ContactSection from './components/component';

const DownloadPDF = ({ url, name }) => (
  <a href={url} download={name} rel="noreferrer">

    <span className="font-semibold text-sm">Resume </span>
  </a>
);


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
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-brand">
            <User className="nav-icon" />
            <span className="nav-title">Portfolio</span>
          </div>
          <div className="nav-links">
            {['hero', 'skills', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`nav-link ${activeSection === section ? 'active' : ''}`}
              >
                {section === 'hero' ? 'About' : section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-background">
          <div className="floating-particles">
            {[...Array(20)].map((_, i) => (
              <div key={i} className={`particle particle-${i % 4}`}></div>
            ))}
          </div>
        </div>

        <div className={`hero-content ${isVisible ? 'fade-in' : ''}`}>
          <div className="hero-text">
            <div className="hero-greeting">
              <span className="greeting-text">Hello, I'm</span>
            </div>
            <h1 className="hero-name">
              {/* Ramit Aggarwal */}
              <span className="name-part pr-5">Ramit</span>
              <span className="name-part delay-1">Aggarwal</span>
            </h1>
            <div className="hero-title">
              <span className="title-text">B.Tech Student</span>
              <span className="title-separator">•</span>
              <span className="title-text">Web Developer</span>
            </div>
            <div className="hero-subtitle">
              <Calendar className="subtitle-icon" />
              <span>3rd Year Computer Science Engineering</span>
            </div>

            <p className="hero-description">
              I’m a web developer and cybersecurity enthusiast building fast, maintainable, and responsive applications with modern tech like Next.js, Prisma and tailwind CSS. Proven ability to enhance performance,clean architecture, performant UI  and ensure maintainability through clean, efficient code.
            </p>

            <div className="hero-buttons">
              <button
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                <span> Projects</span>
                <ExternalLink className="btn-icon" />
              </button>
              <button className="btn btn-secondary">
                <svg className="w-5 h-5 transition-transform group-hover:translate-y-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4m2-5l5 5 5-5m-5 5V3" /></svg>
                <DownloadPDF url={"https://drive.google.com/file/d/1BqLGhoFKh8q-kcBWv_6bLnzdqqyX3IGD/view?usp=sharing"} name={"Ramit_Aggarwal_resume.pdf"} />
              </button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="profile-card" style={{ backdropFilter: 'blur(30px)' }}>
              <div className="card-glow" style={{ opacity: '0.6' }}></div>
              <div className="card-content">
                <div className="profile-avatar">
                  <Code className="avatar-icon" />
                </div>
                <div className="profile-info">
                  <h3>Web Developer</h3>
                  <p>BTech CSE Student</p>
                </div>
                <div className="profile-stats">
                  <div className="stat">
                    <span className="stat-number">1</span>
                    <span className="stat-label">Year Learning</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">10+</span>
                    <span className="stat-label">Projects</span>
                  </div>
                </div>
              </div>
              <div className="floating-badge">
                <Award className="badge-icon" />
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator" onClick={() => scrollToSection('skills')}>
          <ChevronDown className="scroll-icon" />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Technical Expertise</h2>
            <p className="section-subtitle">
              Specialized in modern web technologies with hands-on experience in full-stack development
            </p>
          </div>

          <div className="skills-grid">
            <div className="skill-card react-card">
              <div className="skill-header">
                <div className="skill-icon">
                  <Code />
                </div>
                <div className="skill-info">
                  <h3>React.js</h3>
                  <span className="skill-level">Advanced</span>
                </div>
              </div>
              <p className="skill-description">
                Building dynamic, interactive user interfaces with modern React
                hooks, and state management. Experienced in component designing and optimization.
              </p>
              <div className="skill-progress">
                <div className="progress-bar">
                  <div className="progress-fill react-progress"></div>
                </div>
                <span className="progress-text">85%</span>
              </div>
              <div className="skill-tags">
                <span className="tag">JSX</span>
                <span className="tag">Hooks</span>
                <span className="tag">Context API</span>
              </div>
            </div>

            <div className="skill-card node-card">
              <div className="skill-header">
                <div className="skill-icon">
                  <Server />
                </div>
                <div className="skill-info">
                  <h3>Node.js</h3>
                  <span className="skill-level">Intermediate</span>
                </div>
              </div>
              <p className="skill-description">
                Server-side development with Express.js, building RESTful APIs,
                authentication systems, and database integration with modern practices.
              </p>
              <div className="skill-progress">
                <div className="progress-bar">
                  <div className="progress-fill node-progress"></div>
                </div>
                <span className="progress-text">75%</span>
              </div>
              <div className="skill-tags">
                <span className="tag">Express.js</span>
                <span className="tag">REST API</span>
                <span className="tag">MongoDB</span>
              </div>
            </div>

            <div className="skill-card network-card">
              <div className="skill-header">
                <div className="skill-icon">
                  <Network />
                </div>
                <div className="skill-info">
                  <h3>Computer Networks</h3>
                  <span className="skill-level">Intermediate</span>
                </div>
              </div>
              <p className="skill-description">
                Understanding of network protocols, TCP/IP stack, HTTP/HTTPS,
                DNS resolution, and network security fundamentals.
              </p>
              <div className="skill-progress">
                <div className="progress-bar">
                  <div className="progress-fill network-progress"></div>
                </div>
                <span className="progress-text">70%</span>
              </div>
              <div className="skill-tags">
                <span className="tag">TCP/IP</span>
                <span className="tag">HTTP</span>
                <span className="tag">Security</span>
              </div>
            </div>
          </div>

          <div className="additional-skills">
            <h3 className="additional-title">Additional Technologies</h3>
            <div className="tech-stack">
              {['TypeScript', 'React.js', 'Tailwind', 'Next.js', 'Express.js', 'Zod', 'Prisma', 'Alpine.js', 'WebSockets', 'Git', 'MongoDB', 'PostGreSQL', 'CDN', 'Linux', 'AI SDK'].map((tech, index) => (
                <span key={tech} className="tech-badge" style={{ animationDelay: `${index * 0.1}s` }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              Showcasing practical applications of web development skills and creative problem-solving
            </p>
          </div>

          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <div className="project-preview tic-tac-toe-preview">
                  <div className="game-grid">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="game-cell">
                        {i === 0 || i === 4 || i === 8 ? 'X' : i === 2 || i === 6 ? 'O' : ''}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="project-overlay">
                  <div className="project-links">
                    <button className="project-link" onClick={() => {
                      window.open('https://github.com/flashcode635/Tic-tac-toe', '_blank')
                    }}>
                      <Github />
                    </button>
                    <button className="project-link" onClick={(
                      () => {
                        window.open('https://tic-tac-toe-tau-six-86.vercel.app/', '_blank')
                      }
                    )}>
                      <ExternalLink />
                    </button>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Tic-Tac-Toe Game</h3>
                <p className="project-description">
                  Built a zero-build web app using Alpine.js and Tailwind CSS. Refactored legacy code into declarative state, cutting the codebase by 40% and boosting rendering performance.
                </p>
                <div className="project-tech">
                  { ['Alpine.js', 'Tailwind CSS', 'JavaScript', 'CDN Link'].map((tech, index) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-actions">
                  <button className="btn btn-primary btn-small" onClick={() => {
                    window.open('https://tic-tac-toe-tau-six-86.vercel.app/', '_blank')
                  }}>
                    Live Demo
                  </button>
                  <button className="btn btn-secondary btn-small" onClick={
                    () => {
                      window.open('https://github.com/flashcode635/Tic-tac-toe', '_blank');
                    }
                  }>
                    Source Code
                  </button>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="project-preview hack-sec-preview">
                  <div className="company-logo">
                    <Briefcase className="logo-icon" />
                    <div className="logo-text">
                      <h4>Hack-Sec</h4>
                      <p>Security Solutions</p>
                    </div>
                  </div>
                  <div className="preview-elements">
                    <div className="element element-1"></div>
                    <div className="element element-2"></div>
                    <div className="element element-3"></div>
                  </div>
                </div>
                <div className="project-overlay">
                  <div className="project-links">
                    <button className="project-link" onClick={() => {
                      window.open('https://github.com/flashcode635/hacSec-website', '_blank');
                    }}>
                      <Github />
                    </button>
                    <button className="project-link" onClick={() => {
                      window.open('https://democonfig.netlify.app/', '_blank');
                    }}>
                      <ExternalLink />
                    </button>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Hack-Sec Company Frontend</h3>
                <p className="project-description">
                  Modern, responsive website for cybersecurity company featuring partnership programs,
                  service showcases, contact forms, and professional landing pages.
                </p>
                <div className="project-tech">
                  { ['React.js', 'Tailwind CSS', 'Responsive'].map((tech, index) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-actions">
                  <button className="btn btn-primary btn-small" onClick={() => {
                    window.open('https://democonfig.netlify.app/', '_blank');
                  }} >
                    Live Demo
                  </button>

                  <button className="btn btn-secondary btn-small" onClick={
                    () => {

                      window.open('https://github.com/flashcode635/hacSec-website', '_blank')
                    }
                  }>
                    Source Codes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}

      <section id="contact" className="contact-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Let's Connect</h2>
            <p className='section-subtitle'> Available for Full-stack roles; always excited to work on new challenges. Whether you have a specific project in mind or just want to explore possibilities, let's start the conversation. </p>
          </div>
          <ContactSection />

          <div className="section-header">
            <h2 className="section-title">Other Contacts</h2>
          </div>
          {/* social links ,  */}
          <div className="social-links">

            {/* github */}
            <div className='link-container'>
              <a href="https://github.com/flashcode635" className="social-link">
                <Github />
              </a>
              <p>Github</p>
            </div>

            {/* email */}
            <div className='link-container'>

              <a href="https://mail.google.com/mail/u/0/?fs=1&to=ramit.aggarwal2000@gmail.com&su=Hello&body=Hi+there!&tf=cm" className="social-link">
                <Mail />
              </a>
              <p>Mail</p>
            </div>

            {/* Linkedin */}
            <div className='link-container'>

              <a href="https://www.linkedin.com/in/ramit-aggarwal-66a853280/" className="social-link">
                <Linkedin />
              </a>
              <p>Linkedin</p>
            </div>

            {/* twitter */}
            <div className='link-container'>
              <a href="https://x.com/aggramit476282" className="social-link">
                {/* <Twitter /> */}
                <svg viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="currentColor" />
                </svg>


              </a>
              <p className='w-full'>X /Twitter</p>
            </div>






          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>© 2026 Ramit Aggarwal. All rights reserved.</p>
          <div className="footer-links">
            <Star className="footer-icon" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
