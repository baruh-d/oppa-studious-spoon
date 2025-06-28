import { SERVICES } from './services';

export const SERVICE_CATEGORIES = [
  {
    id: 'ict-infrastructure',
    title: 'ICT Infrastructure',
    icon: 'Server',
    description: 'Comprehensive network and computing infrastructure solutions',
    services: [
      SERVICES.find(s => s.id === 'structured-cabling')!,
      SERVICES.find(s => s.id === 'ncomputing')!,
      SERVICES.find(s => s.id === 'computing-solutions')!,
      SERVICES.find(s => s.id === 'wireless-communication')!,
      SERVICES.find(s => s.id === 'headsphones')!
    ]
  },
  {
    id: 'security-solutions',
    title: 'Security Solutions',
    icon: 'Shield',
    description: 'End-to-end physical and digital security systems',
    services: [
      SERVICES.find(s => s.id === 'ict-security')!,
      SERVICES.find(s => s.id === 'cctv-solutions')!,
      SERVICES.find(s => s.id === 'metal-detectors')!,
      SERVICES.find(s => s.id === 'baggage-inspection')!
    ]
  },
  {
    id: 'communication-av',
    title: 'Communication & AV',
    icon: 'Monitor',
    description: 'Modern audio-visual and collaborative tech for communication',
    services: [
      SERVICES.find(s => s.id === 'audio-visual')!,
      SERVICES.find(s => s.id === 'video-wall')!,
      SERVICES.find(s => s.id === 'video-conferencing')!,
      SERVICES.find(s => s.id === 'interactive-screens')!,
      SERVICES.find(s => s.id === 'public-address')!,
      SERVICES.find(s => s.id === 'unified-communications')!
    ]
  },
  {
    id: 'automation-smart-tech',
    title: 'Automation & Smart Tech',
    icon: 'Cpu',
    description: 'Enhancing convenience, security and energy efficiency',
    services: [
      SERVICES.find(s => s.id === 'home-office-automation')!
    ]
  },
  {
    id: 'people-engagement',
    title: 'People & Engagement',
    icon: 'Users2',
    description: 'Solutions for managing public interaction and data',
    services: [
      SERVICES.find(s => s.id === 'queue-management')!,
      SERVICES.find(s => s.id === 'people-counting')!
    ]
  },
  {
    id: 'software-enterprise',
    title: 'Software & Enterprise Solutions',
    icon: 'GanttChart',
    description: 'Productivity and automation software for businesses',
    services: [
      SERVICES.find(s => s.id === 'e-board')!,
      SERVICES.find(s => s.id === 'erp-solutions')!
    ]
  }
] as const;
