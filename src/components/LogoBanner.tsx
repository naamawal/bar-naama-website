import React from 'react';
import lookerLogo from '@/assets/logos/looker.png';
import mixpanelLogo from '@/assets/logos/mixpanel.png';
import salesforceLogo from '@/assets/logos/salesforce.png';
import hubspotLogo from '@/assets/logos/hubspot.png';
import zendeskLogo from '@/assets/logos/zendesk.png';
import zapierLogo from '@/assets/logos/zapier.png';
import gainsightLogo from '@/assets/logos/gainsight.png';
import freshworksLogo from '@/assets/logos/freshworks.png';
import gongLogo from '@/assets/logos/gong.png';
import pylonLogo from '@/assets/logos/pylon.webp';
import tableauLogo from '@/assets/logos/tableau.png';
import snowflakeLogo from '@/assets/logos/snowflake.png';
import mondayLogo from '@/assets/logos/monday.png';
import airtableLogo from '@/assets/logos/airtable.png';
import asanaLogo from '@/assets/logos/asana.png';
import n8nLogo from '@/assets/logos/n8n.png';
import slackLogo from '@/assets/logos/slack.png';
import confluenceLogo from '@/assets/logos/confluence.png';
import jiraLogo from '@/assets/logos/jira.png';
import powerbiLogo from '@/assets/logos/powerbi.png';

const logos = [
  { src: lookerLogo, alt: 'Looker' },
  { src: mixpanelLogo, alt: 'Mixpanel' },
  { src: salesforceLogo, alt: 'Salesforce' },
  { src: hubspotLogo, alt: 'HubSpot' },
  { src: zendeskLogo, alt: 'Zendesk' },
  { src: zapierLogo, alt: 'Zapier' },
  { src: gainsightLogo, alt: 'Gainsight' },
  { src: freshworksLogo, alt: 'Freshworks' },
  { src: gongLogo, alt: 'Gong' },
  { src: pylonLogo, alt: 'Pylon' },
  { src: tableauLogo, alt: 'Tableau' },
  { src: snowflakeLogo, alt: 'Snowflake' },
  { src: mondayLogo, alt: 'Monday.com' },
  { src: airtableLogo, alt: 'Airtable' },
  { src: asanaLogo, alt: 'Asana' },
  { src: n8nLogo, alt: 'n8n' },
  { src: slackLogo, alt: 'Slack' },
  { src: confluenceLogo, alt: 'Confluence' },
  { src: jiraLogo, alt: 'Jira' },
  { src: powerbiLogo, alt: 'Power BI' },
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
                className="w-24 md:w-32 h-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
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
                className="w-24 md:w-32 h-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoBanner;
