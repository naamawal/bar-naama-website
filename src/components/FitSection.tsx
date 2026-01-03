import React from 'react';
import { Check, X } from 'lucide-react';

const goodFit = [
  'Have data but don\'t trust it',
  'Rely on manual prep and spreadsheets',
  'Want AI that supports humans',
  'Care about adoption and explainability',
];

const notFit = [
  'Want generic dashboards',
  'Are looking for quick AI demos',
  'Prefer black-box tools',
];

const FitSection = () => {
  return (
    <section className="py-24 bg-charcoal text-cream">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-terracotta" />
              <span className="text-sm font-medium text-terracotta uppercase tracking-wider">
                Who This Is For
              </span>
              <div className="h-px w-12 bg-terracotta" />
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl font-medium">
              Built for teams that want <span className="italic text-mustard">clarity</span>, not more tools.
            </h2>
          </div>
          
          {/* Two columns */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Good Fit */}
            <div>
              <h3 className="font-display text-xl font-medium mb-6 text-sage">
                Good fit if you...
              </h3>
              <div className="space-y-4">
                {goodFit.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-sage" />
                    <span className="text-cream/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Not a Fit */}
            <div>
              <h3 className="font-display text-xl font-medium mb-6 text-cream/60">
                Not a fit if you...
              </h3>
              <div className="space-y-4">
                {notFit.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <X className="w-5 h-5 text-cream/40" />
                    <span className="text-cream/60">{item}</span>
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

export default FitSection;
