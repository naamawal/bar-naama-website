import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Star, DecorativeArch } from '@/components/GeometricShapes';
import { Linkedin, ArrowRight } from 'lucide-react';
import naamaPhoto from '@/assets/team/naama.png';
import barPhoto from '@/assets/team/bar.png';

const WhoWeAre = () => {
  const values = [
    {
      title: "Built from the Field",
      description: "We aren't just technical consultants. We come from the front lines of Post-Sales, building processes grounded in the real-world workflows of CS and Revenue teams. We build systems people actually use."
    },
    {
      title: "Augmentation, Not Replacement",
      description: "We utilize \"Human-Centric AI\" to remove cognitive load. Our goal isn't to replace your team with bots, but to give your people the space and the data they need to focus on what matters most: driving customer value."
    },
    {
      title: "Deep Data Architecture",
      description: "While others focus on the surface-level UI, we go into the \"engine room.\" We clean, normalize, and restructure your customer data layer to ensure your metrics are accurate, trusted, and AI-ready."
    }
  ];

  const team = [
    {
      name: "Naama Walzer",
      photo: naamaPhoto,
      linkedin: "https://www.linkedin.com/in/naama-walzer-560202223/",
      bio: [
        "I'm Naama Walzer, an 8200 alumni, working at the intersection of technology, Customer Success, and product experience. I'm hands-on with code, data, and automation, and equally focused on UX and the human side of how people interact with complex systems.",
        "I've built Customer Success and customer-facing operations from the ground up, working closely with product, engineering, data, and GTM teams in complex SaaS environments. I specialize in translating technical complexity and fragmented systems into clear workflows, intuitive experiences, and infrastructure that teams actually use.",
        "I work best in the space between strategy and execution. My goal is to reduce friction, lower cognitive load, and help teams make better decisions through systems that are both technically solid and human-centered."
      ]
    },
    {
      name: "Bar Potash Pickel",
      photo: barPhoto,
      linkedin: "https://www.linkedin.com/in/bar-pickel/",
      bio: [
        "I'm Bar Potash Pickel, operating across Customer Success, Ops, and Data. As a former CSM for fast-growing companies, I worked closely with both SMBs and Enterprise customers and experienced the friction that occurs when rapid growth outpaces operational structure. I saw how a lack of data integrity directly impacts the ability to serve customers.",
        "These experiences drove me to pivot toward building operational systems that tame complexity. I apply an engineering mindset to GTM processes, utilizing code, automation, and advanced data infrastructure to eliminate silos. I don't just manage processes; I engineer the systems that support them.",
        "My goal is to help companies transition into a data-driven future. Beyond fixing immediate bottlenecks, I construct the scalable infrastructure that provides leadership with the clarity required to steer the company through complex growth phases."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                Who We Are
              </h1>
              <div className="w-16 h-1 bg-terracotta mx-auto mt-6" />
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 bg-cream/30">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-terracotta" />
                <span className="text-sm font-medium text-terracotta uppercase tracking-wider">
                  Our Story
                </span>
              </div>
              <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
                <p>
                  We founded NextGen-Ops because we saw too many growth-stage SaaS companies hitting a wall. They had the data, but lacked the clarity to use it. Leadership was steering in the fog, and teams were spending more time "chasing" information than acting on it.
                </p>
                <p>
                  We believe technology should empower people, not overwhelm them. Our mission is to replace manual, unscalable "heavy lifting" with a single source of truth—turning your operational infrastructure into a driver of revenue, not a source of friction.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Work With Us Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                Why Work With Us?
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <div 
                    key={index}
                    className="bg-card rounded-2xl p-8 border border-border hover:border-terracotta/30 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center mb-6">
                      <Star size={20} className="text-terracotta" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                      {value.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Team Section */}
        <section className="py-20 bg-cream/30">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Meet Your Partners in Excellence
                </h2>
              </div>
              
              <div className="space-y-16">
                {team.map((member, index) => (
                  <div 
                    key={index}
                    className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-start`}
                  >
                    {/* Photo */}
                    <div className="flex-shrink-0 w-full md:w-72">
                      <div className="relative">
                        <img 
                          src={member.photo} 
                          alt={member.name}
                          className="w-full aspect-square object-cover rounded-2xl"
                        />
                        <a 
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute bottom-4 right-4 w-10 h-10 bg-foreground text-background rounded-full flex items-center justify-center hover:bg-terracotta transition-colors"
                          aria-label={`${member.name}'s LinkedIn`}
                        >
                          <Linkedin size={20} />
                        </a>
                      </div>
                    </div>
                    
                    {/* Bio */}
                    <div className="flex-1">
                      <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                        {member.name}
                      </h3>
                      <div className="space-y-4 text-foreground/80 leading-relaxed">
                        {member.bio.map((paragraph, pIndex) => (
                          <p key={pIndex}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute left-0 bottom-0 w-64 h-64 opacity-10">
            <DecorativeArch className="w-full h-full" />
          </div>
          <div className="absolute right-12 top-12">
            <Star size={24} />
          </div>
          
          <div className="container mx-auto px-6 relative">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-foreground/70 mb-4 italic">
                Ready to work with a team that understands your reality?
              </p>
              
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-foreground">
                Let's build something that lasts.
              </h2>
              
              <p className="text-lg text-foreground/70 mb-10 max-w-xl mx-auto">
                Start with a conversation about your data, your team, and your goals.
              </p>
              
              <a href="https://calendar.app.google/1mq1VgFCA6oH92NG7" target="_blank" rel="noopener noreferrer">
                <Button variant="terracotta" size="xl" className="group">
                  Start with a discovery call
                  <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WhoWeAre;
