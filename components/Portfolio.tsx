
import React from 'react';
import { portfolioItems, ArrowRightIcon } from '../constants';

const PortfolioCard: React.FC<{ item: typeof portfolioItems[0] }> = ({ item }) => (
    <div className="group">
        <div className={`rounded-lg overflow-hidden mb-4 ${item.color}`}>
            <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
        <p className="text-sm text-gray-400 mb-1">{item.category}</p>
        <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 group-hover:bg-[#D7F443] group-hover:text-black transition-all">
                <ArrowRightIcon />
            </div>
        </div>
    </div>
);

const Portfolio: React.FC = () => {
    return (
        <section id="work" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 container mx-auto">
            <div className="text-center mb-16">
                <p className="text-sm text-[#D7F443] tracking-widest">// COMPLETE PROJECT</p>
                <h2 className="text-4xl md:text-6xl font-bold mt-4">Look At My Portfolio And Give Me <br /> Your Feedback</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {portfolioItems.map((item, index) => (
                    <PortfolioCard key={index} item={item} />
                ))}
            </div>
            <div className="text-center mt-20">
                <button className="group relative w-48 h-48 flex items-center justify-center text-lg font-semibold">
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="48" stroke="#D7F443" strokeWidth="1" fill="none" />
                    </svg>
                    <span className="z-10 flex flex-col items-center">
                        Click More Work
                        <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                </button>
            </div>
        </section>
    );
};

export default Portfolio;
