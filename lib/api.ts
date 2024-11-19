import axios from "axios";
import { Event, EventDetails } from "@/types/event";

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

export async function getEventDetails(
  eventId: string
): Promise<EventDetails | null> {
  try {
    const TICKETMASTER_API_KEY = process.env.NEXT_PUBLIC_TICKETMASTER_API_KEY;

    if (!TICKETMASTER_API_KEY) {
      throw new Error(
        "Ticketmaster API key is not set in environment variables."
      );
    }

    const { data: event } = await axios.get(`${BASE_URL}/events/${eventId}`, {
      params: {
        apikey: TICKETMASTER_API_KEY,
      },
    });

    return {
      id: event.id,
      title: event.name,
      description:
        event.description || event.info || "No description available",
      date: event.dates.start.dateTime,
      location: event._embedded?.venues?.[0]?.name || "Location TBA",
      image: event.images?.[0]?.url,
      venue: event._embedded?.venues?.[0]
        ? {
            name: event._embedded.venues[0].name,
            address: {
              line1: event._embedded.venues[0].address?.line1,
              line2: event._embedded.venues[0].address?.line2,
              city: event._embedded.venues[0].city?.name,
              state: event._embedded.venues[0].state?.name,
              postalCode: event._embedded.venues[0].postalCode,
              country: event._embedded.venues[0].country?.name,
            },
            location: {
              latitude: event._embedded.venues[0].location?.latitude,
              longitude: event._embedded.venues[0].location?.longitude,
            },
            generalInfo: event._embedded.venues[0].generalInfo?.generalRule,
            parkingInfo: event._embedded.venues[0].parkingDetail,
          }
        : undefined,
      startDate: event.dates.start.localDate,
      startTime: event.dates.start.localTime,
      status: event.dates.status?.code,
      timezone: event.dates.timezone,
      priceRanges: event.priceRanges?.map((price: any) => ({
        type: price.type,
        currency: price.currency,
        min: price.min,
        max: price.max,
      })),
      ticketLimit: event.ticketLimit?.info,
      ageRestrictions: event.ageRestrictions?.legalAgeEnforced
        ? "18+"
        : undefined,
      doorTime: event.dates.doorTime,
      pleaseNote: event.pleaseNote,
      accessibility: event.accessibility?.info,
      ticketingInfo: {
        url: event.url,
        onSaleStatus: event.dates.status?.code,
        onSaleStartDate: event.sales?.public?.startDateTime,
        onSaleEndDate: event.sales?.public?.endDateTime,
      },
      seatmap: event.seatmap?.staticUrl,
      organizer: {
        name: event.promoter?.name || "Event Organizer",
        description: event.promoter?.description,
        email: "contact@eventhub.com",
      },
    };
  } catch (error) {
    console.error("Error fetching event details:", error);
    return null;
  }
}
