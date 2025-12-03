import React from 'react';
import SectionWrapper from '../SectionWrapper';
import AnimatedWrapper from '../AnimatedWrapper';
import { ShieldIcon, SmartphoneIcon, BrainCircuitIcon, ServerIcon } from '../icons';

const steps = [
    {
        icon: <ShieldIcon className="h-8 w-8" />,
        title: "Secure Your Trip",
        description: "A unique, blockchain-based Digital Trip ID is generated the moment you arrive."
    },
    {
        icon: <SmartphoneIcon className="h-8 w-8" />,
        title: "Explore with Confidence",
        description: "Our app provides real-time alerts and a one-tap SOS button that works anywhere."
    },
    {
        icon: <BrainCircuitIcon className="h-8 w-8" />,
        title: "Stay Protected",
        description: "Our AI and IoT network monitors for anomalies, predicting risks before they happen."
    },
    {
        icon: <ServerIcon className="h-8 w-8" />,
        title: "Authorities Respond Instantly",
        description: "Incidents are flagged on a unified dashboard for immediate, coordinated action."
    }
];

const TechStackSection: React.FC = () => {
  return (
    <SectionWrapper
      id="tech"
      title="How It Works"
      subtitle="A seamless flow from registration to resolution, designed for simplicity and power."
      className="bg-slate-800/50"
    >
      <div className="max-w-4xl mx-auto">
        {steps.map((step, index) => (
         <React.Fragment key={index}>
            <AnimatedWrapper delay={index * 150}>
                <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0 flex items-center justify-center h-20 w-20 rounded-full bg-sky-500/10 text-sky-400 border-2 border-sky-500/30">
                    {step.icon}
                </div>
                <div className="text-center md:text-left">
                    <h3 className="text-2xl font-semibold text-white">{step.title}</h3>
                    <p className="mt-2 text-slate-400">{step.description}</p>
                </div>
                </div>
            </AnimatedWrapper>
            {index < steps.length - 1 && (
                <AnimatedWrapper delay={index * 150 + 100}>
                    <div className="h-16 w-1 bg-slate-700/50 mx-auto my-4 md:ml-9 rounded-full"></div>
                </AnimatedWrapper>
            )}
         </React.Fragment>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default TechStackSection;