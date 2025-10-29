
import React from 'react';
import { ArrowRightIcon } from '../constants';

const socialLinks = [
    { name: 'Facebook', href: '#' },
    { name: 'Instagram', href: '#' },
    { name: 'Dribble', href: '#' },
    { name: 'Webflow', href: '#' },
];

const Footer: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer id="contact" className="bg-[#1a1a1a] pt-20 pb-8 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-b border-gray-800 pb-16">
                    <div>
                        <h2 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-6">GET IN TOUCH</h2>
                        <p className="text-gray-400 mb-2">Hello, I'm David Matias, Website & User Interface Designer based in London.</p>
                        <a href="mailto:Davidmatias333@Gmail.Com" className="text-2xl font-semibold hover:text-[#D7F443] transition-colors">Davidmatias333@Gmail.Com</a>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {socialLinks.map(link => (
                            <a key={link.name} href={link.href} className="group flex justify-between items-center p-6 border border-gray-700 rounded-lg hover:border-[#D7F443] transition-colors">
                                <span className="text-xl font-semibold">{link.name}</span>
                                <ArrowRightIcon />
                            </a>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-center pt-8 text-gray-500 text-sm">
                    <p>Copyright © 2025 <span className="text-[#D7F443]">Matias.</span> All rights reserved.</p>
                    <div className="flex gap-6 mt-4 sm:mt-0">
                        <a href="#" className="hover:text-white">Terms & Condition</a>
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                    </div>
                    <button onClick={scrollToTop} className="mt-4 sm:mt-0 w-10 h-10 bg-[#D7F443] text-black rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" /></svg>
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
