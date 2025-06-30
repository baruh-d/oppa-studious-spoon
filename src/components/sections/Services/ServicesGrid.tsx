import Link from 'next/link';
import { Service, ServiceCategory } from '@/types';
import { ServiceCard } from './ServiceCard';
import { CategoryCard } from './CategoryCard';

interface ServicesGridProps {
  services?: Service[];
  categories?: ServiceCategory[];
  mode: 'services' | 'categories';
}

export const ServicesGrid = ({ services, categories, mode }: ServicesGridProps) => {
  if (mode === 'categories' && categories) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Link key={category.id} href={`/categories/${category.id}`}>
            <CategoryCard category={category} />
          </Link>
        ))}
      </div>
    );
  }

  if (mode === 'services' && services) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Link key={service.id} href={`/services/${service.id}`}>
            <ServiceCard service={service} />
          </Link>
        ))}
      </div>
    );
  }

  return null;
};