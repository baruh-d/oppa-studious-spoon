import { ContactInfo } from './ContactInfo';
import { ContactForm } from '@/components/ui/ContactForm';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-oppa-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};