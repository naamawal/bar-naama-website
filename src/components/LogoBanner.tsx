import React from 'react';
import zapierLogo from '@/assets/logos/zapier.png';
import lookerLogo from '@/assets/logos/looker.png';
import mixpanelLogo from '@/assets/logos/mixpanel.png';
import salesforceLogo from '@/assets/logos/salesforce.png';
import hubspotLogo from '@/assets/logos/hubspot.png';
import zendeskLogo from '@/assets/logos/zendesk.png';

const logos = [
  { src: zapierLogo, alt: 'Zapier' },
  { src: lookerLogo, alt: 'Looker' },
  { src: mixpanelLogo, alt: 'Mixpanel' },
  { src: salesforceLogo, alt: 'Salesforce' },
  { src: hubspotLogo, alt: 'HubSpot' },
  { src: zendeskLogo, alt: 'Zendesk' },
];

const LogoBanner = () => {
  return (
    <section className="py-12 overflow-hidden border-y border-border/50">
      <div className="relative">
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        
        {/* Scrolling container */}
        <div className="flex animate-scroll">
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 mx-12 flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-8 md:h-10 w-auto grayscale opacity-60 hover:opacity-80 transition-opacity"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 mx-12 flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-8 md:h-10 w-auto grayscale opacity-60 hover:opacity-80 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoBanner;
