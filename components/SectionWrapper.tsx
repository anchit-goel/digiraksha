import React from 'react';

interface SectionWrapperProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, title, subtitle, children, className = 'bg-slate-900' }) => {
  return (
    <section id={id} className={`py-20 md:py-32 ${className}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-lg text-slate-400 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
           <div className="mt-6 w-24 h-1 bg-teal-500 mx-auto rounded"></div>
        </div>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;