import React from 'react';
import SectionWrapper from '../SectionWrapper';
import AnimatedWrapper from '../AnimatedWrapper';
import { SmartphoneIcon, UsersIcon } from '../icons';

const QrCodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4h4v4H4V4zm6 0h4v4h-4V4zM4 10h4v4H4v-4zm6 0h4v4h-4v-4zm10-6h-4v4h4V4zM16 10h4v4h-4v-4zM4 16h4v4H4v-4zm6 0h4v4h-4v-4zm10 0h-4v4h4v-4z" />
    </svg>
);


const FeasibilitySection: React.FC = () => {
  return (
    <SectionWrapper
      id="feasibility"
      title="Designed for Today's World."
      subtitle="We're not building for a distant future. DigiRaksha leverages technology and infrastructure that's already in place."
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        {[
          { icon: <SmartphoneIcon className="h-12 w-12 text-sky-400" />, title: 'High Smartphone Adoption', text: 'A ready user base of over 85% of tourists.' },
          { icon: <QrCodeIcon className="h-12 w-12 text-sky-400" />, title: 'Existing QR Infrastructure', text: 'Seamless integration at airports, hotels, and attractions.' },
          { icon: <UsersIcon className="h-12 w-12 text-sky-400" />, title: 'Government Alignment', text: 'Aligned with initiatives to boost safe, modern tourism.' },
        ].map((item, index) => (
            <AnimatedWrapper key={index} delay={index * 150}>
                <div className="p-6">
                    <div className="flex justify-center items-center mb-6">
                        {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-slate-400">{item.text}</p>
                </div>
            </AnimatedWrapper>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default FeasibilitySection;