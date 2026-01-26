import React from 'react';
import { Star } from '@/components/GeometricShapes';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/og-image.png" alt="NextGen-Ops logo" className="h-8 w-8" />
            <span className="font-display text-xl font-semibold text-foreground">
              NextGen-Ops
            </span>
          </div>
          
          {/* Links */}
          <div className="flex items-center gap-8">
            <a href="#what-we-build" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
              What We Build
            </a>
            <a href="#approach" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
              Approach
            </a>
            <a href="#how-we-work" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
              How We Work
            </a>
            <a href="#contact" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
          
          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-foreground/50">
            <Star size={12} />
            <span>© 2026 NextGen-Ops</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
