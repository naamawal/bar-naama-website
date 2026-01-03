import React from 'react';
import { Star } from '@/components/GeometricShapes';

const stats = [
  {
    stat: '18%',
    description: 'higher retention for teams reviewing health scores monthly',
    source: 'TSIA',
  },
  {
    stat: '25-95%',
    description: 'profit increase from just 5% better retention',
    source: 'Bain & Company',
  },
  {
    stat: '68%',
    description: 'higher win rates for companies with defined ICP',
    source: 'TOPO Research',
  },
];

const ImpactSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Star size={16} />
              <span className="text-sm font-medium text-terracotta uppercase tracking-wider">
                Why This Matters
              </span>
              <Star size={16} />
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground">
              The impact of <span className="italic">operational clarity</span>
            </h2>
          </div>
          
          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((item, index) => (
              <div key={index} className="text-center p-8 border border-border rounded-sm hover:border-terracotta/30 transition-colors">
                <p className="font-display text-5xl font-medium text-terracotta mb-4">
                  {item.stat}
                </p>
                <p className="text-foreground/70 mb-3">
                  {item.description}
                </p>
                <p className="text-xs text-foreground/50 uppercase tracking-wider">
                  {item.source}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
