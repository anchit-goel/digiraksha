import React from 'react';
import AnimatedWrapper from '../AnimatedWrapper';

const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="h-screen flex items-center justify-center bg-slate-900">
      <div className="container mx-auto px-6 text-center">
        <AnimatedWrapper>
            <h2 className="text-4xl md:text-6xl font-bold text-white max-w-4xl mx-auto leading-tight">
                Travel should feel limitless. Not leave you feeling vulnerable.
            </h2>
        </AnimatedWrapper>
      </div>
    </section>
  );
};

export default ProblemSection;