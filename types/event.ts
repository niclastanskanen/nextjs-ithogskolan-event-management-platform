export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  image?: string;
  organizer: {
    name: string;
    email: string;
  };
  url?: string;
  priceRange?: {
    min: number;
    max: number;
    currency: string;
  };
}
