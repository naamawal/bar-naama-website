import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import ApproachSection from '@/components/ApproachSection';
import PathsSection from '@/components/PathsSection';
import DifferenceSection from '@/components/DifferenceSection';
import FitSection from '@/components/FitSection';
import ImpactSection from '@/components/ImpactSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ApproachSection />
        <PathsSection />
        <DifferenceSection />
        <FitSection />
        <ImpactSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
