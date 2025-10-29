
import React from 'react';

const Contact: React.FC = () => {
    return (
        <section id="contact-info" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 container mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                 <div className="w-full md:w-1/2">
                    <p className="text-sm text-[#D7F443] tracking-widest">// NEED A PROJECT?</p>
                    <h2 className="text-4xl md:text-6xl font-bold my-4">Let's Work Together. <br /> Fixed A Meeting</h2>
                    <div className="space-y-6 mt-8">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-[#D7F443] flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            </div>
                            <div>
                                <p className="text-gray-400">Email</p>
                                <p className="text-xl font-semibold">Davidmatias333@Gmail.Com</p>
                            </div>
                        </div>
                         <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-[#D7F443] flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            </div>
                            <div>
                                <p className="text-gray-400">Location</p>
                                <p className="text-xl font-semibold">Victoria Street London, England</p>
                            </div>
                        </div>
                    </div>
                </div>
                 <div className="w-full md:w-1/2 flex justify-center">
                    <img src="https://matias-react-js.netlify.app/img/others/contact-1.png" alt="Contact Illustration" className="max-w-md w-full" />
                </div>
            </div>
        </section>
    );
};

export default Contact;
