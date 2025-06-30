// components/cards/CategoryCard.tsx
'use client';

import { ServiceCategory } from '@/types';
import { getServiceIcon } from '@/config/services';

export const CategoryCard = ({ category }: { category: ServiceCategory }) => {
  return (
    <div className="block h-full bg-oppa-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-oppa-lg hover:shadow-oppa-primary/10 p-6 hover:border-oppa-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-oppa-primary group animate-float">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-gradient-to-br from-oppa-secondary/10 to-oppa-primary/10 text-oppa-primary rounded-lg flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
          {getServiceIcon(category.icon)}
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold text-oppa-dark group-hover:text-oppa-primary transition-colors duration-300">
            {category.title}
          </h3>
          
          <p className="text-gray-600 mt-2 leading-relaxed">
            {category.description}
          </p>

          <div className="mt-4 flex items-center gap-2">
            <span className="text-sm text-gray-500">
              {category.services.length} service{category.services.length !== 1 ? 's' : ''}
            </span>
            <span className="w-2 h-2 rounded-full bg-oppa-accent animate-pulse-slow"></span>
            <span className="text-sm text-oppa-secondary font-medium group-hover:text-oppa-primary transition-colors duration-300">
              View all →
            </span>
          </div>
        </div>
      </div>
      
      {/* Subtle background pattern overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-circuit-pattern pointer-events-none"></div>
    </div>
  );
};