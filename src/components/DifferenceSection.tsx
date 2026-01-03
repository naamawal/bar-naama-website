import React from 'react';
import { X, Check } from 'lucide-react';

const traditionalItems = [
  'One-off analysis',
  'Slides and recommendations',
  'Knowledge lives with consultants',
  'Value fades after delivery',
];

const ourApproachItems = [
  'Working operational systems',
  'Reusable decision models',
  'Logic owned by your team',
  'Value compounds over time',
];

const DifferenceSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-terracotta" />
              <span className="text-sm font-medium text-terracotta uppercase tracking-wider">
                Why This Is Different
              </span>
              <div className="h-px w-12 bg-terracotta" />
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground">
              This is <span className="italic">not</span> traditional consulting.
            </h2>
          </div>
          
          {/* Comparison */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional */}
            <div className="p-8 bg-foreground/5 rounded-sm">
              <h3 className="font-display text-xl font-medium mb-6 text-foreground/60">
                Traditional Consulting
              </h3>
              <div className="space-y-4">
                {traditionalItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <X className="w-4 h-4 text-foreground/40" />
                    <span className="text-foreground/60">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Our Approach */}
            <div className="p-8 bg-terracotta/10 border border-terracotta/20 rounded-sm">
              <h3 className="font-display text-xl font-medium mb-6 text-foreground">
                This Approach
              </h3>
              <div className="space-y-4">
                {ourApproachItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-terracotta" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferenceSection;
