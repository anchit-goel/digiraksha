import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:bg-slate-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-sky-500/10">
      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-sky-500/10 text-sky-400 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-slate-400">{description}</p>
    </div>
  );
};

export default FeatureCard;