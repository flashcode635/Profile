import React from 'react';
import { Github, ExternalLink, Briefcase } from 'lucide-react';

const ProjectsSection = () => {
    return (
        <section
            id="projects"
            className="py-24 px-8"
            style={{ background: 'rgba(232, 228, 218, 0.35)' }}
        >
            <div className="max-w-[1200px] mx-auto">
                <div className="text-center mb-14 pt-2">
                    <h2 className="text-[2.75rem] font-bold mb-4 text-text tracking-[-0.02em] leading-[1.2] relative inline-block bg-accent bg-clip-text text-transparent after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-1 after:bg-gradient-to-r after:from-accent after:to-transparent after:rounded-sm">
                        Featured Projects
                    </h2>
                    <p className="text-lg text-muted max-w-[650px] mt-6 mx-auto leading-[1.7] font-normal">
                        Showcasing practical applications of web development skills and creative
                        problem-solving
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-12">
                    <div className="bg-surface border border-border rounded-2xl overflow-hidden transition-all duration-300 relative hover:-translate-y-2.5 hover:shadow-[0_18px_40px_rgba(20,20,20,0.501)] group">
                        <div className="h-[250px] relative overflow-hidden">
                            <div
                                className="w-full h-full flex items-center justify-center relative"
                                style={{
                                    background: 'linear-gradient(135deg, #023a3139 20%, #01321db7 80%)',
                                }}
                            >
                                <div className="grid grid-cols-3 gap-2 p-8">
                                    {[...Array(9)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl font-bold text-white animate-pulse"
                                            style={{ background: 'rgba(255, 255, 255, 0.2)' }}
                                        >
                                            {i === 0 || i === 4 || i === 8
                                                ? 'X'
                                                : i === 2 || i === 6
                                                    ? 'O'
                                                    : ''}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,13,10,0.784)] flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                                <div className="flex gap-4">
                                    <button
                                        className="w-12 h-12 bg-[rgba(49,98,99,0.16)] border border-[rgba(9,106,109,0.751)] rounded-full flex items-center justify-center text-accent-contrast cursor-pointer transition-all duration-300 hover:bg-accent-soft hover:text-accent-contrast hover:scale-110"
                                        onClick={() =>
                                            window.open('https://github.com/flashcode635/Tic-tac-toe', '_blank')
                                        }
                                    >
                                        <Github />
                                    </button>
                                    <button
                                        className="w-12 h-12 bg-[rgba(49,98,99,0.16)] border border-[rgba(9,106,109,0.751)] rounded-full flex items-center justify-center text-accent-contrast cursor-pointer transition-all duration-300 hover:bg-accent-soft hover:text-accent-contrast hover:scale-110"
                                        onClick={() =>
                                            window.open(
                                                'https://code-optimisation-competition.vercel.app/',
                                                '_blank',
                                            )
                                        }
                                    >
                                        <ExternalLink />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="p-8">
                            <h3 className="text-[1.625rem] font-semibold text-text mb-4 tracking-[-0.01em] leading-[1.3]">
                                Optimized Game
                            </h3>
                            <p className="text-muted leading-[1.6] mb-6">
                                A zero-dependency Alpine.js architecture, reducing file size to 100 lines.
                                Refactored legacy code into declarative state, slashing the codebase by 40%
                                while optimizing main-thread performance.
                            </p>
                            <div className="flex gap-2 mb-8 flex-wrap">
                                {['Alpine.js', 'Tailwind CSS', 'JavaScript', 'CDN Link'].map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 rounded-full text-xs font-medium bg-[rgba(49,98,99,0.12)] text-accent border border-[rgba(49,98,99,0.25)]"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-4">
                                <button
                                    className="group relative overflow-hidden flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold cursor-pointer transition-all duration-300 bg-gradient-to-br from-accent to-accent-soft text-accent-contrast translate-y-0 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(49,98,99,0.25)] btn-hover"
                                    onClick={() =>
                                        window.open('https://code-optimisation-competition.vercel.app/', '_blank')
                                    }
                                >
                                    Live Demo
                                </button>
                                <button
                                    className="group relative overflow-hidden flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold cursor-pointer transition-all duration-300 bg-transparent text-accent border-2 border-accent hover:bg-[rgba(49,98,99,0.12)] hover:text-accent hover:-translate-y-0.5 btn-hover"
                                    onClick={() =>
                                        window.open('https://github.com/flashcode635/Tic-tac-toe', '_blank')
                                    }
                                >
                                    Source Code
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-surface border border-border rounded-2xl overflow-hidden transition-all duration-300 relative hover:-translate-y-2.5 hover:shadow-[0_18px_40px_rgba(20,20,20,0.501)] group">
                        <div className="h-[250px] relative overflow-hidden">
                            <div
                                className="w-full h-full flex flex-col items-center justify-center relative"
                                style={{
                                    background: 'linear-gradient(135deg, #013425 0%, #a8c1b3 100%)',
                                }}
                            >
                                <div className="flex items-center gap-4 text-white mb-8">
                                    <Briefcase className="w-12 h-12" />
                                    <div>
                                        <h4 className="text-2xl font-semibold mb-1 tracking-[-0.01em] leading-[1.3]">
                                            Hack-Sec
                                        </h4>
                                        <p className="text-sm opacity-80">Security Solutions</p>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <div className="w-8 h-2 bg-[rgba(255,255,255,0.3)] rounded animate-wave"></div>
                                    <div
                                        className="w-8 h-2 bg-[rgba(255,255,255,0.3)] rounded animate-wave"
                                        style={{ animationDelay: '0.2s' }}
                                    ></div>
                                    <div
                                        className="w-8 h-2 bg-[rgba(255,255,255,0.3)] rounded animate-wave"
                                        style={{ animationDelay: '0.4s' }}
                                    ></div>
                                </div>
                            </div>
                            <div className="absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,13,10,0.784)] flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                                <div className="flex gap-4">
                                    <button
                                        className="w-12 h-12 bg-[rgba(49,98,99,0.16)] border border-[rgba(9,106,109,0.751)] rounded-full flex items-center justify-center text-accent-contrast cursor-pointer transition-all duration-300 hover:bg-accent-soft hover:text-accent-contrast hover:scale-110"
                                        onClick={() =>
                                            window.open('https://github.com/flashcode635/hacSec-website', '_blank')
                                        }
                                    >
                                        <Github />
                                    </button>
                                    <button
                                        className="w-12 h-12 bg-[rgba(49,98,99,0.16)] border border-[rgba(9,106,109,0.751)] rounded-full flex items-center justify-center text-accent-contrast cursor-pointer transition-all duration-300 hover:bg-accent-soft hover:text-accent-contrast hover:scale-110"
                                        onClick={() =>
                                            window.open('https://democonfig.netlify.app/', '_blank')
                                        }
                                    >
                                        <ExternalLink />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="p-8">
                            <h3 className="text-[1.625rem] font-semibold text-text mb-4 tracking-[-0.01em] leading-[1.3]">
                                Hack-Sec Company Frontend
                            </h3>
                            <p className="text-muted leading-[1.6] mb-6">
                                Modern, responsive website for cybersecurity company featuring partnership
                                programs, service showcases, contact forms, and professional landing pages.
                            </p>
                            <div className="flex gap-2 mb-8 flex-wrap">
                                {['React.js', 'Tailwind CSS', 'Responsive'].map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 rounded-full text-xs font-medium bg-[rgba(49,98,99,0.12)] text-accent border border-[rgba(49,98,99,0.25)]"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-4">
                                <button
                                    className="group relative overflow-hidden flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold cursor-pointer transition-all duration-300 bg-gradient-to-br from-accent to-accent-soft text-accent-contrast translate-y-0 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(49,98,99,0.25)] btn-hover"
                                    onClick={() =>
                                        window.open('https://democonfig.netlify.app/', '_blank')
                                    }
                                >
                                    Live Demo
                                </button>
                                <button
                                    className="group relative overflow-hidden flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold cursor-pointer transition-all duration-300 bg-transparent text-accent border-2 border-accent hover:bg-[rgba(49,98,99,0.12)] hover:text-accent hover:-translate-y-0.5 btn-hover"
                                    onClick={() =>
                                        window.open('https://github.com/flashcode635/hacSec-website', '_blank')
                                    }
                                >
                                    Source Codes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;


