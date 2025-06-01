import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-oppa-dark mb-4">Schedule a Consultation</h2>
        <p className="text-gray-600 text-lg">
          Fill out the form to book a meeting with our ICT experts. We&apos;ll get back to you within 24 hours.
        </p>
      </div>

      <div className="space-y-6">
        <ContactInfoItem 
          icon={<MapPin className="w-6 h-6 text-oppa-secondary" />}
          title="Address"
          content="Elysee Plaza, 2nd Floor Kilimani Road, Nairobi<br />P.O. Box 1455 - 00200"
        />
        
        <ContactInfoItem 
          icon={<Phone className="w-6 h-6 text-oppa-secondary" />}
          title="Phone"
          content="+254 705 576 746<br />+254 788 968 600"
        />
        
        <ContactInfoItem 
          icon={<Mail className="w-6 h-6 text-oppa-secondary" />}
          title="Email"
          content="info@oppaservices.com<br />sales@oppaservices.com"
        />
        
        <ContactInfoItem 
          icon={<Clock className="w-6 h-6 text-oppa-secondary" />}
          title="Working Hours"
          content="Monday - Friday: 8:00 AM - 5:00 PM<br />Emergency Support: 24/7"
        />
      </div>
    </div>
  );
};

const ContactInfoItem = ({ icon, title, content }: { 
  icon: React.ReactNode;
  title: string;
  content: string;
}) => (
  <div className="flex items-start space-x-4">
    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="font-semibold text-oppa-dark">{title}</h3>
      <p 
        className="text-gray-600" 
        dangerouslySetInnerHTML={{ __html: content }} 
      />
    </div>
  </div>
);