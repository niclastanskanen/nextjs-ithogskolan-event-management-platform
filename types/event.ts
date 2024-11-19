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

export interface EventDetails {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  image?: string;
  venue?: {
    name: string;
    address: {
      line1?: string;
      line2?: string;
      city?: string;
      state?: string;
      postalCode?: string;
      country?: string;
    };
    location?: {
      latitude?: string;
      longitude?: string;
    };
    generalInfo?: string;
    parkingInfo?: string;
  };
  startDate?: string;
  startTime?: string;
  status?: string;
  timezone?: string;
  priceRanges?: Array<{
    type: string;
    currency: string;
    min: number;
    max: number;
  }>;
  ticketLimit?: string;
  ageRestrictions?: string;
  doorTime?: string;
  pleaseNote?: string;
  accessibility?: string;
  ticketingInfo: {
    url: string;
    onSaleStatus?: string;
    onSaleStartDate?: string;
    onSaleEndDate?: string;
  };
  seatmap?: string;
  organizer: {
    name: string;
    description?: string;
    email: string;
  };
}
