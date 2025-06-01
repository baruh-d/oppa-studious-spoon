// import React from 'react';
// import { CheckCircle, ArrowRight } from 'lucide-react';
// import { Service } from '@/types'; 

// interface ServiceCardProps {
//   service: Service;
// }

// export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
//   return (
//     <div className="bg-oppa-white rounded-xl p-6 shadow-sm hover:shadow-oppa-lg transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer">
//       <div className="flex items-center space-x-4 mb-4">
//         <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-oppa-secondary group-hover:bg-oppa-primary group-hover:text-oppa-white transition-colors">
//           {service.icon}
//         </div>
//         <h3 className="font-semibold text-oppa-dark text-lg">{service.title}</h3>
//       </div>

//       <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>

//       <div className="space-y-2">
//         {service.features.map((feature) => (
//           <div key={feature} className="flex items-center space-x-2 text-sm text-oppa-dark">
//             <CheckCircle className="w-4 h-4 text-green-500" />
//             <span>{feature}</span>
//           </div>
//         ))}
//       </div>

//       <div className="mt-6 pt-4 border-t border-gray-100">
//         <button
//           className="text-oppa-primary font-medium text-sm hover:text-oppa-secondary flex items-center space-x-1 group-hover:space-x-2 transition-all"
//           aria-label={`Learn more about ${service.title}`}
//         >
//           <span>Learn More</span>
//           <ArrowRight className="w-4 h-4" />
//         </button>
//       </div>
//     </div>
//   );
// };
