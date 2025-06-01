import Link from 'next/link';
import { Service } from '@/types';
import { ServiceCard } from './ServiceCard';

export const ServicesGrid = ({ services }: { services: Service[] }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => (
        <Link key={service.id} href={`/services/${service.id}`}>
          <ServiceCard service={service} />
        </Link>
      ))}
    </div>
  );
};