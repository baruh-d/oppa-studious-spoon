'use client';

import { Service } from '@/types';
import { getServiceIcon } from '@/config/services'; 

export const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <div className="border rounded-lg p-6 hover:shadow-lg transition-all h-full">
      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
          {getServiceIcon(service.icon)}
        </div>
        <h3 className="text-xl font-semibold">{service.title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <ul className="space-y-2">
        {service.features
          .flatMap((group) => group.items)
          .slice(0, 3)
          .map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              {feature}
            </li>
          ))}
      </ul>
    </div>
  );
};
