// components/cards/ServiceCard.tsx
'use client';

import Link from 'next/link';
import { Service } from '@/types';
import { getServiceIcon } from '@/config/services';

type ServiceCardVariant = 'default' | 'compact' | 'minimal';

export const ServiceCard = ({
  service,
  variant = 'default'
}: {
  service: Service;
  variant?: ServiceCardVariant;
}) => {
  const wrapperClasses = `border rounded-lg overflow-hidden transition-all hover:shadow-lg ${
    variant === 'default' ? 'p-6' : 'p-4'
  }`;

  return (
    <Link 
      href={`/services/${service.id}`}
      className={`block h-full bg-white ${wrapperClasses}
        hover:border-blue-200 focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-blue-500`}
    >
      <div className="flex items-start gap-4">
        <div className={`rounded-lg flex-shrink-0 ${
          variant === 'default' 
            ? 'p-3 bg-blue-50 text-blue-600' 
            : 'p-2 bg-gray-50 text-gray-600'
        }`}>
          {getServiceIcon(service.icon)}
        </div>

        <div className="flex-1">
          <h3 className={`font-semibold ${
            variant === 'default' ? 'text-lg' : 'text-base'
          }`}>
            {service.title}
          </h3>
          
          {variant !== 'minimal' && (
            <p className={`text-gray-600 ${
              variant === 'default' ? 'mt-2' : 'mt-1 text-sm'
            }`}>
              {variant === 'default' ? service.description : service.tagline}
            </p>
          )}

          {variant === 'default' && service.features?.[0]?.items && (
            <ul className="mt-4 space-y-2">
              {service.features[0].items.slice(0, 3).map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0"></span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Link>
  );
};