import React from 'react';

export const HeroIllustration = () => (
  <svg viewBox="0 0 500 500" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Background arch */}
    <path
      d="M100 350 Q100 150 250 150 Q400 150 400 350"
      stroke="hsl(var(--clay))"
      strokeWidth="40"
      fill="none"
      className="animate-float-slow"
    />
    
    {/* Terracotta blob */}
    <ellipse
      cx="150"
      cy="280"
      rx="80"
      ry="100"
      fill="hsl(var(--terracotta))"
      className="animate-float"
      style={{ animationDelay: '0.5s' }}
    />
    
    {/* Sage leaf shape */}
    <path
      d="M320 200 Q380 250 350 350 Q320 300 280 320 Q300 250 320 200Z"
      fill="hsl(var(--charcoal))"
      className="animate-float-slow"
      style={{ animationDelay: '1s' }}
    />
    
    {/* Small sage circle */}
    <circle
      cx="380"
      cy="180"
      r="25"
      fill="hsl(var(--sage))"
      className="animate-float"
      style={{ animationDelay: '1.5s' }}
    />
    
    {/* Mustard star */}
    <g transform="translate(200, 120)" className="animate-spin-slow">
      <path
        d="M0 -15 L3 -3 L15 0 L3 3 L0 15 L-3 3 L-15 0 L-3 -3 Z"
        fill="hsl(var(--mustard))"
      />
    </g>
    
    {/* Small stars */}
    <g transform="translate(420, 220)">
      <path
        d="M0 -8 L2 -2 L8 0 L2 2 L0 8 L-2 2 L-8 0 L-2 -2 Z"
        fill="hsl(var(--mustard))"
        className="animate-float"
        style={{ animationDelay: '2s' }}
      />
    </g>
    
    <g transform="translate(280, 80)">
      <path
        d="M0 -6 L1.5 -1.5 L6 0 L1.5 1.5 L0 6 L-1.5 1.5 L-6 0 L-1.5 -1.5 Z"
        fill="hsl(var(--mustard))"
        className="animate-float-slow"
        style={{ animationDelay: '0.3s' }}
      />
    </g>
    
    {/* Concentric arches */}
    <g transform="translate(250, 380)">
      <path d="M-100 0 Q-100 -80 0 -80 Q100 -80 100 0" stroke="hsl(var(--clay))" strokeWidth="4" fill="none" />
      <path d="M-80 0 Q-80 -60 0 -60 Q80 -60 80 0" stroke="hsl(var(--clay))" strokeWidth="4" fill="none" />
      <path d="M-60 0 Q-60 -40 0 -40 Q60 -40 60 0" stroke="hsl(var(--clay))" strokeWidth="4" fill="none" />
      <path d="M-40 0 Q-40 -20 0 -20 Q40 -20 40 0" stroke="hsl(var(--clay))" strokeWidth="4" fill="none" />
    </g>
    
    {/* Decorative dots */}
    <circle cx="180" cy="160" r="4" fill="hsl(var(--charcoal))" />
    <circle cx="350" cy="280" r="3" fill="hsl(var(--mustard))" />
    <circle cx="120" cy="200" r="2" fill="hsl(var(--sage))" />
  </svg>
);

export const SectionDivider = () => (
  <svg viewBox="0 0 1200 100" className="w-full h-auto" preserveAspectRatio="none">
    <path
      d="M0 50 Q300 20 600 50 Q900 80 1200 50 L1200 100 L0 100 Z"
      fill="hsl(var(--clay))"
      opacity="0.2"
    />
  </svg>
);

export const DecorativeArch = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none">
    <path
      d="M20 180 Q20 40 100 40 Q180 40 180 180"
      stroke="hsl(var(--terracotta))"
      strokeWidth="8"
      fill="none"
    />
  </svg>
);

export const Star = ({ className, size = 24 }: { className?: string; size?: number }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className} 
    width={size} 
    height={size}
    fill="hsl(var(--mustard))"
  >
    <path d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z" />
  </svg>
);

export const Leaf = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 150" className={className} fill="hsl(var(--charcoal))">
    <path d="M50 0 Q80 50 60 100 Q50 130 50 150 Q50 130 40 100 Q20 50 50 0Z" />
  </svg>
);
