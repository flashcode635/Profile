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
    <div className="min-h-screen bg-bg relative" style={{ background: 'radial-gradient(circle at 20% 20%, rgba(49, 98, 99, 0.08), transparent 30%), radial-gradient(circle at 80% 0%, rgba(61, 116, 118, 0.07), transparent 28%), #f0eee9' }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[1000] bg-[rgba(240,238,233,0.9)] backdrop-blur-[20px] border-b border-border transition-all duration-300">
        <div className="max-w-[1200px] bg-transparent mx-auto px-[1.4rem] py-[0.7rem] flex justify-between items-center">
          <div className="flex items-center gap-2">
            <User className="w-8 h-8 text-accent" />
            <span className="text-2xl font-bold bg-gradient-to-br from-accent to-[#1f3f40] bg-clip-text text-transparent">Portfolio</span>
          </div>
          <div className="hidden md:flex gap-8">
            {['hero', 'skills', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`relative overflow-hidden bg-transparent border-none text-muted text-base font-medium px-4 py-2 rounded-lg transition-all duration-300 nav-link-hover ${activeSection === section
                  ? 'text-accent bg-[rgba(49,98,99,0.12)]'
                  : 'hover:text-accent hover:bg-[rgba(49,98,99,0.12)]'
                  }`}
              >
                {section === 'hero' ? 'About' : section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col justify-center items-center relative px-[2rem] pt-[4.5rem] pb-4 overflow-hidden" style={{ background: 'linear-gradient(180deg, rgba(232, 228, 218, 0.7), rgba(240, 238, 233, 0.95))' }}>
        <div className="absolute top-0 left-0 right-0 bottom-0 -z-10">
          <div className="absolute w-full h-full">
            {[...Array(20)].map((_, i) => {
              const positions = [
                { top: '20%', left: '10%', delay: '0s', bgColor: '#316263' },
                { top: '60%', left: '20%', delay: '1s', bgColor: '#3d7476' },
                { top: '30%', left: '80%', delay: '2s', bgColor: '#3d7476' },
                { top: '80%', left: '70%', delay: '3s', bgColor: '#316263' },
              ];
              const pos = positions[i % 4];
              return (
                <div
                  key={i}
                  className="absolute w-1 h-1 rounded-full animate-float"
                  style={{ top: pos.top, left: pos.left, animationDelay: pos.delay, backgroundColor: pos.bgColor }}
                />
              );
            })}
          </div>
        </div>

        <div className={`max-w-[1200px] w-screen grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 place-items-center transition-all duration-1000 text-center md:text-left ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'
          }`}>
          <div className="z-[2] md:px-[30px] px-[22px] py-[10px] pr-2  flex flex-col justify-center " >
            <div className="mb-[0.6rem]">
              <span className="text-xl text-accent font-medium opacity-0 animate-[slideInLeft_0.8s_ease_0.2s_forwards]">Hello, I'm</span>
            </div>
            <h1 className="md:flex grid text-[3rem] md:text-[4.5rem]  md:h-full h-[100px] font-bold mb-6 leading-[1.1] tracking-[-0.03em] text-text">
              <p className="pr-5 p-[8px] bg-gradient-to-br from-text to-accent bg-clip-text text-transparent h-max opacity-0 translate-y-[50px] animate-[slideInUp_0.8s_ease_forwards]">Ramit</p>
              <p className="bg-gradient-to-br from-text to-accent bg-clip-text text-transparent h-fit p-2  opacity-0 translate-y-[50px] animate-[slideInUp_0.8s_ease_0.3s_forwards]">Aggarwal</p>
            </h1>
            <div className="flex justify-center gap-4 mb-2 opacity-0 animate-[slideInLeft_0.8s_ease_0.6s_forwards]">
              <span className="text-xl font-semibold text-accent">B.Tech Student</span>
              <span className="text-accent text-2xl">•</span>
              <span className="text-xl font-semibold text-accent">Web Developer</span>
            </div>
            <div className="flex justify-center gap-2 mb-8 text-muted opacity-0 animate-[slideInLeft_0.8s_ease_0.8s_forwards]">
              <Calendar className="w-5 h-5 text-accent" />
              <span>3rd Year Computer Science Engineering</span>
            </div>

            <p className="text-base leading-[1.8] text-muted mb-10 max-w-[573px] opacity-0 animate-[slideInLeft_0.8s_ease_1s_forwards]">
              I'm a web developer and cybersecurity enthusiast building fast, maintainable, and responsive applications with modern tech like Next.js, Prisma and tailwind CSS. Proven ability to enhance performance,clean architecture, performant UI  and ensure maintainability through clean, efficient code.
            </p>

            <div className="flex  gap-4 items-center justify-center opacity-0 animate-[slideInUp_0.8s_ease_1.2s_forwards]">
              <button
                className="group relative overflow-hidden flex items-center gap-2 px-8 py-4 border-none rounded-xl text-base font-semibold cursor-pointer transition-all duration-300 bg-gradient-to-br from-accent to-accent-soft text-accent-contrast translate-y-0 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(49,98,99,0.25)] btn-hover"
                onClick={() => scrollToSection('projects')}
              >
                <span> Projects</span>
                <ExternalLink className="w-5 h-5" />
              </button>
              <button className="group relative overflow-hidden flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold cursor-pointer transition-all duration-300 bg-transparent text-accent border-2 border-accent hover:bg-[rgba(49,98,99,0.12)] hover:text-accent hover:-translate-y-0.5 btn-hover">
                <svg className="w-5 h-5 transition-transform group-hover:translate-y-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4m2-5l5 5 5-5m-5 5V3" /></svg>
                <DownloadPDF url={"https://drive.google.com/file/d/1BqLGhoFKh8q-kcBWv_6bLnzdqqyX3IGD/view?usp=sharing"} name={"Ramit_Aggarwal_resume.pdf"} />
              </button>
            </div>
          </div>

          <div className="flex justify-center items-center relative">
            <div className="bg-surface backdrop-blur-[30px] border border-border rounded-[2rem] p-8 relative translate-y-5 opacity-0 animate-[slideInUp_1s_ease_0.5s_forwards]" style={{ backdropFilter: 'blur(30px)' }}>
              <div className="absolute -top-0.5 -left-0.5 -right-0.5 -bottom-0.5 bg-gradient-to-br from-[rgba(49,98,99,0.4)] to-[rgba(49,98,99,0.15)] rounded-[2rem] -z-10 blur-[20px] animate-glow opacity-60"></div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent-soft rounded-full flex items-center justify-center mx-auto mb-6 animate-rotate">
                  <Code className="w-10 h-10 text-accent-contrast" />
                </div>
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold mb-2 text-text tracking-[-0.01em] leading-[1.3]">Web Developer</h3>
                  <p className="text-muted mb-6">BTech CSE Student</p>
                </div>
                <div className="flex justify-around gap-8">
                  <div className="text-center">
                    <span className="block text-2xl font-bold text-accent">1</span>
                    <span className="text-sm text-muted">Year Learning</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-2xl font-bold text-accent">10+</span>
                    <span className="text-sm text-muted">Projects</span>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-accent to-accent-soft rounded-full flex items-center justify-center animate-bounce">
                <Award className="w-6 h-6 text-accent-contrast" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer animate-bounce" onClick={() => scrollToSection('skills')}>
          <ChevronDown className="w-8 h-8 text-accent" />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-8" style={{ background: 'rgba(232, 228, 218, 0.35)' }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-14 pt-2">
            <h2 className="text-[2.75rem] font-bold mb-4 text-text tracking-[-0.02em] leading-[1.2] relative inline-block bg-accent bg-clip-text text-transparent after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-1 after:bg-gradient-to-r after:from-accent after:to-transparent after:rounded-sm">
              Technical Expertise
            </h2>
            <p className="text-lg text-muted max-w-[650px] mt-6 mx-auto leading-[1.7] font-normal">
              Specialized in modern web technologies with hands-on experience in full-stack development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-8 mb-16">
            <div className="bg-surface border border-border rounded-2xl p-8 transition-all duration-300 relative overflow-hidden skill-card-hover hover:-translate-y-2.5 hover:shadow-[0_18px_40px_rgba(20,20,20,0.1)]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-soft rounded-xl flex items-center justify-center text-accent-contrast">
                  <Code />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-text tracking-[-0.01em] mb-1 leading-[1.3]">React.js</h3>
                  <span className="text-sm text-accent font-medium">Advanced</span>
                </div>
              </div>
              <p className="text-muted leading-[1.6] mb-6">
                Building dynamic, interactive user interfaces with modern React
                hooks, and state management. Experienced in component designing and optimization.
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-1 h-2 bg-[rgba(20,20,20,0.08)] rounded overflow-hidden">
                  <div className="h-full rounded w-[85%] bg-gradient-to-r from-accent to-accent-soft animate-[fillProgress_2s_ease-in-out]"></div>
                </div>
                <span className="font-semibold text-accent">85%</span>
              </div>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-[rgba(49,98,99,0.12)] text-accent px-3 py-1 rounded-full text-xs font-medium border border-[rgba(49,98,99,0.25)]">JSX</span>
                <span className="bg-[rgba(49,98,99,0.12)] text-accent px-3 py-1 rounded-full text-xs font-medium border border-[rgba(49,98,99,0.25)]">Hooks</span>
                <span className="bg-[rgba(49,98,99,0.12)] text-accent px-3 py-1 rounded-full text-xs font-medium border border-[rgba(49,98,99,0.25)]">Context API</span>
              </div>
            </div>

            <div className="bg-surface border border-border rounded-2xl p-8 transition-all duration-300 relative overflow-hidden skill-card-hover hover:-translate-y-2.5 hover:shadow-[0_18px_40px_rgba(20,20,20,0.1)]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-soft rounded-xl flex items-center justify-center text-accent-contrast">
                  <Server />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-text tracking-[-0.01em] mb-1 leading-[1.3]">Node.js</h3>
                  <span className="text-sm text-accent font-medium">Intermediate</span>
                </div>
              </div>
              <p className="text-muted leading-[1.6] mb-6">
                Server-side development with Express.js, building RESTful APIs,
                authentication systems, and database integration with modern practices.
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-1 h-2 bg-[rgba(20,20,20,0.08)] rounded overflow-hidden">
                  <div className="h-full rounded w-[75%] bg-gradient-to-r from-accent to-accent-soft animate-[fillProgress_2s_ease-in-out]"></div>
                </div>
                <span className="font-semibold text-accent">75%</span>
              </div>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-[rgba(49,98,99,0.12)] text-accent px-3 py-1 rounded-full text-xs font-medium border border-[rgba(49,98,99,0.25)]">Express.js</span>
                <span className="bg-[rgba(49,98,99,0.12)] text-accent px-3 py-1 rounded-full text-xs font-medium border border-[rgba(49,98,99,0.25)]">REST API</span>
                <span className="bg-[rgba(49,98,99,0.12)] text-accent px-3 py-1 rounded-full text-xs font-medium border border-[rgba(49,98,99,0.25)]">MongoDB</span>
              </div>
            </div>

            <div className="bg-surface border border-border rounded-2xl p-8 transition-all duration-300 relative overflow-hidden skill-card-hover hover:-translate-y-2.5 hover:shadow-[0_18px_40px_rgba(20,20,20,0.1)]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-soft rounded-xl flex items-center justify-center text-accent-contrast">
                  <Network />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-text tracking-[-0.01em] mb-1 leading-[1.3]">Computer Networks</h3>
                  <span className="text-sm text-accent font-medium">Intermediate</span>
                </div>
              </div>
              <p className="text-muted leading-[1.6] mb-6">
                Understanding of network protocols, TCP/IP stack, HTTP/HTTPS,
                DNS resolution, and network security fundamentals.
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-1 h-2 bg-[rgba(20,20,20,0.08)] rounded overflow-hidden">
                  <div className="h-full rounded w-[70%] bg-gradient-to-r from-accent to-accent-soft animate-[fillProgress_2s_ease-in-out]"></div>
                </div>
                <span className="font-semibold text-accent">70%</span>
              </div>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-[rgba(49,98,99,0.12)] text-accent px-3 py-1 rounded-full text-xs font-medium border border-[rgba(49,98,99,0.25)]">TCP/IP</span>
                <span className="bg-[rgba(49,98,99,0.12)] text-accent px-3 py-1 rounded-full text-xs font-medium border border-[rgba(49,98,99,0.25)]">HTTP</span>
                <span className="bg-[rgba(49,98,99,0.12)] text-accent px-3 py-1 rounded-full text-xs font-medium border border-[rgba(49,98,99,0.25)]">Security</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-[1.5rem] md:text-[1.75rem] font-semibold text-accent-soft mb-8 tracking-[-0.01em] relative inline-block pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-accent after:rounded-sm">
              Additional Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['TypeScript', 'React.js', 'Tailwind', 'Next.js', 'Express.js', 'Zod', 'Prisma', 'Alpine.js', 'WebSockets', 'Git', 'MongoDB', 'PostGreSQL', 'CDN', 'Linux', 'AI SDK'].map((tech, index) => (
                <span
                  key={tech}
                  className="bg-surface text-text px-6 py-3 rounded-full font-medium border border-border transition-all duration-300 opacity-0 translate-y-5 animate-[slideInUp_0.6s_ease_forwards] hover:bg-[rgba(49,98,99,0.12)] hover:text-accent hover:border-[rgba(49,98,99,0.3)] hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-8" style={{ background: 'rgba(232, 228, 218, 0.35)' }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-14 pt-2">
            <h2 className="text-[2.75rem] font-bold mb-4 text-text tracking-[-0.02em] leading-[1.2] relative inline-block bg-accent bg-clip-text text-transparent after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-1 after:bg-gradient-to-r after:from-accent after:to-transparent after:rounded-sm">
              Featured Projects
            </h2>
            <p className="text-lg text-muted max-w-[650px] mt-6 mx-auto leading-[1.7] font-normal">
              Showcasing practical applications of web development skills and creative problem-solving
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-12">
            <div className="bg-surface border border-border rounded-2xl overflow-hidden transition-all duration-300 relative hover:-translate-y-2.5 hover:shadow-[0_18px_40px_rgba(20,20,20,0.501)] group">
              <div className="h-[250px] relative overflow-hidden">
                <div className="w-full h-full flex items-center justify-center relative" style={{ background: 'linear-gradient(135deg, #023a3139 20%, #01321db7 80%)' }}>
                  <div className="grid grid-cols-3 gap-2 p-8">
                    {[...Array(9)].map((_, i) => (
                      <div
                        key={i}
                        className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl font-bold text-white animate-pulse"
                        style={{ background: 'rgba(255, 255, 255, 0.2)' }}
                      >
                        {i === 0 || i === 4 || i === 8 ? 'X' : i === 2 || i === 6 ? 'O' : ''}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,13,10,0.784)] flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <div className="flex gap-4">
                    <button
                      className="w-12 h-12 bg-[rgba(49,98,99,0.16)] border border-[rgba(9,106,109,0.751)] rounded-full flex items-center justify-center text-accent-contrast cursor-pointer transition-all duration-300 hover:bg-accent-soft hover:text-accent-contrast hover:scale-110"
                      onClick={() => window.open('https://github.com/flashcode635/Tic-tac-toe', '_blank')}
                    >
                      <Github />
                    </button>
                    <button
                      className="w-12 h-12 bg-[rgba(49,98,99,0.16)] border border-[rgba(9,106,109,0.751)] rounded-full flex items-center justify-center text-accent-contrast cursor-pointer transition-all duration-300 hover:bg-accent-soft hover:text-accent-contrast hover:scale-110"
                      onClick={() => window.open('https://code-optimisation-competition.vercel.app/', '_blank')}
                    >
                      <ExternalLink />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-[1.625rem] font-semibold text-text mb-4 tracking-[-0.01em] leading-[1.3]">Tic-Tac-Toe Game</h3>
                <p className="text-muted leading-[1.6] mb-6">
                  Built a zero-build web app using Alpine.js and Tailwind CSS. Refactored legacy code into declarative state, cutting the codebase by 40% and boosting rendering performance.
                </p>
                <div className="flex gap-2 mb-8 flex-wrap">
                  {['Alpine.js', 'Tailwind CSS', 'JavaScript', 'CDN Link'].map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-full text-xs font-medium bg-[rgba(49,98,99,0.12)] text-accent border border-[rgba(49,98,99,0.25)]">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <button
                    className="group relative overflow-hidden flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold cursor-pointer transition-all duration-300 bg-gradient-to-br from-accent to-accent-soft text-accent-contrast translate-y-0 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(49,98,99,0.25)] btn-hover"
                    onClick={() => window.open('https://tic-tac-toe-tau-six-86.vercel.app/', '_blank')}
                  >
                    Live Demo
                  </button>
                  <button
                    className="group relative overflow-hidden flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold cursor-pointer transition-all duration-300 bg-transparent text-accent border-2 border-accent hover:bg-[rgba(49,98,99,0.12)] hover:text-accent hover:-translate-y-0.5 btn-hover"
                    onClick={() => window.open('https://github.com/flashcode635/Tic-tac-toe', '_blank')}
                  >
                    Source Code
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-surface border border-border rounded-2xl overflow-hidden transition-all duration-300 relative hover:-translate-y-2.5 hover:shadow-[0_18px_40px_rgba(20,20,20,0.501)] group">
              <div className="h-[250px] relative overflow-hidden">
                <div className="w-full h-full flex flex-col items-center justify-center relative" style={{ background: 'linear-gradient(135deg, #013425 0%, #a8c1b3 100%)' }}>
                  <div className="flex items-center gap-4 text-white mb-8">
                    <Briefcase className="w-12 h-12" />
                    <div>
                      <h4 className="text-2xl font-semibold mb-1 tracking-[-0.01em] leading-[1.3]">Hack-Sec</h4>
                      <p className="text-sm opacity-80">Security Solutions</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-8 h-2 bg-[rgba(255,255,255,0.3)] rounded animate-wave"></div>
                    <div className="w-8 h-2 bg-[rgba(255,255,255,0.3)] rounded animate-wave" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-8 h-2 bg-[rgba(255,255,255,0.3)] rounded animate-wave" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,13,10,0.784)] flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <div className="flex gap-4">
                    <button
                      className="w-12 h-12 bg-[rgba(49,98,99,0.16)] border border-[rgba(9,106,109,0.751)] rounded-full flex items-center justify-center text-accent-contrast cursor-pointer transition-all duration-300 hover:bg-accent-soft hover:text-accent-contrast hover:scale-110"
                      onClick={() => window.open('https://github.com/flashcode635/hacSec-website', '_blank')}
                    >
                      <Github />
                    </button>
                    <button
                      className="w-12 h-12 bg-[rgba(49,98,99,0.16)] border border-[rgba(9,106,109,0.751)] rounded-full flex items-center justify-center text-accent-contrast cursor-pointer transition-all duration-300 hover:bg-accent-soft hover:text-accent-contrast hover:scale-110"
                      onClick={() => window.open('https://democonfig.netlify.app/', '_blank')}
                    >
                      <ExternalLink />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-[1.625rem] font-semibold text-text mb-4 tracking-[-0.01em] leading-[1.3]">Hack-Sec Company Frontend</h3>
                <p className="text-muted leading-[1.6] mb-6">
                  Modern, responsive website for cybersecurity company featuring partnership programs,
                  service showcases, contact forms, and professional landing pages.
                </p>
                <div className="flex gap-2 mb-8 flex-wrap">
                  {['React.js', 'Tailwind CSS', 'Responsive'].map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-full text-xs font-medium bg-[rgba(49,98,99,0.12)] text-accent border border-[rgba(49,98,99,0.25)]">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <button
                    className="group relative overflow-hidden flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold cursor-pointer transition-all duration-300 bg-gradient-to-br from-accent to-accent-soft text-accent-contrast translate-y-0 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(49,98,99,0.25)] btn-hover"
                    onClick={() => window.open('https://democonfig.netlify.app/', '_blank')}
                  >
                    Live Demo
                  </button>
                  <button
                    className="group relative overflow-hidden flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold cursor-pointer transition-all duration-300 bg-transparent text-accent border-2 border-accent hover:bg-[rgba(49,98,99,0.12)] hover:text-accent hover:-translate-y-0.5 btn-hover"
                    onClick={() => window.open('https://github.com/flashcode635/hacSec-website', '_blank')}
                  >
                    Source Codes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-8" style={{ background: 'rgba(232, 228, 218, 0.35)' }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-14 pt-2">
            <h2 className="text-[2.75rem] font-bold mb-4 text-text tracking-[-0.02em] leading-[1.2] relative inline-block bg-accent bg-clip-text text-transparent after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-1 after:bg-gradient-to-r after:from-accent after:to-transparent after:rounded-sm">
              Let's Connect
            </h2>
            <p className="text-lg text-muted max-w-[650px] mt-6 mx-auto leading-[1.7] font-normal">
              Available for Full-stack roles; always excited to work on new challenges. Whether you have a specific project in mind or just want to explore possibilities, let's start the conversation.
            </p>
          </div>
          <ContactSection />

          <div className="text-center mb-14 pt-12">
            <h2 className="text-[2.75rem] font-bold mb-4 text-text tracking-[-0.02em] leading-[1.2] relative inline-block bg-accent bg-clip-text text-transparent after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-1 after:bg-gradient-to-r after:from-accent after:to-transparent after:rounded-sm">
              Other Contacts
            </h2>
          </div>
          <div className="flex justify-center gap-4">
            <div className="flex flex-col justify-center text-center p-0.5 gap-1">
              <a href="https://github.com/flashcode635" className="w-12 h-12 mx-[4%] mb-[4%] bg-surface border border-border rounded-full flex items-center justify-center text-accent no-underline transition-all duration-300 p-3 hover:bg-[rgba(49,98,99,0.12)] hover:text-accent hover:-translate-y-1 hover:scale-110 hover:border-accent">
                <Github className="w-full h-full" />
              </a>
              <p>Github</p>
            </div>

            <div className="flex flex-col justify-center text-center p-0.5 gap-1">
              <a href="https://mail.google.com/mail/u/0/?fs=1&to=ramit.aggarwal2000@gmail.com&su=Hello&body=Hi+there!&tf=cm" className="w-12 h-12 mx-[4%] mb-[4%] bg-surface border border-border rounded-full flex items-center justify-center text-accent no-underline transition-all duration-300 p-3 hover:bg-[rgba(49,98,99,0.12)] hover:text-accent hover:-translate-y-1 hover:scale-110 hover:border-accent">
                <Mail className="w-full h-full" />
              </a>
              <p>Mail</p>
            </div>

            <div className="flex flex-col justify-center text-center p-0.5 gap-1">
              <a href="https://www.linkedin.com/in/ramit-aggarwal-66a853280/" className="w-12 h-12 mx-[4%] mb-[4%] bg-surface border border-border rounded-full flex items-center justify-center text-accent no-underline transition-all duration-300 p-3 hover:bg-[rgba(49,98,99,0.12)] hover:text-accent hover:-translate-y-1 hover:scale-110 hover:border-accent">
                <Linkedin className="w-full h-full" />
              </a>
              <p>Linkedin</p>
            </div>

            <div className="flex flex-col justify-center text-center p-0.5 gap-1">
              <a href="https://x.com/aggramit476282" className="w-12 h-12 mx-[4%] mb-[4%] bg-surface border border-border rounded-full flex items-center justify-center text-accent no-underline transition-all duration-300 p-3 hover:bg-[rgba(49,98,99,0.12)] hover:text-accent hover:-translate-y-1 hover:scale-110 hover:border-accent">
                <svg viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-contain">
                  <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="currentColor" />
                </svg>
              </a>
              <p className="w-full">X /Twitter</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 border-t border-border" style={{ background: 'rgba(232, 228, 218, 0.7)' }}>
        <div className="max-w-[1200px] mx-auto flex justify-between items-center text-muted">
          <p>© 2026 Ramit Aggarwal. All rights reserved.</p>
          <div className="flex items-center">
            <Star className="w-6 h-6 text-accent animate-twinkle" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
