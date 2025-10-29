
import React from 'react';
import { awards } from '../constants';

const Awards: React.FC = () => {
    return (
        <section id="awards" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 container mx-auto">
            <div className="flex justify-between items-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold">Our Awards</h2>
                <a href="#work" className="text-gray-400 hover:text-[#D7F443] transition-colors">View My Work</a>
            </div>
            <div className="space-y-6">
                {awards.map((award, index) => (
                    <div key={index} className="grid grid-cols-2 md:grid-cols-4 items-center gap-4 py-6 border-b border-gray-800">
                        <h3 className="text-xl md:text-2xl font-semibold col-span-2 md:col-span-1">{award.title}</h3>
                        <p className="text-gray-400 text-left md:text-center">{award.category}</p>
                        <p className="text-gray-400 text-left md:text-center hidden md:block">{/* Placeholder */}</p>
                        <p className="text-xl md:text-2xl text-right">{award.year}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Awards;
