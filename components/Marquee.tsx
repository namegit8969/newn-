
import React from 'react';

interface MarqueeProps {
    items: string[];
}

const Marquee: React.FC<MarqueeProps> = ({ items }) => {
    const marqueeContent = items.map((item, index) => (
        <React.Fragment key={index}>
            <span className="font-bold text-2xl md:text-3xl lg:text-4xl text-black">{item}</span>
            <span className="text-black text-4xl mx-8">*</span>
        </React.Fragment>
    ));

    return (
        <div className="bg-[#D7F443] py-6 overflow-hidden whitespace-nowrap">
            <div className="animate-marquee flex items-center">
                <div className="flex items-center">{marqueeContent}</div>
                <div className="flex items-center">{marqueeContent}</div>
            </div>
             <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                    display: inline-flex;
                }
            `}</style>
        </div>
    );
};

export default Marquee;
