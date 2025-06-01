'use client'

import React from 'react';

export const CTASection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-r from-oppa-primary to-oppa-secondary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-oppa-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Get in touch with our experts to discuss your ICT requirements and discover how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToContact}
              className="bg-oppa-white text-oppa-primary px-8 py-4 rounded-lg font-semibold hover:bg-oppa-light transition-colors shadow-oppa-lg"
            >
              Get Free Consultation
            </button>
            <button className="border border-oppa-white text-oppa-white px-8 py-4 rounded-lg font-semibold hover:bg-oppa-white hover:text-oppa-primary transition-colors">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};