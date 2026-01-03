import React from 'react';
import { Star, DecorativeArch } from '@/components/GeometricShapes';
import { AlertCircle, Users, Clock, Zap } from 'lucide-react';

const painPoints = [
  {
    icon: AlertCircle,
    text: 'No single, reliable source of truth for customer data',
  },
  {
    icon: Users,
    text: 'Customer health scores exist, but no one actually trusts or uses them',
  },
  {
    icon: Clock,
    text: 'Teams are overloaded with data but lack clear priorities',
  },
  {
    icon: Zap,
    text: 'Leadership asks critical questions and waits weeks for answers',
  },
];

const ProblemSection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 w-48 h-48">
        <DecorativeArch className="w-full h-full" />
      </div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-terracotta" />
            <span className="text-sm font-medium text-terracotta uppercase tracking-wider">
              The Core Problem
            </span>
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium mb-8 text-foreground">
            Your customer data exists.{' '}
            <span className="italic text-primary">Your decisions still don't scale.</span>
          </h2>
          
          <p className="text-lg text-foreground/70 mb-12 max-w-3xl">
            Growth-stage companies collect massive amounts of customer data across Sales, CS, 
            Product, and Marketing — yet critical decisions are still manual, inconsistent, 
            or based on gut feeling.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-clay/10 rounded-sm border border-border/50 hover:border-terracotta/30 transition-colors"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-2 bg-terracotta/10 rounded-sm">
                  <point.icon className="w-5 h-5 text-terracotta" />
                </div>
                <p className="text-foreground/80">{point.text}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 flex items-center gap-4">
            <Star size={20} className="text-mustard" />
            <p className="text-sm text-foreground/60 italic">
              AI experiments don't survive real workflows
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
