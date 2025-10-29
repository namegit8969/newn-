
import React from 'react';
import { FacebookIcon, TwitterIcon, LinkedinIcon } from '../constants';

const Hero: React.FC = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20">
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop" 
                    alt="Creative Visual Designer"
                    className="w-full h-full object-cover object-center opacity-30" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-[#121212]"></div>
            </div>
             <div className="absolute inset-0 z-0 bg-no-repeat bg-center opacity-20" style={{backgroundImage: "url('https://matias-react-js.netlify.app/img/bg/hero-bg-2.png')"}}></div>
            
            {/* Vertical text on left */}
            <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 flex flex-col items-center space-y-24 text-sm font-light" style={{ writingMode: 'vertical-rl' }}>
                <span className="transform rotate-180">SCROLL DOWN</span>
                <span className="transform rotate-180">(+02)-574-328-301</span>
            </div>

            {/* Vertical text on right */}
             <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 flex flex-col items-center space-y-4 text-sm font-light" style={{ writingMode: 'vertical-rl' }}>
                 <span className="transform rotate-180 tracking-widest">FOLLOW ME</span>
                 <div className="flex flex-col gap-4 pt-4 transform rotate-180">
                     <a href="#" className="hover:text-[#D7F443]"><FacebookIcon /></a>
                     <a href="#" className="hover:text-[#D7F443]"><TwitterIcon /></a>
                     <a href="#" className="hover:text-[#D7F443]"><LinkedinIcon /></a>
                 </div>
            </div>

            <div className="relative z-10 text-center lg:text-left lg:w-full lg:max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
                <div className="lg:w-2/3">
                    <div className="mb-8">
                        <p className="text-lg">Currently Available For Freelance</p>
                        <p className="flex items-center justify-center lg:justify-start gap-2 text-lg">Worldwide <span className="text-[#D7F443] transform -rotate-45 text-2xl">↗</span></p>
                    </div>
                    <h1 className="text-6xl sm:text-8xl lg:text-9xl font-extrabold leading-none tracking-tighter">
                        Creative Visual
                        <br />
                        <span className="text-[#D7F443] relative inline-block">
                            Designer
                            <span className="absolute -bottom-2 -right-4 text-white text-lg">®</span>
                        </span>
                    </h1>
                </div>

                <div className="mt-12 lg:mt-0 lg:w-1/3 flex items-center justify-center lg:justify-end">
                    <a href="#" className="group flex items-center gap-4 text-lg">
                        <div className="relative w-24 h-24 flex items-center justify-center">
                            <div className="absolute inset-0 border-2 border-gray-600 rounded-full group-hover:border-[#D7F443] transition-colors"></div>
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M6.3 3.75a.75.75 0 011.4 0v12.5a.75.75 0 01-1.4 0V3.75zM12.3 3.75a.75.75 0 011.4 0v12.5a.75.75 0 01-1.4 0V3.75z"></path>
                                </svg>
                            </div>
                        </div>
                        <span>Work<br/>Process</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
