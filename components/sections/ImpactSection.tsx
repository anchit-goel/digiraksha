import React from 'react';
import SectionWrapper from '../SectionWrapper';
import AnimatedWrapper from '../AnimatedWrapper';
import { UsersIcon, ServerIcon, SparklesIcon } from '../icons';

const impacts = [
    {
        icon: <UsersIcon className="h-12 w-12 text-teal-400"/>,
        title: "For Tourists",
        description: "Absolute peace of mind. The freedom to explore without fear."
    },
    {
        icon: <ServerIcon className="h-12 w-12 text-teal-400"/>,
        title: "For Authorities",
        description: "Unprecedented efficiency. From chaos to coordinated response."
    },
    {
        icon: <SparklesIcon className="h-12 w-12 text-teal-400"/>,
        title: "For Destinations",
        description: "A thriving, trusted economy built on a reputation for safety."
    }
]

const ImpactSection: React.FC = () => {
  return (
    <SectionWrapper
      id="impact"
      title="A Trifecta of Trust."
      subtitle="DigiRaksha creates a virtuous cycle of safety that benefits everyone in the tourism ecosystem."
      className="bg-slate-800/50"
    >
      <div className="grid md:grid-cols-3 gap-8 text-center">
        {impacts.map((impact, index) => (
           <AnimatedWrapper key={index} delay={index * 150}>
               <div className="bg-slate-900 p-8 rounded-lg">
                    <div className="flex justify-center items-center mb-6">{impact.icon}</div>
                    <h3 className="text-2xl font-semibold text-white">{impact.title}</h3>
                    <p className="mt-2 text-slate-400">{impact.description}</p>
               </div>
           </AnimatedWrapper>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ImpactSection;