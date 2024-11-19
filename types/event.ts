export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  image?: string;
  attendees: number;
  organizer: {
    name: string;
    email: string;
  };
}
