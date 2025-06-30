'use client'
import React, { useState } from 'react';
import { ServicesGrid } from './ServicesGrid';
import { SERVICE_CATEGORIES } from '@/config/categories';
import { SERVICES } from '@/config/services';

export const ServicesSection = () => {
  const [viewMode, setViewMode] = useState<'categories' | 'services'>('categories');
  
  return (
    <section id="services" className="py-20 bg-oppa-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-4 mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-oppa-dark">
            Comprehensive ICT Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From audio-visual systems to advanced security solutions
          </p>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-lg p-1 shadow-sm">
            <button
              onClick={() => setViewMode('categories')}
              className={`px-4 py-2 rounded-md ${
                viewMode === 'categories' 
                  ? 'bg-blue-100 text-blue-600' 
                  : 'text-gray-600'
              }`}
            >
              By Category
            </button>
            <button
              onClick={() => setViewMode('services')}
              className={`px-4 py-2 rounded-md ${
                viewMode === 'services' 
                  ? 'bg-blue-100 text-blue-600' 
                  : 'text-gray-600'
              }`}
            >
              All Services
            </button>
          </div>
        </div>
        
        {viewMode === 'categories' ? (
          <ServicesGrid categories={SERVICE_CATEGORIES} mode="categories" />
        ) : (
          <ServicesGrid services={SERVICES} mode="services" />
        )}
      </div>
    </section>
  );
};