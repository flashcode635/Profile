import React from 'react';
import { Star } from 'lucide-react';

const Footer = () => {
    return (
        <footer
            className="py-4 border-t border-border"
            style={{ background: 'rgba(232, 228, 218, 0.7)' }}
        >
            <div className="max-w-[1200px] mx-auto flex justify-between items-center text-muted">
                <p>© 2026 Ramit Aggarwal. All rights reserved.</p>
                <div className="flex items-center">
                    <Star className="w-6 h-6 text-accent animate-twinkle" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;


