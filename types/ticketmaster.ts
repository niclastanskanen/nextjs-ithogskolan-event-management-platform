export interface TicketmasterEvent {
  id: string;
  name: string;
  description?: string;
  info?: string;
  dates: {
    start: {
      dateTime: string;
    };
  };
  _embedded?: {
    venues?: Array<{
      name: string;
    }>;
  };
  images?: Array<{
    url: string;
  }>;
  promoter?: {
    name: string;
  };
  url: string;
  priceRanges?: Array<{
    min: number;
    max: number;
    currency: string;
  }>;
}

export interface TicketmasterPrice {
  type: string;
  currency: string;
  min: number;
  max: number;
}
