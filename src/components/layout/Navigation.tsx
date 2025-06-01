'use client'

import React, { useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-10 w-full bg-oppa-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-oppa-primary to-oppa-secondary rounded-lg flex items-center justify-center">
              <Globe className="w-6 h-6 text-oppa-white" />
            </div>
            <span className="text-xl font-bold text-oppa-dark">OPPA Services</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-oppa-dark hover:text-oppa-primary transition-colors">Home</a>
            <a href="#services" className="text-oppa-dark hover:text-oppa-primary transition-colors">Services</a>
            <a href="#about" className="text-oppa-dark hover:text-oppa-primary transition-colors">About</a>
            <a href="#contact" className="text-oppa-dark hover:text-oppa-primary transition-colors">Contact</a>
            <button className="bg-oppa-primary text-oppa-white px-4 py-2 rounded-lg hover:bg-oppa-secondary transition-colors">
              Get Quote
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-oppa-white border-t border-gray-100">
          <div className="px-4 py-2 space-y-2">
            <a href="#home" className="block py-2 text-oppa-dark">Home</a>
            <a href="#services" className="block py-2 text-oppa-dark">Services</a>
            <a href="#about" className="block py-2 text-oppa-dark">About</a>
            <a href="#contact" className="block py-2 text-oppa-dark">Contact</a>
            <button className="w-full text-left bg-oppa-primary text-oppa-white px-4 py-2 rounded-lg mt-2">
              Get Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};