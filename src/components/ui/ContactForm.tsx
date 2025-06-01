'use client';
import { useState } from 'react';
import { Calendar } from 'lucide-react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-oppa-white rounded-xl shadow-oppa-lg p-8 space-y-6">
      <FormInput 
        label="Full Name *"
        name="name"
        type="text"
        required
        value={formData.name}
        onChange={handleChange}
      />
      
      <FormInput 
        label="Email *"
        name="email"
        type="email"
        required
        value={formData.email}
        onChange={handleChange}
      />
      
      <FormInput 
        label="Phone Number"
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={handleChange}
      />
      
      <FormSelect 
        label="Service Interest *"
        name="service"
        options={[
          { value: '', label: 'Select a service' },
          { value: 'audio-visual', label: 'Audio Visual Solutions' },
          { value: 'automation', label: 'Home & Office Automation' },
          { value: 'networking', label: 'Structured Cabling & Networking' },
          { value: 'communication', label: 'Unified Communication' },
          { value: 'security', label: 'ICT Security & Access Control' },
          { value: 'wireless', label: 'Wireless Communication' },
          { value: 'computing', label: 'Computing Solutions' },
          { value: 'specialized', label: 'Specialized Systems' },
        ]}
        required
        value={formData.service}
        onChange={handleChange}
      />
      
      <FormInput 
        label="Preferred Date *"
        name="date"
        type="date"
        required
        value={formData.date}
        onChange={handleChange}
      />
      
      <FormSelect 
        label="Preferred Time *"
        name="time"
        options={[
          { value: '', label: 'Select a time slot' },
          { value: 'morning', label: 'Morning (8:00 AM - 12:00 PM)' },
          { value: 'afternoon', label: 'Afternoon (1:00 PM - 5:00 PM)' },
        ]}
        required
        value={formData.time}
        onChange={handleChange}
      />
      
      <FormTextarea 
        label="Brief Description of Your Needs *"
        name="message"
        rows={4}
        required
        value={formData.message}
        onChange={handleChange}
      />
      
      <button
        type="submit"
        className="w-full bg-oppa-primary text-oppa-white py-4 rounded-lg font-semibold hover:bg-oppa-secondary transition-colors flex items-center justify-center space-x-2 shadow-oppa-lg"
      >
        <Calendar className="w-5 h-5" />
        <span>Schedule Consultation</span>
      </button>
    </form>
  );
};

// Reusable Form Components
const FormInput = ({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) => (
  <div>
    <label htmlFor={props.name} className="block text-sm font-medium text-oppa-dark mb-1">
      {label}
    </label>
    <input
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-oppa-primary focus:border-transparent"
      {...props}
    />
  </div>
);

const FormTextarea = ({ label, ...props }: { label: string } & React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <div>
    <label htmlFor={props.name} className="block text-sm font-medium text-oppa-dark mb-1">
      {label}
    </label>
    <textarea
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-oppa-primary focus:border-transparent"
      {...props}
    />
  </div>
);

const FormSelect = ({ 
  label, 
  options, 
  ...props 
}: { 
  label: string;
  options: { value: string; label: string }[];
} & React.SelectHTMLAttributes<HTMLSelectElement>) => (
  <div>
    <label htmlFor={props.name} className="block text-sm font-medium text-oppa-dark mb-1">
      {label}
    </label>
    <select
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-oppa-primary focus:border-transparent"
      {...props}
    >
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);