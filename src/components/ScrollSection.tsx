import React from 'react';

interface ScrollSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  duration?: number;
  threshold?: number;
}

export const ScrollSection: React.FC<ScrollSectionProps> = ({
  children,
  id,
  className = '',
}) => {
  return (
    <div id={id} className={className}>
      {children}
    </div>
  );
};

export const StaggerContainer: React.FC<{
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  delayChildren?: number;
}> = ({ children, className = '' }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export const StaggerItem: React.FC<{
  children: React.ReactNode;
  className?: string;
  distance?: number;
}> = ({ children, className = '' }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};
