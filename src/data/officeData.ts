
import { OfficeData } from '@/components/OfficePageLayout';

export const offices: OfficeData[] = [
  {
    id: 1,
    city: 'Luxembourg',
    country: 'LUXEMBOURG',
    address: ['70, route d\'Esch', '1470 Luxembourg'],
    flagEmoji: '🇱🇺',
    coordinates: {
      longitude: 6.1296,
      latitude: 49.6116
    },
    contactInfo: {
      phone: '+352 123 456 789',
      email: 'luxembourg@ecaris.com',
      hours: 'Monday - Friday: 9:00 AM - 6:00 PM'
    },
    description: 'Our headquarters in Luxembourg serves as the main hub for our European operations. From here, we coordinate our consulting services across the continent and provide strategic solutions to our most important clients.'
  },
  {
    id: 2,
    city: 'Paris',
    country: 'FRANCE',
    address: ['78 avenue des Champs Elysées', '75008 Paris'],
    flagEmoji: '🇫🇷',
    coordinates: {
      longitude: 2.3076,
      latitude: 48.8709
    },
    contactInfo: {
      phone: '+33 1 23 45 67 89',
      email: 'paris@ecaris.com',
      hours: 'Monday - Friday: 9:00 AM - 6:00 PM'
    },
    description: 'Our Paris office, located on the prestigious Champs-Elysées, serves as our French hub. Here, our team of consultants brings expertise in ERP implementations, cloud solutions, and digital transformation to the French market.'
  },
  {
    id: 3,
    city: 'Geneva',
    country: 'SWITZERLAND',
    address: ['15 route de Ferney', '1202 Geneva'],
    flagEmoji: '🇨🇭',
    coordinates: {
      longitude: 6.1418,
      latitude: 46.2165
    },
    contactInfo: {
      phone: '+41 22 345 67 89',
      email: 'geneva@ecaris.com',
      hours: 'Monday - Friday: 9:00 AM - 5:30 PM'
    },
    description: 'Our Geneva office provides specialized consulting services to international organizations and financial institutions. Located near international organizations, we leverage our expertise to deliver innovative solutions to complex challenges.'
  },
  {
    id: 4,
    city: 'London',
    country: 'UNITED KINGDOM',
    address: ['20 Fenchurch Street', 'London EC3M 3BY'],
    flagEmoji: '🇬🇧',
    coordinates: {
      longitude: -0.0838,
      latitude: 51.5111
    },
    contactInfo: {
      phone: '+44 20 3456 7890',
      email: 'london@ecaris.com',
      hours: 'Monday - Friday: 8:30 AM - 5:30 PM'
    },
    description: 'Located in the heart of London\'s financial district, our UK office specializes in financial services consulting, regulatory compliance, and data governance solutions for clients across the United Kingdom and beyond.'
  },
  {
    id: 5,
    city: 'Berlin',
    country: 'GERMANY',
    address: ['Friedrichstraße 76', '10117 Berlin'],
    flagEmoji: '🇩🇪',
    coordinates: {
      longitude: 13.3888,
      latitude: 52.5170
    },
    contactInfo: {
      phone: '+49 30 1234 5678',
      email: 'berlin@ecaris.com',
      hours: 'Monday - Friday: 9:00 AM - 6:00 PM'
    },
    description: 'Our Berlin office focuses on technology innovation and digital transformation. From this central European location, we serve clients across Germany and Eastern Europe with expertise in data management and IT strategy.'
  },
];

// Helper function to find an office by city (URL-friendly format)
export const getOfficeByCity = (citySlug: string): OfficeData | undefined => {
  const normalizedSlug = citySlug.toLowerCase();
  return offices.find(office => office.city.toLowerCase() === normalizedSlug);
};
