import React from 'react';
import { Code, Award, Calendar, ChevronDown, ExternalLink } from 'lucide-react';

const DownloadPDF = ({ url, name }) => (
    <a href={url} download={name} rel="noreferrer">
        <span className="font-semibold text-sm">Resume </span>
    </a>
);

const HeroSection = ({ isVisible, onScrollTo }) => {
    return (
        <section
            id="hero"
            className="min-h-screen flex flex-col justify-center items-center relative px-[2rem] pt-[4.5rem] pb-4 overflow-hidden"
            style={{
                background:
                    'linear-gradient(180deg, rgba(232, 228, 218, 0.7), rgba(240, 238, 233, 0.95))',
            }}
        >
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
                                style={{
                                    top: pos.top,
                                    left: pos.left,
                                    animationDelay: pos.delay,
                                    backgroundColor: pos.bgColor,
                                }}
                            />
                        );
                    })}
                </div>
            </div>

            <div
                className={`max-w-[1200px] w-screen grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 place-items-center transition-all duration-1000 text-center md:text-left ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'
                    }`}
            >
                <div className="z-[2] md:px-[30px] px-[22px] py-[10px] pr-2  flex flex-col justify-center ">
                    <div className="mb-[0.6rem]">
                        <span className="text-xl text-accent font-medium opacity-0 animate-[slideInLeft_0.8s_ease_0.2s_forwards]">
                            Hello, I'm
                        </span>
                    </div>
                    <h1 className="md:flex grid text-[3rem] md:text-[4.5rem]  md:h-full h-[100px] font-bold mb-6 leading-[1.1] tracking-[-0.03em] text-text">
                        <p className="pr-5 p-[8px] bg-gradient-to-br from-text to-accent bg-clip-text text-transparent h-max opacity-0 translate-y-[50px] animate-[slideInUp_0.8s_ease_forwards]">
                            Ramit
                        </p>
                        <p className="bg-gradient-to-br from-text to-accent bg-clip-text text-transparent h-fit p-2  opacity-0 translate-y-[50px] animate-[slideInUp_0.8s_ease_0.3s_forwards]">
                            Aggarwal
                        </p>
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
                        I'm a web developer and cybersecurity enthusiast building fast, maintainable,
                        and responsive applications with modern tech like Next.js, Prisma and tailwind
                        CSS. Proven ability to enhance performance,clean architecture, performant UI
                        and ensure maintainability through clean, efficient code.
                    </p>

                    <div className="flex  gap-4 items-center justify-center opacity-0 animate-[slideInUp_0.8s_ease_1.2s_forwards]">
                        <button
                            className="group relative overflow-hidden flex items-center gap-2 px-8 py-4 border-none rounded-xl text-base font-semibold cursor-pointer transition-all duration-300 bg-gradient-to-br from-accent to-accent-soft text-accent-contrast translate-y-0 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(49,98,99,0.25)] btn-hover"
                            onClick={() => onScrollTo('projects')}
                        >
                            <span> Projects</span>
                            <ExternalLink className="w-5 h-5" />
                        </button>
                        <button className="group relative overflow-hidden flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold cursor-pointer transition-all duration-300 bg-transparent text-accent border-2 border-accent hover:bg-[rgba(49,98,99,0.12)] hover:text-accent hover:-translate-y-0.5 btn-hover">
                            <svg
                                className="w-5 h-5 transition-transform group-hover:translate-y-1"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4m2-5l5 5 5-5m-5 5V3" />
                            </svg>
                            <DownloadPDF
                                url={
                                    'https://drive.google.com/file/d/1eX0-VYKKzwLiQ_X89OrNYxpiqXs5GIB0/view?usp=sharing'
                                }
                                name={'Ramit_Aggarwal_resume.pdf'}
                            />
                        </button>
                    </div>
                </div>

                <div className="flex justify-center items-center relative">
                    <div
                        className="bg-surface backdrop-blur-[30px] border border-border rounded-[2rem] p-8 relative translate-y-5 opacity-0 animate-[slideInUp_1s_ease_0.5s_forwards]"
                        style={{ backdropFilter: 'blur(30px)' }}
                    >
                        <div className="absolute -top-0.5 -left-0.5 -right-0.5 -bottom-0.5 bg-gradient-to-br from-[rgba(49,98,99,0.4)] to-[rgba(49,98,99,0.15)] rounded-[2rem] -z-10 blur-[20px] animate-glow opacity-60"></div>
                        <div className="text-center">
                            <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent-soft rounded-full flex items-center justify-center mx-auto mb-6 animate-rotate">
                                <Code className="w-10 h-10 text-accent-contrast" />
                            </div>
                            <div className="mb-6">
                                <h3 className="text-2xl font-semibold mb-2 text-text tracking-[-0.01em] leading-[1.3]">
                                    Web Developer
                                </h3>
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

            <div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer animate-bounce"
                onClick={() => onScrollTo('skills')}
            >
                <ChevronDown className="w-8 h-8 text-accent" />
            </div>
        </section>
    );
};

export default HeroSection;


