import React from 'react';
import { Phone, Mail } from 'lucide-react';

export const TopContactBar = () => {
  return (
    <div className="bg-oppa-dark text-oppa-white text-sm py-2 px-4 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Phone className="w-4 h-4" />
            <span>24/7 Support: +254 705576746 | +254 112657550</span>
          </div>
          <div className="flex items-center space-x-1">
            <Mail className="w-4 h-4" />
            <span>rachel@onpointpolicy.africa | info@onpointpolicy.africa</span>
          </div>
        </div>
        <div className="flex items-center space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-oppa-secondary transition-colors">Client Portal</a>
          <a href="#" className="hover:text-oppa-secondary transition-colors">Support Center</a>
        </div>
      </div>
    </div>
  );
};