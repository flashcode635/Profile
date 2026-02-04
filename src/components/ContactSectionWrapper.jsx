import React from 'react';
import { Github, Mail, Linkedin } from 'lucide-react';
import ContactSection from './ContactSection';

const ContactSectionWrapper = () => {
    return (
        <section
            id="contact"
            className="py-16 px-8"
            style={{ background: 'rgba(232, 228, 218, 0.35)' }}
        >
            <div className="max-w-[1200px] mx-auto">
                <div className="text-center mb-14 pt-2">
                    <h2 className="text-[2.75rem] font-bold mb-4 text-text tracking-[-0.02em] leading-[1.2] relative inline-block bg-accent bg-clip-text text-transparent after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-1 after:bg-gradient-to-r after:from-accent after:to-transparent after:rounded-sm">
                        Let's Connect
                    </h2>
                    <p className="text-lg text-muted max-w-[650px] mt-6 mx-auto leading-[1.7] font-normal">
                        Available for Full-stack roles; always excited to work on new challenges.
                        Whether you have a specific project in mind or just want to explore
                        possibilities, let's start the conversation.
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
                        <a
                            href="https://github.com/flashcode635"
                            className="w-12 h-12 mx-[4%] mb-[4%] bg-surface border border-border rounded-full flex items-center justify-center text-accent no-underline transition-all duration-300 p-3 hover:bg-[rgba(49,98,99,0.12)] hover:text-accent hover:-translate-y-1 hover:scale-110 hover:border-accent"
                        >
                            <Github className="w-full h-full" />
                        </a>
                        <p>Github</p>
                    </div>

                    <div className="flex flex-col justify-center text-center p-0.5 gap-1">
                        <a
                            href="https://mail.google.com/mail/u/0/?fs=1&to=ramit.aggarwal2000@gmail.com&su=Hello&body=Hi+there!&tf=cm"
                            className="w-12 h-12 mx-[4%] mb-[4%] bg-surface border border-border rounded-full flex items-center justify-center text-accent no-underline transition-all duration-300 p-3 hover:bg-[rgba(49,98,99,0.12)] hover:text-accent hover:-translate-y-1 hover:scale-110 hover:border-accent"
                        >
                            <Mail className="w-full h-full" />
                        </a>
                        <p>Mail</p>
                    </div>

                    <div className="flex flex-col justify-center text-center p-0.5 gap-1">
                        <a
                            href="https://www.linkedin.com/in/ramit-aggarwal-66a853280/"
                            className="w-12 h-12 mx-[4%] mb-[4%] bg-surface border border-border rounded-full flex items-center justify-center text-accent no-underline transition-all duration-300 p-3 hover:bg-[rgba(49,98,99,0.12)] hover:text-accent hover:-translate-y-1 hover:scale-110 hover:border-accent"
                        >
                            <Linkedin className="w-full h-full" />
                        </a>
                        <p>Linkedin</p>
                    </div>

                    <div className="flex flex-col justify-center text-center p-0.5 gap-1">
                        <a
                            href="https://x.com/aggramit476282"
                            className="w-12 h-12 mx-[4%] mb-[4%] bg-surface border border-border rounded-full flex items-center justify-center text-accent no-underline transition-all duration-300 p-3 hover:bg-[rgba(49,98,99,0.12)] hover:text-accent hover:-translate-y-1 hover:scale-110 hover:border-accent"
                        >
                            <svg
                                viewBox="0 0 1200 1227"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-full h-full object-contain"
                            >
                                <path
                                    d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </a>
                        <p className="w-full">X /Twitter</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSectionWrapper;


