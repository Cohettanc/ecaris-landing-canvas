
export type Office = {
  id: number;
  city: string;
  address: string;
  flagEmoji: string;
  coordinates: [number, number]; // [longitude, latitude]
  image: string;
};

export const offices: Office[] = [
  {
    id: 1,
    city: 'Luxembourg',
    address: '70, route d\'Esch\n1470 Luxembourg\nLUXEMBOURG',
    flagEmoji: '🇱🇺',
    coordinates: [6.1296, 49.6116],
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    city: 'Paris',
    address: '78 avenue des Champs Elysées\n75008\nParis\nFRANCE',
    flagEmoji: '🇫🇷',
    coordinates: [2.3522, 48.8566],
    image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    city: 'Geneva',
    address: '15 route de Ferney\n1202 Geneva\nSWITZERLAND',
    flagEmoji: '🇨🇭',
    coordinates: [6.1432, 46.2044],
    image: "https://images.unsplash.com/photo-1577132731273-89a6f3845ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    city: 'London',
    address: '20 Fenchurch Street\nLondon EC3M 3BY\nUNITED KINGDOM',
    flagEmoji: '🇬🇧',
    coordinates: [-0.0828, 51.5074],
    image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    city: 'Berlin',
    address: 'Friedrichstraße 76\n10117 Berlin\nGERMANY',
    flagEmoji: '🇩🇪',
    coordinates: [13.3833, 52.5167],
    image: "https://images.unsplash.com/photo-1560930950-5cc20e80e392?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
];
