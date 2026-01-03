import React from 'react';
import { Database, BarChart3, Target, Workflow, TrendingUp } from 'lucide-react';

const capabilities = [
  {
    icon: Database,
    title: 'Customer Data Layer',
    description: 'Clean, normalized, semantic customer data designed for decision-making.',
    color: 'terracotta',
  },
  {
    icon: BarChart3,
    title: 'Health Scoring & Risk Models',
    description: 'Explainable health scores tied to lifecycle, usage, and behavior.',
    color: 'sage',
  },
  {
    icon: Target,
    title: 'ICP & Segmentation Models',
    description: 'Data-backed ICP definitions that actually guide focus and growth.',
    color: 'mustard',
  },
  {
    icon: Workflow,
    title: 'CSM Enablement & Automations',
    description: 'Systems, agents, and workflows that reduce prep, noise, and cognitive load.',
    color: 'clay',
  },
  {
    icon: TrendingUp,
    title: 'GTM Engine',
    description: 'Pattern recognition across segments, channels, and lifecycle stages.',
    color: 'terracotta',
  },
];

const SolutionSection = () => {
  return (
    <section id="what-we-build" className="py-24 bg-clay/10">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-terracotta" />
              <span className="text-sm font-medium text-terracotta uppercase tracking-wider">
                What We Build
              </span>
              <div className="h-px w-12 bg-terracotta" />
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-foreground">
              Internal intelligence, <span className="italic">productized.</span>
            </h2>
            
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              When your data is structured, decisions become operational. 
              We build systems that answer questions.
            </p>
          </div>
          
          {/* Core Components Overview */}
          <div className="grid md:grid-cols-3 gap-4 mb-12 text-center">
            <div className="p-6 border border-border rounded-sm">
              <p className="font-medium text-foreground">Clean Data Layer</p>
              <p className="text-sm text-foreground/60 mt-1">Normalized, query-ready data models</p>
            </div>
            <div className="p-6 border border-border rounded-sm">
              <p className="font-medium text-foreground">Modular Engines</p>
              <p className="text-sm text-foreground/60 mt-1">Health, ICP, Pre-Sales, GTM</p>
            </div>
            <div className="p-6 border border-border rounded-sm">
              <p className="font-medium text-foreground">Embedded Outputs</p>
              <p className="text-sm text-foreground/60 mt-1">CRM, dashboards, docs, APIs</p>
            </div>
          </div>
          
          {/* Capability Blocks */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, index) => (
              <div
                key={index}
                className="group p-8 bg-background border border-border rounded-sm hover:border-terracotta/40 transition-all duration-300 hover:shadow-lg"
              >
                <div className={`inline-flex p-3 rounded-sm mb-4 bg-${cap.color}/10`}>
                  <cap.icon className={`w-6 h-6 text-${cap.color}`} />
                </div>
                <h3 className="font-display text-xl font-medium mb-3 text-foreground group-hover:text-primary transition-colors">
                  {cap.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
