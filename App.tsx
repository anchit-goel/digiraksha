import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSection from './components/sections/ProblemSection';
import SolutionSection from './components/sections/SolutionSection';
import InnovationSection from './components/sections/InnovationSection';
import TechStackSection from './components/sections/TechStackSection';
import FeasibilitySection from './components/sections/FeasibilitySection';
import ImpactSection from './components/sections/ImpactSection';
import MonetizationSection from './components/sections/MonetizationSection';
import TimelineSection from './components/sections/TimelineSection';
import TeamSection from './components/sections/TeamSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 text-slate-300 font-sans leading-relaxed">
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <InnovationSection />
        <TechStackSection />
        <FeasibilitySection />
        <ImpactSection />
        <MonetizationSection />
        <TimelineSection />
        <TeamSection />
        <ContactSection />
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default App;