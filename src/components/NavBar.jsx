import React from 'react';
import { User } from 'lucide-react';

const NavBar = ({ activeSection, onNavClick }) => {
    const sections = ['hero', 'skills', 'projects', 'contact'];

    return (
        <nav className="fixed top-0 left-0 right-0 z-[1000] bg-[rgba(240,238,233,0.9)] backdrop-blur-[20px] border-b border-border transition-all duration-300">
            <div className="max-w-[1200px] bg-transparent mx-auto px-[1.4rem] py-[0.7rem] flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <User className="w-8 h-8 text-accent" />
                    <span className="text-2xl font-bold bg-gradient-to-br from-accent to-[#1f3f40] bg-clip-text text-transparent">
                        Portfolio
                    </span>
                </div>
                <div className="hidden md:flex gap-8">
                    {sections.map((section) => (
                        <button
                            key={section}
                            onClick={() => onNavClick(section)}
                            className={`relative overflow-hidden bg-transparent border-none text-muted text-base font-medium px-4 py-2 rounded-lg transition-all duration-300 nav-link-hover ${activeSection === section
                                    ? 'text-accent bg-[rgba(49,98,99,0.12)]'
                                    : 'hover:text-accent hover:bg-[rgba(49,98,99,0.12)]'
                                }`}
                        >
                            {section === 'hero'
                                ? 'About'
                                : section.charAt(0).toUpperCase() + section.slice(1)}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;


