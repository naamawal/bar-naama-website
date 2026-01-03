import React from 'react';
import { Star } from '@/components/GeometricShapes';
import { Sparkles } from 'lucide-react';

const ApproachSection = () => {
  return (
    <section id="approach" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-0 top-0 w-64 h-64 bg-terracotta/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-sage/5 rounded-full translate-x-1/3 translate-y-1/3" />
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Visual representation */}
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto">
                {/* Car wash concept visualization */}
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  {/* Entry side - messy */}
                  <g opacity="0.6">
                    <rect x="30" y="100" width="120" height="200" fill="none" stroke="hsl(var(--charcoal))" strokeWidth="2" strokeDasharray="4" />
                    <text x="90" y="80" textAnchor="middle" className="text-xs fill-foreground/60">ENTER</text>
                    <circle cx="60" cy="150" r="8" fill="hsl(var(--clay))" opacity="0.5" />
                    <circle cx="100" cy="180" r="12" fill="hsl(var(--terracotta))" opacity="0.4" />
                    <rect x="50" y="220" width="30" height="20" fill="hsl(var(--sage))" opacity="0.4" transform="rotate(15 65 230)" />
                    <circle cx="120" cy="250" r="6" fill="hsl(var(--mustard))" opacity="0.5" />
                  </g>
                  
                  {/* Arrow */}
                  <path d="M160 200 L240 200" stroke="hsl(var(--terracotta))" strokeWidth="3" markerEnd="url(#arrowhead)" />
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="hsl(var(--terracotta))" />
                    </marker>
                  </defs>
                  
                  {/* Sparkles in middle */}
                  <g transform="translate(200, 200)">
                    <path d="M0 -20 L4 -4 L20 0 L4 4 L0 20 L-4 4 L-20 0 L-4 -4 Z" fill="hsl(var(--mustard))" className="animate-spin-slow" />
                  </g>
                  
                  {/* Exit side - clean */}
                  <g>
                    <rect x="250" y="100" width="120" height="200" fill="none" stroke="hsl(var(--charcoal))" strokeWidth="2" />
                    <text x="310" y="80" textAnchor="middle" className="text-xs fill-foreground/60">EXIT</text>
                    
                    {/* Organized elements */}
                    <rect x="270" y="120" width="80" height="30" fill="hsl(var(--terracotta))" rx="2" />
                    <rect x="270" y="160" width="80" height="30" fill="hsl(var(--sage))" rx="2" />
                    <rect x="270" y="200" width="80" height="30" fill="hsl(var(--clay))" rx="2" />
                    <rect x="270" y="240" width="80" height="30" fill="hsl(var(--mustard))" rx="2" />
                  </g>
                  
                  {/* Tree air freshener accent */}
                  <g transform="translate(350, 150)">
                    <path d="M10 0 L20 30 L0 30 Z" fill="hsl(var(--sage))" />
                    <rect x="8" y="30" width="4" height="8" fill="hsl(var(--clay))" />
                  </g>
                </svg>
              </div>
            </div>
            
            {/* Right: Content */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-terracotta" />
                <span className="text-sm font-medium text-terracotta uppercase tracking-wider">
                  Our Approach
                </span>
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl font-medium mb-6 text-foreground">
                Your customer data, professionally cleaned and{' '}
                <span className="italic">ready to drive decisions.</span>
              </h2>
              
              <p className="text-lg text-foreground/70 mb-6">
                Think of us as your <span className="font-medium text-foreground">customer data car wash</span>.
              </p>
              
              <p className="text-foreground/70 mb-8 leading-relaxed">
                You enter with messy, fragmented customer data — limited visibility and little 
                business value. You exit with polished, structured data, semantic layers that 
                support real decisions, lean tech stack that knows how to scale, and clear 
                answers to questions leadership actually asks.
              </p>
              
              <div className="flex items-center gap-2 mb-8 text-sage">
                <Sparkles size={18} />
                <span className="text-sm italic">Even a little tree air freshener.</span>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-terracotta rounded-full" />
                  <p className="text-sm text-foreground/80">No vendor lock-in</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-sage rounded-full" />
                  <p className="text-sm text-foreground/80">No unnecessary tooling</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-mustard rounded-full" />
                  <p className="text-sm text-foreground/80">Built inside your stack, owned by your team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
