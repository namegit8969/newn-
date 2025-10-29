
import React from 'react';
import { serviceItems } from '../constants';

const ServiceItem: React.FC<{ item: typeof serviceItems[0] }> = ({ item }) => (
    <div className="group grid grid-cols-1 md:grid-cols-12 gap-4 items-center py-8 border-b border-gray-800">
        <span className="text-gray-500 font-semibold md:col-span-1">{item.number}</span>
        <div className="md:col-span-5">
            <h3 className="text-3xl md:text-4xl font-bold group-hover:text-[#D7F443] transition-colors">{item.title}</h3>
        </div>
        <p className="text-gray-400 md:col-span-5">{item.description}</p>
        <div className="md:col-span-1 flex justify-start md:justify-end">
             <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 group-hover:bg-[#D7F443] group-hover:text-black transition-all">
                <span className="transform -rotate-45 text-2xl">↗</span>
            </div>
        </div>
    </div>
);

const Services: React.FC = () => {
    return (
        <section id="services" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 container mx-auto">
            <div className="text-center mb-16">
                 <p className="text-sm text-[#D7F443] tracking-widest">// SERVICES THAT'S I PROVIDE</p>
                <h2 className="text-4xl md:text-6xl font-bold mt-4">My Special Service For Your <br /> Business Development</h2>
            </div>
            <div>
                {serviceItems.map((item, index) => (
                    <ServiceItem key={index} item={item} />
                ))}
            </div>
        </section>
    );
};

export default Services;
