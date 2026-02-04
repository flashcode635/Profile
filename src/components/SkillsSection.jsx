import React from 'react';
import { Code, Server, Network } from 'lucide-react';

const SkillsSection = () => {
    return (
        <section
            id="skills"
            className="py-24 px-8"
            style={{ background: 'rgba(232, 228, 218, 0.35)' }}
        >
            <div className="max-w-[1200px] mx-auto">
                <div className="text-center mb-14 pt-2">
                    <h2 className="text-[2.75rem] font-bold mb-4 text-text tracking-[-0.02em] leading-[1.2] relative inline-block bg-accent bg-clip-text text-transparent after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-1 after:bg-gradient-to-r after:from-accent after:to-transparent after:rounded-sm">
                        Technical Expertise
                    </h2>
                    <p className="text-lg text-muted max-w-[650px] mt-6 mx-auto leading-[1.7] font-normal">
                        Specialized in modern web technologies with hands-on experience in full-stack
                        development
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-8 mb-16">
                    <div className="bg-surface border border-border rounded-2xl p-8 transition-all duration-300 relative overflow-hidden skill-card-hover hover:-translate-y-2.5 hover:shadow-[0_18px_40px_rgba(20,20,20,0.1)]">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-soft rounded-xl flex items-center justify-center text-accent-contrast">
                                <Code />
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold text-text tracking-[-0.01em] mb-1 leading-[1.3]">
                                    React.js
                                </h3>
                                <span className="text-sm text-accent font-medium">Advanced</span>
                            </div>
                        </div>
                        <p className="text-muted leading-[1.6] mb-6">
                            Building dynamic, interactive user interfaces with modern React hooks, and
                            state management. Experienced in component designing and optimization.
                        </p>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex-1 h-2 bg-[rgba(20,20,20,0.08)] rounded overflow-hidden">
                                <div className="h-full rounded w-[85%] bg-gradient-to-r from-accent to-accent-soft animate-[fillProgress_2s_ease-in-out]"></div>
                            </div>
                            <span className="font-semibold text-accent">85%</span>
                        </div>
                        <div className="flex gap-2 flex-wrap">
                            <span className="bg-[rgba(49,98,99,0.12)] text-accent px-3 py-1 rounded-full text-xs font-medium border border-[rgba(49,98,99,0.25)]">
                                JSX
                            </span>
                            <span className="bg-[rgba(49,98,99,0.12)] text-accent px-3 py-1 rounded-full text-xs font-medium border border-[rgba(49,98,99,0.25)]">
                                Hooks
                            </span>
                            <span className="bg-[rgba(49,98,99,0.12)] text-accent px-3 py-1 rounded-full text-xs font-medium border border-[rgba(49,98,99,0.25)]">
                                Context API
                            </span>
                        </div>
                    </div>

                    <div className="bg-surface border border-border rounded-2xl p-8 transition-all duration-300 relative overflow-hidden skill-card-hover hover:-translate-y-2.5 hover:shadow-[0_18px_40px_rgba(20,20,20,0.1)]">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-soft rounded-xl flex items-center justify-center text-accent-contrast">
                                <Server />
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold text-text tracking-[-0.01em] mb-1 leading-[1.3]">
                                    Node.js
                                </h3>
                                <span className="text-sm text-accent font-medium">Intermediate</span>
                            </div>
                        </div>
                        <p className="text-muted leading-[1.6] mb-6">
                            Server-side development with Express.js, building RESTful APIs, authentication
                            systems, and database integration with modern practices.
                        </p>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex-1 h-2 bg-[rgba(20,20,20,0.08)] rounded overflow-hidden">
                                <div className="h-full rounded w-[75%] bg-gradient-to-r from-accent to-accent-soft animate-[fillProgress_2s_ease-in-out]"></div>
                            </div>
                            <span className="font-semibold text-accent">75%</span>
                        </div>
                        <div className="flex gap-2 flex-wrap">
                            <span className="bg-[rgba(49,98,99,0.12)] text-accent px-3 py-1 rounded-full text-xs font-medium border border-[rgba(49,98,99,0.25)]">
                                Express.js
                            </span>
                            <span className="bg-[rgba(49,98,99,0.12)] text-accent px-3 py-1 rounded-full text-xs font-medium border border-[rgba(49,98,99,0.25)]">
                                REST API
                            </span>
                            <span className="bg-[rgba(49,98,99,0.12)] text-accent px-3 py-1 rounded-full text-xs font-medium border border-[rgba(49,98,99,0.25)]">
                                MongoDB
                            </span>
                        </div>
                    </div>

                    <div className="bg-surface border border-border rounded-2xl p-8 transition-all duration-300 relative overflow-hidden skill-card-hover hover:-translate-y-2.5 hover:shadow-[0_18px_40px_rgba(20,20,20,0.1)]">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-soft rounded-xl flex items-center justify-center text-accent-contrast">
                                <Network />
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold text-text tracking-[-0.01em] mb-1 leading-[1.3]">
                                    Computer Networks
                                </h3>
                                <span className="text-sm text-accent font-medium">Intermediate</span>
                            </div>
                        </div>
                        <p className="text-muted leading-[1.6] mb-6">
                            Understanding of network protocols, TCP/IP stack, HTTP/HTTPS, DNS resolution,
                            and network security fundamentals.
                        </p>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex-1 h-2 bg-[rgba(20,20,20,0.08)] rounded overflow-hidden">
                                <div className="h-full rounded w-[70%] bg-gradient-to-r from-accent to-accent-soft animate-[fillProgress_2s_ease-in-out]"></div>
                            </div>
                            <span className="font-semibold text-accent">70%</span>
                        </div>
                        <div className="flex gap-2 flex-wrap">
                            <span className="bg-[rgba(49,98,99,0.12)] text-accent px-3 py-1 rounded-full text-xs font-medium border border-[rgba(49,98,99,0.25)]">
                                TCP/IP
                            </span>
                            <span className="bg-[rgba(49,98,99,0.12)] text-accent px-3 py-1 rounded-full text-xs font-medium border border-[rgba(49,98,99,0.25)]">
                                HTTP
                            </span>
                            <span className="bg-[rgba(49,98,99,0.12)] text-accent px-3 py-1 rounded-full text-xs font-medium border border-[rgba(49,98,99,0.25)]">
                                Security
                            </span>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <h3 className="text-[1.5rem] md:text-[1.75rem] font-semibold text-accent-soft mb-8 tracking-[-0.01em] relative inline-block pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-accent after:rounded-sm">
                        Additional Technologies
                    </h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            'TypeScript',
                            'React.js',
                            'Tailwind',
                            'Next.js',
                            'Express.js',
                            'Zod',
                            'Prisma',
                            'Alpine.js',
                            'WebSockets',
                            'Git',
                            'MongoDB',
                            'PostGreSQL',
                            'CDN',
                            'Linux',
                            'AI SDK',
                        ].map((tech, index) => (
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
    );
};

export default SkillsSection;


