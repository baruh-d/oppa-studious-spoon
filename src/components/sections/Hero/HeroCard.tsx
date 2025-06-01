'use client';

import { CheckCircle } from 'lucide-react';

export const HeroCard = () => {
  return (
    <div className="relative animate-float w-full max-w-lg mx-auto lg:mx-0">
      <div className="relative bg-gradient-to-br from-oppa-primary to-oppa-secondary rounded-2xl p-6 sm:p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500 shadow-oppa-lg">
        <div className="bg-oppa-white rounded-xl p-5 sm:p-6 space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-lg sm:text-xl text-oppa-dark">Complete ICT Solutions</h3>
              <p className="text-sm sm:text-base text-gray-600">End-to-end technology integration</p>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-sm sm:text-base text-oppa-dark">
              <div className="w-2 h-2 bg-oppa-secondary rounded-full flex-shrink-0"></div>
              <span>Audio Visual & Automation</span>
            </div>
            <div className="flex items-center space-x-2 text-sm sm:text-base text-oppa-dark">
              <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
              <span>Security & Access Control</span>
            </div>
            <div className="flex items-center space-x-2 text-sm sm:text-base text-oppa-dark">
              <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
              <span>Networking & Communication</span>
            </div>
            <div className="flex items-center space-x-2 text-sm sm:text-base text-oppa-dark">
              <div className="w-2 h-2 bg-oppa-accent rounded-full flex-shrink-0"></div>
              <span>Computing & Software Solutions</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};