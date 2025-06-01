'use client';

import { CheckCircle, ArrowRight, Calendar } from 'lucide-react';

export const HeroContent = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="space-y-6 sm:space-y-8 max-w-2xl">
      <div className="space-y-3 sm:space-y-4">
        <div className="inline-flex items-center space-x-2 bg-blue-100 text-oppa-primary px-3 py-1 rounded-full text-xs sm:text-sm font-medium animate-pulse-slow">
          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />
          <span>AGPO Certified • Leading ICT Integrator</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-oppa-dark leading-tight">
          Let&apos;s Get You{' '}
          <span className="text-oppa-primary">Your Solutions</span> 
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
          We don&apos;t just provide ICT services - we deliver complete technology ecosystems tailored to your business needs. From initial consultation to final implementation, we&apos;re with you every step of the way.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <button className="bg-oppa-primary text-oppa-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-oppa-secondary transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-oppa-lg">
          <span>Explore Solutions</span>
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <button 
          onClick={scrollToContact}
          className="border border-gray-300 text-oppa-dark px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-oppa-light transition-colors flex items-center justify-center space-x-2"
        >
          <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>Book Consultation</span>
        </button>
      </div>
    </div>
  );
};