
export interface Office {
  id: string;
  title: string;
  city: string;
  address: string[];
  coordinates: [number, number]; // [longitude, latitude]
  image: string;
}

export const offices: Office[] = [
  {
    id: "luxembourg",
    title: "Main Office (Luxembourg)",
    city: "Luxembourg",
    address: ["70, route d'Esch", "1470 Luxembourg", "LUXEMBOURG"],
    coordinates: [6.119735, 49.601451], // Updated Luxembourg coordinates [longitude, latitude]
    image: "/lovable-uploads/be172d23-d8ae-44b5-8647-63dc27d0ea1f.png", // Updated to use the new Luxembourg image
  },
  {
    id: "paris",
    title: "Representative Office (Paris)",
    city: "Paris",
    address: ["78 avenue des Champs Elysées", "75008 Paris", "FRANCE"],
    coordinates: [2.304120, 48.871705], // Updated Paris coordinates [longitude, latitude]
    image: "/lovable-uploads/bbbd0569-3b9a-4cc6-8901-915388c2d3d5.png", // Updated to use the new Paris image with aerial view of Arc de Triomphe
  }
];

export const getOfficeById = (id: string): Office | undefined => {
  return offices.find(office => office.id === id);
};
