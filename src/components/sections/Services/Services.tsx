import React from 'react';
import { ServicesGrid } from './ServicesGrid';
import { SERVICES } from '@/config/services';

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-oppa-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-oppa-dark">
            Comprehensive ICT Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From audio-visual systems to advanced security solutions, we provide cutting-edge technology 
            services that empower businesses across Africa.
          </p>
        </div>
        <ServicesGrid services={SERVICES} />
      </div>
    </section>
  );
};