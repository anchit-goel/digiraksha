import React, { useRef, useState, useEffect } from 'react';

interface AnimatedWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // in ms
  direction?: 'up' | 'left' | 'right';
}

const AnimatedWrapper: React.FC<AnimatedWrapperProps> = ({ children, className = '', delay = 0, direction = 'up' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const transitionClasses = `transition-all duration-1000 ease-out`;
  
  // Mobile-first: default animation is fade-up.
  // Desktop overrides: apply horizontal translation for left/right directions.
  let initialClasses = 'opacity-0 transform translate-y-8';
  if (direction === 'left') {
    initialClasses += ' md:translate-y-0 md:-translate-x-8';
  } else if (direction === 'right') {
    initialClasses += ' md:translate-y-0 md:translate-x-8';
  }
  
  const finalClasses = 'opacity-100 transform translate-x-0 translate-y-0';

  return (
    <div
      ref={ref}
      className={`${className} ${transitionClasses} ${isVisible ? finalClasses : initialClasses}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedWrapper;