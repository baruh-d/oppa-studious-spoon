'use client'

import React from 'react';
import Image from 'next/image';
import { PARTNER_LOGOS, getDuplicatedPartners, type Partner } from '@/config/partners';

export const PartnersSection: React.FC = () => {
  return (
    <section className="py-16 bg-oppa-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-oppa-dark mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-oppa-dark/70 text-lg">
            We partner with the world&apos;s leading technology brands
          </p>
        </div>
        
        <PartnersSlider />
      </div>
    </section>
  );
};

const PartnersSlider: React.FC = () => {
  const duplicatedPartners = getDuplicatedPartners(3);
  
  return (
    <div className="relative overflow-hidden">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-oppa-light to-transparent z-10" />
      <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-oppa-light to-transparent z-10" />
      
      {/* Sliding container */}
      <div 
        className="flex gap-8"
        style={{
          width: `${duplicatedPartners.length * 200}px`,
          animation: 'slide 40s linear infinite'
        }}
      >
        {duplicatedPartners.map((partner, index) => (
          <div key={`${partner}-${index}`} className="flex-shrink-0">
            <PartnerLogo name={partner} />
          </div>
        ))}
      </div>
      
      <style jsx>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
};

interface PartnerLogoProps {
  name: Partner;
}

const PartnerLogo: React.FC<PartnerLogoProps> = ({ name }) => (
  <div className="relative h-12 w-32 flex items-center justify-center">
    <Image
      src={PARTNER_LOGOS[name]}
      alt={`${name} logo`}
      width={128}
      height={48}
      className="max-h-12 max-w-32 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.style.display = 'none';
        const fallback = target.parentElement?.querySelector('.fallback') as HTMLElement;
        if (fallback) fallback.style.display = 'block';
      }}
      unoptimized
    />
    <div className="fallback hidden text-lg font-medium text-oppa-dark">
      {name}
    </div>
  </div>
);

export default PartnersSection;