import React from 'react';
import { Button } from '@/components/ui/button';
import { HeroIllustration, Star } from '@/components/GeometricShapes';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-32 left-10 opacity-20">
        <Star size={16} />
      </div>
      <div className="absolute top-48 right-20 opacity-30">
        <Star size={20} />
      </div>
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Content */}
          <div className="order-2 lg:order-1 animate-fade-in">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-foreground mb-6">
              Operations as a service for teams that have data,{' '}
              <span className="italic text-primary">but no clarity.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/70 mb-4 max-w-xl">
              We help growing companies turn messy customer data into reliable decision systems, 
              built inside the tools they already use.
            </p>
            
            <p className="text-base text-foreground/60 mb-8 max-w-lg">
              No dashboards no one trusts. No black-box AI. Systems your teams actually rely on.
            </p>
            
            <a href="https://calendar.app.google/1mq1VgFCA6oH92NG7" target="_blank" rel="noopener noreferrer">
              <Button variant="terracotta" size="xl" className="group">
                Book a discovery call
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
              </Button>
            </a>
          </div>
          
          {/* Illustration */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl">
              <HeroIllustration />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
