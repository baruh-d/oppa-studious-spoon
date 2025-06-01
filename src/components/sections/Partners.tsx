import React from 'react';

import { PARTNERS } from '@/config/partners';

export const PartnersSection = () => {
  return (
    <section className="py-16 bg-oppa-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-oppa-dark mb-4">
            Trusted Technology Partners
          </h2>
          <p className="text-gray-600">
            We work with industry-leading brands to deliver exceptional solutions
          </p>
        </div>
        
        <PartnersGrid />
      </div>
    </section>
  );
};

const PartnersGrid = () => (
  <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
    {PARTNERS.map((partner, index) => (
      <PartnerLogo key={index} name={partner} />
    ))}
  </div>
);

const PartnerLogo = ({ name }: { name: string }) => (
  <div className="text-center">
    <div className="h-12 flex items-center justify-center">
      <span className="text-xl font-bold text-oppa-dark">
        {name}
      </span>
    </div>
  </div>
);