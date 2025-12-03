import React from 'react';
import SectionWrapper from '../SectionWrapper';
import FeatureCard from '../FeatureCard';
import AnimatedWrapper from '../AnimatedWrapper';
import { CubeIcon, BrainCircuitIcon, WifiIcon, SparklesIcon } from '../icons';

const innovations = [
  {
    icon: <CubeIcon className="h-6 w-6" />,
    title: 'Rotating Blockchain IDs',
    description: 'Privacy that moves with you.',
  },
  {
    icon: <BrainCircuitIcon className="h-6 w-6" />,
    title: 'AI-Powered Prediction',
    description: 'Shifting from reactive to predictive safety.',
  },
  {
    icon: <WifiIcon className="h-6 w-6" />,
    title: 'IoT Mesh Network',
    description: 'An unbreakable, off-grid connection.',
  },
  {
    icon: <SparklesIcon className="h-6 w-6" />,
    title: 'Gamified Experience',
    description: "Safety that's engaging and rewarding.",
  },
];

const InnovationSection: React.FC = () => {
  return (
    <SectionWrapper
      id="innovation"
      title="Intelligently Proactive."
      subtitle="We don't just respond to incidents. We predict and prevent them."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {innovations.map((item, index) => (
          <AnimatedWrapper key={index} delay={index * 100}>
            <FeatureCard {...item} />
          </AnimatedWrapper>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default InnovationSection;