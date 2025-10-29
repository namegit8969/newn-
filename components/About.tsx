
import React from 'react';

const About: React.FC = () => {
    return (
        <section id="about" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 container mx-auto">
            <div className="text-center mb-16">
                 <span className="text-[#D7F443] text-4xl">*</span>
                 <p className="max-w-4xl mx-auto text-2xl md:text-3xl leading-relaxed text-gray-300 mt-4">
                    I'm David Matias, I'm a Brand & Webflow Designer, Currently residing in the lush Victoria Street London, Matias operates globally and is ready to take on any design challenge.
                 </p>
                 <div className="flex justify-center items-center gap-2 sm:gap-4 mt-8">
                     <button className="bg-[#D7F443] text-black font-semibold py-2 px-6 rounded-md text-sm">ABOUT</button>
                     <button className="border border-gray-600 text-gray-400 font-semibold py-2 px-6 rounded-md hover:bg-gray-800 hover:text-white transition-colors text-sm">EXPERIENCE</button>
                     <button className="border border-gray-600 text-gray-400 font-semibold py-2 px-6 rounded-md hover:bg-gray-800 hover:text-white transition-colors text-sm">EDUCATION</button>
                     <button className="border border-gray-600 text-gray-400 font-semibold py-2 px-6 rounded-md hover:bg-gray-800 hover:text-white transition-colors text-sm">SKILLS</button>
                 </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                <div className="w-full md:w-1/2 flex justify-center">
                    <img src="https://matias-react-js.netlify.app/img/others/about-1.png" alt="Personal Info Illustration" className="max-w-sm w-full" />
                </div>
                <div className="w-full md:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Personal Info</h2>
                    <p className="text-gray-400 mb-8">
                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit consectetur, aliquam quaerats voluptatem. Ut enim ad minima veniam, exercitationem laboriosam, nisi ut aliquid ex ea autem velit esse quam nihil
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div>
                            <p className="text-gray-500 mb-1 text-sm">Email</p>
                            <p className="font-medium">Matias999@Gmail.Com</p>
                        </div>
                        <div>
                             <p className="text-gray-500 mb-1 text-sm">Phone</p>
                            <p className="font-medium">+ (2) 871 382 023</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
