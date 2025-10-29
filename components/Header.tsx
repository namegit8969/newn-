
import React, { useState, useEffect } from 'react';
import { MatiasLogo } from '../constants';

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} className="text-white hover:text-[#D7F443] transition-colors duration-300 px-3 py-2 text-sm font-medium">{children}</a>
);

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = ["HOME", "ABOUT", "WORK", "SERVICES", "TESTIMONIAL", "BLOG", "CONTACT"];

    return (
        <>
            <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#1a1a1a] shadow-lg' : 'bg-transparent'}`}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex-shrink-0 flex items-center gap-2">
                           <MatiasLogo />
                           <span className="text-2xl font-bold">Matias</span>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {navLinks.map(link => <NavLink key={link} href={`#${link.toLowerCase()}`}>{link}</NavLink>)}
                            </div>
                        </div>
                        <div className="hidden md:flex items-center space-x-4">
                            <a href="#contact" className="bg-[#D7F443] text-black font-bold py-3 px-6 rounded-md hover:bg-white transition-all duration-300 flex items-center gap-2">
                                Let's Talk <span className="transform -rotate-45">→</span>
                            </a>
                        </div>
                        <div className="md:hidden flex items-center">
                            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#D7F443] focus:outline-none">
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    {isOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            
            {/* Mobile Menu Flyout */}
            <div className={`fixed top-0 right-0 h-full w-72 bg-[#1a1a1a] p-8 transform transition-transform duration-300 ease-in-out z-40 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                 <div className="flex justify-between items-center mt-20 mb-8">
                     <div className="flex-shrink-0 flex items-center gap-2">
                       <MatiasLogo />
                       <span className="text-2xl font-bold">Matias</span>
                    </div>
                    <button onClick={() => setIsOpen(false)} className="text-white hover:text-[#D7F443]">
                        <svg className="h-8 w-8" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                 </div>

                <p className="text-gray-400 mb-8">Neque porro quisquam est, qui dolorem ipsum quia dolor sit consectetur, aliquam quaerats voluptatem. Ut enim ad minima veniam, exercitationem laboriosam, nisi ut aliquid ex ea autem velit esse quam nihil</p>
                <div className="space-y-4 text-sm">
                    <p className="font-bold">ADDRESS</p>
                    <p className="text-gray-400">Victoria Street London, UK</p>
                    <p className="font-bold">EMAIL</p>
                    <p className="text-gray-400">Matias999@Gmail.Com</p>
                    <p className="font-bold">CALL NOW</p>
                    <p className="text-gray-400">+98 4758 2154 021</p>
                </div>

                <a href="#contact" className="mt-8 w-full bg-[#D7F443] text-black font-bold py-3 px-6 rounded-md hover:bg-white transition-all duration-300 flex items-center justify-center gap-2">
                    Let's Talk
                </a>
            </div>
        </>
    );
};

export default Header;
