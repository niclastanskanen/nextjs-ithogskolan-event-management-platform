import axios from "axios";
import { Event } from "@/types/event";

const BASE_URL = "https://app.ticketmaster.com/discovery/v2";

export async function getEvents(
  keyword?: string,
  startDate?: string
): Promise<Event[]> {
  try {
    const TICKETMASTER_API_KEY = process.env.NEXT_PUBLIC_TICKETMASTER_API_KEY;

    if (!TICKETMASTER_API_KEY) {
      throw new Error(
        "Ticketmaster API key is not set in environment variables."
      );
    }

    const params: Record<string, string> = {
      apikey: TICKETMASTER_API_KEY,
      size: "20",
    };

    if (keyword) params.keyword = keyword;
    if (startDate) params.startDateTime = `${startDate}T00:00:00Z`;

    const { data } = await axios.get(`${BASE_URL}/events.json`, { params });

    if (!data._embedded?.events) {
      return [];
    }

    return data._embedded.events.map((event: any) => ({
      id: event.id,
      title: event.name,
      description:
        event.description || event.info || "No description available",
      date: event.dates.start.dateTime,
      location: event._embedded?.venues?.[0]?.name || "Location TBA",
      image: event.images?.[0]?.url,
      organizer: {
        name: event.promoter?.name || "Event Organizer",
        email: "contact@eventhub.com",
      },
      url: event.url,
      priceRange: event.priceRanges?.[0]
        ? {
            min: event.priceRanges[0].min,
            max: event.priceRanges[0].max,
            currency: event.priceRanges[0].currency,
          }
        : undefined,
    }));
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
}
