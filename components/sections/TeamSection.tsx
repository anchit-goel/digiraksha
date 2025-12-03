import React from 'react';
import SectionWrapper from '../SectionWrapper';
import AnimatedWrapper from '../AnimatedWrapper';

const TeamSection: React.FC = () => {
  return (
    <SectionWrapper
      id="team"
      title="From Insight to Impact."
      subtitle="We are Team HorizonX. Participants in the Smart India Hackathon 2025."
    >
      <AnimatedWrapper>
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-400 mb-4">
            HorizonX
          </h3>
          <p className="text-2xl text-slate-300 italic">
            "Building Trust, Safety, and Empowerment through Technology."
          </p>
        </div>
      </AnimatedWrapper>
    </SectionWrapper>
  );
};

export default TeamSection;