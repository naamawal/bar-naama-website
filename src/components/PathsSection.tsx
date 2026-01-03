import React from 'react';
import { Check } from 'lucide-react';

const path1Steps = [
  'Consolidate customer data into a single source of truth',
  'Normalize and model the data for business use',
  'Define and implement health scoring and prioritization logic',
  'Build a clean customer data layer aligned with real decisions',
  'Consult on best tools and platforms ready to scale',
  'Introduce explainable automation and agents',
];

const path2Steps = [
  'Run gap analysis across CS and customer operations',
  'Productize internal intelligence (Health, ICP, GTM models)',
  'Refine and scale existing data foundations',
  'Implement agents and automations for CSMs',
  'Embed insights directly into workflows',
];

const PathsSection = () => {
  return (
    <section id="how-we-work" className="py-24 bg-clay/10">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-terracotta" />
              <span className="text-sm font-medium text-terracotta uppercase tracking-wider">
                How We Work With You
              </span>
              <div className="h-px w-12 bg-terracotta" />
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground">
              Two paths to operational clarity
            </h2>
          </div>
          
          {/* Two Paths */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Path 1 */}
            <div className="bg-background border border-border rounded-sm p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center">
                  <span className="font-display text-lg text-terracotta">1</span>
                </div>
                <span className="text-sm text-terracotta uppercase tracking-wider font-medium">
                  When Your Data Is Messy
                </span>
              </div>
              
              <h3 className="font-display text-2xl font-medium mb-4 text-foreground">
                From data chaos to a <span className="italic">usable foundation.</span>
              </h3>
              
              <p className="text-foreground/70 mb-6">
                If your customer data is fragmented, inconsistent, or unreliable, 
                we start by fixing the basics.
              </p>
              
              <div className="space-y-3 mb-8">
                {path1Steps.map((step, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-sage mt-1 flex-shrink-0" />
                    <span className="text-sm text-foreground/80">{step}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-6 border-t border-border">
                <p className="text-sm font-medium text-foreground mb-2">Outcome</p>
                <p className="text-sm text-foreground/70">
                  A trusted, structured customer data foundation that eliminates guesswork 
                  and enables consistent, confident decisions.
                </p>
              </div>
            </div>
            
            {/* Path 2 */}
            <div className="bg-background border border-border rounded-sm p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center">
                  <span className="font-display text-lg text-sage">2</span>
                </div>
                <span className="text-sm text-sage uppercase tracking-wider font-medium">
                  When Your Data Is Organized
                </span>
              </div>
              
              <h3 className="font-display text-2xl font-medium mb-4 text-foreground">
                From data to <span className="italic">intelligence.</span>
              </h3>
              
              <p className="text-foreground/70 mb-6">
                For teams with solid data foundations, we focus on insight and action.
              </p>
              
              <div className="space-y-3 mb-8">
                {path2Steps.map((step, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-sage mt-1 flex-shrink-0" />
                    <span className="text-sm text-foreground/80">{step}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-6 border-t border-border">
                <p className="text-sm font-medium text-foreground mb-2">Outcome</p>
                <p className="text-sm text-foreground/70">
                  Operational intelligence that drives clear priorities, proactive action, 
                  and scalable decision-making.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PathsSection;
