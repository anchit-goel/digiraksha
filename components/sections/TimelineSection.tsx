import React, { useRef, useState, useEffect } from 'react';
import SectionWrapper from '../SectionWrapper';
import AnimatedWrapper from '../AnimatedWrapper';

const timelineData = [
  {
    phase: 'Phase 1: Foundation (Q1-Q2 2025)',
    title: 'Core Platform Development',
    description: 'Develop the Tourist App, Authorities Dashboard, and initial Blockchain ID system. Pilot program in one major tourist city.',
  },
  {
    phase: 'Phase 2: AI Integration (Q3 2025)',
    title: 'Intelligence Layer',
    description: 'Integrate the AI Anomaly Detection engine. Refine risk scoring algorithms based on pilot data.',
  },
  {
    phase: 'Phase 3: IoT & Expansion (Q4 2025)',
    title: 'Hardware & Scale-Up',
    description: 'Introduce IoT wearables and the mesh network. Expand to 5 more cities and begin international marketing.',
  },
  {
    phase: 'Phase 4: Ecosystem Growth (2026)',
    title: 'Gamification & Partnerships',
    description: 'Launch the gamification and rewards system. Onboard local vendor partners and expand government collaborations.',
  },
];

const TimelineItem: React.FC<{ data: typeof timelineData[0]; index: number }> = ({ data, index }) => {
  const isOdd = index % 2 !== 0;

  return (
    <div className="relative w-full my-6 md:my-0">
      {/* Desktop alternating layout container */}
      <div className={`md:flex ${isOdd ? 'md:flex-row-reverse' : ''} md:items-center`}>
        {/* Spacer for desktop */}
        <div className="hidden md:block md:w-1/2"></div>
        
        {/* Card content */}
        <div className="w-full md:w-1/2">
          <AnimatedWrapper direction={isOdd ? 'left' : 'right'}>
            <div className={`bg-slate-800 rounded-lg shadow-xl px-6 py-4 border border-slate-700 ml-16 md:ml-0 ${isOdd ? 'md:ml-8' : 'md:mr-8'}`}>
              <p className="text-sm font-medium text-sky-400">{data.phase}</p>
              <h3 className="mb-3 font-bold text-white text-xl">{data.title}</h3>
              <p className="text-sm leading-snug tracking-wide text-slate-400">
                {data.description}
              </p>
            </div>
          </AnimatedWrapper>
        </div>
      </div>

      {/* Circle decorator, positioned absolutely relative to this item */}
      <div className="absolute top-1/2 -translate-y-1/2 left-6 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 z-20 flex items-center justify-center bg-sky-500 shadow-xl w-12 h-12 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-white">{index + 1}</h1>
      </div>
    </div>
  );
};


const TimelineSection: React.FC = () => {
    const [lineVisible, setLineVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting) {
                    setLineVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        const currentRef = ref.current;
        if(currentRef) {
            observer.observe(currentRef);
        }
        return () => {
            if(currentRef) {
                observer.unobserve(currentRef);
            }
        }
    }, [])

  return (
    <SectionWrapper
      id="timeline"
      title="Implementation Roadmap"
      subtitle="Our strategic roadmap outlines a phased approach to development, integration, and scaling, ensuring a robust and timely launch."
      className="bg-slate-800/50"
    >
      <div ref={ref} className="relative container mx-auto px-6 flex flex-col items-center">
        <div className={`absolute z-0 w-1 bg-slate-700 shadow-md inset-y-0 left-6 md:left-1/2 md:-ml-0.5 transition-transform duration-[2000ms] ease-out origin-top ${lineVisible ? 'scale-y-100' : 'scale-y-0'}`}></div>
        {timelineData.map((item, index) => (
          <TimelineItem data={item} index={index} key={index} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default TimelineSection;