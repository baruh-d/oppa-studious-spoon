/**
 * Type definitions for the Oppa Services application
 * This file contains interfaces and types used throughout the application
 */
/**
 * Core service type matching our config/services.ts structure
 */

/**
 * Service category type for grouping related services
 */
export interface ServiceCategory {
  id: string;
  title: string;
  icon: string; // Changed from keyof typeof import('lucide-react') 
  description: string;
  services: readonly Service[]; // Array of Service objects
}
export interface Service {
  id: string;
  title: string;
  icon: string; // using string to match your services data
  tagline: string;
  description: string;
  features: {
    title: string;
    items: string[];
  }[];
  benefits: string[];
  caseStudies?: string[]; // Optional field for future expansion
  categoryId?: string; // Optional reference back to parent category
}

/**
 * Type for contact form submissions
 */
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service: string; // Should match service IDs
  date: string;
  time: 'morning' | 'afternoon';
  message: string;
  urgency?: 'standard' | 'urgent'; // Optional field
}

/**
 * Type for partner organizations
 */
export interface Partner {
  id: string;
  name: string;
  logo: string; // Path to logo image
  website: string;
  category: 'hardware' | 'software' | 'service';
}

/**
 * Type for case studies
 */
export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  services: string[]; // Array of service IDs
  summary: string;
  results: string[];
  image?: string;
  date: Date;
}

/**
 * Type for team members
 */
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo?: string;
  services: string[]; // Array of service IDs they specialize in
}

// Utility types for API responses
export interface ApiResponse<T> {
  data?: T;
  error?: string;
  success: boolean;
}

// Type for navigation items
export interface NavItem {
  title: string;
  href: string;
  icon?: keyof typeof import('lucide-react');
  children?: NavItem[];
}