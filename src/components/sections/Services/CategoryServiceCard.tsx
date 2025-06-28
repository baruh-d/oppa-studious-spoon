'use client';

import Link from 'next/link';
import { ServiceCategory } from '@/types';
import { ServiceCard } from './ServiceCard';
import { getServiceIcon } from '@/config/services';

interface CategoryServiceCardProps {
  category: ServiceCategory;
  showAllServices?: boolean;
}

export const CategoryServiceCard = ({ 
  category,
  showAllServices = false
}: CategoryServiceCardProps) => {
  const displayedServices = showAllServices 
    ? category.services 
    : category.services.slice(0, 3);

  return (
    <div className="border rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
      {/* Category Header */}
      <div className="p-6 pb-4 border-b">
        <Link 
          href={`/services/categories/${category.id}`} 
          className="group block"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-50 rounded-lg text-blue-600 group-hover:bg-blue-100 transition-colors">
              {getServiceIcon(category.icon)}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                {category.title}
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                {category.description}
              </p>
            </div>
          </div>
        </Link>
      </div>

      {/* Services List */}
      <div className="p-6 pt-4 grid gap-4">
        {displayedServices.map(service => (
          <ServiceCard 
            key={service.id} 
            service={service} 
            variant="compact" 
          />
        ))}

        {!showAllServices && category.services.length > 3 && (
          <Link 
            href={`/services/categories/${category.id}`}
            className="text-sm text-blue-600 hover:text-blue-800 font-medium text-center pt-2"
          >
            + {category.services.length - 3} more services
          </Link>
        )}
      </div>
    </div>
  );
};