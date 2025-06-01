'use client';

import { HeroContent } from './HeroContent';
import { HeroCard } from './HeroCard';

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center px-4 sm:px-6">
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <HeroContent />
          <HeroCard />
        </div>
      </div>
    </section>
  );
};