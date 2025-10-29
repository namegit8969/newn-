
import React from 'react';
import { processSteps } from '../constants';

const Process: React.FC = () => {
    return (
        <section id="process" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 container mx-auto">
            <div className="text-center mb-16">
                 <h2 className="text-4xl md:text-6xl font-bold mt-4">Steps</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {processSteps.map((step, index) => (
                    <div key={index} className="bg-[#1a1a1a] p-8 rounded-lg border border-gray-800">
                        <h3 className="text-3xl font-bold mb-4">{step.title}</h3>
                        <p className="text-gray-400 mb-6">{step.description}</p>
                        <ul className="space-y-3">
                            {step.points.map((point, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="text-[#D7F443] mt-1">*</span>
                                    <span className="text-gray-300">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Process;
