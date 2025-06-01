import { Service } from '@/types';
import { getServiceIcon } from '@/config/services';

export const ServiceDetails = ({ service }: { service: Service }) => {
  const iconElement = getServiceIcon(service.icon);

  return (
    <div>
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-blue-100 rounded-xl text-blue-600">
          {iconElement}
        </div>
        <div>
          <h1 className="text-3xl font-bold">{service.title}</h1>
          <p className="text-lg text-gray-600 mt-2">{service.tagline}</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Service Overview</h2>
          <p className="text-gray-700 mb-6">{service.description}</p>
          
          <h2 className="text-xl font-semibold mb-4">Features & Solutions</h2>
          <div className="space-y-6">
            {service.features.map((featureGroup, i) => (
              <div key={i}>
                <h3 className="text-lg font-medium mb-3 text-blue-600">
                  {featureGroup.title}
                </h3>
                <ul className="space-y-3 ml-4">
                  {featureGroup.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="mt-1 w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="font-semibold mb-4">Key Benefits</h3>
          <ul className="space-y-3">
            {service.benefits.map((benefit, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};