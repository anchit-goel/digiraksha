import React from 'react';
import SectionWrapper from '../SectionWrapper';
import AnimatedWrapper from '../AnimatedWrapper';
import { DollarSignIcon, UsersIcon, SparklesIcon } from '../icons';

const monetizationPoints = [
  {
    icon: <DollarSignIcon className="h-8 w-8 text-sky-400" />,
    title: 'Tourist Passes',
    description: 'A simple, affordable pass for international visitors.',
  },
  {
    icon: <UsersIcon className="h-8 w-8 text-sky-400" />,
    title: 'Public-Private Partnership',
    description: 'Subsidized by governments to protect all domestic tourists.',
  },
  {
    icon: <SparklesIcon className="h-8 w-8 text-sky-400" />,
    title: 'Ecosystem Growth',
    description: 'Local vendor promotions that enrich the travel experience.',
  },
];

const MonetizationSection: React.FC = () => {
  return (
    <SectionWrapper
      id="monetization"
      title="Sustainable. Accessible."
      subtitle="A business model built for long-term growth and universal access to safety."
    >
        <div className="max-w-4xl mx-auto space-y-8">
            {monetizationPoints.map((item, index) => (
            <AnimatedWrapper key={index} delay={index * 150}>
                <div className="bg-slate-800/50 p-6 rounded-lg flex items-center space-x-6">
                    <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-lg bg-slate-700">
                        {item.icon}
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                        <p className="mt-1 text-slate-400">{item.description}</p>
                    </div>
                </div>
            </AnimatedWrapper>
            ))}
        </div>
    </SectionWrapper>
  );
};

export default MonetizationSection;