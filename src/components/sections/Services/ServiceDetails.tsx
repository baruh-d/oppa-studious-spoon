'use client';

import { Service } from '@/types';
import { getServiceIcon } from '@/config/services';
import { getCategoryById } from '@/config/categories';
import Link from 'next/link';

export const ServiceDetails = ({ service }: { service: Service }) => {
  const iconElement = getServiceIcon(service.icon);
  // Only get category if categoryId exists
  const category = service.categoryId ? getCategoryById(service.categoryId) : null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb - Only shown if category exists */}
      {category && (
        <div className="text-sm text-gray-500 mb-4">
          <Link href="/services" className="hover:text-blue-600">
            Services
          </Link>
          {' > '}
          <Link 
            href={`/services/categories/${category.id}`} 
            className="hover:text-blue-600"
          >
            {category.title}
          </Link>
          {' > '}
          <span className="text-blue-600">{service.title}</span>
        </div>
      )}

      {/* Service Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-blue-100 rounded-xl text-blue-600">
          {iconElement}
        </div>
        <div>
          <h1 className="text-3xl font-bold">{service.title}</h1>
          <p className="text-lg text-gray-600 mt-2">{service.tagline}</p>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Service Overview</h2>
          <p className="text-gray-700 mb-6">{service.description}</p>
          
          <h2 className="text-xl font-semibold mb-4">Features & Solutions</h2>
          <div className="space-y-6">
            {service.features.map((featureGroup, i) => (
              <div key={i}>
                <h3 className="text-lg font-medium mb-3 text-blue-600">
                  {featureGroup.title}
                </h3>
                <ul className="space-y-3 ml-4">
                  {featureGroup.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="mt-1 w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold mb-4">Key Benefits</h3>
            <ul className="space-y-3">
              {service.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {category && (
            <Link 
              href={`/services/categories/${category.id}`}
              className="block bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                  {getServiceIcon(category.icon)}
                </div>
                <span className="font-medium">
                  View all {category.title} services
                </span>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};