import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Star, DecorativeArch } from '@/components/GeometricShapes';

const CTASection = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute left-0 bottom-0 w-64 h-64 opacity-10">
        <DecorativeArch className="w-full h-full" />
      </div>
      <div className="absolute right-12 top-12">
        <Star size={24} />
      </div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-foreground/70 mb-4 italic">
            If you're thinking "we should probably build this properly"...
          </p>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-foreground">
            You're right.
          </h2>
          
          <p className="text-lg text-foreground/70 mb-10 max-w-xl mx-auto">
            Let's start with your reality and build systems that actually work.
          </p>
          
          <Button variant="terracotta" size="xl" className="group">
            Start with a discovery call
            <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
