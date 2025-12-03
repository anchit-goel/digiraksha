import React from 'react';
import SectionWrapper from '../SectionWrapper';
import FeatureCard from '../FeatureCard';
import AnimatedWrapper from '../AnimatedWrapper';
import { CubeIcon, SmartphoneIcon, BrainCircuitIcon, WifiIcon, ServerIcon, ShieldIcon } from '../icons';

const solutions = [
  {
    icon: <ShieldIcon className="h-6 w-6" />,
    title: 'Digital Trip ID',
    description: 'Your secure key to the city. On the blockchain.',
  },
  {
    icon: <SmartphoneIcon className="h-6 w-6" />,
    title: 'Tourist App',
    description: 'Help is one tap away. Always.',
  },
  {
    icon: <BrainCircuitIcon className="h-6 w-6" />,
    title: 'AI Anomaly Detection',
    description: 'Seeing trouble before it starts.',
  },
  {
    icon: <WifiIcon className="h-6 w-6" />,
    title: 'IoT Wearables',
    description: "Connected, even when you're off-grid.",
  },
  {
    icon: <ServerIcon className="h-6 w-6" />,
    title: 'Authorities Dashboard',
    description: 'Instant clarity. Faster response.',
  },
  {
    icon: <CubeIcon className="h-6 w-6" />,
    title: 'Complete Ecosystem',
    description: 'An integrated safety net, working as one.',
  },
];

const SolutionSection: React.FC = () => {
  return (
    <SectionWrapper
      id="solution"
      title="A new standard for safety."
      subtitle="DigiRaksha is a cohesive ecosystem where every layer works in concert to protect you."
      className="bg-slate-800/50"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {solutions.map((solution, index) => (
          <AnimatedWrapper key={index} delay={index * 100}>
            <FeatureCard {...solution} />
          </AnimatedWrapper>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default SolutionSection;