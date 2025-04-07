
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
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "paris",
    title: "Representative Office (Paris)",
    city: "Paris",
    address: ["78 avenue des Champs Elysées", "75008 Paris", "FRANCE"],
    coordinates: [2.304120, 48.871705], // Updated Paris coordinates [longitude, latitude]
    image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", // Arc de Triomphe image
  }
];

export const getOfficeById = (id: string): Office | undefined => {
  return offices.find(office => office.id === id);
};
