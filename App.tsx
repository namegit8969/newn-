
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Awards from './components/Awards';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { servicesMarquee, statsMarquee } from './constants';

const App: React.FC = () => {
  return (
    <div className="bg-[#121212] text-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Marquee items={servicesMarquee} />
        <About />
        <Marquee items={statsMarquee} />
        <Awards />
        <Portfolio />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
