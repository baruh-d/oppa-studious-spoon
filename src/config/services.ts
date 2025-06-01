import type { Service } from '@/types';
import { 
  Monitor, Building, Server, Phone, Shield, Radio, 
  Users, Zap, Laptop, Headphones, Cctv, Cpu, 
  Scan, GanttChart, Speaker, Luggage, Search,
  Users2, ClipboardList, Network, Presentation, BookOpen 
} from 'lucide-react';
import React from 'react';

export const SERVICES: Service[] = [
  {
    id: 'audio-visual',
    title: 'Audio Visual Solutions',
    icon: 'Monitor',
    tagline: 'Cutting-edge display and conferencing technology',
    description: 'We provide the latest technological trends in AV solutions including video walls, 4K projectors, and digital signage to give clients the best value with future-proof deployments.',
    features: [
      {
        title: 'Core Offerings',
        items: [
          'Video Walls',
          'Interactive LCD/LED Screens',
          '4K Laser Projectors',
          'Digital Signage'
        ]
      },
      {
        title: 'Communication Solutions',
        items: [
          'Video Conferencing Systems',
          'Wireless Screen Connectivity',
          'Public Address Systems',
          'Meeting Room Management'
        ]
      }
    ],
    benefits: [
      'Enhanced visual communication',
      'Seamless collaboration tools',
      'Future-proof technology investments',
      'Scalable for any space size'
    ]
  },
  {
    id: 'home-office-automation',
    title: 'Home & Office Automation',
    icon: 'Building',
    tagline: 'Smart control at your fingertips',
    description: 'Complete automation solutions for lighting, climate, security and entertainment systems with integration to Google Home, Alexa and Siri for voice control.',
    features: [
      {
        title: 'Automation Systems',
        items: [
          'Lighting Control',
          'HVAC Automation',
          'Entertainment Systems',
          'Curtains & Blinds Control'
        ]
      },
      {
        title: 'Integrations',
        items: [
          'Google Home',
          'Amazon Alexa',
          'Apple Siri',
          'Mobile App Control'
        ]
      }
    ],
    benefits: [
      'Energy efficiency savings',
      'Enhanced security',
      'Convenient centralized control',
      'Voice command capability'
    ]
  },
  {
    id: 'structured-cabling',
    title: 'Structured Cabling & Networking',
    icon: 'Server',
    tagline: 'Reliable network infrastructure',
    description: 'End-to-end networking solutions with copper and fiber cabling, LAN/WAN setup, and comprehensive cable management for optimal performance.',
    features: [
      {
        title: 'Infrastructure',
        items: [
          'Copper & Fiber Cabling',
          'Cable Management',
          'Network Rack Installation',
          'Server Room Setup'
        ]
      },
      {
        title: 'Services',
        items: [
          'LAN/WAN Installation',
          'Network Device Renewal',
          'Support License Management',
          'Service Level Agreements'
        ]
      }
    ],
    benefits: [
      'High-speed connectivity',
      'Enterprise-grade reliability',
      'Scalable infrastructure',
      'Reduced downtime'
    ]
  },
  {
    id: 'unified-communications',
    title: 'Unified Communications',
    icon: 'Phone',
    tagline: 'Seamless business communication',
    description: 'Integrated voice and data solutions including IP telephony, conferencing, and contact center technologies for modern workplaces.',
    features: [
      {
        title: 'Solutions',
        items: [
          'IP PBX Systems',
          'Video Conferencing',
          'Contact Center Solutions',
          'Mobile Collaboration'
        ]
      },
      {
        title: 'Features',
        items: [
          'Call Recording',
          'Voicemail to Email',
          'Auto Attendant',
          'CRM Integration'
        ]
      }
    ],
    benefits: [
      'Reduced communication costs',
      'Improved team collaboration',
      'Business continuity',
      'Scalable for growth'
    ]
  },
  {
    id: 'ict-security',
    title: 'ICT Security & Access Control',
    icon: 'Shield',
    tagline: 'Comprehensive protection systems',
    description: 'End-to-end security solutions including CCTV surveillance, access control, alarm systems and visitor management for complete facility protection.',
    features: [
      {
        title: 'Security Systems',
        items: [
          'CCTV Surveillance',
          'Access Control',
          'Alarm Systems',
          'Visitor Management'
        ]
      },
      {
        title: 'Additional Solutions',
        items: [
          'Gate Automation',
          'Intercom Systems',
          'Electric Fencing',
          'AI-Powered Analytics'
        ]
      }
    ],
    benefits: [
      '24/7 facility monitoring',
      'Restricted access control',
      'Incident documentation',
      'Integrated security ecosystem'
    ]
  },
  {
    id: 'wireless-communication',
    title: 'Wireless Communication Solutions',
    icon: 'Radio',
    tagline: 'Reliable radio solutions',
    description: 'Professional wireless communication systems from industry leaders like Motorola, Kenwood and Codan for critical operations.',
    features: [
      {
        title: 'Product Lines',
        items: [
          'Motorola VHF Radios',
          'Kenwood VHF/HF Radios',
          'Codan HF Radios',
          'Icom Radio Systems'
        ]
      },
      {
        title: 'Applications',
        items: [
          'Security Teams',
          'Event Coordination',
          'Industrial Sites',
          'Remote Locations'
        ]
      }
    ],
    benefits: [
      'Instant communication',
      'Wide area coverage',
      'Durable equipment',
      'Emergency readiness'
    ]
  },
  {
    id: 'video-wall',
    title: 'Video Wall Solutions',
    icon: 'Presentation',
    tagline: 'Immersive multi-display technology',
    description: 'Multi-display walls created by joining multiple screens together to display larger images or multiple content windows.',
    features: [
      {
        title: 'Technologies',
        items: [
          'LCD Panels',
          'LED Panels',
          'Projection Screens',
          'Tiled Displays'
        ]
      },
      {
        title: 'Applications',
        items: [
          'Control Rooms',
          'Digital Signage',
          'Corporate Lobbies',
          'Event Spaces'
        ]
      }
    ],
    benefits: [
      'High-impact visual displays',
      'Customizable configurations',
      'Seamless tiling technology',
      'Scalable solutions'
    ]
  },
  {
    id: 'video-conferencing',
    title: 'Video Conferencing Solutions',
    icon: 'Users',
    tagline: 'Seamless virtual collaboration',
    description: 'Comprehensive video conferencing solutions integrated with platforms like Zoom, Microsoft Teams and Google Meet.',
    features: [
      {
        title: 'Solutions',
        items: [
          'Room Systems',
          'All-in-One Units',
          'Camera Systems',
          'Audio Solutions'
        ]
      },
      {
        title: 'Integrations',
        items: [
          'Zoom Rooms',
          'Microsoft Teams',
          'Google Meet',
          'Cisco Webex'
        ]
      }
    ],
    benefits: [
      'Crystal clear audio/video',
      'Simplified scheduling',
      'Enterprise-grade security',
      'Cross-platform compatibility'
    ]
  },
  {
    id: 'queue-management',
    title: 'Queue Management Systems',
    icon: 'ClipboardList',
    tagline: 'Streamlined customer flow',
    description: 'Systems that manage customer queues efficiently while providing marketing opportunities through digital displays.',
    features: [
      {
        title: 'Components',
        items: [
          'Ticket Dispensers',
          'Digital Signage',
          'Call Forward Systems',
          'Management Software'
        ]
      },
      {
        title: 'Applications',
        items: [
          'Banks',
          'Hospitals',
          'Government Offices',
          'Retail Stores'
        ]
      }
    ],
    benefits: [
      'Reduced perceived wait times',
      'Improved customer experience',
      'Marketing opportunities',
      'Performance analytics'
    ]
  },
  {
    id: 'public-address',
    title: 'Public Address Systems',
    icon: 'Speaker',
    tagline: 'Clear audio for every space',
    description: 'Professional audio systems suitable for both indoor and outdoor environments from leading brands.',
    features: [
      {
        title: 'Components',
        items: [
          'Amplifiers',
          'Speakers',
          'Microphones',
          'Mixers'
        ]
      },
      {
        title: 'Applications',
        items: [
          'Corporate Campuses',
          'Educational Institutions',
          'Transportation Hubs',
          'Public Spaces'
        ]
      }
    ],
    benefits: [
      'Crystal clear audio',
      'Zone control capabilities',
      'Emergency notification ready',
      'Scalable solutions'
    ]
  },
  {
    id: 'baggage-inspection',
    title: 'Baggage Inspection Systems',
    icon: 'Luggage',
    tagline: 'Advanced security screening',
    description: 'Cutting-edge baggage screening solutions with real-time monitoring and precise inspection capabilities.',
    features: [
      {
        title: 'Features',
        items: [
          'X-ray Screening',
          'Threat Detection',
          'Image Processing',
          'Alarm Systems'
        ]
      },
      {
        title: 'Applications',
        items: [
          'Airports',
          'Government Buildings',
          'Corporate Offices',
          'Event Venues'
        ]
      }
    ],
    benefits: [
      'Enhanced security',
      'Quick screening process',
      'Detailed imaging',
      'Operator training included'
    ]
  },
  {
    id: 'metal-detectors',
    title: 'Walk Through Metal Detectors',
    icon: 'Search',
    tagline: 'Integrated security solutions',
    description: 'High-sensitivity metal detection with real-time monitoring and customizable sensitivity settings.',
    features: [
      {
        title: 'Features',
        items: [
          'Multi-zone Detection',
          'Adjustable Sensitivity',
          'Visual Feedback',
          'Surveillance Integration'
        ]
      },
      {
        title: 'Applications',
        items: [
          'Corporate Security',
          'Public Events',
          'Government Facilities',
          'High-Security Areas'
        ]
      }
    ],
    benefits: [
      'Non-invasive screening',
      'High detection accuracy',
      'Deterrent effect',
      'Seamless integration'
    ]
  },
  {
    id: 'cctv-solutions',
    title: 'CCTV Solutions',
    icon: 'Cctv',
    tagline: 'AI-powered surveillance',
    description: 'Advanced CCTV solutions including solar-powered and AI-enabled cameras for comprehensive security.',
    features: [
      {
        title: 'Technologies',
        items: [
          'AI Analytics',
          'Solar-Powered',
          'Wireless Options',
          'Night Vision'
        ]
      },
      {
        title: 'Applications',
        items: [
          'Perimeter Security',
          'Traffic Monitoring',
          'Retail Analytics',
          'Remote Locations'
        ]
      }
    ],
    benefits: [
      '24/7 monitoring',
      'Smart alerts',
      'Easy installation',
      'Cost-effective'
    ]
  },
  {
    id: 'people-counting',
    title: 'Real Time People Counting',
    icon: 'Users2',
    tagline: 'Data-driven space utilization',
    description: 'Accurate people counting solutions that provide valuable insights for business optimization.',
    features: [
      {
        title: 'Features',
        items: [
          'Real-time Data',
          'Historical Trends',
          'Zone Counting',
          'Dwell Time Analysis'
        ]
      },
      {
        title: 'Applications',
        items: [
          'Retail Stores',
          'Shopping Malls',
          'Transport Hubs',
          'Smart Cities'
        ]
      }
    ],
    benefits: [
      'Optimized staffing',
      'Improved space utilization',
      'Marketing effectiveness',
      'Operational efficiency'
    ]
  },
  {
    id: 'computing-solutions',
    title: 'Laptops, PCs & Computing Solutions',
    icon: 'Laptop',
    tagline: 'Business-grade hardware',
    description: 'High-performance computing solutions from trusted brands tailored for corporate, education and government use.',
    features: [
      {
        title: 'Hardware',
        items: [
          'Business Laptops',
          'Workstation PCs',
          'Thin Clients',
          'NComputing Solutions'
        ]
      },
      {
        title: 'Services',
        items: [
          'Device Provisioning',
          'Virtualization',
          'ERP Implementation',
          'IT Support'
        ]
      }
    ],
    benefits: [
      'Reliable business hardware',
      'Enterprise-grade performance',
      'Long-term durability',
      'Dedicated support'
    ]
  },
  {
    id: 'e-board',
    title: 'e-Board & Software Solutions',
    icon: 'GanttChart',
    tagline: 'Digital governance platform',
    description: 'Comprehensive board management software that streamlines meeting preparation, execution and follow-up.',
    features: [
      {
        title: 'Features',
        items: [
          'Meeting Management',
          'Document Sharing',
          'Electronic Voting',
          'Action Tracking'
        ]
      },
      {
        title: 'Modules',
        items: [
          'Prepare',
          'Monitor',
          'Decide',
          'Act'
        ]
      }
    ],
    benefits: [
      'Paperless meetings',
      'Improved governance',
      'Secure document handling',
      'Accountability tracking'
    ]
  },
  {
    id: 'erp-solutions',
    title: 'ERP Solutions',
    icon: 'Network',
    tagline: 'Integrated business management',
    description: 'Enterprise Resource Planning services that automate back office functions across your organization.',
    features: [
      {
        title: 'Modules',
        items: [
          'Finance',
          'HR',
          'Supply Chain',
          'Customer Relations'
        ]
      },
      {
        title: 'Benefits',
        items: [
          'Process Automation',
          'Data Centralization',
          'Real-time Reporting',
          'Regulatory Compliance'
        ]
      }
    ],
    benefits: [
      'Operational efficiency',
      'Reduced costs',
      'Better decision making',
      'Scalable solutions'
    ]
  },
  {
    id: 'ncomputing',
    title: 'NComputing Solutions',
    icon: 'Cpu',
    tagline: 'Virtualized computing power',
    description: 'Cost-effective virtualization solutions that simplify desktop deployment and management.',
    features: [
      {
        title: 'Solutions',
        items: [
          'vSpace Pro',
          'RX-HDX',
          'L300',
          'X550'
        ]
      },
      {
        title: 'Applications',
        items: [
          'Education',
          'Call Centers',
          'Government',
          'Healthcare'
        ]
      }
    ],
    benefits: [
      'Reduced hardware costs',
      'Lower energy consumption',
      'Centralized management',
      'Easy scalability'
    ]
  },
  {
    id: 'headsphones',
    title: 'Headsets',
    icon: 'Headphones',
    tagline: 'Professional audio solutions',
    description: 'Comprehensive range of headset solutions for office, contact center and professional use.',
    features: [
      {
        title: 'Types',
        items: [
          'Bluetooth Headsets',
          'Contact Center',
          'Office Headsets',
          'Gaming Headsets'
        ]
      },
      {
        title: 'Brands',
        items: [
          'Jabra',
          'Plantronics',
          'Sennheiser',
          'Logitech'
        ]
      }
    ],
    benefits: [
      'Crystal clear audio',
      'Comfortable designs',
      'Noise cancellation',
      'Durable construction'
    ]
  },
  {
    id: 'interactive-screens',
    title: 'Interactive LED Screens',
    icon: 'BookOpen',
    tagline: 'Engaging display technology',
    description: 'Interactive displays that transform collaboration and presentation experiences.',
    features: [
      {
        title: 'Features',
        items: [
          'Touch Capability',
          '4K Resolution',
          'Multi-user Support',
          'Annotation Tools'
        ]
      },
      {
        title: 'Applications',
        items: [
          'Education',
          'Corporate Training',
          'Design Studios',
          'Control Rooms'
        ]
      }
    ],
    benefits: [
      'Enhanced collaboration',
      'Intuitive interaction',
      'Vibrant displays',
      'Versatile mounting'
    ]
  }
];

// Helper function to get service by ID
export const getServiceById = (id: string): Service => {
  const service = SERVICES.find(service => service.id === id);
  if (!service) throw new Error(`Service "${id}" not found`);
  return service;
};

// Generate paths for static generation
export const getAllServicePaths = () => {
  return SERVICES.map(service => ({
    params: { id: service.id }
  }));
};

// Helper function to get icon component
// Type-safe icon mapping
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Monitor,
  Building,
  Server,
  Phone,
  Shield,
  Radio,
  Users,
  Zap,
  Laptop,
  Headphones,
  Cctv,
  Cpu,
  Scan,
  GanttChart,
  Speaker,
  Luggage,
  Search,
  Users2,
  ClipboardList,
  Network,
  Presentation,
  BookOpen
};

export const getServiceIcon = (iconName: string): React.ReactElement | null => {
  const IconComponent = iconMap[iconName];
  return IconComponent 
    ? React.createElement(IconComponent, { className: "w-6 h-6" }) 
    : null;
};